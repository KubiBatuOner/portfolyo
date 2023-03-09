import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const formSuccess = () => {
    toast("Thank you for your message!");
  };

  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Intro />
      <Skills />
      <Profile />
      <Projects />
      <Footer formSuccess={formSuccess} />
    </div>
  );
}

export default App;
