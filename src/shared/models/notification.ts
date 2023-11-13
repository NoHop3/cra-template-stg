export interface TNotification {
  id: string;
  title: string;
  priority: Priority;
  description: string;
  date: Date;
  read: boolean;
}

export enum Priority {
  LOW,
  HIGH,
}
