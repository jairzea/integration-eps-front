export const LOGIN = "/auth/authentication";

export const SIGN_UP = "/auth/signup";

export const USERS = `/user`;

export const TYPES_DOCMENTS = (page = 10000) => `/types_documents?limit=${page}`;

export const PROCEDURES = (page = 10000) => `/procedure?limit=${page}`;

export const MODALITIES = (page = 10000) => `/modality?limit=${page}`;

export const MODALITIES_PROCEDURE = (ids, page = 10000) => `/modality/procedure?limit=${page}&procedure_id=[${ids}]`;

export const DOCUMENTS = "/documents";

export const REPORTS_DOCUMENTS = "/documents/reports";

export const GENERAL_REPORTS = "/documents/general_reports";

