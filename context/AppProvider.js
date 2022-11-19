import React from "react";
import { APP_PAGES } from "./settings";

let previousPage = 0;

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {}
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.HOME);
  const [list, setList] = React.useState();
  const [pageIndex, setPageIndex] = React.useState(0);

  const [header, setHeader] = React.useState("");

  React.useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "X-RapidAPI-Key",
      "af913674e8mshd049bcd448bbeabp18f138jsn2ddff479839c"
    );
    myHeaders.append("X-RapidAPI-Host", "motivational-quotes1.p.rapidapi.com");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };

    pageIndex !== previousPage ? list[pageIndex] : list;

    fetch(
      `https://motivational-quotes1.p.rapidapi.com/motivation`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        previousPage = pageIndex;
        setList(result);
      })
      .catch((error) => console.log("error", error));
  }, [pageIndex]);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        list,
        setList,
        pageIndex,
        setPageIndex
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
