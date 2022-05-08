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
        <Text style={style.hello}>Choose your Card!</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 200,
  },
  hello: {
    padding: 5,
    fontSize: 30,
    width: 280,
    height: 55,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: -300,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
