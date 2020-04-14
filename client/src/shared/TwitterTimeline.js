import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterTimeline = ({ accountName }) => {
  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={accountName}
          options={{
            height: 600,
          }}
          lang="es"
          theme="light"
        ></TwitterTimelineEmbed>
      </div>
    </section>
  );
};

export default TwitterTimeline;
