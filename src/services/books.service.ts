import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Book } from '../models/book.model';
import { BookDto } from 'src/dto/book';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}
  async getAllBooks(): Promise<Book[]> {
    try {
      return this.prisma.book.findMany();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getBook(id: number): Promise<Book> {
    try {
      return this.prisma.book.findUnique({ where: { id: Number(id) } });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createBook(data: BookDto): Promise<Book> {
    try {
      return this.prisma.book.create({ data });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateBook(id: number, data: BookDto): Promise<Book> {
    try {
      return this.prisma.book.update({
        where: { id: Number(id) },
        data: {
          title: data.title,
          summary: data.summary,
          publishedDate: data.publishedDate,
        },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
