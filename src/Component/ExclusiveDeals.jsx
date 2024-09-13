import React from 'react'
import styled from 'styled-components'
import Deals from './dataArrays/ExclusiveDeals';

const ExclusiveDeals = () => {
  return (
    <ExclusiveComponent>
      <h1 className='my-5'>Exclusive Deal for you</h1>

      <div className="row exclusiveImages">
        <div className="col-8 columns">
          <img src={Deals[0].image} alt="" />
        </div>
        <div className="col-4 columns">
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
`;

export default ExclusiveDeals