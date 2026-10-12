import { Injectable } from '@nestjs/common';
import { CreateTaxDto } from './dto/create-tax.dto.js';
import { UpdateTaxDto } from './dto/update-tax.dto.js';

@Injectable()
export class TaxService {
  create(createTaxDto: CreateTaxDto) {
    return 'This action adds a new tax';
  }

  findAll() {
    return `This action returns all tax`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tax`;
  }

  update(id: number, updateTaxDto: UpdateTaxDto) {
    return `This action updates a #${id} tax`;
  }

  remove(id: number) {
    return `This action removes a #${id} tax`;
  }
}
