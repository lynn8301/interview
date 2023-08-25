import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ThirdPartyModule } from './thirdparty/thirdparty.module'


@Module({
  imports: [ThirdPartyModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
