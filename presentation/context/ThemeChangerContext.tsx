// import AsyncStorage from "@react-native-community/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  // useRef,
  useState,
} from "react";
import { Platform } from "react-native";
// import Storage from "react-native-storage";

// function getStorageBackend() {
//   if (Platform.OS !== "web") {
//     return AsyncStorage;
//   }
//   if (typeof window !== "undefined" && window.localStorage) {
//     return window.localStorage;
//   }
//   const memory: Record<string, string> = {};
//   return {
//     getItem: (key: string) => Promise.resolve(memory[key] ?? null),
//     setItem: (key: string, value: string) => {
//       memory[key] = value;
//       return Promise.resolve();
//     },
//     removeItem: (key: string) => {
//       delete memory[key];
//       return Promise.resolve();
//     },
//   };
// }

// function createStorage() {
//   return new Storage({
//     size: 1000,
//     storageBackend: getStorageBackend(),
//     defaultExpires: null,
//     enableCache: true,
//   });
// }
interface ThemeChangerContextType {
  currentTheme: "dark" | "light";
  isSystemTheme: boolean;
  toggleTheme: () => void;
  setSystemTheme: () => void;
}

const ThemeChangerContext = createContext<ThemeChangerContextType>(
  {} as ThemeChangerContextType,
);
export const useThemeChangerContext = () => {
  const themeChanger = useContext(ThemeChangerContext);

  return themeChanger;
};

export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
  const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(false);
  // const storageRef = useRef<Storage | null>(null);
  // if (!storageRef.current) storageRef.current = createStorage();
  // const storage = storageRef.current;

  const currentTheme = isSystemThemeEnabled
    ? colorScheme
    : isDarkMode
      ? "dark"
      : "light";

  // useEffect(() => {
  //   storage
  //     .load({
  //       key: "selected-theme",
  //       autoSync: true,
  //       syncInBackground: true,
  //     })
  //     .then((theme) => {
  //       if (
  //         !theme ||
  //         (theme !== "dark" && theme !== "light" && theme !== "system")
  //       )
  //         return;
  //       console.log("Theme found in storage -> ", theme);

  //       setIsDarkMode(theme === "dark");
  //       setIsSystemThemeEnabled(theme === "system");
  //       setColorScheme(theme);
  //     })
  //     .catch((error) => {
  //       console.error("Ouch! Error loading theme from storage", error);
  //     });
  // }, []);

  useEffect(() => {
    AsyncStorage.getItem("selected-theme").then((theme: string | null) => {
      if (
        !theme ||
        (theme !== "dark" && theme !== "light" && theme !== "system")
      )
        return;
      setIsDarkMode(theme === "dark");
      setIsSystemThemeEnabled(theme === "system");
      setColorScheme(theme);
    });
  }, []);

  useEffect(() => {
    if (Platform.OS !== "web" || typeof document === "undefined") return;
    const isDark = currentTheme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
  }, [currentTheme]);

  return (
    <ThemeChangerContext.Provider
      value={{
        currentTheme: currentTheme ?? colorScheme ?? "dark",
        isSystemTheme: isSystemThemeEnabled,
        toggleTheme: () => {
          setColorScheme(isDarkMode ? "light" : "dark");
          setIsDarkMode(!isDarkMode);
          setIsSystemThemeEnabled(false);
          AsyncStorage.setItem("selected-theme", isDarkMode ? "light" : "dark");
        },
        setSystemTheme: () => {
          setIsSystemThemeEnabled(true);
          setColorScheme("system");
          AsyncStorage.setItem("selected-theme", "system");
        },
      }}
    >
      {children}
    </ThemeChangerContext.Provider>
  );
};
