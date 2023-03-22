import { useState, useEffect } from "react";

function Api() {
  const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3000/user/18`)
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				console.log(data);
				return setData(data);
			});
	}, []);
  return (
    data
  )
}

export default Api