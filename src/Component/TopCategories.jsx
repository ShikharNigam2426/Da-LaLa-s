import React from 'react';
import styled from 'styled-components';
import TopCategory from './dataArrays/TopCategory';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory } from '../redux/category/categorySlice';

const TopCategories = () => {

    const currentMenu = useSelector((state) => state.category.category);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeRoute = async (category) => {
        console.log('category changed from: ' + currentMenu);
        dispatch(updateCategory({ category }));
        navigate(`/Menu`);
    }

    return (
        <CategoryComponent className='pb-5 container-fluid'>
            <h1 className='d-flex justify-content-center topHeading'>Top Categories to Order</h1>
            <div className="row px-5">
                {
                    TopCategory.map((element, index) => {
                        return (
                            <div onClick={() => { changeRoute(element.Category) }} className="col-lg-3 col-md-3 px-2 col-sm-6 col-6 d-flex flex-column align-items-center justify-content-center pointer">
                                <img className='CategoryImage m-3 box' src={element.image} alt="" />
                                <h3 className='CategoryText'>{element.Category}</h3>
                            </div>
                        )
                    })
                }
            </div>
            <button className="btn MenuButton" onClick={() => { changeRoute("All") }}>Menu</button>
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

    .box{
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3), 0px 6px 20px rgba(0, 0, 0, 0.19);
        cursor: pointer;
    }

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
        font-weight: 500;
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

        @media (max-width: 420px) {
            font-size: 11px;   
        }
    }
    }
`;

export default TopCategories;
