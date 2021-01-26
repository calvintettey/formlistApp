import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import ContactsScreen from "./ContactsScreen";
import Contact from "./components/Contact";
import LoginScreen from "./LoginScreen";
import { Provider } from "react-redux";
import store from './src/redux/store'

export default function AppContainer() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <LoginScreen/> */}

        <ContactsScreen />
      </View>
    </Provider> 
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
