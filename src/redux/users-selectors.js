export const getAllUsers = (state) => {
    return state.usersPage.users;
};

export const getCurPage = (state) => {
    return state.usersPage.currentPage;
};

export const getPSize = (state) => {
    return state.usersPage.pageSize;
};

export const getUsersCount = (state) => {
    return state.usersPage.totalItemsCount;
};

export const getFetchingStatus = (state) => {
    return state.usersPage.isFetching;
};

export const getFollowingStatus = (state) => {
    return state.usersPage.followingInProgress;
};