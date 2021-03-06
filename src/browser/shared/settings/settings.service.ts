import {Injectable, NgZone} from '@angular/core';
import {IpcRendererService} from "../electron/ipcrenderer.service";

const settings = (<any>global).nodeRequire('electron-settings');

export class Option {
    public general: Option.General;
    public shortcuts: Option.Shortcuts;
    public notification: Option.Notification;
    public vip: Option.VIP;

    constructor() {
        this.general = new Option.General();
        this.shortcuts = new Option.Shortcuts();
        this.notification = new Option.Notification();
        this.vip = new Option.VIP();
    }
}

export module Option {

    export class Shortcuts {
        public no_emu: Shortcuts.NoEmu;
        public diver: Shortcuts.Diver;
        public interface: Shortcuts.Interface;
        private _spell: Array<string>;
        private _item: Array<string>;

        constructor() {
            this.no_emu = new Shortcuts.NoEmu();
            this.diver = new Shortcuts.Diver();
            this.interface = new Shortcuts.Interface();
            this._spell = settings.getSync('option.shortcuts.spell');
            this._item = settings.getSync('option.shortcuts.item');
        }


        get spell(): Array<string> {
            return new Proxy(this._spell, {
                get: function (target: any, name: any) {
                    return target[name];
                },
                set(target: any, prop: string, value: any) {
                    target[prop] = value;
                    settings.setSync('option.shortcuts.spell', target);
                    return true;
                }
            });
        }

        set spell(spell: Array<string>) {
            settings.setSync('option.shortcuts.spell', spell);
            this._spell = spell;
        }

        get item(): Array<string> {
            return new Proxy(this._item, {
                get: function (target, name) {
                    return target[name];
                },
                set(target, prop: string, value) {
                    target[prop] = value;
                    settings.setSync('option.shortcuts.item', target);
                    return true;
                }
            });
        }

        set item(item: Array<string>) {
            settings.setSync('option.shortcuts.item', item);
            this._item = item;
        }
    }

    export module Shortcuts {

        export class Interface {
            private _carac: string;
            private _spell: string;
            private _bag: string;
            private _bidhouse: string;
            private _map: string;
            private _friend: string;
            private _book: string;
            private _guild: string;
            private _conquest: string;
            private _job: string;
            private _alliance: string;
            private _mount: string;
            private _directory: string;
            private _alignement: string;
            private _bestiary: string;
            private _title: string;
            private _achievement: string;
            private _almanax: string;
            private _spouse: string;
            private _shop: string;
            private _goultine: string;

            get carac(): string {
                return this._carac;
            }

            set carac(carac: string) {
                settings.setSync('option.shortcuts.interface.carac', carac);
                this._carac = carac;
            }

            get spell(): string {
                return this._spell;
            }

            set spell(spell: string) {
                settings.setSync('option.shortcuts.interface.spell', spell);
                this._spell = spell;
            }

            get bag(): string {
                return this._bag;
            }

            set bag(bag: string) {
                settings.setSync('option.shortcuts.interface.bag', bag);
                this._bag = bag;
            }

            get bidhouse(): string {
                return this._bidhouse;
            }

            set bidhouse(bidhouse: string) {
                settings.setSync('option.shortcuts.interface.bidhouse', bidhouse);
                this._bidhouse = bidhouse;
            }

            get map(): string {
                return this._map;
            }

            set map(map: string) {
                settings.setSync('option.shortcuts.interface.map', map);
                this._map = map;
            }

            get friend(): string {
                return this._friend;
            }

            set friend(friend: string) {
                settings.setSync('option.shortcuts.interface.friend', friend);
                this._friend = friend;
            }

            get book(): string {
                return this._book;
            }

            set book(book: string) {
                settings.setSync('option.shortcuts.interface.book', book);
                this._book = book;
            }

            get guild(): string {
                return this._guild;
            }

            set guild(guild: string) {
                settings.setSync('option.shortcuts.interface.guild', guild);
                this._guild = guild;
            }

            get conquest(): string {
                return this._conquest;
            }

            set conquest(conquest: string) {
                settings.setSync('option.shortcuts.interface.conquest', conquest);
                this._conquest = conquest;
            }

            get job(): string {
                return this._job;
            }

            set job(job: string) {
                settings.setSync('option.shortcuts.interface.job', job);
                this._job = job;
            }

            get alliance(): string {
                return this._alliance;
            }

