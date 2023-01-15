import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { Component } from 'react';

interface Props {
  text: string;
}

export default class LoadingIndicator extends Component<Props, Record<string, never>> {
  render() {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="90vh">
        <Stack alignItems="center">
          <CircularProgress />
          <Typography>{this.props.text}</Typography>
        </Stack>
      </Box>
    );
  }
}
