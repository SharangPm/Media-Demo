import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideoAPI } from '../services/allAPI'
import { all } from 'axios'


function View() {

  const [allVideos,setAllVideos]=useState([])

  const getAllVideos = async()=>{
    const result = await getAllVideoAPI()
    console.log(result);
    if(result.status=200){
      setAllVideos(result.data)
    }else{
      console.log("api failed");
      setAllVideos([])
      
    }
  
  }
  console.log(allVideos);

  useEffect(()=>{
    getAllVideos()
  },[])
  

  return (
    <>

    <h2 className='text-info'>All-Videos</h2>

    <Row>

      {
       allVideos?.length>0?allVideos.map((video,index)=>(
       
        <Col key={index} sm={12} md={6} lg={4}>
        <VideoCard video={video}/>
        </Col>
       )):<p className='text-danger'>Nothing to Display</p> 
   
      }
    </Row>      
    </>
  )
}

export default View
