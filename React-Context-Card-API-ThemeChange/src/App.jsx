import {useState, useEffect} from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme.js";
import Card from "./components/Card.jsx"
import ThemeBtn from "./components/ThemeBtn.jsx"

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);
  
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
          </div>
          
          <div className="w-full max-w-sm mx-auto"></div>
        <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
