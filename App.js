import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import Slider from "./components/Slider";
import NfcManager, { NfcTech } from "react-native-nfc-manager";

const images = [
  "https://images.pexels.com/photos/11485306/pexels-photo-11485306.jpeg?cs=srgb&dl=pexels-anna-rye-11485306.jpg&fm=jpg",
  "https://images.pexels.com/photos/11183928/pexels-photo-11183928.jpeg?cs=srgb&dl=pexels-angelica-reyn-11183928.jpg&fm=jpg",
  "https://images.pexels.com/photos/11548856/pexels-photo-11548856.jpeg?cs=srgb&dl=pexels-azra-tuba-demir-11548856.jpg&fm=jpg",
  "https://images.pexels.com/photos/11163068/pexels-photo-11163068.jpeg?cs=srgb&dl=pexels-gaspar-zaldo-11163068.jpg&fm=jpg0",
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
