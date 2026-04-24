import html2pdf from "html2pdf.js";

function waitForPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

export async function exportCvToPdf(
  element: HTMLElement,
  filename: string,
): Promise<void> {
  if (!element) {
    throw new Error("Element to export not found");
  }

  if (!filename) {
    throw new Error("Filename is required");
  }

  const root = document.documentElement;
  root.classList.add("pdf-export-capture");

  try {
    await waitForPaint();

    const bgColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--bg")
      .trim();

    const opt = {
      margin: [8, 8, 8, 8] as [number, number, number, number],
      filename,
      image: { type: "jpeg" as const, quality: 0.95 },
      /* avoid-all creates huge gaps; css/legacy only respect explicit break rules below */
      pagebreak: {
        mode: ["css", "legacy"],
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: bgColor,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait" as const,
      },
      enableLinks: true,
    };

    await html2pdf().set(opt).from(element).save();
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Unknown error occurred during PDF export";
    throw new Error(`Failed to export PDF: ${errorMessage}`);
  } finally {
    root.classList.remove("pdf-export-capture");
  }
}
