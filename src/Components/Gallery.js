import React from 'react'
import { Link } from "react-router-dom"

function Gallery(props) {
  if (!props.launches) {
    return <></>
}
    const icons = props.launches.map((icon, i) => {
    return (
      <Link to={`/gallery/${icon.launch_date_unix}`} key={i}>
          <div className='galleryBox'>
          {icon.links.mission_patch_small ? <img src ={icon.links.mission_patch_small} className="galleryImg"/>: <img src ="https://images.unsplash.com/photo-1557459269-82664330c1f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="galleryImg"/>}
          <h2 className="galleryText">{icon.mission_name}</h2>
        </div>
        </Link>
      )
    })
    return <div className='flexGallery'>{icons}</div>
  }
export default Gallery
