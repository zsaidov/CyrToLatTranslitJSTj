type CyrToLatTranslit = (config?: { preset: "tj" | "ru" }) => {
  transform(input: string, spaceReplacement?: string): string;
  reverse(input: string, spaceReplacement?: string): string;
}

declare const cyrToLatTranslit: CyrToLatTranslit;

export default cyrToLatTranslit
