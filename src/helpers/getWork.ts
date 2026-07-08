import axios from "axios";

const getWork = async(id: number) => {
  const endpoint = 'https://welcometruthv2.gregoryspraggins.com/wp-json/wp/v2/';
  let post;

  await axios
    .get(`${endpoint}work/${id}`)
    .then((output) => {
      post = output.data;
    });
  
  return await post;
};

export default getWork;