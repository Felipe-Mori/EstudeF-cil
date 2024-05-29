import { DeepPartial, Repository } from 'typeorm';
import { Tarefa } from '../entity/tarefa.entity';
import { UpdateTarefaDto } from '../dto/tarefa.dto';
export declare class TarefaService {
    private readonly tarefaRepository;
    constructor(tarefaRepository: Repository<Tarefa>);
    findAll(): Promise<Tarefa[]>;
    findOne(id: number): Promise<Tarefa>;
    create(createTarefaDto: DeepPartial<Tarefa>): Promise<Tarefa>;
    update(id: number, updateTarefaDto: UpdateTarefaDto): Promise<void>;
    delete(id: number): Promise<void>;
}
