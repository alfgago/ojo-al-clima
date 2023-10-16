export const cleanSrc = (src: string) => {
  const cleaned = src.replace(
    process.env.NEXT_PUBLIC_WORDPRESS_URL + "/wp-content/uploads",
    process.env.NEXT_PUBLIC_DOMAIN + "/uploads"
  )

  return cleaned
}
