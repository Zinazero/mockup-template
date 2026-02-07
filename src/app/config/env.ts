type Env = {
  SERVER_BASE: string;
};

const env: Env = {
  SERVER_BASE: process.env.NEXT_PUBLIC_SERVER_BASE || '',
};

for (const [key, value] of Object.entries(env)) {
  if (!value) throw new Error(`Missing environment variable: ${key}`);
}

export default env;
