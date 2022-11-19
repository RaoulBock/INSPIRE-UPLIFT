import React from "react";
import { StatusBar } from "expo-status-bar";
import AppProvider, { AppContext } from "./context/AppProvider";
import { APP_PAGES } from "./context/settings";
import HomeScreen from "./components/Screens/HomeScreen";

function App() {
  return (
    <AppProvider>
      <NavWrapper />
    </AppProvider>
  );
}

const NavWrapper = () => {
  const { navPage, setNavPage } = React.useContext(AppContext);
  const onSetNavPage = (e) => {
    setNavPage(e);
  };

  React.useEffect(() => {
    console.log("App Nav: ", navPage);
  }, [navPage]);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#1a1e21"
        style="light"
        hidden={false}
        translucent={true}
      />
      {navPage === APP_PAGES.APP.HOME && (
        <HomeScreen setNavPage={onSetNavPage} />
      )}
    </>
  );
};

export default App;
