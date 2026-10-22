---
layout: project
title: 'Accounting for spatial interactions in the upscaling of ecosystem services'
permalink: /papers/spatial-interactions-upscaling/
excerpt: 'Maps of ecosystem services usually multiply a land-cover map by a fixed value per class, ignoring local conditions and what lies next door. We set out a seven-step framework that builds a spatially informed production function, and show on German grasslands that adding spatial interactions improved predictions by 15% to 33% and cut the error of the upscaled estimates.'
date: 2026-03-17
venue: 'Methods in Ecology and Evolution, 17, 1671-1687 (2026)'
paperurl: 'https://doi.org/10.1111/2041-210X.70281'
citation: 'Boesing, A. L., Le Provost, G., Neyret, M., Linstädter, A., Muro, J., Müller, J., Jung, K., Fischer, M., Lange, M., Dubovyk, O., Magdon, P., Bolliger, R., Leimer, S., Boch, S., Renner, S., Kleinebecker, T., Hamer, U., Klaus, V. H., Wilcke, W., & Manning, P. (2026). "Accounting for spatial interactions in the upscaling of ecosystem services." <i>Methods in Ecology and Evolution</i>, 17(5), 1671-1687.'
authors: 'Andrea Larissa Boesing, Gaëtane Le Provost, Margot Neyret, Anja Linstädter, Javier Muro, Jörg Müller, Kirsten Jung, Markus Fischer, Maximilian Lange, Olena Dubovyk, Paul Magdon, Ralph Bolliger, Sophia Leimer, Steffen Boch, Swen Renner, Till Kleinebecker, Ute Hamer, Valentin H. Klaus, Wolfgang Wilcke, Peter Manning'
affiliations: 'Senckenberg Biodiversity and Climate Research Centre · INRAE, Bordeaux Science Agro · Université Grenoble Alpes · University of Potsdam · Thünen Institute of Farm Economics · Heinz Sielmann Foundation · University of Ulm · University of Bern · Helmholtz-Centre for Environmental Research UFZ · University of Hamburg · HAWK Göttingen · Karlsruhe Institute of Technology · WSL Swiss Federal Research Institute · Natural History Museum Vienna · Justus Liebig University Giessen · University of Münster · Agroscope · Ruhr University Bochum · University of Bergen'
summary_note: 'Plain-language summary. The full article is available from the publisher.'
read_time: true
paper_slug: spatial-interactions-upscaling
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

Maps of ecosystem services, the benefits a landscape gives people, decide where conservation money goes and which areas are restored. Most are built the same cheap way: take a land-cover map, multiply each class by a fixed value, and paint the country. Grassland therefore delivers a constant amount of groundwater recharge wherever it lies.

That shortcut has two blind spots: it ignores the local conditions, such as slope, soil depth or soil phosphorus, that decide how much of a service a place delivers, and it ignores the neighbourhood, because a meadow bordered by hedgerows behaves nothing like an identical meadow surrounded by intensive fields.

</div>

## What we did

We turned the missing step into a procedure. The core idea is a spatially informed production function: the supply of a service at a point is modelled from the local drivers of that point **and** from the properties of the surrounding landscape. We organise the drivers in a hierarchy of controls: abiotic factors such as climate, soil and topography; management factors such as mowing, grazing and fertilisation; landscape factors such as the diversity of land uses around the site; and biotic factors such as plant diversity.

The framework has seven steps: define the area, identify the services, identify multiple proxy drivers across the hierarchy, select the statistical model, submit the drivers to expert evaluation, validate the refitted model, and upscale. Each step records the data it needs and the decision it settles, so a map can be reproduced and audited.

We applied the sequence to grasslands of the German Biodiversity Exploratories, a long-term platform in three regions, for two services: biodiversity conservation, measured as the above-ground multidiversity of the grassland, and water supply, measured as groundwater recharge. We then compared the best model with the spatial interaction terms against the same model without them, and repeated the exercise for 11 services and 17 indicators.

