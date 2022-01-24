import { Moment } from 'moment';

export interface TabPanelProps {
  index: number;
  value: number;
}

export type faqSubGroupsTypes =
  | 'basics'
  | 'services'
  | 'payments'
  | 'changes'
  | 'info';

export type ServiceType = {
  id: number;
  name: string;
  price?: Array<number>;
  duration?: string;
  shortDescription: string;
  longDescription: string;
  images: Array<string>;
};

export type OrderDetailsType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  zipCode: string;
  carYear: string;
  carMake: string;
  carModel: string;
  carColor?: string;
  vin?: string;
  transmission?: string;
  pickupDate: Moment;
  dropoffDate: Moment;
  customerComments?: string;
};

export type ServiceDatesType = {
  pickUpDate: Date;
  returnDate: Date;
};

export type StateType = {
  cartItems: ServiceType[];
  shippingAddress: OrderDetailsType;
};

export type ActionType = {
  type: string;
  payload: any;
};

export type aboutDetailsProps = {
  title: string;
  description: string;
  image: string;
};

export type AboutCardProps = {
  info: aboutDetailsProps;
};

export interface BgImageProps {
  alignItems?: string;
  imgalt: string;
  imgsrc: string;
  height?: string;
  justifyContent?: string;
  width?: string;
}

export interface BgImageContainerProps {
  alignItems: string;
  justifyContent: string;
  height: string;
  width: string;
}

export interface ServiceObject {
  serviceObject: ServiceType;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  serviceDetails: ServiceType;
}

export interface ServicesDataType {
  category: string;
  services: Array<ServiceType>;
}
