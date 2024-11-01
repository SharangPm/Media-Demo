
import { commonAPI } from "./commonAPI"
import { server_url } from "./server_url"

// addVideo API



export const addVideoAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)

}


// getVideoAPI

export const getAllVideoAPI=async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")

}


// getAVideo

export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")


}


// deletVideo

export const deletVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})


}


// addHistory API



export const addHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)

}


// geHistoryAPI

export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")

}

// deletHistory

export const deletHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})


}