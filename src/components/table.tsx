
import * as React from "react";
import { Intent, Spinner, AnchorButton, Button, Dialog } from "@blueprintjs/core";
import { Table, Cell, Column } from "@blueprintjs/table";


export class TableEx extends React.Component<any, any> {
    private renderCell = (rowIndex: number, col: number) => {
        return <Cell>{`$${(rowIndex * 10 + 11).toFixed(2)}`}</Cell>
    };
    private renderNamesCell = (rowId: any, col: number) => {
        return <Cell> {'Adx' + rowId + 'mp' + col} </Cell>
    }
    private selected: Array<any> = [];
    private cp = (x: any) => {
        console.log('cp', x);
        this.selected.push(x);
    }
    private show = () => {
        console.log('List', this.selected);
        this.selected = [];
    }
    render() {
        return (
            <span>
                <Table numRows={10} onSelection={this.cp}>
                    <Column name="Dollars" renderCell={this.renderCell} />
                    <Column name="Names" renderCell={this.renderNamesCell} />
                </Table>
                <button onClick={this.show} className="pt-button">
                    Show
                </button>
            </span>
        );
    }
}