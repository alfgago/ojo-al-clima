import { useQuery } from 'react-query';
import { ReactSVG } from 'react-svg';
import { BarStyle } from './BarStyle';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { layoutPageData } from '@/pages/api/layout';

export const SearchBar = () => {
  const router = useRouter();
  
  const initialAuthor = router.query.author as string || "";
  const initialQuery = router.query.q as string || "";

  const [query, setQuery] = useState(initialQuery);
  const [author, setAuthor] = useState(initialAuthor);

  const { data: authors, isLoading } = useQuery<any>(
    ['layoutData', 'authors'],
    () => layoutPageData('authors', 380),
    { retry: 1 }
  );

  useEffect(() => {
    if (router.query.author && author !== router.query.author) {
      setAuthor(router.query.author as string);
    }
    if (router.query.q && query !== router.query.q) {
      setQuery(router.query.q as string);
    }
  }, [router.query]);

  const buildSearchURL = () => {
    const base = `/search/1?q=${encodeURIComponent(query)}`;
    if (author) {
      return `${base}&author=${encodeURIComponent(author)}`;
    }
    return base;
  };

  const handleSearch = () => {
    if (!query.trim()) {  
      return;
    }
    const searchURL = buildSearchURL();
    router.push(searchURL);
  }

  return (
    <BarStyle className='search-general'>
      <div className="bar-container">
        <div className="authors">
          <select
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          >
            {isLoading ? (
              <option value="" disabled>Cargando...</option>
            ) : (
              <>
                <option value="">Todos los autores</option>
                {authors.map((auth: any) => (
                  <option key={auth.user} value={auth.user}>{auth.name}</option>
                ))}
              </>
            )}
          </select>
        </div>
        <div className="search-wrapper">
          <div className='bar'>
            <span>
              <ReactSVG src="/icons/search.svg" />  
            </span>
            <input
              type="text"
              placeholder="Busqueda..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className='btn'>
            <span
              className="search-icon"
              onClick={handleSearch}
            >
              <ReactSVG src="/icons/search.svg" />
            </span>
          </div>
        </div>
      </div>
    </BarStyle>
  );
}
