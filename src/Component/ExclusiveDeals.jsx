import React from 'react'
import styled from 'styled-components'
import Deals from './dataArrays/ExclusiveDeals';

const ExclusiveDeals = () => {
  return (
    <ExclusiveComponent>
      <h1 className='my-5'>Exclusive Deal for you</h1>

      <div className="row exclusiveImages">
        <div className="col-lg-8 col-md-8 col-sm-12 col-12 columns">
          <img src={Deals[0].image} alt="" />
        </div>
        <div className="col-4 columns notInMobile">
          <div className="row rightDeals"><img src={Deals[1].image} alt="" /></div>
          <div className="row rightDeals"><img src={Deals[0].image} alt="" /></div>
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
    }

    h1{
      font-weight: 700;
    }
    .exclusiveImages{
      height: 60vh;
      width: 80%;
    }

    .rightDeals{
      height: 50%;
    }

    @media (max-width: 768px) {
      h1{
        font-size: 3vmax !important;
      }

      .exclusiveImages{
        width: 95%;
      }

      .notInMobile{
        display: none;
      }
    }
`;

export default ExclusiveDeals