import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('creatures')
@ApiTags ('creatures')
export class CreaturesController {
  constructor(private readonly creaturesService: CreaturesService) {}

  @Post()
  create(@Body() createCreatureDto: CreateCreatureDto) {
    return this.creaturesService.create(createCreatureDto);
  }
  @Get()
  findAll(){
    return this.creaturesService.findAll();
  }
  @Get('notextincts')
  findAllnotExtincts (){
    return this.creaturesService.findAllnotExtincts()
     }
  @Get('extincts')
  findAllExtincts (){
    return this.creaturesService.findAllExtincts();
  }
  @Get (':id')
  findOne(@Param('id') id: string) {
    return this.creaturesService.findOne(+id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateCreatureDto: UpdateCreatureDto,
  ) {
    return this.creaturesService.update(+id, UpdateCreatureDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string){
    return this.creaturesService.remove(+id);
  }

}
