import {CREATE_NEW_POST, UPDATE_POST, DELETE_POST, FETCH_ALL_POSTS, FETCH_USER_POSTS, FILTER_POSTS, CLEAR_POSTS} from '../actions/index.js'

export function createNewPost (action) {
  console.log("HELPER POST", action.newPost,"HELPER STATE")
	const { user_id, username, category,category_id, id,
					content, title, tags,
					created_at, updated_at} = action.newPost;
	return {
    title: title,
    created_at: created_at,
    updated_at: updated_at,
    content: content,
    id: id,
    user: {
      username: username,
      id: user_id
    },
    category: {
      id: category_id,
      name: category
    },
    tags: tags
  }
}

export function userPosts (state=[], action) {
	switch(action.type) {
		case CREATE_NEW_POST:
      console.log(createNewPost(action))
			return [...state, createNewPost(action)];
		case FETCH_USER_POSTS:
      return action.fetchedUserPosts
		default :
			return state;
	}
  return state;
}




export function allPosts (state=[], action) {
  switch(action.type) {
    case FETCH_ALL_POSTS:
      return action.fetchedPosts;
    case FILTER_POSTS:
      return state.concat(action.filteredPosts);
    case CLEAR_POSTS:
      return [];
// =======
//       return Object.assign({}, state, {posts: fetchedPosts})
// >>>>>>> refactor  store state shape
      // return Object.assign({}, state, {posts: action.fetchedPosts})

    default :
      return state;
  }
  return state;
}


