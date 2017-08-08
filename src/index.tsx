import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import {TableEx  } from "./components/table";

ReactDOM.render(
    <div>
    <Hello compiler="TypeScript" framework="React" />
    <TableEx></TableEx>
    </div>,
    document.getElementById("example")
);