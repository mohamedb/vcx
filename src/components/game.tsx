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
    private gameData=['x', 'y', 'z','a', 'b', 'c','m', 'n', 'o'];
    constructor(props: GameProps) {
        super(props)
    }
    private updateInputValue = (v: any) => {
        this.setState({ name: v.target.value });
    }

    private cb = () => {
        console.log('Clicked! do something');
    }

    private saveGame= () => {
        console.log('Saved game!', DataService.getByKey('GAME'));
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

            <Grid cells={this.gameData} doX={this.cb} ></Grid>
            <button onClick={this.saveGame} className="pt-button pt-primary">Save </button>

        </div>;
    }
}

class Grid extends React.Component<any, any> {
    public state: any = { cells: Array };
    public constructor(props: any) {
        super(props)
        this.state.cells = props.cells;
        console.log('sts', this.state.cells);
        DataService.addKey('GAME');
    }
    private edit = (x: number, y: number, evt: any) => {
        console.log('Edit', evt.target.value, 'at: (', x, ',', y, ')');
        let cx = evt.target.value;
        let n: any = [];

        this.state.cells.forEach((e: string) => {
            n.push(e);
        });
        n[x+y*3] = cx;
        this.setState({ cells: n });
        DataService.save('GAME',n);
    }
    render() {
        return <div>
            <h5 onClick={this.props.doX}> Game board!</h5>
            <table className="pt-table pt-bordered">
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
                        {this.renderCells(k)}
                    </tr>);
            })
        };
        return (<tbody>
            {trs}
        </tbody>);
    }

    private renderCells = (y: number) => {
        let els: Array<any> = [];
        {
            [0, 1, 2].forEach(k => {
                els.push(
                <input type={'text'} 
                value={this.state.cells[k+3*y]} className="pt-input pt-round"
                onChange={(e) => this.edit(k, y, e)} key={"cell_" + k} />
            );
            })
        }
        return <td>
            {els}
        </td>


    }
}

export class DataService {

    static store:Array<{key:string,data:any, version?:number}>=[];

    static save(key:string, data:any, history=false) {
       
        DataService.store.forEach(e=>{
            if(e.key===key){
                e.version++;
                e.data=data;
                return;
            }
        });
    }

    static getByKey(key:string):any {
        let d= {};
        DataService.store.forEach(e=>{
            if(e.key===key){
                console.log("Data Found for Key: ", key);
                d= e.data;
            }
        });
        return d;
    }

    static addKey(key:string) {
        console.log('New Key =>',key);
        DataService.store.push({key:key,data:{},version:0})
    }
}