import { NavLink } from "react-router-dom"
import { Button, Card, Form } from "react-bootstrap"
import { useEffect } from "react";





const Subscribe = () => {
  
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
    <>

        <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-lg-5">

                    <Card
                        bg="dark"
                        key={'dark'}
                        text={'white'}
                        className="mb-2 shadow-lg border-0 rounded-lg mt-5"
                    >
                        <Card.Header>
                            <h3 className="text-center font-weight-mute my-4">SUBSCRIBE</h3>
                        </Card.Header>

                        <Card.Body>
                            <Form className="text-black">
                                <Form.FloatingLabel
                                    controlId="email"
                                    label="Enter Your Email"
                                    className="mb-3"
                                >
                                    <Form.Control 
                                        
                                        type="email" 
                                        name="email"
                                        placeholder="name@example.com"
                                        size="sm"
                                        
                                    />
                                    
                                </Form.FloatingLabel>
                                <span className="text-danger">
                                  
                                </span>

                               
                                <span className="text-danger"></span>

                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                    
                                    
                                    <Button size="md" variant="secondary" type="submit" >
                                        Subscribe
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    </>)
}

export default Subscribe