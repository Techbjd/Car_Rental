
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Cart from "./pages/cart";
import CarDetails from "./components/CarDetails"; 
import { useParams } from "react-router-dom";


const CarDetailsWrapper: React.FC = () => {
  const { carId } = useParams();
  return <CarDetails carId={Number(carId)} />;
};
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/vehicles"
          element={
            <MainLayout>
              <Vehicles />
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
         <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />
         <Route path="/car/:carId" 
         element=
         {<MainLayout>
          <CarDetailsWrapper />
          </MainLayout>
          }
           />
      </Routes>
    </Router>
  );
}

export default App;
