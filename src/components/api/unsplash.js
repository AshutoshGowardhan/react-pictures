import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9T6bbmEgUlehixtuTwanEO_X5JOX43d_e7-8k-THFBc',
    }
});