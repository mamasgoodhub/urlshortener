import { createContext, useState, useEffect } from 'react'
import axios from 'axios';

const LinkContext = createContext()

export const LinkProvider = ({children}) => {
    const [link, setLink] = useState([])

    useEffect(() => {
        fetchLinks()
    })

    const fetchLinks = async () => {
        axios.get('/api/index')
        .then(res =>{
            setLink(res.data)
        })
        .catch(err =>{
            console.log(process.env.baseUrl);
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