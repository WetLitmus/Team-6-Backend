const admin = require('firebase-admin');

const serviceAccount = {
  "type": "service_account",
  "project_id": "jschallenge-29ca9",
  "private_key_id": "8dd84859788349410d546e929b4581698180d854",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDgoRdGmwZzb7eK\nPQHPlVAErs4ExGqAX8cua8FZydC++6zBHXm26UuLl04ahX0PcmotQz/hiQuHCcjG\n/kQs8hG9DsLHFlhvlV0nt6zXCwfRAPn8QRj0Sp729FF/Da4zvgyQljvHhFbVzRBX\nAJAUMJ73SVpJ/pJgWRKRI2QnJjSDGPEjg8EsRbQ82hXOiOTL4lSOpOZ+wOcxaspD\nsASwHjEIyDl3WluWBnGJ1nj/oVDcGb804zl2p73EfTZxa6cdBvkvTKeIa7HPsVWT\ngC2v+1yQROEkQOaIvVvuQUAfpe9dGwPUznzJcrWra4lgVMiy7ZYPhrXrBnB+WBoF\n3xNa3xWhAgMBAAECggEAINbMHVFanxOtBHOoyR0uBpE7oyzH2R6nctzj9mlvsAwB\nFHZnrdrrZWvoSi5Luy9h4F4df65WVhaTGKxhcSSufTIkPZDBuwZeCQlsJkABk4eO\nBFfL+yLRnI7ZPzbTydK16YldEe0B+N2yztVROvJkuwgpP/oMkjNTaI6A/Mw0DxoX\nIaCSL0hK+XFzz/lp5MUUd6G4Ork2etJCqnnmmpquyECUyf7VAD/izeB3Kf5xS8dc\nNf4fesQlkoNXMlmTSppCNOMj1tmJa9JmVyK3BC6QhR87KCG/cfNF3sjwf9JSUVfQ\n0FzBAYrULmp3ksGteJARFmyWuPCv0upJ4W2Ai+ZR8QKBgQD+cMv8zNJbcO1glL4L\nmTRDT0uhi5DOCbVBx/O98qjSJiGBojHjiygKghGOM7aTVTsldWDLDKZfcm8633cQ\n0dk37WFXmD1G7YbMKxw2YHHUpez4MZcwqOThSqu3Wha8gyoAwzz17NijOq8Q5AGE\nDmcQ5riKhU2WRup0VYoKLyEqbQKBgQDiAYWQ6jgaTn3eTxvJFMgPJPHeTu5WBXYr\nBoBsIkpXgzMFdtkjf+dFnEvFB5DEkytyP0YBez/bPlaB3vDGmQ0wWn3uAubUH0dP\nMsNMHw1tNEh1ZyLQk0ZhoMHGNNMJLYRCXMuooJgaJ+GjSM2jOTSUpMQXozFdJycx\nd2HxKn1XhQKBgQCggYtM1/BDGsPDz1DrhCPB6j2tlJsuPlWHP5l006THnKI6YpTS\nE7CYoGBushSUcIm1IYyDymERiOC95MX5aEd8zlQ/q5vMKH6GQRO1AbYNDPalwrK7\nUW/A5xfXvA7nsF5IyOClylkG7zgMkaibI3LE6Ka1S04cZHP2GxfPQNfNKQKBgEee\nc9UYY+7yMLDiIMv36e3ip0LrgFuCH5BC3y9lLmnNCb4Ri33UalWE0f3+B8JDYOEz\na9vMUtAHUSKWo3ZLygIoqv9hrARMZSyTyY+1x2tzxgJuTHoMMaF+b+l/k+C0q9Tb\n0y38tjaTrM0xpPi0iBUSoZFcBaifX6wtSLxD2rSBAoGBAJPovlSeQhGem4QOGsfs\nYTg0UDXhoUE4yhj4ib/Ws7rtNs16vyQs/HpdYbC5qLylkKChDrbIttKh+uHfysjd\nkqXFVJXgtuZQixQTPtLUXnqm1A3ocRLEPL7vsfvMfYSiwtsFbcsTPDdmMUo9oyqQ\npdxW0ONJ4vWnlLQKCvsfKV1q\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-4pzop@jschallenge-29ca9.iam.gserviceaccount.com",
  "client_id": "118350991478960030852",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4pzop%40jschallenge-29ca9.iam.gserviceaccount.com"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://jschallenge-29ca9.firebaseio.com'
});

module.exports = admin;