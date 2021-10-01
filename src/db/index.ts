import faunadb from 'faunadb';

const secretKey = 'fnAEUbSDTLAASGiOxFfAXhCb9EiqaAJ4awV3Kd';

const serverClient = new faunadb.Client({ secret: secretKey });

export default serverClient;
