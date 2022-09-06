import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Collection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  logoImageURL: string;

  @Column()
  featuredImageURL: string;

  @Column()
  bannerImageURL: string;

  @Column()
  name: string;
}