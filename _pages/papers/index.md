---
layout: single
title: 'Papers'
permalink: /papers/
excerpt: 'Full-text versions of the papers published by Muro et al., including all figures.'
author_profile: false
---

Full-text versions of the papers published by Muro et al., including all figures.

<ul class="paper-list">
{% assign paper_pages = site.pages | where_exp: "p", "p.paper_page" | sort: "date" | reverse %}
{% for p in paper_pages %}
  <li>
    <span class="paper-list__title"><a href="{{ p.url | relative_url }}">{{ p.title }}</a></span>
    <span class="paper-list__venue"><i>{{ p.venue }}</i>, {{ p.date | date: "%Y" }}</span>
    {% assign words = p.content | strip_html | number_of_words %}
    {% assign mins = words | divided_by: site.words_per_minute %}
    {% if mins < 1 %}{% assign mins = 1 %}{% endif %}
    <span class="paper-list__meta">{{ mins }} min read</span>
  </li>
{% endfor %}
</ul>
