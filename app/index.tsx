import React, { useEffect, useState } from "react";
import { Alert, Text, View, Button, StyleSheet } from "react-native";
import fetchQuotes from "../utils/fetchQuotes"
import Constants from 'expo-constants';
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from 'react-i18next';
import * as RNLocalize from "react-native-localize";
import i18n from "@/utils/mylocalisation";

export default function Index() {
  const { t } = useTranslation();
  useEffect(() => {
    // Set the initial language based on device locale
    const locale = RNLocalize.getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
  }, []);
  var button_title = t("refresh")
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
    margin: 'auto',

  },
  refreshbtn: {
    paddingVertical: 50
  },
});