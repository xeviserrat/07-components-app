import React from "react";
import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  className?: string;
  type?: "normal" | "h1" | "h2" | "semi-bold" | "link";
}

const ThemedText = ({ className, type = "normal", ...rest }: Props) => {
  return (
    <Text
      {...rest}
      className={[
        "text-light-text font-bold dark:text-dark-text",
        type === "h1" && "text-3xl font-bold",
        type === "h2" && "text-xl font-bold",
        type === "semi-bold" && "font-semibold",
        type === "link" && "font-normal underline",
        className,
      ].join(" ")}
    />
  );
};

export default ThemedText;
