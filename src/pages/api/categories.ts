import { customAPI } from "./base"
import { queryClient } from "@/utils"

export const fetchCategoryData = async (
  categoryName: string,
  page: number,
  staleTime?: number
) => {
  await queryClient.prefetchQuery(
    ["categoryData", categoryName, page],
    async () => {
      const response = await customAPI.get(
        `/categories/${categoryName}/${page}`
      )
      return response.data
    },
    { staleTime: staleTime ? staleTime * 1000 : undefined }
  )

  return queryClient.getQueryData(["categoryData", categoryName, page])
}
