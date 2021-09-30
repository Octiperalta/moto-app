import React from "react";
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Text from "../../components/CustomText";
import { Feather, Octicons, Entypo } from "@expo/vector-icons";
import ProductItem from "../../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../../store/actions/product.actions";
import { selectCategory } from "../../store/actions/category.actions";
import CategoryItem from "../../components/CategoryItem";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);
  const categories = useSelector(state => state.categories.list);

  const handleSelectedProduct = item => {
    dispatch(selectProduct(item.id));
    navigation.navigate("ProductDetail");
  };

  const handleSelectedCategory = category => {
    dispatch(selectCategory(category.id));
    navigation.navigate("CategoryProducts", { categoryName: category.name });
  };

  const renderCategory = ({ item }) => {
    return <CategoryItem category={item} onPress={handleSelectedCategory} />;
  };

  const renderProduct = ({ item }) => {
    return <ProductItem item={item} onPress={handleSelectedProduct} />;
  };

  return (
    <View style={tw`flex-1 bg-gray-50 px-7`}>
      {/* HEADER */}
      <View style={tw`flex-row justify-between mt-14 items-start`}>
        {/* LEFT */}
        <View>
          <Text style={tw`text-2xl text-gray-800`} fontWeight='semibold'>
            Welcome to
          </Text>
          <Text
            style={tw`text-4xl mt-1 text-gray-800 text-red-500`}
            fontWeight='bold'>
            Moto Market
          </Text>
        </View>
        {/* RIGHT */}
        <View style={tw`mt-2`}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/default-avatar.png")}
              style={tw`h-12 w-12`}
            />
          </TouchableOpacity>

          {/* <TouchableOpacity>
            <Feather
              name='shopping-cart'
              size={26}
              color={tw.color("gray-700")}
            />
          </TouchableOpacity> */}
        </View>
      </View>

      {/* SEARCH BAR */}
      <View style={tw`mt-8  flex-row`}>
        {/* SEARCH INPUT */}
        <View
          style={tw`flex-row flex-1 px-3 h-11 items-center rounded-lg bg-gray-200`}>
          <Feather name='search' size={22} color='rgba(31, 41, 55, 1)' />
          <TextInput
            style={tw`text-gray-800 h-full px-2 flex-1 text-lg ${
              Platform.OS === "ios" ? "pb-3" : ""
            }`}
            blurOnSubmit={true}
            autoCorrect={false}
          />
        </View>
        {/* FILTER BUTTON */}
        <TouchableOpacity
          style={tw`w-10 ml-2 flex-shrink-0 bg-red-500 flex items-center justify-center rounded-lg`}>
          <Octicons name='settings' size={24} color='rgba(243, 244, 246, 1) ' />
        </TouchableOpacity>
      </View>

      {/* CATEGORIES */}
      <View style={tw`mt-5 -mr-7`}>
        <Text style={tw`text-red-500 text-lg`} fontWeight='bold'>
          Categories
        </Text>
        {/* categories horizontal list */}
        <View style={tw`mt-2`}>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
      </View>
      {/* TOP PRODUCTS */}
      <View style={tw`mt-4 flex-1`}>
        {/* HEADER */}
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-red-500 text-2xl`} fontWeight='bold'>
            Top Products
          </Text>
          <TouchableOpacity>
            <Text style={tw`text-xs text-gray-800`} fontWeight='medium'>
              See all
            </Text>
          </TouchableOpacity>
        </View>

        {/* PRODUCT LIST */}
        <View style={tw`mt-4 flex-1`}>
          {/* PRODUCT */}
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

export default Home;
