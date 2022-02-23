import React, { Component } from 'react';
import CountUp from 'react-countup'

class Counter extends Component {
    render() {
        return (
            <div class="counters section bg-defult">
                <div class="container">
                    <div class="row item-box">
                        <div class="col-sm-6 col-md-6 col-lg-3">
                            <div class="facts-item">
                                <div class="icon">
                                <i class="fa fa-briefcase"></i>
                                </div>
                                <div class="fact-count">
                                    <CountUp start={0} end={100} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <h3><span className='counter' ref={countUpRef} />%</h3>
                                            </div>
                                        )}
                                    </CountUp>
                                    <h4>Projektr</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3">
                            <div class="facts-item">
                                <div class="icon text-center">
                                <i class="fa fa-users"></i>
                                </div>
                                <div class="fact-count">
                                <CountUp start={0} end={100} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <h3><span className='counter' ref={countUpRef} /></h3>
                                            </div>
                                        )}
                                    </CountUp>
                                    <h4>ANSTÄLLDA</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3">
                            <div class="facts-item">
                                <div class="icon">
                                    <i class="fa fa-bolt"></i>
                                </div>
                                <div class="fact-count">
                                <CountUp start={0} end={100} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <h3>+<span className='counter' ref={countUpRef} /> km</h3>
                                            </div>
                                        )}
                                    </CountUp>
                                    <h4>kablage</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-3">
                            <div class="facts-item">
                                <div class="icon">
                                    <i class="fa fa-handshake"></i>
                                </div>
                                <div class="fact-count">
                                <CountUp start={0} end={100} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <h3><span className='counter' ref={countUpRef} /></h3>
                                            </div>
                                        )}
                                    </CountUp>
                                    <h4>PARTNERS</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter