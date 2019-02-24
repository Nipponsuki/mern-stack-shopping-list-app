import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Input from "@material-ui/core/Input";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

const AddItem = styled.div`
  background-image: linear-gradient(45deg, #4e54c8, #8f94fb);

  height: 2rem;
  width: 8rem;
  margin: 2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  vertical-align: center;
  border-radius: 2px;
  box-shadow: -1px 1px 21px -1px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  align-self: flex-start;

  &:hover::before {
    border: 2px solid #fff;
    color: #fff;
  }

  &::before {
    content: "+";
    height: 2rem;
    width: 2rem;
    background-image: linear-gradient(45deg, #ee9ca7, #ffdde1);
    position: absolute;
    top: -10px;
    left: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    font-size: 2rem;
    color: #4e54c8;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }
`;

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ItemModal extends Component {
  state = {
    open: false,
    name: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };
    this.props.addItem(newItem);
    this.handleClose();
  };
  render() {
    return (
      <>
        <AddItem onClick={this.handleClickOpen}>add item</AddItem>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(78, 84, 200, .8),rgba(143, 148, 251, 0.8))"
          }}
        >
          <DialogTitle
            id="alert-dialog-slide-title"
            style={{
              background: "#00c6ff",
              color: "#fff"
            }}
          >
            {"Going shopping? Great 🤩"}
          </DialogTitle>
          <DialogContent
            style={{
              background: "#00c6ff"
            }}
          >
            <DialogContentText id="alert-dialog-slide-description">
              <form onSubmit={this.onSubmit}>
                <Input
                  style={{ display: "block" }}
                  placeholder="Add item... 🍇"
                  inputProps={{
                    "aria-label": "Description"
                  }}
                  type="text"
                  name="name"
                  id="item"
                  onChange={this.onChange}
                />
              </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onSubmit} color="primary">
              Add
            </Button>
            <Button onClick={this.handleClose} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
