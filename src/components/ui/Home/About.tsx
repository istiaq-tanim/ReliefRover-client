import image from "../../../assets/katt-yukawa-K0E6E0a0R3A-unsplash.jpg";
import Container from "../Container";

const About = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-center  text-gray-800 mt-20 mb-10">
        About Us
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <img
            src={image}
            alt="Team"
            className="rounded-lg w-[600px] h-[400px]  shadow-lg mb-4"
          />
        </div>
        <div className="lg:w-1/2 flex items-center text-justify">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At ReliefAid, we are committed to revolutionizing post-disaster
            relief goods distribution management. Our mission is to ensure
            timely and efficient delivery of essential supplies to affected
            communities, providing relief and support in times of crisis. Our
            platform is built on the principles of transparency, accountability,
            and innovation. We leverage advanced technologies such as blockchain
            and data analytics to optimize supply chain processes, track
            inventory in real-time, and coordinate logistics seamlessly.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
