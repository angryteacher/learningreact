import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../common/Preloader";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow
} from "../../redux/users-reducer";
import {
    getAllUsers,
    getCurPage,
    getFetchingStatus,
    getFollowingStatus,
    getPSize,
    getUsersCount
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                totalItemsCount={this.props.totalItemsCount}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        currentPage: getCurPage(state),
        pageSize: getPSize(state),
        totalItemsCount: getUsersCount(state),
        isFetching: getFetchingStatus(state),
        followingInProgress: getFollowingStatus(state),
    }
}
export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage,
    toggleFollowingInProgress, getUsers
})(UsersContainer);
