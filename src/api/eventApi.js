import axios from 'axios';

const apiUrl = 'http://gateway.marvel.com/v1/public/events?ts=1&apikey=eb2d792694eb6e3887b538b8a31aae4b&hash=eea377918903899ba83ec96305af1b64';

// const generateId = (event) => {
//   return event.nome.toLowerCase() + '-' + event.sobrenome.toLowerCase();
// };

class EventApi {
  static getAllEvents() {
    return axios.get(apiUrl);
  }

//   static saveDev(event) {
//     if (event.id) {
//       return axios.put(apiUrl + event.id, event);
//     } else {
//       event.id = generateId(event);
//       return axios.post(apiUrl, event);
//     }
//   }

}

export default EventApi;