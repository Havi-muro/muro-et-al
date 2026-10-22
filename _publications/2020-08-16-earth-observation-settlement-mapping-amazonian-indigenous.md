---
title: "Earth Observation for Settlement Mapping of Amazonian Indigenous Populations to Support SDG7"
collection: publications
category: manuscripts
permalink: /publication/2020-08-16-earth-observation-settlement-mapping-amazonian-indigenous
excerpt: "Indigenous communities in the Ecuadorian Amazon often lack electricity, yet their settlements are too small and too isolated to appear in global maps. Combining Landsat time series with very-high-resolution imagery, and validating with field surveys, we modelled settlement locations and house numbers well enough to plan rural electrification."
date: 2020-08-16
venue: "Resources"
paperurl: "https://doi.org/10.3390/resources9080097"
citation: "Muro, J., Zurita-Arthos, L., Jara, J., Calderón, E., Resl, R., Rienow, A., Graw, V. (2020). \"Earth Observation for Settlement Mapping of Amazonian Indigenous Populations to Support SDG7.\" <i>Resources</i>, 9, 97."
---

{% assign paper = site.pages | where: "paper_slug", "earth-observation-settlement-mapping-amazonian-indigenous" | first %}
{% if paper %}
{{ paper.content | markdownify }}
{% else %}
The plain-language summary and the selected figures of this paper are available on the [paper page]({{ '/papers/earth-observation-settlement-mapping-amazonian-indigenous/' | relative_url }}).
{% endif %}
