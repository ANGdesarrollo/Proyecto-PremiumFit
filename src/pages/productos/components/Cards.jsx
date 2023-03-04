import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Cards = ( { img, description, title, icon } ) => {
    return (
        <Card style={ { width: '15rem' } }>
            <Card.Img variant="top" src={ img }/>
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{ title }</Card.Title>
                <Card.Text className="description-card">
                    { description }
                </Card.Text>
                <div className="button-catalogo">
                    <button className="btn"><a href="#">Catalogo!</a></button>
                </div>
            </Card.Body>
        </Card>
    );
}
