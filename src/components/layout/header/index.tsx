import Link from "next/link";
import { HeaderStyle } from "./HeaderStyles"
import { SearchHeader } from "./search";
import { useState, useEffect, useRef } from 'react';
import { ReactSVG } from "react-svg";
import { useRouter } from "next/router";
import { Control } from "./learn-background/control";
import { Learn } from "./learn-background";
import { learn } from "@/constants/learnItems";
import { useWindowSize } from "usehooks-ts";
import { Share } from "@/components";

export const Header = ({ data }: any) => {

  const { menu, lateral } = data;

  const [hideMenuDesktop, setHideMenuDesktop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const childrenRefs = useRef<(HTMLDivElement | null)[]>([]);

  const calculateChildrenHeight = (index: number) => {
    const childrenDiv = childrenRefs.current[index];
    if (!childrenDiv) return 0;
    let totalHeight = 0;
    Array.from(childrenDiv.children).forEach(child => {
      totalHeight += child.clientHeight;
    });
    return totalHeight;
  };

  const [childrenHeights, setChildrenHeights] = useState<number[]>([]);

  const handleSubMenuClick = (index: number) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(index);
      const newHeights = [...childrenHeights];
      newHeights[index] = calculateChildrenHeight(index);
      setChildrenHeights(newHeights);
    }
  };

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

  const { width } = useWindowSize();
  const isDesktop = width > 1023;

  const showHomepageClass = isHomePage && isDesktop && !scrolled;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false);


  const handleHamburgerClick = () => {
    if (!isDesktop) {
      setIsMobileMenuOpen(prevState => !prevState);
    }
  };
  const handleLateralMenuClick = () => {
    setIsLateralMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <HeaderStyle>
      <div className={showHomepageClass ? 'header-container homepage' : 'header-container'}>
        <div className={`lateral-menu hide-on-mobile ${isLateralMenuOpen ? 'active' : ''}`}>
          {lateral?.items?.map((item: any, index: number) => (
            <div key={index} className={`item`}>
              <div className={`parent`}>
                <Link href={item.url}>
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
          <Share/>
        </div>
        <div className={showHomepageClass ? 'site-logo homepage' : 'site-logo'}>
          <div className={`hamburger-menu hide-on-mobile  ${isLateralMenuOpen ? 'active' : ''}`} onClick={handleLateralMenuClick}>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </div>
          <Link href="/" className="logo">
            <ReactSVG src="/logos/site-logo.svg" />
          </Link>
        </div>
        <div className={showHomepageClass ? 'content homepage' : 'content'}>
          <div className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className={`menu-wrapper ${hideMenuDesktop}`}>
              {menu?.items?.map((item: any, index: number) => (
                <div key={index} className={`item ${item.classes}`}>
                  <div className={`parent ${item.color} ${activeSubMenu === index ? 'active' : ''}`}>
                    <Link href={item.url} onClick={handleHamburgerClick}>
                      {item.title}
                    </Link>
                    {
                      item?.childrens && (
                        <span className="open-sub-menu" onClick={() => handleSubMenuClick(index)}>
                          <ReactSVG src="/icons/arrow-down.svg" />
                        </span>
                      )
                    }
                  </div>
                  <div
                    ref={(el) => childrenRefs.current[index] = el}
                    className={`childrens ${item.color} ${activeSubMenu === index ? 'active' : ''}`}
                    style={{ height: `${activeSubMenu === index ? childrenHeights[index] : 0}px` }}
                  >

                    {item?.childrens?.map((child: any, index: number) => (
                      <Link key={index} href={child.url} onClick={handleHamburgerClick}>
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
            <div className={`hamburger-menu hide-on-desktop ${isMobileMenuOpen ? 'active' : ''}`} onClick={handleHamburgerClick}>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </div>
          </div>
        </div>
        <div className={showHomepageClass ? 'learn-controls homepage' : 'learn-controls'}>
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