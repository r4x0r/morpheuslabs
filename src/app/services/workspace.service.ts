import { EventEmitter, Injectable } from '@angular/core';
import { Workspace } from '../model/workspace.model'
import { User } from '../model/user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

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
    workshopRefreshed = new EventEmitter();
    private statusCheckCompleted = new EventEmitter();

    getWorkspaces() {
        this.workspaces = []
        this.http.get(environment.serviceBaseUrl + '/workspace').subscribe(data => {
            // Read the result field from the JSON response.
            let json = data as Array<JSON>
            json.forEach(ws => {
                console.log(ws)
                this.workspaces.push(
                    new Workspace(
                        ws['id'],
                        ws['config'].name,
                        ws['status'],
                        ws['links'].ide,
                        ws['config'].environments.default.recipe.location,
                        ws['config'].environments.default.recipe.type,
                        ws['namespace']
                    ))
            })
        });
        this.workshopRefreshed.emit(this.workspaces)
    }

    stopWorkspace(id: string) {
        this.http.delete(environment.serviceBaseUrl + '/workspace/' + id + '/runtime').subscribe(res => {
            this.getWorkspaces()
        })
        let subscriber = IntervalObservable.create(2000).subscribe(() => {
            this.http.get(environment.serviceBaseUrl + '/workspace/' + id).subscribe(res => {
                let json = res as JSON
                console.log(json['status'])
                if (json['status'] == 'STOPPED') {
                    subscriber.unsubscribe()
                    this.getWorkspaces()
                }
            })
        });
    }

    startWorkspace(id: string) {
        this.http.post(environment.serviceBaseUrl + '/workspace/' + id + '/runtime', '').subscribe(res => {
            this.getWorkspaces()
        })
        let subscriber = IntervalObservable.create(2000).subscribe(() => {
            this.http.get(environment.serviceBaseUrl + '/workspace/' + id).subscribe(res => {
                let json = res as JSON
                console.log(json['status'])
                if (json['status'] == 'RUNNING') {
                    subscriber.unsubscribe()
                    this.getWorkspaces()
                }
            })
        });
    }

    // checkWorkspace(id: string) {
    //     this.http.get(environment.serviceBaseUrl + '/workspace/' + id).subscribe(res => {
    //         let json = res as JSON
    //         this.statusCheckCompleted.emit(json)
    //     })
    // }

    addWorkspace(workspace: Workspace) {
        this.workspaces.push(workspace)
        return this.workspaces.slice();
    }

}