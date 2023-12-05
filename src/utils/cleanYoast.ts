export const cleanYoast = (yoastHead = "", currentURL = "") => {
  if (!yoastHead || !currentURL) return yoastHead;

  yoastHead = yoastHead.replace(
    /<link rel="canonical" href="[^"]+"/,
    `<link rel="canonical" href="${currentURL}"`
  );

  yoastHead = yoastHead.replace(
    /<meta property="og:url" content="[^"]+"/,
    `<meta property="og:url" content="${currentURL}"`
  );

  return yoastHead;
};
