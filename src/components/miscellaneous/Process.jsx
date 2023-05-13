import React from 'react'
import Separator from '../miscellaneous/Separator'

const DisplayProcess = () => {
  return (
    <>
    <section className="section exp">
        <div className="container">
            <div className="thmtitle">
                <h3>About Writing-Impact</h3>
                <Separator />
                <p>A Content Writing Company You Can Count On</p>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="exp__box">
                        <div className="exp__box-icon">
                            <span class="material-symbols-outlined">business_center</span>
                        </div>
                        <h3>1M+</h3>
                        <p>Content Pieces Delivered</p>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="exp__box">
                        <div className="exp__box-icon">
                            <span class="material-symbols-outlined">groups</span>
                        </div>
                        <h3>200+</h3>
                        <p>Team Members</p>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="exp__box">
                        <div className="exp__box-icon">
                            <span class="material-symbols-outlined">person</span>
                        </div>
                        <h3>5000+</h3>
                        <p>Delighted Clients</p>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="exp__box">
                        <div className="exp__box-icon">
                            <span class="material-symbols-outlined">public</span>
                        </div>
                        <h3>100+</h3>
                        <p>Global Clientele</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default DisplayProcess
