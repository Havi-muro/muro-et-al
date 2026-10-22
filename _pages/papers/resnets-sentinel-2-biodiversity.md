---
layout: project
title: 'ResNeTS: A ResNet for Time Series Analysis of Sentinel-2 Data Applied to Grassland Plant-Biodiversity Prediction'
permalink: /papers/resnets-sentinel-2-biodiversity/
excerpt: 'ResNeTS adapts a residual network to the shape of a satellite time series and predicts three grassland biodiversity indices from sixteen biweekly Sentinel-2 images. Across 502 field samples it lifted r² for species richness from 0.42 to 0.63 compared with a multilayer perceptron, beat the state-of-the-art InceptionTime by 0.021 r², and processed 35% more samples per second.'
date: 2024-09-03
venue: 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 17, 17349–17370 (2024)'
paperurl: 'https://doi.org/10.1109/JSTARS.2024.3454271'
citation: 'Dieste, Á. G., Argüello, F., Heras, D. B., Magdon, P., Linstädter, A., Dubovyk, O., & Muro, J. (2024). "ResNeTS: A ResNet for Time Series Analysis of Sentinel-2 Data Applied to Grassland Plant-Biodiversity Prediction." <i>IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing</i>, 17, 17349–17370.'
authors: 'Álvaro G. Dieste, Francisco Argüello, Dora B. Heras, Paul Magdon, Anja Linstädter, Olena Dubovyk, Javier Muro'
affiliations: 'CiTIUS, University of Santiago de Compostela · University of Santiago de Compostela · HAWK University of Applied Sciences and Arts · University of Potsdam · University of Hamburg · Thünen Institute'
summary_note: 'Plain-language summary. The full article is available from the publisher.'
read_time: true
paper_slug: resnets-sentinel-2-biodiversity
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

European grasslands are among the richest habitats on the continent and among the most dependent on how they are farmed. Knowing whether a meadow holds twelve plant species or forty normally requires a botanist, a quadrat and a day in the field, which is why biodiversity is monitored in a few hundred plots and not across a country. Sentinel-2 revisits every field in Europe every few days, for free, and a year of those images describes how a sward grows and when it is cut. The open question is whether that seasonal signal can be turned into a number of species, and which kind of model reads it best.

</div>

## What we did

We used the grassland plots of the Biodiversity Exploratories, three regions across Germany (Schorfheide-Chorin, Hainich and Schwäbische Alb) with 50 plots each. Plant inventories were recorded every year from 2017 to 2020 in a permanently marked 4 by 4 metre square inside each plot, giving 600 measurements, of which 502 were kept after excluding plots with trees. From the inventories we computed three indices: species richness, the Shannon index and the Simpson index.

The predictor was a gapless Sentinel-2 time series of 10 bands and 16 time steps, built with the FORCE processor at 10 metre resolution by interpolating a new image every 14 days; winter acquisitions were dropped because they say little about vegetation and are often cloudy.

ResNeTS is the answer to a design question: what does a residual network look like when its input is a sequence rather than an image? The network stacks one-dimensional convolutions along time into a deep and narrow architecture, moves pooling into the shortcuts, and adopts a modern training procedure, and five copies are averaged into an ensemble. We benchmarked it against a multilayer perceptron, a bidirectional LSTM, a Transformer, a shallow fully convolutional network, a residual CNN, InceptionTime and Rocket, all on the same grouped five-fold cross-validation repeated ten times, with samples of one plot kept in the same fold.

![Figure 1. Study sites and sampling design.](/muro-et-al/files/figures/resnets-sentinel-2-biodiversity/fig01.jpg)

*Figure 1. The three Biodiversity Exploratories in Germany (a), the 50 by 50 metre monitoring plot with the 4 by 4 metre inventory square inside it (b), and two neighbouring grasslands managed at different intensities (c).*

## What we found

- **Species richness is predicted with r² = 0.63.** The multilayer perceptron used in earlier work on the same data reached 0.42, so the architecture, not the data, accounts for most of the gain.
- **Diversity indices improve but stay modest.** The Shannon index rose from r² = 0.23 to 0.31 and the Simpson index from 0.16 to 0.17, the last being a marginal gain concentrated at low values.
- **The lead over the best alternative is small but consistent.** ResNeTS beat InceptionTime by up to 0.021 r² on every target variable, and its five-model ensemble stayed ahead of the InceptionTime ensemble.
- **It is cheaper to run.** ResNeTS processed 35% more samples per second than InceptionTime, the ensemble reached 1.61 times the throughput of the InceptionTime ensemble, and training was up to 1.69 times faster because the network converges in fewer epochs.
- **Every design choice mattered.** Removing the pooling from the shortcuts, widening the kernels or reverting to the original training procedure each lowered accuracy, and the full configuration was the best of the variants tested.
- **The model reads the growing season, not a single band.** Band importance concentrated on red edge 2, near infrared, the narrow near infrared and short-wave infrared 2, and the time steps of April and October were the most informative.

![Figure 5. Architecture of ResNeTS.](/muro-et-al/files/figures/resnets-sentinel-2-biodiversity/fig05.png)

*Figure 5. The ResNeTS block: one-dimensional convolutions along the time axis, pooling inside the shortcut, and the dimensions that make the network deep and narrow rather than wide.*

![Figure 9. Predicted against observed species richness.](/muro-et-al/files/figures/resnets-sentinel-2-biodiversity/fig09.jpg)

*Figure 9. Predicted against observed species richness for each architecture, accumulated over all runs: the residual networks and ResNeTS (g) follow the one-to-one line, while the multilayer perceptron (a) and Rocket (i) scatter widely.*

## How this can help

- **Wall-to-wall biodiversity layers.** A network that reads a full year of free imagery can produce species-richness maps for every grassland field of a region, and be rerun each year as new images arrive.
- **A benchmark to build on.** The comparison with seven architectures, on one documented dataset and with published code, gives later work a baseline.
- **Cheap screening before fieldwork.** Maps of expected richness can direct the botanist to the plots where a measurement adds most information.

## Where the map stops

The evidence rests on 502 samples from three regions of one country. Species richness is predicted with an r² of 0.63, which is useful for ranking fields but not for replacing an inventory, and the two diversity indices remain weakly predicted. The time series is a synthetic 14-day product with winter removed, and the models were not tested outside the training regions.

## BibTeX

```bibtex
@article{dieste2024resnets,
  title   = {ResNeTS: A ResNet for Time Series Analysis of Sentinel-2 Data Applied to Grassland Plant-Biodiversity Prediction},
  author  = {Dieste, Álvaro G. and Argüello, Francisco and Heras, Dora B. and Magdon, Paul and Linstädter, Anja and Dubovyk, Olena and Muro, Javier},
  journal = {IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing},
  volume  = {17},
  pages   = {17349--17370},
  year    = {2024},
  doi     = {10.1109/JSTARS.2024.3454271}
}
```
