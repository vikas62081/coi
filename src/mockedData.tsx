import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LockIcon from "@mui/icons-material/Lock";

export const sidebarData = {
  isEnterpriseChild: true,
  company: "Company Name",
  address: "2642 Ross Street #1138c Chicago, IL ",
  email: "morehumanthanhuman.com",
  phone: "708-252-0235",
  activeIndex: 2,
  image: "HEy",
  SideBarItems: [
    {
      title: "Home",
      icon: <ListAltRoundedIcon />,
      to: "/",
    },
    {
      title: "Compliance Review",
      icon: <PeopleAltRoundedIcon />,
      to: "/compliance-review",
    },
    {
      title: "Divisions ",
      icon: <SpeedRoundedIcon />,
      to: "/divisions",
    },
    {
      title: "Clients",
      icon: <ViewQuiltRoundedIcon />,
      to: "/clients",
    },
    {
      title: "Home",
      icon: <LeaderboardRoundedIcon />,
      to: "/",
    },
    {
      title: "Compliance Review",
      icon: <BookmarkRoundedIcon />,
      to: "/compliance-review",
    },
    {
      title: "Divisions ",
      icon: <FolderRoundedIcon />,
      to: "/divisions",
    },
    {
      title: "Clients",
      icon: <HelpRoundedIcon />,
      to: "/clients",
    },
  ],
};

export const headerData = {
  title1: "Explore myCOI Central",
  title2: "Feedback",
  clientId: "Kim",
  userName: "TestUser",
  image: "HEy",
  menuList: [
    {
      title: "Account Settings",
      icon: <SettingsIcon fontSize="small" />,
    },
    {
      title: "Change Password",
      icon: <LockIcon fontSize="small" />,
    },
    {
      title: "Log out",
      icon: <LogoutOutlinedIcon fontSize="small" />,
    },
  ],
  optionList: [
    {
      title: "Sign Out",
      icon: <SettingsIcon fontSize="small" />,
      to: "/to",
    },
  ],
};
