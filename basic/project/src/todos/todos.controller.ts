import { Controller, Get, Req,Post,Body } from '@nestjs/common';
import { TodosService } from './todos/todos.service';
import {Todo} from './interface/todo'

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}
  // @Get()
  // async findAll(@Req() req:Request):Promise<Result>{
  //   const data = await this.todoService.findAll();
  //   return {code:200,message:'success',data}
  // }
  @Get()
  async findAll(): Promise<any[]> {
    return [{ name: 'sravan' }, { name: 'test' }];
  }
  @Post('new')
  async new(@Body() todo:Todo):Promise<Todo[]>{
    await this.todoService.create(todo);
    return this.todoService.findAll()
  }
}
