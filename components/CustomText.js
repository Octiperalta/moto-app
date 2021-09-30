import React from "react";
import { Text } from "react-native";

const Customtext = ({ children, fontWeight = "regular", style, ...rest }) => {
  return (
    <Text
      {...rest}
      style={{ ...style, fontFamily: `encodeSans-${fontWeight}` }}>
      {children}
    </Text>
  );
};

export default Customtext;
