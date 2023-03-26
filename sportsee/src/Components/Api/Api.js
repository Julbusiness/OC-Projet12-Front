import axios from "axios";

export async function getApi(userId) {

	const API_URL = `http://localhost:3000/user/${userId}`;

	try {
      const { data } = await axios.get(API_URL)
      console.log(data)
      return data
	} catch (error) {
	  	console.log(error);
	}
}

export async function getApiActivity(userId) {

	const API_URL = `http://localhost:3000/user/${userId}/activity`;

	try {
      const { data } = await axios.get(API_URL)
      console.log(data)
      return data
	} catch (error) {
	  	console.log(error);
	}
}

export async function getApiPerformance(userId) {

	const API_URL = `http://localhost:3000/user/${userId}/performance`;

	try {
      const { data } = await axios.get(API_URL)
      console.log(data)
      return data
	} catch (error) {
	  	console.log(error);
	}
}