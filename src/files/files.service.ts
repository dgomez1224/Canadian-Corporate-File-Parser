import { Injectable, NotFoundException } from "@nestjs/common";
import { File } from "./files.model";

@Injectable()

export class FilesService {

    private files: File[] = [];

    insertFile(fileName: string, document : string) {
    const fileId = Math.random().toString();
    const newFile = new File(fileId, fileName, document)
    this.files.push(newFile);
    return fileId;
  }

  getFiles() {
    return [...this.files];
  }
}