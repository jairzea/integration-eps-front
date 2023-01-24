import http from "services/https";
import { arrayMapper } from "utils/arrays.utils";
import { PROCEDURES } from "../../constants/endpoints";

export const getProcedures = async (page = 0) => {
    const { data = {} } = await http.get(PROCEDURES(page));
    return arrayMapper(data)
  }