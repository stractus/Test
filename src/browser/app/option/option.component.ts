import {Component, OnInit} from '@angular/core';
import {ShortCuts} from './../shortcuts/shortcuts';
import {IpcRendererService} from './../../shared/electron/ipcrenderer.service';
import {SettingsService} from "../../shared/settings/settings.service";
import {ApplicationService} from "../../shared/electron/application.service";
import {Title} from "@angular/platform-browser";
import {TranslateService} from "ng2-translate";


@Component({
    selector: 'options',
    templateUrl: 'app/option/option.component.html',
    styleUrls: ['app/option/option.component.css'],
    host: {
        "style": "height:100%;" // find something less ugly in future
    }
})
export class OptionComponent implements OnInit{

    constructor(private translate: TranslateService,
                private ipcRendererService: IpcRendererService,
                private titleService: Title) {}

    ngOnInit(){
        this.titleService.setTitle('Option');
    }

    private validate() {
        console.log('emit->valite-option');
        this.ipcRendererService.send('validate-option');
    }

    private reset() {
        console.log('emit->reset-option');
        this.ipcRendererService.send('reset-option');
    }
}
