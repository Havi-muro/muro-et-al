---
layout: project
title: 'Predicting Species and Structural Diversity of Temperate Forests with Satellite Remote Sensing and Deep Learning'
permalink: /papers/temperate-forest-diversity-deep-learning/
excerpt: 'A five-layer neural network fed with 31 Sentinel-1 and Sentinel-2 features predicted how variable tree diameters are in 150 German forest plots with r² = 0.51, and the Shannon index of tree species with r² = 0.25. Radar backscatter carried the structural signal, while the texture of the enhanced vegetation index carried the species signal.'
date: 2022-03-29
venue: 'Remote Sensing, 14(7), 1631 (2022)'
paperurl: 'https://doi.org/10.3390/rs14071631'
citation: 'Hoffmann, J., Muro, J., & Dubovyk, O. (2022). "Predicting Species and Structural Diversity of Temperate Forests with Satellite Remote Sensing and Deep Learning." <i>Remote Sensing</i>, 14(7), 1631.'
authors: 'Janik Hoffmann, Javier Muro, Olena Dubovyk'
affiliations: 'Center for Remote Sensing of Land Surfaces (ZFL), University of Bonn · Remote Sensing Research Group, University of Bonn · University of Bergen'
summary_note: 'Plain-language summary. The full article is available from the publisher.'
read_time: true
paper_slug: temperate-forest-diversity-deep-learning
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

A forest is not described by its area. Two stands of the same size and the same dominant tree can differ in how many species they hold and in how varied their trunks are, and that difference decides how much carbon they store and how they resist drought. Forest inventories measure both, but they are expensive, periodic and tied to sample plots, so maps of forest biodiversity at landscape scale barely exist. Satellites see every stand, yet a canopy is an opaque surface: the question is how much of what lies below it can be inferred, and whether a machine-learning model can learn that relation from a few hundred well-documented plots.

</div>

## What we did

We worked on 150 forest plots of the Biodiversity Exploratories, the same three German regions used for grassland research (Schorfheide-Chorin, Hainich-Dün and Schwäbische Alb), where forest inventories were recorded between 2014 and 2018 across a wide range of management types. From the inventories we derived two biodiversity variables: the Shannon-Wiener index of tree species, as a measure of species diversity, and the standard deviation of tree diameter at breast height, as a measure of how uneven the stand is.

The predictors were Sentinel-2 and Sentinel-1 images from 2017, reduced to 31 features in four groups: 13 Sentinel-2 features (spectral bands, Rao's Q and the enhanced vegetation index), 10 Sentinel-1 backscatter features including the normalised difference of winter VV and VH, 4 texture features computed on the enhanced vegetation index, and 4 texture features computed on the winter radar difference. The model was a feed-forward network of five layers, from a normalisation layer through three layers of 64 neurons to a single output, trained with RMSprop and a mean absolute error loss, and run ten times with randomly drawn training and validation data. Every feature group was tested alone and in combination, and each predictor was removed in turn to measure how much the model lost without it.

![Figure 1. Study sites.](/muro-et-al/files/figures/temperate-forest-diversity-deep-learning/fig01.jpg)

*Figure 1. The three study regions in Germany and the location of the 150 forest plots within them.*

## What we found

- **Structure is predictable from radar.** The standard deviation of tree diameter reached r² = 0.51 (RRMSE 0.33) with 16 Sentinel-1 features alone, and adding the other 15 features did not improve it significantly.
- **Species diversity is only partly visible.** The best model for the Shannon index used all 31 predictors and reached r² = 0.25 (RRMSE 0.60); texture of the enhanced vegetation index alone reached 0.20, all Sentinel-2 features 0.15, and radar backscatter alone 0.04.
- **Winter backscatter is the structural signal.** Descending-orbit winter VV and VH, and their normalised difference, ranked above growing-season acquisitions, because in winter the canopy is transparent enough for the radar to reach trunks and understorey.
- **Texture matters more than single bands.** Entropy of the enhanced vegetation index was the best multispectral texture feature, and the standard deviation of the index was the most relevant predictor within the Sentinel-2 group.
- **Other structural attributes follow the same pattern.** The model reached r² = 0.29 for basal area and 0.47 for stand density, but almost nothing for the standard deviation of tree height (r² = 0.02).
- **The plots are not spatially dependent.** Moran's I stayed close to zero for both variables (0.06 for species diversity, 0.21 for structure), which supports treating the ten random splits as honest validation.

![Figure 5. Workflow and network.](/muro-et-al/files/figures/temperate-forest-diversity-deep-learning/fig05.png)

*Figure 5. The workflow of the study and the architecture of the five-layer network that maps the 31 satellite features to a biodiversity variable.*

![Figure 9. Predicted against observed structural diversity.](/muro-et-al/files/figures/temperate-forest-diversity-deep-learning/fig09.png)

*Figure 9. Predicted against observed standard deviation of tree diameter for the 150 plots, from the model with sixteen Sentinel-1 features.*

## How this can help

- **Maps of forest structure from free data.** The radar-only model is accurate enough to map how uneven tree diameters are across a landscape, which is a practical proxy for habitat heterogeneity and for the maturity of a stand.
- **A realistic ceiling for species mapping.** Reporting r² = 0.25 rather than a flattering number tells managers that optical and radar imagery can rank stands by species diversity but cannot replace an inventory.
- **A guide to sensor choice.** Radar for structure and texture for species is a design rule for anyone assembling a monitoring system from Sentinel data.

## Where the map stops

The study covers 150 plots in three regions of one country, with inventory data from 2014 to 2018 and imagery from 2017, so a single year carries the prediction and interannual variation is untested. Species diversity is explained at r² = 0.25, which is too weak to map absolute values and only supports comparison between stands, and height variation is not captured at all. The models were validated by random splits within the same regions, not by transfer to a new landscape.

## BibTeX

```bibtex
@article{hoffmann2022temperate,
  title   = {Predicting Species and Structural Diversity of Temperate Forests with Satellite Remote Sensing and Deep Learning},
  author  = {Hoffmann, Janik and Muro, Javier and Dubovyk, Olena},
  journal = {Remote Sensing},
  volume  = {14},
  number  = {7},
  pages   = {1631},
  year    = {2022},
  doi     = {10.3390/rs14071631}
}
```
