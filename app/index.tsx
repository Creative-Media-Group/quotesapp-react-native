import { useEffect, useState } from "react";
import { Alert, Text, View, Button } from "react-native";
import { fetchQuotes } from './fetchQuotes'

export default function Index() {
  const API_KEY = "";
  const [data, setData] = useState("")

  useEffect(() => {
    const loadData = async () => {
      try {
        const quotes = await fetchQuotes(API_KEY);
        setData(quotes);
      } catch (error) {
        Alert.alert("Check connection", "Failed to fetch data");
      }
    };
    loadData();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{}}>here is a quote</Text>
      <Button title="Refresh"></Button>
    </View>
  );
}
