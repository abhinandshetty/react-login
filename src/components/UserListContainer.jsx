import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../redux/user/user';
import Table from './Table';

export class UserListContainer extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    getDataForTable = () => {
        const headers = this.props.userList.length ? Object.keys(this.props.userList[0]).map(str=>`${str[0].toUpperCase()}${str.substr(1,str.length-1).toLowerCase()}`) : [];
        const rows = this.props.userList.map(user => Object.values(user));
        return { headers, rows }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !(nextProps!=this.props)
    }
    
    render() {
        const { headers, rows } = this.getDataForTable();
        return (
            <div className="container mt-5">
                <Table headers={headers} rows={rows} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    userList : state.users.userList
});

export default connect(mapStateToProps,{ getUsers })(UserListContainer);

