export const scaleFactor = 4;
const BASE = import.meta.env.BASE_URL;

export const dialogueData = {
  Gasa: `
  <div class="dialogue-content">
    <p>Welcome to Gasa! This is the northern-most district of Bhutan. It shares borders with Tibet.</p>
    <div class="slider" data-index="0">
      <button class="prev">❮</button>
      <div class="slides">
        <img src="${BASE}images/gasa1.jpg" alt="Gasa landscape" />
        <img src="${BASE}images/gasa2.jpg" alt="Hot spring" />
        <img src="${BASE}images/gasa3.jpg" alt="Camping site" />
        <img src="${BASE}images/gasa4.jpg" alt="Camping site" />
        <img src="${BASE}images/gasa5.jpg" alt="Camping site" />
      </div>
      <button class="next">❯</button>
    </div>
  </div>
  `,
  Drukpath: `
  <div class="dialogue-content">
    <p>This is a very famous trekking path in Bhutan! It is called the Drukpath. We start the trek from Paro and we come out in Thimphu.</p>
    <div class="slider" data-index="0">
      <button class="prev">❮</button>
      <div class="slides">
        <img src="${BASE}images/druk1.jpg" alt="Drukpath camp-site" />
      </div>
      <button class="next">❯</button>
    </div>
  </div>
  `,
  Thimphu:`
  <div class="dialogue-content">
    <p>This is Thimphu, the capital of Bhutan. Fun fact: it is the only city in the world which does not have traffic lights.</p>
    <div class="slider" data-index="0">
      <button class="prev">❮</button>
      <div class="slides">
        <img src="${BASE}images/tphu1.png" alt="Gasa landscape" />
        <img src="${BASE}images/tphu2.jpg" alt="Hot spring" />
        <img src="${BASE}images/tphu3.jpg" alt="Camping site" />
        <img src="${BASE}images/tphu4.jpg" alt="Camping site" />
      </div>
      <button class="next">❯</button>
    </div>
  </div>
  `,
  Paro: `
  <div class="dialogue-content">
    <p>This is Paro, it has the only international airport in Bhutan. I have spent most of my life in Paro and completed my middle school in Paro as <a href="https://dgi.edu.bt/"> The Royal Academy.</a> </p>
    <div class="slider" data-index="0">
      <button class="prev">❮</button>
      <div class="slides">
        <img src="${BASE}images/paro1.jpg" alt="Gasa landscape" />
        <img src="${BASE}images/paro2.jpg" alt="Hot spring" />
        <img src="${BASE}images/paro3.jpg" alt="Camping site" />
      </div>
      <button class="next">❯</button>
    </div>
  </div>
  `,
  Trongsa:`
  <div class="dialogue-content">
    <p>This is one of my favorite places in Bhutan. It is exactly in the middle of Bhutan's geographical map.</p>
    <div class="slider" data-index="0">
      <button class="prev">❮</button>
      <div class="slides">
        <img src="${BASE}images/trong1.jpg" alt="Gasa landscape" />
        <img src="${BASE}images/trong2.jpg" alt="Hot spring" />
        <img src="${BASE}images/trong3.jpg" alt="Camping site" />
      </div>
      <button class="next">❯</button>
    </div>
  </div>`,

  HongKong: 
  `
  <div class="dialogue-content">
    <p>This is Hong Kong. I attended Li Po Chun United World College to finish up my high school. These are the classes I took: Physics HL, Geography HL, English LL HL, Math AA SL, Biology SL, and Mandarin Ab Initio (so, I can speak a little bit of Mandarin.). I also compeleted a Robotics Program at the Polytechnic University of Hong Kong. </p>
    <div class="slider" data-index="0">
      <button class="prev">❮</button>
      <div class="slides">
        <img src="${BASE}images/hk1.JPG" alt="Gasa landscape" />
        <img src="${BASE}images/hk2.JPG" alt="Hot spring" />
        <img src="${BASE}images/hk4.JPG" alt="Hot spring" />
        <img src="${BASE}images/hk5.jpg" alt="Camping site" />
        <img src="${BASE}images/hk6.JPG" alt="Camping site" />
        <img src="${BASE}images/hk7.jpg" alt="Camping site" />
      </div>
      <button class="next">❯</button>
    </div>
  </div>`,
  India: 
  `
  <div class="dialogue-content">
    <p>I also went to India to complete a leadership course in <a href="./public/images/summeratdoon.pdf"> Summer@Doon</a>. </p>
    <div class="slider" data-index="0">
      <button class="prev">❮</button>
      <div class="slides">
        <img src="${BASE}images/india1.JPG" alt="Gasa landscape" />
        <img src="${BASE}images/india2.JPG" alt="Hot spring" />
      </div>
      <button class="next">❯</button>
    </div>
  </div>`,
  Bumthang: `
  <div class="dialogue-content">
    <p>This is Bumthang, one of the eastern districts in Bhutan. I went to school in Bumthang for three years. </p>
    <div class="slider" data-index="0">
      <button class="prev">❮</button>
      <div class="slides">
        <img src="${BASE}images/bum1.jpg" alt="Gasa landscape" />
        <img src="${BASE}images/bum2.JPG" alt="Hot spring" />
      </div>
      <button class="next">❯</button>
    </div>
  </div>
  `,
  Dagana: `
  <div class="dialogue-content">
    <p>This is Dagana, one of the districts in the southern parts of Bhutan. My friends and I spent about 5 days in Dagana.</p>
    <div class="slider" data-index="0">
      <button class="prev">❮</button>
      <div class="slides">
        <img src="${BASE}images/daga1.jpg" alt="Gasa landscape" />
        <img src="${BASE}images/daga2.jpg" alt="Hot spring" />
        <img src="${BASE}images/daga3.jpg" alt="Camping site" />
        <img src="${BASE}images/daga4.jpg" alt="Camping site" />
        <img src="${BASE}images/daga5.jpg" alt="Camping site" />
      </div>
      <button class="next">❯</button>
    </div>
  </div>
  `,
  Resume: `Contragulations you finally made it to the otherside of this map. I hope you got to know me a little more! Here is my <a href="./public/images/resume.pdf"> resume</a>, please be gentle.  `,
  Photography:`Coming Soon! Sorry!`,
  MyResearch:`I am doing research on NLP and this is the link to my <a href="https://docs.google.com/presentation/d/1Mx6a8yixQ-FiD8qhdmsM1F38QOxqBE89/edit?usp=sharing&ouid=108928762800600757354&rtpof=true&sd=true">presentation </a>if you would like to know more about my research.`,

  Jumolhari: `
  <div class="dialogue-content">
    <p>I’m an avid hiker and have been exploring trails and mountain paths since I was 11. Feel free to wander around the map to discover some of the breathtaking places I’ve visited—both in Bhutan and beyond.

    The images below are from one of my favorite treks, leading to the basecamp of Bhutan’s highest mountain—a journey that never fails to inspire me.</p>
    <div class="slider" data-index="0">
      <button class="prev">❮</button>
      <div class="slides">
        <img src="${BASE}images/jumo1.jpg" alt="Gasa landscape" />
        <img src="${BASE}images/jumo2.jpg" alt="Hot spring" />
        <img src="${BASE}images/jumo3.jpg" alt="Camping site" />
        <img src="${BASE}images/jumo4.jpg" alt="Camping site" />
      </div>
      <button class="next">❯</button>
    </div>
  </div>
  `,

};