import React from 'react'
import SidebarExampleSidebar from './Sidebar';
import { Route, Redirect, Switch } from "react-router-dom";
import { Login } from './Login';
import Table from './Table';
import { UserListContainer } from './UserListContainer';
  
function Home() {
    return (
        <>      
            <SidebarExampleSidebar />  
            <UserListContainer />
        </>
  
    )
}

export default Home
