import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Turma } from '../entity/turma.entity'; 
import { CreateTurmaDto, UpdateTurmaDto } from '../dto/turma.dto'; 

@Injectable()
export class TurmaService {
    constructor(
        @InjectRepository(Turma)
        private readonly turmaRepository: Repository<Turma>,
    ) { }

    async findAll(): Promise<Turma[]> {
        return await this.turmaRepository.find({ relations: ['filiacoes'] });
    }

    async findOne(id: number): Promise<Turma> {
        const turma = await this.turmaRepository.findOne({
            where: { turma: id }, // Update where condition field name
            relations: ['filiacoes'],
        });

        if (!turma) {
            throw new HttpException(`Turma não encontrada.`, HttpStatus.NOT_FOUND);
        }
        return turma;
    }

    async create(createTurmaDto: CreateTurmaDto): Promise<Turma> {
        try {
            return await this.turmaRepository.save(
                this.turmaRepository.create(createTurmaDto),
            );
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new HttpException('Turma já cadastrada.', HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException(
                    'Erro ao criar o registro. Tente novamente mais tarde.',
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
        }
    }

    async update(id: number, updateTurmaDto: UpdateTurmaDto): Promise<void> {
        const result = await this.turmaRepository.update(id, updateTurmaDto);
        if (result.affected === 0) {
            throw new HttpException(`Turma não encontrada.`, HttpStatus.NOT_FOUND);
        }
    }

    async delete(id: number): Promise<void> {
        const result = await this.turmaRepository.delete(id);
        if (result.affected === 0) {
            throw new HttpException(`Turma não encontrada.`, HttpStatus.NOT_FOUND);
        }
    }
}
