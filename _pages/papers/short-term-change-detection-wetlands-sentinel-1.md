---
layout: project
title: "Short-Term Change Detection in Wetlands Using Sentinel-1 Time Series"
permalink: /papers/short-term-change-detection-wetlands-sentinel-1/
excerpt: "A time-series change test applied to monthly Sentinel-1 imagery of two Ramsar wetlands in Spain and France captured 114 km² of change at Fuente de Piedra against 79 km² for pairwise image comparison, and followed water and crop dynamics month by month."
date: 2016-09-24
venue: "Remote Sensing, 8, 795 (2016)"
paperurl: "https://doi.org/10.3390/rs8100795"
citation: "Javier Muro, Morton Canty, Knut Conradsen, Christian Huttich, Allan Aasbjerg Nielsen, Henning Skriver, Florian Remy, Adrian Strauch, Frank Thonfeld, Gunter Menz. (2016). \"Short-Term Change Detection in Wetlands Using Sentinel-1 Time Series\". <i>Remote Sensing</i>."
authors: "Javier Muro, Morton Canty, Knut Conradsen, Christian Huttich, Allan Aasbjerg Nielsen, Henning Skriver, Florian Remy, Adrian Strauch, Frank Thonfeld, Gunter Menz"
affiliations: "University of Bonn · Technical University of Denmark · Jena-Optronik GmbH"
summary_note: "Plain-language summary. The full article is available from the publisher."
read_time: true
paper_slug: short-term-change-detection-wetlands-sentinel-1
paper_page: true
---

<div class="project-highlight" markdown="1">

## Why this matters

Wetlands are transitional places, and many change within weeks rather than years. A lagoon fills and dries, a rice field is flooded, planted and harvested, a salt pan is pumped. Maps that treat land cover as static miss this, and long-term change detection can be biased: a class looks different on two dates because one image fell in the wet season. Optical satellites are the usual tool, but they fail exactly when wetlands matter, under cloud and in the rainy season. Radar is cloud and illumination independent, and since Sentinel-1 opened its archive, frequent C-band imagery is free, which makes operational short-term monitoring realistic.

## What we did

We chose two wetlands with different ecology. The Lagoon of Fuente de Piedra in southern Spain is an endorheic salt lagoon of about 13 km² and less than 1 m deep, analysed within a 490 km² rectangle. The Camargue in southern France is a coastal wetland of 130 km² between the arms of the Rhône, analysed within 3,500 km². Both are Ramsar sites and major flamingo breeding grounds, the Camargue the largest in Europe. We used monthly Sentinel-1 Interferometric Wide Single Look Complex images in dual polarisation (VV and VH) from 2014 and 2015. Each image was split, de-bursted, converted into a 2 × 2 polarimetric covariance matrix, multilooked with 8 range and 2 azimuth looks, and terrain corrected with the 3 arcsec SRTM, giving 30 m pixels. The S1-omnibus method tests, pixel by pixel, whether the covariance matrices of the whole series are equal, using the complex Wishart distribution. It needs no training data; changes are defined at the 1% significance level. We compared it with pairwise comparison of consecutive Sentinel-1 images and with change vector analysis on cloud-free Landsat 7 and 8 scenes.

![Location of the study sites in southern Spain and southern France.](/muro-et-al/files/figures/short-term-change-detection-wetlands-sentinel-1/fig01.png)

*Location of the study sites in southern Spain and southern France.*

![Sentinel-1 change detection workflow.](/muro-et-al/files/figures/short-term-change-detection-wetlands-sentinel-1/fig02.png)

*Sentinel-1 change detection workflow.*

![Short-term change detection results in wetland areas.](/muro-et-al/files/figures/short-term-change-detection-wetlands-sentinel-1/fig03.png)

*Short-term change detection results in wetland areas.*

## What we found

- **Water dynamics were followed month by month.** At Fuente de Piedra the lagoon began to dry at its margins between March and April, most of it dried in April and May, and change returned with the October rains, matching the limnograph record.
- **The time series saw more than image pairs.** S1-omnibus flagged 114 km² as changed, against 79 km² for the pairwise approach, in the same rectangle. No change found by the pairwise method was missed by the time series.
- **Some surfaces changed six to eight times a year.** The northern part of the lagoon changed up to six times, mostly in the rainy period from October to April; marshes south of the Vaccarés Lagoon in the Camargue changed up to eight times.
- **Dynamic and static cover types separated cleanly.** Olive groves, forests, shrublands and urban areas stayed unchanged, while herbaceous crops, rice and wetlands changed repeatedly. Around 70% of the herbaceous cropland showed no change, which suggests fallow land.
- **Optical and radar agreed in part.** At Fuente de Piedra, 56 km² were flagged by both methods, 28 km² only by Landsat and 52 km² only by Sentinel-1. In the Camargue, S1-omnibus flagged 424 km² and Landsat 557 km², with 250 km² in common.

## How this can help

- **Monitoring can be operational.** The method uses free data and open-source tools, needs no training samples, and reaches a six-day cadence when both Sentinel-1 satellites are combined.
- **Managers can find the dynamic places.** Frequency-of-change maps locate the cover types that change most, and the two-change pattern of a crop field reads as one harvest per year.
- **Models and wildlife management gain a time dimension.** Combined with gauging stations, the maps can improve hydrological models, and knowing when a lagoon dries helps interpret flamingo breeding failure.

## Where the map stops

S1-omnibus detects that something changed, not what changed; it needs local knowledge or field data to give the change a name. C-band penetrates vegetation poorly, so wet forests and mangroves would need an L-band sensor. Permanent water bodies, including the sea, produced false changes, possibly from tides or wind-driven waves, and had to be masked for display. We used one image per month although more passes were available, single-polarisation VV accuracy was not evaluated, and how tall or dense vegetation must be to be detected is unknown; validation with denser series is under way.

</div>

## BibTeX

```bibtex
@article{shorttermchangedetectionwetlandssentinel12016,
  title={Short-Term Change Detection in Wetlands Using Sentinel-1 Time Series},
  author={Javier Muro and Morton Canty and Knut Conradsen and Christian Huttich and Allan Aasbjerg Nielsen and Henning Skriver and Florian Remy and Adrian Strauch and Frank Thonfeld and Gunter Menz},
  journal={Remote Sensing},
  year={2016},
  doi={10.3390/rs8100795}
}
```
