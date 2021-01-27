import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../LoginScreen";
import SignupScreen from "../../SignupScreen";
import ContactsScreen from "../../ContactsScreen";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logout } from "../redux/actions/authActions";

const Stack = createStackNavigator();
function AppContainer({ auth, logout }) {
  return (
    <NavigationContainer style={styles.container}>
      {auth.login ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Contacts"
            options={{
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 20 }} onPress={logout}  >
                  <Text>Log Out</Text>
                </TouchableOpacity>
              ),
            }}
            component={ContactsScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Log In"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={SignupScreen}
          />
        </Stack.Navigator>
      )}
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


const mapStateToProp = (state) => {
  return { auth: state };
};

export default connect(mapStateToProp, {logout})(AppContainer);
