import { gmail_v1 } from 'googleapis';
export declare class GmailService {
    private readonly oauth;
    private readonly gmail;
    private readonly gmailUser;
    private readonly logger;
    constructor(oauth: any, gmail: gmail_v1.Gmail, gmailUser: {
        userId: string;
    });
    check(): Promise<void>;
    private fetchEmails;
}
