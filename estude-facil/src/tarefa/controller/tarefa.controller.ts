
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateTarefaDto, UpdateTarefaDto } from '../dto/tarefa.dto';
import { TarefaService } from '../service/tarefa.service';
import { DeepPartial } from 'typeorm';
import { Tarefa } from '../entity/tarefa.entity';


@Controller('tarefa')
export class TarefaController {
    tarefaRepository: any;
    constructor(private readonly tarefaService: TarefaService) { }

    @Get()
    async findAll(): Promise<any[]> {
        return this.tarefaService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
        return this.tarefaService.findOne(id);
    }

    @Post()
    async create(@Body() _createTarefaDto: CreateTarefaDto): Promise<Tarefa> {
        const newTarefaData: DeepPartial<Tarefa> = {
        };
        return this.tarefaRepository.create(newTarefaData);
    }
    

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateTarefaDto: UpdateTarefaDto,
    ): Promise<any> {
        return this.tarefaService.update(id, updateTarefaDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.tarefaService.delete(id);
    }
}