export const attrSafe = string => string.toLowerCase().replace(' ', '-')

export const setCSSVar = (prop, value) => {
  const cssVar = '--' + attrSafe(prop)
  document.documentElement.style.setProperty(cssVar, value)
}
