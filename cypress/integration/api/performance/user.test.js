import http from 'k6/http';
import { group, sleep } from 'k6';
import Login from '../../../support/api/performance/login.request';
import data from '../../../fixtures/usuarios.json'
import User from '../../../support/api/performance/user.request';
import Product from '../../../support/api/performance/product.request';
import Client from '../../../support/api/performance/client.request';

export const options = {
  stages: [
    {duration: '2m', vus: 20, target: 6}
  ],
  thresholds: {
    http_req_duration: ['p(99) < 1000']
  }

}

export default function () {

  let login = new Login()
  let user = new User()
  let product = new Product();
  let client = new Client();

  group('login and get token', () => {
    login.access(data.user, data.pass)
  })

  group('list users', () => {
    user.list(login.getToken())
  })

  group('list products', () => {
    product.list(login.getToken())
  })

  group('list products', () => {
    client.list(login.getToken())
  })
}