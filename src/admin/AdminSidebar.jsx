import React from "react";
import {
  BsArchiveFill,
  BsCart3,
  BsFillGearFill,
  BsFillGrid3X3GapFill,
  BsGrid1X2Fill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsPeopleFill,
} from "react-icons/bs";
import { GrDashboard } from "react-icons/gr";

const AdminSidebar = () => {


    const menuItems = [
        {
            
        }
    ]
  const icons = [
    BsGrid1X2Fill,
    BsArchiveFill,
    BsFillGrid3X3GapFill,
    BsPeopleFill,
    BsListCheck,
    BsMenuButtonWideFill,
    BsFillGearFill,
  ];

  const listNames = [
    "Dashboard",
    "Products",
    "Categories",
    "Customers",
    "Inventory",
    "Reports",
    "Settings",
  ];
  return (
    <aside>
      <div>
        <div>
          <BsCart3 />
        </div>
        <span>X</span>
      </div>
      <ul>
        {icons.map((Icon, id) => {
          return (
            <li key={id} className="mb-2    ">
              <Icon />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
