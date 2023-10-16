import { useState } from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg"
import { SearchHeaderStyle } from "./SearchStyle";

export const SearchHeader = ({ menuState=null }:any) => {

  const [active, setActive] = useState(false)

  const onHandleBar = () => {
    setActive(!active)
    menuState(!active)
  }

  return (
    <SearchHeaderStyle>
      <div className="search-header-wrapper">
        <div className={`bar ${active}`}>
          <input type="text" placeholder="Busqueda..." />
        </div>
        <div className={`btn ${active}`}>
          <span
            className="search-icon"
          >
            <ReactSVG src="/icons/search.svg" />
          </span>
          <span
            className="text"
            onClick={() => onHandleBar()}
          >
            Buscar
          </span>
          <span
            className="close-icon"
            onClick={() => onHandleBar()}
          >
            <ReactSVG src="/icons/close.svg" />
          </span>
        </div>
      </div>
    </SearchHeaderStyle>
  )
}