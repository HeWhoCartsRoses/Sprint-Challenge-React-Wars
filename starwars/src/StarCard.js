import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
const StarCard = props => {
    console.log(props.picture.name)
    return (
        <div>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody>
                    <CardTitle>Name: {props.picture.name}</CardTitle>
                    <CardSubtitle>Height: {props.picture.height}</CardSubtitle>
                    <CardSubtitle>Gender: {props.picture.gender}</CardSubtitle>
                    <CardSubtitle>Eye Color: {props.picture.eye_color}</CardSubtitle>
                    <CardSubtitle>Hair Color: {props.picture.hair_color}</CardSubtitle>
                    <CardSubtitle>Born In : {props.picture.birth_year}</CardSubtitle>
                    <CardSubtitle>Weight: {props.picture.mass}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
};
export default StarCard;