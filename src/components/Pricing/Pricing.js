import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDumbbell, faCheck } from '@fortawesome/free-solid-svg-icons'

import './Pricing.css';
import { Link } from 'react-router-dom';
const Pricing = () => {
    return (
        <div className="pricing">
            <h2 className="text-white">PRICING</h2>
            <Row xs={1} md={3} className="g-5 bg-black m-3">
                 <Col>
                   <Card className="card">
                   <span className="icon">{<FontAwesomeIcon icon={faDumbbell} />}</span>
                     <Card.Body>
                       <h1 className="text-white">MONTH</h1>
                       <div>
                           <p className="month">$30/M</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Free Riding</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Unlimited Equipments</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Personal Trainer</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Weight Lossing Classes</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Month tob month</p>
                       </div>
                     
                     </Card.Body>
                     
                   </Card>
                 </Col>
                 <Col>
                   <Card>
                   <span className="icon">{<FontAwesomeIcon icon={faDumbbell} />}</span>
                     <Card.Body>
                     <h1 className="text-white">MONTH</h1>
                       <div>
                           <p className="month">$30/M</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Free Riding</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Unlimited Equipments</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Personal Trainer</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Weight Lossing Classes</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Month tob month</p>
                       </div>
                    
                     </Card.Body>
                   </Card>
                 </Col>
                 <Col>
                   <Card>
                   <span className="icon">{<FontAwesomeIcon icon={faDumbbell} />}</span>
                     <Card.Body>
                     <h1 className="text-white">MONTH</h1>
                       <div>
                           <p className="month">$30/M</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Free Riding</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Unlimited Equipments</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Personal Trainer</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Weight Lossing Classes</p>
                           <p><span className="check-icon">{<FontAwesomeIcon icon={faCheck} />}</span>Month tob month</p>
                       </div>
                     
                     </Card.Body>
                   </Card>
                 </Col>
            </Row>
 
        </div>
    );
};

export default Pricing;