import { createContext, useState, useEffect } from 'react'
import axios from 'axios';
const config = require('config');

const LinkContext = createContext()

export const LinkProvider = ({children}) => {
    const [link, setLink] = useState([])
    const baseUrl = config.get('baseUrl');
    useEffect(() => {
        fetchLinks()
    })

    const fetchLinks = async () => {
        axios.get(`${baseUrl}/api/index`)
        .then(res =>{
            setLink(res.data)
        })
        .catch(err =>{
            console.log('Error fetching Links');
        })
      };

    return <LinkContext.Provider value={{
        link,
    }}>
    {children}
    </LinkContext.Provider>
}

export default LinkContext