"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GMAIL_USERID_CONFIG = void 0;
const config_1 = require("@nestjs/config");
exports.GMAIL_USERID_CONFIG = 'GMAIL_USERID_CONFIG';
exports.default = config_1.registerAs(exports.GMAIL_USERID_CONFIG, () => ({
    userId: process.env.GMAIL_USERID,
}));
//# sourceMappingURL=user.id.config.js.map