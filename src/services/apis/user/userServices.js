import http from "services/https";
import { LOGIN, SIGN_UP, USERS } from "../../../constants/endpoints";

export const login = async (credentials) => {
  const { data = {} } = await http.post(LOGIN, credentials);
  return data;
};

export const signUpServices = async (payload) => {
  const { data = {} } = await http.post(SIGN_UP, payload);
  return data;
};

export const getUsers = async (page = 0) => {
  const { data = {} } = await http.get(USERS(page));
  return data
}
