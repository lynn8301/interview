import { ApiProperty } from '@nestjs/swagger'

class FindAllUserResponse {
    @ApiProperty({
        example: 1
    })
    page: number;
    @ApiProperty({
        example: 1
    })
    total_page: number;
    @ApiProperty({
        example: [
            {
                "name": "Bernadette Volkman",
                "jobType": "Liaison",
                "id": "3",
                "createdAt": "2023-05-02T04:42:33.223Z",
                "city": "Evieland",
                "zipCode": "56813-2801",
                "address": "989 Kunde Club",
                "gender": "Cis man"
            },
            {
                "name": "Tabitha Watsica",
                "jobType": "Liaison",
                "id": "44",
                "createdAt": "2022-09-30T00:30:05.408Z",
                "city": "Starkcester",
                "zipCode": "88503",
                "address": "4444 Howell Mountain",
                "gender": "F2M"
            }
        ]
    })
    result: object
}

export { FindAllUserResponse }