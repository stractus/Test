import {NgModule, ModuleWithProviders}            from '@angular/core';
import {RouterModule, Routes}        from '@angular/router';

import {OptionComponent} from './option.component';
import {GeneralComponent} from './general/general.component';
import {ShortcutsComponent} from './shortcuts/shortcuts.component';
import {NoEmuComponent} from './shortcuts/no-emu/no-emu.component';
import {DiverComponent} from './shortcuts/diver/diver.component';
import {SpellComponent} from './shortcuts/spell/spell.component';
import {ItemComponent} from './shortcuts/item/item.component';
import {InterfaceComponent} from './shortcuts/interface/interface.component';
import {NotificationComponent} from "./notification/notification.component";
import {VipComponent} from "./vip/vip.component";
import {GeneralComponent as VipGeneralComponent} from "./vip/general/general.component";
import {AutoGroupComponent} from "./vip/auto-group/auto-group.component";
import {MultiAccountComponent} from "./vip/multi-account/multi-account.component";

const routes: Routes = [
    {
        path: '',
        component: OptionComponent,
        children: [
            {
                path: '',
                redirectTo: 'general',
                pathMatch: 'full'
            },
            {
                path: 'general',
                component: GeneralComponent
            },
            {
                path: 'shortcuts',
                component: ShortcutsComponent,
                children: [
                    {path: '', redirectTo: 'no-emu', pathMatch: 'full'},
                    {path: 'no-emu', component: NoEmuComponent},
                    {path: 'diver', component: DiverComponent},
                    {path: 'spell', component: SpellComponent},
                    {path: 'item', component: ItemComponent},
                    {path: 'interface', component: InterfaceComponent}
                ]

            },
            {
                path: 'notification',
                component: NotificationComponent
            },
            {
                path: 'vip',
                component: VipComponent,
                children: [
                    {path: '', redirectTo: 'general', pathMatch: 'full'},
                    {path: 'general', component: VipGeneralComponent},
                    {path: 'auto-group', component: AutoGroupComponent},
                    {path: 'multi-account', component: MultiAccountComponent},
                ]
            },
        ]
    }
];

export const OptionRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);