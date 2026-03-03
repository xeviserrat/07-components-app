import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { Platform, Pressable, Switch, View } from "react-native";
import ThemedText from "./ThemedText";
interface Props {
  text?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  className?: string;
  disabled?: boolean;
}

const isAndroid = Platform.OS === "android";
const ThemedSwitch = ({
  text,
  value,
  onValueChange,
  className,
  disabled,
}: Props) => {
  const switchActiveColor = useThemeColor({}, "primary");
  return (
    <Pressable
      className={`flex-row items-center justify-between active:opacity-80 mx-2 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text ? <ThemedText type="h2">{text}</ThemedText> : <View />}
      <Switch
        disabled={disabled}
        value={value}
        onValueChange={onValueChange}
        className={className}
        thumbColor={isAndroid ? switchActiveColor : ""}
        trackColor={{ false: "grey", true: switchActiveColor }}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
