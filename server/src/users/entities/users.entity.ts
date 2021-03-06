import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Users')
export class UsersEntity {
  @PrimaryColumn()
  intra_id: string;

  @Column()
  nickname: string;

  @Column({ nullable: true })
  state: string;

  @Column({ default: 'gamer_keyboard' })
  icon: string;

  @Column({ default: 1000 })
  ladder_level: number;

  @Column('simple-array', { nullable: true, default: '' })
  friend_list: string[];

  @Column('simple-array', { nullable: true, default: '' })
  block_list: string[];

  @Column('simple-array', { nullable: true, default: '' })
  chat_room: string[];
}
