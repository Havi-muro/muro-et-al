---
title: 'Field spectroscopy and machine learning successfully predict grassland forage quality and quantity across climate zones'
collection: publications
category: manuscripts
permalink: /publication/2025-09-11-field-spectroscopy-forage-quality
excerpt: 'We assessed the performance and transferability of global and regional machine-learning predictions of forage quality, quantity and their combined proxy from hyperspectral canopy reflectance in temperate, humid tropical and dry subtropical grasslands. Random forest performed best, and forage quality was predicted more accurately than quantity, although no method achieved full spatial transferability.'
date: 2025-09-11
venue: 'Ecological Informatics, 92, 103426'
paperurl: 'https://doi.org/10.1016/j.ecoinf.2025.103426'
citation: 'Männer, F. A., Muro, J., Dubovyk, O., Ferner, J., Guuroh, R. T., Knox, N. M., Schmidtlein, S., & Linstädter, A. (2025). "Field spectroscopy and machine learning successfully predict grassland forage quality and quantity across climate zones." <i>Ecological Informatics</i>, 92, 103426.'
read_time: true
---

{% assign paper = site.pages | where: "paper_slug", "field-spectroscopy-forage-quality" | first %}
{% if paper %}
{{ paper.content | markdownify }}
{% else %}
The plain-language summary and the selected figures of this paper are available on the [paper page]({{ '/papers/field-spectroscopy-forage-quality/' | relative_url }}).
{% endif %}
