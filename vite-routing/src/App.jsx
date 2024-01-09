import "./App.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import MasterLayout from "./components/MasterLayout";
import Error from "./components/Error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<Home />} />
          <Route
            path="about"
            element={<About />}
            errorElement={<p>About-ERRor</p>}
          />
        </Route>
        <Route
          path="/contact"
          element={<Contact />}
          errorElement={<p>Contact Custom Error Element</p>}
        />
        <Route path="/contact/*" element={<Error />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
