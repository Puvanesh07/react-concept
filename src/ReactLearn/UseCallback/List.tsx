import React from 'react';

interface ListProp {
  getItems: () => number[];
}

const List: React.FC<ListProp> = ({ getItems }) => {
  const [items, setItems] = React.useState<number[]>([]);

  React.useEffect(() => {
    console.log('getItems');
    setItems(getItems());
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default List;
