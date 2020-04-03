import React from 'react'
import {Link} from 'react-router-dom'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline(props) {
    if (!props.launches) {
        return <></>
    }
        const icons = props.launches.map((icon, i) => {
          console.log('Timeline-Map',icon)
        return (
            <div key={i}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#21272B', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={icon.launch_year}
                    iconStyle={{ background: '#2B4867', color: '#fff' }}
                >
            <Link to={`/gallery/${icon.launch_date_unix}`}>
             <h1>{icon.rocket.rocket_name}</h1> </Link>
             <p>{icon.details}</p> 
             {icon.links.mission_patch_small ?
             <img alt = "" src ={icon.links.mission_patch_small}/>: <h1>Info Coming soon</h1>}
             </VerticalTimelineElement>
             <p></p>
            </div>
          )
        })
        return(
            <div>
                 <VerticalTimeline>
                     {icons}
                 </VerticalTimeline>
            </div>
        )
      }

export default Timeline