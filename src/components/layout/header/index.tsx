import Link from "next/link";
import { HeaderStyle } from "./HeaderStyles"
import { SearchHeader } from "./search";
import { useState, useEffect } from 'react';
import { ReactSVG } from "react-svg";
import { useRouter } from "next/router";
import { Control } from "./learn-background/control";
import { Learn } from "./learn-background";


const learn = [
  {
    "post_title": "Evidencias",
    "post_name": "evidencias",
    "color": "red"
  },
  {
    "post_title": "Causas",
    "post_name": "causas",
    "color": "purple"
  },
  {
    "post_title": "Efectos",
    "post_name": "efectos",
    "color": "blue"
  },
  {
    "post_title": "Soluciones",
    "post_name": "soluciones",
    "color": "yellow"
  }
]


export const Header = ({ data }: any) => {

  const { menu } = data;

  const [hideMenuDesktop, setHideMenuDesktop] = useState(false);

  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const initialActiveLearn = () => {
    let initial = -1;
    if (router.pathname === '/evidencias') {
      initial = 0;
    } else if (router.pathname === '/causas') {
      initial = 1;
    } else if (router.pathname === '/efectos') {
      initial = 2;
    } else if (router.pathname === '/soluciones') {
      initial = 3;
    }
    return initial;
  }

  const [activeLearn, setActiveLearn] = useState(initialActiveLearn);


  return (
    <HeaderStyle>
      <div className="header-container">
        <div className={isHomePage ? 'site-logo homepage' : 'site-logo'}>
          <Link href="/">
            <ReactSVG src="/logos/site-logo.svg" />
          </Link>
        </div>
        <div className={isHomePage ? 'content homepage' : 'content'}>
          <div className="menu">
            <div className={`menu-wrapper ${hideMenuDesktop}`}>
              {menu?.items?.map((item: any, index: number) => (
                <div key={index} className="item">
                  <div className="parent">
                    <Link href={item.url}>
                      {item.title}
                    </Link>
                    <span>
                      <ReactSVG src="/icons/arrow-down.svg" />
                    </span>
                  </div>
                  <div className="childrens">
                    {item?.childrens?.map((child: any, index: number) => (
                      <Link key={index} href={child.url}>
                        <span className="child">{child.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="search">
            <SearchHeader menuState={setHideMenuDesktop} />
          </div>
        </div>
        <div className={isHomePage ? 'learn-controls homepage' : 'learn-controls'}>
          {
            learn?.map((item: any, index: number) => (
              <Control
                key={item.ID}
                data={item}
                index={index}
                setActive={setActiveLearn}
                active={activeLearn}
                isHomePage={isHomePage}
              />
            ))
          }
        </div>
      </div>
      <div className="learn-container">
        <div className="learn-wrapper">
          {
            learn?.map((item: any, index: number) => (
              <Learn
                key={item.ID}
                data={item}
                index={index}
                active={activeLearn}
              />
            ))
          }
        </div>
      </div>
    </HeaderStyle>
  )
}