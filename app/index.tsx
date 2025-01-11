import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import RNExitApp from 'react-native-exit-app';

export default function Index() {
  const API_KEY = ""
  const [data, setData] = useState("")
  //const quote = "Quote"
  //const author = "Author"
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.api-ninjas.com/v1/quotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': API_KEY
        },
      });
      if (response.ok) {
        setData(data)
      } else {
        Alert.alert("Check connection", "Check connection", [{ text: 'Exit', onPress: () => RNExitApp.exitApp() }])
      }
      const json = await response.json();
      setData(json);
    };
    fetchData();
  },[]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}
