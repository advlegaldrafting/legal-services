export type ServiceCategory = 
  | 'all'
  | 'property_deeds'
  | 'power_of_attorney'
  | 'estate_succession'
  | 'banking_finance'
  | 'verification_disputes'
  | 'registration_documentation';

export interface LegalService {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  keyFeatures: string[];
  documentsNeeded: string[];
  timeline: string;
  popular?: boolean;
  highlightBadge?: string;
}

export interface AreaInfo {
  name: string;
  subRegistrarOffice: string;
  distanceFromOffice: string;
  popularSocieties: string[];
  description: string;
}

export interface ClientSegment {
  title: string;
  badge: string;
  description: string;
  examples: string[];
  servicesOffered: string[];
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  locality: string;
  clientType: 'Individual' | 'Builder' | 'Bank' | 'Corporate';
  urgency: 'Normal' | 'Urgent' | 'Immediate Registration Slot';
  message: string;
}
