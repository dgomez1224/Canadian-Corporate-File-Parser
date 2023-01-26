import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from './files/files.module';
import { ProductsModule } from './products/product.module';

@Module({
  imports: [FilesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
