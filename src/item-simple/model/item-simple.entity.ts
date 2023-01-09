import { Order } from 'src/order/model/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ItemSimple {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    value: number;

    @Column()
    quantify: number;

    @Column()
    observation: number;

    @ManyToOne(() => Order, (order) => order.items)
    order: Order;



}