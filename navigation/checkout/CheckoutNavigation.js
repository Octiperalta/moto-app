import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "tailwind-react-native-classnames";
import Address from "../../screens/checkout/Address";
import Checkout from "../../screens/checkout/Checkout";
import OrderConfirmation from "../../screens/checkout/OrderConfirmation";

const Stack = createNativeStackNavigator();

const CheckoutNavigation = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ tabBarStyle: tw`hidden` });
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRoute='Address'>
      <Stack.Screen name='Address' component={Address} />
      <Stack.Screen name='CheckoutConfirmation' component={Checkout} />
      <Stack.Screen name='OrderConfirmed' component={OrderConfirmation} />
    </Stack.Navigator>
  );
};

export default CheckoutNavigation;
