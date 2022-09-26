import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { AddBookArgs } from './args/addBoook.args';
import { UpdateBookArgs } from './args/updateBook.args';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book], { name: 'books' })
  getAllBooks() {
    return this.bookService.findAllBooks();
  }
  @Query(() => Book, { name: 'bookById' })
  getBookById(@Args({ name: 'bookId', type: () => Int }) id: number) {
    return this.bookService.findBookById(id);
  }
  @Mutation(() => String, { name: 'deleteBook' })
  deleteBookById(@Args({ name: 'bookId', type: () => Int }) id: number) {
    return this.bookService.deleteBookById(id);
  }
  @Mutation(() => String, { name: 'addBook' })
  addBook(@Args('addBookArgs') addBookArgs: AddBookArgs) {
    return this.bookService.addBook(addBookArgs);
  }
  @Mutation(() => String, { name: 'updateBook' })
  updateBook(@Args('updateBookArgs') updateBookArgs: UpdateBookArgs) {
    return this.bookService.updateBook(updateBookArgs);
  }
}
