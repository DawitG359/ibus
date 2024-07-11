import { Injectable } from '@angular/core';
import { ConfigService } from '../shared/config.service';

@Injectable({
  providedIn: 'root',
})
export class ResourceEndpointService {
  constructor(private configService: ConfigService) {}

  //login endpoints
  get LoginUri(): string {
    return `${this.configService.resourceApiServiceURI}/v1/users/login`;
  }

  //role endpoints
  get GetRoleUri(): string {
    return `${this.configService.resourceApiServiceURI}/v1/roles`;
  }

  //company endpoints
  get GetCompanyUri(): string {
    return `${this.configService.resourceApiServiceURI}/v1/company`;
  }

  //vehicles endpoints
  get GetVehiclesUri(): string {
    return `${this.configService.resourceApiServiceURI}/v1/vehicles`;
  }

  //Trip Type endpoints
  get GetTripTypeUri(): string {
    return `${this.configService.resourceApiServiceURI}/v1/tripType`;
  }

  //Location endpoints
  get GetLocationUri(): string {
    return `${this.configService.resourceApiServiceURI}/v1/locations`;
  }

  //Timing endpoints
  get GetTimingUri(): string {
    return `${this.configService.resourceApiServiceURI}/v1/timing`;
  }

  //Route endpoints
  get GetRouteUri(): string {
    return `${this.configService.resourceApiServiceURI}/v1/route`;
  }

  //Drivers endpoints
  get GetDriverUri(): string {
    return `${this.configService.resourceApiServiceURI}/v1/drivers`;
  }
}
