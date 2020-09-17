import axios from 'axios';

const getNotice = async () => {
  const response = await axios.get('noticeData.json');
  return response;
};

export default getNotice;
