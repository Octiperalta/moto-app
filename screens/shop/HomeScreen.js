import React, { useEffect } from "react";
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
import {
  filterPopular,
  selectProduct,
} from "../../store/actions/product.actions";
import { selectCategory } from "../../store/actions/category.actions";
import CategoryItem from "../../components/CategoryItem";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const popularProducts = useSelector(state => state.products.popularProducts);
  const categories = useSelector(state => state.categories.list);

  const goToCart = () => {
    navigation.navigate("CartList");
  };

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

  useEffect(() => {
    dispatch(filterPopular());
  }, []);
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
          {/* <TouchableOpacity>
            <Image
              source={require("../../assets/default-avatar.png")}
              style={tw`h-12 w-12`}
            />
          </TouchableOpacity> */}

          <TouchableOpacity onPress={goToCart}>
            <Feather
              name='shopping-cart'
              size={26}
              color={tw.color("gray-700")}
            />
          </TouchableOpacity>
        </View>
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
        <View style={tw`mt-2 -mx-1 flex-1`}>
          {/* PRODUCT */}
          <FlatList
            data={popularProducts}
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
