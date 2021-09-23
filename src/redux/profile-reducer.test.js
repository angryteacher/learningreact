import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

test('new post should be added', () => {

    // 1) test data
    let action = addPostActionCreator("Kozyrin");
    let state = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It is my first post", likesCount: 345},
            {id: 3, message: "You will die!", likesCount: 23},
            {id: 4, message: "Nice", likesCount: 4},
            {id: 5, message: "Go on", likesCount: 156}
        ],
    };
    // 2) action
    let newState = profileReducer(state, action);

    // 3) expected result
    expect(newState.posts.length).toBe(6);
});


test('after deleting length of posts should be decreased', () => {

    // 1) test data
    let action = deletePost(1);
    let state = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It is my first post", likesCount: 345},
            {id: 3, message: "You will die!", likesCount: 23},
            {id: 4, message: "Nice", likesCount: 4},
            {id: 5, message: "Go on", likesCount: 156}
        ],
    };
    // 2) action
    let newState = profileReducer(state, action);

    // 3) expected result
    expect(newState.posts.length).toBe(4);
});
