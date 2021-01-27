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

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: "",
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>Sign Up</Text>
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
          <TextInput
            style={styles.input}
            placeholder="Password Again"
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password2) => {
              this.setState({ password2 });
            }}
          />
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Contacts");
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.yesAccountContainer}>
          <Text style={styles.yesAccountText}>Already have an account?</Text>
          <Text
            onPress={() => {
              navigation.navigate("Log In");
            }}
            style={styles.loginText}
          >
            Log in
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

  signupText: {
    fontSize: 50,
    color: "#58269e",
  },

  signupTextContainer: {
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

  yesAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  yesAccountText: {
    marginRight: 10,
    fontSize: 16,
  },

  loginText: {
    fontSize: 16,
    color: "#58269e",
  },
});

export default connect({}, {}) (SignupScreen);
