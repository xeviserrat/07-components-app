import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";
import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useEffect, useState } from "react";

const ThemesScreen = () => {
  // const { colorScheme, setColorScheme } = useColorScheme();

  const { currentTheme, isSystemTheme, toggleTheme, setSystemTheme } =
    useThemeChangerContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? "dark" : "light");
    toggleTheme();
    setDarkModeSettings({
      systemMode: false,
      darkMode: value,
    });
  };

  const setSystemMode = (value: boolean) => {
    if (value) {
      setDarkModeSettings({
        systemMode: value,
        darkMode: darkModeSettings.darkMode,
      });
      setSystemTheme();
    }
  };

  useEffect(() => {
    setDarkModeSettings({
      darkMode: currentTheme === "dark",
      systemMode: isSystemTheme,
    });
  }, [currentTheme, isSystemTheme]);

  return (
    <ThemedView margin>
      <ThemeCard className="mt-5">
        <ThemedSwitch
          className="mb-5"
          text="Dark Mode"
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />

        <ThemedSwitch
          className="mb-5"
          text="System"
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
          disabled={darkModeSettings.systemMode}
        />
      </ThemeCard>
    </ThemedView>
  );
};
export default ThemesScreen;
