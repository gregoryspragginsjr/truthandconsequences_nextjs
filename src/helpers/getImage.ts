import axios from "axios";

const getImage = async(id: number) => {
  const endpoint = 'https://welcometruthv2.gregoryspraggins.com/wp-json/wp/v2/';
  let imageObj;

  await axios
    .get(`${endpoint}media/${id}`)
    .then((output) => {
      console.log(output.data);
      imageObj = output.data;
    });
  
  return await imageObj;
};

export default getImage;