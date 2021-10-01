import faunadb from 'faunadb';

const secretKey = 'fnAEUbPQpnAARkIDkIzk0wkuquG79V4aZ_2z34yH';

const serverClient = new faunadb.Client({ secret: secretKey });

export default serverClient;
