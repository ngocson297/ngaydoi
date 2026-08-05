import { IsBoolean } from "class-validator";

export class ToggleWebhookDto {
  @IsBoolean()
  active!: boolean;
}
