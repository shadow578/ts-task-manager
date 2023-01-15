import { Component, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props { }

interface State {
    count: number;
    nodeVersion: string;
}

export default class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count: 0,
            nodeVersion: 'N/A',
        };
    }

    async componentDidMount() {
        this.setState({
            nodeVersion: versions.getVersions().node,
        });
    }

    render(): ReactNode {
        return (
            <div>
                <h1>Hello World</h1>
                <p>Running Node.js version {this.state.nodeVersion}</p>

                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
            </div>
        );
    }
}
