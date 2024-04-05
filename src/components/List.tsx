import { ReactNode } from 'react';

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

//we need to use a comma after the T because TS doesn't automatically recognize we're trying to use a generic 
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
