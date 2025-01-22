Folder structure for this small project

src/
├── components/
│   ├── Search/
│   │   ├── SearchBar.tsx
│   │   ├── SearchResult.tsx
│   │   ├── Search.tsx
│   │   └── types.ts (feature-specific types)
├── api/
│   └── user.ts (use Axios)
├── store/
│   └── searchStore.ts (use Zustand)
├── hooks/
│   └── useSearchQuery.ts (use TanStack Query)
└── App.tsx

Adding Jest

Configure for using the Jest for testing

- installation: 
npm install --save-dev jest @types/jest ts-jest @babel/preset-env @babel/preset-typescript

File Create
- jest.config.js
- babel.config.js