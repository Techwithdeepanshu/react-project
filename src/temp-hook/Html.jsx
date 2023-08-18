import axios from 'axios'
import React,{useEffect,useState} from 'react'

function Html() {
   const [Posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/HTML")
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

export default Html