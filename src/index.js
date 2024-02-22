import React from "react";
import ReactDOM from "react-dom/client";
import SignUp from "./auth/Signup";
import Login from "./auth/Login";
import Main from "./dashboard/Main";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Courses from "./dashboard/courses/courses";
import LiveClass from "./dashboard/liveClass/live-class";
import Forum from "./dashboard/forum/forum";
import LearningReport from "./dashboard/learningReport/learning-report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Main />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/live-class",
    element: <LiveClass/>,
  },
  {
    path: "/forum",
    element: <Forum />,
  },
  {
    path: "/learning-report",
    element: <LearningReport />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="428831997287-qtrhpg4llq9o2hadi90iu6smc37b5rif.apps.googleusercontent.com">
    <RouterProvider router={router}></RouterProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
