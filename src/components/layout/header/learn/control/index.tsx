import { ReactSVG } from "react-svg";
import { ControlStyle } from "./ControlStyle";

export const Control = ({ data, index, setActive, active, isHomePage }: any) => {
  const { post_title, color } = data;

  const setActivePosition = (index: number, active: number) => {
    if (index <= active) {
      return `calc(100% - ${(index + 1) * 5.8}rem)`;
    }
  };

  const toggleActive = (currentIndex: number, activeIndex: number) => {
    if (currentIndex === activeIndex) {
      setActive(-1);
    } else {
      setActive(currentIndex);
    }
  };

  return (
    <ControlStyle color={color} index={index}>
      <div
        className={index === active ? "control-wrapper active" : "control-wrapper"}
        style={{ right: setActivePosition(index, active) }}
        onClick={() => toggleActive(index, active)}
      >
        <div
          className={index === active ? "heading active" : "heading"}
        >
          <ReactSVG src="/icons/plus.svg" />
        </div>
        <div className={`name ${isHomePage ? 'homepage' : ''} ${active !== -1 ? 'active' : ''}`}>
          <span>
            {post_title}
          </span>
        </div>
      </div>
    </ControlStyle>
  );
}
