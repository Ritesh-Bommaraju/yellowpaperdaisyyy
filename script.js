/* ═══════════════════════════════════════════════════════════
   CONFIGURATION — Edit everything personal here
   ═══════════════════════════════════════════════════════════ */

const CONFIG = {
  herName: "Mahi",
  nickname: "Bangaram",
  firstMeetingDate: "05 July 2026",
  firstMeetingPlace: "Goa",
  cafe: "Cafe Sicily",
  bar: "Bar High Five",
  hostel: "Hostel",
  // Legacy single photo — use goaPhotos[] instead
  goaPhoto: "",
  goaStarMap: "images/chapora-stars.png"
};

const goaPhotos = [
  {
    src: "images/goa-us.jpg",
    alt: "Us in the car that night",
    date: "05.07.2026",
    label: "Thumbs up. Rain on the window. You.",
    tilt: -3,
    aspect: "4/3"
  },
  {
    src: "images/goa-mahi.jpg",
    alt: "Mahi at the cafe",
    date: "05.07.2026",
    label: "Tiramisu and a phone call.",
    tilt: 2.5,
    aspect: "3/4"
  }
];

const goaMapMessages = {
  bar: "There you were.",
  cafe: "Our first meal.",
  drive: "And somewhere here, we held hands.",
  hostel: "The end of a day I didn't know I'd remember this much."
};

const recordCollection = [
  {
    side: "SIDE A",
    title: "The Night We Met",
    artist: "Lord Huron",
    meta: "Goa. 05.07.2026.",
    // Paste full Spotify link OR just the track ID
    spotifyTrackId: "5yJaXWIErrrsjQ3J0eR5aK",
    spotifyUrl: "https://open.spotify.com/track/5yJaXWIErrrsjQ3J0eR5aK",
    file: "",
    playable: true
  },
  {
    side: "SIDE B",
    title: "Yellow Paper Daisy",
    artist: "When Chai Met Toast",
    meta: "Because I dedicated this one to you.",
    spotifyTrackId: "5aQe0faFOjeskrHwpleXLJ",
    spotifyUrl: "https://open.spotify.com/track/5aQe0faFOjeskrHwpleXLJ",
    file: "",
    playable: true
  },
  {
    side: "TRACK 03",
    title: "To be written.",
    artist: "",
    meta: "Room for future songs.",
    file: "",
    playable: false
  }
];

const universeLayout = [
  { x: 50, y: 8, r: -2 },
  { x: 20, y: 20, r: 7 },
  { x: 80, y: 18, r: -6 },
  { x: 35, y: 35, r: 4 },
  { x: 68, y: 32, r: -8 },
  { x: 12, y: 48, r: 5 },
  { x: 88, y: 45, r: -4 },
  { x: 55, y: 48, r: 3 },
  { x: 30, y: 62, r: -7 },
  { x: 72, y: 58, r: 6 },
  { x: 45, y: 75, r: -3 },
  { x: 62, y: 82, r: 5 }
];

const universeItems = [
  { emoji: "🌻", label: "Sunflower", note: "Your favourite. Somehow it makes sense." },
  { emoji: "🐈", label: "Cat", note: "They outrank me. I've accepted this." },
  { emoji: "🎙️", label: "Crime podcast", note: "Murder for entertainment. I have chosen not to investigate." },
  { emoji: "🧴", label: "Perfumes", note: "Ajmal Raindrops. Zara Fashionably London. Zara Elegantly Tokyo. All in the same little universe." },
  { emoji: "✨", label: "Gold earrings", note: "Little gold ones. Somehow they suit you perfectly." },
  { emoji: "🪴", label: "Cute decor", note: "Completely unnecessary things you buy because they're cute. I get it." },
  { emoji: "☕", label: "Adrak wali chai", note: "Apparently regular chai wasn't specific enough." },
  { emoji: "☕", label: "Cold coffee", note: "The other half of the empire." },
  { emoji: "🥟", label: "Momos", note: "Steamed. Vegetarian. Non-negotiable." },
  { emoji: "🍰", label: "Tiramisu", note: "Filed permanently." },
  { emoji: "🍰", label: "Satvik Mawa Cake", note: "Not just mawa cake. Satvik. Important distinction." },
  { emoji: "🍳", label: "Canteen order", note: "Egg fried rice + half-boiled omelette. The half-boiled part matters." }
];

const museumItems = [
  { num: "01", title: "The Eye Poke", desc: "An entirely unconscious gesture that appears whenever you're talking. You have absolutely no idea you do this." },
  { num: "02", title: "The Left → Right", desc: "That little thing your eyes do when you're being cute. I noticed." },
  { num: "03", title: "Sleep Mode", desc: "Call connected. Conversation ended. You asleep. Me still there." },
  { num: "04", title: "The Daily Download", desc: "You telling me everything that happened in your day. Even the things that probably didn't need telling. I like those the most." },
  { num: "05", title: "The Reason Why", desc: "You explaining why you bought something — even when nobody asked. That's so cuteeee." }
];

const secretLoves = [
  "Your smile.",
  "The way you get excited telling me something.",
  "How comfortable you are telling me about your day.",
  "The way you make ordinary conversations feel like they have somewhere to go.",
  "The fact that you let me into your little world.",
  "How easily you became someone I look forward to talking to."
];

