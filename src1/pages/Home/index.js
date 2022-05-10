/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Slider from '../../../components/Slider';

const images = [
  'https://i.imgur.com/SHC9Y3K.png',
  'https://i.imgur.com/MIZMAjZ.png',
  'https://i.imgur.com/pcjsiRU.png',
  'https://i.imgur.com/DMwACUi.png',
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Slider images={images}></Slider>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
  },
  hello: {
    padding: 5,
    fontSize: 40,
    width: 280,
    height: 55,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: -300,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
