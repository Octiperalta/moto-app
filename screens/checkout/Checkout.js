import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Text from "../../components/CustomText";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { useSelector, useDispatch } from "react-redux";
import {
  confirmOrder,
  FINISH_CONFIRMATION,
} from "../../store/actions/orders.actions";
import { CLEAR_CART } from "../../store/actions/cart.actions";

const Checkout = ({ navigation, route }) => {
  const cartItems = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const userId = useSelector(state => state.auth.userId);
  const loading = useSelector(state => state.orders.loading);
  const dispatch = useDispatch();
  const { coordinates, address } = route.params;

  const handleConfirmCheckout = () => {
    dispatch(confirmOrder(total, userId, coordinates, address));
    setTimeout(() => {
      navigation.navigate("OrderConfirmed");
      dispatch({ type: FINISH_CONFIRMATION });
      dispatch({ type: CLEAR_CART });
    }, 2000);
  };

  const goBack = () => {
    navigation.goBack();
  };
  const renderItem = ({ item }) => {
    return (
      <View style={tw`flex-row px-2 py-3 rounded-lg bg-gray-200 mb-3`}>
        <Image source={{ uri: item.imageUrl }} style={tw`w-14 h-14`} />
        <View style={tw`ml-2`}>
          <Text fontWeight='semibold' style={tw`text-base text-gray-700`}>
            {item.name}
          </Text>
          <Text fontWeight='medium' style={tw`text-xs -mt-1 text-gray-500`}>
            {item.category.name}
          </Text>
          <Text fontWeight='bold' style={tw`mt-auto text-red-500 text-base`}>
            $ {item.price}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={tw`flex-1 bg-gray-50`}>
      {/* HEADER */}
      <View
        style={tw`flex-row mt-14 px-7 justify-center items-center relative`}>
        {/* left */}
        <View style={tw`absolute left-6`}>
          <TouchableOpacity
            onPress={goBack}
            style={tw`w-10 justify-center h-10 items-center`}>
            <MaterialIcons
              name='arrow-back-ios'
              size={24}
              color={tw.color("gray-700")}
            />
          </TouchableOpacity>
        </View>
        {/* center */}
        <View>
          <Text fontWeight='bold' style={tw`text-2xl text-gray-700`}>
            Checkout
          </Text>
        </View>
      </View>

      {/* CONTENT  */}
      <View style={tw`mt-6 px-7 flex-1`}>
        {/* address */}
        <View>
          <Text fontWeight='semibold' style={tw`text-lg text-gray-700`}>
            Shipping Location
          </Text>
          <View
            style={tw`bg-gray-200 rounded py-2 px-2 mt-2 flex-row items-center`}>
            <View style={tw`bg-gray-50 mr-2 px-2 py-3 rounded-lg`}>
              <FontAwesome5
                name='shipping-fast'
                size={24}
                color={tw.color("red-500")}
              />
            </View>
            <View>
              <Text
                fontWeight='medium'
                style={tw`text-gray-700`}
                style={{ fontSize: 16, lineHeight: 18 }}>
                {address.split(", ")[0]}
              </Text>
            </View>
          </View>
        </View>

        {/* items */}
        <View style={tw`mt-4`}>
          <Text fontWeight='semibold' style={tw`text-lg text-gray-700`}>
            Items
          </Text>
          <View style={tw`mt-2 h-40`}>
            <FlatList
              data={cartItems}
              keyExtractor={item => item.id}
              renderItem={renderItem}
            />
          </View>
        </View>

        {/* details */}
        <View style={tw`mt-4`}>
          <Text fontWeight='semibold' style={tw`text-lg text-gray-700`}>
            Order Info
          </Text>
          <View style={tw`mt-2`}>
            <View style={tw`flex-row justify-between`}>
              <Text fontWeight='semibold' style={tw`text-gray-500 text-base`}>
                Subtotal
              </Text>
              <Text fontWeight='semibold' style={tw`text-gray-500 text-base`}>
                ${total}.00
              </Text>
            </View>
            <View style={tw`mt-2 flex-row justify-between`}>
              <Text fontWeight='semibold' style={tw`text-gray-500 text-base`}>
                Shipping Cost
              </Text>
              <Text fontWeight='semibold' style={tw`text-gray-500 text-base`}>
                + $20.00
              </Text>
            </View>
            <View style={tw`mt-5 flex-row justify-between`}>
              <Text fontWeight='semibold' style={tw`text-gray-500 text-base`}>
                Total
              </Text>
              <Text fontWeight='bold' style={tw`text-gray-700 text-xl`}>
                ${total + 20}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* checkout button */}
      <View style={tw`shadow-xl px-7 mb-5`}>
        <TouchableOpacity
          onPress={handleConfirmCheckout}
          style={tw`mt-4 rounded-lg px-2 py-2 flex-row justify-center items-center relative  bg-red-500
          `}>
          <Text fontWeight='bold' style={tw`text-gray-50 text-lg`}>
            {loading ? "Confirming" : "Confirm"}
          </Text>
          <View style={tw`absolute right-4 rounded-md p-1 bg-red-900`}>
            {loading ? (
              <ActivityIndicator size='small' color={tw.color("gray-50")} />
            ) : (
              <MaterialIcons
                name='arrow-forward'
                size={22}
                color={tw.color("gray-50")}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
