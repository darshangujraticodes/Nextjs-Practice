async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Fetch API Error = ", error);
    return error;
  }
}

const ServerApiCall = async () => {
  let posts = await getPosts();

  //   console.log("Fetch API Posts Data = ", posts);

  return;
};

export default ServerApiCall;
