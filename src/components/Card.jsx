import { Component } from "react/cjs/react.production.min";

class Card extends Component {
  state = {
    bottom: false,
  };

  render() {
    return (
      <div
        className="card"
        onMouseEnter={() => {
          this.setState({ bottom: true });
        }}
        onMouseLeave={() => {
          this.setState({ bottom: false });
        }}
      >
        <div className="title">
          <h3>{this.props.title}</h3>
        </div>

        <div className="notebody">{this.props.content}</div>

        <div className="bottombar">
          {this.state.bottom ? (
            <div className="row">
              <div className="col-sm-9 ">
                <div className="pin">
                  <i class="fas fa-thumbtack"></i>
                </div>
              </div>
              <div className="col-sm-1">
                <div className="share">
                  <i class="fas fa-share"></i>
                </div>
              </div>
              <div className="col-sm-1">
                <div className="delete">
                  <i class="fas fa-trash" onClick={()=>this.props.deleteNote(this.props.id)}></i>
                </div>
              </div>
              <div className="col-sm-1">
                <div className="more">
                  <i class="fas fa-ellipsis-v"></i>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Card;
