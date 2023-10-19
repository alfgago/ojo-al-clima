import Link from "next/link";
import { HeaderStyle } from "./HeaderStyles"
import { SearchHeader } from "./search";
import { useState } from 'react';
import { ReactSVG } from "react-svg";
import { Control } from "./learn/control";
import { useRouter } from "next/router";
import { Learn } from "./learn";

export const Header = ({ data, learn }: any) => {

  const { menu } = data;

  const [hideMenuDesktop, setHideMenuDesktop] = useState(false);
  const [activeLearn, setActiveLearn] = useState(-1)

  const router = useRouter();
  const isHomePage = router.pathname === '/';


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