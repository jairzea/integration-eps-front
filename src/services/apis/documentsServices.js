import { DOCUMENTS } from "constants/endpoints";
import http from "services/https";

export const handleDocuments = async (body, editData) => {
  console.log('editData', editData)
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
  console.log('body', body)
  const { data = {} } = await http.post(DOCUMENTS + '/' + body?.id, body,{
    headers: {
        "Content-Type": "multipart/form-data",
      }
  });
  return data;
};

export const getDocuments = async () => {
    const { data = {} } = await http.get(DOCUMENTS);
    return data;
  };
