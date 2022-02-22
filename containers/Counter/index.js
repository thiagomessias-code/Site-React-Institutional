import React, { Component } from 'react';
import CountUp from 'react-countup'

class Counter extends Component {
    render() {
        return (
            <div className='counter-section'>
                <div className='row text-center'>
                    <div className='col-md-3 counter-box'>
                        <div className='icon-box'><i className='fa fa-briefcase'></i></div>
                        <CountUp  start={0} end={100} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <p  className='counter' ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <p>PROJECTS</p>
                    </div>
                    <div className='col-md-3 counter-box'>
                        <div className='icon-box'><i class="fa fa-users"></i></div>
                        <CountUp  start={0} end={100} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <p  className='counter' ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>

                        <p>Employees</p>
                    </div>
                    <div className='col-md-3 counter-box'>
                        <div className='icon-box'><i className='fa fa-building'></i></div>
                        <CountUp  start={0} end={100} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <p  className='counter' ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <p>Company</p>
                    </div>
                    <div className='col-md-3 counter-box'>
                        <div className='icon-box'><i class="fa fa-thumbs-up"></i></div>
                        <CountUp  start={0} end={100} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <p  className='counter' ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <p>Partiners</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter