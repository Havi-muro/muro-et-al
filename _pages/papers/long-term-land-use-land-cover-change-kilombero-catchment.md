---
layout: project
title: "Long-Term Land Use/Land Cover Change Assessment of the Kilombero Catchment in Tanzania Using Random Forest Classification and Robust Change Vector Analysis"
permalink: /papers/long-term-land-use-land-cover-change-kilombero-catchment/
excerpt: "Four decadal Landsat maps of Tanzania's 40,240 km² Kilombero catchment show that only a quarter of the area stayed unchanged between 1974 and 2014, that about 7,250 km² of natural vegetation became cropland, and that almost half of the Ramsar floodplain was converted to agriculture."
date: 2020-03-25
venue: "Remote Sensing, 12, 1057 (2020)"
paperurl: "https://doi.org/10.3390/rs12071057"
citation: "Frank Thonfeld, Stefanie Steinbach, Javier Muro, Fridah Kirimi. (2020). \"Long-Term Land Use/Land Cover Change Assessment of the Kilombero Catchment in Tanzania Using Random Forest Classification and Robust Change Vector Analysis\". <i>Remote Sensing</i>."
authors: "Frank Thonfeld, Stefanie Steinbach, Javier Muro, Fridah Kirimi"
affiliations: "German Aerospace Center (DLR) · University of Wuerzburg · University of Twente · University of Bonn · Jomo Kenyatta University of Agriculture and Technology"
summary_note: "Plain-language summary. The full article is available from the publisher."
read_time: true
paper_slug: long-term-land-use-land-cover-change-kilombero-catchment
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

The Kilombero catchment covers 40,240 km² of southern Tanzania. Its floodplain, at 200 to 250 m and enclosed by mountains reaching 2,500 m, is one of the largest wetlands in East Africa. It became a Ramsar site in 2002 and is an important bird area. Rice grown on its floodplain provides the main economic value of the valley, followed by sugarcane, forest products, fishing and livestock. It is also under pressure: pastoralist and agro-pastoralist groups have moved into the catchment, a bridge opened in 2017 improved access to the south, and the Southern Agricultural Growth Corridor of Tanzania plans large-scale farming. Decisions on food and conservation need maps of where land changed, not only how much. Landsat is the only medium-resolution archive covering 45 years, but tropical wetlands are cloudy, so usable records are thin.

## What we did

We produced land use/land cover maps for 1974, 1994, 2004 and 2014 from Landsat imagery: 17 scenes for the 1970s, then 100, 209 and 462 for the later periods. No gapless composite could be built for the 1980s, even using the whole decade, so it was skipped. For each period we calculated multitemporal metrics (10th, 25th, mean, 75th and 90th percentiles) of the six reflective bands and of NDVI, NDBI, NDWI and the Tasseled Cap brightness, greenness and wetness, added SRTM terrain variables, and classified the stack into eleven classes with a random forest. Change was measured twice: by post-classification comparison (PCC), which records class replacements, and by robust change vector analysis (RCVA) on the Tasseled Cap components, which detects spectral change without a new class. Overlaying both separates areas with PCC change only, spectral change only, both, or neither.

![Study area of the Kilombero catchment in Tanzania.](/muro-et-al/files/figures/long-term-land-use-land-cover-change-kilombero-catchment/fig01.png)

*Study area of the Kilombero catchment in Tanzania.*

![Classification workflow and change detection approach.](/muro-et-al/files/figures/long-term-land-use-land-cover-change-kilombero-catchment/fig02.png)

*Classification workflow and change detection approach.*

![LULC change patterns in the Kilombero catchment.](/muro-et-al/files/figures/long-term-land-use-land-cover-change-kilombero-catchment/fig03.png)

*LULC change patterns in the Kilombero catchment.*

## What we found

- **Less than a quarter of the catchment stayed unchanged.** Some 927,739 ha showed no change. About 1,440,899 ha, roughly one-third of the catchment, showed both PCC and spectral change, concentrated in the west and in the Kilombero floodplain.
- **Agriculture was the dominant change.** About 7,250 km² of natural vegetation, mostly grassland and savanna, became cropland since the 1970s, equal to 18% of the catchment, most of it between 2004 and 2014.
- **The protected floodplain was converted.** Rice became the dominant land cover inside the Ramsar site, and almost half of the site was converted from natural to anthropogenic use, mostly during the 21st century. Only 1,900 km² of floodplain grassland remain.
- **The maps held up, unevenly.** Independent validation gave overall accuracies of 64% to 74%, and out-of-bag errors of 3.28% to 6.67%. More than 80% of all pixels were classified with more than half of the votes in every year, from 85.37% in 1974 to 80.44% in 2014.
- **Uncertainty concentrated in the floodplain.** Savanna, grassland, open woodland and upland agriculture were the classes most often confused, and built-up areas had a low producer's accuracy because they cover very little of the catchment.
- **Spectral change pointed the same way.** Inside the floodplain, change directions indicated increasing brightness and decreasing greenness and wetness, the signature of vegetation removal and of bare periods.

## How this can help

- **Monitoring can be repeated.** The workflow turns cloudy Landsat scenes into comparable decadal layers, and classification probabilities show where a map should be trusted.
- **Management can be targeted.** Where both methods agree, the surface changed clearly and conversion is real rather than a classification artefact.
- **The maps serve policy.** They form part of the Kilombero valley management plan of late 2018 and provide a baseline for future monitoring.

## Where the map stops

Overall accuracies of 64% to 74% mean the maps should be read at the scale of fields and regions, not pixel by pixel, and PCC is known to overestimate change because errors from two classifications propagate into the comparison. The missing 1980s hide the timing between 1974 and 1994. Persistent cloud and high water vapour can create spurious spectral change, the rotation of rice with maize and vegetables is not represented, and the drivers of change were not analysed here. The results describe a 30 m, decadal view of one catchment and should not be transferred to other wetlands without a new classification.

</div>

## BibTeX

```bibtex
@article{longtermlanduselandcoverchangekilomberocatchment2020,
  title={Long-Term Land Use/Land Cover Change Assessment of the Kilombero Catchment in Tanzania Using Random Forest Classification and Robust Change Vector Analysis},
  author={Frank Thonfeld and Stefanie Steinbach and Javier Muro and Fridah Kirimi},
  journal={Remote Sensing},
  year={2020},
  doi={10.3390/rs12071057}
}
```
