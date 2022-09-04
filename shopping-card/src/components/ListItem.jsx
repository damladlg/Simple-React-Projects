import React from 'react'
import CardButtons from "./CardButton";

const ListItem = ({item, ...rest}) => {
  return (
    <li style={{ height: "64px", listStyleType:'none' }}>
      <span style={{
          background: item.count ? "#4b4bcb" : "#ddcd17",
          padding: "4px 16px",
          color: item.count ? "white" : "black",
          borderRadius: "8px",
          fontWeight: "bold",
        }}>
        {item.count || "Zero"}
      </span>
      <span style={{ fontSize: "36px"}}>
        {item.text}
      </span>
      <CardButtons item={item} {...rest} />
    </li>
  )
}

export default ListItem