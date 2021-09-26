import React, { Component } from 'react'
import './form.css'

export class Form extends Component {  
    render() {
        return (
          <div className="background">
            <div className="container">
              <div className="screen">
                <div className="screen-header">
                  <div className="screen-header-left">
                    <div className="screen-header-button close" onClick={() => this.props.handleClose()}></div>
                  </div>
                  <div className="screen-header-right">
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                    <div className="screen-header-ellipsis"></div>
                  </div>
                </div>
                <div className="screen-body">
                  <div className="screen-body-item left">
                    <div className="app-title">
                      <span>CONTACT</span>
                      <span>ME</span>
                    </div>
                    <div className="app-contact">CONTACT INFO : 1(619)861-3672</div>
                  </div>
                  <div className="screen-body-item">
                    <form className="app-form" action="">
                      <div className="app-form-group">
                        <input className="app-form-control" id='name' name='name' placeholder="NAME" />
                      </div>
                      <div className="app-form-group">
                        <input className="app-form-control" id='email' name='email' placeholder="EMAIL" />
                      </div>
                      <div className="app-form-group">
                        <input className="app-form-control"id='contact' name='contact' placeholder="CONTACT NO" />
                      </div>
                      <div className="app-form-group message">
                        <input className="app-form-control" id='message' name='message' placeholder="MESSAGE" />
                      </div>
                      <div className="app-form-group buttons">
                        <button className="app-form-button cancel" onClick={() => this.props.handleClose()}>CANCEL</button>

                        <button type='submit' className="app-form-button send">SEND</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Form
