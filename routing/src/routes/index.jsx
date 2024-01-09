import { createBrowserRouter } from "react-router-dom";
import home from "./home";
import login from "./login";
import registration from "./registration";
import accounts from "./accounts";
import hr from "./hr";

const router = createBrowserRouter([home, login, registration, accounts, hr]);

export default router;
