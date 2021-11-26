interface IUser {
  nickname?: string;
  feature?: string;
  mobile?: string;
  tenantId?: string;
  tenantName?: string;
  userId?: string;
  isMasterAccount?: boolean;
  isSubAccount?: boolean;
}

export interface AuthModelState {
  user: IUser;
  organization: any;
  power: any;
  options: any;
}