            set alliance(alliance: string) {
                settings.setSync('option.shortcuts.interface.alliance', alliance);
                this._alliance = alliance;
            }

            get mount(): string {
                return this._mount;
            }

            set mount(mount: string) {
                settings.setSync('option.shortcuts.interface.mount', mount);
                this._mount = mount;
            }

            get directory(): string {
                return this._directory;
            }

            set directory(directory: string) {
                settings.setSync('option.shortcuts.interface.directory', directory);
                this._directory = directory;
            }

            get alignement(): string {
                return this._alignement;
            }

            set alignement(alignement: string) {
                settings.setSync('option.shortcuts.interface.alignement', alignement);
                this._alignement = alignement;
            }

            get bestiary(): string {
                return this._bestiary;
            }

            set bestiary(bestiary: string) {
                settings.setSync('option.shortcuts.interface.bestiary', bestiary);
                this._bestiary = bestiary;
            }

            get title(): string {
                return this._title;
            }

            set title(title: string) {
                settings.setSync('option.shortcuts.interface.title', title);
                this._title = title;
            }

            get achievement(): string {
                return this._achievement;
            }

            set achievement(achievement: string) {
                settings.setSync('option.shortcuts.interface.achievement', achievement);
                this._achievement = achievement;
            }

            get almanax(): string {
                return this._almanax;
            }

            set almanax(almanax: string) {
                settings.setSync('option.shortcuts.interface.almanax', almanax);
                this._almanax = almanax;
            }

            get spouse(): string {
                return this._spouse;
            }

            set spouse(spouse: string) {
                settings.setSync('option.shortcuts.interface.spouse', spouse);
                this._spouse = spouse;
            }

            get shop(): string {
                return this._shop;
            }

            set shop(shop: string) {
                settings.setSync('option.shortcuts.interface.shop', shop);
                this._shop = shop;
            }

            get goultine(): string {
                return this._goultine;
            }

            set goultine(goultine: string) {
                settings.setSync('option.shortcuts.interface.goultine', goultine);
                this._goultine = goultine;
            }

            public getAll(): Array<any> {
                let tab: Array<any> = [];

                for (let prop in this) {
                    let newProp = prop.replace('_', '');
                    tab.push({
                        key: newProp,
                        value: this[prop]
                    });
                }

                return tab;
            }

            constructor() {
                this._carac = settings.getSync('option.shortcuts.interface.carac');
                this._spell = settings.getSync('option.shortcuts.interface.spell');
                this._bag = settings.getSync('option.shortcuts.interface.bag');
                this._bidhouse = settings.getSync('option.shortcuts.interface.bidhouse');
                this._map = settings.getSync('option.shortcuts.interface.map');
                this._friend = settings.getSync('option.shortcuts.interface.friend');
                this._book = settings.getSync('option.shortcuts.interface.book');
                this._guild = settings.getSync('option.shortcuts.interface.guild');
                this._conquest = settings.getSync('option.shortcuts.interface.conquest');
                this._job = settings.getSync('option.shortcuts.interface.job');
                this._alliance = settings.getSync('option.shortcuts.interface.alliance');
                this._mount = settings.getSync('option.shortcuts.interface.mount');
                this._directory = settings.getSync('option.shortcuts.interface.directory');
                this._alignement = settings.getSync('option.shortcuts.interface.alignement');
                this._bestiary = settings.getSync('option.shortcuts.interface.bestiary');
                this._title = settings.getSync('option.shortcuts.interface.title');
                this._achievement = settings.getSync('option.shortcuts.interface.achievement');
                this._almanax = settings.getSync('option.shortcuts.interface.almanax');
                this._spouse = settings.getSync('option.shortcuts.interface.spouse');
                this._shop = settings.getSync('option.shortcuts.interface.shop');
                this._goultine = settings.getSync('option.shortcuts.interface.goultine');
            }
        }

        export class NoEmu {
            private _new_tab: string;
            private _new_window: string;
            private _next_tab: string;
            private _prev_tab: string;
            private _activ_tab: string;
            private _tabs: Array<string>;

            get new_tab(): string {
                return this._new_tab;
            }

            set new_tab(new_tab: string) {
                settings.setSync('option.shortcuts.no_emu.new_tab', new_tab);
                this._new_tab = new_tab;
            }

            get new_window(): string {
                return this._new_window;
            }

            set new_window(new_window: string) {
                settings.setSync('option.shortcuts.no_emu.new_window', new_window);
                this._new_window = new_window;
            }

