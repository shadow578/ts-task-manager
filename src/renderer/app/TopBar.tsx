import { Component, ReactNode } from 'react';
import { AppBar, Box, Toolbar, Typography, Container, IconButton, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface Props {
  title: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default class TopBar extends Component<Props, Record<string, never>> {
  render(): ReactNode {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Title */}
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              {this.props.title}
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            {/* Theme Toggle */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="App Theme">
                <IconButton color="inherit" onClick={() => this.props.toggleDarkMode()}>
                  {this.props.darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}
