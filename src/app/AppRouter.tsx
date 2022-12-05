import { Grid } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { headerData, sidebarData } from "../mockedData";

import routes from "../utils/routes";
import { ButtonAppBar } from "../__npm/Header/Header";
import { SideBarReact } from "../__npm/NavigationSideBar/SideBar/SideBarReact";

function AppRouter() {
  return (
    <BrowserRouter>
      <ButtonAppBar {...headerData} />
      <SideBarReact {...sidebarData}>
        <Grid style={{ padding: 10 }}>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </Grid>
      </SideBarReact>
    </BrowserRouter>
  );
}
export default AppRouter;
