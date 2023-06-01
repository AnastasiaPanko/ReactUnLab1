import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import forest1 from '../assets/forest1.jpg';
import forest2 from '../assets/forest2.jpg';
import forest3 from '../assets/forest3.jpg';
import forest4 from '../assets/forest4.jpg';

export default class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className='d-block w-100' src={forest1} alt='forest' />
                    <Carousel.Caption>
                        <h3>Forest</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={forest2} alt='forest' />
                    <Carousel.Caption>
                        <h3>Forest</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={forest3} alt='forest' />
                    <Carousel.Caption>
                        <h3>Forest</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' src={forest4} alt='forest' />
                    <Carousel.Caption>
                        <h3>Forest</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
