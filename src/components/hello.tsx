import * as React from "react";
import { Intent, Spinner, AnchorButton, Button, Dialog } from "@blueprintjs/core";
import { Table, Cell, Column } from "@blueprintjs/table";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <div>
            <b>Hi there! {this.props.compiler} and {this.props.framework}!</b> <br />
            <AnchorButton text="Click" />
            <DialogExample />
        </div>;
    }
}



interface IDialogExampleState {
    isOpen: boolean;
}

class DialogExample extends React.Component<{}, IDialogExampleState> {
    public state = { isOpen: false };


    private renderCell = (rowIndex: number) => {
        return <Cell>{`$${(rowIndex * 10+11).toFixed(2)}`}</Cell>
    };


    public render() {
        return (
            <div style={{padding:'10%'}}>
                 
                <Button onClick={this.toggleDialog} text="Show dialog" />
                <Dialog
                    iconName="inbox"
                    isOpen={this.state.isOpen}
                    onClose={this.toggleDialog}
                    title="Dialog header"
                >
                    <div className="pt-dialog-body">
                        Some content
                    </div>
                    <div className="pt-dialog-footer">
                        <div className="pt-dialog-footer-actions">
                            <Button text="Secondary" />
                            <Button
                                intent={Intent.PRIMARY}
                                onClick={this.toggleDialog}
                                text="Primary"
                            />
                        </div>
                    </div>
                </Dialog>
                <h5>Table! </h5>
                <Table numRows={10}>
                    <Column name="Dollars" renderCell={this.renderCell} />
                </Table>
            
            </div>
        );
    }

    private toggleDialog = () => this.setState({ isOpen: !this.state.isOpen });
}

