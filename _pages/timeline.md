---
layout: page
title: Musical Journey Timeline
permalink: /timeline/
description: A chronological journey through my musical evolution and achievements.
nav: true
nav_order: 4
---

<!-- Hero Section for Timeline -->
<div class="timeline-hero" style="background: var(--global-card-bg-color); padding: 3rem 2rem; border-radius: 15px; margin-bottom: 3rem; border-left: 5px solid var(--global-theme-color); box-shadow: 0 5px 15px var(--global-divider-color); border: 1px solid var(--global-divider-color);">
  <div class="row align-items-center">
    <div class="col-md-8">
      <h1 style="color: var(--global-text-color); margin-bottom: 1rem;">🎨 Creative Journey Through Time</h1>
      <p style="font-size: 1.2rem; color: var(--global-text-color-light); margin-bottom: 0;">
        Witness the evolution of my musical voice - from childhood inspirations to sophisticated arrangements, each composition reflects a chapter in my artistic growth and technical mastery
      </p>
    </div>
    <div class="col-md-4 text-center">
      <div style="background: rgba(102, 126, 234, 0.1); padding: 2rem; border-radius: 15px;">
        <h3 style="color: var(--global-theme-color); margin-bottom: 1rem;">🎨 Creative Milestones</h3>
        <div style="margin-bottom: 1rem;">
          <h4 style="color: var(--global-theme-color);">8</h4>
          <p style="color: var(--global-text-color-light); margin: 0;">Original Works</p>
        </div>
        <div style="margin-bottom: 1rem;">
          <h4 style="color: var(--global-theme-color);">7</h4>
          <p style="color: var(--global-text-color-light); margin: 0;">Years Creating</p>
        </div>
        <div>
          <h4 style="color: var(--global-theme-color);">Diverse Styles</h4>
          <p style="color: var(--global-text-color-light); margin: 0;">Ballads to Battle Themes</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="timeline">
  {% for event in site.data.timeline %}
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <p class="timeline-title">
          <span class="year-badge">{{ event.year }}</span>
          {{ event.title }}
        </p>
        {% if event.description %}
          {% for desc in event.description %}
            <p>{{ desc }}</p>
          {% endfor %}
        {% endif %}
        {% if event.youtube_id and event.youtube_id != '' %}
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/{{ event.youtube_id }}?rel=0&showinfo=0"
              allowfullscreen>
            </iframe>
          </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

<!-- Call to Action -->
<div class="text-center" style="margin-top: 3rem; padding: 2rem; background: var(--global-card-bg-color); border-radius: 15px; border-left: 5px solid var(--global-theme-color); border: 1px solid var(--global-divider-color); box-shadow: 0 5px 15px var(--global-divider-color);">
  <h3 style="color: var(--global-theme-color); margin-bottom: 1rem;">🎆 What's Next?</h3>
  <p style="font-size: 1.1rem; margin-bottom: 2rem; color: var(--global-text-color-light);">
    This timeline represents my past achievements, but the most exciting chapters are yet to be written.
    I'm eager to bring my passion for music technology to college and beyond.
  </p>
  <a href="/portfolio/" class="btn" style="background: var(--global-theme-color); color: var(--global-hover-text-color); padding: 0.75rem 2rem; border-radius: 25px; text-decoration: none; display: inline-block; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    🎵 Explore My Portfolio
  </a>
</div>
