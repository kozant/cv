import type { CvProfile } from "./types";

/** Source: text from «FRONTEND - ANTON KAZLOU.pdf» (ANTON_KAZLOU_FRONTEND.pdf had no text layer). */

export const content = {
  EN: {
    cvSectionTitle: "CV",
    skillsSectionTitle: "Skills",
    languagesSectionTitle: "Languages",
    experienceSectionTitle: "Experience",
    educationSectionTitle: "Education",
    contactSectionTitle: "Contact",
  },
  RU: {
    cvSectionTitle: "Резюме",
    skillsSectionTitle: "Навыки",
    languagesSectionTitle: "Языки",
    experienceSectionTitle: "Опыт",
    educationSectionTitle: "Образование",
    contactSectionTitle: "Способ связи",
  },
  BY: {
    cvSectionTitle: "Рэзюме",
    skillsSectionTitle: "Навыкі",
    languagesSectionTitle: "Мовы",
    experienceSectionTitle: "Вопыт",
    educationSectionTitle: "Адукацыя",
    contactSectionTitle: "Спосаб сувязі",
  },
};

export const enCvProfile: CvProfile = {
  label: "Frontend",
  name: "Anton Kazlou",
  title: "Frontend Engineer",
  headline:
    "React, Redux, TypeScript · High-Performance UI & Real-time Systems",
  summary: `Results-driven Middle Frontend Developer with 5+ years of experience building
modern, responsive, and user-friendly web applications.

Proficient in JavaScript, TypeScript, and modern frameworks, with strong
expertise in performance optimization and clean architecture.

Experienced in implementing new functionality from UI/UX designs,
maintaining stable codebases, and collaborating closely with cross-functional
teams.

Practical background in AI tools and AWS infrastructure.`,
  skills: [
    "React",
    "Redux",
    "TypeScript",
    "JavaScript",
    "SCSS / CSS",
    "Responsive UI & Accessibility",
    "Unit Testing (Jest/Vitest)",
    "Git",
    "AWS",
    "CI/CD",
  ],
  languages: ["English", "Russian", "Belarusian"],
  experience: [
    {
      role: "FRONTEND DEVELOPER",
      company: "Imbue Systems",
      period: "Dec 2020 - Jan 2026",
      highlights: [
        "Developed and implemented new user-centered features from UI/UX designs using ReactJS, enhancing user experience and increasing customer satisfaction",
        "Maintained and refactored existing codebase for performance and stability",
        "Actively facilitated collaboration between support, design, and development teams to clarify requirements and deliver cross-functional solutions",
        "Performed manual testing and debugging of new modules",
        "Worked with AWS services at an introductory level, including managing basic records in DynamoDB, checking pipeline and work ow statuses in CodePipeline and Step Functions",
      ],
    },
  ],
  education: [
    {
      place: "Belarusian State University, Minsk",
      degree: "Bachelor's degree",
      period: "2016 — 2020",
    },
  ],
  contacts: [
    {
      label: "Email",
      value: "anton.s.kazlou@gmail.com",
      href: "mailto:anton.s.kazlou@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/anton-kazlou-081838134",
      href: "https://www.linkedin.com/in/anton-kazlou-081838134",
    },
    {
      label: "Telegram",
      value: "@antonkozlovv",
      href: "https://t.me/antonkozlovv",
    },
  ],
};

