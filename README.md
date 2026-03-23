# 🚀 Filters-Pro

## 📌 Project Overview

**Filters-Pro** is a frontend learning project focused on building a scalable, maintainable, and well-structured React application.

The goal of this project goes beyond simply consuming an API. It is designed to simulate real-world frontend development by applying:

- Clean architecture principles (frontend-oriented)
- Separation of concerns
- State management patterns
- Professional Git workflows (branches, PRs, versioning)

This project evolves through versioned iterations, where each version introduces new features and architectural improvements.

---

## 🎯 Project Goals

This project aims to strengthen key frontend engineering skills:

- 🧩 **Architecture & Code Organization**  
  Designing a scalable folder structure and separating responsibilities (UI, logic, data).

- ⚙️ **API Consumption**  
  Fetching and handling external data in a clean and reusable way.

- 🔍 **Filtering & Query Params (Upcoming)**  
  Learning how to interact with APIs dynamically through filters.

- 📑 **Pagination (Upcoming)**  
  Managing large datasets and improving UX.

- 🌍 **State Management**  
  Understanding local state, lifting state, and introducing global state when needed.

- 🧱 **Componentization**  
  Building reusable and maintainable UI components.

- 🔧 **Workflow Simulation**  
  Using Git as in a real team: branches, commits, pull requests, and version tags.

- 🧹 **Code Quality**  
  Enforcing best practices using ESLint.

---

## 🏗 Current Project Structure

src/
├── api/
│ └── charactersApi.js # API base URL + fetch function
├── assets/ # Images, icons, etc.
├── components/ # Reusable UI components (pending)
├── context/ # Global state (planned for v0.6.0)
├── hooks/
│ └── useCharacters.js # Custom hook (data, loading, error)
├── pages/ # Page-level components (pending)
├── styles/ # CSS Modules / global styles
├── utils/ # Helper functions (pending)
├── App.jsx
├── main.jsx
├── Playground.jsx # Temporary testing environment
└── index.css

---

## 🛠️ Tech Stack

- ⚛️ React 19 + Vite
- 🧹 ESLint 9 (flat config)
  - eslint-plugin-react
  - eslint-plugin-react-hooks
- 🌐 Native Fetch API
- 🧪 Git workflow simulation (branching, PRs, tagging)

---

## ▶️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## 🔄 Development Approach

This project follows an iterative workflow:

- Create a feature branch
- Develop the feature
- Commit changes with clear messages
- Push to remote repository
- Create and review a Pull Request
- Merge into main
- Tag the version
- Clean branches

---

## 🧪 Current Version: **v0.2.0**

### 🎯 Objective of this version

Implement full UI state handling for a better user experience: loading (fetching), error (request failures), and empty state (no data).

---

## ✅ Achievements in v0.2.0

- ⏳ **Loading state**  
  `loading` state initialized to `true` and set to `false` once the request completes (success or failure).

- ⚠️ **Error handling**  
  Error catching with `try/catch`, stored in `error` state, and displayed with a user-friendly message in the UI.

- 🏚️ **Empty state**  
  Check for `characters.length === 0` to display a message when no data is available (after successful load).

- 🔄 **Custom hook improvements**  
  Use of `finally` to ensure `loading` is always turned off.  
  Expanded return: `{ characters, loading, error }`.

- 🎨 **Playground improvements**  
  Conditional early returns to display loading, error, or empty states before the main render.

## Key changes since v0.1.0

- Added `loading` and `error` states in `useCharacters`
- Early returns in Playground to handle all 3 UI states
- Use of `finally` for robustness
- Friendlier and safer UI messages (using `error.message`)

---

## 📌 Roadmap (Next Versions)

v0.2.0 → Loading, error, and empty states
v0.3.0 → Pagination
v0.4.0 → Filtering with query params
v0.5.0 → UI improvements and componentization
v0.6.0 → Global state with Context API

## 📄 License

This project is licensed under the MIT License.

🦉 Author

Frontend Developer — Gonzalo Montoya

If you found this project interesting, feel free to ⭐ the repository.
