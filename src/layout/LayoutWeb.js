import React from "react";
import { Footer, HeaderWeb } from "../components";

const LayoutWeb = ({ children }) => {
  return (
    <div>
      <HeaderWeb />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutWeb;
