import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import ContactsScreen from "./ContactsScreen";
import Contact from "./components/Contact";
import LoginScreen from "./LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen/> */}

      <ContactsScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
