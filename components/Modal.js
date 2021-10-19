import React from "react";
import { TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import Text from "./CustomText";

const CustomModal = ({ open, handleClose: close, message, success }) => {
  return (
    <Modal
      animationIn='zoomIn'
      animationOut='fadeOutUp'
      style={tw`items-center`}
      isVisible={open}
      onBackdropPress={close}>
      <View style={tw`bg-gray-100 w-72 rounded items-center overflow-hidden`}>
        <View style={tw`bg-red-100 py-3 px-3 rounded-full my-2`}>
          <AntDesign name='warning' size={40} color={tw.color("red-500")} />
        </View>

        <View style={tw`mt-2 items-center px-8`}>
          <Text fontWeight='bold' style={tw`text-gray-700 text-3xl`}>
            Oops!
          </Text>
          <Text
            fontWeight='medium'
            style={tw.style("mt-2 text-center text-gray-400", {
              fontSize: 18,
              lineHeight: 20,
            })}>
            {message}
          </Text>
        </View>
        <TouchableOpacity
          style={tw`py-2 text-lg bg-red-500 w-full mt-5`}
          onPress={close}>
          <Text
            fontWeight='medium'
            style={tw`text-center text-xl text-gray-100`}>
            Dismiss
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CustomModal;
