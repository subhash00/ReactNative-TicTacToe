import * as React from "react";
import Assembler from "./src/assembler"
import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Assembler />
    </View>
  );
}
