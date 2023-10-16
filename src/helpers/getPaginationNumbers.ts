type PageItem = number | '...';

export const getPaginationNumbers = (total_pages: number, current_page: number): PageItem[] => {

  const pages: PageItem[] = [];

  if (total_pages <= 4) {
    for (let i = 1; i <= total_pages; i++) {
      pages.push(i);
    }
    return pages;
  }

  pages.push(1);

  if (current_page < 3) { // Si estamos en las primeras 3 páginas
    pages.push(2, 3, 4, '...');
  } else if (current_page >= total_pages - 2) { // Si estamos en las últimas 3 páginas
    pages.push('...', total_pages - 3, total_pages - 2, total_pages - 1);
  } else { // Estamos en alguna página en medio
    pages.push('...', current_page - 1, current_page, current_page + 1, '...');
  }

  pages.push(total_pages);
  return pages;

};
