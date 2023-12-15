import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Antepro, AnteproRelations} from '../models';

export class AnteproRepository extends DefaultCrudRepository<
  Antepro,
  typeof Antepro.prototype.id,
  AnteproRelations
> {
  constructor(
    @inject('datasources.Mongo') dataSource: MongoDataSource,
  ) {
    super(Antepro, dataSource);
  }
}
