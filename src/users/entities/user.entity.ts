import { Entity, Column,ObjectIdColumn, EntityRepository, Repository } from 'typeorm';
import { ObjectID } from 'mongodb'
@Entity()
export class Users {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
}

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {}