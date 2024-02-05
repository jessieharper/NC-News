import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export default function SideBar({ setSideBarStatus }) {
  return (
    <div className="sidebar__bar">
      <FontAwesomeIcon icon={faAnglesDown} size="lg" />
    </div>
  );
}
