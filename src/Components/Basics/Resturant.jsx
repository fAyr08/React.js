import React, {useState} from 'react';
import Menu from './menuapi';
import "./styles.css";
import MenuCard from './menuCard';
import Navbar from './_Navbar';

const newList = [... new Set(Menu.map((currElem)=>{
  return currElem.category;
    })
  ), "All",
];

console.log(newList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(newList);

  
  const filterItem = (category) =>{
    if(category === "All" ){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((currElem)=>{
      return currElem.category=== category;
    });
    setMenuData(updatedList);
  };
  return (
    <> 
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </> 
  );
};

export default Resturant;