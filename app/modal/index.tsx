import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Link, router } from "expo-router";
import { Text } from "react-native";

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link className="mx-4" asChild href="/modal/modal-window">
        <Text className={"text-light-text dark:text-dark-text"}>
          Open Modal
        </Text>
      </Link>

      <ThemedButton
        className="mx-4 mt-4"
        onPress={() => router.push("/modal/modal-window")}
      >
        Another Modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
