import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
// import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <AppRoutes />
          {/* <Toaster />  */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
