import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  return (
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined}>
      <ScrollView>
        <ThemedView margin>
          <ThemeCard className="mb-5">
            <ThemedTextInput
              placeholder="Name"
              autoCorrect={false}
              autoCapitalize="words"
              keyboardType="default"
              onChangeText={(value) => setForm({ ...form, name: value })}
            />
            <ThemedTextInput
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="words"
              keyboardType="email-address"
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
            <ThemedTextInput
              placeholder="Phone"
              autoCorrect={false}
              autoCapitalize="words"
              keyboardType="phone-pad"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard
            style={{
              marginBottom: isIOS ? 100 : 40,
            }}
          >
            <ThemedTextInput
              placeholder="Phone"
              autoCorrect={false}
              autoCapitalize="words"
              keyboardType="phone-pad"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />
          </ThemeCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
