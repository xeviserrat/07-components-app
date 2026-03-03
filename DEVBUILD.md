# Development build (emulator / device)

Use a **development build** instead of Expo Go so native modules work correctly.

## 1. Install dependencies

From the project root:

```bash
pnpm install
```

(or `npm install` / `yarn` if you use those)

## 2. Generate native projects (first time only)

```bash
pnpm run prebuild
```

This creates the `android/` and `ios/` folders. You can add them to `.gitignore` if you want to regenerate them when needed.

## 3. Run on emulator

**Android** (start an Android emulator first, or one will be started for you):

```bash
pnpm run dev:android
```

**iOS** (mac only; starts the simulator):

```bash
pnpm run dev:ios
```

The first run will compile the native app and install it on the emulator/simulator. After that, the Metro bundler will connect and your JS will load. Native modules will work because they are linked in this build.

## 4. Later runs

- Start the dev server: `pnpm start`
- Open the **development build** app on the emulator (not Expo Go). It will connect to Metro.

Or run `pnpm run dev:android` / `pnpm run dev:ios` again to build and launch in one step.
