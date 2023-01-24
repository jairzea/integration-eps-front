import http from "services/https";
import { arrayMapper } from "utils/arrays.utils";
import { MODALITIES } from "../../constants/endpoints";

export const getModalities = async (page = 0) => {
    const { data = {} } = await http.get(MODALITIES(page));
    return arrayMapper(data)
  }