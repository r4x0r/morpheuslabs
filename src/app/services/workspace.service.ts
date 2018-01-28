import { EventEmitter, Injectable } from '@angular/core';
import { Workspace } from '../model/workspace.model'
import { User } from '../model/user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service'
import { environment } from '../../environments/environment';

@Injectable()
export class WorkspaceService {

    constructor(
        private http: HttpClient,
        private userService: UserService,
    ) { }

    private workspaces: Workspace[] = [
        // new Workspace('Workspace_Cryptowall','runnning'),
        // new Workspace('DECENT-WS','runnning'),
        // new Workspace('copay','runnning'),
        // new Workspace('CargoChain','runnning'),
    ]
    createWorkshopBtnClicked = new EventEmitter();

    getWorkspaces() {
        this.workspaces = []
        this.http.get(environment.serviceBaseUrl + '/workspace').subscribe(data => {
            // Read the result field from the JSON response.
            let json = data as Array<JSON>
            json.forEach(ws => {
                console.log(ws)
                this.workspaces.push(
                    new Workspace(
                        ws['config'].name,
                        ws['status'],
                        ws['links'].ide,
                        ws['config'].environments.default.recipe.location,
                        ws['config'].environments.default.recipe.type,
                        ws['namespace']
                    ))
            })
            console.log(this.workspaces)
        });
        return this.workspaces
        //return this.workspaces.slice();
    }

    addWorkspace(workspace: Workspace) {
        this.workspaces.push(workspace)
        return this.workspaces.slice();
    }

}