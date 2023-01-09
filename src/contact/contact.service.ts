import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Contact } from "./model/contact.entity";
import { RegisterContactBody } from "./model/register-contact-body";

@Injectable()
export class ContactService {

    constructor(@InjectRepository(Contact) private contactRepository: Repository<Contact>) { }

    async getContactByNumber(number: string): Promise<Contact> {
        const contact = await this.verifyContactByNumber(number);
        if (contact) return contact
        throw new HttpException('Número não castrado, cadastra-se', HttpStatus.NOT_FOUND);
    }

    async save(obj: RegisterContactBody): Promise<Contact | void> {
        const contact = await this.verifyContactByNumber(obj.number);
        if(contact) return contact;
        return await this.contactRepository.save(obj);
    }

    async verifyContactByNumber(number: string): Promise<Contact> {
        const contact = await this.contactRepository.findOneBy({
            number
        });

        return contact;
    }

}