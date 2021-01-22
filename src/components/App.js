import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AccountPage from "../pages/AccountPage";
import Navbar from "../components/Navbar";
import "../css/App.css";
import SymbolPage from "../pages/SymbolPage";
import SettingsPage from "../pages/SettingsPage";
import { IdentityContextProvider } from "react-netlify-identity";

const App = () => {
  //const url = "https://your-identity-instance.netlify.com/"; // supply the url of your Netlify site instance with Identity enabled. VERY IMPORTANT

  return (
    <BrowserRouter>
      <div className="ui container container-style hundredvh">
        <Navbar />
        <div className="ui segment " style={{ height: "calc(100% - 65px)" }}>
          <Route path="/" exact component={Dashboard} />
          <Route path="/account" exact component={AccountPage} />
          <Route path="/trade/:pair" component={SymbolPage} />
          <Route path="/settings" component={SettingsPage} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
