import 'react-multi-carousel/lib/styles.css';
import 'react-tabs/style/react-tabs.css';

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import { actions } from "../../actions";
import LoaderGif from '../../Assets/images/loading.gif';


class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getNotifications() // fetch user notifications
    }

    render() {
        let { notifications } = this.props;
        return (
            <>
                {notifications ?
                    <NotificationSBX01>
                        {notifications.map((notification) => {
                            return <button key={notification.id}>
                                {notification.text}
                            </button>
                        })}
                    </NotificationSBX01>
                :<LoaderBX> 
                    <img src={LoaderGif} alt="" />
                </LoaderBX>}
            </>
        )
    }
}

// Common Style Div 
const FlexDiv = styled.div`
    display: flex; align-items: center; justify-content:center; flex-wrap:wrap;
`;

const LoaderBX = styled(FlexDiv)`
  width:100%;  margin:50px auto;  
`

const NotificationSBX01 = styled(FlexDiv)`
  align-items: flex-start;
  justify-content: flex-start;

  button {
    width: 100%;
    height: auto;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    display: block;
    text-align: left;
    padding: 15px;
    border-bottom: 1px solid #eef2f7;

    span {
      font-size: 10px;
      font-weight: 400;
      display: block;
      width: 100%;
      margin-top: 5px;
    }
    :hover {
      background-color: #d9f5f5;
    }
  }
`;


const mapDipatchToProps = (dispatch) => {
    return {
      getNotifications: () => dispatch(actions.getNotifications()),
    }
}

const mapStateToProps = (state) => {
    return {
      notifications: state.fetchNotifications,
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(Notifications);