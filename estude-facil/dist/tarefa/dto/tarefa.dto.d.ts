export declare class CreateTarefaDto {
    nome: string;
    email: string;
    senha: string;
}
declare const UpdateTarefaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTarefaDto>>;
export declare class UpdateTarefaDto extends UpdateTarefaDto_base {
}
export {};
