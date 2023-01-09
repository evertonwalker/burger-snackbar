import { Contact } from "src/contact/model/contact.entity";
import { Order } from "src/order/model/order.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    district: string;

    @Column()
    complement: string;

    @ManyToOne(() => Contact, (contact) => contact.address)
    contact: Contact;

    @OneToMany(() => Order, (order) => order.address)
    orders: Order[];

}