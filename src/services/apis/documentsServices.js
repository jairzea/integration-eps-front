import { DOCUMENTS, REPORTS_DOCUMENTS, GENERAL_REPORTS } from "constants/endpoints";
import http from "services/https";

export const handleDocuments = async (body, editData) => {
  return await !editData ? storeDocuments(body) : editDocuments(body)
}


export const storeDocuments = async (body) => {
  const { data = {} } = await http.post(DOCUMENTS, body,{
    headers: {
        "Content-Type": "multipart/form-data",
      }
  });
  return data;
};

export const editDocuments = async (body) => {
  const { data = {} } = await http.post(DOCUMENTS + '/' + body?.id, body,{
    headers: {
        "Content-Type": "multipart/form-data",
      }
  });
  return data;
};

export const getDocuments = async ({value2 = '', value = '', field = '', criterion = ''}) => {
  const { data = {} } = await http.get(`${DOCUMENTS}?limit=${10000}&field=${field}&criterion=${criterion}&value=${value}&value2=${value2}`);
  return data;
};

export const getReports = async () => {
  const { data = {} } = await http.get(REPORTS_DOCUMENTS);
  return data;
};

export const getGeneralReports = async () => {
  const { data = {} } = await http.get(GENERAL_REPORTS);
  return data;
};
