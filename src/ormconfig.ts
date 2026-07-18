import type { DataSourceOptions } from 'typeorm';

const ormconfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumcloneuser',
  password: '123',
  database: 'mediumclone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrations: [__dirname + '/migrations/**/*{.ts, .js}'],
};

export default ormconfig;
