import axios from 'axios';
import { testPutStatus } from '../../test/test-util.spec';

const host = 'http://localhost:8080';

const ERROR = `nickname: anony is not exist`;

let sayi = {
  intra_id: 'sayi',
  nickname: 'sayinick',
  auth_token: 'sayi token',
  icon: 'sayi is sayi',
};

let taekim = {
  intra_id: 'taekim',
  nickname: 'taekimnick',
  auth_token: 'taekim token',
  icon: 'taekim is taekim',
};

let jinkim = {
  intra_id: 'jinkim',
  nickname: 'jinkimnick',
  auth_token: 'jinkim token',
  icon: 'jinkim is jinkim',
};

let match = [
  {
    p1_id: 'sayi',
    p2_id: 'taekim',
    winner: 'sayi',
  },
  {
    p1_id: 'sayi',
    p2_id: 'taekim',
    winner: 'sayi',
  },
  {
    p1_id: 'sayi',
    p2_id: 'taekim',
    winner: 'sayi',
  },
  {
    p1_id: 'sayi',
    p2_id: 'taekim',
    winner: 'taekim',
  },
  {
    p1_id: 'sayi',
    p2_id: 'taekim',
    winner: 'taekim',
  },
  {
    p1_id: 'sayi',
    p2_id: 'taekim',
    winner: 'taekim',
  },
  {
    p1_id: 'jinkim',
    p2_id: 'taekim',
    winner: 'jinkim',
  },
];

const initDB = async () => {
  await axios.delete(`${host}/match-history`); // clear match-history table
  await axios.delete(`${host}/admin/clear`); // clear user table
  await axios.post(`${host}/admin`, sayi);
  await axios.post(`${host}/admin`, taekim);
  await axios.post(`${host}/admin`, jinkim);
  for (let index = 0; index < match.length; index++) {
    const v = match[index];
    await axios.post(`${host}/match-history`, v);
  }
};
const testAddFriend = async (
  okBody: object,
  failBody: object,
  error: string,
) => {
  const url = `${host}/profile/friend`;
  await testPutStatus(url, okBody, 200);
  const fail = await testPutStatus(url, failBody, 400);
  expect(fail).toBe(error);
};

describe('profile add friend 테스트', () => {
  beforeEach(async () => await initDB());

  const okBody = { myID: sayi.nickname, otherID: taekim.nickname };
  it('myID nickname 존재 확인', async () =>
    await testAddFriend(okBody, { ...okBody, myID: 'anony' }, ERROR));

  it('otherID nickname 존재 확인', async () =>
    await testAddFriend(okBody, { ...okBody, otherID: 'anony' }, ERROR));
});

const testAddBlock = async (
  okBody: object,
  failBody: object,
  error: string,
) => {
  const url = `${host}/profile/block`;
  await testPutStatus(url, okBody, 200);
  const fail = await testPutStatus(url, failBody, 400);
  expect(fail).toBe(error);
};

describe('profile add block 테스트', () => {
  beforeEach(async () => await initDB());

  const okBody = { myID: sayi.nickname, otherID: taekim.nickname };
  it('myID nickname 존재 확인', async () =>
    await testAddBlock(okBody, { ...okBody, myID: 'anony' }, ERROR));

  it('otherID nickname 존재 확인', async () =>
    await testAddBlock(okBody, { ...okBody, otherID: 'anony' }, ERROR));
});

const testGetProfileStatus = async (
  url: string,
  para: object,
  expectStatus: number,
) => {
  // {
  //   const { data } = v;
  //   console.log(data);
  //   return v;
  // }
  const result = await axios
    .get(url, para)
    .then((v) => v)
    .catch((reason) => reason.response);
  expect(result.status).toBe(expectStatus);
  if (result.data) return result.data.error;
  return 'OK';
};

const testGetProfile = async (
  okParam: object,
  failParam: object,
  error: string,
) => {
  const url = `${host}/profile`;
  await testGetProfileStatus(url, okParam, 200);
  const fail = await testGetProfileStatus(url, failParam, 400);
  expect(fail).toBe(error);
};

describe('profile add block 테스트(taekim의 전적 검색)', () => {
  beforeEach(async () => await initDB());

  const okParam = { params: { myID: sayi.nickname, otherID: taekim.nickname } };
  let failParam = { params: { myID: 'anony', otherID: taekim.nickname } };
  it('myID nickname 존재 확인', async () =>
    await testGetProfile(okParam, failParam, ERROR));

  failParam.params = { myID: sayi.nickname, otherID: 'anony' };
  it('otherID nickname 존재 확인', async () =>
    await testGetProfile(okParam, failParam, ERROR));
});
