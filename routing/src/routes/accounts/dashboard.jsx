import About from "../../components/accounts/About";
import Dashboard from "../../components/accounts/Dashboard";

export default {
  path: "dashboard",
  element: <Dashboard />,
  children: [
    {
      path: "about",
      element: <About />,
    },
  ],
};
