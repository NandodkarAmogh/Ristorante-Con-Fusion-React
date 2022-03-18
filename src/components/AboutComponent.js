import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

function About(props) {

    const RenderLeader = ({leader}) => {
        return (
            <div key={leader.id} className="col-12 mt-5" style={{background:'#F7F6F2', borderRadius: '10px'}}>
                <Media tag= 'li'>
                    <Media left middle>
                        <Media style={{borderRadius: '50%',marginTop: '20px'}} object src= {leader.image} alt={leader.name} />
                    </Media>
                    <Media body className='ml-5'>
                        <Media heading>{leader.name}</Media>
                        <h6>{leader.designation}</h6>
                        <p>{leader.description}</p>
                    </Media>
                </Media>
            </div>
        )
    }

    const leaders = props.leaders.map((leader) => {
        return (
            <RenderLeader leader={leader}></RenderLeader>
        );
    });
    console.log(leaders)
    return(
        <div className='background'>
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>About Us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-6">
                        <h2>Our History</h2>
                        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                    </div>
                    <div className="col-12 col-md-5">
                        <Card >
                            <CardHeader style={{background: '#064635', color: 'white', border: 'none'}}>Facts At a Glance</CardHeader>
                            <CardBody style={{background: '#EFEFEF', color: 'black', border: 'none'}}>
                                <dl className="row p-1">
                                    <dt className="col-6">Started</dt>
                                    <dd className="col-6">3 Feb. 2013</dd>
                                    <dt className="col-6">Major Stake Holder</dt>
                                    <dd className="col-6">HK Fine Foods Inc.</dd>
                                    <dt className="col-6">Last Year's Turnover</dt>
                                    <dd className="col-6">$1,250,375</dd>
                                    <dt className="col-6">Employees</dt>
                                    <dd className="col-6">40</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card style={{background: '#F0BB62', color: 'white', border: 'none', borderRadius: '10px'}}>
                            <CardBody className="bg-faded" >
                                <blockquote className="blockquote">
                                    <p className="mb-0">You better cut the pizza in four pieces because
                                        I'm not hungry enough to eat six.</p>
                                    <footer className="blockquote-footer">Yogi Berra,
                                    <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                        P. Pepe, Diversion Books, 2014</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Corporate Leadership</h2>
                    </div>
                    <Slide>
                        <div className="col-12">
                            {leaders}
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
}

export default About;    