import { registerAs } from "@nestjs/config";

export interface GmailConfigInterface {
  userId: string;
  client_id: string;
  client_secret: string;
  redirect_url: string;
}

export default registerAs('gmail', (): GmailConfigInterface => ({
  userId: process.env.GMAIL_USERID,
  client_id: process.env.GMAIL_CLIENT_ID,
  client_secret: process.env.GMAIL_CLIENT_SECRET,
  redirect_url: process.env.GMAIL_REDIRECT_URL,
}));
