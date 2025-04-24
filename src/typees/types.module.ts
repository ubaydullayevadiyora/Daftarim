import { Module } from "@nestjs/common";
import { TypesService } from "./types.service";
import { TypesController } from "./types.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Type } from "./model/types.model";

@Module({
  imports: [SequelizeModule.forFeature([Type])],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
