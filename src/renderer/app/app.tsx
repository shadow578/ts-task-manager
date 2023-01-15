import { Component, ReactNode } from 'react';
import type { ProcessInfo } from '../../main/binding/model/ProcessInfo';
import LoadingIndicator from './LoadingIndicator';
import ProcessList from './ProcessList';
import ThemeWrapper from './ThemeWrapper';
import TopBar from './TopBar';

interface State {
  processes: ProcessInfo[];
  darkMode: boolean;
}

export default class App extends Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      processes: [],
      darkMode: true,
    };
  }

  componentDidMount() {
    this.refresh();
  }

  private async refresh() {
    console.time('refresh');
    this.setState({
      processes: await processManagement.getAllProcesses(),
    });
    console.timeEnd('refresh');

    setTimeout(() => {
      this.refresh();
    }, 1000);
  }

  private async kill(process: ProcessInfo) {
    if (confirm(`Are you sure you want to kill process ${process.ProcessName} with pid ${process.Id}?`)) {
      this.setState({
        processes: this.state.processes.filter((p) => p.Id !== process.Id),
      });
      await processManagement.killProcess(process.Id);
    }
  }

  render(): ReactNode {
    return (
      <ThemeWrapper darkMode={this.state.darkMode}>
        <TopBar
          title="Task Manager"
          darkMode={this.state.darkMode}
          toggleDarkMode={() => this.setState({ darkMode: !this.state.darkMode })}
        />

        {this.state.processes.length === 0 ? (
          <LoadingIndicator text="Loading processes..." />
        ) : (
          <ProcessList processes={this.state.processes} killCallback={async (process) => await this.kill(process)} />
        )}
      </ThemeWrapper>
    );
  }
}
