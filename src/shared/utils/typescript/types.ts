export interface NavItem {
  name: string;
  path: string;
}

export interface Notification {
  open: boolean;
  type: 'success' | 'error';
  message: string;
}
