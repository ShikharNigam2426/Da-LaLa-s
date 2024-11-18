import React from 'react'
import styled from 'styled-components'
import Deals from './dataArrays/ExclusiveDeals';

const ExclusiveDeals = () => {
  return (
    <ExclusiveComponent>
      <h1 className='my-4'>Our Services</h1>

      <div className="row exclusiveImages">
        <div className="col-lg-8 col-md-8 col-sm-12 col-12 d-flex align-items-center columns">
          <img className='mobileSize' src={Deals[0].image} alt="" />
        </div>
        <div className="col-lg-4 col-12 columns notInMobile">
          <div className="row rightDeals"><img src={Deals[1].image} alt="" /></div>
          <div className="row rightDeals"><img src={Deals[2].image} alt="" /></div>
        </div>
      </div>
    </ExclusiveComponent>
  )
}

const ExclusiveComponent = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: orange;

    .columns{
      height: 100%;
    }

    img{
      width: 100%;
    height: 100%;
    object-fit: fill;
    box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.2);
    }

    h1{
      font-weight: 700;
    }
    .exclusiveImages{
      height: 70vh;
      width: 70%;

      @media screen {
        width: 80% ;
      }
    }

    .rightDeals{
      height: 50%;
    }

    @media (max-width: 768px) {
      h1{
        font-size: 4vmax !important;
        color: white;
        border-bottom: 1px solid black;
      }

      .exclusiveImages{
        width: 95%;
      }

      .notInMobile{
        display: none;
      }

      img{
        height: 70%;
        /* border: 1px solid black; */
        border-radius: 10px;
        box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.2);
      }
    }
`;

export default ExclusiveDeals