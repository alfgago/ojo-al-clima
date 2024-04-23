import { adsAPI } from "./base";

export const fetchAdsData = async (slug: string) => {
  const response = await adsAPI.get(`${slug}`);
  return response.data;
};
