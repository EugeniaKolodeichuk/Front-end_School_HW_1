import API from '../api/api';

export async function getTrendingFeed(currentPage :number) {
  const response = await API.get(
    `/trending/feed/?limit=30&page=${currentPage}`,
  );
  return response.data;
}

export async function getUserInfo(uniqueId :string) {
  const response = await API.get(`/user/info/${uniqueId}`);
  return response.data;
}

export async function getUserFeed(uniqueId :string): Promise<any> {
  const response = await API.get(`/user/feed/${uniqueId}`);
  return response.data;
}
