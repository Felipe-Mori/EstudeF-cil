"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaController = void 0;
const common_1 = require("@nestjs/common");
const tarefa_dto_1 = require("../dto/tarefa.dto");
const tarefa_service_1 = require("../service/tarefa.service");
let TarefaController = class TarefaController {
    constructor(tarefaService) {
        this.tarefaService = tarefaService;
    }
    async findAll() {
        return this.tarefaService.findAll();
    }
    async findOne(id) {
        return this.tarefaService.findOne(id);
    }
    async create(_createTarefaDto) {
        const newTarefaData = {};
        return this.tarefaRepository.create(newTarefaData);
    }
    async update(id, updateTarefaDto) {
        return this.tarefaService.update(id, updateTarefaDto);
    }
    async delete(id) {
        return this.tarefaService.delete(id);
    }
};
exports.TarefaController = TarefaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tarefa_dto_1.CreateTarefaDto]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, tarefa_dto_1.UpdateTarefaDto]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "delete", null);
exports.TarefaController = TarefaController = __decorate([
    (0, common_1.Controller)('tarefa'),
    __metadata("design:paramtypes", [tarefa_service_1.TarefaService])
], TarefaController);
//# sourceMappingURL=tarefa.controller.js.map