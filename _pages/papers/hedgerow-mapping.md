---
layout: project
title: 'Hedgerow mapping with high resolution satellite imagery to support policy initiatives at national level'
permalink: /papers/hedgerow-mapping/
excerpt: 'Hedgerows shelter wildlife, store carbon and protect fields from erosion, yet Germany has no complete map of where they are. Using monthly 3 m satellite images and a deep-learning model, we mapped hedgerows across the German agricultural landscape: they cover about 2.3 % of farmland, roughly 372,000 km in total, and are concentrated in the north and north-west.'
date: 2025-10-01
venue: 'Remote Sensing of Environment, 328, 114870 (2025)'
paperurl: 'https://doi.org/10.1016/j.rse.2025.114870'
citation: 'Muro, J., Blickensdörfer, L., Don, A., Köber, A., Asam, S., Schwieder, M., & Erasmi, S. (2025). "Hedgerow mapping with high resolution satellite imagery to support policy initiatives at national level." <i>Remote Sensing of Environment</i>, 328, 114870.'
authors: 'Javier Muro, Lukas Blickensdörfer, Axel Don, Anna Köber, Sarah Asam, Marcel Schwieder, Stefan Erasmi'
affiliations: 'Thünen Institute of Farm Economics · Geography Department, Humboldt Universität zu Berlin · Thünen Institute of Climate-Smart Agriculture · German Remote Sensing Data Center (DLR)'
summary_note: 'Plain-language summary. The full article is available from the publisher.'
read_time: true
paper_slug: hedgerow-mapping
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

Hedgerows, the lines of shrubs and trees between fields, shelter insects, birds and bats, store carbon in their wood and in the soil, and slow down wind and water so that soil stays on the field.

Germany has lost about half of its hedgerows in the last 70 years, as fields were merged and enlarged. Three European policies now ask for them to be protected and planted: the Common Agricultural Policy, the LULUCF regulation, which counts the carbon they store, and the Nature Restoration Law, which sets restoration targets for farmland. All three need something that did not exist: a complete, consistent and repeatable map of where hedgerows are.

</div>

## What we did

We combined satellite images with a deep-learning model. PlanetScope, a constellation of small satellites, pictures the Earth at 3 m resolution, close enough to see a hedgerow a few metres wide. For each month of the 2022 growing season (April, June, August and October) we used a cloud-free mosaic of Germany, and trained a neural network to recognise hedgerows, defined as woody lines narrower than 20 m in agricultural land.

The model learned from reference data in Schleswig-Holstein, the state with the most hedgerows, and was tested on independent data from North Rhine-Westphalia, Brandenburg and Bavaria. We also compared it with two existing European maps of woody features.

![Figure 1. Reference data used for training and testing.](/muro-et-al/files/figures/hedgerow-mapping/fig01.jpg)

*Figure 1. Reference data used to train the model (yellow, Schleswig-Holstein) and to test it (blue, Schleswig-Holstein, North Rhine-Westphalia, Brandenburg and Bavaria).*

![Figure 2. How the map was produced.](/muro-et-al/files/figures/hedgerow-mapping/fig02.jpg)

*Figure 2. How the map was produced: monthly satellite images are stacked, a deep-learning model is trained and tested, its predictions are compared with existing products, and combined with a surface height model to describe hedgerow height.*

## What we found

- **Season matters.** All four months plus the near-infrared band, invisible to the eye but good at separating wood from crops, gave the best results. A single month invented hedgerows along streams and ditches.
- **It travels, with limits.** Accuracy held up in Brandenburg but dropped in Bavaria, where hedgerows are shorter, more scattered and mixed with forest patches and orchards.
- **The totals are reliable.** Predicted and observed hedgerow length agree closely tile by tile (r² = 0.96), so the map is trustworthy at regional and national scale, not for planning a single field.
- **Germany has about 4,081 km² of hedgerows** (± 1,425, 90 % confidence), or 2.3 % (± 0.8 %) of its farmland: roughly 372,000 km, about 2.1 km of hedgerow for every square kilometre of farmland.
- **They are unevenly spread.** Up to 29 % of farmland in a single 1 km² cell in the north and north-west, and very little in the south and south-east.
- **Existing maps are no substitute.** They report more woody area but miss many narrow hedgerows. Combined with surface height, our map also shows that regular coppicing, which hedgerows need to stay healthy, is applied to only part of them.

![Figure 8. Hedgerow length predicted and observed, tile by tile.](/muro-et-al/files/figures/hedgerow-mapping/fig08.jpg)

*Figure 8. Hedgerow length predicted by our model and by the two existing products against the observed length, tile by tile, for three federal states. The closer a point sits to the diagonal, the better the estimate.*

![Figure 11. Share of agricultural land covered by hedgerows in Germany.](/muro-et-al/files/figures/hedgerow-mapping/fig11.jpg)

*Figure 11. Share of agricultural land covered by hedgerows, aggregated in 1 km² hexagons. Hedgerows are concentrated in the north and north-west of Germany.*

## How this can help

- **A baseline for policy.** Districts can be compared with a single method, so those with little hedgerow cover can be prioritised for planting and restoration.
- **Monitoring that repeats.** The method can run on new images every year to show whether measures work, the monitoring, reporting and verification that the three regulations require.
- **Climate and biodiversity targets.** Hedgerows and other small woody features cover about 4 % of German farmland, while the benefits for wildlife accelerate up to about 6 %. Planting 6,000 km² of hedgerows between 2025 and 2045 has been estimated to capture around 5 Mt CO₂ per year.

## Where the map stops

It answers national and regional questions, not the question of what grows in a particular field: for that, higher-resolution imagery and a visit remain better. Recently cut hedgerows, and hedgerows within a few metres of a forest, are the hardest to recognise.

## BibTeX

```bibtex
@article{muro2025hedgerow,
  title   = {Hedgerow mapping with high resolution satellite imagery to support policy initiatives at national level},
  author  = {Muro, Javier and Blickensdörfer, Lukas and Don, Axel and Köber, Anna and Asam, Sarah and Schwieder, Marcel and Erasmi, Stefan},
  journal = {Remote Sensing of Environment},
  volume  = {328},
  pages   = {114870},
  year    = {2025},
  doi     = {10.1016/j.rse.2025.114870}
}
```
