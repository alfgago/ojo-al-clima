
export const getIDforDiv = (html: string): string => {
  // Extraer el texto sin etiquetas HTML usando una expresión regular
  const textContent = html.replace(/<\/?[^>]+(>|$)/g, "").trim();

  // Convertir el texto a "kebab-case"
  return textContent
    .toLowerCase()
    .replace(/\s+/g, "-") // Reemplazar espacios por guiones
    .replace(/[^a-z0-9-]+/g, "") // Remover caracteres no alfanuméricos
    .replace(/--+/g, "-") // Reemplazar múltiples guiones por uno solo
    .replace(/^-+|-+$/g, ""); // Remover guiones al inicio y al final
}
