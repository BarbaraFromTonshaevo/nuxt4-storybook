# 🌍 Planet BAM

Frontend-приложение, построенное на современном стеке:

* Nuxt 4
* Vue 3
* Pinia
* Storybook 10
* ESLint 9
* Prettier 3

---

# 📦 Tech Stack

| Layer            | Technology |
| ---------------- | ---------- |
| Framework        | Nuxt 4     |
| UI               | Vue 3      |
| State Management | Pinia      |
| Component Dev    | Storybook  |
| Linting          | ESLint 9   |
| Formatting       | Prettier 3 |
| Styling          | Sass       |

---

# 🧩 Requirements

* **Node.js 22.13.0**
* npm ≥ 10

Node-версия зафиксирована через Volta в `package.json`.

---

# ⚙ Environment Setup

## 1️⃣ Install Volta (recommended)

Linux / macOS:

```bash
curl https://get.volta.sh | bash
source ~/.bashrc
```

Проверка установки:

```bash
volta --version
```

---

## 2️⃣ Install dependencies

```bash
npm install
```

---

# 🚀 Development

## Start dev server

```bash
npm run dev
```

Приложение будет доступно на:

```
http://localhost:3000
```

---

# 🏗 Production

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Static generation (если используется)

```bash
npm run generate
```

---

# 🎨 Storybook

## Start Storybook

```bash
npm run storybook
```

Откроется на:

```
http://localhost:6006
```

## Build Storybook

```bash
npm run build-storybook
```

---

# 🧹 Code Quality

## Lint

```bash
npm run lint
```

## Fix lint issues

```bash
npm run lint:fix
```

## Format code

```bash
npm run format
```

---

# 📁 Project Structure (High-Level)

```
├── components/
├── pages/
├── stores/
├── assets/
├── public/
├── .storybook/
└── nuxt.config.ts
```

---

# 🔒 Node Version Policy

Проект использует фиксированную версию Node (`22.13.0`) для:

* совместимости с ESLint 9
* корректной работы Nuxt 4
* стабильной работы CI

Если вы не используете Volta, создайте `.nvmrc`:

```
22.13.0
```

---

# 📄 License

Private project.

---
