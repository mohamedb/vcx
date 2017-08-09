import * as React from "react";
interface GameProps {
   playerName:string;
}
interface GameState {
    started?:boolean;
    name?:string;
}
export class Game extends React.Component<GameProps, GameState> {
    public state:GameState = {started:false,name:'' };
    constructor(props:GameProps){
        super(props)
    }
    private updateInputValue = (v:any)=> {
        this.setState({name:v.target.value});
    }

    render() {
        return <div>
            <input type={'text'} value={this.state.name} onChange={evt => this.updateInputValue(evt)} /> 
            <button 
                 onClick={()=>{ 
                     this.state={started:true}; 
                     } }>
                 Play 
            </button>
            {
                 (this.state.name && this.state.name.length>2)?'': <b>Hi there! {this.props.playerName} </b>  
            }
              
            <h5> You: {this.state.name} </h5>
        </div>;
    }
}