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
        },{id: "nav-awards",
          title: "Awards",
          description: "A comprehensive collection of my musical achievements, certifications, and international recognitions in composition and performance.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-portfolio",
          title: "Portfolio",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "nav-timeline",
          title: "Timeline",
          description: "A timeline of my experiences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/timeline/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "post-introduction-of-yamaha-electone-festivel-yef",
        
          title: "Introduction of Yamaha Electone Festivel (YEF)",
        
        description: "A brief introduction to the Yamaha Electone Festival (YEF).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/insights/2024/intro-to-yef/";
          
        },
      },{id: "post-yef-experience",
        
          title: "YEF Experience",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/insights/2023/yef-experience/";
          
        },
      },{id: "portfolio-persue",
          title: 'Persue',
          description: "Listen to Persue NOW !",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/persue/";
            },},{id: "portfolio-the-battle-of-gai-xia-yef",
          title: 'The Battle of Gai Xia (YEF)',
          description: "Listen to The Battle of GaiXia (YEF) NOW !",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/the-battle-of-gai-xia-yef/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
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
