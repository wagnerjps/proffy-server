import path from 'path'

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/database.sqlite'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true,
    },
    production: {
        client: 'sqlite3',
        connection: {
            filename: './dist/database/database.sqlite'
        },
        migrations: {
            directory: './dist/database/migrations'
        },
        useNullAsDefault: true,
    }
};