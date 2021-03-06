import { Injectable } from '@nestjs/common';
import { Cat } from './cat';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
    return this.cats;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
