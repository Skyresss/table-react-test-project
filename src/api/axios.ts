import axios from "axios";


  const api = axios.create({
    baseURL: 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'
  });
  
  export default api