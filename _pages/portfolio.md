---
layout: page
title: Portfolio
permalink: /portfolio/
description: A showcase of my musical compositions, performances, and creative projects that demonstrate my journey in music technology.
nav: true
nav_order: 3
horizontal: false
---

<!-- Portfolio Hero Section -->
<div class="portfolio-hero" style="background: var(--global-card-bg-color); padding: 2.5rem 2rem; border-radius: 15px; margin-bottom: 3rem; border-left: 5px solid var(--global-theme-color); box-shadow: 0 5px 15px var(--global-divider-color); border: 1px solid var(--global-divider-color);">
  <div class="row align-items-center">
    <div class="col-lg-8 col-md-7">
      <div class="hero-content">
        <div class="d-flex align-items-center mb-3">
          <div style="background: linear-gradient(135deg, var(--global-theme-color) 0%, #8b5cf6 100%); width: 50px; height: 50px; border-radius: 15px; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
            <span style="font-size: 1.5rem; color: white;">🎼</span>
          </div>
          <div>
            <h1 style="color: var(--global-text-color); margin: 0; font-size: 2.2rem; font-weight: 700;">Creative Portfolio</h1>
            <p style="color: var(--global-theme-color); margin: 0; font-size: 1rem; font-weight: 500;">Musical Compositions & Performances</p>
          </div>
        </div>
        <p style="font-size: 1.15rem; color: var(--global-text-color-light); margin-bottom: 1rem; line-height: 1.6;">
          Discover my musical journey through original compositions, live performances, and creative projects that showcase technical mastery and artistic expression across diverse genres.
        </p>
        <div class="portfolio-highlights d-flex flex-wrap gap-3">
          <div class="highlight-item" style="background: rgba(102, 126, 234, 0.08); padding: 0.6rem 1rem; border-radius: 25px; border: 1px solid rgba(102, 126, 234, 0.15);">
            <span style="color: var(--global-theme-color); font-weight: 600; font-size: 0.9rem;">🎵 Original Compositions</span>
          </div>
          <div class="highlight-item" style="background: rgba(102, 126, 234, 0.08); padding: 0.6rem 1rem; border-radius: 25px; border: 1px solid rgba(102, 126, 234, 0.15);">
            <span style="color: var(--global-theme-color); font-weight: 600; font-size: 0.9rem;">🎤 Live Performances</span>
          </div>
          <div class="highlight-item" style="background: rgba(102, 126, 234, 0.08); padding: 0.6rem 1rem; border-radius: 25px; border: 1px solid rgba(102, 126, 234, 0.15);">
            <span style="color: var(--global-theme-color); font-weight: 600; font-size: 0.9rem;">🎹 Multi-Genre</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-5">
      <div class="portfolio-info" style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%); padding: 1.2rem; border-radius: 16px; border: 1px solid rgba(102, 126, 234, 0.1);">
        <h5 style="color: var(--global-theme-color); margin-bottom: 1rem; font-weight: 600; text-align: center;">🎯 Portfolio Focus</h5>
        <div class="focus-areas">
          <div class="focus-item mb-2" style="padding: 0.6rem; background: rgba(255, 255, 255, 0.7); border-radius: 12px; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
            <div class="d-flex align-items-center mb-1">
              <i class="fas fa-music" style="color: var(--global-theme-color); margin-right: 0.5rem;"></i>
              <h6 style="color: var(--global-theme-color); margin: 0; font-weight: 600;">Video Showcases</h6>
            </div>
            <p style="color: var(--global-text-color-light); margin: 0; font-size: 0.85rem;">Watch performances and hear compositions</p>
          </div>
          <div class="focus-item mb-2" style="padding: 0.6rem; background: rgba(255, 255, 255, 0.7); border-radius: 12px; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
            <div class="d-flex align-items-center mb-1">
              <i class="fas fa-palette" style="color: var(--global-theme-color); margin-right: 0.5rem;"></i>
              <h6 style="color: var(--global-theme-color); margin: 0; font-weight: 600;">Creative Process</h6>
            </div>
            <p style="color: var(--global-text-color-light); margin: 0; font-size: 0.85rem;">Behind-the-scenes composition insights</p>
          </div>
          <div class="focus-item" style="padding: 0.6rem; background: rgba(255, 255, 255, 0.7); border-radius: 12px; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
            <div class="d-flex align-items-center mb-1">
              <i class="fas fa-code" style="color: var(--global-theme-color); margin-right: 0.5rem;"></i>
              <h6 style="color: var(--global-theme-color); margin: 0; font-weight: 600;">Tech Integration</h6>
            </div>
            <p style="color: var(--global-text-color-light); margin: 0; font-size: 0.85rem;">Music technology implementations</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.portfolio | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.portfolio | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
