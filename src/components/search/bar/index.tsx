import { useQuery } from 'react-query';
import { ReactSVG } from 'react-svg';
import { BarStyle } from './BarStyle';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { layoutPageData } from '@/services/layout';
import Select, { StylesConfig } from 'react-select';

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
  };

  const handleChange = (selectedOption: any) => {
    setAuthor(selectedOption ? selectedOption.value : '');
  };

  const options = authors ? authors.map((auth: any) => ({
    value: auth.user,
    label: auth.name
  })) : [];

  const currentValue = options.find((option: any) => option.value === author);

  const loadingOption = [{ value: '', label: 'Cargando...', isDisabled: true }];
  const availableOptions = [{ value: '', label: 'Todos los autores' }, ...options];

  return (
    <BarStyle className='search-general'>
      <div className="bar-container">
        <div className="authors">
          <Select
            value={currentValue}
            onChange={handleChange}
            options={isLoading ? loadingOption : availableOptions}
            isClearable={!isLoading}
            isSearchable={!isLoading}
            placeholder="Seleccione un autor"
            styles={customStyles}  // Aquí pasas los estilos personalizados
          />
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

const customStyles: StylesConfig<any, false> = {
  container: (provided) => ({
    ...provided,
    minWidth: '17.1875rem',
    width: '100%'
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: '3.125rem',
    border: state.isFocused ? '1px solid #000' : '1px solid #000',
    background: 'rgba(255, 255, 255, 0.55)',
    backdropFilter: 'blur(2.5px)',
    display: 'flex',
    padding: '0 1rem 0 1.5rem',
    alignItems: 'center',
    gap: '5.5625rem',
    fontSize: '1rem',
    color: '#858585',
    outline: 'none',
    boxShadow: 'none',  // Remueve el boxShadow cuando está enfocado
    '&:hover': {
      borderColor: '#000',  // Esto anulará el comportamiento de hover predeterminado
    }
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#858585',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal'
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#858585',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal'
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    paddingBottom: 0,
    paddingTop: 0
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#060608',
    padding: 0
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
};