import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      {/* <Text>{APP_ICONS.RIGHT}</Text> */}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2d3436",
    width: 200,
    paddingVertical: 15,
    marginTop: 10
  },
  text: {
    color: "#eee",
    fontWeight: "500",
    textAlign: "center"
  }
});
