// jest.config.js
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files with ts-jest
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Optional: Map imports starting with @/ to the src directory
  },
  testMatch: ["**/__tests__/**/*.test.ts"], // Match test files in __tests__ folders
};
