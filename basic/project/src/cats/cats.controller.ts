import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Header,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  // ab*cd 星号被用作通配符
  @Get('ab*cd')
  findAll(@Req() request) {
    return this.catsService.findAll();
    // return 'this actions return all cats!';
  }
  @Get(':id')
  findId(@Param('id') id) {
    return `this actions return ${id} cats!`;
  }
  @Get('async')
  async findAllAsync(): Promise<any> {
    return `this async action all cats!`;
  }
  @Post()
  //@Header('Cache-Control', 'none')
  @HttpCode(204) // post 201
  create() {
    return 'this action add new cat!';
  }
  // 请求负载
  @Post('new')
  async createCat(@Body() createCat: Cat) {
    this.catsService.create(createCat);
    // return `this actions bodyparams new cat!`;
  }
  @Post('error')
  async createErr(@Body() createCat: Cat) {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // throw new HttpException({
    //   status: HttpStatus.FORBIDDEN,
    //   error: 'This is a custom message',
    // }, 403);
  }
}
