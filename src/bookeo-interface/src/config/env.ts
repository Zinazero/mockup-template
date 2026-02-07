type Env = {
  SERVER_BASE: string;
};

const env: Env = {
  SERVER_BASE: import.meta.env.VITE_SERVER_BASE || '',
};

for (const [key, value] of Object.entries(env)) {
  if (!value) throw new Error(`Missing environment variable: ${key}`);
}

export default env;
