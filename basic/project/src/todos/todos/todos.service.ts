import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Todo} from '../interface/todo';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository:Repository<Todo>
  ){}
  
  async create(todo:Todo):Promise<Todo>{
    return await this.todoRepository.save(todo)
  }

  async findAll():Promise<Todo[]>{
    return await this.todoRepository.find()
  }
}