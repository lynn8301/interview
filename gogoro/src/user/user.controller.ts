import { Controller, Get, Query, HttpCode} from '@nestjs/common';
import { UserService } from './user.service';
import { FindAllUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('test')
    test(): string {
        return 'ok'
    }

    @Get()
    @HttpCode(200)
    async findAllUser(
        @Query() query: FindAllUserDto
    ): Promise<any>{ // change retrun datatype
        // return this.userService.findAll()
        return await this.userService.findAllUser(query)
    }
}