import React, { Component, Fragment, ReactNode } from 'react';
import type { ProcessInfo } from '../../main/binding/model/ProcessInfo';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Box,
  Button,
  Collapse,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Stack,
} from '@mui/material';

interface Props {
  processes: ProcessInfo[];
  killCallback: (process: ProcessInfo) => void;
}

export default class ProcessList extends Component<Props, never> {
  render(): ReactNode {
    return (
      <TableContainer component={Paper} sx={{ maxHeight: '90vh' }}>
        <Table stickyHeader>
          <TableHead>
            <TitleRow />
          </TableHead>
          <TableBody>
            {this.props.processes.map((process) => (
              <ProcessRow key={process.Id} process={process} killCallback={this.props.killCallback} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

function TitleRow(_props: Record<string, never>) {
  return (
    <TableRow>
      <TableCell size="small" />
      <TableCell>Process Name</TableCell>
      <TableCell>Description</TableCell>
    </TableRow>
  );
}

function ProcessRow(props: { process: ProcessInfo; killCallback: (process: ProcessInfo) => void }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Fragment>
      <TableRow>
        <TableCell size="small">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{props.process.ProcessName}</TableCell>
        <TableCell>{props.process.Description || ''}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <ProcessDetails process={props.process} killCallback={props.killCallback} />
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

function ProcessDetails(props: { process: ProcessInfo; killCallback: (process: ProcessInfo) => void }) {
  return (
    <Box margin={1}>
      <Typography variant="h6" gutterBottom component="div">
        Details for "{props.process.ProcessName}"
      </Typography>

      <Stack direction="column" spacing={1}>
        <ValueDisplay label="PID" value={props.process.Id} />
        <ValueDisplay label="Process Name" value={props.process.ProcessName} />

        <ValueDisplay label="Product Name" value={props.process.Product} />
        <ValueDisplay label="Company Name" value={props.process.Company} />
        <ValueDisplay label="Description" value={props.process.Description} />
        <ValueDisplay label="Version" value={props.process.FileVersion} />

        <ValueDisplay label="Executable Path" value={props.process.Path} />

        <Button variant="contained" onClick={() => props.killCallback(props.process)} startIcon={<DeleteIcon />}>
          Kill "{props.process.ProcessName}"
        </Button>
      </Stack>
    </Box>
  );
}

function ValueDisplay(props: { label: string; value?: string | number }) {
  if (props.value === undefined || props.value === '') return <div />;

  return (
    <Box display="flex" flexDirection="row">
      <Typography>{props.label}:</Typography>
      <Box width={10} />
      <Typography>{props.value}</Typography>
    </Box>
  );
}
