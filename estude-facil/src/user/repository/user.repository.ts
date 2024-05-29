import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { User } from '../entity/user.entity'; 

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private readonly dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }
    async findByEmail(email: string): Promise<User | undefined> {
        return await this.findOne({ where: { email } });
    }
}
