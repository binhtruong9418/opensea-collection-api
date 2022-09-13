import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Category } from '../enum/category.enum';

@Entity()
export class Collection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  logoImage: string;

  @Column({ nullable: true })
  featuredImage: string;

  @Column({ nullable: true })
  bannerImage: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ nullable: true })
  collectionURL: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ default: 'wrapper Binance', nullable: true })
  blockchain: string;

  @Column({ type: 'enum', enum: Category, nullable: true })
  category: Category;

  @Column({ type: 'varchar', nullable: true })
  social: string;

  @Column({ type: 'varchar' })
  paymentTokens: string;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: false,
  })
  updated_at: Date;
}