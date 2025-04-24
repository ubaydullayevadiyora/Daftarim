import { Module } from "@nestjs/common";
import { AdminsService } from "./admins.service";
import { AdminsController } from "./admins.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Admin } from "./model/admin.model";

@Module({
  imports: [SequelizeModule.forFeature([Admin])],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminsModule {}
