import React from 'react'
import {Card, DataTable, MediaCard, Button} from '@shopify/polaris';
import { ResourcePicker } from '@shopify/app-bridge-react';



class Prices extends React.Component{

    state={
        open:false
    }
    rows = [
        ['Costa Rica', '$2275.00', '$1275.00', '$1075.00', '$500.00'],
        ['Hawaii', '$2530.00', '$1275.00', '$1005.00', '$690.00'],
        [ 'Canada', '$2445.00','$1275.00', '$1225.00','$440.00'],
        [ 'Australia', '$2645.00','$1475.00', '$1325.00','$540.00'],
        [ 'Brazil', '$2005.00','$1200.00', '$1025.00','$630.00'],
        [ 'New York', '$2145.00','$1275.00', '$1215.00','$500.00'],
      ];

      handleSelection=(resources)=>{
          const idFromResources = resources.selection.map((product)=>product.id)
          this.setState({open:false})
          console.log(idFromResources)
      }

    render(){
        return(
            
            <Card>
                 <MediaCard
              title="Get A Taste Of Freedom"
              portrait
              description={`Customize your experience with a Explore vacation package.
              With some of the world's most popular destinations available, a quality vacation is at your fingertips. Maximize your Explore membership and enjoy the value!`}
            >
              <img
                src="https://i.pinimg.com/originals/ae/de/69/aede69e6ceadc5e984d9172ec7e95d8a.png"
                alt='view'
                width="100%"
                height="100%"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              
              />
            </MediaCard>
            <DataTable
              columnContentTypes={[
                'text',
                'numeric',
                'numeric',
                'numeric',
                'numeric',
              ]}
              headings={[
                'Destination',
                'W/Flights/Hotel/Tour',
                'Flight/Hotel Only',
                'Flight/Tour Only',
                'Tour Only',
              ]}
              rows={this.rows}
              
            />
        <ResourcePicker
        resourceType='Product'
        open={this.state.open}
        onCancel={()=>this.setState({open:false})}
        onSelection={(resources)=>this.handleSelection(resources)}
        />
            <Button onClick={()=>this.setState({open:true})} fullWidth>Book Now!</Button>
          </Card>

        )
    }
}

export default Prices