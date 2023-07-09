import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from 'src/Models/user.schema';
import { UserController } from './controller/user.controller';
import { UserService } from './services/user.service';
import { CommonModule } from '../../common/common.module';
import { ContextService } from 'src/common/services/context.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), CommonModule],
  controllers: [UserController],
  providers: [UserService, ContextService],
  exports: [ContextService]
})
export class UserModule { }
