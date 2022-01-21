import { useState } from "react";

export default function Theme() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = document.querySelector("body");

  const light = <i className="fas fa-sun"></i>;
  const dark = <i className="fas fa-moon"></i>;

  return (
    <div
      onClick={() => {
        theme.classList.toggle("dark");
        setDarkMode(!darkMode);
      }}
      style={{ color: "#7E88C3", fontSize: "20px", cursor: "pointer" }}
    >
      {darkMode ? light : dark}
    </div>
  );
}
