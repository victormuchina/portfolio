// Create your About component here
import IMG from "../assets/MyPhoto.jpg";
const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">

                <p className="about-desc">I am a software engineer with a passion for creating innovative solutions. With a strong background in web development and a keen eye for detail, I strive to build applications that are both functional and user-friendly. My experience spans across various technologies, and I am always eager to learn and adapt to new challenges.</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Victor Muchina" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;