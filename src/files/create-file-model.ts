import { IsNotEmpty } from "class-validator";

export class CreateFileModel {
  
  public id: string

  @IsNotEmpty()
  'File Name': string;
  
  @IsNotEmpty()
  'Document': string;

}
