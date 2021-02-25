import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from 'src/coffees/coffees.controller';
import { CoffeesService } from 'src/coffees/coffees.service';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { OthersController } from 'src/course/others.controller';
import { Event } from 'src/events/entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController, OthersController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
