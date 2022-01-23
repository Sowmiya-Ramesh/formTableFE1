import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { IconButton } from "@material-ui/core";
export default function SideBar() {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <hr className="sidebar-divider" />

        {/* <li className="nav-item">
          <a className="nav-link collapsed" href="/profiles">
            <PersonIcon />
            <span>Profiles</span>
            <IconButton className="arrowIcon">
              <ChevronRightIcon />
            </IconButton>
          </a>
        </li> */}

        <li className="nav-item">
          <a className="nav-link collapsed" href="/create-profile">
            <PersonAddIcon />
            <span>Create Profile</span>
            <IconButton className="arrowIcon">
              <ChevronRightIcon />
            </IconButton>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
          <a className="nav-link " href="/users">
            <PeopleAltIcon />
            <span>Users</span>
            {/* <ArrowForwardIosIcon /> */}
            <IconButton className="arrowIcon">
              <ChevronRightIcon />
            </IconButton>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </div>
  );
}
