export default {
    "DB_URL":"mongodb+srv://cluster0.6ryq3.mongodb.net",
    "DB_NAME":"mockupOpen",
    "DB_OPTIONS":{
        "tlsCertificateKeyFile":"./certificat/X509-cert-mockup_open.pem",
        "tls": true,
        "AuthMechanism": "MONGODB-X509",
        "retryWrites": true,
        "w": "majority",
        "authSource": '$external'
    },
    "DB_COLLECTION": "persons",
    "DB_SCHEMA": {
        "type":"object",
        "properties": {
          "lastName": {"type":"string"},
          "firstName": {"type":"string"},
          "age": {"type":"number"},
          'id': {"type":"string"}
        },
        "required":["lastName", "firstName", "age"],
        "additionalProperties": false
      }
};