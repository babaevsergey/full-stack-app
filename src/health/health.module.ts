import { Module } from '@nestjs/common';
import { HealthController } from '@app/health/health.controller';
import { HealthService } from '@app/health/health.service';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
