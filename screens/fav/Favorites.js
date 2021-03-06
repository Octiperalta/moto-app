import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
import Text from "../../components/CustomText";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import { selectProduct } from "../../store/actions/product.actions";

const Favorites = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const favoritesProducts = useSelector(state => state.favorites.items);

  const handleSelectedProduct = item => {
    dispatch(selectProduct(item.id));
    navigation.navigate("ProductDetail", { hideCartIcon: true });
  };

  const renderProduct = ({ item }) => {
    return <ProductItem item={item} onPress={handleSelectedProduct} />;
  };

  return (
    <View style={tw`flex-1 bg-gray-50 relative`}>
      {/* HEADER */}
      <View style={tw`flex-row justify-center mt-14 px-6 items-center`}>
        {/* CENTER */}
        <Text fontWeight='bold' style={tw`text-3xl text-red-500 `}>
          Favorites
        </Text>
      </View>

      {/* CATEGORY */}
      <View style={tw`px-7 mt-3 flex-1`}>
        <View style={tw`flex-1 mt-2 -mx-2`}>
          {favoritesProducts.length > 0 ? (
            <FlatList
              data={favoritesProducts}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          ) : (
            <View style={tw`justify-center items-center flex-1`}>
              <Text
                fontWeight='semibold'
                style={tw`text-gray-300 text-xl text-center`}>
                You don't have favorites products yet.
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Favorites;
