export const getEntriesById = (entries, id) => {
  return entries.find(entry => entry.sys.id === id)
}

export const checkContetent = (enties, localContent, key) => {
  return enties.fields[key] ? enties.fields[key] : localContent[key];
}