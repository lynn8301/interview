import { Module } from '@nestjs/common';
import { ThirdPartyService } from './thirdparty.service';

@Module({
    providers: [ThirdPartyService],
    exports: [ThirdPartyService]
})
export class ThirdPartyModule {}