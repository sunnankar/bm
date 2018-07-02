---
title: Charts -Charts
description: Charts - Charts
---
{% assign charts = site.pages|where:'chart','true'|where:'lang',page.lang %}

<h2>{{ page.title }}</h2>
All charts:
<ul>
{% for chart in charts %}
  <li><a href="{{ chart.url }}">{{ chart.title }}</a></li>
{% endfor %}
</ul>
