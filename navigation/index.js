import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./tab/TabNavigator";
import AuthNavigator from "./auth/AuthNavigator";
import { useSelector } from "react-redux";

const MainNavigator = () => {
  const user = useSelector(state => state.auth.userId)
  
  return (
    <NavigationContainer>
      {true ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
