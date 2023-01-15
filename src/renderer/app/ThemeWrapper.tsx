import { Component, ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface Props {
  children: ReactNode;
  darkMode: boolean;
}

export default class ThemeWrapper extends Component<Props, Record<string, never>> {
  render() {
    return (
      <ThemeProvider theme={this.props.darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {this.props.children}
      </ThemeProvider>
    );
  }
}
