import { CreateTarefaDto, UpdateTarefaDto } from '../dto/tarefa.dto';
import { TarefaService } from '../service/tarefa.service';
import { Tarefa } from '../entity/tarefa.entity';
export declare class TarefaController {
    private readonly tarefaService;
    tarefaRepository: any;
    constructor(tarefaService: TarefaService);
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    create(_createTarefaDto: CreateTarefaDto): Promise<Tarefa>;
    update(id: number, updateTarefaDto: UpdateTarefaDto): Promise<any>;
    delete(id: number): Promise<void>;
}
