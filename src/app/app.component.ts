import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from './post/post.model';
import * as PostActions from './post/post.actions';
import { EditText } from './post/post.actions';

interface AppState {
	post: Post;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	posts$!: Observable<Post>;
	text: string = ''; /// from input value

	constructor(private store: Store<AppState>) {
		this.posts$ = store.select('post');
	}

	editText() {
		this.store.dispatch(new PostActions.EditText(this.text));
	}

	resetPost() {
		this.store.dispatch(new PostActions.Reset());
	}

	downvote() {
		this.store.dispatch(new PostActions.Downvote());
	}

	upvote() {
		this.store.dispatch(new PostActions.Upvote());
	}
}