export const ruCvProfile: CvProfile = {
  label: "Фронтенд",
  name: "Антон Козлов",
  title: "Frontend Engineer",
  headline:
    "React, Redux, TypeScript · High-Performance UI & Real-time Systems",
  summary: `Ориентированный на результат Middle Frontend Developer с более чем 5-летним опытом разработки
современных, адаптивных и удобных веб-приложений.

Уверенно владею JavaScript, TypeScript и современными фреймворками, обладаю
сильной экспертизой в оптимизации производительности и построении чистой архитектуры.

Имею опыт внедрения новой функциональности по UI/UX макетам,
поддержки стабильной кодовой базы и тесного взаимодействия с кросс-функциональными командами.

Практический опыт работы с AI-инструментами и AWS инфраструктурой.`,
  skills: [
    "React",
    "Redux",
    "TypeScript",
    "JavaScript",
    "SCSS / CSS",
    "Responsive UI & Accessibility",
    "Unit Testing (Jest/Vitest)",
    "Git",
    "AWS",
    "CI/CD",
  ],
  languages: ["Английский", "Русский", "Белорусский"],
  experience: [
    {
      role: "FRONTEND DEVELOPER",
      company: "Imbue Systems",
      period: "Дек 2020 - Янв 2026",
      highlights: [
        "Разрабатывал и внедрял новые пользовательские функции по UI/UX макетам с использованием ReactJS, улучшая пользовательский опыт и повышая удовлетворённость клиентов",
        "Поддерживал и рефакторил существующую кодовую базу для повышения производительности и стабильности",
        "Активно координировал взаимодействие между support, design и development командами для уточнения требований и поставки комплексных решений",
        "Проводил ручное тестирование и отладку новых модулей",
        "Работал с сервисами AWS на базовом уровне: управление записями в DynamoDB, проверка pipeline и workflow статусов в CodePipeline и Step Functions",
      ],
    },
  ],
  education: [
    {
      place: "Белорусский государственный университет, Минск",
      degree: "Степень бакалавра",
      period: "2016 — 2020",
    },
  ],
  contacts: [
    {
      label: "Email",
      value: "anton.s.kazlou@gmail.com",
      href: "mailto:anton.s.kazlou@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/anton-kazlou-081838134",
      href: "https://www.linkedin.com/in/anton-kazlou-081838134",
    },
    {
      label: "Telegram",
      value: "@antonkozlovv",
      href: "https://t.me/antonkozlovv",
    },
  ],
};

export const byCvProfile: CvProfile = {
  label: "Фронтэнд",
  name: "Антон Казлоў",
  title: "Frontend Engineer",
  headline:
    "React, Redux, TypeScript · High-Performance UI & Real-time Systems",
  summary: `Middle Frontend Developer, арыентаваны на вынік, з больш чым 5-гадовым вопытам распрацоўкі
сучасных, адаптыўных і зручных вэб-прыкладанняў.

Добра валодаю JavaScript, TypeScript і сучаснымі фрэймворкамі, маю
моцную экспертызу ў аптымізацыі прадукцыйнасці і пабудове чыстай архітэктуры.

Маю досвед укаранення новай функцыянальнасці па UI/UX макетах,
падтрымцы стабільнай кодавай базы і цесным супрацоўніцтве з крос-функцыянальнымі камандамі.

Практычны досвед працы з AI-інструментамі і AWS інфраструктурай.`,
  skills: [
    "React",
    "Redux",
    "TypeScript",
    "JavaScript",
    "SCSS / CSS",
    "Responsive UI & Accessibility",
    "Unit Testing (Jest/Vitest)",
    "Git",
    "AWS",
    "CI/CD",
  ],
  languages: ["Англійская", "Руская", "Беларуская"],
  experience: [
    {
      role: "FRONTEND DEVELOPER",
      company: "Imbue Systems",
      period: "Снеж 2020 - Студ 2026",
      highlights: [
        "Распрацоўваў і ўкараняў новыя карыстальніцкія функцыі па UI/UX макетах з выкарыстаннем ReactJS, паляпшаючы карыстальніцкі досвед і задаволенасць кліентаў",
        "Падтрымліваў і рэфактарыў існуючую кодавую базу для павышэння прадукцыйнасці і стабільнасці",
        "Актыўна арганізоўваў узаемадзеянне паміж support, design і development камандамі для ўдакладнення патрабаванняў і пастаўкі комплексных рашэнняў",
        "Праводзіў ручное тэсціраванне і адладку новых модуляў",
        "Працаваў з сэрвісамі AWS на базавым узроўні: кіраванне запісамі ў DynamoDB, праверка pipeline і workflow статусаў у CodePipeline і Step Functions",
      ],
    },
  ],
  education: [
    {
      place: "Беларускі дзяржаўны ўніверсітэт, Мінск",
      degree: "Ступень бакалаўра",
      period: "2016 — 2020",
    },
  ],
  contacts: [
    {
      label: "Email",
      value: "anton.s.kazlou@gmail.com",
      href: "mailto:anton.s.kazlou@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/anton-kazlou-081838134",
      href: "https://www.linkedin.com/in/anton-kazlou-081838134",
    },
    {
      label: "Telegram",
      value: "@antonkozlovv",
      href: "https://t.me/antonkozlovv",
    },
  ],
};

export const cvProfiles = {
  EN: enCvProfile,
  RU: ruCvProfile,
  BY: byCvProfile,
};
