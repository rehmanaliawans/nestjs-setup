import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('app_users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: false })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;
}
