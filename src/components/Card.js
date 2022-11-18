import React from 'react';
import { Card } from 'antd';
import '../App.css';

const { Meta } = Card;


const CardItem = (props) => {
    let items = props?.data;
    return (
        items && items.map((el) => {
            return (
                <Card
                    style={{ width: 300, margin: "10px" }}
                    cover={
                        <img
                            alt="example"
                            src={el?.img}
                        />
                    }
                >
                    <Meta
                        title={el?.title}
                        description={el?.desc}
                    />
                </Card>
            );
        })
    );
}

export default CardItem;