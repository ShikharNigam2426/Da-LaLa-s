import React from 'react';
import styled from 'styled-components';
import TopCategory from './dataArrays/TopCategory';
import { Link } from 'react-router-dom';

const TopCategories = () => {
    return (
        <CategoryComponent className='pb-5 container-fluid'>
            <h1 className='d-flex justify-content-center topHeading'>Top Categories to Order</h1>
            <div className="row px-5">
                {
                    TopCategory.map((element, index) => {
                        return (
                            <div className="col-lg-3 col-md-3 px-2 col-sm-6 col-6 d-flex flex-column align-items-center justify-content-center">
                                <img className='CategoryImage m-3' src={element.image} alt="" />
                                <h3 className='CategoryText'>{element.Category}</h3>
                            </div>
                        )
                    })
                }
            </div>
            <Link to={`/Menu`}>
                <button className="btn MenuButton">Menu</button>
            </Link>
        </CategoryComponent>
    );
};

const CategoryComponent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 13vh;
    align-items: center;

    h1 {
        font-weight: 700;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }

    .CategoryImage{
        width: 80%;
        padding-right: 16px;
    }

    .CategoryText{
        font-size: 20px;
        font-weight: bolder;
        margin: 0px;
        padding: 0px;
    }

    .MenuButton{
        width: 150px;
        margin-top: 3rem;
        background-color: orange;
        color: white;
        border-radius: 10px;
        transition: all ease 0.3s;
    }

    .CategoryImage{
            border-radius: 15%;
        width: 80%;
        padding-right: 0px;
    }

    .MenuButton:hover{
        background-color: white !important;
        border: 1.3px solid orange;
        color: black;
    }

    @media (max-width: 768px) {
        .topHeading{
            font-size: 3vmax;
        }

        h1{
            margin-top: 1rem !important;
            margin-bottom: 1rem !important;
        }

        .CategoryImage{
            border-radius: 15%;
        width: 80%;
        padding-right: 0px;
    }
        .btn{
            border-radius: 5px;
        }

        .CategoryText{
        font-size: 16px;
        font-weight: bolder;
        margin: 0px;
        padding: 0px;

        @media screen {
            font-size: 14px;   
        }
    }
    }
`;

export default TopCategories;
