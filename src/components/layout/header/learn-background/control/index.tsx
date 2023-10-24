import { ReactSVG } from "react-svg";
import { ControlStyle } from "./ControlStyle";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Control = ({ data, index, setActive, active, isHomePage }: any) => {

  const router = useRouter();  // <-- Añadir esto
  const { post_title, post_name, color } = data;

  const setActivePosition = (index: number, active: number) => {
    if (index <= active) {
      return `calc(100% - ${(index + 1) * 5.8}rem)`;
    }
  };

  const toggleActive = async (currentIndex: number, activeIndex: number) => {
    if (currentIndex === activeIndex) {
      await router.push('/');
      setTimeout(() => {
        setActive(-1);
      }, 400);
    } else {
      setActive(currentIndex);
      await router.push(`/${post_name}`);
    }
  };

  useEffect(() => {
    if (router.pathname.includes(post_name)) {
      setActive(index);
    }
  }, [router.pathname]);

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
