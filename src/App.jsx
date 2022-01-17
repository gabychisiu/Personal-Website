import "./App.css";
import { Header } from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AboutPage } from "./components/Pages/AboutPage";
import { HomePage } from "./components/Pages/HomePage";
import { SkillsPage } from "./components/Pages/SkillsPage";
import { WorkPage } from "./components/Pages/WorkPage";
import { ContactPage } from "./components/Pages/ContactPage";

export const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#004d40",
      light: "#346d63",
      dark: "#002f24",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00698f",
      light:"#3489a6",
      dark: "#013f56",
      contrastText: "#fff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#004d40',
      light: '#346d63',
      dark: '#002f24',
    },
    secondary: {
      main: '#00698f',
      light: '#3489a6',
      dark: '#013f56',
    },
    background: {
      default: '#141414',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/skills">
              <SkillsPage />
            </Route>
            <Route path="/work">
              <WorkPage />
            </Route>
            <Route path="/contact">
              <ContactPage
                name="Chisiu Marius Gabriel"
                address="Cluj-Napoca"
                email="chisiugaby@gmail.com"
                phone="+40758254399"
              />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
