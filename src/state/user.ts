export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adress: {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
  };
  description: string;
}
