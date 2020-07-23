import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    if (dish != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

function getDateValue (val) {
    const d = new Date(val);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${mo} ${da}, ${ye}`;
}

function RenderComments({commentsArray}) {
    if (commentsArray != null) {
        const comments = commentsArray.map((comment) => {
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {getDateValue(comment.date)}</p>
                </li>
            );
        });
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments}
                </ul>
            </div>
            
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

const Dishdetail = (props) => {
    
    return (
        <div className="container">
            <div className="row">                    
                    <RenderDish dish={props.dish} />
                    <RenderComments commentsArray={props.dish != null ? props.dish.comments : null} />                    
            </div>
        </div>
        
    );
    
    
}


export default Dishdetail;