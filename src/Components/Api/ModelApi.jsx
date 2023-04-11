import axios from "axios";

const ENV = import.meta.env.VITE_API
// console.limport { getApi } from './ApiMock';
// console.log(ENV) // result : http://localhost:3000

export class Request{
  constructor(URL){
    this.URL = URL
  }
}

export class Api {
  constructor (userId) {
    this.userId = userId;
  }

  async getApi(userId) {
    const API_URL = `${ENV}/user/${userId}`; 
    try {
      const { data } = await axios.get(API_URL);
      // console.log(data) // result : object de data
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getApiActivity(userId) {
    const API_URL = `${ENV}/user/${userId}/activity`;
    try {
      const { data } = await axios.get(API_URL);
      // console.log(data) // result : object de data
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getApiPerformance(userId) {
    const API_URL = `${ENV}/user/${userId}/performance`;
    try {
      const { data } = await axios.get(API_URL);
      // console.log(data) // result : object de data
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getApiAverageSessions(userId) {
    const API_URL = `${ENV}/user/${userId}/average-sessions`;
    try {
      const { data } = await axios.get(API_URL);
      // console.log(data) // result : object de data
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}