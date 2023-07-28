export interface AlertMessage {
  id: number;
  title: string;
  date: string;
  description: string;
  isChat?: boolean;
}

export interface AlertMessages {
  alertMessages: AlertMessage[];
}
