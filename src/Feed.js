import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './post';
import db from './firebase'

function Feed() {
    const [posts, setPosts] = React.useState([])
    React.useEffect(() => {
        db.collection('posts').orderBy('timeStamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])
    return (
        <div className='feed'>
            <MessageSender />


            {posts.map((post) => (
                <Post
                    key={post.data.id}
                    Profilepic={post.data.Profilepic}
                    image={post.data.image}
                    username={post.data.username}
                    timestamp={post.data.timeStamp}
                    message={post.data.message}
                />
            ))}


            
        </div>
    )
}

export default Feed
