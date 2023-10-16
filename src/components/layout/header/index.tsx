import Link from "next/link";
import { HeaderStyle } from "./HeaderStyles"
import Image from "next/image";
import { SearchHeader } from "./search";
import { useState } from 'react';
import { ReactSVG } from "react-svg";

export const Header = ({ data }: any) => {

  const { menu } = data;

  const [hideMenuDesktop, setHideMenuDesktop] = useState(false);

  return (
    <HeaderStyle>
      <div className="header-container">
        <div className="site-logo">
          <Link href="/">
            <ReactSVG src="/logos/site-logo.svg" />
          </Link>
        </div>
        <div className="content">
          <div className="menu">
            <div className={`menu-wrapper ${hideMenuDesktop}`}>
              {menu?.items?.map((item: any, index: number) => (
                <div key={index} className="item">
                  <Link href={item.url}>
                    <span className="parent">{item.title}</span>
                  </Link>
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
        <div className="learn">

        </div>
      </div>
    </HeaderStyle>
  )
}