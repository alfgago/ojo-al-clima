import { HeadingStyle } from "./HeadingStyle"

export const Heading = ({
  title,
  color = "red",
}: HeadingProps) => {
  return (
    <HeadingStyle color={color}>
      <div className="wrapper">
        {title && <h1>{title}</h1>} 
      </div>
      <div className="learn-colors">
        <div className="red"></div>
        <div className="purple"></div>
        <div className="blue"></div>
        <div className="yellow"></div>
      </div>
    </HeadingStyle>
  )
}

type HeadingProps = {
  title?: string;
  color?: string;
};
