import { useState } from 'react'
import axios from 'axios'

function UrlInput() {
    const [url, setUrl] = useState('')

    const handleChange = (e) => {
        setUrl(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            longUrl: url
        }

        axios.post('https://glacial-castle-30429.herokuapp.com/api/url/shorten', data)
        .then(res => {
            navigator.clipboard.writeText(res.data.shortUrl)
            window.alert('Link copied to clipboard')
            console.log(res.data);
        })
        .catch(err => {
            console.log(err)
        });
    }

    return (
        <>
            <form onSubmit={onSubmit} style={{paddingBottom: '15px'}}>
                <div className='input-group'>
                    <input onChange={handleChange} type="text" className='form-control' placeholder="URL..." value={url}/>
                    <button type="submit" className='btn btn-primary input-group-text'>Short me</button>
                </div>
            </form>
        </>
    )
}

export default UrlInput