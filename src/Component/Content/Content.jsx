
import { useState, useEffect } from 'react';
import react from 'react';

const TypeApi = ['posts', 'albums', 'photos', 'todos'];

const Content = () => {
  const [Posts, setPosts] = useState([])
  const [ApiContent, setApiContent] = useState('posts');
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${ApiContent}`)
      .then(res => res.json())
      .then(posts => setPosts(posts))
  }, [ApiContent]);

  const handleClickContent = (Element) => {
    setApiContent(Element);

  }



  return (
    <div>
      {TypeApi.map((Element, idx) => <button key={Element} onClick={() => handleClickContent(Element)}>{Element}</button>)}


      <ul>
        {Posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>

  )
}



export default Content;
