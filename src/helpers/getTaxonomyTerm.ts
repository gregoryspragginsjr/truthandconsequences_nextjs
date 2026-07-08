import axios from "axios";

const getTaxonomyTerm = async(taxonomy: string, id: number) => {
  const endpoint = 'https://welcometruthv2.gregoryspraggins.com/wp-json/wp/v2/';
  let termObj;

  await axios
    .get(`${endpoint}${taxonomy}/${id}`)
    .then((output) => {
      termObj = output.data;
    });

  return await termObj;
};

export default getTaxonomyTerm;