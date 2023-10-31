import axios from 'axios';

axios.defaults.baseURL = 'https://6540fcf645bedb25bfc30173.mockapi.io';

export async function getData() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addData(data) {
  const response = await axios.post('/contacts', data);
  return response.data;
}

export async function deleteData(id) {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
}
