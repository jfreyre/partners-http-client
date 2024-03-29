export * from './leisures.service';
import { LeisuresService } from './leisures.service';
export * from './partnerRelations.service';
import { PartnerRelationsService } from './partnerRelations.service';
export * from './partners.service';
import { PartnersService } from './partners.service';
export * from './suppliers.service';
import { SuppliersService } from './suppliers.service';
export * from './vaapiActuator.service';
import { VaapiActuatorService } from './vaapiActuator.service';
export const APIS = [LeisuresService, PartnerRelationsService, PartnersService, SuppliersService, VaapiActuatorService];
