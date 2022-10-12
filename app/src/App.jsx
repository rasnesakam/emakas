import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { RoutedContent } from "./Routes";

function App() {
  return (
    <div className="bg-ground">
      <Navbar />
      <div className=" min-h-screen"> 
        <RoutedContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
