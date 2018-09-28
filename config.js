const config = {
    PORT: process.env.PORT || 3000,
    URI_DB:  process.env.DATABASE_URL || 'postgres://admin:admin@localhost:5432/admin',
    SECRET_TOKEN: 'miclavedetokens'
};
export default config;