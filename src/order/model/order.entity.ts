import { Address } from 'src/address/model/adress.entity';
import { Contact } from 'src/contact/model/contact.entity';
import { ItemSimple } from 'src/item-simple/model/item-simple.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';

enum OrderStatus {
    ASKED,
    ACCEPTED,
    OUT_OF_DELIVERY
}

enum PaymentType {
    MONEY,
    CARD
}

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    status: OrderStatus;

    @Column()
    valueTotal: number;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    dateToDelivery: Date;

    @OneToMany(() => ItemSimple, (itemSimple) => itemSimple.order)
    items: ItemSimple[]

    @ManyToOne(() => Contact, (contact) => contact.orders)
    contact: Contact

    @ManyToOne(() => Address, (address) => address.orders)
    address: Address;

    @Column('text')
    paymentType: PaymentType;

    @Column()
    moneyChange: number;

    @Column()
    moneyNeedToDeliver: number;

}