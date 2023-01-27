import http from "services/https";
import { arrayMapper } from "utils/arrays.utils";
import { MODALITIES, MODALITIES_PROCEDURE } from "../../constants/endpoints";

export const getModalities = async (page = 10000) => {
  const { data = {} } = await http.get(MODALITIES(page));
  return arrayMapper(data)
}

export const getModalitiesByProcedure = async (ids, page = 10000) => {
  const { data = {} } = await http.get(MODALITIES_PROCEDURE(ids, page));
  return arrayMapper(data)
}