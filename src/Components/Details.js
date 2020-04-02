import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from 'react-fa'

const Details = props => {


    if (!props.launches) {
        return <></>
    }
    console.log('THIS ONE-DETAILS', props)
    // console.log('THIS ONE-DETAILS', props.launches[0].launch_date_unix)
    // console.log('THIS ONE-DETAILS', props.match.params.id)

    const filterMap = props.launches.filter((index, i) => index.launch_date_unix == props.match.params.id)[0];
    const mapStart = filterMap.links.flickr_images.map((item, index) => {
        // console.log(item)
        return (
            <img key={index} style={{ height: '60vh' }} alt="flickr images" src={item} />
        )
    })
    return (
        <div><div className="title"><h1 className="details"><p className="smallheader">Mission Name:</p>{filterMap.mission_name}</h1></div>
             
            {filterMap.links.flickr_images[0] ? <Carousel
                slidesPerPage={1}
                centered
                arrowLeft={<Icon style={{ fontSize: '30px', marginLeft: '25px' }} name="angle-left" />}
                arrowRight={<Icon style={{ fontSize: '30px', marginRight: '25px' }} name="angle-right" />}
                addArrowClickHandler
                infinite
            >
                {mapStart}
            </Carousel> : <></>}
            <div className="detailsContent">
            {filterMap.rocket.rocket_name ? <h2>Rocket used: {filterMap.rocket.rocket_name} </h2> : <></>}
            {filterMap.details ? <p>{filterMap.details}</p> : <h2>Details coming soon!</h2>}

            <div className="articles">
            {filterMap.telemetry.flight_club ? <button><a href={filterMap.telemetry.flight_club} target="_blank">Telemetry</a></button>: <></>}
            {filterMap.links.article_link !== filterMap.links.wikipedia? <button><a href={filterMap.links.article_link} target="_blank">Article</a></button>: <></>}
            <button><a href={filterMap.links.wikipedia} target="_blank">Wikipedia</a></button>
            </div>

            {filterMap.links.video_link? 
            <div className="video"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    paddingTop: 25,
                    height: 0
                }}>
                <iframe
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    title={filterMap.links.youtube_id}
                    src={`https://www.youtube.com/embed/${filterMap.links.youtube_id}`}
                    frameBorder="0"
                />
            </div> : <></>}
            
            <img alt ="" src={filterMap.links.mission_patch_small} />
            </div>
        </div>
    )

}

export default Details
