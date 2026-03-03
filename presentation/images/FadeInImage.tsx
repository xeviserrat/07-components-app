import useAnimation from "@/hooks/useAnimation";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Easing,
  ImageStyle,
  StyleProp,
  View,
} from "react-native";
interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}
const FadeInImage = ({ uri, style }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { animatedOpacity, fadeIn } = useAnimation();

  const onLoadEnd = () => {
    fadeIn({ duration: 2000, easing: Easing.bounce });
    setIsLoading(false);
  };
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 200,
      }}
    >
      {isLoading && (
        <ActivityIndicator
          style={{ position: "absolute" }}
          color={"grey"}
          size={30}
        />
      )}
      <Animated.Image
        source={{ uri }}
        style={[style, { opacity: animatedOpacity }]}
        onLoadEnd={onLoadEnd}
      />
    </View>
  );
};

export default FadeInImage;
