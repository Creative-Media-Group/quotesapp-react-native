import { useEffect, useState } from "react";
import { Alert, Text, View, Button } from "react-native";

export default function Index() {
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
