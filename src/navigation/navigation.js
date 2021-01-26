import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ContactsScreen from "./ContactsScreen";
import Contact from "./components/Contact";
import LoginScreen from "./LoginScreen";
import { Provider } from "react-redux";
import store from './src/redux/store'
import SignupScreen from "../../SignupScreen";

const Stack = createStackNavigator();
export default function AppContainer() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Log In" component={LoginScreen} />
              <Stack.Screen name="Register" component={SignupScreen} />
              <Stack.Screen name="Contacts" component={ContactsScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    // <Provider store={store}>
    //   <View style={styles.container}>
    //     {/* <LoginScreen/> */}

    //     <ContactsScreen />
    //   </View>
    // </Provider> 
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
