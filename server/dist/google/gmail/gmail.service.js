"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var GmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const module_1 = require("./module");
const googleapis_1 = require("googleapis");
let GmailService = GmailService_1 = class GmailService {
    constructor(oauth, gmail, gmailUser) {
        this.oauth = oauth;
        this.gmail = gmail;
        this.gmailUser = gmailUser;
        this.logger = new common_1.Logger(GmailService_1.name);
        console.log(gmailUser);
    }
    async check() {
        console.log('cron');
        const result = await this.fetchEmails();
        console.log(result);
    }
    async fetchEmails() {
        this.logger.log('fetching');
        console.log('running');
        return this.gmail.users.messages.list({
            userId: this.gmailUser.userId,
            maxResults: 10,
        }).then(response => response.data);
    }
};
__decorate([
    schedule_1.Cron(schedule_1.CronExpression.EVERY_MINUTE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GmailService.prototype, "check", null);
GmailService = GmailService_1 = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(module_1.GMAIL_OAUTH_PROVIDER)),
    __param(1, common_1.Inject(module_1.GMAIL_PROVIDER)),
    __metadata("design:paramtypes", [Object, googleapis_1.gmail_v1.Gmail, Object])
], GmailService);
exports.GmailService = GmailService;
//# sourceMappingURL=gmail.service.js.map