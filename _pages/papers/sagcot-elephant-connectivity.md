---
layout: project
title: 'Remote sensing of wildlife connectivity networks and priority locations for conservation in the Southern Agricultural Growth Corridor (SAGCOT) in Tanzania'
permalink: /papers/sagcot-elephant-connectivity/
excerpt: 'Sentinel-1 and Sentinel-2 imagery were combined into a 20 metre land-cover and habitat map of the Kilombero catchment in Tanzania, with an overall accuracy of 75%. A connectivity model built on that map found 214 potential elephant corridors, of which 43 should be protected and 43 restored, including routes that earlier studies had not described.'
date: 2021-03-10
venue: 'Remote Sensing in Ecology and Conservation, 7(3), 430–444 (2021)'
paperurl: 'https://doi.org/10.1002/rse2.199'
citation: 'Cisneros-Araujo, P., Ramirez-Lopez, M., Juffe-Bignoli, D., Fensholt, R., Muro, J., Mateo-Sánchez, M. C., & Burgess, N. D. (2021). "Remote sensing of wildlife connectivity networks and priority locations for conservation in the Southern Agricultural Growth Corridor (SAGCOT) in Tanzania." <i>Remote Sensing in Ecology and Conservation</i>, 7(3), 430–444.'
authors: 'Pablo Cisneros-Araujo, Miguel Ramirez-Lopez, Diego Juffe-Bignoli, Rasmus Fensholt, Javier Muro, María C. Mateo-Sánchez, Neil D. Burgess'
affiliations: 'Universidad Politécnica de Madrid · Tragsatec · UNEP-WCMC · University of Kent · University of Copenhagen · University of Bonn · Natural History Museum of Denmark'
summary_note: 'Plain-language summary. The full article is available from the publisher.'
read_time: true
paper_page: true
paper_slug: sagcot-elephant-connectivity
---

<div class="project-highlight" markdown="1">

## Why this matters

The Southern Agricultural Growth Corridor of Tanzania is one of the places where a country's plan to grow food meets the routes that elephants use to reach water, mates and seasonally available forage. Clearing a block of woodland for a farm costs little; severing the last link between two protected areas costs a population. Conservation planning in such landscapes depends on knowing where the links are, and that knowledge rests on land-cover maps: without them, corridors are drawn from interviews and guesswork. Open radar and optical imagery now covers Africa every few days, so the question is whether a corridor network can be derived from satellite data precisely enough to tell a planner which field to leave alone.

</div>

## What we did

We built a land-cover map of the Kilombero catchment, the development cluster of SAGCOT, at 20 metre resolution, from two cloud-free Sentinel-1 and Sentinel-2 composites covering 2017 and 2018, together with wetland layers from the GEO-Wetlands community portal. A random forest with 1000 trees separated 12 land-cover classes, from moist and dry forest to croplands, wetlands and roads, and a second classifier subdivided the tree-covered area into forest types. Accuracy was assessed with a stratified design and reported as error-adjusted areas, following the good-practice protocol of Olofsson and colleagues. The land-cover classes were then translated into habitat types of the IUCN classification.

The habitat map was turned into a connectivity model with graph theory. The nodes were patches of suitable elephant habitat larger than 30 hectares for which there is evidence of elephants; the links between them were least-cost paths through a resistance surface that assigns a cost to each land cover. To decide which links matter, we computed the probability of connectivity index, using a median elephant dispersal distance of 127 kilometres, derived from a home range of 328 square kilometres, multiplied by the mean resistance of the map (10.11). Corridors were then ranked twice: by how much they contribute to connectivity now, which identifies what to protect, and by how much connectivity would improve if they were restored.

![Figure 1. The study area.](/muro-et-al/files/figures/sagcot-elephant-connectivity/fig01.jpg)

*Figure 1. The Kilombero catchment with its rivers, towns, protected areas and the wildlife corridors described by earlier studies.*

## What we found

- **The land-cover map is usable at 20 metres.** Overall accuracy was 75.34%, and the subdivision of tree cover reached 86.88%; 77.18% of the catchment is covered by natural habitats and 19.50% by arable land.
- **Suitable elephant habitat is extensive but fragmented.** It covers 24,214 square kilometres, 60.15% of the mapped area, of which 7,774 square kilometres, in patches above 30 hectares, entered the model.
- **214 corridors were identified.** They concentrate in the eastern half of the study area, in and around the floodplain, and connect it with the surrounding habitat patches.
- **43 corridors should be protected and 43 restored.** Sixty-seven links were priority, 24 only for protection, 24 only for restoration and 19 for both; corridors to protect run almost entirely (95%) through natural land, while those to restore cross 28% cropland.
- **The known corridors reappear, and new ones appear.** Priority links fall inside the four corridor areas described by earlier studies, and additional links south of the floodplain and towards the Selous Game Reserve and the Mbarang'andu wildlife management area were not previously mapped.
- **The floodplain is the weak point.** Priority corridors inside it are narrow and permeable only with difficulty, which means low functionality for the network as a whole.

![Figure 2. Workflow.](/muro-et-al/files/figures/sagcot-elephant-connectivity/fig02.jpg)

*Figure 2. The three-step workflow: land-cover and habitat classification, identification of corridors between habitat patches, and prioritisation of the locations that most affect connectivity.*

![Figure 4. Potential corridors and priority links.](/muro-et-al/files/figures/sagcot-elephant-connectivity/fig04.jpg)

*Figure 4. The 214 potential corridors among elephant habitat patches, and the priority links selected for protection and for restoration.*

## How this can help

- **A map a planner can act on.** Because every corridor is a mapped strip of land, a proposed farm can be tested against the network before it is licensed, and compensation can be directed to the links that restoration would repair.
- **Two different budgets, two different lists.** Separating corridors to protect from corridors to restore tells a fund where acquisition is urgent and where replanting would pay.
- **A transferable framework.** The same three steps can be repeated for other development corridors in Africa at no imagery cost.

## Where the map stops

The corridor network is a model, not an observation: no elephant movement data were available, so resistance values rest on expert opinion and on land cover, and a corridor on the map is a hypothesis about where elephants could move. The land cover is 75% accurate overall, modest for a 12-class map, and describes one period, 2017 to 2018, so a corridor intact today may already have been cleared. The dispersal distance is an estimate, tested against alternatives, and the analysis identifies priority locations rather than demonstrating that elephants use them.

## BibTeX

```bibtex
@article{cisneros2021sagcot,
  title   = {Remote sensing of wildlife connectivity networks and priority locations for conservation in the Southern Agricultural Growth Corridor (SAGCOT) in Tanzania},
  author  = {Cisneros-Araujo, Pablo and Ramirez-Lopez, Miguel and Juffe-Bignoli, Diego and Fensholt, Rasmus and Muro, Javier and Mateo-Sánchez, María C. and Burgess, Neil D.},
  journal = {Remote Sensing in Ecology and Conservation},
  volume  = {7},
  number  = {3},
  pages   = {430--444},
  year    = {2021},
  doi     = {10.1002/rse2.199}
}
```
