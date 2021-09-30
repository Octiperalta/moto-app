import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./tab/TabNavigator";
import AuthNavigator from "./auth/AuthNavigator";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      {true ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
