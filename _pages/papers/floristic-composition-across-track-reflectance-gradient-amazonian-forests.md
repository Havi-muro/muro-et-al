---
layout: project
title: "Floristic composition and across-track reflectance gradient in Landsat images over Amazonian forests"
permalink: /papers/floristic-composition-across-track-reflectance-gradient-amazonian-forests/
excerpt: "Field surveys of 150 transects in Peruvian and Brazilian Amazonia show that the across-track reflectance gradient in Landsat images is linear and independent of floristic composition, but that forest types differ in mean reflectance, so view-angle corrections must account for floristic variation."
date: 2016-09-01
venue: "ISPRS Journal of Photogrammetry and Remote Sensing, 119, 108-118 (2016)"
paperurl: "https://doi.org/10.1016/j.isprsjprs.2016.06.016"
citation: "Javier Muro, Jasper Van doninck, Hanna Tuomisto, Mark A. Higgins, Gabriel M. Moulatlet, Kalle Ruokolainen. (2016). \"Floristic composition and across-track reflectance gradient in Landsat images over Amazonian forests\". <i>ISPRS Journal of Photogrammetry and Remote Sensing</i>."
authors: "Javier Muro, Jasper Van doninck, Hanna Tuomisto, Mark A. Higgins, Gabriel M. Moulatlet, Kalle Ruokolainen"
affiliations: "University of Turku · Carnegie Institution for Science"
summary_note: "Plain-language summary. The full article is available from the publisher."
read_time: true
paper_slug: floristic-composition-across-track-reflectance-gradient-amazonian-forests
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

Amazonian rain forest is not a uniform green blanket. On the lowland plains of northern Peru and western Brazil, the species composition of the forest follows the geology: soils derived from the Pebas Formation hold about ten times more cations than those of the Nauta Formation, and the forest communities change sharply across the boundary, with a plant species turnover of 80-90%. Mapping that turnover from Landsat is difficult because reflectance differences between forest types are subtle. It is made harder by the way a forest reflects light: the same stand appears brighter or darker at the centre or the edge of the swath, an effect of the bidirectional reflectance distribution function. A simple empirical correction would make routine mapping possible, but only if it does not mistake real floristic gradients for viewing geometry.

## What we did

We used 105 field transects in Peru, surveyed in 2005-2006, and 45 in Brazil, surveyed in 2012. Each transect was 500 m long and 5 m wide, and recorded ferns and lycophytes and Melastomataceae, two groups known to track the composition of canopy trees. Composition was summarised with non-metric multidimensional scaling. Two sets of Landsat TM/ETM+ data were used: two mosaics from five cloud-free images, and 45 surface-reflectance images from 1987 to 2011 over three scenes crossing the Pebas/Nauta boundary, with 17, 14 and 14 acquisitions. Reflectance for each transect came from image segments rather than single pixels. We then fitted a cubic trend surface of digital number against reconstructed column number, which measures position across the image, and the floristic score, adding terms step by step; a linear gradient is acceptable if higher-order column terms do not improve the fit. Finally we regressed reflectance against column number on each formation separately, using 10,000 random points each, for all 45 images and every band, and compared slopes with paired t-tests and Wilcoxon tests.

![Location of study areas in Peruvian and Brazilian Amazonia.](/muro-et-al/files/figures/floristic-composition-across-track-reflectance-gradient-amazonian-forests/fig01.png)

*Location of study areas in Peruvian and Brazilian Amazonia.*

![Across-track reflectance gradient in Landsat imagery.](/muro-et-al/files/figures/floristic-composition-across-track-reflectance-gradient-amazonian-forests/fig02.png)

*Across-track reflectance gradient in Landsat imagery.*

![Relationship between floristic composition and reflectance patterns.](/muro-et-al/files/figures/floristic-composition-across-track-reflectance-gradient-amazonian-forests/fig03.png)

*Relationship between floristic composition and reflectance patterns.*

## What we found

- **Position across the image explained most of the variation.** Column number alone gave adjusted R² values of 0.924, 0.857, 0.842, 0.779, 0.936 and 0.933 in Peru for bands 1 to 5 and 7, and 0.848, 0.823, 0.723, 0.729, 0.869 and 0.848 in Brazil.
- **The gradient was linear.** Higher-order terms in column number brought only small gains in fit, so a straight line is adequate across the Landsat swath.
- **Floristics entered through the infrared.** Adding the floristic score did not improve visible bands, but it did improve the infrared: by 0.102 for band 4 in Peru, 0.051 for band 7 in Brazil, and 0.017 to 0.022 for the remaining bands.
- **Forest type did not change the gradient.** Only two scenes, 003/064 and 008/062, showed significant differences between slopes on the two formations, the Brazilian scene opposite to the Peruvian ones; pooled, the difference was not significant at p = 0.05.
- **Pooling the formations changed the fitted slope.** Slopes calculated separately per formation differed significantly from pooled ones in the green and all infrared bands for every scene, and the sign reversed between Brazil and Peru because the formations sit on opposite sides of the images.
- **There was also a real east-west trend.** Floristic scores were higher on the Pebas Formation and fell from west to east within each formation, following soil cation concentration.

## How this can help

- **View-angle correction can become routine.** A linear, scene-based correction is adequate for Landsat over these forests.
- **Geology can stand in for floristics.** Where field data are missing, stratifying the image by geological formation before fitting the correction protects the natural gradient.
- **The choice depends on the map.** For deforestation, ignoring floristic variation is probably harmless; for mapping floristic variation itself, it can be detrimental.

## Where the map stops

The study covers non-inundated terra firme forest; seasonally inundated forest was masked out. Extensive floristic datasets are rarely available over large areas, which is why a simple correction is attractive. The 45 scenes cover three path/row combinations, and the surveys and images were not contemporary, although the forests were undisturbed. The linear approximation is demonstrated for the Landsat swath and these forests; applying it to other sensors, terrain or forest types would need its own test.

</div>

## BibTeX

```bibtex
@article{floristiccompositionacrosstrackreflectancegradientamazonianforests2016,
  title={Floristic composition and across-track reflectance gradient in Landsat images over Amazonian forests},
  author={Javier Muro and Jasper Van doninck and Hanna Tuomisto and Mark A. Higgins and Gabriel M. Moulatlet and Kalle Ruokolainen},
  journal={ISPRS Journal of Photogrammetry and Remote Sensing},
  year={2016},
  doi={10.1016/j.isprsjprs.2016.06.016}
}
```
