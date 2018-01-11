import { EventEmitter } from '@angular/core';
import { Workspace } from '../model/workspace.model'

export class WorkspaceService {
    private workspaces: Workspace[] = [
        new Workspace('Workspace_Cryptowall','runnning','','','',''),
        new Workspace('DECENT-WS','runnning','','','',''),
        new Workspace('copay','runnning','','','',''),
        new Workspace('CargoChain','runnning','','','',''),
    ]
    createWorkshopBtnClicked = new EventEmitter();

    getWorkshops(){
        return this.workspaces.slice();
    }

    addWorkshop(workspace: Workspace){
        this.workspaces.push(workspace)
        return this.workspaces.slice();
    }

}