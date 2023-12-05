import { AdBlockStyle } from "./AdBlockStyle"

export const AdBlock = ({ data }: AdBlockProps) => {
  return (
    <AdBlockStyle>
      <div
        className="wp-ad"
        dangerouslySetInnerHTML={{
          __html: data,
        }}
      />
    </AdBlockStyle>
  )
}

interface AdBlockProps {
  data: string;
}