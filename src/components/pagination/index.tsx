import Link from "next/link";
import Image from "next/image";
import { PaginationStyle } from "./PaginationStyle"
import { getPaginationNumbers } from "@/helpers/getPaginationNumbers";
import { useWindowSize } from "usehooks-ts";

export const Pagination = ({ data }: any) => {

  const {
    slug,
    current_page,
    total_pages,
    next_page,
    prev_page,
    parent_category,
    is_search
  } = data;

  const pagesToShow = getPaginationNumbers(total_pages, current_page);

  const generateHref = (page: number) => {
    if (is_search) {
      const { q, author } = slug;
      return `/search/${page}?q=${q}${author ? `&author=${author}` : ''}`;
    }
    
    return parent_category 
      ? `/category/${parent_category}/subcategory/${slug}/${page}`
      : `/category/${slug}/${page}`;
  };  

  const { width } = useWindowSize()
  const isMobile = width < 767

  return (
    <PaginationStyle>
      <div className="pagination-container">
        <div className="arrow prev">
          {prev_page && (
            <Link href={generateHref(prev_page)}>
              <Image
                src="/icons/arrow-prev.svg"
                alt="arrow prev"
                width={20}
                height={20}
              />
              <span>
                {
                  !isMobile ? 'Entradas recientes' : 'Anterior'
                }  
              </span>
            </Link>
          )}
        </div>

        <div className="numbers">
          {pagesToShow.map((page, index) => {
            if (page === '...') {
              return <span key={index}>...</span>;
            }
            return (
              <Link key={index} href={generateHref(page as number)}>
                <span className={page === current_page ? 'page-number active' : 'page-number'}>{page}</span>
              </Link>
            );
          })}
        </div>

        <div className="arrow next">
          {next_page && (
            <Link href={generateHref(next_page)}>
              <span>
                
                {
                  !isMobile ? 'Entradas más antiguas' : 'Siguientes'
                }  
              </span>
              <Image
                src="/icons/arrow-next.svg"
                alt="arrow next"
                width={20}
                height={20}
              />
            </Link>
          )}
        </div>
      </div>
    </PaginationStyle>
  );
};
