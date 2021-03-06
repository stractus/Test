import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from "ng2-translate";

/* Shared Module */
import {SharedModule} from './../../shared/shared.module';

import {OptionRoutingModule} from './option.routing';

import {OptionComponent} from './option.component';
import {GeneralComponent} from './general/general.component';
import {ShortcutsComponent} from './shortcuts/shortcuts.component';
import {NoEmuComponent} from './shortcuts/no-emu/no-emu.component';
import {DiverComponent} from './shortcuts/diver/diver.component';
import {SpellComponent} from './shortcuts/spell/spell.component';
import {ItemComponent} from './shortcuts/item/item.component';
import {InterfaceComponent} from './shortcuts/interface/interface.component';
import {InputComponent} from './shortcuts/input/input.component';

import {FormsModule} from '@angular/forms';
import {NotificationComponent} from "./notification/notification.component";
import {VipComponent} from "./vip/vip.component";
import {AutoGroupComponent} from "./vip/auto-group/auto-group.component";
import {GeneralComponent as VipGeneralComponent} from "./vip/general/general.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MultiAccountComponent} from "./vip/multi-account/multi-account.component";

@NgModule({
    imports: [
        CommonModule,
        OptionRoutingModule,
        SharedModule,
        FormsModule,
        TranslateModule,
        NgbModule
    ],
    providers: [],
    declarations: [
        OptionComponent,
        GeneralComponent,
        ShortcutsComponent,
        NoEmuComponent,
        InputComponent,
        DiverComponent,
        SpellComponent,
        ItemComponent,
        InterfaceComponent,
        NotificationComponent,
        VipComponent,
        AutoGroupComponent,
        VipGeneralComponent,
        MultiAccountComponent
    ]
})
export class OptionModule {
}
