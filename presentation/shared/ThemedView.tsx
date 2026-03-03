import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
}

const ThemedView = ({
  children,
  bgColor,
  className,
  margin,
  safe,
  style,
}: Props) => {
  const hookThemeColor = useThemeColor({}, "background");
  const backgroundColor = bgColor ?? hookThemeColor;
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <View
      //   className={`bg-light-background dark:bg-dark-background ${className}`}
      style={[
        {
          backgroundColor: backgroundColor,
          flex: 1,
          paddingTop: safe ? safeAreaInsets.top : 0,
          marginHorizontal: margin ? 10 : 0,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  );
};

export default ThemedView;
