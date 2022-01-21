import { useState, useEffect } from "react";
import Invoices from "./Components/Invoices";
import Sidebar from "./Components/Sidebar";
import Form from "./Components/Form";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import InvoiceDetails from "./Components/InvoiceDetails";
import "./App.css";

function App() {
  const [hideForm, setHideForm] = useState(true);
  const [data, setData] = useState("");

  const hideFormHandler = (e) => {
    setHideForm(!hideForm);
  };

  const getDataHandler = (values) => {
    setData(values);
  };

  useEffect(() => {
    return () => {
      setData("");
    };
  }, [data]);

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Form
          hide={hideForm}
          formStatus={hideFormHandler}
          data={getDataHandler}
        />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Invoices formHandler={hideFormHandler} fetch={data} />}
            />
            <Route path="/id/:id" element={<InvoiceDetails />} />
            <Route to="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
