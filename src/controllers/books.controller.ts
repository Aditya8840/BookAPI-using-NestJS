import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { Book } from 'src/models/book.model';
import { BookService } from 'src/services/books.service';
import { BookDto } from 'src/dto/book';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  getBook(@Param('id') id: number): Promise<Book> {
    return this.bookService.getBook(id);
  }

  @Post()
  createBook(@Body() data: BookDto): Promise<Book> {
    return this.bookService.createBook(data);
  }

  @Put(':id')
  updateBook(@Param('id') id: number, @Body() data: BookDto): Promise<Book> {
    return this.bookService.updateBook(id, data);
  }
}
