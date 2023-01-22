import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: 'mongodb+srv://admin:MongoDB@cluster0.lptyb.mongodb.net/nestjsPassport?retryWrites=true&w=majority',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  writeConcern: {
    w: "majority",
    j: true,
    wtimeout: 1000
}
};