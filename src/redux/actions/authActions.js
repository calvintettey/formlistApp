import firebase from "../../firebase/firebase";

export function createEmailAccount(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch(loggedin(user));
    } catch (error) {
      dispatch(registerError(error.message));
    }
  };
}

export function loginEmailAccount(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch(loggedin(user));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch(loggedout());
    } catch (error) {
      console.log(error);
    }
  };
}

function loggedin(user) {
  return {
    type: "LOGGED_IN",
    payload: user,
  };
}

function loggedout(user) {
  return {
    type: "LOGGED_OUT",
  };
}

export function registerError(error) {
  return {
    type: "REGSITER_ERROR",
    payload: error,
  };
}

export function loginError(error) {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
}
