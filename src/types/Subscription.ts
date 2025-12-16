export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface PaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

export interface SubscriptionState {
  currentPlan: SubscriptionPlan | null;
  isSubscribed: boolean;
  paymentProcessing: boolean;
}