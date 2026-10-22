---
layout: project
title: "Land cover change effects on land surface temperature trends in an African urbanizing dryland region"
permalink: /papers/land-cover-change-effects-land-surface-temperature-african-dryland/
excerpt: "We analysed 18 years of MODIS daytime and night-time land surface temperature and vegetation data over Gaborone, Botswana, a fast-growing dryland city. Land cover transitions were tied to warming trends that differ between day and night, and between the city core and its expanding periphery."
date: 2019-12-01
venue: "City and Environment Interactions, 4, 100029 (2019)"
paperurl: "https://doi.org/10.1016/j.cacint.2020.100029"
citation: "Akinyemi, F.O., Ikanyeng, M., Muro, J. (2019). \"Land cover change effects on land surface temperature trends in an African urbanizing dryland region.\" <i>City and Environment Interactions</i>, 4, 100029."
authors: "Felicia O. Akinyemi, Mphoentle Ikanyeng, Javier Muro"
affiliations: "Centre for Sustainability, University of Otago · Center for Remote Sensing of Land Surfaces (ZFL), University of Bonn"
summary_note: "Plain-language summary. The full article is available from the publisher."
read_time: true
paper_slug: land-cover-change-effects-land-surface-temperature-african-dryland
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

Most studies of how cities heat up look at megacities, while the small and medium cities where most future urban growth will happen in Africa are largely ignored. Gaborone, the capital of Botswana, has grown from under 4,000 people in 1964 to more than 230,000 today, on a semi-arid plain. Knowing how the conversion of grassland and cropland into built-up areas changes surface temperature, and especially how that differs between day and night, is essential for designing neighbourhoods that stay liveable as the climate warms.

## What we did

We analysed the full MODIS archive from July 2000 to June 2018, using daytime and night-time land surface temperature (LST) and the Normalised Difference Vegetation Index (NDVI) at 250 m. We detected trends and breakpoints with linear regression and the Greenbrown package, keeping results significant at the 90% confidence level. To map land change, we compared a 2000 land cover map with a 2018 map we produced from Landsat 8 (85% classification accuracy), and reduced error propagation with Change Vector Analysis. We then profiled LST trends in five sites (A–E) chosen to represent distinct land covers and transitions, including the Gaborone dam, the built-up core, settlement-expansion areas and rural settlements.

![Fig. 1. Study location Gaborone in southeast Botswana.](/muro-et-al/files/figures/land-cover-change-effects-land-surface-temperature-african-dryland/fig01.png)

*Fig. 1. Gaborone sits in semi-arid southeast Botswana, between the Kgale and Oodi hills and the Gaborone dam.*

![Fig. 2. Land cover change during 2000-2018, a) losses and persistence, b) gains and persistence, c) change budget (percent of the study area).](/muro-et-al/files/figures/land-cover-change-effects-land-surface-temperature-african-dryland/fig02.png)

*Fig. 2. What changed between 2000 and 2018: which land covers were lost, which were gained, and how much of the area stayed the same.*

## What we found

- **The city grew fast.** Artificial surfaces rose from 108.48 km² (12.26%) to 222.98 km² (25.21%), and tree-covered areas from 100.8 km² (11.40%) to 210.23 km² (23.77%).
- **Grassland and cropland shrank.** Grassland fell from 627.27 km² (70.92%) to 421 km² (47.6%), and cropland halved from 24.45 km² (2.76%) to 12.82 km² (1.45%).
- **Temperatures rose, day and night, but differently.** Daytime warming was highest over the Gaborone dam (2.6 to 5.7 K), while night-time there fell slightly (−1.2 to 0.2 K).
- **Built-up areas warm most at night.** The built-up core showed daytime warming of 0.1 to 1.8 K but night-time warming of 0.8 to 2.2 K.
- **The periphery warms more than the core.** Settlement-expansion areas reached daytime increases of 0.3 to 4.5 K, and rural settlements 1.2 to 2.2 K.
- **Irrigation cools by day.** Irrigated cropland showed the lowest daytime trend, down to −0.4 K, while abandoned cropland warmed (0.8 to 1.3 K by day).

## How this can help

- City planners can target cooling measures, such as trees and reflective materials, at the periphery where warming is strongest, rather than only at the core.
- The rising night-time temperatures signal more energy needed for night cooling, useful for electricity and building design.
- The approach works with free MODIS and Landsat data and is transferable to other emerging dryland cities.

## Where the map stops

MODIS pixels are 250 to 1000 m, so results describe neighbourhood-scale patterns, not individual streets or buildings. Over these dryland landscapes climatic variability appears to explain more of the LST signal than land cover alone, so the land-change effect should be read as a contribution, not the sole driver. The findings are tied to Gaborone's semi-arid context and should not be extrapolated to humid cities without re-analysis.

</div>

## BibTeX

```bibtex
@article{Akinyemi2019lst,
  title   = {Land cover change effects on land surface temperature trends in an African urbanizing dryland region},
  author  = {Akinyemi, Felicia O. and Ikanyeng, Mphoentle and Muro, Javier},
  journal = {City and Environment Interactions},
  volume  = {4},
  pages   = {100029},
  year    = {2019},
  doi     = {10.1016/j.cacint.2020.100029}
}
```
