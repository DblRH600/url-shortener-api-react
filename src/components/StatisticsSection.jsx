// Stats section
import StatsCard from "./StatsCard";
import Branding from "../assets/icon-brand-recognition.svg";
import DetailedImg from "../assets/icon-detailed-records.svg";
import CustomImg from "../assets/icon-fully-customizable.svg";

function StatisticsSection() {
  return (
    <section className="statistics">
      <div className="container">
        {/* stat title */}
        <div className="statistics-title">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* cards */}
        <div className="statistics-cards">
          <StatsCard
            image={Branding}
            className="brand"
            alt="Brand Image"
            title="Brand Recognition"
            description="Boost your brand recognition with each click."
          />
          <StatsCard
            image={DetailedImg}
            className="detailed"
            alt="Detailed Records"
            title="Detailed Records"
            description="Gain insights into who is clicking your links."
          />
          <StatsCard
            image={CustomImg}
            className="customization"
            alt="Fully Customizable"
            title="Fully Customizable"
            description="Improve brand awareness through customizable links."
          />
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
