import firebase from "../../firebase/firebase";

export function createEmailAccount(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    dispatch(loggedin(user))
    } catch (error) {
        console.log(error)
    }
  };
}

export function loginEmailAccount(email, password) {
  return async (dispatch) => {
    try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
      dispatch(loggedin(user))
      } catch (error) {
          console.log(error)
      }
    };
  };
}

export function logout() {
  return async (dispatch) => {
      try {
          await firebase.auth().signOut()
          dispatch(loggedout())
      } catch (error) {
          console.log(error)
      }
  };
}


function loggedin(user) {
    return {
        type:"LOGGED_IN",
        payload:user
    }
}

function loggedout(user) {
    return {
        type:"LOGGED_OUT",
        payload:user
    }
}