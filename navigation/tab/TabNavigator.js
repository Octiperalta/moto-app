import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../../screens/cart/Cart";
import ShopNavigator from "../shop/ShopNavigator";
import UserScreen from "../../screens/user/UserScreen";
import OrderScreen from "../../screens/orders/OrderScreen";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import FavNavigator from "../shop/FavNavigator";
import OrderNavigator from "../order/OrderNavgation";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: tw`bg-gray-50 rounded-lg relative shadow-lg px-3 h-16 items-center` 
      }}>
      <Tab.Screen
        name='HomeTab'
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name='home-filled' size={29} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name='FavoritesTab'
        component={FavNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name='favorite' size={26} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name='UserTab'
        component={OrderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name='person' size={32} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name='OrdersTab'
        component={OrderNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name='assignment' size={28} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const TabIcon = ({ name, size, focused }) => {
  return (
    <View>
      <MaterialIcons
        name={name}
        size={size}
        color={focused ? tw.color("red-500") : tw.color("gray-300")}
      />
    </View>
  );
};
