import { Tarefa } from "src/tarefa/entity/tarefa.entity";
import { User } from "src/user/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("turma")
export class Turma {
    @PrimaryGeneratedColumn()
    turma:number

    @Column({length: 100})
    nome:string

    @Column()
    ano:number

    @Column()
    professor:number

    @ManyToOne(() => User, user => user.turma) 
    user: User;  

    @ManyToOne(() => Tarefa, tarefa => tarefa.tarefa)
    tarefa: Tarefa[]

}
