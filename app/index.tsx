import { Text, View } from "react-native";

export default function Index() {
  const quote = "Quote"
  const author = "Author"
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{quote}</Text>
      <Text>{author}</Text>
    </View>
  );
}
