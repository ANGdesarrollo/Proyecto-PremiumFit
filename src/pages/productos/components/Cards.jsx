import Card from 'react-bootstrap/Card';

export const Cards = ( { img, description, title, icon } ) => {
    return (
        <Card className="mt-1" style={ { width: '15rem' } }>
            <Card.Img variant="top" src={ img }/>
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{ title }</Card.Title>
                <Card.Text className="description-card">
                    { description }
                </Card.Text>
                <div className="button-catalogo">
                    <button className="btn"><a target="_blank" href="https://docs.google.com/spreadsheets/d/1vduyKxNg_qynHHnRbBOo4sbdNIcWtvO-X3yG1GXYetU/edit?usp=sharing">Catalogo!</a></button>
                </div>
            </Card.Body>
        </Card>
    );
}
