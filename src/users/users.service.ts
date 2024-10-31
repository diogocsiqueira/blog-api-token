
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){ }

    async findOne(username: string): Promise<User | undefined> {
        return this.userRepository.findOneBy({email: username});
      }


}

