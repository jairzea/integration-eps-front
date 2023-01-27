import http from "services/https";
import { arrayMapper } from "utils/arrays.utils";
import { TYPES_DOCMENTS } from "../../constants/endpoints";

export const getTypesDocuments = async (page = 10000) => {
    const { data = {} } = await http.get(TYPES_DOCMENTS(page));
    return arrayMapper(data)
  }