/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BookEntity } from './entity/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddBookArgs } from './args/addBoook.args';
import { UpdateBookArgs } from './args/updateBook.args';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    public readonly bookRepo: Repository<BookEntity>,
  ) {}
  async findAllBooks(): Promise<BookEntity[]> {
    const books = await this.bookRepo.find();
    return books;
  }
  async findBookById(id: number): Promise<BookEntity> {
    const book = await this.bookRepo.findOne({ where: { id: id } });
    return book;
  }
  async deleteBookById(id: number): Promise<string> {
    await this.bookRepo.delete(id);
    return 'deleted book';
  }
  async addBook(addBookArgs: AddBookArgs): Promise<string> {
    // eslint-disable-next-line prefer-const
    let book: BookEntity = new BookEntity();
    book.title = addBookArgs.title;
    book.price = addBookArgs.price;
    await this.bookRepo.save(book);
    return 'Book save successfully';
  }
  async updateBook(updateBookArgs: UpdateBookArgs): Promise<string> {
    // eslint-disable-next-line prefer-const

    let book: BookEntity = await this.bookRepo.findOne({
      where: { id: updateBookArgs.id },
    });
    book.title = updateBookArgs.title;
    book.price = updateBookArgs.price;
    await this.bookRepo.save(book);
    return 'Book update successfully';
  }
}
