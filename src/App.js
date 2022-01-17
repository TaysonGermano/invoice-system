import { useState } from "react";
import Invoices from "./Components/Invoices";
import Sidebar from "./Components/Sidebar";
import Form from "./Components/Form";
import "./App.css";

function App() {
  const [hideForm, setHideForm] = useState(true);

  const hideFormHandler = (e) => {
    setHideForm(!hideForm);
  };

  return (
    <div className="App">
      <Sidebar />
      <Form hide={hideForm} formStatus={hideFormHandler} />
      <div className="container">
        <Invoices formHandler={hideFormHandler} />
      </div>
    </div>
  );
}

export default App;
