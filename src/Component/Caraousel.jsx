import React from 'react'
import styled from 'styled-components'
import './fonts.css'

const Caraousel = () => {
    return (
        <CarauselContainer>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://images.pexels.com/photos/20446397/pexels-photo-20446397/free-photo-of-top-view-of-a-meal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" />
                        <div class="carousel-caption d-md-block">
                            <h3 className='topText'><i>Flavors That Make You Go 'Mmmm...'</i></h3>
                            <h1 className='my-0 py-0 bottomText'>Da <span style={{'color': 'orange'}}>LaLa's</span></h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="./assets/image/1.avif" alt="Second slide" />
                        <div class="carousel-caption d-md-block">
                            <h2 className='bottomText'>Da <span style={{'color': 'orange',}}>LaLa's</span></h2>
                            <h5 className='my-0 py-0 topText'>Where Every Meal is a Masterpiece.</h5>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </CarauselContainer>
    )
}

const CarauselContainer = styled.div`
  position: relative;
  top: 12vh;
  height: 65vh;

  #carouselExampleIndicators{
    height: 100%;
  }

  .carousel-indicators {
    z-index: 1;
  }

  .carousel-inner {
    height: 100%;
  }

  .carousel-item > img{
    filter: brightness(0.5);
  }

  .carousel-item{
    position: relative;
    height: 100%;
  }

  /* Custom styles for text visibility */
  .carousel-caption {
    position: absolute;
    top: 40%;
    height: fit-content;
    z-index: 10;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
  }

  .carousel-item img {
    object-fit: cover; /* Ensures the image covers the container */
    height: 65vh;
    width: 100%;
  }

  .bottomText{
    font-size: 5vw;
  }

  @media (max-width: 768px){
    position: relative;
    top: 10vh;
    height: 50vh;
      .topText{
        font-size: 4vw;
      }
      .bottomText{
        font-size: 10vw;
      }
  }
`;

export default Caraousel