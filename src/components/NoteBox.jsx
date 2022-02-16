import { Component } from "react/cjs/react.development";
import React from 'react'
class NoteBox extends Component{

    constructor(props){
        super(props)
        this.textarearef = React.createRef();
    }
    state={
        height:"60px",
        overflow:"hidden",
        title:"",
        content:""
    }
    changeBody=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    changeTitle=(e)=>{
        this.setState({
            title:e.target.value
        })
    }


    increaseBoxHeight=()=>{
        // console.log("scroll"+this.textarearef.current.scrollHeight)
        if(this.textarearef.current.scrollHeight<150){
        this.setState({height:this.textarearef.current.scrollHeight+"px"})
        }
        else{
            this.setState({overflow:"scroll"})
        }
    }

    render(){
        return(
            <div className="notebox">
                <div className="row">
                    <div className="col-sm-12">
                        <input type="text" required value={this.state.title} class="noteboxtitle" placeholder="Title" onChange={this.changeTitle} />
                       
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <textarea class="noteboxbody" required value={this.state.content} placeholder="Make a Note" onChange={this.changeBody} ref={this.textarearef} style={{height:this.state.height,overflowY:this.state.overflow,overflowX:"hidden"}} onInput={()=>this.increaseBoxHeight()}  />
                       
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                    
                        <div className="bottomtoolbar">
                            <div className="row">
                               
                                <div className="col-sm-1" title="Draw"><i class="fas fa-pencil-ruler"></i></div>
                                <div className="col-sm-1" title="Image"><i class="fas fa-image"></i></div>
                                <div className="col-sm-1" title="Pin"><i class="fas fa-thumbtack"></i></div>
                                <div className="col-sm-1" title="Share"><i class="fas fa-share"></i></div>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-1" onClick={()=>this.props.addNotes(this.state.title,this.state.content)}>add</div>
                                <div className="col-sm-1" onClick={this.props.closeBox}>
                                close
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>

            </div>

        )
    }
}

export default NoteBox;