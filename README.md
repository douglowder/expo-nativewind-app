# Expo Nativewind App

A minimal mobile application built with **Expo SDK 54**, **Nativewind v5**, and **Expo Router** featuring tab navigation.

## Tech Stack

- **Expo SDK 54** - React Native framework
- **Nativewind v5** - Tailwind CSS for React Native
- **Expo Router v6** - File-based routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type safety

## Project Structure

```
expo-nativewind-app/
├── app/
│   ├── _layout.tsx          # Root layout with Stack navigator
│   └── (tabs)/
│       ├── _layout.tsx      # Tab navigator layout
│       ├── index.tsx        # Home screen
│       └── settings.tsx     # Settings screen
├── assets/                   # App icons and images
├── global.css               # Tailwind CSS imports
├── app.json                 # Expo configuration
├── babel.config.js          # Babel configuration
├── metro.config.js          # Metro bundler config with Nativewind
├── postcss.config.mjs       # PostCSS config for Tailwind v4
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Expo Go app on your mobile device (for testing)

### Installation

1. Navigate to the project directory:
   ```bash
   cd expo-nativewind-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start --clear
   ```

4. Scan the QR code with:
   - **iOS**: Camera app or Expo Go
   - **Android**: Expo Go app

## Features

- **Two Tabs**: Home and Settings screens
- **Tailwind Styling**: Using Nativewind's `className` prop
- **File-based Routing**: Powered by Expo Router
- **TypeScript**: Full type support

## Notes

- The `--clear` flag is recommended on first run to clear Metro cache
- Nativewind v5 is currently in alpha/preview - API may change
- The `lightningcss` version is pinned in package.json to avoid build issues

## Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo development server |
| `npm run ios` | Start on iOS simulator |
| `npm run android` | Start on Android emulator |
| `npm run web` | Start web version |
