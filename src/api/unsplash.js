import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 607165ea70b24ba32cbe94cd8e64a4ceb7bfc20084d43783d464415d44527989'
    }
})

