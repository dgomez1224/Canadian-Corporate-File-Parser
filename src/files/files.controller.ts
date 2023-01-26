import { Controller, Post, Body, Get, Header } from '@nestjs/common';
import { CreateFileModel } from './create-file-model';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  
  @Post()
  create(
    @Body() createFileModel: CreateFileModel,
    @Body('File Name') fileName: string,
    @Body('Document') document: string,
  ) {
    const generatedId = this.filesService.insertFile(fileName, document);
    return { id: generatedId };
  }

  @Get()
  @Header('Content-Type', 'application/json')
  getAllFiles() {
    return this.filesService.getFiles();
  }
}
