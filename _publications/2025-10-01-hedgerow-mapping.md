---
title: 'Hedgerow mapping with high resolution satellite imagery to support policy initiatives at national level'
collection: publications
category: manuscripts
permalink: /publication/2025-10-01-hedgerow-mapping
excerpt: 'We evaluate the potential of high-resolution PlanetScope multitemporal satellite data and semantic segmentation approaches to map the distribution of hedgerows across the entire agricultural landscape in Germany. Visible and near-infrared imagery from all four monthly mosaics of PlanetScope data yielded better results (F1-score 0.65) than other month combinations and red-green-blue inputs alone. We estimate a total surface of 4081 (± 1425) km² of hedgerows across Germany, representing 2.3 % of the agricultural land in Germany.'
date: 2025-10-01
venue: 'Remote Sensing of Environment, 328, 114870'
paperurl: 'https://doi.org/10.1016/j.rse.2025.114870'
citation: 'Muro, J., Blickensdörfer, L., Don, A., Köber, A., Asam, S., Schwieder, M., & Erasmi, S. (2025). "Hedgerow mapping with high resolution satellite imagery to support policy initiatives at national level." <i>Remote Sensing of Environment</i>, 328, 114870.'
---

{% assign paper = site.pages | where: "paper_slug", "hedgerow-mapping" | first %}
{% if paper %}
{{ paper.content | markdownify }}
{% else %}
The full text of this paper, including all figures, is available on the [paper page]({{ '/papers/hedgerow-mapping/' | relative_url }}).
{% endif %}
