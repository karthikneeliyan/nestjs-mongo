import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import {CompanySchema,Company, CompanyDocument} from './schemas/companies.schema';


import { Model } from 'mongoose';
@Injectable()
export class CompaniesService {

  constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>){

  }
  async create(createCompanyDto: CreateCompanyDto) {
    const createdCompany = await this.companyModel.create(createCompanyDto);
    return createdCompany;
  }



  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  async findOne(id: string): Promise<Company> {
    return this.companyModel.findOne({ _id: id }).exec();
  }
  async findOneByName(name: string): Promise<Company> {
    return this.companyModel.findOne({ name: name }).exec();
  }
  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.companyModel.findByIdAndUpdate(id,updateCompanyDto,{new:true}).exec();
  }
  async delete(id: string) {
    const deletedCompany = await this.companyModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCompany;
  }
  async removeall() {
    await this.companyModel
     .remove()
   return "all deleted successfully"
  }

 
}
