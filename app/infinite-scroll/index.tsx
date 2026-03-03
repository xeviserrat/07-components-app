import { useThemeColor } from "@/hooks/use-theme-color";
import FadeInImage from "@/presentation/images/FadeInImage";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const primaryColor = useThemeColor({}, "primary");
  const loadMore = () => {
    const newArray = Array.from(
      { length: 5 },
      (_, index) => numbers.length + index + 1,
    );
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };
  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View className="justify-center h-[250px]">
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{ height: 400, width: "100%" }}
    />
  );
};
