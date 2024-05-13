import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { userType } from "../../types/userType";
import { MouseEvent, useState } from "react";

type props = {
    screenTitle: string,
    user: userType
};

export function Header({ screenTitle, user }: props) {
    const SETTINGS = ["My Account", "FAQ list", "Logout"];
    const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }

    return (
        <AppBar position="sticky" component="header">
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>{screenTitle}</Typography>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} >
                            <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.thumbnail} sx={{ width: 50, height: 50 }} />
                        </IconButton>
                    </Tooltip>
                    <Menu anchorEl={anchorElUser} keepMounted open={!!anchorElUser} onClose={handleCloseUserMenu}>
                        {SETTINGS.map((setting) => {
                            return (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            );
                        })}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}