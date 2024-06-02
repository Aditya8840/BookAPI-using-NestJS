import { Module } from '@nestjs/common';
import { BookController } from 'src/controllers/books.controller';
import { BookService } from 'src/services/books.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService, PrismaService],
})
export class BookModule {}
