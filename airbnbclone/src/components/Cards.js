import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/Hotel.css';
function Cards({data}) {
  console.log(data);
  return (
    <div className="cards">
       {
        data.map((curElem)=>{
          return(<>
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={curElem.img} style={{height:"13rem"}}/>
              <Card.Body>
                
                   <Card.Title> {curElem.title}</Card.Title>
                   <Card.Text>{curElem.desc}</Card.Text>
               
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </>)
        })
       }
    </div>
  );
}

export default Cards;