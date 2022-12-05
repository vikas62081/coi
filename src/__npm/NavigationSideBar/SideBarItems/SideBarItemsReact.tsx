import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import ListItem from "@mui/material/ListItem";
import { ListContainer } from "../navigation.styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useStyles } from "../navigation.styles";
import { ItemProps, SidebarItemProps } from "../type";
import { Link } from "react-router-dom";

export const SideBarItemReact = (props: SidebarItemProps) => {
  const [activeItem, setActiveItem] = useState(0);
  const classes = useStyles();
  console.log(classes);
  const handleChange = (index: number) => {
    setActiveItem(index);
  };
  console.log(activeItem);
  return (
    <>
      <ListContainer data-testid="To-be-Active">
        {props?.SideBarItems?.map((SideBarItem: ItemProps, index: number) => (
          <Link
            key={index}
            to={SideBarItem?.to}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <ListItem
              style={{ margin: "4px 0" }}
              button
              key={index}
              className={
                activeItem == index ? classes.selected : classes.notSelected
              }
              onClick={() => handleChange(index)}
            >
              <Tooltip title={SideBarItem?.title}>
                <ListItemIcon
                  sx={{ minWidth: "48px" }}
                  // className={
                  //   active === index ? classes.activeIcon : classes.inactiveIcon
                  // }
                >
                  {SideBarItem?.icon}
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary={SideBarItem?.title} />
            </ListItem>
          </Link>
        ))}
      </ListContainer>
    </>
  );
};
