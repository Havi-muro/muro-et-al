---
layout: project
title: "Earth Observation for Settlement Mapping of Amazonian Indigenous Populations to Support SDG7"
permalink: /papers/earth-observation-settlement-mapping-amazonian-indigenous/
excerpt: "Indigenous communities in the Ecuadorian Amazon often lack electricity, yet their settlements are too small and too isolated to appear in global maps. Combining Landsat time series with very-high-resolution imagery, and validating with field surveys, we modelled settlement locations and house numbers well enough to plan rural electrification."
date: 2020-08-16
venue: "Resources, 9, 97 (2020)"
paperurl: "https://doi.org/10.3390/resources9080097"
citation: "Muro, J., Zurita-Arthos, L., Jara, J., Calderón, E., Resl, R., Rienow, A., Graw, V. (2020). \"Earth Observation for Settlement Mapping of Amazonian Indigenous Populations to Support SDG7.\" <i>Resources</i>, 9, 97."
authors: "Javier Muro, Leo Zurita-Arthos, José Jara, Esteban Calderón, Richard Resl, Andreas Rienow, Valerie Graw"
affiliations: "Center for Remote Sensing of Land Surfaces (ZFL), University of Bonn · Universidad Regional Amazónica Ikiam · Universidad San Francisco de Quito · Geoinformation in Environmental Planning Lab, Technical University of Berlin · Institute of Geography, University of Bonn"
summary_note: "Plain-language summary. The full article is available from the publisher."
read_time: true
paper_slug: earth-observation-settlement-mapping-amazonian-indigenous
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

Although 99% of Ecuador's population has access to electricity, some Amazonian parishes remain below 1%. Governments and development agencies cannot plan grid extensions without knowing where people live, how many houses there are and how the settlements will grow, but in the Amazon this information is missing: villages are tiny, made of local materials, and hidden under persistent cloud cover. Field inspections are slow and expensive. We show that satellite data can fill the gap and support Sustainable Development Goal 7 (affordable, reliable energy for all).

## What we did

We studied two areas of the Ecuadorian Amazon that together cover seven of the country's ten indigenous nationalities. We used the Tasseled Cap Wetness component of a 2013–2018 Landsat-8 median composite as a proxy for cleared land, which marks settlements in rainforest, and separated settlements with the Otsu and Rosin thresholding methods. To link cleared area to actual houses, we manually digitised every building visible in very-high-resolution SkySat (1 m) and PlanetScope (3 m) images for 2019. We then compared these counts with a field survey of 49 communities and 725 households, collected by eight trained indigenous technicians, and projected settlement growth to 2030 with the SLEUTH urban growth model.

![Figure 1. Night-time lights map of Ecuador; the study areas in the Ecuadorian Amazon are outlined.](/muro-et-al/files/figures/earth-observation-settlement-mapping-amazonian-indigenous/fig01.png)

*Figure 1. Night-time lights over Ecuador show how dark the Amazon study areas remain, despite the bright cities of the highlands and coast.*

![Figure 4. Growth types of SLEUTH.](/muro-et-al/files/figures/earth-observation-settlement-mapping-amazonian-indigenous/fig04.png)

*Figure 4. SLEUTH's four growth rules, which define how settlements are allowed to spread from one year to the next.*

![Figure 5. Examples of PlanetScope and SkySat images of indigenous communities.](/muro-et-al/files/figures/earth-observation-settlement-mapping-amazonian-indigenous/fig05.png)

*Figure 5. Very-high-resolution images of communities, from large electrified villages to small isolated settlements.*

## What we found

- **Cleared land is a strong proxy for settlement size.** Across all communities within 200 m of the 725 surveyed households, cleared-land pixels and digitised buildings gave r = 0.85 and adjusted R² = 0.72.
- **The relation holds around community centres too.** Within a 500 m radius of the 49 surveyed communities it gave r = 0.84 and adjusted R² = 0.70.
- **Population tracks buildings.** Survey population correlated with the number of buildings at r = 0.82 (adjusted R² = 0.67).
- **Directly combining survey and satellite data was weaker.** Cleared land versus houses declared in the survey gave only r = 0.58 (adjusted R² = 0.32), and versus inhabitants r = 0.30 (adjusted R² = 0.07).
- **The upscaled model is moderate but usable.** Applied to 1,726 potential settlement clusters, the predicted house count matched digitised houses at r = 0.69.
- **Growth continues.** SLEUTH projected settlement-area growth of 59% (north) and 63% (south) by 2030, at 34,866 ha/year and 2,901 ha/year respectively.

## How this can help

- Energy agencies can estimate where and how many houses will need service, and draft rural electrification plans in months instead of years.
- The method is simple enough to be handed over to trained indigenous technicians, so that communities themselves can map their own territories and update the information over time.
- The same maps of settlement location and size feed broader SDG planning for services beyond electricity.

## Where the map stops

The relationship is calibrated to rainforest settlements built of local materials; it should not be transferred to other biomes or housing styles without re-calibration. Many false positives occur, so individual clusters must be verified. SLEUTH is a pure growth model: it cannot represent decline or fragmentation, and rotational agriculture makes permanent settlement boundaries hard to define.

</div>

## BibTeX

```bibtex
@article{Muro2020settlements,
  title   = {Earth Observation for Settlement Mapping of Amazonian Indigenous Populations to Support SDG7},
  author  = {Muro, Javier and Zurita-Arthos, Leo and Jara, Jos{\'e} and Calder{\'o}n, Esteban and Resl, Richard and Rienow, Andreas and Graw, Valerie},
  journal = {Resources},
  volume  = {9},
  pages   = {97},
  year    = {2020},
  doi     = {10.3390/resources9080097}
}
```
