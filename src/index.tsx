import * as React from "react";
import * as ReactDOM from "react-dom";

import { Game } from "./components/game";
 

ReactDOM.render(
    <div>
     <Game playerName='unknown'></Game>
    </div>,
    document.getElementById("example")
);