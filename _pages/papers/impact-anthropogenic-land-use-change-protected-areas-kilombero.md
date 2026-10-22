---
layout: project
title: "The impact of anthropogenic land use change on the protected areas of the Kilombero catchment, Tanzania"
permalink: /papers/impact-anthropogenic-land-use-change-protected-areas-kilombero/
excerpt: "The Kilombero floodplain in Tanzania is both a Ramsar wetland and a national priority for agricultural expansion. Using 40 years of land use maps, building density and a maxEnt model, we show that strictly protected areas held back human impact while the Ramsar site lost almost half its area to anthropogenic uses."
date: 2020-10-01
venue: "ISPRS Journal of Photogrammetry and Remote Sensing, 168, 41-55 (2020)"
paperurl: "https://doi.org/10.1016/j.isprsjprs.2020.07.019"
citation: "Thonfeld, F., Steinbach, S., Muro, J., Hentze, K., Games, I., Näschen, K., Kauzeni, P.F. (2020). \"The impact of anthropogenic land use change on the protected areas of the Kilombero catchment, Tanzania.\" <i>ISPRS Journal of Photogrammetry and Remote Sensing</i>, 168, 41-55."
authors: "Frank Thonfeld, Stefanie Steinbach, Javier Muro, Konrad Hentze, Ian Games, Kristian Näschen, Pellage Francis Kauzeni"
affiliations: "German Remote Sensing Data Center (DFD), German Aerospace Center (DLR) · Center for Remote Sensing of Land Surfaces (ZFL), University of Bonn · Faculty of Geo-Information Science and Earth Observation (ITC), University of Twente · Institute of Geography, University of Bonn · Sokoine University of Agriculture"
summary_note: "Plain-language summary. The full article is available from the publisher."
read_time: true
paper_slug: impact-anthropogenic-land-use-change-protected-areas-kilombero
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

The Kilombero floodplain is one of the largest wetlands in Africa and a Ramsar site of international importance, yet the Tanzanian government has also designated it as a priority zone for agricultural expansion. More than half of the catchment is legally protected, under seven different categories that range from strictly protected national parks to loosely regulated open areas. Nobody knew whether that protection actually worked, because no study had looked at the whole catchment over time. This is the first, and it matters for how the country balances food production and conservation.

## What we did

We used long-term land use/land cover (LULC) maps of the 40,240 km² catchment for 1974, 1994, 2004 and 2014, derived from Landsat multitemporal metrics and classified with a Random Forest into eleven classes. We grouped four classes (upland agriculture, rice, built-up and teak plantations) into one anthropogenic class and compared its share across each protected-area category. As an independent measure of human pressure, we mapped building density in 1 km × 1 km cells using a satellite-derived building footprint dataset. Finally, we trained a maximum-entropy (maxEnt) model on 2,000 sampled anthropogenic points and eleven terrain, soil and bioclimatic variables to predict where similar conditions for human use exist in the region.

![Fig. 1. Protected areas within the Kilombero catchment. Please note that some categories may partially overlap. SRTM DEM depicting topography of the Kilombero catchment with hilly highlands in the west and the flat Kilombero floodplain in the central part.](/muro-et-al/files/figures/impact-anthropogenic-land-use-change-protected-areas-kilombero/fig01.png)

*Fig. 1. The Kilombero catchment and its overlapping protected areas, from the flat central floodplain to the western highlands.*

![Fig. 4. Anthropogenic land uses (built-up, upland agriculture, rice, teak plantation) and natural land uses 1974, 1994, 2004 and 2014 (a). (b) shows the percentage of anthropogenic land use classes per period and per protected area.](/muro-et-al/files/figures/impact-anthropogenic-land-use-change-protected-areas-kilombero/fig04.png)

*Fig. 4. How anthropogenic land use spread across the catchment and inside each protected-area category between 1974 and 2014.*

## What we found

- **Protection status made a difference.** Strictly protected areas such as the Udzungwa Mountain National Park and the Selous Game Reserve were "virtually free from any anthropogenic land use class throughout the study period".
- **The Ramsar site was the most threatened.** Almost half of the Kilombero Ramsar site was covered by anthropogenic classes by 2014.
- **Overall, 17% of all protected areas and about 26% of the catchment were under anthropogenic use in 2014.**
- **Rice expanded dramatically.** The Ramsar site lost natural swamps, savanna, grassland and closed woodland, while rice acreage "virtually exploded between 2004 and 2014".
- **Human pressure was concentrated outside protection.** Anthropogenic area covered about 9,500 km² and held around 250,000 buildings; the average building density was 26.35 buildings/km², rising to 30.10 in inhabited cells.
- **Large areas remain suitable but contested.** About 670,000 ha share conditions similar to currently used land, and two thirds of it lies inside protected areas.

## How this can help

- Conservation managers can see which categories actually resist encroachment and prioritise enforcement where it is weakest.
- The suitability map shows where future agricultural pressure is most likely, so planners can steer it away from the Ramsar site.
- The building-density layer gives a repeatable, catchment-wide measure of human presence for monitoring over time.

## Where the map stops

The analysis rests on four decadal LULC snapshots, so it captures the direction of change but not its precise timing within each decade. Protected areas overlap, which complicates per-category accounting. The maxEnt output is a relative suitability surface, not a forecast of where agriculture will necessarily go, and it should be read alongside policy and market drivers rather than instead of them.

</div>

## BibTeX

```bibtex
@article{Thonfeld2020kilombero,
  title   = {The impact of anthropogenic land use change on the protected areas of the Kilombero catchment, Tanzania},
  author  = {Thonfeld, Frank and Steinbach, Stefanie and Muro, Javier and Hentze, Konrad and Games, Ian and N{\"a}schen, Kristian and Kauzeni, Pellage Francis},
  journal = {ISPRS Journal of Photogrammetry and Remote Sensing},
  volume  = {168},
  pages   = {41--55},
  year    = {2020},
  doi     = {10.1016/j.isprsjprs.2020.07.019}
}
```
