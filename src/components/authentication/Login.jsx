import React from 'react'

const DisplayLogin = () => {
  return (
    <div className='bannerAuth__form'>
      <div className="bannerAuth__form-wrapper">
        <form action="/">
            <div className="bannerAuth__form-field name">
                <label htmlFor="name" className="bannerAuth__form-label" placeholder='Enter your name'>
                    <span>Name</span>
                </label>
                <legend className='bannerAuth__form-legend'></legend>
                <div className="bannerAuth__form-inputBox">
                    <input type="text" name="name" id="baf__name" placeholder inputMode='text' />
                </div>
            </div>
            <div className="bannerAuth__form-field email">
                <label htmlFor="email" className="bannerAuth__form-label" placeholder='Enter your email'>
                    <span>Email&nbsp;</span>
                    <span style={{ color: 'red' }}>*</span>
                </label>
                <legend className='bannerAuth__form-legend'></legend>
                <div className="bannerAuth__form-inputBox">
                    <input type="email" name="email" id="baf__email" placeholder inputMode='email' autoComplete='email' />
                </div>
            </div>
            <div className="bannerAuth__form-field phone">
                <label htmlFor="phone" className="bannerAuth__form-label" placeholder='Enter your phone number'>
                    <span>Phone Number</span>
                    <span style={{ color: 'red' }}>*</span>
                </label>
                <legend className='bannerAuth__form-legend'></legend>
                <div className="bannerAuth__form-inputBox">
                    <input type="tel" name="phone" id="baf__tel" placeholder inputMode='tel' autoComplete='tel' />
                </div>
            </div>
            <div className="bannerAuth__form-field">
                <label htmlFor="services" className="bannerAuth__form-label" placeholder='Enter your Interested Services'>
                    <span>Interested Services</span>
                </label>
                <legend className='bannerAuth__form-legend'></legend>
                <div className="bannerAuth__form-inputBox">
                    <select name="services" id="baf__services">
                        <option value disabled style={{ color: '#bfbfbf' }}>Please Select</option>
                        <option value="text">Text</option>
                        <option value="graphic">Graphic</option>
                        <option value="translations">Translations</option>
                        <option value="transcriptions">Transcriptions</option>
                        <option value="audio">Audio</option>
                        <option value="video">Video</option>
                    </select>
                </div>
            </div>
            <div className="bannerAuth__form-field comments">
                <label htmlFor="comment" className="bannerAuth__form-label" placeholder='Enter your comments'>
                    <span>Comments</span>
                </label>
                <legend className='bannerAuth__form-legend'></legend>
                <div className="bannerAuth__form-inputBox">
                    <textarea name="comment" id="baf__comment"></textarea>
                </div>
            </div>
            <div className="bannerAuth__form-submit">
                <div className="bannerAuth__form-desc"></div>
                <div className="bannerAuth__form-action">
                    <input type="submit" value="submit" />
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default DisplayLogin
