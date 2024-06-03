import React from "react";
import Header from "./../Header/index";

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default DefaultLayout;

