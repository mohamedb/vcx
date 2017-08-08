
import * as React from "react";
import { Intent, Spinner, AnchorButton, Button, Dialog } from "@blueprintjs/core";
import { Table, Cell, Column, EditableCell } from "@blueprintjs/table";


export class TableEx extends React.Component<any, any> {
    private cellValidator = (r: any, c: number) => {
        console.log('Change', r, c);
    }
    r:number=-1;c:number=-1;
    private confirmEdit=(v:string,r:number,c:number)=> {
        console.log('FinalV', v, 'at(', this.r, this.c,')');
    }
    private renderCell = (rowIndex: number, col: number) => {
        this.r=rowIndex;this.c=col;
        return (
            <EditableCell
                onChange={this.cellValidator}
                value={`$${(rowIndex * 10 + 11).toFixed(2)}`}
                onConfirm={this.confirmEdit} />
        )
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