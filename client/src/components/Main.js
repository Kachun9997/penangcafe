import React, { Component } from 'react';
import cafe from './cafe.jpg';
import header from './header.jpg';
import menu from './menu.jpg';
import './Main.css';


class Main extends Component {

  render() {
    return (

      <div>

      <div className="bgimg w3-display-container w3-center w3-center w3-grayscale-min" id="form">

        <div className="jumbotron text-center">
          <h1>Home Page</h1>
          <p>Sweet Home</p>
        </div>
          <img src={header}  className="w3-margin" alt="img" width="800" height="500" />

          <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
            <span className="w3-tag">For Searching places of Interest</span>
          </div>
          <div className="w3-display-middle w3-center">
            <span className="w3-text-white ">the Cafe</span>
          </div>

          <div className="w3-display-bottomright w3-center w3-padding-large">
            <span className="w3-text-black">15 Adr street, 5015</span>
          </div>
        </div>

          <div className="w3-sand w3-grayscale w3-large" >

            <div className="w3-content" max-width="700px">
              <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">ABOUT THE CAFE</span></h5>
                  <p>This website is to let user find the nearby cafe. User just need to insert the address , enter the cafe name and you can start search the nearby cafe of the address that had enter.</p>
                  <p>In addition, we has a suggestion list at below. If you are a fresh customer to the cafe, you can order the drinks that had been written. The description has well explained to the customer. Hope you guys to enjoy it.</p>
                      <div className="w3-panel w3-leftbar w3-light-grey">
                          <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
                            <p>Chef, Coffeeist and Owner: Liam Brown</p>
                      </div>


          <img src={cafe}  className="w3-margin-top" alt="img" width="800" height="400"/>

          <p><strong>Opening hours: </strong> 24 hr</p>
          <p><strong>Address:</strong> 15 Adr street, 5015, NY</p>
          </div>
              </div>




        <div className="w3-content">

          <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">Recommended MENU</span></h5>

          <div className="w3-row w3-center w3-card w3-padding">

              <div className="w3-col s6 tablink">Eat</div>

          </div>

          <div id="Eat" className="w3-content w3-padding-48 ">
            <h5>Bread Basket</h5>
            <p className="w3-text-grey">Assortment of fresh baked fruit breads and muffins</p>

            <h5>Honey Almond Granola with Fruits</h5>
            <p className="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates</p>

            <h5>Belgian Waffle</h5>
            <p className="w3-text-grey">Vanilla flavored batter with malted flour</p>

            <h5>Scrambled eggs</h5>
            <p className="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions</p>

            <h5>Blueberry Pancakes</h5>
            <p className="w3-text-grey">With syrup, butter and lots of berries</p>
          </div>

          <div className="w3-row w3-center w3-card w3-padding">
              <div className="w3-col s6 tablink">Drink</div>
          </div>

          <div id="Drinks" className="w3-content w3-padding-48 ">
            <h5>Americano</h5>
            <p className="w3-text-grey">A shot or two of espresso with hot water added</p>

            <h5>Cappuccino</h5>
            <p className="w3-text-grey">Espresso with a little bit of steamed milk topped with a lot of foam</p>

            <h5>Mocha</h5>
            <p className="w3-text-grey">Espresso with steamed milk and chocolate (you can add whipped cream as well!)</p>

            <h5>Espresso</h5>
            <p className="w3-text-grey">Coffee brewed by forcing a small amount of nearly boiling water under pressure through finely ground beans.</p>

            <h5>Soda</h5>
            <p className="w3-text-grey">Coke, Sprite, Fanta, etc.</p>
          </div>
                          <img src={menu}  width="100%" margin-top="32px" / >
          </div>



      <div className="w3-center w3-light-grey w3-padding-48 w3-large">
        <p>Powered by <a  title="W3.CSS" target="_blank" className="w3-hover-text-green">Cafe Tail</a></p>
      </div>

        </div>


    );
  }
}

export default Main;
