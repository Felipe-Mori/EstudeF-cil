import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserService } from './user/service/user.service';
import { TarefaService } from './tarefa/service/tarefa.service';
import { TurmaService } from './turma/service/turma.service';
import { UserController } from './user/controller/user.controller';
import { TarefaController } from './tarefa/controller/tarefa.controller';
import { TurmaController } from './turma/controller/turma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { Tarefa } from './tarefa/entity/tarefa.entity';
import { Turma } from './turma/entity/turma.entity';



@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([User, Tarefa, Turma])],
  controllers: [AppController, UserController, TarefaController, TurmaController],
  providers: [
    AppService,
    UserService,
    TarefaService,
    TurmaService
  ],
})
export class AppModule {}

