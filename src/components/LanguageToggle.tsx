import * as React from "react";
import { styled } from "@mui/material/styles";
import ToggleButton, { toggleButtonClasses } from "@mui/material/ToggleButton";
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from "@mui/material/ToggleButtonGroup";
import type { Lang } from "../cv/types";

export default function LanguageToggle({
  value,
  onChange,
}: {
  value: Lang;
  onChange: (lang: Lang) => void;
}) {
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newValue: Lang | null,
  ) => {
    if (newValue !== null) {
      onChange(newValue);
    }
  };

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
    [`& .${toggleButtonClasses.root}`]: {
      border: "var(--toggle-border)",
      fontFamily: "Inter",
      height: "40px",
      color: "var(--text)",
    },

    [`& .${toggleButtonClasses.root}:hover`]: {
      backgroundColor: "var(--accent-soft)",
    },

    [`& .${toggleButtonClasses.root}.Mui-selected`]: {
      background: "var(--accent)",
      color: "var(--surface)",
    },

    [`& .${toggleButtonClasses.root}.Mui-selected:hover`]: {
      background: "var(--accent)",
    },
    [`& .${toggleButtonGroupClasses.firstButton}`]: {
      borderRadius: "50% 0 0 50%;",
    },
    [`& .${toggleButtonGroupClasses.lastButton}`]: {
      borderRadius: "0 50% 50% 0;",
    },
  }));

  return (
    <StyledToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Language selection"
    >
      <ToggleButton value="EN" aria-label="left aligned">
        EN
      </ToggleButton>
      <ToggleButton value="RU" aria-label="centered">
        RU
      </ToggleButton>
      <ToggleButton value="BY" aria-label="right aligned">
        BY
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
}
