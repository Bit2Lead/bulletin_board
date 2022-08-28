import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

import { postAdded } from './postsSlice';

const AddPostForm = () => {

    const users = useSelector(selectAllUsers);
    
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const onContentChange = (e) => {
        setContent(e.target.value);
    }

    const onAuthorChanged = (e) => {
        setUserId(e.target.value);
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const onSavePostClicked = () => {
        if(title && content){
            dispatch(postAdded(title, content, userId));
        }
        setTitle('');
        setContent('');
        setUserId('');

    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ))

     

    return (
        <section>
            <h1>Add Post</h1>
            <form>
                <label htmlFor='postTitle'>Post Title</label>
                <input 
                    type='text'
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={onTitleChange}
                />

                <label htmlFor='postAuthor'>User Name</label>
                <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
                    <option value=''>Select Option</option>
                    {usersOptions}
                </select>

                <label htmlFor='postContent'>Post Content</label>
                <textarea 
                    type='text'
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChange}
                />
                <button type='button'
                   onClick={onSavePostClicked} 
                   disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm;