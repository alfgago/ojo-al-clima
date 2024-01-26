import { AdBlockStyle } from "./AdBlockStyle"

export const AdBlock = ({ data, type='horizontal' }: AdBlockProps) => {
  return (
    <AdBlockStyle className="ad-block-container">
      <div
        className={`ad-block ${type}`}
        dangerouslySetInnerHTML={{
          __html: data,
        }}
      /> 
    </AdBlockStyle>
  )
}

interface AdBlockProps {
  data: string
  type: "horizontal" | "full"
}
