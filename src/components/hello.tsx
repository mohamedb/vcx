import * as React from "react";
import { Intent, Spinner,AnchorButton , Button, Dialog } from "@blueprintjs/core";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <div>
             <b>Hello from {this.props.compiler} and {this.props.framework}!</b> <br/>
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
 
    public render() {
        return (
            <div>
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
            </div>
        );
    }
 
    private toggleDialog = () => this.setState({ isOpen: !this.state.isOpen });
}