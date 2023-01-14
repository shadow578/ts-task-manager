import { StrictMode, Component, ReactNode } from "react";
import * as ReactDOM from 'react-dom';

export function render() {
    ReactDOM.render((
        <StrictMode>
            <App />
        </StrictMode>
    ), document.body);

}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props { }

interface State {
    count: number;
}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render(): ReactNode {
        return (
            <div>
                <h1>Hello World</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>


            </div>
        );
    }
}
