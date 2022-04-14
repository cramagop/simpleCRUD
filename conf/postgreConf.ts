export default {
    "DB_CONF":{
        "host": 'srv-db-postgre.postgres.database.azure.com',
        "user": 'user1',
        "password": 'ornikar',
        "max": 5,
        "database": 'persons',
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
        "required":["lastName", "firstName", "age"],
        "additionalProperties": false  
    }
}