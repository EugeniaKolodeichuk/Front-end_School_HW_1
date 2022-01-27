import { getTrendingFeed, getUserFeed, getUserInfo } from './app';
import API from '../api/api';

jest.mock('axios', () => {
  return {
    create: () => {
      return {
        get: jest.fn(),
      };
    },
  };
});

const mockApi = API as jest.Mocked<typeof API>

describe('#getTrendingFeed', () => {
  it('call get method', async () => {
    mockApi.get.mockImplementation(() => Promise.resolve({ data: 'test-data' }));

    const response = await getTrendingFeed(1);
    expect(API.get).toBeCalledTimes(1);
    expect(response).toEqual('test-data');
  });
});

describe('#getUserFeed', () => {
  it('call get method', async () => {
    mockApi.get.mockImplementation(() => Promise.resolve({ data: 'test-data' }));

    const response = await getUserFeed('test-url');
    expect(API.get).toBeCalledTimes(1);
    expect(response).toEqual('test-data');
  });
});

describe('#getUserInfo', () => {
  it('call get method', async () => {
    mockApi.get.mockImplementation(() => Promise.resolve({ data: 'test-data' }));

    const response = await getUserInfo('test-url');
    expect(API.get).toBeCalledTimes(1);
    expect(response).toEqual('test-data');
  });
});
