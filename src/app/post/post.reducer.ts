import * as PostActions from './post.actions';
import { Post } from './post.model';

export type Action = PostActions.All;

/// Default app state
const defaultState: Post = {
	text: 'Hello! I am the default post',
	likes: 0
};

/// Helper function to create new state object
const newState = (state: Post, newData: any) => {
	return Object.assign({}, state, newData);
};

/// Reducer function
export function postReducer(state: Post = defaultState, action: any) {
	console.log(action.type, state);

	switch (action.type) {
		case PostActions.EDIT_TEXT:
			return newState(state, { text: action.payload });

		case PostActions.UPVOTE:
			return newState(state, { likes: state.likes + 1 });

		case PostActions.DOWNVOTE:
			return newState(state, { likes: state.likes - 1 });

		case PostActions.RESET:
			return defaultState;

		default:
			return state;
	}
}
