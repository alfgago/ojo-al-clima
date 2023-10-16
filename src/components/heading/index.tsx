import { HeadingStyle } from "./HeadingStyle"

export const Heading = ({
  title,
  color = "red",
}: HeadingProps) => {
  return (
    <HeadingStyle color={color}>
      <div className="wrapper">
        <h1>
          {title}
        </h1>
      </div>
    </HeadingStyle>
  )
}

type HeadingProps = {
  title: string;
  color?: string; // Si 'color' puede ser opcional, usa 'color?: string;'
};