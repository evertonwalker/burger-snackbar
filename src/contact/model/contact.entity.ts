import { Address } from "src/address/model/adress.entity";
import { Order } from "src/order/model/order.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"

@Entity()
export class Contact {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: string;

    @Column()
    name: string;

    @OneToMany(() => Order, (order) => order.contact)
    orders: Order[];

    @OneToMany(() => Address, (addres) => addres.contact)
    address: Address[];

}