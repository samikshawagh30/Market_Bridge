import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Harvest {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cropName: string;

  @Column('float')
  quantity: number;

  @Column()
  unit: string;

  @Column('float')
  expectedPrice: number;

  @Column()
  harvestDate: string;

  @Column()
  village: string;

  @Column()
  district: string;

  @Column()
  state: string;

  @Column('decimal', { precision: 10, scale: 7 })
  latitude: number;

  @Column('decimal', { precision: 10, scale: 7 })
  longitude: number;

  @Column({
    default: 'Available',
  })
  status: string;
}