import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { Contact } from './model/contact.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Contact])],
    providers: [ContactService],
    controllers: [ContactController],
})
export class ContactModule { }