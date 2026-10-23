---
title: 'Predicting Species and Structural Diversity of Temperate Forests with Satellite Remote Sensing and Deep Learning'
collection: publications
category: manuscripts
permalink: /publication/2022-03-29-temperate-forest-diversity-deep-learning
excerpt: 'We predicted tree species diversity and structural heterogeneity of 150 forest plots across three German regions from Sentinel-1 and Sentinel-2 features with a deep neural network. The standard deviation of tree diameter was modelled with r² = 0.51 from winter radar backscatter alone, whereas tree species diversity reached r² = 0.25 and depended mostly on multispectral texture.'
date: 2022-03-29
venue: 'Remote Sensing, 14(7), 1631'
paperurl: 'https://doi.org/10.3390/rs14071631'
citation: 'Hoffmann, J., Muro, J., & Dubovyk, O. (2022). "Predicting Species and Structural Diversity of Temperate Forests with Satellite Remote Sensing and Deep Learning." <i>Remote Sensing</i>, 14(7), 1631.'
read_time: true
---

{% assign paper = site.pages | where: "paper_slug", "temperate-forest-diversity-deep-learning" | first %}
{% if paper %}
{{ paper.content | markdownify }}
{% else %}
The plain-language summary and the selected figures of this paper are available on the [paper page]({{ '/papers/temperate-forest-diversity-deep-learning/' | relative_url }}).
{% endif %}
