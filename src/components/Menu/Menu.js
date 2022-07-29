import { useState } from "react";
import "./Menu.css";

const menus = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Services" },
  { id: 4, title: "Blog" },
  { id: 5, title: "Contact" },
];

function HandleMenuColor() {
  const [selected, setSelected] = useState(0);

  const handleColor = (row) => {
    console.log(row);
    setSelected(row.id);
  };

  return (
    <div className="menuContainer">
      {menus.map((menu) => (
        <h4
          className="items"
          key={menu.id}
          onClick={() => handleColor(menu)}
          style={menu.id === selected ? { color: "#FF8A00" } : { color: " " }}
        >
          {menu.title}
        </h4>
      ))}
    </div>
  );
}

export default HandleMenuColor;
