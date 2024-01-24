import { SearchBar } from '@/components/search/bar'

export const SearchBlock = () => {
  return (
    <div className="search-recents-block" data-aos="fade-up">
      <h4>
        Busqueda
      </h4>
      <div className="controls">
        <SearchBar/>
      </div>
    </div>
  )
}
