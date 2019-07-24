export declare class Environment {
  uid: string;
  apiUrl: string;
  authUrl: string;
  version: boolean;
  security: boolean;
  production: boolean;
  hmr: boolean;
  pkg: any;
  buildDate: Date;
  constructor();
  constructor(options: Object);
}
