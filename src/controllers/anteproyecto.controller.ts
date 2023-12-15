import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Antepro} from '../models';
import {AnteproRepository} from '../repositories';

export class AnteproyectoController {
  constructor(
    @repository(AnteproRepository)
    public anteproRepository : AnteproRepository,
  ) {}

  @post('/anteproyetos')
  @response(200, {
    description: 'Antepro model instance',
    content: {'application/json': {schema: getModelSchemaRef(Antepro)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Antepro, {
            title: 'NewAntepro',
            exclude: ['id'],
          }),
        },
      },
    })
    antepro: Omit<Antepro, 'id'>,
  ): Promise<Antepro> {
    return this.anteproRepository.create(antepro);
  }

  @get('/antepros/count')
  @response(200, {
    description: 'Antepro model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Antepro) where?: Where<Antepro>,
  ): Promise<Count> {
    return this.anteproRepository.count(where);
  }

  @get('/antepros')
  @response(200, {
    description: 'Array of Antepro model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Antepro, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Antepro) filter?: Filter<Antepro>,
  ): Promise<Antepro[]> {
    return this.anteproRepository.find(filter);
  }

  @patch('/antepros')
  @response(200, {
    description: 'Antepro PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Antepro, {partial: true}),
        },
      },
    })
    antepro: Antepro,
    @param.where(Antepro) where?: Where<Antepro>,
  ): Promise<Count> {
    return this.anteproRepository.updateAll(antepro, where);
  }

  @get('/antepros/{id}')
  @response(200, {
    description: 'Antepro model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Antepro, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Antepro, {exclude: 'where'}) filter?: FilterExcludingWhere<Antepro>
  ): Promise<Antepro> {
    return this.anteproRepository.findById(id, filter);
  }

  @patch('/antepros/{id}')
  @response(204, {
    description: 'Antepro PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Antepro, {partial: true}),
        },
      },
    })
    antepro: Antepro,
  ): Promise<void> {
    await this.anteproRepository.updateById(id, antepro);
  }

  @put('/antepros/{id}')
  @response(204, {
    description: 'Antepro PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() antepro: Antepro,
  ): Promise<void> {
    await this.anteproRepository.replaceById(id, antepro);
  }

  @del('/antepros/{id}')
  @response(204, {
    description: 'Antepro DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.anteproRepository.deleteById(id);
  }
}
