import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage";
import { MainLayout } from "../layouts/MainLayout";
import { welcomeRoutes } from "./welcomeRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: [
            welcomeRoutes
        ]
    },
    {
        path: "/4",
        element: <div>4</div>
    }
]);