![Figure 1. The spatially informed production function.](/muro-et-al/files/figures/spatial-interactions-upscaling/fig01.png)

*Figure 1. The proposed spatially informed ecosystem service production function (a), in which local drivers are combined with the properties of the surrounding landscape, and the expectation (b) that biodiversity-mediated services depend more strongly on spatial interactions than abiotic, process-based services.*

![Figure 2. The seven steps of the framework.](/muro-et-al/files/figures/spatial-interactions-upscaling/fig02.png)

*Figure 2. The seven-step analytical framework, from defining the area to upscaling, that turns plot-level ecological knowledge into a spatial prediction.*

## What we found

- **Spatial context carried much of the signal for biodiversity.** Removing the landscape heterogeneity term (Shannon's diversity of land uses around the plot) reduced the explained variance from 47% to 32% and increased the RMSE from 0.07 to 0.09.
- **Water supply hinged on what surrounds the field.** Dropping the landscape term reduced the explained variance by 25% and increased the RMSE from 53.1 to 67.1.
- **A non-spatial model collapses to a handful of values.** Without landscape drivers, groundwater recharge was predicted as only two numbers, 646.41 mm on Braunerde-Terra fusca and 549.80 mm on Rendzina-Braunerde, against a spatial range of 319.4 to 739.4 mm, and was overestimated by as much as 200 mm, roughly 32%, where coniferous cover is high.
- **The two services listen to different neighbours.** Grasslands with a diverse mix of surrounding land uses, on steep slopes and with deep, phosphorus-poor soils held the highest multidiversity; groundwater recharge was highest where coniferous cover was low.
- **The gain is systematic.** Spatial interactions improved model predictions by 15% to 33%, depending on the service.
- **The framework travels across services.** Applied to 11 services and 17 indicators, errors averaged 14%, and 54% for cultural services, whose indicators are shaped by human preference rather than biophysics alone.

![Figure 6. Predictions with and without spatial interactions.](/muro-et-al/files/figures/spatial-interactions-upscaling/fig06.png)

*Figure 6. Predicted multidiversity (a) and groundwater recharge (c) with and without the spatial interaction terms along the gradients of landscape heterogeneity and coniferous cover, and the difference between the two predictions (b, d): the non-spatial model flattens real gradients and misplaces both services.*

## How this can help

- **Maps that can be defended.** Because every driver and coefficient is documented, a payment or zoning decision can be traced to its evidence, and the error of the estimate stated alongside the map.
- **What-if questions.** The function can be re-run with altered drivers, so a planner can ask what happens to water supply if coniferous cover falls, before the change is made.
- **Where to spend the effort.** The framework shows which services are governed by spatial context and which are not, so mapping budgets go where the neighbourhood actually matters.

## Where the map stops

The relationships are statistical, not causal: the framework predicts well inside the conditions it was trained on, and it needs reference plots to fit. Cultural services remain poorly captured because preference, not biophysics alone, drives them. The demonstration covers grasslands in three German regions, at the resolution of the satellite predictors: the maps can rank regions and target measures, but they cannot tell a farmer what a single field will yield.

## BibTeX

```bibtex
@article{boesing2026spatial,
  title   = {Accounting for spatial interactions in the upscaling of ecosystem services},
  author  = {Boesing, Andrea Larissa and Le Provost, Gaëtane and Neyret, Margot and Linstädter, Anja and Muro, Javier and Müller, Jörg and Jung, Kirsten and Fischer, Markus and Lange, Maximilian and Dubovyk, Olena and Magdon, Paul and Bolliger, Ralph and Leimer, Sophia and Boch, Steffen and Renner, Swen and Kleinebecker, Till and Hamer, Ute and Klaus, Valentin H. and Wilcke, Wolfgang and Manning, Peter},
  journal = {Methods in Ecology and Evolution},
  volume  = {17},
  number  = {5},
  pages   = {1671--1687},
  year    = {2026},
  doi     = {10.1111/2041-210X.70281}
}
```
