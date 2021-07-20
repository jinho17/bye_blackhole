import { Module } from '@nestjs/common';
import { LobbyService } from './lobby.service';
import { LobbyController } from './lobby.controller';
import { chat_room } from '../Entity/ChatRoom.entity';
import { game_room } from '../Entity/GameRoom.entity';
import { ft_user } from '../Entity/User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

// sayi
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/users/users.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([chat_room, game_room, ft_user, UsersRepository]),
  ],
  controllers: [LobbyController],
  providers: [LobbyService, UsersService],
})
export class LobbyModule {}
