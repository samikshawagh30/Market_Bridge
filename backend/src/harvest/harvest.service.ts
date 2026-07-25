// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class HarvestService {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Harvest } from './entities/harvest.entity';
import { CreateHarvestDto } from './dto/create-harvest.dto';
import { UpdateHarvestDto } from './dto/update-harvest.dto';

@Injectable()
export class HarvestService {
  constructor(
    @InjectRepository(Harvest)
    private readonly harvestRepository: Repository<Harvest>,
  ) {}

  async create(createHarvestDto: CreateHarvestDto) {
    const harvest = this.harvestRepository.create(createHarvestDto);

    await this.harvestRepository.save(harvest);

    return {
      message: 'Harvest Uploaded Successfully',
      harvest,
    };
  }
async findAll() {
  const harvests = await this.harvestRepository.find();

  return {
    message: 'Harvests fetched successfully',
    data: harvests,
  };
}

async findOne(id: number) {

  const harvest = await this.harvestRepository.findOne({
    where: {
      id,
    },
  });

  return {
    message: 'Harvest fetched successfully',
    data: harvest,
  };
}
async update(id: number, updateHarvestDto: UpdateHarvestDto) {

  const harvest = await this.harvestRepository.findOne({
    where: {
      id,
    },
  });

  if (!harvest) {
    return {
      message: 'Harvest not found',
    };
  }

  Object.assign(harvest, updateHarvestDto);

  await this.harvestRepository.save(harvest);

  return {
    message: 'Harvest updated successfully',
    data: harvest,
  };
}

async remove(id: number) {

  const harvest = await this.harvestRepository.findOne({
    where: {
      id,
    },
  });

  if (!harvest) {
    return {
      message: 'Harvest not found',
    };
  }

  await this.harvestRepository.remove(harvest);

  return {
    message: 'Harvest deleted successfully',
  };
}

}