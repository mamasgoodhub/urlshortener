import { createContext, useState, useEffect } from 'react'
import axios from 'axios';
import { axiosInstance } from '../config';

const LinkContext = createContext()

export const LinkProvider = ({children}) => {
    const [link, setLink] = useState([])

    useEffect(() => {
        fetchLinks()
    })

    const fetchLinks = async () => {
        axiosInstance.get("/")
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