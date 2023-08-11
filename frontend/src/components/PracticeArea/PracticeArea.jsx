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
import Fade from 'react-reveal/Fade';

const PracticeArea = () => {
    return (
        <div id="practicearea">
            <Fade top>
                <h5 className='d-flex justify-content-center h1 mt-5'>Areas OF Practice</h5>
                <hr style={{ width: '5%', textAlign: 'center', marginLeft: '47.7%', marginTop: '1%' }} />
            </Fade>

            <div>
                <Carousel style={{ backgroundColor: 'black', color: 'white', height: '500px', marginTop: '50px', textAlign: 'center' }}>
                    <Carousel.Item >
                        <div class="row row-cols-1 row-cols-md-6 g-1 mt-5 ">
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={CivilAndCriminal} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body" className='text-cnter'>
                                        <h5 class="card-title">Civil & Criminal Litigation Laws</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={LabourEmployment} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Labour & Employment</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={Compliances} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Compliances</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={StructuringNegotiationOfContracts} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Structuring & Negotiation of Contracts</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={DisputeResolution} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Dispute Resolution</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={IntellectualPropertyInformationTechnology} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
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
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={InsolvencyBankruptcy} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Insolvency & Bankruptcy</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={ComplianceBriberyAnticorruptionLaws} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Compliance, Bribery & Anti- corruption Laws</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={JointVentures} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Joint Ventures</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={RealEstate} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Real Estate</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={IncomeTaxGST} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Income Tax and GST</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={CompetitionLaw} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
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
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={MatrimonialDisputes} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Matrimonial Disputes</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={Litigation} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Litigation</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={Trademark} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Trademark</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={MatterRelatedToMunicipalCorporation} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Matter related to Municipal Corporation</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={TenderContracts} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Tender Contracts</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <div className='border border-5mt-5 w-75 justify-content-center align-items-center ml-5 mt-5 mb-5 p-5 rounded-circle'>
                                        <img src={BuildingPermissions} alt='' className='w-25 h-100 justify-content-center align-items-center' />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Building Permissions</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    )
}

export default PracticeArea