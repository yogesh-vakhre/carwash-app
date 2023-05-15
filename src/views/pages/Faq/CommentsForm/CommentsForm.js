import React from "react";

const CommentsForm = (props) => {
  return (
    <>
      <div class="comments-respond mb-40">
        <h4 class="comments-heading">Ask Your Question</h4>
        <p>Implementing Infinite Scroll And Image Lazy.</p>
        <form>
          <div class="row">
            <div class="col-lg-4">
              <div class="form_group">
                <input
                  type="text"
                  class="form_control"
                  placeholder="Your Name"
                  name="name"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form_group">
                <input
                  type="email"
                  class="form_control"
                  placeholder="Your Email"
                  name="email"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form_group">
                <input
                  type="text"
                  class="form_control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form_group">
                <textarea
                  class="form_control"
                  placeholder="Messege"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form_group">
                <button class="main-btn">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentsForm;
