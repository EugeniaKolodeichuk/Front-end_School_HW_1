import { API, getTrendingFeed, getUserFeed, getUserInfo } from './app';

jest.mock('axios', () => {
  return {
    create: () => {
      return {
        get: jest.fn(),
      };
    },
  };
});

describe('#getTrendingFeed', () => {
  it('call get method', async () => {
    API.get.mockImplementation(() => Promise.resolve({ data: 'test-data' }));

    const response = await getTrendingFeed('test-url');
    expect(API.get).toBeCalledTimes(1);
    expect(response).toEqual('test-data');
  });
});

describe('#getUserFeed', () => {
  it('call get method', async () => {
    API.get.mockImplementation(() => Promise.resolve({ data: 'test-data' }));

    const response = await getUserFeed('test-url');
    expect(API.get).toBeCalledTimes(1);
    expect(response).toEqual('test-data');
  });
});

describe('#getUserInfo', () => {
  it('call get method', async () => {
    API.get.mockImplementation(() => Promise.resolve({ data: 'test-data' }));

    const response = await getUserInfo('test-url');
    expect(API.get).toBeCalledTimes(1);
    expect(response).toEqual('test-data');
  });
});
