import { Flavor } from 'src/coffees/entities/flavor.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity() // sql table === 'coffee"
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable() // 👈 Join the 2 tables - only the OWNER-side does this
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, {
    cascade: true, // ['insert]
  })
  flavors: Flavor[];
}
