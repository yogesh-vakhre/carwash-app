import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Blog from "./views/pages/Blog/Blog";
import BlogDetails from "./views/pages/Blog/BlogDetails/BlogDetails";
import Booking from "./views/pages/Booking/Booking";
import Contact from "./views/pages/Contact/Contact";
import ErrorPage from "./views/pages/ErrorPage/ErrorPage";
import Faq from "./views/pages/Faq/Faq";
import Gallery from "./views/pages/Gallery/Gallery";
import Home from "./views/pages/Home/Home";
import Service from "./views/pages/Service/Service";
import ServiceDetails from "./views/pages/Service/ServiceDetails/ServiceDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="faq" element={<Faq />} />
          <Route path="service" element={<Service />} />
          <Route path="service-single" element={<ServiceDetails />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog-single" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
