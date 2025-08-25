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
            window.location.href = "/blog/";
          },
        },{id: "nav-portfolio",
          title: "Portfolio",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-timeline",
          title: "Timeline",
          description: "A timeline of my experiences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-deconstructing-a-classic-what-makes-the-moog-minimoog-sound-so-iconic",
        
          title: "Deconstructing a Classic: What Makes the Moog Minimoog Sound So Iconic?",
        
        description: "A deep dive into the circuitry and design philosophy that gives the legendary Minimoog its timeless sound.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/deconstructing-the-moog/";
          
        },
      },{id: "post-hello-world",
        
          title: "Hello , world!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/helloworld/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-the-clockwork-sparrow-short-film-score",
          title: 'The Clockwork Sparrow - Short Film Score',
          description: "An orchestral and electronic score for a student animated short, capturing a mood of wonder and mechanical melancholy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clockwork-sparrow/";
            },},{id: "projects-neon-cityscape-original-composition",
          title: 'Neon Cityscape - Original Composition',
          description: "An original electronic track inspired by retro-futuristic cityscapes, blending analog synth textures with modern production.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/neon-cityscape/";
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
