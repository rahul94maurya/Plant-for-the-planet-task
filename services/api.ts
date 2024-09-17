import { API_BASE_URL } from '@/lib/data/constants';

export const authenticateUser = async function (requestBody: any) {
  const loginData = { username: 'emilys', password: 'emilyspass' };
  const res = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginData),
  });
  const data = await res.json();
  return data;
};
