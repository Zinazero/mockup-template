import fs from 'node:fs';
import path from 'node:path';

export const getHeroSrc = (): string => {
  const heroDir = path.join(process.cwd(), 'public');
  const files = fs.readdirSync(heroDir);

  const file = files.find((f) => f.startsWith('hero'));
  if (!file) throw new Error('No hero file found in /public/hero');

  return `/${file}`;
};
