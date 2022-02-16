import "./App.css";
import { Component } from "react";
import Card from "./components/Card";
import NoteBox from "./components/NoteBox";
import crud from "./data_access/crud";

class App extends Component {
  state = {
    darkmodeclass: "btn-dark",
    darkbuttontext: "Dark",
    openbox: false,
    content: [],
    search: "",
    filtered: [],
  };
  closeBox = () => {
    this.setState({
      openbox: false,
    });
  };
  componentDidMount = () => {
    console.log("fetched", crud.fetchNotes("new"));
    var fcontent = crud.fetchNotes("new");
    fcontent.then((data) => {
      this.setState({
        content: data.data,
      });
    });
  };

  addNotes = (title, notebody) => {
    if (title !== "" && notebody !== "") {
      crud.addNote("new", title, notebody);
      var fcontent = crud.fetchNotes("new");
      fcontent.then((data) => {
        this.setState({
          content: data.data,
        });
      });
    }
    this.closeBox();
  };
  deleteNote = (id) => {
    crud.deleteNote(id);
    var fcontent = crud.fetchNotes("new");
    fcontent.then((data) => {
      this.setState({
        content: data.data,
      });
    });
  };
  searchCards = (e) => {
    if(this.state.openbox){
      this.setState({
        openbox:false
      })
    }
    this.setState({
      search: e.target.value,
    });
    var filter = [];
    for (var item of this.state.content) {
      if (
        item.title.toUpperCase().match(e.target.value.toUpperCase()) ||
        item.body.toUpperCase().match(e.target.value.toUpperCase())
      ) {
        filter.push(item);
        console.log(item,this.state.search)
      }
    }
    this.setState({
      filter: filter,
    });
  };
  render() {
    return (
      <div className="wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="row navrow">
            <div className="col-sm-2 navcol">
              <div class="logo">
                <strike>don't-keep</strike> Just-Share
              </div>
            </div>
            <div className="col-sm-8 navcol">
              <div className="searchbox">
                <input
                  class="search"
                  placeholder="Search"
                  onChange={this.searchCards}
                  value={this.state.search}
                />
              </div>
            </div>
            <div className="col-sm-2 navcol">Welcome , Aditya</div>
          </div>
        </nav>
        <div className="notehead">
          <div className="row">
            <div className="col-sm-2">
              <button class={"btn " + this.state.darkmodeclass}>
                {this.state.darkbuttontext}
              </button>
            </div>
            <div className="col-sm-9">
              {!this.state.openbox ? (
                <input
                  class="add"
                  placeholder="Add Notes"
                  onClick={() => {
                    this.setState({ openbox: true });
                  }}
                />
              ) : (
                <NoteBox closeBox={this.closeBox} addNotes={this.addNotes} />
              )}
            </div>
            <div className="col-sm-1">
              <button
                class="btn btn-success"
                onClick={() => {
                  this.componentDidMount();
                }}
              >
                <i class="fas fa-sync"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          className="container"
          onClick={() => {
            this.setState({ openbox: false });
          }}
        >
          {this.state.search.length > 0 && this.state.filter
            ? this.state.filter.map((item) => {
                return (
                  <Card
                    id={item.id}
                    title={item.title}
                    content={item.body}
                    deleteNote={this.deleteNote}
                  />
                );
              })
            : this.state.content &&
              this.state.content.map((item) => {
                return (
                  <Card
                    id={item.id}
                    title={item.title}
                    content={item.body}
                    deleteNote={this.deleteNote}
                  />
                );
              })}
        </div>
      </div>
    );
  }
}

export default App;
