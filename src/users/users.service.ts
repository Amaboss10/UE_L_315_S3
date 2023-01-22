import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository , ObjectID} from 'typeorm';
//import { ObjectID } from 'mongodb';
import { Users, UsersRepository } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>
) { }

    createUser(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

    findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: ObjectID): Promise<Users> {
    return await this.usersRepository.findOne(id);  
   }

  async update(id: ObjectID, user: Users): Promise<Users> {
     await this.usersRepository.update(id, user);
     return await this.usersRepository.findOne(id);
  }

  async remove(id: ObjectID ): Promise<Users> {
    const user = await this.usersRepository.findOne(id);
    await this.usersRepository.delete(id);
    return user;
  }

}

