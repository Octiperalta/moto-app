import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/shop/HomeScreen";
import ProductDetail from "../../screens/shop/ProductDetailScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import Favorites from "../../screens/fav/Favorites";

const Stack = createNativeStackNavigator();

const FavNavigator = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const tabHiddenRoutes = ["ProductDetail"];
    
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: tw`hidden` });
    } else {
      navigation.setOptions({ tabBarStyle: tw`bg-gray-50 rounded-lg relative shadow-lg px-3 h-16 items-center` });
    }
  }, [navigation, route]);

  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRoute='Favs'>
      <Stack.Screen name='Favs' component={Favorites} />
      <Stack.Screen name='ProductDetail' component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default FavNavigator;
