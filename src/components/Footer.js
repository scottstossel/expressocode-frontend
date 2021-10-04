import logo from '../images/logo.png';

const Footer = () => {
  
  return (
    <>
      <div className="footer" style={{display: "flex", alignItems: 'center', marginTop: "10px", backgroundColor: "#e2e2e2"}}>
        <p>Expresso Code Inc.</p>
        <img src={logo} alt="logo" style={{height: "25px", width: "25px", marginLeft: "10px"}}/>
      </div>
    </>
  );
};

export default Footer;