import "./App.css";
import Sidebar from "./components/Sidebar";
import Mainsection from "./components/Mainsection.js";

// https://emoodtracker.com/img/hero-img-emoods.png

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      {/* Wrapper of Contents + SideBar */}
      <div className="flex flex-row">
        <Sidebar />
        <Mainsection />
      </div>
    </div>
  );
}

export default MyApp;
