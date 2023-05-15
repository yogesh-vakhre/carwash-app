import React from "react";

const BoookingContactForm = (props) => {
  return (
    <>
      <div class="row">
        <div class="col-lg-12">
          <div class="contact-wrapper">
            <form action="/#" class="contact-form">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form_group">
                    <input
                      type="text"
                      class="form_control"
                      placeholder="Full Name"
                      name="name"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form_group">
                    <input
                      type="text"
                      class="form_control"
                      placeholder="Vehicl Model"
                      name="model"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form_group">
                    <input
                      type="email"
                      class="form_control"
                      placeholder="Your Email"
                      name="email"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form_group">
                    <input
                      type="text"
                      class="form_control"
                      placeholder="Phone"
                      name="phone"
                    />
                  </div>
                </div>
                <div class="col-lg-6 mb-25">
                  <div class="form_group">
                    <label>Choose Service</label>

                    <select class="form-control" name="service">
                      <option value="Select Service">Select Service</option>
                      <option value="OPTI COAT">OPTI COAT</option>
                      <option value="CAR DETAILING">CAR DETAILING</option>
                      <option value="CAR POLISH">CAR POLISH</option>
                      <option value="CAR WASHING">CAR WASHING</option>
                      <option value="ECO FRIENDLY">ECO FRIENDLY</option>
                      <option value="EXTERIOR CLEANING">
                        EXTERIOR CLEANING
                      </option>
                    </select>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form_group">
                    <textarea
                      class="form_control"
                      placeholder="Message"
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form_button">
                    <button class="main-btn">Confirm Bokking</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoookingContactForm;
