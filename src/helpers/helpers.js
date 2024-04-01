export const getEntriesById = (entries, id) => {
  return entries.find(entry => entry.sys.id === id)
}