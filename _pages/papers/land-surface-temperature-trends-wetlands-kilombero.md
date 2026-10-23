---
layout: project
title: "Land surface temperature trends as indicator of land use changes in wetlands"
permalink: /papers/land-surface-temperature-trends-wetlands-kilombero/
excerpt: "Using the full MODIS land surface temperature archive from 2000 to 2017, we found warming of 2–3 K in the core of the Kilombero Ramsar site and up to 6 K along its boundary, with trends that match farmland expansion and deforestation but also reach uncultivated wetland."
date: 2018-08-01
venue: "International Journal of Applied Earth Observation and Geoinformation, 70, 62-71 (2018)"
paperurl: "https://doi.org/10.1016/j.jag.2018.02.002"
citation: "Javier Muro, Adrian Strauch, Sascha Heinemann, Stefanie Steinbach, Frank Thonfeld, Bjorn Waske, Bernd Diekkruger. (2018). \"Land surface temperature trends as indicator of land use changes in wetlands\". <i>International Journal of Applied Earth Observation and Geoinformation</i>."
authors: "Javier Muro, Adrian Strauch, Sascha Heinemann, Stefanie Steinbach, Frank Thonfeld, Bjorn Waske, Bernd Diekkruger"
affiliations: "University of Bonn · Free University of Berlin · Forschungszentrum Julich GmbH"
summary_note: "Plain-language summary. The full article is available from the publisher."
read_time: true
paper_slug: land-surface-temperature-trends-wetlands-kilombero
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

The Kilombero valley in Tanzania is the largest seasonal wetland in East Africa. Its basin covers 4,023,025 ha and the main river floodplain about 796,700 ha. It is a Ramsar site and holds endangered species such as the puku antelope. It supplies clean water downstream, and it was a corridor between the Udzungwa Mountains National Park and the Selous Game Reserve, two of whose corridors have recently stopped functioning. Population growth and uncontrolled farming have converted land quickly, and decadal maps cannot show gradual change within a class: the thinning of a wood, the drainage of a marsh, the slow decline of a grassland. Land surface temperature integrates water and energy fluxes, responds to drought earlier than vegetation indices, and MODIS measures it daily at 1 km since 2000.

## What we did

We used the full MODIS land surface temperature archive from 2000 to 2017: eight-day composites at 1 km, with errors within ±1 K in most cases. Trends were estimated with three models from the greenbrown R package: a seasonal trend model that fits linear and harmonic terms to the series, annual means, and the annual 90th percentile. Trends were kept when significant at the 90% confidence level, and slopes were rescaled to a change in kelvin over the period. A first run assumed monotonic trends; a second allowed one break point, with a minimum segment length of 2.5 years. To interpret the trends we used a land cover change map for 2003-2005 and 2014-2016, built from Landsat with a random forest on Tasseled Cap metrics and terrain variables, compared by post-classification with a change vector analysis mask. Changes were grouped into farmland expansion, deforestation, forestation and no change. We also correlated the temperature trends with MODIS NDVI trends at 500 m.

![Location of the Kilombero catchment and wetland areas.](/muro-et-al/files/figures/land-surface-temperature-trends-wetlands-kilombero/fig01.png)

*Location of the Kilombero catchment and wetland areas.*

![Methodological workflow for LST time series analysis.](/muro-et-al/files/figures/land-surface-temperature-trends-wetlands-kilombero/fig02.png)

*Methodological workflow for LST time series analysis.*

![Spatial patterns of LST trends in the Kilombero catchment.](/muro-et-al/files/figures/land-surface-temperature-trends-wetlands-kilombero/fig03.png)

*Spatial patterns of LST trends in the Kilombero catchment.*

## What we found

- **The wetland warmed most at its edges.** Monotonic increases averaged 2–3 K in the core of the Ramsar site and reached up to 6 K along its boundary.
- **The warming was not uniform.** The southern and northern parts of the Ramsar site showed lesser or no trends; mild decreases appeared in a permanent swamp inside the site and stronger decreases where plantations had been established.
- **Land change explained part of it.** Farmland expansion on grasslands raised surface temperature by almost 3 K (±1), deforestation by more than 2 K (±1.5). Even areas labelled no change warmed.
- **Temperature and vegetation moved in opposite directions.** The correlation between temperature and NDVI change was −0.56 for pixels with significant trends in both.
- **The three models agreed, with different emphasis.** The seasonal trend model and annual means agreed closely (r = 0.81); the 90th percentile found fewer significant trends, with larger magnitudes.
- **Break points dated the changes.** A sugarcane farm expanding onto wetland produced a break point, and an upland forest converted to small-scale farming warmed after a break point in 2008 (p ≤ 0.001); where plantation forestry was established the trend turned negative (p ≤ 0.001).

## How this can help

- **One indicator for managers.** Temperature trend maps condense the effect of land processes on water and energy fluxes into one layer that can be produced operationally.
- **Restoration can be aimed.** The defunct Ruipa and Nyanganje corridors pass through areas where surface temperature rose, so restoring them addresses connectivity and warming together.
- **Impacts beyond the fields can be seen.** Warming in the uncultivated core suggests that farming and cattle raising affect the wetland beyond the cultivated edge, which matters for plans to modernise agriculture.

## Where the map stops

MODIS pixels are 1 km across, so the maps are not useful for wetlands smaller than 1 km × 1 km, even where single-pixel trends remain meaningful. The land cover change map has an overall accuracy of 60%, with forestation overestimated, and its 30 m resolution is much finer than the temperature data, so class averages mix land cover. Trend methods risk over- and underestimation, and cloud and low-quality pixels can still affect the signal; the mountain ridges are almost always cloudy, and trends there are questionable. Seventeen years is too short to separate climate change from land use.

</div>

## BibTeX

```bibtex
@article{landsurfacetemperaturetrendswetlandskilombero2018,
  title={Land surface temperature trends as indicator of land use changes in wetlands},
  author={Javier Muro and Adrian Strauch and Sascha Heinemann and Stefanie Steinbach and Frank Thonfeld and Bjorn Waske and Bernd Diekkruger},
  journal={International Journal of Applied Earth Observation and Geoinformation},
  year={2018},
  doi={10.1016/j.jag.2018.02.002}
}
```
