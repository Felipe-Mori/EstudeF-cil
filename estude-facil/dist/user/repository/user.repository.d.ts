import { Repository, DataSource } from 'typeorm';
import { User } from '../entity/user.entity';
export declare class UserRepository extends Repository<User> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    findByEmail(email: string): Promise<User | undefined>;
}
