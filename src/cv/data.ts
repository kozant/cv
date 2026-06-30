import type { CvProfile } from "./types";

/** Source: text from «FRONTEND - ANTON KAZLOU.pdf» (ANTON_KAZLOU_FRONTEND.pdf had no text layer). */

export const content = {
  EN: {
    cvSectionTitle: "CV",
    skillsSectionTitle: "Skills",
    languagesSectionTitle: "Languages",
    commercialExperienceSectionTitle: "Commercial Experience",
    petExperienceSectionTitle: "Pet Experience",
    educationSectionTitle: "Education",
    contactSectionTitle: "Contact",
  },
  RU: {
    cvSectionTitle: "Резюме",
    skillsSectionTitle: "Навыки",
    languagesSectionTitle: "Языки",
    commercialExperienceSectionTitle: "Коммерческий опыт",
    petExperienceSectionTitle: "Учебный опыт",
    educationSectionTitle: "Образование",
    contactSectionTitle: "Способ связи",
  },
  BY: {
    cvSectionTitle: "Рэзюме",
    skillsSectionTitle: "Навыкі",
    languagesSectionTitle: "Мовы",
    commercialExperienceSectionTitle: "Камерцыйны вопыт",
    petExperienceSectionTitle: "Навучальны вопыт",
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
  languages: [
    "English - Intermediate+ (B1+)",
    "Russian - Native",
    "Belarusian - Native",
  ],
  commercialExperience: [
    {
      role: "CRM Platform",
      company: "Imbue Systems",
      period: "Dec 2020 - Sep 2024",
      description:
        "Enterprise CRM platform for managing customer relationships, sales and logistics with a highly configurable interface for different business clients.",
      highlights: [
        "Developed new React components and business features.",
        "Built administrative interfaces for configuring customer-specific views.",
        "Implemented filtering, searching, forms, validation, drag-and-drop, and import/export functionality.",
        "Worked with Redux, React Hook Form, Material UI, Flow and React Testing Library.",
        "Wrote unit tests, participated in code reviews and legacy code refactoring.",
      ],
    },
    {
      role: "Dental Platform",
      company: "Imbue Systems",
      period: "Sep 2024 - Jan 2026",
      description:
        "Healthcare platform for dental clinics that helps manage patients, appointments and business analytics through configurable dashboards and KPI visualizations.",
      highlights: [
        "Developed Grid View, Daily View and Entity View components.",
        "Built interfaces for displaying patients, appointments and KPI dashboards.",
        "Implemented reusable React components and applied design patterns (Composite).",
        "Collaborated with product managers to clarify requirements and improve user experience.",
        "Optimized rendering performance and participated in architectural discussions.",
      ],
    },
  ],
  petExperience: [
    {
      role: "Task Manager",
      period: "May 2026 - Current",
      description: "Trello-inspired Kanban app for React ecosystem practice.",
      highlights: [
        "Built a Kanban board with drag-and-drop using dnd-kit.",
        "Implemented board, column and task management.",
        "Used React, TypeScript, Zustand, React Hook Form and Tailwind CSS.",
        "Currently adding filtering, searching, tags and backend integration.",
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
  languages: [
    "Английский - Intermediate+ (B1+)",
    "Русский - родной",
    "Белорусский - родной",
  ],
  commercialExperience: [
    {
      role: "CRM Platform",
      company: "Imbue Systems",
      period: "Дек 2020 - Сен 2024",
      description:
        "Корпоративная CRM-платформа для управления взаимоотношениями с клиентами, продажами и логистикой с гибко настраиваемым интерфейсом для различных бизнес-клиентов.",
      highlights: [
        "Разрабатывал новые React-компоненты и бизнес-функциональность.",
        "Создавал административные интерфейсы для настройки отображения данных под клиентов.",
        "Реализовывал фильтрацию, поиск, формы, валидацию, drag-and-drop, импорт и экспорт данных.",
        "Работал с Redux, React Hook Form, Material UI, Flow и React Testing Library.",
        "Писал unit-тесты, участвовал в code review и рефакторинге legacy-кода.",
      ],
    },
    {
      role: "Dental Platform",
      company: "Imbue Systems",
      period: "Сен 2024 - Янв 2026",
      description:
        "Платформа для стоматологических клиник, предназначенная для управления пациентами, приёмами и бизнес-аналитикой с помощью настраиваемых панелей и KPI.",
      highlights: [
        "Разрабатывал компоненты Grid View, Daily View и Entity View.",
        "Создавал интерфейсы для отображения пациентов, приёмов и KPI.",
        "Разрабатывал переиспользуемые React-компоненты и применял паттерны проектирования (Composite).",
        "Взаимодействовал с менеджерами продукта для уточнения требований и улучшения пользовательского опыта.",
        "Оптимизировал производительность интерфейса и участвовал в обсуждении архитектурных решений.",
      ],
    },
  ],
  petExperience: [
    {
      role: "Task Manager",
      period: "Май 2026 - настоящее время",
      description: "Личный проект — Kanban-доска, вдохновлённая Trello.",
      highlights: [
        "Реализовал Kanban-доску с поддержкой drag-and-drop на базе dnd-kit.",
        "Разработал управление досками, колонками и задачами.",
        "Использовал React, TypeScript, Zustand, React Hook Form и Tailwind CSS.",
        "В настоящее время реализую фильтрацию, поиск, теги и интеграцию с backend.",
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
  languages: [
    "Англійская - Intermediate+ (B1+)",
    "Руская - родная",
    "Беларуская - родная",
  ],
  commercialExperience: [
    {
      role: "CRM Platform",
      company: "Imbue Systems",
      period: "Снеж 2020 - Вер 2024",
      description:
        "Карпаратыўная CRM-платформа для кіравання ўзаемаадносінамі з кліентамі, продажамі і лагістыкай з гнутка наладжвальным інтэрфейсам для розных бізнес-кліентаў.",
      highlights: [
        "Распрацоўваў новыя React-кампаненты і бізнес-функцыянальнасць.",
        "Ствараў адміністрацыйныя інтэрфейсы для наладкі адлюстравання даных пад кліентаў.",
        "Рэалізоўваў фільтрацыю, пошук, формы, валідацыю, drag-and-drop, імпарт і экспарт даных.",
        "Працаваў з Redux, React Hook Form, Material UI, Flow і React Testing Library.",
        "Пісаў unit-тэсты, удзельнічаў у code review і рэфактарынгу legacy-кода.",
      ],
    },
    {
      role: "Dental Platform",
      company: "Imbue Systems",
      period: "Вер 2024 - Студ 2026",
      description:
        "Платформа для стаматалагічных клінік, прызначаная для кіравання пацыентамі, запісамі і бізнес-аналітыкай з выкарыстаннем наладжвальных панэляў і KPI.",
      highlights: [
        "Распрацоўваў кампаненты Grid View, Daily View і Entity View.",
        "Ствараў інтэрфейсы для адлюстравання пацыентаў, запісаў і KPI.",
        "Распрацоўваў паўторна выкарыстоўваныя React-кампаненты і прымяняў шаблоны праектавання (Composite).",
        "Узаемадзейнічаў з менеджарамі прадукту для ўдакладнення патрабаванняў і паляпшэння карыстальніцкага досведу.",
        "Аптымізаваў прадукцыйнасць інтэрфейсу і ўдзельнічаў у абмеркаванні архітэктурных рашэнняў.",
      ],
    },
  ],
  petExperience: [
    {
      role: "Task Manager",
      period: "Май 2026 - цяперашні час",
      description: "Асабісты праект — Kanban-дошка, натхнёная Trello.",
      highlights: [
        "Рэалізаваў Kanban-дошку з падтрымкай drag-and-drop на базе dnd-kit.",
        "Распрацаваў кіраванне дошкамі, калонкамі і задачамі.",
        "Выкарыстоўваў React, TypeScript, Zustand, React Hook Form і Tailwind CSS.",
        "Зараз рэалізую фільтрацыю, пошук, тэгі і інтэграцыю з backend.",
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
