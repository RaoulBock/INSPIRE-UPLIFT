import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <Text>{APP_ICONS.RIGHT}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    backgroundColor: "#6c5ce7",
    borderTopColor: "#a29bfe",
    borderTopWidth: 1,
    margin: 10,
    width: 300,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#eee",
    fontWeight: "500",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});
