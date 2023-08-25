import { ApiProperty } from '@nestjs/swagger'
class FindAllUserDto {
    @ApiProperty({
        description: 'create from which date',
        required: false
      })
    createdFrom: string;
    @ApiProperty({
        description: 'create to which date',
        required: false
      })
    createdTo: string;
    @ApiProperty({
        description: 'job type',
        required: false
      })
    jobType: string;
    @ApiProperty({
        description: 'page number',
        required: false,
        default: 1
      })
    page: string;
}

export { FindAllUserDto }
