export default {
    "DB_CONF":{
        "host": 'srv-db-postgre.postgres.database.azure.com',
        "user": 'user1',
        "password": 'ornikar',
        "max": 5,
        "database": 'persons',
        "idleTimeoutMillis": 30000,
        "connectionTimeoutMillis": 2000,
        "port": 5432,
        "ssl": false
    },
    "USERS_SCHEMA":{
        "type":"object",
        "properties": {
          "lastname": {"type":"string"},
          "firstname": {"type":"string"},
          "age": {"type":"number"},
          'id': {"type":"string"}
        },
        "required":["lastname", "firstname", "age"],
        "additionalProperties": false  
    }
}