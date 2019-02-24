import React, { Component } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import ItemModal from "./ItemModal";

const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-left: 1rem;
  background-image: linear-gradient(
    to right,
    rgba(78, 84, 200, 1),
    rgba(143, 148, 251, 0.8),
    rgba(143, 148, 251, 0)
  );
  box-shadow: -1px 1px 21px -1px rgba(0, 0, 0, 0.75);
  border-radius: 2px;
  height: 6rem;
  padding: 0 2rem;
  cursor: pointer;
  position: relative;
  z-index: 2;
  overflow: hidden;
  font-size: 1.8rem;
  list-style: none;
  margin-bottom: 0.5rem;

  @media (max-width: 500px) {
    width: auto;
  }

  &:hover::before {
    transform: translateX(-25%);
    content: "10$";

    @media (max-width: 500px) {
      transform: translateX(-100%);
      content: "";
      background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      );
    }
  }

  &::before {
    content: "";
    height: 5rem;
    width: 10rem;
    background-image: linear-gradient(to left, #fc5c7d, #6a82fb);
    position: absolute;
    top: 10px;
    bottom: 5px;
    left: 0;
    bottom: 2px;
    border-radius: 5px;
    font-size: 2rem;
    color: #fff;
    z-index: 1;
    transform: translateX(-85%);
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    margin-left: 2rem;
  }

  i {
    transition: all 0.3s ease;
    color: #ff5858;
    position: relative;

    &::after {
      content: "";
      height: 120rem;
      width: 1000rem;
      background: red;
      position: absolute;
      right: 0;
      bottom: 2px;
      border-radius: 5px;
      font-size: 20rem;
      color: #4e54c8;
      z-index: 1;
      transform: translateY(-100%);
    }

    &:hover {
      transform: scale(1.1);
      color: #e52d27;
    }

    &:hover::after {
      content: "delete";
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Items = styled.div`
  overflow-y: auto;
  width: 100%;
`;

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  handleDelete = () => {
    this.setState({
      items: this.props.item.items.filter(
        shop => shop.id !== this.props.item.items.id
      )
    });
  };

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    return (
      <Wrapper>
        <Slide top>
          <ItemModal />
        </Slide>
        <Items>
          {this.props.item.items.map(shop => (
            <Fade left>
              <Item key={shop._id}>
                {" "}
                <li>{shop.name}</li>{" "}
                <i
                  className="fas fa-dumpster-fire"
                  onClick={this.onDeleteClick.bind(this, shop._id)}
                />
              </Item>
            </Fade>
          ))}
        </Items>
      </Wrapper>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
