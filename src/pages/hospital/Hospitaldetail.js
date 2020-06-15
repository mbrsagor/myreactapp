import React, { Component } from 'react';
import HospitalService from '../../services/HospitalService';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Sidebar from '../../components/common/Sidebar';

const hospital_service = new HospitalService();

class Hospitaldetail extends Component {

    state = {
        hospital: {}
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        hospital_service.getHospital(params.id)
            .then(response => {
                this.setState({
                    hospital: response
                });
            }).catch(error => console.log(error))
    }

    render() {
        return (
            <>
                <Header />
                <Row className="fix_height m-0">
                    <Col className="sidebar_bg_color p-0" lg={2}>
                        <Sidebar />
                    </Col>
                    <Col className="p-0" lg={10}>
                        <div className="page_title">
                            <div className="card">
                                <Row className="p-0 m-0">
                                    <Col md={8}>
                                        <div className="card-body">{this.state.hospital.hospital_name} detail</div>
                                    </Col>
                                    <Col className="text-right" md={4}>
                                        <div className="card-body">
                                            <a href="/">Homepage</a> <FeatherIcon icon="chevrons-right" /> Hospital Detail page
                                </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="page-container m-2 p-2">
                            <Row>
                                <Col md={12}>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Hospital Name
                                    <span className="badge badge-info badge-pill">{this.state.hospital.hospital_name}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Location
                                    <span className="badge badge-info badge-pill">{this.state.hospital.location}</span>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </>
        );
    }
}

export default Hospitaldetail;