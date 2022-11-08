import { useState, useEffect, useLayoutEffect } from "react";
import Invoices from "./pages/invoices";
import Sidebar from "./Components/Sidebar";
import Form from "./Components/Form";
import PageNotFound from "./pages/404";
import Login from "./pages/login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import InvoiceDetails from "./pages/invoice-details";
import "./App.css";
import HideForm from "./Context/showForm";
import AuthProvider from "./Context/auth";

function App() {
  const [data, setData] = useState("");

  const getDataHandler = (values) => {
    setData(values);
  };

  const redirectPage = () => {
    if (sessionStorage.getItem("user")) {
      return null;
    } else {
      return <Navigate to="/login" />;
    }
  };

  useEffect(() => {
    return () => {
      setData("");
    };
  }, [data]);

  useLayoutEffect(() => {
    const theme = document.querySelector("body");
    JSON.parse(window.localStorage.getItem("mode"))
      ? theme.classList.add("dark")
      : theme.classList.remove("dark");
  }, []);

  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <HideForm>
            <Sidebar />
            <Form data={getDataHandler} />
            <div className="container">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/"
                  element={redirectPage() || <Invoices fetch={data} />}
                />
                <Route
                  path="/id/:id"
                  element={redirectPage() || <InvoiceDetails />}
                />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </HideForm>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
