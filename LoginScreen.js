import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { connect } from "react-redux";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Log In</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#aaaaaa"
            value={this.state.username}
            onChangeText={(username) => {
              this.setState({ username });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password) => {
              this.setState({ password });
            }}
          />
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Contacts");
            }}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't have an account?</Text>
          <Text
            style={styles.signUpText}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Sign up
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 60,
    marginTop: 120,
  },

  loginText: {
    fontSize: 50,
    color: "#58269e",
  },

  loginTextContainer: {
    marginBottom: 30,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#58269e",
    fontSize: 20,
    height: 20,
    marginTop: 70,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 3,
    color: "#02a6cf",
  },

  button: {
    height: 50,
    backgroundColor: "#58269e",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 80,
  },

  buttonText: {
    color: "white",
    fontSize: 27,
  },

  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  noAccountText: {
    marginRight: 10,
    fontSize: 16,
  },

  signUpText: {
    fontSize: 16,
    color: "#58269e",
  },
});

export default LoginScreen;
