import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const API_KEY = ""
  const [data, getdata] = useState("")
  //const quote = "Quote"
  //const author = "Author"
  useEffect(() =>{
    const fetchData = async() => {
      const response = await fetch(`${API_KEY}`)
    }
  })
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{data}</Text>
    </View>
  );
}