const littleMoments = [
  {
    num: "01", emoji: "☕", title: "Chai, somewhere stupidly early",
    lines: ["Find a quiet place in the morning and get you a proper adrak wali chai.", "Sit across from you while we're both still half asleep.", "No plans. No rush.", "Just chai and you."]
  },
  {
    num: "02", emoji: "📸", title: "Take stupid pictures",
    lines: ["Take the worst pictures of each other.", "The blurry ones. The ones where neither of us is ready.", "The ones we absolutely should delete.", "And then keep them anyway."]
  },
  {
    num: "03", emoji: "🎞️", title: "Go to a photo booth",
    lines: ["Find one of those tiny photo booths.", "Squeeze into that little space together.", "Take four increasingly stupid pictures.", "And keep the strip somewhere we'll eventually forget about… then find it years later and laugh at ourselves."]
  },
  {
    num: "04", emoji: "😄", title: "Make you laugh when you're trying not to",
    lines: ["Say something at exactly the wrong time.", "Watch you try really hard not to laugh.", "Watch the smile slowly give you away.", "And pretend I didn't notice."]
  },
  {
    num: "05", emoji: "🏠", title: "Have a completely ordinary day",
    lines: ["No date. No occasion. No elaborate plan.", "Just wake up, go somewhere, come back, talk about our day, get tired, and exist around each other.", "I think I'd really like ordinary with you."]
  },
  {
    num: "06", emoji: "🛒", title: "Go grocery shopping",
    lines: ["Walk around a supermarket with absolutely no idea what we're doing.", "You picking things up. Me putting something completely unnecessary into the cart.", "You taking it out. Me putting it back when you aren't looking.", "A very serious domestic negotiation."]
  },
  {
    num: "07", emoji: "🌙", title: "Hear the stories I haven't heard yet",
    lines: ["Sit somewhere comfortable and let you tell me the stories I haven't heard yet.", "The childhood ones. The embarrassing ones. The completely random ones.", "The things you remember that nobody else probably cares about.", "I want to know those parts of you too."]
  }
];

const littleMomentsClosing = {
  lead: "Maybe that's what I want most.",
  body: "Not just the memorable days. The little ones. The days that don't look like anything special from the outside, but somehow become ours."
};

const behaviorPromises = [
  "I'll communicate instead of disappearing.",
  "I'll tell you when I'm not okay instead of making you guess.",
  "I'll stop expecting you to understand things I haven't communicated.",
  "I'll pay attention to the difference between what I intend and what I actually make you feel.",
  "And when I fuck up, I'll own it without making you carry the emotional work of fixing it."
];

const secretEndingLines = [
  { text: "Oh. You found this.", delay: 0 },
  { text: "I didn't put this here to say one more thing about us.", delay: 2000 },
  { text: "I think I've said enough.", delay: 4000, pause: true },
  { text: "I just wanted one last little place where I could say…", delay: 6000 },
  { text: "I'm really, really glad I met you, Mahi.", delay: 8000, handwritten: true },
  { text: "That doesn't depend on what you decide.", delay: 10500 },
  { text: "It doesn't disappear because you're angry with me.", delay: 12500 },
  { text: "And it doesn't mean I get to ask anything from you.", delay: 14500, pause: true },
  { text: "You became important to me.", delay: 17000, emphasis: true },
  { text: "Somewhere between the calls, the sleepy goodnights, the ridiculous little things you do… and one night in Goa when I saw you across a room.", delay: 19000 },
  { text: "You matter.", delay: 22000, emphasis: true },
  { text: "So that's it.", delay: 24500 },
  { text: "No question. No \"will you forgive me?\" No \"please stay.\"", delay: 26500 },
  { text: "Just… I'm sorry. And thank you for being someone I got to know this closely.", delay: 28500, pause: true },
  { text: "I hope you are my yellow paper daisy.", delay: 31000, handwritten: true },
  { text: "P.S. You still owe me a tour in Lucknow.", delay: 34000, catPs: true },
  { text: "— he means you.", delay: 37000, tiny: true }
];

const catOpinions = [
  "He says hi. I say hi better.",
  "He says you're right. Unfortunately.",
  "He says he fucked up. I agree.",
  "He says you can be mad. I would be too.",
  "He says he's sorry. He looked very serious when he said it.",
  "He says you make him smile. Gross, but okay.",
  "He says you're his favourite person to talk to. I'm pretending I didn't hear that.",
  "He says you're special. I knew that already."
];

const catOpinionClosing = "Now go. He has something to tell you.";

const forbiddenCatLines = [
  { text: "You found me.", delay: 800 },
  { text: "This section wasn't approved by him.", delay: 2800, pause: true },
  { text: "So I'm going to tell you the truth.", delay: 5200 },
  { text: "He talks about you a lot.", delay: 7600 },
  { text: "Like… a lot.", delay: 9600, pause: true },
  { text: "It's actually a little embarrassing.", delay: 12000, lookAway: true },
  { text: "Anyway. You didn't hear that from me.", delay: 14800 }
];

const photoMemories = [];
const gardenPhotos = [];
const songs = recordCollection.filter(function (r) { return r.playable; });

