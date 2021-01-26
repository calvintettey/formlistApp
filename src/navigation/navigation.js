import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../LoginScreen";
import SignupScreen from "../../SignupScreen";
import ContactsScreen from "../../ContactsScreen"

const Stack = createStackNavigator();
export default function AppContainer() {
  return (
      <NavigationContainer style={styles.container} >
          <Stack.Navigator>
              <Stack.Screen options={{ headerShown: false }} name="Log In" component={LoginScreen} />
              <Stack.Screen options={{ headerShown: false }} name="Register" component={SignupScreen} />
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
