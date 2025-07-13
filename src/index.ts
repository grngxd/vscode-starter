import * as vscode from 'vscode';

export const activate = (ctx: vscode.ExtensionContext) => {
    vscode.window.showInformationMessage('vscode extension!');
}

export const deactivate = () => {}