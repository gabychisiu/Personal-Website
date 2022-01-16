import "./App.css";
import { Header } from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CounterPage } from "./components/Pages/CounterPage";
import { ToDoPage } from "./components/Pages/ToDoPage";
import { DigitalClockPage } from "./components/Pages/DigitalClockPage";

import { AboutPage } from "./components/Pages/AboutPage";
import { HomePage } from "./components/Pages/HomePage";
import { SkillsPage } from "./components/Pages/SkillsPage";
import { WorkPage } from "./components/Pages/WorkPage";
import { ContactPage } from "./components/Pages/ContactPage";

function App() {
  return (
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

          <Route path="/counter">
            <CounterPage />
          </Route>
          <Route path="/todo">
            <ToDoPage />
          </Route>
          <Route path="/digital_clock">
            <DigitalClockPage />
          </Route>
          <Redirect to="/counter" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
