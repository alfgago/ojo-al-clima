import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { LearnBackgroundStyle } from "./LearnBackgroundStyle"

export const Learn = ({ data, index, active }: any) => {
  const { pathname } = useRouter();
  const { color, post_name } = data;

  const [opacityValue, setOpacityValue] = useState(0);

  useEffect(() => {
    if (active === index) {
      setOpacityValue(1);
      if (pathname.includes(post_name)) {
        setTimeout(() => {
          setOpacityValue(0);
        }, 300);
      } 
    }
    else {
      setOpacityValue(0);
    }
  }, [active, index, pathname, post_name]);

  return (
    <LearnBackgroundStyle color={color} index={index}>
      <section
        className="learn-item-container"
        style={{
          opacity: opacityValue,
          pointerEvents: opacityValue === 1 ? 'all' : 'none'
        }}
      >
        <div className="learn-item-wrapper">
          <span className="loader"></span>
        </div>
      </section>
    </LearnBackgroundStyle>
  )
}
