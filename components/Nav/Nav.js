import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const Nav = () => {
  return (
    <View style={styles.outline}>
      <Text style={styles.text}>Would You Rather?</Text>
      <TouchableOpacity style={styles.btn}>
        <Text>{APP_ICONS.REFRESH}</Text>
      </TouchableOpacity>
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
    borderBottomColor: "#a29bfe",
    borderBottomWidth: 1,
    backgroundColor: "#6c5ce7",
  },
  text: {
    fontWeight: "500",
    color: "#eee",
    fontSize: 18,
  },
  btn: {
    backgroundColor: "#a29bfe",
    padding: 10,
    borderRadius: 50,
  },
});
