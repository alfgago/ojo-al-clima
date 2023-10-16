import Link from "next/link";
import Image from "next/image";
import { PaginationStyle } from "./PaginationStyle"
import { getPaginationNumbers } from "@/helpers/getPaginationNumbers";

export const Pagination = ({ data }: any) => {
  const {
    slug,
    current_page,
    total_pages,
    next_page,
    prev_page,
    parent_category
  } = data;

  const pagesToShow = getPaginationNumbers(total_pages, current_page);

  const generateHref = (page: number) => {
    const basePath = parent_category
      ? `/category/${parent_category}/subcategory/${slug}`
      : `/category/${slug}`;
    return `${basePath}/${page}`;
  };

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
              <span>Entradas recientes</span>
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
              <span>Entradas más antiguas</span>
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
