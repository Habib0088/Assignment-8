import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../assets/Component/Root";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Apps from "./Apps";
import Installation from "./Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {

            path:'/',
            Component:Home,
            loader:()=> fetch('/data.json')
        },
        {
            path:'Apps',
            Component:Apps
        },
        {
            path:'Installation',
            Component:Installation
        }

    ]
  },
]);
