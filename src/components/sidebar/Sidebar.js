import React from 'react'
import './Sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SidebarChat from "./SidebarChat"


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" className="" placeholder="Search or start new chat" />
                </div>
            </div>
            <div className="sidebar__chat">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
