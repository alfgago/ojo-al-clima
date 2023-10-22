import { ListStyle } from "./ListStyle";

interface ListBlock {
  innerHTML: string;
}

const List = ({ data }: any) => {

  const { innerBlocks } = data;

  return (
    <ListStyle>
      <ul>
        {
          innerBlocks.map((list: ListBlock, index: number) => {
            return (
              <div key={index} dangerouslySetInnerHTML={{ __html: list.innerHTML }}></div>
            );
          })
        }
      </ul>
    </ListStyle>
  )
}

export default List;
