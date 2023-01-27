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

export const getUsers = async (page = 10000) => {
  const { data = {} } = await http.get(USERS + '?limit=' + page);
  return data
}

export const handleUsers = async (body, id) => {
  return await !id ? storeUsers(body) : editUsers(body, id)
}

export const storeUsers = async (payload) => {
  const { data = {} } = await http.post(USERS, payload);
  return data
}

export const editUsers = async (payload, id) => {
  const { data = {} } = await http.put(USERS + '/' + id, payload);
  return data
}
