"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./database/database.module");
const user_service_1 = require("./user/service/user.service");
const tarefa_service_1 = require("./tarefa/service/tarefa.service");
const turma_service_1 = require("./turma/service/turma.service");
const user_controller_1 = require("./user/controller/user.controller");
const tarefa_controller_1 = require("./tarefa/controller/tarefa.controller");
const turma_controller_1 = require("./turma/controller/turma.controller");
const user_repository_1 = require("./user/repository/user.repository");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [app_controller_1.AppController, user_controller_1.UserController, tarefa_controller_1.TarefaController, turma_controller_1.TurmaController],
        providers: [
            app_service_1.AppService,
            user_service_1.UserService,
            tarefa_service_1.TarefaService,
            turma_service_1.TurmaService,
            user_repository_1.UserRepository
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map