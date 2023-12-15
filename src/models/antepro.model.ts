import {Entity, model, property} from '@loopback/repository';

@model()
export class Antepro extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  detalle?: string;

  @property({
    type: 'string',
  })
  items?: string;

  @property({
    type: 'string',
  })
  estado?: string;


  constructor(data?: Partial<Antepro>) {
    super(data);
  }
}

export interface AnteproRelations {
  // describe navigational properties here
}

export type AnteproWithRelations = Antepro & AnteproRelations;
