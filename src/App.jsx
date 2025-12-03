// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SideNav from "./components/SideNav";   // ⭐ navbar

// Lazy project pages
const Project2 = lazy(() => import("./components/Project2"));
const Project3 = lazy(() => import("./components/Project3"));
const Project4 = lazy(() => import("./components/Project4"));
const Project5 = lazy(() => import("./components/Project5"));
const Project6 = lazy(() => import("./components/Project6"));

function Loader() {
  return <div style={{ color: "#fff", padding: "2rem" }}>Loading…</div>;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SideNav />   {/* ⭐ always visible, all routes */}

      <Routes>
        {/* HOME PAGE */}
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

        {/* PROJECT PAGES */}
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

        <Route
          path="/project5"
          element={
            <Suspense fallback={<Loader />}>
              <Project5 />
            </Suspense>
          }
        />

        <Route
          path="/project6"
          element={
            <Suspense fallback={<Loader />}>
              <Project6 />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}
