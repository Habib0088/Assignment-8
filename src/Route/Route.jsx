import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../assets/Component/Root";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Apps from "./Apps";
import Installation from "./Installation";
import AppDetails from "./AppDetails";

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
            Component:Apps,
            loader:()=> fetch('/allData.json')
        },
        {
            path:'Installation',
            Component:Installation,
            loader:()=> fetch('/allData.json')
        },
        {
          path:'AppDetails/:id',
          Component:AppDetails,
          loader:()=> fetch('/allData.json')

        }

    ]
  },
]);
