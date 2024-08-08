import Header from "../components/Header";

import FeedBackList from "../components/FeedBackList";
import FeedBackStats from "../components/FeedBackStats";
import FeedBackForm from "../components/FeedBackForm";
import { FeedBackProvider } from "../context/FeedBackContext";

const HomePage = () => {
  return (
    <FeedBackProvider>
      <Header text="FeedBack UI" />
      <div className="container">
        <>
          <FeedBackForm />
          <FeedBackStats />
          <FeedBackList />
        </>
      </div>
    </FeedBackProvider>
  );
};

export default HomePage;
