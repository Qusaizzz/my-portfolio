import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy pages (keep your separate files)
const Project1 = lazy(() => import("./components/Project1"));
const Project2 = lazy(() => import("./components/Project2"));
const Project3 = lazy(() => import("./components/Project3"));
const Project4 = lazy(() => import("./components/Project4"));

function Loader() {
  return <div style={{ color:"#fff", padding:"2rem" }}>Loading…</div>;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Footer />
            </>
          }
        />
        <Route
          path="/project1"
          element={
            <Suspense fallback={<Loader />}>
              <Project1 />
            </Suspense>
          }
        />
        <Route
          path="/project2"
          element={
            <Suspense fallback={<Loader />}>
              <Project2 />
            </Suspense>
          }
        />
        <Route
          path="/project3"
          element={
            <Suspense fallback={<Loader />}>
              <Project3 />
            </Suspense>
          }
        />
        <Route
          path="/project4"
          element={
            <Suspense fallback={<Loader />}>
              <Project4 />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}
