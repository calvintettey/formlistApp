import React from "react";
import { Provider } from "react-redux";
import AppContainer from "./src/navigation/navigation";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 100,
//     // flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
