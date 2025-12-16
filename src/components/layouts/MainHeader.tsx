import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useOffSetTop from "src/hooks/useOffSetTop";
import { APP_BAR_HEIGHT, MAIN_PATH } from "src/constant";
import Logo from "../Logo";
import SearchBox from "../SearchBox";
import NetflixNavigationLink from "../NetflixNavigationLink";
import { logout } from "src/store/slices/authSlice";
import { RootState } from "src/store";
import { Button, Chip } from "@mui/material";
import Link from "@mui/material/Link";


const pages = ["My List", "Movies", "Tv Shows"];

const MainHeader = () => {
  const isOffset = useOffSetTop(APP_BAR_HEIGHT);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSubscribed, currentPlan } = useSelector((state: RootState) => state.subscription);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        // px: "4%",
        px: "60px",
        height: APP_BAR_HEIGHT,
        backgroundImage: "none",
        ...(isOffset
          ? {
              bgcolor: "primary.main",
              boxShadow: (theme) => theme.shadows[4],
            }
          : { boxShadow: 0, bgcolor: "transparent" }),
      }}
    >
      <Toolbar disableGutters>
        <Logo sx={{ mr: { xs: 2, sm: 4 } }} />

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Netflix
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: "center" }}
        >
          {pages.map((page) => (
            <NetflixNavigationLink
              to=""
              variant="subtitle1"
              key={page}
              onClick={handleCloseNavMenu}
            >
              {page}
            </NetflixNavigationLink>
          ))}
         <Typography
  variant="body2"
  sx={{
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: "text.secondary",
    fontSize: "0.75rem",
  }}
>
  Developed by{" "}
  <Link
    href="https://github.com/alanbabychan"
    target="_blank"
    rel="noopener noreferrer"
    underline="none"
    sx={{
      color: "text.primary",
      fontWeight: 600,
    }}
  >
    KIDDO
  </Link>
</Typography>

        </Stack>

        <Box sx={{ flexGrow: 0, display: "flex", gap: 1, alignItems: "center", height: APP_BAR_HEIGHT }}>
          {isSubscribed && currentPlan ? (
            <Chip 
              label={`👑 ${currentPlan.name}`} 
              variant="filled"
              sx={{ 
                fontWeight: 'bold',
                backgroundColor: '#e50914',
                color: 'white'
              }}
            />
          ) : (
            <Box
              component="button"
              onClick={() => navigate(`/${MAIN_PATH.subscription}`)}
              sx={{
                minHeight: 32,
                padding: '6px 16px',
                backgroundColor: '#e50914',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                marginLeft: '-2px',
                '&:hover': {
                  backgroundColor: '#b8070f'
                }
              }}
            >
              GET PREMIUM
            </Box>
          )}
          <SearchBox />
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="user_avatar" src="/avatar.png" variant="rounded" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="avatar-menu"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {["Subscription", "Logout"].map((setting) => (
              <MenuItem
              
                key={setting}
                onClick={() => {
                  handleCloseUserMenu();
                  if (setting === "Logout") {
                    dispatch(logout());
                    navigate("/login");
                  } else if (setting === "Subscription") {
                    navigate(`/${MAIN_PATH.subscription}`);
                  }
                }}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default MainHeader;
