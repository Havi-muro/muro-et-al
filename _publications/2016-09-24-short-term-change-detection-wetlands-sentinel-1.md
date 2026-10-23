---
title: "Short-Term Change Detection in Wetlands Using Sentinel-1 Time Series"
collection: publications
category: manuscripts
permalink: /publication/2016-09-24-short-term-change-detection-wetlands-sentinel-1
excerpt: "This study uses remote sensing to assess environmental change and provides insights relevant for land management and conservation."
date: 2016-09-24
venue: "Remote Sensing"
paperurl: "https://doi.org/10.3390/rs8100795"
citation: "Javier Muro, Morton Canty, Knut Conradsen, Christian Huttich, Allan Aasbjerg Nielsen, Henning Skriver, Florian Remy, Adrian Strauch, Frank Thonfeld, Gunter Menz. (2016). \"Short-Term Change Detection in Wetlands Using Sentinel-1 Time Series\". <i>Remote Sensing</i>."
read_time: true
---

{% assign paper = site.pages | where: "paper_slug", "short-term-change-detection-wetlands-sentinel-1" | first %}
{% if paper %}
{{ paper.content | markdownify }}
{% else %}
The plain-language summary and the selected figures of this paper are available on the [paper page]({{ '/papers/short-term-change-detection-wetlands-sentinel-1/' | relative_url }}).
{% endif %}