/* ═══════════════════════════════════════════════════════════
   APP — No need to edit below unless customizing behavior
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let catOpinionIndex = 0;
  let currentSongIndex = 0;
  let isPlaying = false;
  let waveformInterval = null;
  let sunflowerClickCount = 0;
  let secretEndingPlayed = false;
  let forbiddenCatPlayed = false;

  function showCatOpinion(catOpinionEl) {
    if (!catOpinionEl) return;
    if (catOpinionIndex < catOpinions.length) {
      catOpinionEl.textContent = catOpinions[catOpinionIndex];
      catOpinionIndex++;
    } else if (catOpinionIndex === catOpinions.length) {
      catOpinionEl.textContent = catOpinionClosing;
      catOpinionIndex++;
    }
    catOpinionEl.classList.add('visible');
  }

  function $(id) {
    return document.getElementById(id);
  }

  function on(el, event, handler) {
    if (el) el.addEventListener(event, handler);
  }

  function applyConfig() {
    document.querySelectorAll('[data-place="bar"]').forEach((el) => {
      el.textContent = CONFIG.bar;
    });
    document.querySelectorAll('[data-place="cafe"]').forEach((el) => {
      el.textContent = CONFIG.cafe;
    });
    document.title = 'For ' + CONFIG.herName;
  }

  function enterSite() {
    const opening = $('opening');
    const mainContent = $('mainContent');
    const cornerCat = $('cornerCat');
    if (!opening || !mainContent) return;

    opening.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    opening.style.opacity = '0';
    opening.style.transform = 'scale(0.98)';

    setTimeout(function () {
      opening.hidden = true;
      mainContent.hidden = false;
      if (cornerCat) cornerCat.hidden = false;
      initScrollReveals();
      initPetals();
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }, prefersReducedMotion ? 100 : 700);
  }

  function showOpeningFallback() {
    document.querySelectorAll('.opening__line, .opening-cat, .opening__btn').forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.animation = 'none';
    });
    const btn = $('comeInBtn');
    if (btn) {
      btn.classList.add('is-ready');
      btn.style.opacity = '1';
      btn.onclick = enterSite;
    }
  }

  function initOpening() {
    const comeInBtn = $('comeInBtn');
    const opening = $('opening');
    const openingCat = $('openingCat');
    const openingSkip = $('openingSkip');

    on(comeInBtn, 'click', enterSite);

    if (comeInBtn && !prefersReducedMotion) {
      setTimeout(function () { comeInBtn.classList.add('is-ready'); }, 6800);
    } else if (comeInBtn) {
      comeInBtn.classList.add('is-ready');
    }

    if (opening && !prefersReducedMotion) {
      setTimeout(function () {
        if (openingSkip) openingSkip.hidden = false;
      }, 2000);

      opening.addEventListener('click', function (e) {
        if (e.target.closest('#comeInBtn')) return;
        document.querySelectorAll('.opening__line, .opening-cat, .opening__btn').forEach(function (el) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          el.style.animation = 'none';
        });
        if (comeInBtn) {
          comeInBtn.classList.add('is-ready');
          comeInBtn.style.opacity = '1';
        }
        if (openingCat) openingCat.style.opacity = '1';
        if (openingSkip) openingSkip.hidden = true;
      });
    }
  }

  function initWordsActions() {
    const wordWords = $('wordWords');
    const wordActions = $('wordActions');
    const section = $('wordsActions');
    if (!wordWords || !wordActions || !section || prefersReducedMotion) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setTimeout(function () {
            wordWords.classList.add('separated');
            wordActions.classList.add('separated');
          }, 600);
          setTimeout(function () {
            wordWords.classList.remove('separated');
            wordActions.classList.remove('separated');
            wordWords.classList.add('united');
            wordActions.classList.add('united');
          }, 2000);
          observer.unobserve(section);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(section);
  }

  function initUniverse(openNote) {
    const grid = $('universeGrid');
    if (!grid) return;

    universeItems.forEach(function (item, i) {
      const pos = universeLayout[i] || { x: 50, y: 50, r: 0 };
      const btn = document.createElement('button');
      btn.className = 'universe-item universe-item--float';
      btn.setAttribute('role', 'listitem');
      btn.setAttribute('aria-label', 'Open note about ' + item.label);
      btn.style.setProperty('--x', pos.x);
      btn.style.setProperty('--y', pos.y);
      btn.style.setProperty('--rot', pos.r + 'deg');
      btn.style.setProperty('--float-delay', (i * 0.35) + 's');
      btn.innerHTML =
        '<span class="universe-item__emoji">' + item.emoji + '</span>' +
        '<span class="universe-item__label">' + item.label + '</span>';
      btn.addEventListener('click', function () {
        btn.classList.add('universe-item--wobble');
        setTimeout(function () { btn.classList.remove('universe-item--wobble'); }, 520);
        openNote(item);
      });
      grid.appendChild(btn);
    });
  }

  function initMuseum() {
    const grid = $('museumGrid');
    if (!grid) return;
    museumItems.forEach(function (item, i) {
      const el = document.createElement('article');
      el.className = 'museum-exhibit reveal-on-scroll';
      el.setAttribute('role', 'listitem');
      el.style.setProperty('--exhibit-delay', (i * 0.15) + 's');
      if (!prefersReducedMotion) el.style.transitionDelay = (i * 0.15) + 's';
      el.innerHTML =
        '<div class="museum-exhibit__spotlight" aria-hidden="true"></div>' +
        '<div class="museum-exhibit__inner">' +
          '<p class="museum-exhibit__num">Exhibit ' + item.num + '</p>' +
          '<h3 class="museum-exhibit__title">' + item.title + '</h3>' +
          '<p class="museum-exhibit__desc">' + item.desc + '</p>' +
        '</div>' +
        '<div class="museum-exhibit__plaque" aria-hidden="true">' + item.title + '</div>';
      grid.appendChild(el);
    });

    if (prefersReducedMotion) {
      grid.querySelectorAll('.museum-exhibit').forEach(function (el) { el.classList.add('museum-exhibit--lit'); });
      return;
    }

    const spotlightObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('museum-exhibit--lit');
      });
    }, { threshold: 0.45, rootMargin: '0px 0px -40px 0px' });

    grid.querySelectorAll('.museum-exhibit').forEach(function (el) { spotlightObserver.observe(el); });
  }

  function initLittleMoments() {
    const grid = $('littleMomentsGrid');
    const closing = $('littleMomentsClosing');
    if (!grid) return;

    littleMoments.forEach(function (item, i) {
      const card = document.createElement('article');
      card.className = 'postcard reveal-on-scroll';
      card.style.setProperty('--tilt', (i % 2 === 0 ? -1.5 : 1.5) + 'deg');
      const lines = item.lines.map(function (l) { return '<p>' + l + '</p>'; }).join('');
      card.innerHTML =
        '<div class="postcard__stamp" aria-hidden="true">' + item.emoji + '</div>' +
        '<p class="postcard__num">' + item.num + '</p>' +
        '<h3 class="postcard__title">' + item.title + '</h3>' +
        '<div class="postcard__body">' + lines + '</div>';
      grid.appendChild(card);
    });

    if (closing) {
      closing.innerHTML =
        '<p class="postcard-bridge__lead handwritten reveal-on-scroll">' + littleMomentsClosing.lead + '</p>' +
        '<p class="postcard-bridge__body reveal-on-scroll">' + littleMomentsClosing.body + '</p>';
    }
  }

  function initGoaStarfield() {
    const container = $('goaStarfield');
    if (!container) return;

    const count = window.innerWidth < 768 ? 70 : 110;
    for (let i = 0; i < count; i++) {
      const star = document.createElement('span');
      star.className = 'goa__star';
      const bright = Math.random() < 0.12;
      const size = bright ? 2 : 1;
      star.style.left = (Math.random() * 100) + '%';
      star.style.top = (Math.random() * 82) + '%';
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.opacity = String(0.25 + Math.random() * 0.65);
      if (!prefersReducedMotion && Math.random() < 0.18) {
        star.classList.add('goa__star--twinkle');
        star.style.animationDelay = (Math.random() * 6) + 's';
        star.style.animationDuration = (3 + Math.random() * 4) + 's';
      }
      container.appendChild(star);
    }
  }

  function initGoaCinematic() {
    const goa = $('goa');
    const sky = $('goaSky');
    const starfield = $('goaStarfield');
    const content = $('goaContent');
    const photos = $('goaPhotos');
    const starsPoster = $('goaStarsFigure');
    if (!goa || prefersReducedMotion) return;

    function onScroll() {
      const rect = goa.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh * 0.3)));
      const parallax = progress * 50;
      if (sky) {
        sky.style.transform = 'translate3d(0, ' + (parallax * 0.5) + 'px, 0)';
      }
      if (starfield) {
        starfield.style.transform = 'translate3d(0, ' + (parallax * 0.35) + 'px, 0)';
      }
      if (content) {
        content.style.transform = 'translate3d(0, ' + (-parallax * 0.2) + 'px, 0)';
        content.style.opacity = String(1 - progress * 0.12);
      }
      if (photos) {
        photos.style.transform = 'translate3d(0, ' + (-parallax * 0.1) + 'px, 0)';
      }
      if (starsPoster) {
        starsPoster.style.transform = 'translate3d(0, ' + (-parallax * 0.08) + 'px, 0)';
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initCornerCatGuide() {
    const cat = $('cornerCat');
    if (!cat) return;

    const actMap = [
      { ids: ['catIntro', 'apology', 'wordsActions'], act: 'corner-cat--act1' },
      { ids: ['goa', 'universe', 'museum'], act: 'corner-cat--act2' },
      { ids: ['secretLoves', 'music', 'thingsToDo', 'promises'], act: 'corner-cat--act3' },
      { ids: ['millionSteps', 'noPressure', 'finalLetter'], act: 'corner-cat--act4' }
    ];

    const sections = actMap.flatMap(function (group) {
      return group.ids.map(function (id) {
        const el = $(id);
        return el ? { el: el, act: group.act } : null;
      }).filter(Boolean);
    });

    if (!sections.length) return;

    function setAct(actClass) {
      cat.classList.remove('corner-cat--act1', 'corner-cat--act2', 'corner-cat--act3', 'corner-cat--act4');
      if (actClass) cat.classList.add(actClass);
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const match = sections.find(function (s) { return s.el === entry.target; });
          if (match) setAct(match.act);
        }
      });
    }, { threshold: 0.35, rootMargin: '-20% 0px -45% 0px' });

    sections.forEach(function (s) { observer.observe(s.el); });
  }

  function initAmbientPetals() {
    const petalsContainer = $('petals');
    if (!petalsContainer || prefersReducedMotion) return;

    const warmIds = ['universe', 'secretLoves', 'thingsToDo', 'finalLetter'];
    const darkIds = ['goa', 'museum', 'millionSteps'];

    function moodAtCenter() {
      const y = window.innerHeight * 0.45;
      for (let i = 0; i < darkIds.length; i++) {
        const el = $(darkIds[i]);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top < y && r.bottom > y) return 'dark';
      }
      for (let j = 0; j < warmIds.length; j++) {
        const el = $(warmIds[j]);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top < y && r.bottom > y) return 'warm';
      }
      return 'neutral';
    }

    setInterval(function () {
      if (document.hidden || moodAtCenter() !== 'warm') return;
      if (Math.random() > 0.25) return;
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = (Math.random() * 100) + '%';
      petal.style.animationDuration = (8 + Math.random() * 6) + 's';
      petalsContainer.appendChild(petal);
      setTimeout(function () { petal.remove(); }, 14000);
    }, 3500);
  }

  function initSecretLoves() {
    const list = $('lovesList');
    if (!list) return;

    secretLoves.forEach(function (text, i) {
      const li = document.createElement('li');
      li.className = 'scrapbook-item';
      li.style.setProperty('--tilt', ((i % 3) - 1) * 2 + 'deg');
      li.textContent = text;
      list.appendChild(li);
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -20px 0px' });

    list.querySelectorAll('li').forEach(function (item, i) {
      if (!prefersReducedMotion) item.style.transitionDelay = (i * 0.12) + 's';
      observer.observe(item);
    });
  }

  function initGoaMap() {
    const map = $('goaMap');
    const msg = $('goaMapMessage');
    if (!map || !msg) return;
    map.querySelectorAll('.goa-map__dot').forEach(function (dot) {
      on(dot, 'click', function () {
        map.querySelectorAll('.goa-map__dot').forEach(function (d) { d.classList.remove('active'); });
        dot.classList.add('active');
        msg.textContent = goaMapMessages[dot.getAttribute('data-loc')] || '';
      });
    });
  }

  function initGoaPhotos() {
    const grid = $('goaPhotosGrid');
    if (!grid || !goaPhotos.length) return;

    goaPhotos.forEach(function (photo, i) {
      const figure = document.createElement('figure');
      figure.className = 'goa-photo reveal-on-scroll' + (i % 2 === 1 ? ' goa-photo--alt' : '');
      figure.style.setProperty('--tilt', (photo.tilt || 0) + 'deg');
      if (photo.aspect) figure.style.setProperty('--aspect', photo.aspect);

      figure.innerHTML =
        '<div class="goa-photo__frame">' +
          '<span class="goa-photo__tape goa-photo__tape--left" aria-hidden="true"></span>' +
          '<span class="goa-photo__tape goa-photo__tape--right" aria-hidden="true"></span>' +
          '<img class="goa-photo__img" src="' + photo.src + '" alt="' + photo.alt + '" loading="lazy">' +
        '</div>' +
        '<figcaption class="goa-photo__caption">' +
          '<span class="goa-photo__date">' + photo.date + '</span>' +
          '<span class="goa-photo__label">' + photo.label + '</span>' +
        '</figcaption>';

      grid.appendChild(figure);
    });
  }

  function initGoaStarMap() {
    const img = $('goaStarsImg');
    if (!img || !CONFIG.goaStarMap) return;
    img.src = CONFIG.goaStarMap;
  }

  function observeListReveal(items) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.2, rootMargin: '0px 0px -20px 0px' });
    items.forEach(function (item, i) {
      if (!prefersReducedMotion) item.style.transitionDelay = (i * 0.1) + 's';
      observer.observe(item);
    });
  }

  function initPromises() {
    const list = $('promisesList');
    if (!list) return;
    behaviorPromises.forEach(function (text) {
      const li = document.createElement('li');
      li.textContent = text;
      list.appendChild(li);
    });
    observeListReveal(list.querySelectorAll('li'));
  }

  function spotifyTrackIdFrom(rec) {
    const raw = rec.spotifyUrl || rec.spotifyTrackId || '';
    if (!raw) return '';
    if (raw.indexOf('spotify.com/track/') !== -1) {
      return raw.split('/track/')[1].split('?')[0].split('/')[0];
    }
    return raw.trim();
  }

  function initMusicPlayer() {
    const container = $('recordsCollection');
    const audio = $('audioElement');
    const playPauseBtn = $('playPause');
    const playIcon = $('playIcon');
    const songTitle = $('songTitle');
    const songArtist = $('songArtist');
    const vinylDisc = $('vinylDisc');
    const waveform = $('waveform');
    const audioNotice = $('audioNotice');
    const nowPlaying = $('nowPlayingLabel');
    const spotifyWrap = $('spotifyEmbedWrap');
    const spotifyIframe = $('spotifyEmbed');
    const spotifyOpenLink = $('spotifyOpenLink');
    const recordsPlayer = $('recordsPlayer');
    if (!container) return;

    let usingSpotify = false;
    const isFileProtocol = window.location.protocol === 'file:';

    function buildWaveform() {
      if (!waveform) return;
      waveform.innerHTML = '';
      for (let i = 0; i < 24; i++) {
        const bar = document.createElement('div');
        bar.className = 'waveform-bar';
        bar.style.height = (8 + Math.random() * 16) + 'px';
        waveform.appendChild(bar);
      }
    }

    function animateWaveform(active) {
      clearInterval(waveformInterval);
      if (!active || !waveform || prefersReducedMotion || usingSpotify) return;
      waveformInterval = setInterval(function () {
        waveform.querySelectorAll('.waveform-bar').forEach(function (bar) {
          bar.style.height = (6 + Math.random() * 22) + 'px';
        });
      }, 150);
    }

    function showAudioNotice() {
      if (audioNotice) {
        audioNotice.hidden = false;
        audioNotice.textContent = 'Add an MP3 path or Spotify track ID in script.js to hear this.';
      }
    }

    function setMp3Mode(rec) {
      usingSpotify = false;
      if (recordsPlayer) recordsPlayer.classList.remove('records-player--spotify');
      if (spotifyIframe) spotifyIframe.src = '';
      if (spotifyWrap) spotifyWrap.hidden = true;
      if (spotifyOpenLink) spotifyOpenLink.hidden = true;
      if (playPauseBtn) playPauseBtn.hidden = false;
      if (waveform) waveform.hidden = false;
      if (vinylDisc) vinylDisc.classList.remove('playing');
      if (audioNotice) audioNotice.hidden = true;
      if (audio) {
        audio.pause();
        audio.src = rec.file;
        fetch(rec.file, { method: 'HEAD' }).catch(showAudioNotice);
      }
    }

    function setSpotifyMode(rec) {
      const trackId = spotifyTrackIdFrom(rec);
      if (!trackId) {
        showAudioNotice();
        return;
      }
      if (audio) {
        audio.pause();
        audio.removeAttribute('src');
      }
      if (isPlaying) {
        isPlaying = false;
        if (playIcon) playIcon.textContent = '▶';
      }
      if (vinylDisc) vinylDisc.classList.remove('playing');
      animateWaveform(false);
      usingSpotify = true;
      if (recordsPlayer) recordsPlayer.classList.add('records-player--spotify');
      if (playPauseBtn) playPauseBtn.hidden = true;
      if (waveform) waveform.hidden = true;
      if (audioNotice) {
        audioNotice.hidden = false;
        audioNotice.textContent = isFileProtocol
          ? 'Spotify won\'t play from a saved file — deploy the site or run: python3 -m http.server 8080'
          : 'Plays via Spotify — hit play below, or open in the app.';
      }
      if (spotifyWrap) spotifyWrap.hidden = false;
      if (spotifyIframe) {
        spotifyIframe.src = 'https://open.spotify.com/embed/track/' + trackId + '?utm_source=generator&theme=0';
      }
      if (spotifyOpenLink) {
        spotifyOpenLink.href = 'https://open.spotify.com/track/' + trackId;
        spotifyOpenLink.hidden = false;
      }
    }

    function selectRecord(index) {
      const rec = recordCollection[index];
      if (!rec || !rec.playable) return;
      container.querySelectorAll('.record').forEach(function (r, i) { r.classList.toggle('active', i === index); });
      if (songTitle) songTitle.textContent = rec.title;
      if (songArtist) songArtist.textContent = rec.artist;
      if (nowPlaying) nowPlaying.textContent = 'Now playing';

      if (rec.spotifyTrackId || rec.spotifyUrl) {
        setSpotifyMode(rec);
      } else if (rec.file) {
        setMp3Mode(rec);
      } else {
        showAudioNotice();
      }
    }

    recordCollection.forEach(function (rec, i) {
      const btn = document.createElement('button');
      btn.className = 'record' + (rec.playable ? '' : ' record--placeholder');
      btn.type = 'button';
      btn.innerHTML = '<div class="record__sleeve"><div class="record__sleeve-inner"></div></div><div class="record__info"><p class="record__side">' + rec.side + '</p><p class="record__title">' + rec.title + '</p><p class="record__meta">' + rec.meta + (rec.artist ? ' — ' + rec.artist : '') + '</p></div>';
      if (rec.playable) btn.addEventListener('click', function () { selectRecord(i); });
      container.appendChild(btn);
    });

    buildWaveform();
    const firstPlayable = recordCollection.findIndex(function (r) { return r.playable; });
    if (firstPlayable >= 0) selectRecord(firstPlayable);

    on(playPauseBtn, 'click', function () {
      if (!audio || usingSpotify) return;
      if (isPlaying) audio.pause(); else audio.play().catch(showAudioNotice);
    });
    if (audio) {
      on(audio, 'play', function () { isPlaying = true; if (playIcon) playIcon.textContent = '❚❚'; if (vinylDisc) vinylDisc.classList.add('playing'); animateWaveform(true); });
      on(audio, 'pause', function () { isPlaying = false; if (playIcon) playIcon.textContent = '▶'; if (vinylDisc) vinylDisc.classList.remove('playing'); animateWaveform(false); });
      on(audio, 'error', showAudioNotice);
    }
  }

  function initFirstStep() {
    const btn = $('firstStepBtn');
    const counter = $('stepCounter');
    const counterNum = $('stepCounterNum');
    const feet = $('interactiveFeet');
    const msg = $('firstStepMsg');
    if (!btn || !counter) return;

    let running = false;

    on(btn, 'click', function () {
      if (running) return;
      running = true;
      btn.hidden = true;
      counter.hidden = false;

      const milestones = [1, 10, 100, 1000, 10000, 100000, 1000000];
      // Pause on each number so she can actually read it
      const pauseMs = prefersReducedMotion
        ? [400, 350, 350, 300, 300, 250, 250]
        : [900, 800, 700, 600, 500, 450, 400];

      let i = 0;

      function showMilestone() {
        if (i >= milestones.length) {
          setTimeout(function () {
            if (msg) {
              msg.hidden = false;
              msg.textContent = "I said I'd walk a million. I never said I'd rush you through them.";
            }
          }, 600);
          return;
        }

        if (counterNum) {
          counterNum.textContent = milestones[i].toLocaleString();
          counterNum.classList.remove('bump');
          void counterNum.offsetWidth;
          counterNum.classList.add('bump');
        }

        if (feet && !prefersReducedMotion) {
          const fp = document.createElement('div');
          fp.className = 'footprint forward';
          fp.style.position = 'relative';
          fp.style.animation = 'none';
          fp.style.opacity = '1';
          feet.appendChild(fp);
        }

        i++;
        setTimeout(showMilestone, pauseMs[i - 1] || 400);
      }

      showMilestone();
    });
  }

  function initEasterEggs() {
    const sunflowerEaster = $('sunflowerEaster');

    document.querySelectorAll('.sunflower').forEach(function (sf) {
      sf.style.cursor = 'pointer';
      on(sf, 'click', function () {
        sunflowerClickCount++;
        if (sunflowerClickCount >= 7 && sunflowerEaster && sunflowerEaster.showModal) {
          sunflowerClickCount = 0;
          sunflowerEaster.showModal();
        }
      });
    });

    if (sunflowerEaster) {
      on(sunflowerEaster.querySelector('.easter-dialog__close'), 'click', function () {
        sunflowerEaster.close();
      });
      on(sunflowerEaster, 'click', function (e) {
        if (e.target === sunflowerEaster) sunflowerEaster.close();
      });
    }
  }

  function initForbiddenCat() {
    const paw = $('forbiddenPaw');
    const overlay = $('forbiddenCat');
    const creature = $('forbiddenCatCreature');
    const textBox = $('forbiddenCatText');
    const feet = $('forbiddenCatFeet');
    if (!paw || !overlay || !textBox) return;

    on(paw, 'click', function () {
      if (forbiddenCatPlayed) return;
      forbiddenCatPlayed = true;
      overlay.hidden = false;
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      textBox.innerHTML = '';
      if (feet) feet.hidden = true;

      setTimeout(function () {
        if (creature) creature.classList.add('visible');
      }, prefersReducedMotion ? 0 : 600);

      forbiddenCatLines.forEach(function (line) {
        setTimeout(function () {
          const p = document.createElement('p');
          p.textContent = line.text;
          if (line.lookAway && creature) creature.classList.add('look-away');
          textBox.appendChild(p);
          requestAnimationFrame(function () { p.classList.add('visible'); });
        }, prefersReducedMotion ? 0 : line.delay);
      });

      const endDelay = prefersReducedMotion ? 2000 : 17500;
      setTimeout(function () {
        if (creature) creature.classList.remove('visible');
        if (feet) {
          feet.hidden = false;
          feet.classList.add('visible');
        }
        setTimeout(function () {
          overlay.hidden = true;
          overlay.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        }, prefersReducedMotion ? 800 : 2200);
      }, endDelay);
    });
  }

  function initSecretEnding() {
    const trigger = $('secretSunflower');
    const overlay = $('secretEnding');
    const textContainer = $('secretEndingText');
    const cat = $('secretEndingCat');
    const exit = $('secretEndingExit');
    const finalSection = $('finalLetter');
    if (!trigger || !overlay || !textContainer) return;

    if (finalSection) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            trigger.hidden = false;
            trigger.classList.add('secret-sunflower--awake');
          }
        });
      }, { threshold: 0.25 }).observe(finalSection);
    }

    on(trigger, 'click', function () {
      if (secretEndingPlayed) return;
      secretEndingPlayed = true;
      overlay.hidden = false;
      document.body.style.overflow = 'hidden';
      setTimeout(function () { if (cat) cat.classList.add('visible'); }, prefersReducedMotion ? 0 : 1500);
      secretEndingLines.forEach(function (line) {
        setTimeout(function () {
          const p = document.createElement('p');
          p.textContent = line.text;
          if (line.handwritten) p.className = 'handwritten';
          if (line.emphasis) p.className = 'secret-ending__emphasis';
          if (line.tiny) { p.className = 'handwritten'; p.style.fontSize = '0.9rem'; p.style.opacity = '0.6'; }
          if (line.catPs) p.style.marginTop = '2rem';
          textContainer.appendChild(p);
          requestAnimationFrame(function () { p.classList.add('visible'); });
        }, prefersReducedMotion ? 0 : line.delay);
      });
    });
    on(exit, 'click', function () {
      overlay.hidden = true;
      document.body.style.overflow = '';
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay && !overlay.hidden) {
        overlay.hidden = true;
        document.body.style.overflow = '';
      }
    });
  }

  function createBackwardFootprints(container) {
    for (let i = 0; i < 10; i++) {
      const fp = document.createElement('div');
      fp.className = 'footprint';
      fp.style.left = (45 + (i % 2) * 8) + '%';
      fp.style.top = (15 + i * 5) + '%';
      fp.style.setProperty('--rot', ((i % 2) * 20 - 10) + 'deg');
      fp.style.animationDelay = (i * 0.15) + 's';
      container.appendChild(fp);
    }
  }

  function fadeFootprints(container) {
    container.querySelectorAll('.footprint').forEach(function (fp) {
      fp.classList.add('fade-out');
    });
  }

  function createForwardFootprints(container) {
    for (let i = 0; i < 20; i++) {
      const fp = document.createElement('div');
      fp.className = 'footprint forward';
      fp.style.left = (42 + (i % 2) * 10) + '%';
      fp.style.top = (55 + i * 2.5) + '%';
      fp.style.setProperty('--rot', ((i % 2) * 15 - 5) + 'deg');
      fp.style.opacity = Math.max(0.1, 0.5 - i * 0.02);
      fp.style.animationDelay = (i * 0.08) + 's';
      container.appendChild(fp);
    }
  }

  function initStepsFootprints() {
    const backContainer = $('footprintsBack');
    const forwardContainer = $('footprintsForward');
    const stepsSection = $('millionSteps');
    if (!backContainer || !forwardContainer || !stepsSection || prefersReducedMotion) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          document.body.classList.add('steps-active');
          createBackwardFootprints(backContainer);
          setTimeout(function () { fadeFootprints(backContainer); }, 3000);
          setTimeout(function () { createForwardFootprints(forwardContainer); }, 4500);
          observer.unobserve(stepsSection);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(stepsSection);
  }

  function initScrollReveals() {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (prefersReducedMotion) {
      elements.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  function initPetals() {
    initAmbientPetals();
  }

  function initPhotos() {
    if (photoMemories.length > 0) {
      const container = $('photoMemories');
      if (container) {
        container.hidden = false;
        container.innerHTML = photoMemories.map(function (p) {
          return '<div class="photo-memory"><img src="' + p.src + '" alt="' + (p.alt || p.caption) + '" loading="lazy"></div>';
        }).join('');
      }
    }

    if (gardenPhotos.length > 0) {
      const garden = $('memoryGarden');
      const grid = $('gardenGrid');
      if (garden && grid) {
        garden.hidden = false;
        grid.innerHTML = gardenPhotos.map(function (p) {
          return '<div class="garden-item"><img src="' + p.src + '" alt="' + p.caption + '" loading="lazy"><p class="garden-item__caption">' + p.caption + '</p></div>';
        }).join('');
      }
    }
  }

  function initSectionAmbience() {
    const orbTypes = ['sunflower', 'rose', 'olive'];
    const nightTypes = ['night', 'night', 'sunflower'];
    const sectionConfig = [
      { sel: '.section--opening', count: 3, types: orbTypes },
      { sel: '.section--cat', count: 3, types: orbTypes },
      { sel: '.section--letter', count: 4, types: orbTypes },
      { sel: '.section--words-actions', count: 3, types: orbTypes },
      { sel: '.section--universe', count: 4, types: orbTypes },
      { sel: '.section--museum', count: 3, types: nightTypes },
      { sel: '.section--loves', count: 4, types: orbTypes },
      { sel: '.section--records', count: 3, types: orbTypes },
      { sel: '.section--moments', count: 4, types: orbTypes },
      { sel: '.section--promises', count: 3, types: ['olive', 'sunflower', 'rose'] },
      { sel: '.section--quiet', count: 2, types: ['rose', 'sunflower'] },
      { sel: '.section--final', count: 3, types: orbTypes },
      { sel: '.section--steps', count: 3, types: nightTypes }
    ];

    sectionConfig.forEach(function (cfg) {
      const section = document.querySelector(cfg.sel);
      if (!section || section.querySelector('.section-ambience')) return;

      const layer = document.createElement('div');
      layer.className = 'section-ambience';
      layer.setAttribute('aria-hidden', 'true');

      for (let i = 0; i < cfg.count; i++) {
        const orb = document.createElement('span');
        const type = cfg.types[i % cfg.types.length];
        orb.className = 'section-ambience__orb section-ambience__orb--' + type;
        orb.style.setProperty('--x', (8 + Math.random() * 84) + '%');
        orb.style.setProperty('--y', (5 + Math.random() * 75) + '%');
        orb.style.setProperty('--size', (100 + Math.random() * 160) + 'px');
        orb.style.setProperty('--delay', (-Math.random() * 12) + 's');
        layer.appendChild(orb);
      }

      section.insertBefore(layer, section.firstChild);
    });
  }

  function initQuietSection() {
    const section = $('noPressure');
    if (!section || prefersReducedMotion) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          section.classList.add('quiet--still');
          observer.unobserve(section);
        }
      });
    }, { threshold: 0.4 });

    observer.observe(section);
  }

  function boot() {
    try {
      let catOpinion = $('catOpinion');
      const noteDialog = $('noteDialog');

      function openNote(item) {
        const emoji = $('noteDialogEmoji');
        const title = $('noteDialogTitle');
        const text = $('noteDialogText');
        if (emoji) emoji.textContent = item.emoji;
        if (title) title.textContent = item.label;
        if (text) text.textContent = item.note;
        if (noteDialog && noteDialog.showModal) noteDialog.showModal();
      }

      initOpening();
      applyConfig();
      initSectionAmbience();
      initGoaMap();
      initGoaPhotos();
      initGoaStarMap();
      initGoaStarfield();
      initGoaCinematic();

      on($('catOpinionBtn'), 'click', function () {
        if (!catOpinion) catOpinion = $('catOpinion');
        showCatOpinion(catOpinion);
      });

      if (noteDialog) {
        on(noteDialog.querySelector('.note-dialog__close'), 'click', function () { noteDialog.close(); });
        on(noteDialog, 'click', function (e) {
          if (e.target === noteDialog) noteDialog.close();
        });
      }

      initUniverse(openNote);
      initMuseum();
      initSecretLoves();
      initMusicPlayer();
      initLittleMoments();
      initPromises();
      initWordsActions();
      initStepsFootprints();
      initFirstStep();
      initCornerCatGuide();
      initQuietSection();
      initEasterEggs();
      initForbiddenCat();
      initSecretEnding();

    } catch (err) {
      console.error('Mahi site init error:', err);
      showOpeningFallback();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
