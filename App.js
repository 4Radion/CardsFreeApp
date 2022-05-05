import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import Slider from "./components/Slider";
import NfcManager, { NfcTech } from "react-native-nfc-manager";

const images = [
  "https://i.imgur.com/SHC9Y3K.png",
  "https://i.imgur.com/MIZMAjZ.png",
  "https://i.imgur.com/pcjsiRU.png",
  "https://i.imgur.com/DMwACUi.png",
];

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Slider images={images}></Slider>
        <Text>Hello slider</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 200,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
