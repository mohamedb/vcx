import * as React from "react";
interface GameProps {
    playerName: string;
}
interface GameState {
    started?: boolean;
    name?: string;
}
export class Game extends React.Component<GameProps, GameState> {
    public state: GameState = { started: false, name: '' };
    constructor(props: GameProps) {
        super(props)
    }
    private updateInputValue = (v: any) => {
        this.setState({ name: v.target.value });
    }

    private cb = () => {
        console.log('Clicked! do something');
    }

    render() {
        return <div>
            <input type={'email'} value={this.state.name} onChange={evt => this.updateInputValue(evt)} />
            <button
                onClick={() => {
                    this.state = { started: true };
                }}>
                Play
            </button>
            {
                (this.state.name && this.state.name.length > 2) ? '' : <b>Hi there! {this.props.playerName} </b>
            }
            {
                <h5> You: {this.state.name} </h5>
            }

            <Grid cells={['x', 'o', 'x']} doX={this.cb} ></Grid>

        </div>;
    }
}

class Grid extends React.Component<any, any> {
    public state: any = { cells: Array };
    public constructor(props: any) {
        super(props)
        this.state.cells = props.cells;
        console.log('sts', this.state.cells);
    }
    private edit = (x: any, evt: any) => {
        console.log('Edit', evt.target.value, 'at', x);
        let cx = evt.target.value;
        let n: any = [];

        this.state.cells.forEach((e: string) => {
            n.push(e);
        });
        n[x] = cx;
        this.setState({ cells: n });
    }
    render() {
        return <div>
            <h5 onClick={this.props.doX}> Game board!</h5>
            <table>
                {this.renderTrs()}
            </table>
        </div>
    }

    private renderTrs = () => {
        let trs: Array<any> = [];
        {
            [0, 1, 2].forEach(k => {
                trs.push(
                    <tr key={"tr_" + k}>
                         {this.renderCells()}
                    </tr>);
            })
        };
        return (<tbody>
            {trs}
        </tbody>);
    }

    private renderCells = () => {
        let els: Array<any> = [];
        {
            [0, 1, 2].forEach(k => {
                els.push(<input type={'text'} value={this.state.cells[k]} onChange={(e) => this.edit(k, e)} key={"cell_" + k} />);
            })
        }
        return <td>
            {els}
        </td>


    }
}