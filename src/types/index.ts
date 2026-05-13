export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
  type: 'inquiry' | 'partnership' | 'business';
}

export interface Contact extends ContactFormData {
  id: string;
  created_at: string;
}

export interface PartnershipFormData {
  companyName: string;
  representativeName: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface Business {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  details: string[];
  revenueModel: string[];
  icon: string;
}

export interface Portfolio {
  id: string;
  title: string;
  description: string;
  category: string;
  results: string[];
  period: string;
  image?: string;
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  logo?: string;
  description?: string;
}
