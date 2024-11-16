import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';

function Blogs() {
  const navigate=useNavigate()
        const handleRequestdemo=()=>{
            navigate('/contactus')
        }
  return (
    <div>
     <Helmet>
     <meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="description" content="Discover how AI is revolutionizing the logistics industry"/>
<meta name="keywords" content="The Future of AI in Logistics, article, blog, content, news"/>
<meta name="author" content="Your Company Name"/>

<meta property="og:title" content="The Future of AI in Logistics"/>
<meta property="og:description" content="Discover how AI is revolutionizing the logistics industry"/>
<meta property="og:image" content="https://example.com/images/future-ai-logistics.jpg"/>
<meta property="og:url" content="https://example.com/articles/future-of-ai-in-logistics"/>
<meta property="og:type" content="article"/>

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="The Future of AI in Logistics"/>
<meta name="twitter:description" content="Discover how AI is revolutionizing the logistics industry"/>
<meta name="twitter:image" content="https://example.com/images/future-ai-logistics.jpg"/>

<title>The Future of AI in Logistics</title>

     </Helmet>
      <div className="starting-picklistgeneration">
        {/* <h1 className="gradient-text">Blogs
    <br /></h1> */}
        <h3 className="gradient-text">
          Stay Ahead with Technology & Information{" "}
        </h3>

        <div className="aboutpage-subtitle">
          <h6 className="gradient-text-h6">BLOGS</h6>
        </div>
      </div>

    
          <Container className="py-5 " >
            <Row>
              <Col lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img variant="top" src="../Assets/blog1.jpg" />
                  <Card.Body>
                    <Card.Title>
                      Virtual Inventory An“All-Win And None-Loose" Solution
                    </Card.Title>
                    <Card.Text>
                      Virtual inventory also allows distributors and fulfilment
                      houses to ship goods to retailers direct from stock
                      regardless of stock is held in a retail store.
                    </Card.Text>

                    <a
                      href="http://blogs.nacresys.com/inventory.php"
                      class="article-read-more"
                    >
                      CONTINUE READING
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="../Assets/blog2.jpg"
                    style={{ height: "29vh" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      Agility in Consumer Business Processes
                    </Card.Title>
                    <Card.Text>
                      Alpha, beta, Gamma, Delta, Omicron and IHQ to name a few
                      of the COVID -19 variants that have visited the population
                      on the planet.
                    </Card.Text>
                    <a
                      href="http://blogs.nacresys.com/improve-business.php"
                      class="article-read-more"
                    >
                      CONTINUE READING
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="../Assets/blog3.jpg"
                    style={{ height: "29vh" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      Consistency, automation, optimization…. next what?
                    </Card.Title>
                    <Card.Text>
                      Induction of computers into business processes started
                      with the objective of eliminating of human errors which
                      occurred in transactional processes.
                    </Card.Text>
                    <a
                      href="http://blogs.nacresys.com/improve-business.php"
                      class="article-read-more"
                    >
                      CONTINUE READING
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="../Assets/blog4.jpg"
                    style={{ height: "29vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Covid Impact In Retail Industry</Card.Title>
                    <Card.Text>
                      Covid 19 has been teasing our ability to resolve issues.
                      Across the globe more than 10 million
                      (source:https://covid19.who.int)people have been impacted.
                      There is no sign of it rescinding. Few countries are
                      reporting second wave.
                    </Card.Text>

                    <a
                      href="http://blogs.nacresys.com/improve-business.php"
                      class="article-read-more"
                    >
                      CONTINUE READING
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="../Assets/blog6.png"
                    style={{ height: "29vh" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      Critically of Fulfillment Process for the Success of
                      Future Warehouse Business
                    </Card.Title>
                    <Card.Text>
                      In the rapidly evolving landscape of consumer buying
                      behaviour expanding exponentially. A study mentions that
                      58% of consumers online expect same day deliveries..
                    </Card.Text>
                    <a
                      href="http://blogs.nacresys.com/index_count.php"
                      class="article-read-more"
                    >
                      CONTINUE READING
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="../Assets/blog3.jpg"
                    style={{ height: "29vh" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      Staying Wanted- The Funtamental Quest
                    </Card.Title>
                    <Card.Text>
                      In a rapidly evolving world, staying wanted and relevant
                      is a fundamental pursuit, The quest to remain sought after
                      and meaningful is driven by the need to adapt, grow, and
                      thrive amidst constant change.
                    </Card.Text>
                    <a
                      href="http://blogs.nacresys.com/improve-business.php"
                      class="article-read-more"
                    >
                      CONTINUE READING
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="../Assets/eco.jpg"
                    style={{ height: "29vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Dynamic PutAway Strategy</Card.Title>
                    <Card.Text>
                      Put-away refers to the process of moving received goods
                      from the receiving area to their designated storage
                      location within a warehouse or distribution center.
                    </Card.Text>

                    <a
                      href="http://blogs.nacresys.com/index_count.php"
                      class="article-read-more"
                    >
                      CONTINUE READING
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="../Assets/blog8.jpg"
                    style={{ height: "29vh" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      Enhancing Efficiency with AMRs and Conveyors{" "}
                    </Card.Title>
                    <Card.Text>
                      Leading this transformation are three key solutions:
                      Autonomous Mobile Robots (AMRs), 4-Way Shuttle AS/RS, and
                      Conveyor Systems.
                    </Card.Text>
                    <a
                      href="http://blogs.nacresys.com/index_count.php"
                      class="article-read-more"
                    >
                      CONTINUE READING
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="../Assets/blog3.jpg"
                    style={{ height: "29vh" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      AI-Optimized Isomorphic & Hash Order Grouping for
                      Efficient Picks
                    </Card.Title>
                    <Card.Text>
                      Harnessing AI for Isomorphic and Hash methods of Order
                      Grouping and Item Location-Based Pick Sequencing
                    </Card.Text>
                    <a
                      href="http://blogs.nacresys.com/improve-business.php"
                      class="article-read-more"
                    >
                      CONTINUE READING
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
    
     
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<button className="custom-btn btn-5">
            <span onClick={handleRequestdemo}>Request Demo</span>
          </button>
</div>
<div style={{height:'4vh'}}></div>
      <Footer />
    </div>
  );
}

export default Blogs;
