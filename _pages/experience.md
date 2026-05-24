---
layout: page
title: Experience
permalink: /experience/
description: My professional experience.
nav: true
nav_order: 1
---

<div class="cv">
  {% assign cv = site.data.cv.cv %}
  {% assign empty_array = '' | split: ',' %}
  {% assign exp = cv.sections.Experience | default: empty_array %}
  {% if exp.size > 0 %}
    <div class="card mt-3 p-3">
      <div>
        {% assign entries = exp %}
        {% include cv/experience.liquid %}
      </div>
    </div>
  {% endif %}

  {% if cv.sections.Skills %}
    <div class="card mt-3 p-3">
      <h3 class="card-title font-weight-medium">Skills</h3>
      <div>
        {% assign entries = cv.sections.Skills %}
        {% include cv/skills.liquid %}
      </div>
    </div>
  {% endif %}
</div>
