import React from "react";
import ListItem from "./ListItem";

const List = ({ list, ...rest }) => {
  return (
    <div style={{backgroundColor: "#EFEECF", margin: "90px"}}>
    <ul>
      {list.map((item) => {
        return <ListItem key={item.id} item={item} {...rest} />;
      })}
    </ul>
    </div>
  );
};

export default List;
