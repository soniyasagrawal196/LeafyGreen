import { useState } from "react";
import classes from "./Contact.module.css";
import { PiPhoneCallFill } from "react-icons/pi";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const packages = ["Weekly plan", "Monthly Plan", "Half-Yearly Plan", "Yearly Plan"];

  // ✅ WHATSAPP SUBMISSION
  const handleSubmit = () => {
    if (!fullName || !phone || !email || !selectedPackage) {
      alert("Please fill all required fields.");
      return;
    }

    // 👉 YOUR WHATSAPP NUMBER HERE
    const whatsappNumber = "918999796552";  // <--- replace with your number

    const message = `
*New Booking Enquiry*
------------------------
*Full Name:* ${fullName}
*Phone:* ${phone}
*Email:* ${email}
*Notes:* ${notes || "No notes"}
*Package:* ${selectedPackage}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div classname={classes.parentContactUsBlock1}>
      <div className= {classes.logo}>
       <PiPhoneCallFill className={classes.contactlogo}/>
       
    <div className={classes.headContactUs}>Contact us</div> 
    </div>
    
  <div className={classes.parentContactUsBlock}>
       
<div className={classes.conactUsDetails}>

  <iframe
    title="This is The Fucking Title"
    className={classes.mapFrame}
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.84238872819!2d73.827827!3d15.380967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb6c64df4bc73%3A0x804342bf8e8434e8!2sDabolim%20Airport!5e0!3m2!1sen!2sin!4v1705583750000"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


      <div className={classes.fromBlock}>

        <h2>Feel Free To Contact Us</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={classes.input}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={classes.input}
        />
        <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className={classes.input}
/>

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={classes.textarea}
        ></textarea>

        {/* PACKAGE BUTTON */}
        <button className={classes.button} onClick={() => setShowPopup(true)}>
          {selectedPackage || "Choose Package"}
        </button>

        {/* POPUP */}
        {showPopup && (
          <div className={classes.popupOverlay}>
            <div className={classes.popupBox}>
              <h3>Select a Package</h3>

              {packages.map((pkg, index) => (
                <button
                  key={index}
                  className={classes.optionButton}
                  onClick={() => {
                    setSelectedPackage(pkg);
                    setShowPopup(false);
                  }}
                >
                  {pkg}
                </button>
              ))}

              <button className={classes.closeBtn} onClick={() => setShowPopup(false)}>
                Close
              </button>
            </div>
          </div>
        )}

        <button className={classes.submitButton} onClick={handleSubmit}>
          Submit
        </button>

      </div>
    </div>
  </div>
  );
}

export default Contact;
