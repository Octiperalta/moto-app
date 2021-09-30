import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import MainNavigator from "./navigation";
import store from "./store";

export default function App() {
  const [loaded] = useFonts({
    "encodeSans-light": require("./assets/fonts/EncodeSans-Light.ttf"),
    "encodeSans-regular": require("./assets/fonts/EncodeSans-Regular.ttf"),
    "encodeSans-medium": require("./assets/fonts/EncodeSans-Medium.ttf"),
    "encodeSans-semibold": require("./assets/fonts/EncodeSans-SemiBold.ttf"),
    "encodeSans-bold": require("./assets/fonts/EncodeSans-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
