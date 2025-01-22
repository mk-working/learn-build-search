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