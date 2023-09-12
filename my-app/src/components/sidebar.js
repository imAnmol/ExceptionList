import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <Sidebar>
    <Menu>
    <MenuItem> Home </MenuItem>
      <SubMenu label="Master">
        <MenuItem> User Groups </MenuItem>
        <MenuItem> Exceptions </MenuItem>
      </SubMenu>
      <MenuItem> Reporting </MenuItem>
      
      <MenuItem> Timesheet </MenuItem>
      <MenuItem> Help </MenuItem>
    </Menu>
  </Sidebar>
  )
}

export default SideBar;
