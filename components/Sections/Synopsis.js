import React from "react";

export function Synopsis() {
  return (
    <div className="Synopsis">
      <div className="back">
        <div className="text">
          <h3>Synopsis</h3>
          <br />
          <p>
            In a lost age the world is divided into four equal powers: Water
            Tribe, Earth Kingdom, Fire Nation, and Air Nomads. In each nation
            there's a group of gifted people known as Benders who have the
            ability to manipulate their native element using martial arts and
            elemental magic. For thousands of years the nations lived together
            peacefully. But then disaster struck. The young ruler of the Fire
            Nation, Fire Lord Sozin, began a war of world conquest. The only one
            who could have prevented it was the Avatar. The Avatar is the human
            incarnation of the Spirit of Light, he alone can master bending all
            four elements. But, just when he was needed most, he disappeared.
            Now, 100 years later, a young Waterbender named Katara and her older
            brother Sokka stumble upon the long lost Avatar, Aang, who was
            encased in an iceberg for 100 years. They must help Aang master all
            four elements before summer when Sozin's grandson Fire Lord Ozai
            will use a comet to deal one last deadly strike against the other
            nations and claim a Fire Nation victory. But, all that is easier
            said than done with the Fire Lord's determined and hot-tempered son,
            Prince Zuko, hot on their trail.
          </p>
        </div>
      </div>
      <div className="front">
        <iframe
          className="center"
          width="450"
          height="300"
          src="https://www.youtube.com/embed/d1EnW4kn1kg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  );
}
