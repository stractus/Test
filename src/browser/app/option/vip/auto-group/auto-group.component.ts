import {Component, Optional, ViewEncapsulation, Inject, Input, NgZone} from '@angular/core';
import { SettingsService } from './../../../../shared/settings/settings.service';
import {ApplicationService} from "../../../../shared/electron/application.service";

@Component({
    selector: 'option-shortcuts-interface',
    templateUrl: 'app/option/vip/auto-group/auto-group.component.html',
    styleUrls: ['app/option/vip/auto-group/auto-group.component.css'],
    host: {

    }
})
export class AutoGroupComponent {

    constructor(
        private settingsService: SettingsService,
        private applicationService: ApplicationService
    ) {
        settingsService.option.vip.autogroup.leader;
    }

}