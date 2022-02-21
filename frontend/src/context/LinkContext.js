import { createContext, useState, useEffect } from 'react'
import axios from 'axios';


//Context to manage links globally
const LinkContext = createContext()

export const LinkProvider = ({children}) => {
    const [link, setLink] = useState([])

    useEffect(() => {
        fetchLinks()
    }, /*[]*/)

    //Fetch links for further use from /api/index
    const fetchLinks = async () => {
        axios.get('https://glacial-castle-30429.herokuapp.com/api/index')
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