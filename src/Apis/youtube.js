import axios from 'axios';

const  Key = "AIzaSyDVY_JMNTOULb67VfJKCFC8XmIOP4ASvDw";

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3' ,
    params : {
        part : 'snippet',
        maxResults :  5 ,
        key: Key
      } 
    });