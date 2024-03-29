import "../../assets/styles/style.scss";

export const Agree = () => {
  return (
    <div className="form-section-wrap">
      <div className="form-line">
        <div className="form-input-wrap-full">
          <div
            style={{
              fontSize: "16px",
              fontFamily: "sans-serif",
              color: "whitesmoke",
              margin: "0px 0px 38px 2px",
              lineHeight: 1.5,
            }}
          >
            By submitting this application you agree: 1) The information
            provided herein is complete and accurate. Providing incomplete
            and/or false information could result in the rejection of the
            application. 2) Submission of this application does not guarantee a
            room lease, which is reserved only upon signing of a completed lease
            agreement by all parties. Additionally, no other agreements, either
            written or oral, are binding on applicant, owner or owner's agents
            until the completed lease agreement is signed by all parties. 3)
            Additional information may be required in order to process your
            application. Our management team will contact you upon receipt of
            this online application to obtain any additional information
            necessary to complete the processing of your application.
          </div>
        </div>
      </div>
      <div className="form-label-top">Confirm</div>
      <div className="form-line">
        <div className="form-input-wrap-full">
          <input id="agree" type="checkbox" name="agree" value="I Agree" />
          <label id="lavel_agree" htmlFor="agree" className="form-label-top">
            {" "}
            I Agree{" "}
          </label>
        </div>
      </div>
    </div>
  );
};
