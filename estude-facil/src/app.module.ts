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
import { UserRepository } from './user/repository/user.repository';


@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UserController, TarefaController, TurmaController],
  providers: [
    AppService,
    UserService,
    TarefaService,
    TurmaService,
    UserRepository 
  ],
})
export class AppModule {}

