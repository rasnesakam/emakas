import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { RoutedContent } from "./components/RoutedContent";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-ground min-h-screen"> 
        <RoutedContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
