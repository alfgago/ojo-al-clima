import { Heading } from "..";
import { SearchComponentsStyle } from "./SearchStye"

export const SearchComponets = ({ data, recents }: any) => {

  const title = 'Busqueda';
  const color = 'blue';

  return (
    <SearchComponentsStyle>
      <Heading title={title} color={color}/>
    </SearchComponentsStyle>
  )
}
