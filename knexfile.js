// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: 'src/databases/db.sqlite3',
      
    },
    migrations: {
      directory:'src/databases/migrations'
    },
    useNullAsDefault: true,
    
  },

};
