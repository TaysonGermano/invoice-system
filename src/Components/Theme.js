import { useState, useLayoutEffect } from "react";

export default function Theme() {
  window.localStorage.getItem("mode") === null &&
    window.localStorage.setItem("mode", JSON.stringify(false));
  const [darkMode, setDarkMode] = useState("");

  const theme = document.querySelector("body");
  const light = <i className="fas fa-sun"></i>;
  const dark = <i className="fas fa-moon"></i>;

  useLayoutEffect(() => {
    setDarkMode(JSON.parse(window.localStorage.getItem("mode")));
  }, []);

  return (
    <div
      onClick={() => {
        theme.classList.toggle("dark");
        const mode = !darkMode;
        setDarkMode(!darkMode);
        window.localStorage.setItem("mode", JSON.stringify(mode));
      }}
      style={{ color: "#7E88C3", fontSize: "20px", cursor: "pointer" }}
    >
      {darkMode ? light : dark}
    </div>
  );
}
