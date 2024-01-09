import Account from "../../components/accounts/Account";
import dashboard from "./dashboard";

export default {
  path: "/account",
  element: <Account />,
  children: [dashboard],
};