            get next_tab(): string {
                return this._next_tab;
            }

            set next_tab(next_tab: string) {
                settings.setSync('option.shortcuts.no_emu.next_tab', next_tab);
                this._next_tab = next_tab;
            }

            get prev_tab(): string {
                return this._prev_tab;
            }

            set prev_tab(prev_tab: string) {
                settings.setSync('option.shortcuts.no_emu.prev_tab', prev_tab);
                this._prev_tab = prev_tab;
            }

            get activ_tab(): string {
                return this._activ_tab;
            }

            set activ_tab(activ_tab: string) {
                settings.setSync('option.shortcuts.no_emu.activ_tab', activ_tab);
                this._activ_tab = activ_tab;
            }

            get tabs(): Array<string> {
                return new Proxy(this._tabs, {
                    get: function (target: any, name: any) {
                        return target[name];
                    },
                    set(target: any, prop: string, value: any) {
                        target[prop] = value;
                        settings.setSync('option.shortcuts.no_emu.tabs', target);
                        return true;
                    }
                });
            }

            set tabs(tabs: Array<string>) {
                settings.setSync('option.shortcuts.no_emu.tabs', tabs);
                this._tabs = tabs;
            }

            constructor() {
                this.new_tab = settings.getSync('option.shortcuts.no_emu.new_tab');
                this.new_window = settings.getSync('option.shortcuts.no_emu.new_window');
                this.next_tab = settings.getSync('option.shortcuts.no_emu.next_tab');
                this.prev_tab = settings.getSync('option.shortcuts.no_emu.prev_tab');
                this.activ_tab = settings.getSync('option.shortcuts.no_emu.activ_tab');
                this.tabs = settings.getSync('option.shortcuts.no_emu.tabs');
            }
        }

        export class Diver {
            private _end_turn: string;
            private _open_chat: string;

            get end_turn(): string {
                return this._end_turn;
            }

            set end_turn(end_turn: string) {
                settings.setSync('option.shortcuts.diver.end_turn', end_turn);
                this._end_turn = end_turn;
            }

            get open_chat(): string {
                return this._open_chat;
            }

            set open_chat(open_chat: string) {
                settings.setSync('option.shortcuts.diver.open_chat', open_chat);
                this._open_chat = open_chat;
            }

            constructor() {
                this.end_turn = settings.getSync('option.shortcuts.diver.end_turn');
                this.open_chat = settings.getSync('option.shortcuts.diver.open_chat');
            }
        }
    }

    export class General {

        private _hidden_shop: boolean;
        private _hidden_tabs: boolean;
        private _developper_mode: boolean;
        private _resolution: {
            x: boolean;
            y: boolean;
        }

        get hidden_shop(): boolean {
            return this._hidden_shop;
        }

        set hidden_shop(hidden_shop: boolean) {
            settings.setSync('option.general.hidden_shop', hidden_shop);
            this._hidden_shop = hidden_shop;
        }

        get hidden_tabs(): boolean {
            return this._hidden_tabs;
        }

        set hidden_tabs(hidden_tabs: boolean) {
            settings.setSync('option.general.hidden_tabs', hidden_tabs);
            this._hidden_tabs = hidden_tabs;
        }

        get developper_mode() {
            return this._developper_mode;
        }

        set developper_mode(developper_mode: boolean) {
            settings.setSync('option.general.developper_mode', developper_mode);
            this._developper_mode = developper_mode;
        }

        get resolution() {
            return this._resolution;
        }

        set resolution(resolution: any) {
            settings.setSync('option.general.resolution', resolution);
            this._resolution = resolution;
        }

        constructor() {
            this.hidden_shop = settings.getSync('option.general.hidden_shop');
            this.hidden_tabs = settings.getSync('option.general.hidden_tabs');
            this.developper_mode = settings.getSync('option.general.developper_mode');
            this.resolution = settings.getSync('option.general.resolution');
        }
    }

    export class Notification {
        private _private_message: boolean;
        private _fight_turn: boolean;
        private _tax_collector: boolean;
        private _kolizeum: boolean;

        get private_message() {
            return this._private_message;
        }

        set private_message(private_message: any) {
            settings.setSync('option.notification.private_message', private_message);
            this._private_message = private_message;
        }

        get fight_turn() {
            return this._fight_turn;
        }

        set fight_turn(fight_turn: any) {
            settings.setSync('option.notification.fight_turn', fight_turn);
            this._fight_turn = fight_turn;
        }

