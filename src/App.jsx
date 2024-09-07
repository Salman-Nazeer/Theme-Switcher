import { ThemeProvider } from "./Context/TheamContext";
import Theam from "./Componenets/Theam.jsx";
import Card from "./Componenets/Card.jsx";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setthemeMode] = useState("light");

  const lightTheme = () => {
    setthemeMode("light");
  };

  const  darkTheme = () => {
    setthemeMode("dark");
  };

  // Actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* THEAM BTN */}
              <Theam />
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* CARD */}
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
