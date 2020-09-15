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
  const response = await axios.get<AxiosResponse<FiatWorkResponse>>('FiatData.json');

  return response;
};

export const getCoinWork = async () => {
  const response = await axios.get<AxiosResponse<CoinWorkResponse>>('CoinData.json');

  return response;
};

export const getAuthWork = async () => {
  const response = await axios.get<AxiosResponse<AuthWorkResponse>>('AuthData.json');

  return response;
};

export const getQnaWork = async () => {
  const response = await axios.get<AxiosResponse<QnaWorkResponse>>('QnaData.json');

  return response;
};
