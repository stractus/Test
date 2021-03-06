export interface ISettings {
    language: string;
    buildVersion: string;
    appVersion: string;
    alertCounter: number;
    vip_id: string;
    last_news: number;
    option: {
        general: {
            hidden_shop: boolean;
            hidden_tabs: boolean;
            stay_connected: boolean;
            resolution: {
                x: number;
                y: number;
            }
        }
        shortcuts: {
            no_emu: {
                new_tab: string;
                new_window: string;
                next_tab: string;
                prev_tab: string;
                activ_tab: string;
                tabs: Array<string>;
            }
            diver: {
                end_turn: string;
                open_chat: string;
            }
            spell: Array<string>;
            item: Array<string>;
            interface: {
                carac: string;
                spell: string;
                bag: string;
                bidhouse: string;
                map: string;
                friend: string;
                book: string;
                guild: string;
                conquest: string;
                job: string;
                alliance: string;
                mount: string;
                directory: string;
                alignement: string;
                bestiary: string;
                title: string;
                achievement: string;
                almanax: string;
                spouse: string;
                shop: string;
                goultine: string;
            }
        },
        notification: {
            private_message: boolean;
            fight_turn: boolean;
            tax_collector: boolean;
            kolizeum: boolean;
        },
        vip: {
            general:{
                disable_inactivity: boolean;
                health_bar: boolean;
                health_bar_shortcut: string;
                estimator: boolean;
            },
            auto_group : {
                active: boolean;
                leader: string;
                members: string;
                follow_leader: boolean;
                random_move: boolean;
                ready: boolean;
                delay:number;
                fight: boolean;
            },
            multi_account : {
                active: boolean;
                master_password: string;
                windows: {account_name_encrypted: string, password_encrypted: string}[][];
            }
        }
    }
}
