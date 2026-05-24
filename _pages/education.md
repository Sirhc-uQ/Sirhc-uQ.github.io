---
layout: page
title: Education
permalink: /education/
description: My academic background.
nav: true
nav_order: 3
---

<div class="cv">
  {% assign cv = site.data.cv.cv %}
  {% assign empty_array = '' | split: ',' %}
  {% assign edu = cv.sections.Education | default: empty_array %}
  {% if edu.size > 0 %}
    <div class="card mt-3 p-3">
      <div>
        {% assign entries = edu %}
        {% include cv/education.liquid %}
      </div>
    </div>
  {% endif %}

  {% if cv.sections.Awards %}
    <div class="card mt-3 p-3">
      <h3 class="card-title font-weight-medium">Awards</h3>
      <div>
        {% assign entries = cv.sections.Awards %}
        {% include cv/awards.liquid %}
      </div>
    </div>
  {% endif %}
</div>
