/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Settings() {
  return (
    <View style={styles.container}>
      
      <Button color="rgba(230,48,53,255)" style={styles.button}
  onPress={() => {
   
  }}
  title="Privacy and Terms of Use"
/>
<Button color="rgba(230,48,53,255)" style={styles.button}
  onPress={() => {
    alert('Notification!');
  }}
  title="Notification Preferences"
/>

<Button color="rgba(230,48,53,255)" style={styles.button}
  onPress={() => {
    
  }}
  title="Themes"
/>



    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
  },
  button: {
    margin: 20,
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
});
