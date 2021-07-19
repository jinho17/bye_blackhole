import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// sayi
import { AdminModule } from '../admin/admin.module';
import { UsersEntity } from '../users/entities/users.entity';
import { MatchHistory } from '../match_history/entities/match-history.entity';
import { ProfileModule } from '../profile/profile.module';

// jinkim
import { ft_user } from '../Entity/User.entity';
import { chat_room } from '../Entity/ChatRoom.entity';
import { game_room } from '../Entity/GameRoom.entity';
import { LobbyModule } from '../lobby/lobby.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db_postgres',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'transcendence',
      entities: [UsersEntity, MatchHistory, ft_user, chat_room, game_room],
      synchronize: true,
    }),
    LobbyModule,
    AdminModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppGateway],
})
export class AppModule {}
