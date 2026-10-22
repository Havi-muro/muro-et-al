---
layout: project
title: "Multitemporal optical and radar metrics for wetland mapping at national level in Albania"
permalink: /papers/multitemporal-optical-radar-metrics-wetland-mapping-albania/
excerpt: "We used the full Sentinel-1 and Sentinel-2 archives to produce the first national wetlands map of Albania. Combining radar and optical metrics, together with knowledge-based rules, raised the overall accuracy to 82% and increased the thematic resolution of wetland classes."
date: 2020-08-01
venue: "Heliyon, 6, e04496 (2020)"
paperurl: "https://doi.org/10.1016/j.heliyon.2020.e04496"
citation: "Muro, J., Varea, A., Strauch, A., Guelmami, A., Fitoka, E., Thonfeld, F., Diekkrüger, B., Waske, B. (2020). \"Multitemporal optical and radar metrics for wetland mapping at national level in Albania.\" <i>Heliyon</i>, 6, e04496."
authors: "Javier Muro, Ana Varea, Adrian Strauch, Anis Guelmami, Eleni Fitoka, Frank Thonfeld, Bernd Diekkrüger, Björn Waske"
affiliations: "Center for Remote Sensing of Land Surfaces (ZFL), University of Bonn · German Remote Sensing Data Center (DFD), German Aerospace Center (DLR) · Tour du Valat · Greek Biotope/Wetland Centre (EKBY) · Institute of Geography, University of Bonn · Institute of Geodesy and Geoinformation, University of Bonn"
summary_note: "Plain-language summary. The full article is available from the publisher."
read_time: true
paper_slug: multitemporal-optical-radar-metrics-wetland-mapping-albania
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

Wetlands are among the most productive ecosystems on Earth, yet they keep shrinking. The Ramsar Convention and the Sustainable Development Goals both ask countries to report regularly on how much wetland they still have, but many do not know: Albania's last national wetland inventory dates from 2003. Without an up-to-date map, authorities cannot judge the impact of the many hydropower dams planned in the region, nor protect the undammed rivers that still run through the country. Our work shows how free satellite data can fill that gap quickly.

## What we did

We used every Sentinel-1 radar image (264 overpasses) and every Sentinel-2 optical image (about 100 overpasses) acquired over Albania between June 2015 and June 2018, processed on the cloud platform Google Earth Engine. From the optical images we built a cloud-free median composite and a set of temporal metrics of three vegetation and water indices (NDVI, NDWI and NDBI); from the radar images we built a composite of the 99th, 50th and 5th percentiles of both polarisations. We classified the country with a Random Forest classifier into ten land-cover classes, using 300 reference polygons, and then applied morphological constraints to build a Potential Wetlands Mask and a set of knowledge-based rules.

![Figure 1. Location of Albania with its Digital Elevation Model and water bodies.](/muro-et-al/files/figures/multitemporal-optical-radar-metrics-wetland-mapping-albania/fig01.png)

*Figure 1. Albania and its terrain: the steep eastern highlands and the western floodplains where most wetlands sit.*

![Figure 2. Classification workflow. S1 and S2 are the Sentinel-1 and Sentinel-2 image collections.](/muro-et-al/files/figures/multitemporal-optical-radar-metrics-wetland-mapping-albania/fig02.png)

*Figure 2. The workflow: radar and optical composites are classified, then cleaned and refined by the mask and the knowledge-based rules.*

We validated the final product with an independent stratified random sample of 527 points and cross-checked it against the 2003 field inventory.

## What we found

- **Radar and optical together beat either sensor alone.** The highest overall accuracies came from combining Sentinel-1, Sentinel-2 and the spectral indices, while each dataset on its own performed "significantly lower than any combination of multiple datasets".
- **Spectral indices add information beyond raw bands.** Even though the indices were computed from the same Sentinel-2 images, combining them with the Sentinel-2 composite raised accuracy significantly.
- **The final map reached 82% overall accuracy** after post-classification processing with independent samples.
- **Post-classification rules tripled the wetland detail.** Knowledge-based criteria added "riverbanks", "riverine scrubs" and "dunes", raising the wetland-related classes from 3 to 6.
- **The 2003 inventory was largely recovered.** Of 694 inventoried wetlands, 99 fell outside the Potential Wetlands Mask and were excluded, and 577 were classified into one of the six wetland classes.
- **Residual confusion persists** between spectrally similar classes such as "heathland and scrub" and "grassland".

## How this can help

- Countries can meet their Ramsar and SDG 6.6.1 reporting duties with an operational, reproducible workflow built only on free data and a cloud platform.
- The approach delivers a ready-to-use national wetland product in the order of months, not years.
- Because the rules are generic, the method can be transferred to other countries facing the same reporting pressure.

## Where the map stops

The 20 m resolution suits national accounting but is too coarse to delineate narrow features such as individual riverbanks or small ponds. The Potential Wetlands Mask omits real wetlands sitting on masked terrain, which is why 99 inventoried sites were lost; a more conservative threshold would recover them but would admit more terrain artefacts. The 82% accuracy means local decisions should still be checked in the field.

</div>

## BibTeX

```bibtex
@article{Muro2020wetlands,
  title   = {Multitemporal optical and radar metrics for wetland mapping at national level in Albania},
  author  = {Muro, Javier and Varea, Ana and Strauch, Adrian and Guelmami, Anis and Fitoka, Eleni and Thonfeld, Frank and Diekkr{\"u}ger, Bernd and Waske, Bj{\"o}rn},
  journal = {Heliyon},
  volume  = {6},
  pages   = {e04496},
  year    = {2020},
  doi     = {10.1016/j.heliyon.2020.e04496}
}
```
