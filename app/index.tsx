import React, { useEffect, useState } from "react";
import { Alert, Text, Button, StyleSheet, ScrollView } from "react-native"; // View
import fetchQuotes from "../utils/fetchQuotes"
// import Constants from 'expo-constants';
import { SafeAreaView } from "react-native-safe-area-context";
import { i18n } from "@/utils/mylocalisation"
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function mynotification(title: string, body: string) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body
    },
    trigger: null,
  });
};

export default function Index() {
  let button_title = i18n.t("refresh")
  let myerror = i18n.t("error")
  let errormsg = i18n.t("errormsg")
  let nodata = i18n.t("nodata")
  let noquotes = i18n.t("noquotes")
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
          Alert.alert(nodata, noquotes);
        }
      } catch (error) {
        Alert.alert(myerror, errormsg);
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
      <ScrollView style={style.refreshbtn}>
        <Button title={button_title} onPress={() => {
          const loadQuote = async () => {
            try {
              const data = await fetchQuotes(apiKey); // Externe Funktion aufrufen
              if (data && data.length > 0) {
                setQuote(data[0].quote); // Zitat auslesen
                setAuthor(data[0].author); // Autor auslesen
                mynotification("test", "test")
              } else {
                Alert.alert("No Data", "No quotes found");
              }
            } catch (error) {
              Alert.alert(myerror, errormsg);
            }
          };
          loadQuote();
        }}>
        </Button>
      </ScrollView>
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