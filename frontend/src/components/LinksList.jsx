import { useContext } from 'react';
import React, { Component } from 'react';
import LinkContext from '../context/LinkContext';

function LinksList() {
    const {link} = useContext(LinkContext)

    return (
        <div className='card d-inline-flex p-2'>
            <table className='table table-hover text-center' >
                <thead>
                    <tr>
                        <th scope='col'>URL</th>
                        <th scope='col'>Short URL</th>
                        <th scope='col'>Times created</th>
                        <th scope='col'>Times visited</th>
                    </tr>
                </thead>
                <tbody>
                    {link.map((link) => (
                    <tr key={link._id}>
                        <td><a href={link.longUrl} target="_blank">{link.longUrl.length > 25 ? `${link.longUrl.substring(0, 25) + '...'}` : `${link.longUrl}`}</a></td>
                        <td><a href={link.shortUrl} target="_blank">{link.shortUrl}</a></td>
                        <td>{link.timesCreated}</td>
                        <td>{link.timesVisited}</td>
                     </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default LinksList