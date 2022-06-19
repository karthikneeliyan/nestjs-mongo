import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team,TeamDocument } from './schemas/teams.schema';

@Injectable()
export class TeamsService {
  constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>){

  }

  public getTeamModal(){
    return this.teamModel;
  }
  async create(createCompanyDto: CreateTeamDto) {
    const createdCat = await this.teamModel.create(createCompanyDto);
    return createdCat;
  }

  async findAll(): Promise<Team[]> {
    const res=await this.groupByCompanyId();
    debugger
    console.log(res)
    return this.groupByCompanyId();
  }

  async groupByCompanyId(): Promise<Team[]> {
    return this.teamModel.aggregate([
      {
        $group: {
          _id: "$companyId",teams:{$addToSet:{teamLeadName:"$teamLeadName",companyId:"$companyId",teamId:"$_id"}}
        },
      },
    ]);
  }

  async findOne(id: string): Promise<Team> {
    return this.teamModel.findOne({ _id: id }).exec();
  }
  async update(id: number, updateCompanyDto: UpdateTeamDto) {
    return `This action updates a #${id} company`;
  }
  async delete(id: string) {
    const deletedCat = await this.teamModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
  async deleteAll() {
    console.log("deleting")
   await this.teamModel
    .remove().exec()
    return "deleted successfully";
  }
}
