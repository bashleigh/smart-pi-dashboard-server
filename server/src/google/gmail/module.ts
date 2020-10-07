import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import config from './config';
import { GmailProvider } from "./gmail.provider";

@Module({
  imports: [ConfigModule.forFeature(config)],
  providers: [GmailProvider],
})
export class GmailModule {}
