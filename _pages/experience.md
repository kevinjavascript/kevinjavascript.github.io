---
layout: page
title: Timeline
permalink: /experience/
description: A timeline of my experiences.
nav: true
nav_order: 4
---

<div class="timeline">
  {% for event in site.data.experience %}
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <p class="timeline-title">{{ event.year }} - {{ event.title }}</p>
        <p>{{ event.description }}</p>
        {% if event.youtube_id %}
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/{{ event.youtube_id }}" allowfullscreen></iframe>
          </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
