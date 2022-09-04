import React from "react";
import List from "./List";

const ShoppingCard = () => {
  const [list, setList] = React.useState([
    { id: 1, text: "Item 1", count: 4 },
    { id: 2, text: "Item 2", count: 0 },
    { id: 3, text: "Item 3", count: 0 },
    { id: 4, text: "item 4", count: 0 },
  ]);

  const onClickIncrease = (_item) => {
    setList(
      list.map((item) => {
        if (item.id === _item.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      }),
    );
  };

  const onClickDecrease = (_item) => {
    setList(
      list.map((item) => {
        if (item.id === _item.id && item.count>0) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      }),
    );
  };

  const onClickDelete = (_item) => {
    setList(list.filter((i) => i.id !== _item.id));
  };

  return (
    <List
      list={list}
      onClickIncrease={onClickIncrease}
      onClickDecrease={onClickDecrease}
      onClickDelete={onClickDelete}
    />
  );
};

export default ShoppingCard;
