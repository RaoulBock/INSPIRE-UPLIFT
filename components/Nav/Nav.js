import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";
import moment from "moment";

const Nav = ({ title }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.text}>{moment().format("dddd")}</Text>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#1a1e21"
  },
  text: {
    fontWeight: "300",
    color: "#dfe6e9",
    fontSize: 48
  },
  btn: {
    backgroundColor: "#a29bfe",
    padding: 10,
    borderRadius: 50
  }
});
