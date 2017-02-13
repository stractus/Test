import {Component, Optional, ViewEncapsulation, Inject, Input, NgZone} from '@angular/core';
import { SettingsService } from './../../../../shared/settings/settings.service';

@Component({
    selector: 'option-shortcuts-interface',
    templateUrl: 'app/option/vip/general/general.component.html',
    styleUrls: ['app/option/vip/general/general.component.css'],
    host: {

    }
})
export class GeneralComponent {

    constructor(
        private settingsService: SettingsService
    ) {}

}
