import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './address/model/adress.entity';
import { ContactModule } from './contact/contact.module';
import { Contact } from './contact/model/contact.entity';
import { ItemSimple } from './item-simple/model/item-simple.entity';
import { Order } from './order/model/order.entity';

@Module({
  imports: [
    ContactModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'burgersnack',
      entities: [ItemSimple, Contact, Address, Order],
      // TODO This need to be deleted in product or you can lose all your data
    })
  ],
})
export class AppModule {}
