
/**
 * @class Endpoint
 * @description Endpoint
 */
export declare class Endpoint {
  port: string;
  secure: boolean;
  suffix: string;
  type: any;
  url: string;
  requireToken: boolean;
  headers(): { key: string; value: string }[];
  compose(): string;
  hasHeaders(): boolean;
  hasPort(): boolean;
  hasSuffix(): boolean;
  hasType(): boolean;
  hasUrl(): boolean;
  isSecure(): boolean;
  constructor();
  constructor(options: Object);
}

