export default {
  NODE_ENV: process.env.NODE_ENV,
  API_BASE: process.env.API_BASE,
  ENABLE_DEV: process.env.NODE_ENV !== 'production',
  PLACEHOLDER_API_BASE: process.env.PLACEHOLDER_API_BASE || '',
  ADORABLE_API_BASE: process.env.ADORABLE_API_BASE || '',
};