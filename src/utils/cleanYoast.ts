export const cleanYoast = (yoastHead = "", wpUrl: string, domain: string) => {
  const replacer = new RegExp(wpUrl, "g")
  let yoast = yoastHead.replace(replacer, domain)

  const replacerWP = new RegExp(domain + "/wp-content", "g")
  yoast = yoast.replace(replacerWP, domain)

  const replacerSEO = new RegExp(domain + "/homepage", "g")
  yoast = yoast.replace(replacerSEO, domain)

  return yoast
}
