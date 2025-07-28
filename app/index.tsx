import React, { useEffect, useState } from "react";
import { Alert, Text, View, Button, StyleSheet } from "react-native";
import fetchQuotes from "../utils/fetchQuotes"
import Constants from 'expo-constants';
import { SafeAreaView } from "react-native-safe-area-context";
import { i18n } from "@/utils/mylocalisation"

export default function Index() {
  var button_title = i18n.t("refresh")
  const apiKey: any = process.env.EXPO_PUBLIC_API_KEY;
  const [quote, setQuote] = useState("");
  const [autor, setAuthor] = useState("");

  useEffect(() => {
    const loadQuote = async () => {
      try {
        const data = await fetchQuotes(apiKey); // Externe Funktion aufrufen
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
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={style.text}>{quote}</Text>
      <Text style={style.text}>{autor}</Text>
      <View style={style.refreshbtn}>
        <Button title={button_title} onPress={() => {
          const loadQuote = async () => {
            try {
              const data = await fetchQuotes(apiKey); // Externe Funktion aufrufen
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
        }}>
        </Button>
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  text: {
    alignContent: "center", margin: 'auto',

  },
  refreshbtn: {
    paddingVertical: 50
  },
});