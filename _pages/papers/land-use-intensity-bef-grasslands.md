---
layout: project
title: 'Land-use intensity effects on the biodiversity-ecosystem functioning relationship in semi-natural grasslands at management-relevant spatial scales'
permalink: /papers/land-use-intensity-bef-grasslands/
excerpt: 'Management is applied to whole fields and farms, while biodiversity and biomass are usually studied in small plots. Using satellite-based prediction maps of species richness, biomass and land-use intensity for two German regions, we show that intensive management directly reduces species richness and its spatial variability, and that the diversity-productivity relationship steepens as the unit of management grows.'
date: 2025-08-11
venue: 'Landscape Ecology, 40, 170 (2025)'
paperurl: 'https://doi.org/10.1007/s10980-025-02186-x'
citation: 'Meyer, S. N., Muro, J., Wöllauer, S., Schwarz, L.-M., Männer, F. A., Dubovyk, O., & Linstädter, A. (2025). "Land-use intensity effects on the biodiversity-ecosystem functioning relationship in semi-natural grasslands at management-relevant spatial scales." <i>Landscape Ecology</i>, 40, 170.'
authors: 'Sophia N. Meyer, Javier Muro, Stephan Wöllauer, Lisa-Maricia Schwarz, Florian A. Männer, Olena Dubovyk, Anja Linstädter'
affiliations: 'University of Potsdam · Center for Remote Sensing of Land Surfaces (ZFL), University of Bonn · Thünen Institute of Farm Economics · HAWK University of Applied Sciences and Arts · Institute of Crop Science and Resource Conservation, University of Bonn · Fraunhofer Institute for Computer Graphics Research IGD · University of Hamburg'
summary_note: 'Plain-language summary. The full article is available from the publisher.'
read_time: true
paper_slug: land-use-intensity-bef-grasslands
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

Semi-natural grasslands hold much of Europe's plant diversity, and they exist only because they are mown or grazed. Intensify that management and the diversity falls, while the biomass that farmers harvest rises. The trade-off is described by the biodiversity-ecosystem functioning relationship, one of the most studied relationships in ecology, and it is almost always measured in plots of a few square metres.

That is the wrong scale for policy: a farmer fertilises a field, a farm applies one plan across many fields, and a subsidy is paid per hectare of a management unit, not per plot. If the relationship between diversity and productivity changes with the size of the unit, advice based on plot data may aim at the wrong target.

</div>

## What we did

We worked in two German regions of the Biodiversity Exploratories, Schorfheide-Chorin and Hainich-Dün, in 2020 and 2021. Instead of a handful of field observations, we used prediction maps: species richness and aboveground biomass modelled from Sentinel-2 imagery, and land-use intensity modelled the same way from management records.

Those maps were read at three grains, each a real management unit: virtual plots (single pixels, comparable to a survey plot), fields (the actual boundaries) and farms (the fields managed by one holding). For each we computed average richness and biomass and their spatial variability as a coefficient of variation; Rao's Q captured environmental heterogeneity inside a unit.

We fitted piecewise structural equation models to separate the direct effect of land-use intensity from the indirect effects that pass through species richness and its spatial variability, then compared the slope of the biodiversity-productivity relationship across the three grains at different levels of intensity.

![Figure 1. Direct and indirect pathways.](/muro-et-al/files/figures/land-use-intensity-bef-grasslands/fig01.png)

*Figure 1. The conceptual framework: land-use intensity acts on species richness and on its spatial variability, which in turn act on the spatial variability of biomass production, at the field and farm scale.*

![Figure 2. From satellite maps to management units.](/muro-et-al/files/figures/land-use-intensity-bef-grasslands/fig02.jpg)

*Figure 2. The workflow: prediction maps of richness, biomass and land-use intensity are aggregated to virtual plots, fields and farms, and analysed with structural equation models.*

## What we found

- **Intensification reduces richness directly.** Land-use intensity lowered species richness in all four region-year subsets, with standardised path coefficients from -0.15 in Schorfheide-Chorin in 2021 to -0.29 in Hainich-Dün in 2020.
- **It also flattens richness in space.** The direct effect on the spatial variability of richness was negative in three of the four subsets, though weak, between -0.06 and -0.13.
- **Richness did not buffer biomass variability.** The path from richness to the variability of biomass was positive in every model, up to 0.44 in Hainich-Dün in 2020, and the path from the variability of richness was stronger still in three of the four models (0.20 to 0.29). Diversity acted as a mediator of intensification, not as an insurance against it.
- **The mediated effect is small.** Total mediation of land-use intensity on the variability of biomass through both richness measures reached -0.15 in Hainich-Dün in 2020, against -0.04 and -0.03 in the two Schorfheide-Chorin models.
- **The diversity-productivity relationship is negative and steepens with scale.** Richness and biomass were negatively related in all models, and the relationship between richness and the spatial variability of biomass grew steeper from the plot to the farm scale. Under high land-use intensity in Hainich-Dün in 2020, one unit of richness corresponded to 0.30 units of biomass variability at the virtual plot scale and 1.09 units at the farm scale; under low intensity, to 0.21 and 0.86.
- **Field structure differs between the regions.** Schorfheide-Chorin had fields up to 1.39 ha and farms up to 8.88 ha larger than Hainich-Dün.

![Figure 4. Richness against biomass at three scales.](/muro-et-al/files/figures/land-use-intensity-bef-grasslands/fig04.jpg)

*Figure 4. The relationship between species richness and biomass at the virtual plot, field and farm scale, at different levels of land-use intensity.*

## How this can help

- **Advice at the scale of the decision.** Because the units analysed are the fields and farms that a farmer and an administration actually manage, the results can be used to argue about management units rather than about sample plots.
- **Where diversity matters most.** The steepening of the relationship with scale shows that the diversity of a whole farm, not of a single square, governs how variable its biomass production is, which is what a farm needs to buffer a dry year.
- **A test for agri-environmental policy.** The framework links satellite maps to management units, so the effect of a scheme on both diversity and production can be evaluated at the level at which the scheme is paid.

## Where the map stops

Everything rests on upscaled predictions: the relationship computed from those maps was significant where the one computed from measured plot data was not, so the two cannot be compared directly. The study covers two regions, two years and grasslands that are already semi-natural; the models describe the management range present in these landscapes, not the response outside it.

## BibTeX

```bibtex
@article{meyer2025landuse,
  title   = {Land-use intensity effects on the biodiversity-ecosystem functioning relationship in semi-natural grasslands at management-relevant spatial scales},
  author  = {Meyer, Sophia N. and Muro, Javier and Wöllauer, Stephan and Schwarz, Lisa-Maricia and Männer, Florian A. and Dubovyk, Olena and Linstädter, Anja},
  journal = {Landscape Ecology},
  volume  = {40},
  pages   = {170},
  year    = {2025},
  doi     = {10.1007/s10980-025-02186-x}
}
```
