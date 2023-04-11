import axios from "axios";

const ENV = import.meta.env.VITE_API

export class Request{
  constructor(url){
    this.url = url
  }
  async currentURL(url){
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export class Api {
  constructor (userId) {
    this.userId = userId;
  }

  getApi(userId) {
    const API_URL = `${ENV}/user/${userId}`; 
    return API_URL
  }

  getApiActivity(userId) {
    const API_URL = `${ENV}/user/${userId}/activity`;
    return API_URL
  }

  getApiPerformance(userId) {
    const API_URL = `${ENV}/user/${userId}/performance`;
    return API_URL
  }

  getApiAverageSessions(userId) {
    const API_URL = `${ENV}/user/${userId}/average-sessions`;
    return API_URL
  }
}