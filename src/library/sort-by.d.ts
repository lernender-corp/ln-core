export declare function ascending(a: string | number, b: string | number): number;
export declare function descending(a: string | number, b: string | number): number;
export declare function nameAscending(a: string, b: string): number;
export declare function nameDescending(a: string, b: string): number;
export declare function idAscending(a: number, b: number): number;
export declare function idDescending(a: number, b: number): number;
export declare function emailAscending(a: string, b: string): number;
export declare function emailDescending(a: string, b: string): number;

declare const _default: {
  ascending: (a: string | number, b: string | number) => number;
  descending: (a: string | number, b: string | number) => number;
  nameAscending: (a: string, b: string) => number;
  nameDescending: (a: string, b: string) => number;
  idAscending: (a: number, b: number) => number;
	idDescending: (a: number, b: number) => number;
	emailAscending: (a: string, b: string) => number;
  emailDescending: (a: string, b: string) => number;
};

export default _default;
