import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { UserModule } from './user.module';
import { INestApplication } from '@nestjs/common';

describe('User', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UserModule],
    })
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET user`, () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect(200)
  });

  afterAll(async () => {
    await app.close();
  });
});