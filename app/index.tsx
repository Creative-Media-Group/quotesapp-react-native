import { useEffect, useState } from "react";
import { Alert, Text, View, Button, StyleSheet } from "react-native";
import { fetchQuotes } from './fetchQuotes'
import Constants from 'expo-constants';

export default function Index() {
  const API_KEY = Constants.expoConfig?.extra?.API_KEY;
  const [quote, setQuote] = useState("")
  const [autor, setAuthor] = useState("")

  useEffect(() => {
    const loadQuote = async () => {
      try {
        const data = await fetchQuotes(API_KEY); // Externe Funktion aufrufen
        if (data && data.length > 0) {
          setQuote(data[0].quote); // Zitat auslesen
          setAuthor(data[0].author); // Autor auslesen
        } else {
          Alert.alert("No Data", "No quotes found");
        }
      } catch (error) {
        Alert.alert("Error", "Failed to fetch quotes");
      }

    };
    loadQuote();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={style.text}>{quote}</Text>
      <Text>{autor}</Text>
      <Button title="Refresh" onPress={() => {
        const loadQuote = async () => {
          try {
            const data = await fetchQuotes(API_KEY); // Externe Funktion aufrufen
            if (data && data.length > 0) {
              setQuote(data[0].quote); // Zitat auslesen
              setAuthor(data[0].author); // Autor auslesen
            } else {
              Alert.alert("No Data", "No quotes found");
            }
          } catch (error) {
            Alert.alert("Error", "Failed to fetch quotes");
          }

        };
        loadQuote();
      }}></Button>
    </View>
  );
}
const style = StyleSheet.create({
  text: {
    margin: 'auto'
  }
});