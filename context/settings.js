export const APP_PAGES = {
  APP: {
    HOME: "HOME"
  }
};

import { Ionicons } from "react-native-vector-icons";

export const APP_ICONS = {
  BOOKMARK: (
    <Ionicons
      name="ios-bookmark-outline"
      style={{ color: "#eee", fontSize: 20 }}
    />
  ),
  HOME: (
    <Ionicons name="ios-home-outline" style={{ color: "#eee", fontSize: 20 }} />
  ),
  RIGHT: (
    <Ionicons
      name="ios-chevron-forward-outline"
      style={{ color: "#5a6e7a", fontSize: 58 }}
    />
  ),
  LEFT: (
    <Ionicons
      name="ios-chevron-back-outline"
      style={{ color: "#5a6e7a", fontSize: 58 }}
    />
  ),
  CENTER_BOOKMARK: (
    <Ionicons
      name="ios-bookmark-outline"
      style={{ color: "#5a6e7a", fontSize: 40 }}
    />
  )
};
