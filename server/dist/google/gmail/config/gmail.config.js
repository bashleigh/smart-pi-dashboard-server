"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const module_1 = require("./../module");
exports.default = config_1.registerAs(module_1.GMAIL_CONFIG_PROVIDER, () => ({
    client_id: process.env.GMAIL_CLIENT_ID,
    client_secret: process.env.GMAIL_CLIENT_SECRET,
    redirectUri: process.env.GMAIL_REDIRECT,
}));
//# sourceMappingURL=gmail.config.js.map