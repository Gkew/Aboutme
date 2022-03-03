import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
// import Background from './img/cool-background.png'
import useLocalStorage from "use-local-storage";
import Sidenav from "./Sidenav";
import About from "./About";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="app" data-theme={theme}>
      <About />
    </div>
  );
}

export default App;
