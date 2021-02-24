import { Module } from '@nestjs/common';
import { CoffeesController } from 'src/coffees/coffees.controller';
import { CoffeesService } from 'src/coffees/coffees.service';
import { OthersController } from 'src/course/others.controller';

@Module({
  controllers: [CoffeesController, OthersController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
