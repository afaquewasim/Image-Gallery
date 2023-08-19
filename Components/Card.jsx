import React from 'react'

const Card = ({image}) => {

    const tags = image.tags.split(',')

    return (
        <div>
            <div className='max-w-lg rounded overflow-hidden  m-2 shadow-xl rounded-xl'>
                <img className='w-full h-[26rem]' src={image.webformatURL} alt="" />
                <div className="info">
                    <h1 className='my-2 text-lg font-semibold mx-2'>Photo by {image.user}</h1>
                    <ul className='mx-2'>
                        <li>
                            <strong>View: </strong>{image.views}
                        </li>
                        <li>
                            <strong>Download: </strong>{image.downloads}
                        </li>
                        <li>
                            <strong>Likes: </strong>{image.likes}
                        </li>
                    </ul>
                </div>
                <div className="tags mx-2 my-4">
                    {tags.map((tag, index)=>(
                    <span className='px-2 py-[4px] bg-slate-400 mr-2 rounded-lg' key={index}>#{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card;
