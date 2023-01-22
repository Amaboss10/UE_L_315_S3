import { ObjectID } from 'mongodb';
import { Users } from './entities/user.entity';
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createuser')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('user/:id')
  async findOne(@Param('id') id: string) : Promise<Users>  {
        return await this.usersService.findOne(new ObjectID(id));
  }

  @Put('updateuser/:id')
  async update(@Param('id') id: string, @Body() user: Users) : Promise<Users> {
    return this.usersService.update(new ObjectID(id), user);
  }

  @Delete('deleteuser/:id')
  async remove(@Param('id') id: string): Promise<Users> {
    return this.usersService.remove(new ObjectID(id));
  }
}
