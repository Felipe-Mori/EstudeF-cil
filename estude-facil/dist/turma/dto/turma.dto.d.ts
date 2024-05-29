export declare class CreateTurmaDto {
    nome: string;
    email: string;
    senha: string;
}
declare const UpdateTurmaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTurmaDto>>;
export declare class UpdateTurmaDto extends UpdateTurmaDto_base {
}
export {};
