import { Controller, Get } from '@nestjs/common';
import { Body, Param, Post } from '@nestjs/common/decorators';
import { ContactService } from './contact.service';
import { Contact } from './model/contact.entity';
import { RegisterContactBody } from './model/register-contact-body';

@Controller('contact')
export class ContactController {

    constructor(private contactService: ContactService) { }

    @Get(':number')
    async getContactByNumber(@Param('number') number: string): Promise<Contact> {
        return this.contactService.getContactByNumber(number);
    }

    @Post()
    async registerContact(@Body() obj: RegisterContactBody): Promise<Contact | void>{
        return this.contactService.save(obj);
    }



}