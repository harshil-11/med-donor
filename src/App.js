import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Donnor from "./Pages/Donnor";
import Event from "./Pages/Event";
import EventRegister from "./Pages/EventRegister";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Services from "./Pages/Services";
// import SignIn from "./Pages/SignIn";
import Signin from "./Pages/Signin";
import SignUp from "./Pages/SignUp";

function App() {

  const user = localStorage.getItem('token')

  return (
    <Router>
      {/* <DocumentMeta {...meta} /> */}
      <Routes>
        {user && <Route path="/" exact element={<Home />} />}
        <Route path="/about" exact element={<About />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/donnor" exact element={<Donnor />} />
        <Route path="/event" exact element={<Event />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/" exact element={<Navigate replace to="/signin" />} />
        <Route path="/eventregister" exact element={<EventRegister />} />
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
