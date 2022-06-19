import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CreateTeamDto } from 'src/teams/dto/create-team.dto';
import { TeamsService } from 'src/teams/teams.service';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {

  constructor(private readonly companiesService: CompaniesService, private teamsService: TeamsService) { }

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(createCompanyDto);
  }



  @Get()
  findAll() {
    return this.companiesService.findAll();
  }
  @Get('/search')
  findByName(@Query('name') name: string) {
    return this.companiesService.findOneByName(name);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(id);
  }



  @Post("/:id/teams")
  createTeamForCompany(@Body() createteamDto: CreateTeamDto) {
    debugger
    return this.teamsService.create(createteamDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companiesService.update(id, updateCompanyDto);
  }
  @Delete("/deleteall")
  removeAll() {
    console.log("test")
    return this.companiesService.removeall();
  }
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.companiesService.delete(id);
  }

}
