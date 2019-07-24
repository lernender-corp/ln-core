export declare function isEmail(o: string): boolean;
export declare function isInRange(value: number, min?: number, max?: number): boolean;
export declare function isWordCountInRange(value: string, max?: number) : boolean;

declare const _default: {
  hasComparisonOperator: (o: string) => boolean;
  hasInverseOperator: (o: string) => boolean;
  isEmail: (o: string) => boolean;
  isInRange: (value: number, min?: number, max?: number) => boolean;
  isWordCountInRange: (value: string, max?: number) => boolean;
};

export default _default;
