import React from 'react'
import {MediaCard, DescriptionList} from '@shopify/polaris'


class Home extends React.Component{

    render(){
        return(
        <>
            <MediaCard
              title="Fill your life with experiences not things"
              portrait
              description={` Have stories to tell not stuff to show. Join us in a adventure of a lifetime. Have the best tour guides at your service so you can get the most out of your next adventure!`}
            >
              <img
                src="https://resources.depaul.edu/student-success/explore-your-purpose/PublishingImages/nature-sky-sunset-man-1600w.jpg"
                alt='view'
                width="100%"
                height="100%"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              
              />
            </MediaCard>
    
            <br/>
    
            <DescriptionList
              items={[
                {
                  term: 'Incredible Value',
                  description:
                  'Morbi porttitor dapibus felis a porttitor. Suspendisse id consequat risus, vitae tempus magna. Sed aliquam cursus dolor, eu commodo magna iaculis ut. Suspendisse interdum, dolor vel rhoncus ullamcorper, enim dui semper nulla, quis hendrerit ipsum diam pretium mauris. '
                },
                {
                  term: 'Experiences, not sightseeing',
                  description:
                  'Morbi porttitor dapibus felis a porttitor. Suspendisse id consequat risus, vitae tempus magna. Sed aliquam cursus dolor, eu commodo magna iaculis ut. Suspendisse interdum, dolor vel rhoncus ullamcorper, enim dui semper nulla, quis hendrerit ipsum diam pretium mauris. '
                },
                {
                  term: 'Small groups',
                  description:
                  'Morbi porttitor dapibus felis a porttitor. Suspendisse id consequat risus, vitae tempus magna. Sed aliquam cursus dolor, eu commodo magna iaculis ut. Suspendisse interdum, dolor vel rhoncus ullamcorper, enim dui semper nulla, quis hendrerit ipsum diam pretium mauris. '
                  ,
                },
                {
                  term: 'Touring Variety',
                  description:
                  'Morbi porttitor dapibus felis a porttitor. Suspendisse id consequat risus, vitae tempus magna. Sed aliquam cursus dolor, eu commodo magna iaculis ut. Suspendisse interdum, dolor vel rhoncus ullamcorper, enim dui semper nulla, quis hendrerit ipsum diam pretium mauris. '
                  ,
                },
                {
                  term: 'Great Guides',
                  description:
                  'Morbi porttitor dapibus felis a porttitor. Suspendisse id consequat risus, vitae tempus magna. Sed aliquam cursus dolor, eu commodo magna iaculis ut. Suspendisse interdum, dolor vel rhoncus ullamcorper, enim dui semper nulla, quis hendrerit ipsum diam pretium mauris. '
                  ,
                },
              ]}
            />
        </>
        )
    }
}

export default Home