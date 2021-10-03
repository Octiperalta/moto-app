import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/shop/HomeScreen";
import ProductDetail from "../../screens/shop/ProductDetailScreen";
import Cart from "../../screens/cart/Cart";
import CategoryScreen from "../../screens/shop/CategoryScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import OrderConfirmation from '../../screens/cart/OrderConfirmation';

const Stack = createNativeStackNavigator();

const ShopNavigator = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const tabHiddenRoutes = ["ProductDetail", "CartList", "CategoryProducts", "OrderConfirmed"];
    
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: tw`hidden` });
    } else {
      navigation.setOptions({ tabBarStyle: tw`bg-gray-50 rounded-lg relative shadow-lg px-3 h-16 items-center` });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRoute='Shop'>
      <Stack.Screen name='Shop' component={Home} />
      <Stack.Screen name='ProductDetail' component={ProductDetail} />
      <Stack.Screen name='CategoryProducts' component={CategoryScreen} />
      <Stack.Screen name='CartList' component={Cart} />
      <Stack.Screen name='OrderConfirmed' component={OrderConfirmation} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
