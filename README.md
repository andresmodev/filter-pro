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

## 🧪 Current Version: **v0.3.0**

### 🎯 Objective of this version

Implement pagination functionality to allow users to navigate through character pages using the API's metadata.

---

## ✅ Achievements in v0.3.0

- 📄 **Pagination Support**  
  Modified `useCharacters` hook to accept `page` and `limit` parameters, and properly handle the `meta` object returned by the Dragon Ball API.

- 🧩 **Reusable Button Component**  
  Created a generic `Button` component in `components/ui/` with support for variants and disabled state.

- 🔢 **Pagination Component**  
  Built a `Pagination` component that displays Previous / Next buttons and numbered page buttons, fully controlled by the hook.

- 🔄 **Integration**  
  Connected pagination with the existing `Playground` component, allowing users to navigate between pages while maintaining loading and error states.

## Key Changes Since v0.2.0

- Updated `fetchCharactersPage` to accept `page` and `limit` parameters
- Expanded `useCharacters` hook to manage pagination state (`page`, `setPage`, `limit`, `setLimit`) and `meta` data
- Created `components/ui/Button` reusable component
- Created `components/ui/Pagination` component with Previous, Next and page number buttons
- Improved error handling in the hook (`setError(null)` before new requests)
- Better separation between data logic (hook) and UI logic (Pagination component)

## Technical Decisions

- Kept pagination logic inside the `Pagination` component (UI responsibility)
- Used `meta.totalPages` from the API for navigation
- Chose controlled component pattern (`onPageChange` prop)
- Decided not to implement dynamic ellipsis ("...") for now to keep the implementation simple and clear

---

## 📌 Roadmap (Next Versions)

- **v0.4.0** → Filtering with query parameters (name, race, affiliation)
- **v0.5.0** → UI improvements and further componentization (CharacterCard, SearchBar, etc.)
- **v0.6.0** → Global state management with Context API
- **v0.7.0** → Final polish, README, deploy and project documentation

---

**Status**: v0.3.0 completed ✅

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
