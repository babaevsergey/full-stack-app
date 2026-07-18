import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TagEntity } from '@app/tag/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}

  findAll(): Promise<TagEntity[]> {
    return this.tagRepository.find();
  }

  count(): Promise<number> {
    return this.tagRepository.count();
  }
}
