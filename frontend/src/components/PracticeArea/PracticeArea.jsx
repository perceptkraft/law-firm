import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import CivilAndCriminal from '../../images/CivilCriminalLitigationLaws.png';
import LabourEmployment from '../../images/LabourEmployment.png';
import Compliances from '../../images/Compliances.png';
import StructuringNegotiationOfContracts from '../../images/StructuringNegotiationOfContracts.png';
import DisputeResolution from '../../images/DisputeResolution.png';
import IntellectualPropertyInformationTechnology from '../../images/IntellectualPropertyInformationTechnology.png';
import InsolvencyBankruptcy from '../../images/InsolvencyBankruptcy.png';
import ComplianceBriberyAnticorruptionLaws from '../../images/ComplianceBriberyAnticorruptionLaws.png';
import JointVentures from '../../images/JointVentures.png';
import RealEstate from '../../images/RealEstate.png';
import IncomeTaxGST from '../../images/IncomeTaxGST.png';
import CompetitionLaw from '../../images/CompetitionLaw.png';
import MatrimonialDisputes from '../../images/MatrimonialDisputes.png';
import Litigation from '../../images/Litigation.png';
import Trademark from '../../images/Trademark.png';
import MatterRelatedToMunicipalCorporation from '../../images/MatterRelatedToMunicipalCorporation.png';
import TenderContracts from '../../images/TenderContracts.png';
import BuildingPermissions from '../../images/BuildingPermissions.png';

const PracticeArea = () => {
    return (
        <>
            <h5 className='d-flex justify-content-center h1 mt-5'>Areas OF Practice</h5>

            <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />

            <div>
                <Carousel style={{ backgroundColor: 'black', color: 'white', height: '500px', marginTop: '50px', textAlign: 'center' }}>
                    <Carousel.Item >
                        <div class="row row-cols-1 row-cols-md-6 g-1 mt-5">
                            <div class="col">
                                <div class="card h-100">
                                    <img src={CivilAndCriminal} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Civil & Criminal Litigation Laws</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={LabourEmployment} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Labour & Employment</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={Compliances} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Compliances</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={StructuringNegotiationOfContracts} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Structuring & Negotiation of Contracts</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={DisputeResolution} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Dispute Resolution</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={IntellectualPropertyInformationTechnology} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Intellectual Property & Information Technology</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="row row-cols-1 row-cols-md-6 g-1 mt-5">
                            <div class="col">
                                <div class="card h-100">
                                    <img src={InsolvencyBankruptcy} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Insolvency & Bankruptcy</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={ComplianceBriberyAnticorruptionLaws} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Compliance, Bribery & Anti- corruption Laws</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={JointVentures} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Joint Ventures</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={RealEstate} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Real Estate</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={IncomeTaxGST} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Income Tax and GST</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={CompetitionLaw} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Competition Law</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="row row-cols-1 row-cols-md-6 g-1 mt-5">
                            <div class="col">
                                <div class="card h-100">
                                    <img src={MatrimonialDisputes} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Matrimonial Disputes</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={Litigation} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Litigation</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={Trademark} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Trademark</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={MatterRelatedToMunicipalCorporation} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Matter related to Municipal Corporation</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={TenderContracts} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Tender Contracts</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={BuildingPermissions} alt='' />
                                    <div class="card-body">
                                        <h5 class="card-title">Building Permissions</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default PracticeArea