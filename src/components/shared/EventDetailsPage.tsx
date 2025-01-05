import { useParams, useNavigate } from "react-router-dom";
import EventHeader from "../Profile/EventDetails/EventHeader";
import Details from "../Profile/EventDetails/Details";
import Tickets from "../Profile/EventDetails/Tickets";
import Appearance from "../Profile/EventDetails/Appearance";
import Guestlist from "../Profile/EventDetails/Guestlist";
import Sales from "../Profile/EventDetails/Sales";

const EventDetailsPage = () => {
  const { tab = "Details", eventId } = useParams<{
    tab: string;
    eventId: string;
  }>();
  const navigate = useNavigate();

  // Define tab components
  const renderTabContent = () => {
    switch (tab) {
      case "Details":
        return <Details eventId={eventId} />;
      case "Tickets":
        return <Tickets eventId={eventId} />;
      case "Appearance":
        return <Appearance eventId={eventId} />;
      case "Guestlist":
        return <Guestlist eventId={eventId} />;
      case "Sales":
        return <Sales eventId={eventId} />;
      default:
        return <Details eventId={eventId} />;
    }
  };

  // Function to change tabs
  const handleTabChange = (selectedTab: string) => {
    navigate(`/profile-event/${selectedTab}/${eventId}`);
  };

  return (
    <div>
      <EventHeader activeTab={tab} onTabChange={handleTabChange} />
      <div className="p-4">{renderTabContent()}</div>
    </div>
  );
};

export default EventDetailsPage;
