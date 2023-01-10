import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Hero, HeroById } from 'src/proto/hero/hero';

@Controller()
export class HeroesController {
  @GrpcMethod('HeroesService')
  findOne(
    data: HeroById,
    metaData: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
