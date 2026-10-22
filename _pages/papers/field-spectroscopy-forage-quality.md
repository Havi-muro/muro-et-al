---
layout: project
title: 'Field spectroscopy and machine learning successfully predict grassland forage quality and quantity across climate zones'
permalink: /papers/field-spectroscopy-forage-quality/
excerpt: 'We measured canopy reflectance in temperate, humid tropical and dry subtropical grasslands and trained machine-learning models to predict forage quality and quantity. Random forest was the most accurate for metabolizable energy, biomass and energy yield, and quality transferred far better across climate zones than quantity, though no model transferred perfectly.'
date: 2025-09-11
venue: 'Ecological Informatics, 92, 103426 (2025)'
paperurl: 'https://doi.org/10.1016/j.ecoinf.2025.103426'
citation: 'Männer, F. A., Muro, J., Dubovyk, O., Ferner, J., Guuroh, R. T., Knox, N. M., Schmidtlein, S., & Linstädter, A. (2025). "Field spectroscopy and machine learning successfully predict grassland forage quality and quantity across climate zones." <i>Ecological Informatics</i>, 92, 103426.'
authors: 'Florian A. Männer, Javier Muro, Olena Dubovyk, Jessica Ferner, Reginald Tang Guuroh, Nichola M. Knox, Sebastian Schmidtlein, Anja Linstädter'
affiliations: 'University of Bonn · University of Potsdam · Fraunhofer Institute for Computer Graphics Research IGD · IE University · University of Hamburg · University of Bonn (ZFL) · CSIR-Forestry Research Institute of Ghana · Flinders University · Karlsruhe Institute of Technology'
summary_note: 'Plain-language summary. The full article is available from the publisher.'
read_time: true
paper_slug: field-spectroscopy-forage-quality
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

Grasslands cover about a third of the land surface and feed most of the world's livestock. Knowing how much forage a pasture holds, and how good it is, decides when animals are moved, when hay is cut and how much supplementary feed a farm must buy. Measuring that by hand means clipping, drying and laboratory analysis: accurate, slow and impossible to repeat over large areas.

Reflectance spectra offer a way out. A field spectrometer records how a canopy reflects light at hundreds of wavelengths, and the chemical composition of the plants leaves a signature in that curve. Models can read the signature, but they are usually trained in one region, and a model fitted in Germany rarely survives the move to a Namibian savanna. The practical question is whether one model can serve several climate zones, and which algorithm comes closest.

</div>

## What we did

We collected 456 hyperspectral measurements of grassland canopies in three regions that differ in climate, soils and management: temperate grassland in Germany, a seasonally humid tropical savanna in West Africa, and a dry subtropical thornbush savanna in Namibia. Spectra were recorded from 350 to 2500 nm with field spectrometers, always around solar noon, and each measurement was paired with a clipped biomass sample and with a laboratory estimate of metabolizable energy.

From the spectra we built predictors from all bands, their derivatives, spectral features and vegetation indices, and reduced them to a manageable set on the global dataset before applying the same predictors to every region. Three algorithms competed: random forest, neural networks and partial least squares regression.

The models were tested in two ways. Five-fold cross-validation measured how well a model predicts within the data it was trained on. A fixed split of 80% for calibration and 20% for testing, applied across regions, measured transfer: a model trained on all regions was asked to predict a region it had not seen, and its performance was compared with a model trained only in that region.

![Figure 1. The seven study areas.](/muro-et-al/files/figures/field-spectroscopy-forage-quality/fig01.jpg)

*Figure 1. The seven study areas in the temperate, tropical and dry subtropical regions, with the aridity index of each region shown in the insets.*

![Figure 3. The six-step calibration and validation setup.](/muro-et-al/files/figures/field-spectroscopy-forage-quality/fig03.jpg)

*Figure 3. The analysis in six steps: dataset compilation across four spatial foci, predictor creation and selection on the global dataset, and the three validation stages, including global-to-regional transfer.*

## What we found

- **Random forest was the best all-round model.** It predicted metabolizable energy with nRMSE = 0.108 and R² = 0.68, aboveground biomass with nRMSE = 0.145 and R² = 0.53, and metabolizable energy yield with nRMSE = 0.153 and R² = 0.58.
- **Quality is easier to predict than quantity.** Metabolizable energy transferred best, probably because plant functional traits vary consistently along climatic gradients and correlate strongly with spectra, while biomass depends on canopy structure and pigment content that differ by region.
- **Neural networks transferred best.** Global-to-regional transfer reached nRMSE as low as 0.083 with neural networks, better than the other algorithms managed.
- **Partial least squares preferred the global data.** Globally trained partial least squares models outperformed regionally trained ones, with a change in nRMSE between -0.211 and 0.037.
- **No model was fully transferable.** Every method lost accuracy when applied to a region it had not seen, and only models that accommodated local variability came close to regional performance.

![Figure 5. Accuracy of the global models.](/muro-et-al/files/figures/field-spectroscopy-forage-quality/fig05.jpg)

*Figure 5. Validation results of the global models for the three forage proxies under five-fold cross-validation, by algorithm and forage trait.*

## How this can help

- **Faster monitoring.** A spectrometer reading replaces the clip-dry-analyse chain, so forage can be surveyed at the pace of a field campaign and revisited within a season.
- **A starting point for new regions.** A global model, especially a neural network, gives usable first estimates in a region without local calibration, which matters where laboratories and reference data are scarce.
- **Better grazing decisions.** Maps of metabolizable energy yield combine quantity and quality in one number, the quantity a herder actually manages, and can support stocking rates and rotation planning.

## Where the map stops

The transfer tests are hard: a model trained elsewhere is a first approximation, not a replacement for local reference samples, and every region in this study contributed data to the global model. The dataset covers seven study areas and one growing season per region, so seasonal and interannual variation is only partly represented. Spectra were taken from the ground; the step to satellite or drone imagery, with its coarser pixels and atmospheric effects, is not demonstrated here.

## BibTeX

```bibtex
@article{maenner2025field,
  title   = {Field spectroscopy and machine learning successfully predict grassland forage quality and quantity across climate zones},
  author  = {Männer, Florian A. and Muro, Javier and Dubovyk, Olena and Ferner, Jessica and Guuroh, Reginald Tang and Knox, Nichola M. and Schmidtlein, Sebastian and Linstädter, Anja},
  journal = {Ecological Informatics},
  volume  = {92},
  pages   = {103426},
  year    = {2025},
  doi     = {10.1016/j.ecoinf.2025.103426}
}
```
