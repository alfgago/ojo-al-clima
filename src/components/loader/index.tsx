import { LoaderStyle } from "./LoaderStyle"

export const Loader = ({ color = "white" }: any) => {
  return (
    <LoaderStyle color={color}>
      <span className="loader"></span>
    </LoaderStyle>
  )
}
