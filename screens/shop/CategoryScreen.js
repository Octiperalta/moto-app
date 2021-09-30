import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
import Text from "../../components/CustomText";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  selectProduct,
} from "../../store/actions/product.actions";
import ProductItem from "../../components/ProductItem";

const CategoryScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categoryID = useSelector(state => state.categories.selectedID);
  const category = route.params.categoryName;
  const products = useSelector(state => state.products.filteredProducts);

  const goBack = () => {
    navigation.goBack();
  };

  const goToCart = () => {
    navigation.navigate("CartList");
  };

  const handleSelectedProduct = item => {
    dispatch(selectProduct(item.id));
    navigation.navigate("ProductDetail");
  };

  const renderProduct = ({ item }) => {
    return <ProductItem item={item} onPress={handleSelectedProduct} />;
  };
  useEffect(() => {
    dispatch(filterProducts(categoryID));
  }, [categoryID]);

  return (
    <View style={tw`flex-1 bg-gray-50 relative`}>
      {/* HEADER */}
      <View style={tw`flex-row justify-center mt-14 px-6 items-center`}>
        {/* LEFT */}
        <View style={tw`absolute left-6`}>
          <TouchableOpacity
            onPress={goBack}
            style={tw`w-10 justify-center h-10 items-center relative `}>
            <MaterialIcons
              name='arrow-back-ios'
              size={24}
              color={tw.color("gray-700")}
            />
          </TouchableOpacity>
        </View>

        {/* CENTER */}
          <Text fontWeight='bold' style={tw`text-3xl text-red-500 `}>
            {category}
          </Text>

        {/* RIGHT */}
        <View style={tw`absolute right-6`}>
          <TouchableOpacity onPress={goToCart}>
            <Feather
              name='shopping-cart'
              size={26}
              color={tw.color("gray-700")}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* CATEGORY */}
      <View style={tw`px-7 mt-3 flex-1`}>
        <View style={tw`flex-1 mt-2 -mx-2`}>
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
