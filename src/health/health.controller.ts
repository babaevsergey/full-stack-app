import { Controller, Get } from '@nestjs/common';
import { HealthService } from '@app/health/health.service';
import { HealthResponse } from '@app/health/health.types';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  getStatus(): HealthResponse {
    return this.healthService.getStatus();
  }
}
