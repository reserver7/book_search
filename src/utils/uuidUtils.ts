export function generateUUID(): string {
  const randomChar = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)

  return `${randomChar()}${randomChar()}-${randomChar()}-${randomChar()}-${randomChar()}-${randomChar()}${randomChar()}${randomChar()}`
}

export const loadTitleUUIDMap = (): Record<string, string> => {
  const storedMap = localStorage.getItem('titleUUIDMap')
  return storedMap ? JSON.parse(storedMap) : {}
}

export const saveTitleUUIDMap = (map: Record<string, string>): void => {
  localStorage.setItem('titleUUIDMap', JSON.stringify(map))
}
