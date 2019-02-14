import { Controller, Get, Req } from '@nestjs/common';
import { Result } from './interface/result';
import { TodosService } from './todos/todos.service';
@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}
  // @Get()
  // async findAll(@Req() req:Request):Promise<Result>{
  //   const data = await this.todoService.findAll();
  //   return {code:200,message:'success',data}
  // }
}
