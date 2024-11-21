import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() data: CreateTodoDto) {
    return this.todoService.create(data);
  }

  @Get()
  async findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const todo = await this.todoService.findOne(+id);
    if (!todo) {
      throw new NotFoundException('Todo item not found');
    }
    return todo;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTodoDto) {
    return this.todoService.update(+id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.todoService.delete(+id);
  }
}
