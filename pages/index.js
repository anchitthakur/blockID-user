import React from "react";
import Login from "./auth/login";
import Register from "./auth/register";
import Auth from "../layouts/Auth";

export default function Index() {
  return (
    <>
    <Auth>
       <Login/>
    </Auth>
    </>
  );
}
