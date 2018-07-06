import React,{ Component } from "react";
import CounterAction from '../store/CounterAction'
import { connect } from "react-redux";
import { Divider } from "material-ui";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class Counter extends Component
{
        render() {
            console.log('store',this.props)
            return (
                <div>
                    <AppBar position="static" color="default" style={{ backgroundColor: "#E53935" }}>
        <Toolbar>
          <Typography variant="title" color="inherit" style={{ color: "#FFF" }}>
            Counter App
                    </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <h1 style={{textAlign:"center",width:"100%"}}>{this.props.counter}</h1>
      <br />
      <Button variant="contained" className="Increment-btn"color="primary" onClick={(e) => this.props.incrmnt()}>
        INCREMENT
      </Button>
      <Button variant="contained" color="primary" className="Decrement-btn" onClick={(e) => this.props.decrmnt()} style={{textAlign:"center"}}>
        DECREMENT
      </Button>
                </div>
            )
        }
    
    }
    function mapStateToProps(state) {
        console.log('map state to props',state)
        return {
            counter: state['count']
        }
    
    }
    function mapDispatchToProps(dispatch) {
        console.log('map dispatch to props',dispatch)
        return {
            incrmnt:  function(){return dispatch(CounterAction.increment())},
            decrmnt: function(){return dispatch(CounterAction.decrement())}
        }
    
    }
    export default connect(mapStateToProps, mapDispatchToProps)(Counter)