        get tax_collector() {
            return this._tax_collector;
        }

        set tax_collector(tax_collector: any) {
            settings.setSync('option.notification.tax_collector', tax_collector);
            this._tax_collector = tax_collector;
        }

        get kolizeum() {
            return this._kolizeum;
        }

        set kolizeum(kolizeum: any) {
            settings.setSync('option.notification.kolizeum', kolizeum);
            this._kolizeum = kolizeum;
        }

        constructor() {
            this.fight_turn = settings.getSync('option.notification.fight_turn');
            this.private_message = settings.getSync('option.notification.private_message');
            this.tax_collector = settings.getSync('option.notification.tax_collector');
            this.kolizeum = settings.getSync('option.notification.kolizeum');
        }
    }

    export class VIP {
        public general: VIP.General;
        public autogroup: VIP.AutoGroup;
        public multiaccount: VIP.MultiAccount;

        constructor() {
            this.general = new VIP.General();
            this.autogroup = new VIP.AutoGroup();
            this.multiaccount = new VIP.MultiAccount();
        }
    }

    export module VIP {
        export class General {
            private _disable_inactivity: boolean;
            private _health_bar: boolean;
            private _health_bar_shortcut: string;
            private _estimator: boolean;

            get estimator(): boolean{
                return this._estimator;
            }

            set estimator(estimator: boolean){
                settings.setSync('option.vip.general.estimator', estimator);
                this._estimator = estimator;
            }

            get disable_inactivity(): boolean{
                return this._disable_inactivity;
            }

            set disable_inactivity(disable_inactivity: boolean){
                settings.setSync('option.vip.general.disable_inactivity', disable_inactivity);
                this._disable_inactivity = disable_inactivity;
            }

            get health_bar(): boolean{
                return this._health_bar;
            }

            set health_bar(health_bar: boolean){
                settings.setSync('option.vip.general.health_bar', health_bar);
                this._health_bar = health_bar;
            }

            get health_bar_shortcut(): string{
                return this._health_bar_shortcut;
            }

            set health_bar_shortcut(health_bar_shortcut: string){
                settings.setSync('option.vip.general.health_bar_shortcut', health_bar_shortcut);
                this._health_bar_shortcut = health_bar_shortcut;
            }

            constructor(){
                this.disable_inactivity = settings.getSync('option.vip.general.disable_inactivity');
                this.health_bar = settings.getSync('option.vip.general.health_bar');
                this.health_bar_shortcut = settings.getSync('option.vip.general.health_bar_shortcut');
                this.estimator = settings.getSync('option.vip.general.estimator');
            }
        }

        export class AutoGroup {
            private _active: boolean;
            private _leader: string;
            private _members: string;
            private _follow_leader: boolean;
            private _ready:boolean;
            private _delay: number;
            private _fight: boolean;
            private _random_move: boolean;

            get active(): boolean{
                return this._active;
            }

            set active(active: boolean){
                settings.setSync('option.vip.auto_group.active', active);
                this._active = active;
            }

            get leader(): string{
                return this._leader;
            }

            set leader(leader: string){
                settings.setSync('option.vip.auto_group.leader', leader);
                this._leader = leader;
            }

            get members(): string{
                return this._members;
            }

            set members(members: string){
                settings.setSync('option.vip.auto_group.members', members);
                this._members = members;
            }

            get follow_leader(): boolean{
                return this._follow_leader;
            }

            set follow_leader(follow_leader: boolean){
                settings.setSync('option.vip.auto_group.follow_leader', follow_leader);
                this._follow_leader = follow_leader;
            }

            get ready(): boolean{
                return this._ready;
            }

            set ready(ready: boolean){
                settings.setSync('option.vip.auto_group.ready', ready);
                this._ready = ready;
            }

            get delay(): number{
                return this._delay;
            }

            set delay(delay: number){
                settings.setSync('option.vip.auto_group.delay', delay);
                this._delay = delay;
            }

            get fight(): boolean{
                return this._fight;
            }

            set fight(fight: boolean){
                settings.setSync('option.vip.auto_group.fight', fight);
                this._fight = fight;
            }

            get random_move(): boolean{
                return this._random_move;
            }

            set random_move(random_move: boolean){
                settings.setSync('option.vip.auto_group.random_move', random_move);
                this._random_move = random_move;
            }

