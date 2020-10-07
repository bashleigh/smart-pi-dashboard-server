import { DynamicModule } from "@nestjs/common";
export declare type GoogleGmailOauthCredentials = {
    client_id: string;
    client_secret: string;
    redirectUri: string;
};
export declare const GMAIL_CONFIG_PROVIDER: string;
export declare const GMAIL_PROVIDER: string;
export declare const GMAIL_OAUTH_PROVIDER: string;
export declare class GmailModule {
    static forRoot(): DynamicModule;
    private static createGmailProvider;
    private static createGoogleOauthProvider;
}
