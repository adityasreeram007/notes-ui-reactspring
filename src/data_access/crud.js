var axios = require("axios");
const crud = {
  addNote: (username, title, content) => {
    return axios
      .post("http://localhost:8080/notes_war/addNotes", {
        username: username,
        title: title,
        body: content,
      })
      .then((data) => {
        return data;
      }).catch((err)=>{
        console.log(err)
    });;
  },
  deleteNote: (id) => {
    return axios
      .post("http://localhost:8080/notes_war/deleteNotes", { id: id })
      .then((data) => {
        return data;
      }).catch((err)=>{
        console.log(err)
    });;
  },
  fetchNotes: (username) => {
      return axios
      .post("http://localhost:8080/notes_war/getNotes", { username: username })
      .then((data) => {
        console.log("inside",data)
        return data;
      }).catch((err)=>{
          console.log(err)
      });
  },
  updateNotes: (id, title, content) => {
    return axios
      .post("http://localhost:8080/notes_war/updateNotes", {
        id: id,
        title: title,
        body: content,
      })
      .then((data) => {
        return data;
      }).catch((err)=>{
        console.log(err)
    });
  },
};

export default crud
