import { Controller, Get, Query, HttpCode} from '@nestjs/common'
import { UserService } from './user.service'
import { FindAllUserDto } from './dto/create-user.dto'
import { ApiOkResponse, ApiResponse } from '@nestjs/swagger'
import { FindAllUserResponse } from './response/user.response'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    @HttpCode(200)
    @ApiOkResponse({type: FindAllUserResponse})
    @ApiResponse({ status: 200, description: 'Return a object of users'})
    async findAllUser(
        @Query() query: FindAllUserDto
    ): Promise<Object> { 
        return await this.userService.findAllUser(query)
    }
}