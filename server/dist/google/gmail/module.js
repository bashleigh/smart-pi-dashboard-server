"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GmailModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailModule = exports.GMAIL_OAUTH_PROVIDER = exports.GMAIL_PROVIDER = exports.GMAIL_CONFIG_PROVIDER = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const gmail_service_1 = require("./gmail.service");
const googleapis_1 = require("googleapis");
const config_1 = require("@nestjs/config");
const gmail_config_1 = require("./config/gmail.config");
const user_id_config_1 = require("./config/user.id.config");
exports.GMAIL_CONFIG_PROVIDER = 'GMAIL_CONFIG_PROVIDER';
exports.GMAIL_PROVIDER = 'GMAIL_PROVIDER';
exports.GMAIL_OAUTH_PROVIDER = 'GMAIL_OAUTH_PROVIDER';
let GmailModule = GmailModule_1 = class GmailModule {
    static forRoot() {
        return {
            module: GmailModule_1,
            imports: [
                schedule_1.ScheduleModule.forRoot(),
                config_1.ConfigModule.forFeature(gmail_config_1.default),
            ],
            providers: [
                {
                    provide: gmail_service_1.GmailService,
                    useFactory: (oauth, gmail, config) => {
                        console.log(oauth, gmail, config.get(user_id_config_1.GMAIL_USERID_CONFIG), config.get(exports.GMAIL_CONFIG_PROVIDER));
                        return new gmail_service_1.GmailService(oauth, gmail, config.get(user_id_config_1.GMAIL_USERID_CONFIG));
                    },
                    inject: [exports.GMAIL_OAUTH_PROVIDER, exports.GMAIL_PROVIDER, config_1.ConfigService],
                },
                GmailModule_1.createGmailProvider(),
                GmailModule_1.createGoogleOauthProvider(),
            ],
            exports: [gmail_service_1.GmailService],
        };
    }
    static createGmailProvider() {
        return {
            provide: exports.GMAIL_PROVIDER,
            inject: [exports.GMAIL_OAUTH_PROVIDER],
            useFactory: (auth) => googleapis_1.google.gmail({ auth, version: 'v1' }),
        };
    }
    static createGoogleOauthProvider() {
        return {
            provide: exports.GMAIL_OAUTH_PROVIDER,
            inject: [config_1.ConfigService],
            useFactory: (config) => {
                console.log(config.get(exports.GMAIL_CONFIG_PROVIDER));
                new googleapis_1.google.auth.OAuth2(config.get(exports.GMAIL_CONFIG_PROVIDER));
            },
        };
    }
};
GmailModule = GmailModule_1 = __decorate([
    common_1.Module({})
], GmailModule);
exports.GmailModule = GmailModule;
//# sourceMappingURL=module.js.map