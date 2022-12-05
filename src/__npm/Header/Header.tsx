import * as React from "react";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Divider, Toolbar, Typography } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { COLORS } from "../colors";
import { ContainedButton } from "../Button/Button";
import { BasicMenu } from "../BasicMenu/BasicMenu";

const StyledAppBar = styled(AppBar)({
  minHeight: 80,
  justifyContent: "center",
  backgroundColor: COLORS.WHITE,
  color: COLORS.FIREFLY[50],
  boxShadow: "none",
  borderBottom: "1px solid #E2E8F0",
});
export type ListProps = {
  title: string;
  icon: React.ReactElement;
  to?: string;
};
export type ButtonAppBarProps = {
  clientId?: string;
  userName?: string;
  image: React.ReactElement;
  appBar?: AppBarProps;
  optionList?: ListProps[];
  menuList?: ListProps[];
};

export const ButtonAppBar = ({
  image,
  userName,
  clientId,
  optionList,
  menuList,
  ...props
}: ButtonAppBarProps) => {
  return (
    <StyledAppBar {...props} style={{ position: "inherit" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {image}

          {clientId && (
            <>
              <Divider
                style={{ color: "black", marginLeft: "20px", height: "auto" }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <div style={{ padding: "10px 20px 0 20px" }}>
                <div
                  style={{
                    color: COLORS.SLATE[500],
                    fontWeight: 500,
                    fontSize: 13,
                    fontVariant: "small-caps",
                  }}
                >
                  <Typography>impersonating</Typography>
                </div>
                <div
                  style={{
                    color: COLORS.FIREFLY[700],
                    fontWeight: 500,
                    fontSize: 14,
                  }}
                >
                  <Typography>{clientId}</Typography>
                </div>
              </div>
            </>
          )}
        </Box>
        {optionList?.map((option, index: number) => (
          <ContainedButton
            href={option?.to}
            key={index}
            sx={{
              mr: 2,
              border: "none",
              color: COLORS.FIREFLY[700],
              backgroundColor: COLORS.SLATE[100],
              ":hover": {
                color: COLORS.FIREFLY[700],
                backgroundColor: COLORS.SLATE[200],
              },
            }}
            color="secondary"
            size="small"
          >
            {option?.icon && (
              <ListItemIcon sx={{ minWidth: "25px" }}>
                {option?.icon}
              </ListItemIcon>
            )}
            {option?.title}
          </ContainedButton>
        ))}
        <BasicMenu list={menuList} userName={userName} />
      </Toolbar>
    </StyledAppBar>
  );
};
