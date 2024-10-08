import { GradientBackground } from "..";
import { HeadingStyle } from "./HeadingStyle"

export const Heading = ({
  title,
  color = "red",
}: HeadingProps) => {
  return (
    <HeadingStyle color={color}>
      <div className="wrapper" data-aos="fade-right" data-aos-delay="300">
        {title && <h1>{title}</h1>} 
      </div>
      <div className="gradient-wrapper" >
        <GradientBackground className="background" useColor={color}/>
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
