import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";

const ModalWindow = () => {
  return (
    <ThemedView
      className="flex-1 items-center justify-center"
      bgColor="#cc0000"
    >
      <ThemedText>Modal Window 2</ThemedText>
      <ThemedButton onPress={() => router.dismiss()}>Close Modal</ThemedButton>
      <StatusBar style={Platform.OS === "android" ? "light" : "dark"} />
    </ThemedView>
  );
};

export default ModalWindow;