            constructor(){
                this.active = settings.getSync('option.vip.auto_group.active');
                this.leader = settings.getSync('option.vip.auto_group.leader');
                this.members = settings.getSync('option.vip.auto_group.members');
                this.follow_leader = settings.getSync('option.vip.auto_group.follow_leader');
                this.leader = settings.getSync('option.vip.auto_group.leader');
                this.ready = settings.getSync('option.vip.auto_group.ready');
                this.delay = settings.getSync('option.vip.auto_group.delay');
                this.fight = settings.getSync('option.vip.auto_group.fight');
                this.random_move = settings.getSync('option.vip.auto_group.random_move');
            }
        }

        export class MultiAccount {
            private _active: boolean;
            private _master_password: string;
            private _windows: {account_name_encrypted: string, password_encrypted: string}[][];

            get active(): boolean {
                return this._active;
            }

            set active(active: boolean) {
                settings.setSync('option.vip.multi_account.active', active);
                this._active = active;
            }

            get master_password(): string {
                return this._master_password;
            }

            set master_password(active: string) {
                settings.setSync('option.vip.multi_account.master_password', active);
                this._master_password = active;
            }

            get windows(): {account_name_encrypted: string, password_encrypted: string}[][] {
                return this._windows;
            }

            set windows(windows: {account_name_encrypted: string, password_encrypted: string}[][]) {
                settings.setSync('option.vip.multi_account.windows', windows);
                this._windows = windows;
            }

            constructor(){
                this.active = settings.getSync('option.vip.multi_account.active');
                this.master_password = settings.getSync('option.vip.multi_account.master_password');
                this.windows = settings.getSync('option.vip.multi_account.windows');
            }
        }
    }
}


@Injectable()
export class SettingsService {

    public option: Option;

    private _buildVersion: string;
    private _appVersion: string;
    private _alertCounter: number;
    private _language: string;
    private _vip_id: string;
    private _last_news: number;

    get last_news(): number {
        return this._last_news;
    }

    set last_news(last_news: number) {
        settings.setSync('last_news', last_news);
        this._last_news = last_news;
    }

    get vip_id(): string {
        return this._vip_id;
    }

    set vip_id(vip_id: string) {
        settings.setSync('vip_id', vip_id);
        this._vip_id = vip_id;
    }

    get alertCounter(): number {
        return this._alertCounter;
    }

    set alertCounter(alertCounter: number) {
        settings.setSync('alertCounter', alertCounter);
        this._alertCounter = alertCounter;
    }

    get buildVersion(): string {
        return this._buildVersion;
    }

    set buildVersion(buildVersion: string) {
        settings.setSync('buildVersion', buildVersion);
        this._buildVersion = buildVersion;
    }

    get appVersion(): string {
        return this._appVersion;
    }

    set appVersion(appVersion: string) {
        settings.setSync('appVersion', appVersion);
        this._appVersion = appVersion;
    }

    get language(): string {
        return this._language;
    }

    set language(language: string) {
        settings.setSync('language', language);
        this._language = language;
    }


    constructor(private ipcRendererService: IpcRendererService,
                private zone: NgZone) {

        this.option = new Option();

        this._appVersion = settings.getSync('appVersion');
        this._buildVersion = settings.getSync('buildVersion');
        this._alertCounter = settings.getSync('alertCounter');
        this._language = settings.getSync('language');
        this._vip_id = settings.getSync('vip_id');
        this._last_news = settings.getSync('last_news');

        this.ipcRendererService.on('reload-settings', () => {
            console.log('receive->reload-settings');

            this._appVersion = settings.getSync('appVersion');
            this._buildVersion = settings.getSync('buildVersion');
            this._alertCounter = settings.getSync('alertCounter');
            this._language = settings.getSync('language');
            this._vip_id = settings.getSync('vip_id');
            this._last_news = settings.getSync('last_news');


            let resetOption = new Option(); // synchronous call

            this.option.shortcuts.no_emu = resetOption.shortcuts.no_emu;
            this.option.general = resetOption.general;
            this.option.notification = resetOption.notification;
            this.option.vip = resetOption.vip;
            this.option.shortcuts.diver = resetOption.shortcuts.diver;
            this.option.shortcuts.interface = resetOption.shortcuts.interface;
            this.option.shortcuts.spell = resetOption.shortcuts.spell;
            this.option.shortcuts.item = resetOption.shortcuts.item;

            console.log('emit->reload-settings-done');

            this.ipcRendererService.send('reload-settings-done');
        });

    }

}
