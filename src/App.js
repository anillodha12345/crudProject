import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsDetails from "./component/layout/carddetail";
import Footer from "./component/layout/footer";
import Header from "./component/layout/header";
import Login from "./component/layout/login/login";
import Register from "./component/layout/register/register";
import Update from "./component/layout/update/update";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Features from "./pages/features/features";
import Home from "./pages/home/home";
// import Services from "./pages/services/services";
import { ColorRing } from "react-loader-spinner";
import Category from "./pages/category/category";



const FeaturesDetail = React.lazy(() =>
  import("./component/layout/featuredetails/featuredetails")
);
const Services = React.lazy(() => import("./pages/services/services"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route
          path="/services"
          element={
            <Suspense fallback={<h4>Loading ....</h4>}>
              <Services />
            </Suspense>
          }
        />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/card/:id" element={<CardsDetails />} />
      <Route path="/category" element={<Category/>} /> 
        <Route
          path="/featuredetail/:id"
          element={
            <Suspense
              fallback={
                <h4>
                  <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                </h4>
              }
            >
              <FeaturesDetail />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
