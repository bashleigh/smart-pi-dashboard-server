import { Inject, Injectable } from "@nestjs/common";
import { google } from "googleapis";
import config, { GmailConfigInterface } from "./config";

@Injectable()
export class GmailProvider {
  private oauth;

  constructor(@Inject(config.KEY) private readonly config: GmailConfigInterface) {}

  private  createOauth(): any {
    return new google.auth.OAuth2(this.config.client_id, this.config.client_secret, this.config.redirect_url);
  }
}
