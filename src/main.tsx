import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { ErrorPage } from "./ui/error/ErrorPage.tsx";
import { DebitList } from "./debit/component/DebitList.tsx";
import { AccountOverview } from "./account-overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <AccountOverview />,
      },
      {
        path: "debit",
        element: <DebitList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
