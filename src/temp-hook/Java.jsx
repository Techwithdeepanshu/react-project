import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Java() {
  const [Posts,setPosts]=useState([])
  useEffect(()=>{
      axios.get("http://localhost:4000/JAVA")
      .then(res=>{
          console.log(res)
          setPosts(res.data)
      })
      .catch(err=>{
          console.log(err)
      })
  },[])
  return (
    <div className='article'> 
    <ul>
        {
            Posts.map(post=>
                <li><h1>  {post.heading}</h1>
                <p> {post.intro}</p></li>
                )
        }
    </ul>
    </div>
  )
}

export default Java