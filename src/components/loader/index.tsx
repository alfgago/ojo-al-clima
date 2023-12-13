import { LoaderStyle } from "./LoaderStyle"

export const Loader = ({ color = "white" }: any) => {
  return (
    <LoaderStyle className="loader-container" color={color}>
      <span className="loader"></span>
    </LoaderStyle>
  )
}
