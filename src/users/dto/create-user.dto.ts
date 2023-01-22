import { ObjectID } from 'mongodb';
export class CreateUserDto {
    id: ObjectID;
    firstname: string;
    lastname: string;
    createdAt: Date;
    updatedAt: Date;
}
