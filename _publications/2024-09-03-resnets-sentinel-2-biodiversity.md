---
title: 'ResNeTS: A ResNet for Time Series Analysis of Sentinel-2 Data Applied to Grassland Plant-Biodiversity Prediction'
collection: publications
category: manuscripts
permalink: /publication/2024-09-03-resnets-sentinel-2-biodiversity
excerpt: 'We adapted the ResNet architecture to the analysis of satellite time series and used it to predict species richness, Shannon and Simpson indices of temperate grasslands from Sentinel-2 data. ResNeTS improved the coefficient of determination of species richness from 0.42 to 0.63 over a multilayer perceptron, outperformed InceptionTime by up to 0.021 r², and required markedly less computation.'
date: 2024-09-03
venue: 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 17, 17349–17370'
paperurl: 'https://doi.org/10.1109/JSTARS.2024.3454271'
citation: 'Dieste, Á. G., Argüello, F., Heras, D. B., Magdon, P., Linstädter, A., Dubovyk, O., & Muro, J. (2024). "ResNeTS: A ResNet for Time Series Analysis of Sentinel-2 Data Applied to Grassland Plant-Biodiversity Prediction." <i>IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing</i>, 17, 17349–17370.'
read_time: true
---

{% assign paper = site.pages | where: "paper_slug", "resnets-sentinel-2-biodiversity" | first %}
{% if paper %}
{{ paper.content | markdownify }}
{% else %}
The plain-language summary and the selected figures of this paper are available on the [paper page]({{ '/papers/resnets-sentinel-2-biodiversity/' | relative_url }}).
{% endif %}
