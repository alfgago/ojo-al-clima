import { useState } from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg"
import { SearchHeaderStyle } from "./SearchStyle";
import { useRouter } from "next/router";

export const SearchHeader = ({ menuState=null }:any) => {

  const router = useRouter();

  const [active, setActive] = useState(false)
  const [inputValue, setInputValue] = useState("");

  const onHandleBar = () => {
    setActive(!active)
    menuState(!active)
  }

  const handleSearch = () => {
    let url = `/search/1?q=${inputValue}`;
    router.push(url);
  }

  return (
    <SearchHeaderStyle>
      <div className="search-header-wrapper">
        <div className={`bar ${active}`}>
          <input 
            type="text" 
            placeholder="Busqueda..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}  
          />
        </div>
        <div className={`btn ${active}`}>
          <span
            className="search-icon"
            onClick={handleSearch}
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