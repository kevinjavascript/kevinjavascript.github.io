// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-spotlights",
    title: "Spotlights",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-insights",
          title: "Insights",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/insights/index.html";
          },
        },{id: "nav-awards-amp-achievements",
          title: "Awards &amp; Achievements",
          description: "A comprehensive collection of my musical achievements, certifications, and international recognitions in composition and performance.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-portfolio",
          title: "Portfolio",
          description: "Several projects across multiple disciplines",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "nav-timeline-for-early-works",
          title: "Timeline for Early Works",
          description: "A chronological journey through my musical evolution and achievements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/timeline/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "Professional resume showcasing my musical journey, achievements, and academic pursuits in music technology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "post-the-future-of-music-technology-my-vision-and-journey",
        
          title: "The Future of Music Technology: My Vision and Journey",
        
        description: "Reflecting on how technology is reshaping music creation and my role as a future music technologist.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/insights/2025/future-of-music-technology/";
          
        },
      },{id: "portfolio-the-battle-of-gai-xia",
          title: 'The Battle of Gai Xia',
          description: "An epic musical narrative depicting the legendary final battle of Xiang Yu.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/bog/";
            },},{id: "portfolio-diy-environment-quality-monitor",
          title: 'DIY Environment Quality Monitor',
          description: "An ECE project using perfboard as final product",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/eqm/";
            },},{id: "portfolio-mountain-resonance",
          title: 'Mountain Resonance',
          description: "An Exploration to Human-Computer-Interaction Music",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/moutainresonance/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%61%75%6E%61_%77%75@%71%71.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
