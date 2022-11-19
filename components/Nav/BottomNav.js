import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";
import { AppContext } from "../../context/AppProvider";

const BottomNav = () => {
  const menu = [
    {
      id: 1,
      name: "Bookmark",
      icon: APP_ICONS.BOOKMARK
    },
    {
      id: 2,
      name: "Home",
      icon: APP_ICONS.HOME
    }
  ];
  return (
    <View style={styles.outline}>
      {menu.map((e, i) => {
        return (
          <TouchableOpacity key={i}>
            <Text>{e.icon}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: "#333",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
