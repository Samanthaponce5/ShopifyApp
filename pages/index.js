import React from "react";
import {Page,MediaCard, DescriptionList, FooterHelp, Link, Thumbnail} from '@shopify/polaris'
import {Modal} from '@shopify/app-bridge-react';
import Prices from './Prices'
import Home from "./Home";

class Index extends React.Component {

  state={
    open:false,
    home:true
  }

  render() {
    
    return (
      <Page
          title='Explore'
          subtitle='Never Stop Exploring!'

          secondaryActions={[
            {
              content: 'Home',
              accessibilityLabel: 'Secondary action label',
              onAction: () => this.setState({home:true}),
             
            },
            {
              content: 'About',
              onAction: () => this.setState({
                open:true
              }),
              
            },
            {
              content: 'Pricing',
              onAction: () => this.setState({home:false}),
              
            },
          ]}
        
        
          actionGroups={[
            {
              title: 'Questions?',
              accessibilityLabel: 'Action group label',
              actions: [
                {
                  content: 'Contact Us!',
                  accessibilityLabel: 'Individual action label',
                  onAction: () => alert('Call Us at 1800-000-0000'),
                },
              ],
            },
          ]}
        >
        <Modal onClose={()=>this.setState({open:false})} title="Why travel with us?" message={'We have been in the travel industry for over 30 years; we know all vacations are not the same. With the guidance of our global travel experts and first-hand experience, we are able to customize every aspect of your vacation.  We create travel packages that exceeds our clients’ expectations and we have been doing it for over three decades! We invite you to discover what you’ve been missing. These are some of the difference that makes Explore unique.'} open={this.state.open} />
        {this.state.home?
          <Home/>:
          <Prices/>
        }
       


        <FooterHelp>
          Learn more about our{' '}
          <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
            Terms & Conditons
          </Link>
        </FooterHelp>

      </Page>
    );
  }
}
 




export default Index;
