import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { getToken } from '../utilities/getToken';

const API_URL = import.meta.env.VITE_API_URL_BACKEND;

async function MeNewsService(token) {
  const response = await fetch(`${API_URL}/entries/meentries`, {
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
}

export default MeNewsService;
