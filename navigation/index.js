import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./tab/TabNavigator";
import AuthNavigator from "./auth/AuthNavigator";
import { useSelector } from "react-redux";

const MainNavigator = () => {
  const user = useSelector(state => state.auth.userId)
  console.log("🚀 ~ file: index.js ~ line 9 ~ MainNavigator ~ user", user)
  
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
