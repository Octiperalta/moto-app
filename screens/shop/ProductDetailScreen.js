import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "../../components/CustomText";
import tw from "tailwind-react-native-classnames";
import {
  Feather,
  MaterialIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/actions/cart.actions";

const ProductDetail = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);
  const cartList = useSelector(state => state.cart.items);
  const productID = useSelector(state => state.products.selectedID);
  const selectedProduct = products.find(item => productID === item.id);

  const [isFav, setIsFav] = useState(false);
  const [inCart, setInCart] = useState(
    cartList.some(item => item.id === productID)
  );

  const handleAddToCart = () => {
    setInCart(true);
    dispatch(addItem(selectedProduct));
  };

  const handleRemoveFromCart = () => {
    setInCart(false);
    dispatch(removeItem(productID));
  };

  const goBack = () => {
    navigation.goBack();
  };
  const goToCart = () => {
    navigation.navigate("CartList");
  };

  return (
    <View style={tw`flex-1 bg-gray-50`}>
      {/* HEADER */}
      <View style={tw`flex-row justify-between mt-14 px-6 items-center`}>
        {/* LEFT */}
        <View>
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
        {/* RIGHT */}
        <View>
          <TouchableOpacity onPress={goToCart}>
            <Feather
              name='shopping-cart'
              size={26}
              color={tw.color("gray-700")}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* PRODUCT IMAGE */}
      <View style={tw`-mt-2`}>
        <Image
          source={{ uri: selectedProduct.imageUrl }}
          style={tw.style("self-center", {
            width: 200,
            height: 200,
            resizeMode: "contain",
          })}
        />
      </View>

      {/* PRODUCT DETAILS */}
      <View style={tw`bg-gray-200 mt-2 flex-1 rounded-t-3xl px-6 py-5`}>
        {/* HEADER DETAILS */}
        <View style={tw`flex flex-row justify-between items-center`}>
          <View style={tw`w-24 px-1 py-1 rounded-lg bg-red-200 items-center`}>
            <Text fontWeight='semibold' style={tw`text-sm text-red-500`}>
              Popular
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setIsFav(state => !state)}>
              {isFav ? (
                <AntDesign name='heart' size={22} color={tw.color("red-600")} />
              ) : (
                <AntDesign
                  name='hearto'
                  size={22}
                  color={tw.color("gray-700")}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* MAIN DETAILS */}
        <View style={tw`mt-5 flex-1`}>
          <Text fontWeight='bold' style={tw`text-3xl text-gray-700`}>
            {selectedProduct.name}
          </Text>

          {/* purchase details */}
          <View style={tw`mt-3 flex flex-row items-center`}>
            {/* rating */}
            <View style={tw`flex flex-row items-center`}>
              <FontAwesome
                name='star-half-empty'
                size={22}
                color={tw.color("red-500")}
              />
              <Text
                fontWeight='medium'
                style={tw`ml-2 text-base text-gray-400`}>
                4.8 Rating
              </Text>
            </View>
            {/* total orders */}
            <View style={tw`flex ml-5 flex-row items-center`}>
              <Feather
                name='shopping-bag'
                size={19}
                color={tw.color("red-500")}
              />
              <Text
                fontWeight='medium'
                style={tw`ml-2 text-base text-gray-400`}>
                100+ Orders
              </Text>
            </View>
          </View>

          {/* description */}
          <View style={tw`mt-5`}>
            {/* <Text fontWeight="semibold" style={tw`text-xl text-gray-800`}>Descripción</Text> */}
            <Text fontWeight='semibold' style={tw`text-gray-500`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              eaque, atque maiores aspernatur corrupti id necessitatibus eum
              magni. Inventore ipsam labore quos aut deleniti quia enim, ea
              dignissimos
            </Text>
          </View>
        </View>
        <View
          style={tw`py-7 -mb-5 -mx-5 px-6 border-t border-gray-300 flex-row justify-between items-center`}>
          <View style={tw`flex flex-row items-baseline`}>
            <Text fontWeight='bold' style={tw`text-3xl text-gray-700`}>
              ${selectedProduct.price}
            </Text>
            <Text fontWeight='semibold' style={tw`text-gray-700 text-xl`}>
              .00
            </Text>
          </View>
          <TouchableOpacity
            style={tw.style(
              "px-4 py-3 rounded-lg shadow-md w-44 items-center",
              inCart ? "bg-red-600" : "bg-red-500"
            )}
            onPress={inCart ? handleRemoveFromCart : handleAddToCart}>
            <Text fontWeight='medium' style={tw`text-gray-100 text-lg`}>
              {inCart ? "Agregado" : "Agregar al Carrito"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
