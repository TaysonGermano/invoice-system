import { useState, useEffect, useContext } from "react";
import Invoices from "./Components/Invoices";
import Sidebar from "./Components/Sidebar";
import Form from "./Components/Form";
import PageNotFound from "./Components/PageNotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvoiceDetails from "./Components/InvoiceDetails";
import "./App.css";
import HideForm from "./Context/showForm";

function App() {
  const [data, setData] = useState("");

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
        <HideForm>
          <Form data={getDataHandler} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Invoices fetch={data} />} />
              <Route path="/id/:id" element={<InvoiceDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </HideForm>
      </div>
    </Router>
  );
}

export default App;
