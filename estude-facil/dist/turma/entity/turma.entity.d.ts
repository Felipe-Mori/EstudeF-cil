import { Tarefa } from "src/tarefa/entity/tarefa.entity";
import { User } from "src/user/entity/user.entity";
export declare class Turma {
    turma: number;
    nome: string;
    ano: number;
    professor: number;
    user: User;
    tarefa: Tarefa[];
}
