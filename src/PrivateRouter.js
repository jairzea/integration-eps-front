import { useHistory } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const access_token = localStorage.getItem("access_token");
  const history = useHistory()

  return access_token ? children : history.push("/auth/signin");
};
