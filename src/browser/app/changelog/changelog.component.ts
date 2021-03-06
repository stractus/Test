import {Component, OnInit, NgZone}      from '@angular/core';
import {Title}     from '@angular/platform-browser';
import {ApplicationService} from "../../shared/electron/application.service";
const marked = require('marked');

const fs = (<any>global).nodeRequire('fs');

@Component({
    moduleId: module.id,
    selector: 'changelog',
    templateUrl: 'changelog.component.html',
    styleUrls: ['changelog.component.css']
})
export class ChangeLogComponent implements OnInit {

    private content: string;

    constructor(private titleService: Title,
                private applicationService: ApplicationService,
                private zone: NgZone) {}

    ngOnInit() {
        this.titleService.setTitle('ChangeLog');

        fs.readFile(this.applicationService.appPath+'/CHANGELOG.md', {encoding: 'utf-8'}, (err: any, data: any) => {
            this.zone.run(() => {
                this.content = marked(data);
            });
        });
    }

}
