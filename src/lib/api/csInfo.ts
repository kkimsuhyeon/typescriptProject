import axios, { AxiosResponse } from 'axios';

export type FiatWorkResponse = {
  deposit_wait: string;
  withdraw_wait: string;
};

export type CoinWorkResponse = {
  remittance_wait: string;
  remittance_fail: string;
  withdraw_wait: string;
};

export type AuthWorkResponse = {
  email: string;
  kyc: string;
  address: string;
};

export type QnaWorkResponse = {
  qna: string;
};

export const getFiatWork = async () => {
  const response = await axios.get<FiatWorkResponse>('FiatData.json');

  return response;
};

export const getCoinWork = async () => {
  const response = await axios.get<CoinWorkResponse>('CoinData.json');

  return response;
};

export const getAuthWork = async () => {
  const response = await axios.get<AuthWorkResponse>('AuthData.json');

  return response;
};

export const getQnaWork = async () => {
  const response = await axios.get<QnaWorkResponse>('QnaData.json');

  return response;
};
