import { Injectable } from '@nestjs/common';
import { HealthResponse } from '@app/health/health.types';

@Injectable()
export class HealthService {
  getStatus(): HealthResponse {
    return {
      status: 'ok',
      uptime: process.uptime(),
    };
  }
}
