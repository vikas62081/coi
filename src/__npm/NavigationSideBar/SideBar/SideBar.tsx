import React from "react";
import Box from "@mui/material/Box";
import { Drawer } from "../Drawer/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRightRounded";
import { SideBarItem } from "../SideBarItems/SideBarItems";
import { GridContainer, GridItem, MyIconButton } from "../navigation.styles";
import { SideBarFooter } from "../SideBarFooter/SideBarFooter";

import { Grid } from "@mui/material";
import { SideBarProps } from "../type";
import { COLORS } from "../../colors";

export const SideBar = ({
  SideBarItems,
  activeIndex,
  company,
  address,
  phone,
  email,
  image,
  isEnterpriseChild,
  ...rest
}: SideBarProps) => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }} data-testid="nextGen-sideBar">
      <Drawer variant="permanent" open={open}>
        <SideBarItem SideBarItems={SideBarItems} activeIndex={activeIndex} />
        <GridItem>
          <MyIconButton onClick={handleDrawerClose} data-testid="handle-click">
            {open ? (
              <ChevronLeftIcon style={{ color: COLORS.SLATE[400] }} />
            ) : (
              <ChevronRightIcon style={{ color: COLORS.SLATE[400] }} />
            )}
          </MyIconButton>
        </GridItem>
        <GridContainer>
          <Grid item sm={12}>
            <SideBarFooter
              open={open}
              company={company}
              address={address}
              phone={phone}
              email={email}
              image={image}
              isEnterpriseChild={isEnterpriseChild}
              {...rest}
            />
          </Grid>
        </GridContainer>
      </Drawer>
    </Box>
  );
};
