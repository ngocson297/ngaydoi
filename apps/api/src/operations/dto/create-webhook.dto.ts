import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsOptional, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export class CreateWebhookDto {
  @IsString()
  @MinLength(2)
  @MaxLength(80)
  name!: string;

  @IsUrl({ protocols: ["http", "https"], require_protocol: true, require_tld: false })
  @MaxLength(500)
  url!: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(30)
  @IsString({ each: true })
  events!: string[];

  @IsOptional()
  @IsString()
  @MinLength(16)
  @MaxLength(200)
  secret?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
