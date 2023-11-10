import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getItem, KEY_ACCESS_TOKEN } from "../utils/localStorageManager";

function OnlyIfNotLoggedIn() {
  //if accesstoken present :: navigate to home else login
  const accessToken = getItem(KEY_ACCESS_TOKEN);
  return accessToken ? <Navigate to="/" /> : <Outlet />;
}

export default OnlyIfNotLoggedIn;
