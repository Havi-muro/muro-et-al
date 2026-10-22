---
layout: project
title: 'Trade-offs between grassland plant biodiversity and yields are heterogenous across Germany'
permalink: /papers/grassland-biodiversity-yield-tradeoffs-germany/
excerpt: 'Mowing German grasslands more often lowers plant species richness, but the size of that loss differs from field to field. Using four years of satellite data for all 1.3 million permanent grassland fields of Germany, we price the trade-off: about 126 euros of forgone hay per additional species, or 51 euros when payments are targeted where they buy the most species.'
date: 2024-09-17
venue: 'Communications Earth & Environment, 5, 514 (2024)'
paperurl: 'https://doi.org/10.1038/s43247-024-01685-0'
citation: 'Schulz, D., Stetter, C., Muro, J., Spekker, J., Börner, J., Cord, A. F., & Finger, R. (2024). "Trade-offs between grassland plant biodiversity and yields are heterogenous across Germany." <i>Communications Earth & Environment</i>, 5, 514.'
authors: 'Dario Schulz, Christian Stetter, Javier Muro, Jonas Spekker, Jan Börner, Anna F. Cord, Robert Finger'
affiliations: 'European Forest Institute · University of Bonn · ETH Zürich · Thünen Institute'
summary_note: 'Plain-language summary. The full article is available from the publisher.'
read_time: true
paper_slug: grassland-biodiversity-yield-tradeoffs-germany
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

Grassland covers more than one-third of the Earth's land surface and about two-thirds of its agricultural area, and almost every German grassland field is mown at least once a year. Cutting turns grass into hay, but it also removes flowers before they seed, so a field cut three times a year is a poorer habitat than the same field cut once. Payments for cutting less are expensive and the money for biodiversity is limited, so the policy question is not whether mowing costs species but where a euro buys the most of them.

</div>

## What we did

We assembled a field-level panel covering all 1,313,073 permanent grassland fields of Germany over 2017 to 2020, 5,008,614 field-year observations in total. Mowing frequency was counted from Sentinel-2 time series and used as a proxy for management intensity: the average field was cut 1.9 times a year, with a range from 0 to 5.5. Plant species richness came from an existing satellite model calibrated against field inventories and expressed as species per 16 square metres; it averaged 23.3 species and ranged from 4 to 69.

We then asked a counterfactual question of every field: what would its species richness be in the following year if it had been mown once more, or once less? Generalized random forests estimated that causal effect, comparing fields with a similar propensity to be mown often but observed under different regimes. A second model, driven only by latitude, longitude and elevation, translated the same change in mowing into a change in dry-matter yield, priced at 70 euros per tonne of hay, which gives an upper bound of the opportunity cost. We then compared ways of reaching the 30 by 30 goal: extensifying protected areas, 30% of fields drawn at random, and 30% selected for species gain, for low yield loss or for low cost per species.

![Figure 1. Effect of mowing frequency on species richness.](/muro-et-al/files/figures/grassland-biodiversity-yield-tradeoffs-germany/fig01.jpg)

*Figure 1. The estimated effect of one more cut per year on plant species richness: its distribution across fields (a), how it weakens on already frequently mown fields (b), how it grows on species-rich fields (c), and where in Germany extensification would gain the most species (d).*

## What we found

- **One extra cut costs 1.6 plant species.** On average, a unit increase in mowing frequency removed 1.6 species in the following year (SE 0.05); mowing raised richness on only 0.34% of fields.
- **The richest fields lose the most.** The top 5% of fields by species richness showed a partial effect three times larger than the 75% of fields below them, so extensification pays best where diversity is already high, in the northeast of Germany, and least in the intensively used northwest and south.
- **A species costs 126 euros, or 51 when targeted.** Untargeted, one additional species implies 126 euros of forgone hay per year. Selecting the fields with the lowest opportunity cost brings the price to 51 euros, 40% of the compensation cost of a scheme without targeting.
- **Extensifying 30% of the grassland costs 131 to 181 million euros a year.** That is 98 to 135 euros per hectare depending on how the 30% is chosen, and it buys 1.46 additional species under random selection against 2.16 under targeting on high-richness fields, at a yield loss of 1.4 to 1.9 tonnes of dry matter per hectare.
- **Targeting changes who pays.** Opportunity costs per species are about ten times higher in the south than in the centre and east, because southern fields start poorer in species and produce more biomass.

![Figure 2. Opportunity cost of additional species.](/muro-et-al/files/figures/grassland-biodiversity-yield-tradeoffs-germany/fig02.jpg)

*Figure 2. The price of biodiversity in forgone hay: yield lost per hectare when mowing is reduced by one cut (a), the cumulative cost curve for one additional species (b), and the same cost mapped on a one-kilometre grid (c).*

## How this can help

- **Point payments at the fields that respond.** Because the effect of mowing on richness is mapped per field, an agri-environmental scheme can be budgeted by expected species gain rather than by area enrolled, and its outcome can be checked with the same satellite data that designed it.
- **Give a price to biodiversity in negotiations.** The 51 to 126 euro range per species, and the 98 to 135 euros per hectare of extensification, are figures a ministry, a farm association and a conservation fund can argue over.

## Where the map stops

Both variables are proxies. Mowing is detected from satellite time series with an average f-score of 0.6, species richness comes from a model with an r² of 0.42, and yield is monetised at a single hay price, so the euro values are upper bounds rather than farm accounts. The design isolates mowing frequency and does not separate fertilisation or grazing, the panel covers four years, and the values describe German grassland within the observed management range; outside it they need recalibration.

## BibTeX

```bibtex
@article{schulz2024tradeoffs,
  title   = {Trade-offs between grassland plant biodiversity and yields are heterogenous across Germany},
  author  = {Schulz, Dario and Stetter, Christian and Muro, Javier and Spekker, Jonas and Börner, Jan and Cord, Anna F. and Finger, Robert},
  journal = {Communications Earth \& Environment},
  volume  = {5},
  pages   = {514},
  year    = {2024},
  doi     = {10.1038/s43247-024-01685-0}
}
```
