export const arrayMapper = resp => {
    const key = resp?.response['_rel'];
    const data = resp?.response['_embedded'][key]['data'];
    return data
}