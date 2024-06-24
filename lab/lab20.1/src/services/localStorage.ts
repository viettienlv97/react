export const getItem = (key: string, initialState: any) => {
  const jsonItem = localStorage.getItem(key)
  if (jsonItem) return JSON.parse(jsonItem)
  return initialState
}

export const setItem = (key: string, payload: any) => {
  localStorage.setItem(key, JSON.stringify(payload))
}

export const removeItem = (key: string) => {
  localStorage.removeItem(key)
}
