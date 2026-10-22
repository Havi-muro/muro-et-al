---
layout: single
title: 'Hedgerow mapping with high resolution satellite imagery to support policy initiatives at national level'
permalink: /papers/hedgerow-mapping/
excerpt: 'We evaluate the potential of high-resolution PlanetScope multitemporal satellite data and semantic segmentation approaches to map the distribution of hedgerows across the entire agricultural landscape in Germany. Visible and near-infrared imagery from all four monthly mosaics of PlanetScope data yielded better results (F1-score 0.65) than other month combinations and red-green-blue inputs alone. We estimate a total surface of 4081 (± 1425) km² of hedgerows across Germany, representing 2.3 % of the agricultural land in Germany.'
date: 2025-10-01
venue: 'Remote Sensing of Environment, 328, 114870'
paperurl: 'https://doi.org/10.1016/j.rse.2025.114870'
citation: 'Muro, J., Blickensdörfer, L., Don, A., Köber, A., Asam, S., Schwieder, M., & Erasmi, S. (2025). "Hedgerow mapping with high resolution satellite imagery to support policy initiatives at national level." <i>Remote Sensing of Environment</i>, 328, 114870.'
author_profile: false
read_time: true
paper_slug: hedgerow-mapping
paper_page: true
---

**Authors:** Javier Muro, Lukas Blickensdörfer, Axel Don, Anna Köber, Sarah Asam, Marcel Schwieder, Stefan Erasmi

**Affiliations:**

- a Thünen Institute of Farm Economics, Bundesallee 63, 38116 Braunschweig, Germany
- b Geography Department, Humboldt Universität zu Berlin, Unter den Linden 6, 10099 Berlin, Germany
- c Thünen Institute of Climate-Smart Agriculture, Bundesallee 68, 38116 Braunschweig, Germany
- d German Remote Sensing Data Center (DFD), German Aerospace Center (DLR), Münchener Strasse 20, 82234 Wessling, Germany

**Published in** *Remote Sensing of Environment*, 328, 114870 (2025). DOI: <https://doi.org/10.1016/j.rse.2025.114870>

**Keywords:** Remote sensing, Deep learning, U-net, Decarbonization, Loss function, Biodiversity, Agroforestry

---

## Abstract

Hedgerows provide habitat and food for a wide range of species and play a crucial role for biodiversity in agricultural landscapes. In addition, hedgerows render an important carbon stock, above and below ground, and protect agricultural soils from erosion. However, comprehensive, standardized and area wide information regarding the distribution of hedgerows is often lacking, which makes it hard to incorporate them in nature conservation plans and national carbon balance models. We evaluate the potential of high-resolution PlanetScope multitemporal satellite data and semantic segmentation approaches to map the distribution of hedgerows across the entire agricultural landscape in Germany. Based on a comprehensive set of independent reference data from the federal state of Schleswig-Holstein, we evaluate the performance of different loss functions and different combinations of spectral and temporal input feature sets. We assess the transferability of the final model using independent test data from three additional German Federal states. Additionally, we compare our results against the Copernicus Land Monitoring Service High Resolution Layer Small Woody Features, and a recently published biomass map of trees outside forests. All loss functions tested offered similar performance, but the binary-cross entropy function allowed for overcoming sensor artifacts to some extent. Visible and near-infrared imagery from all four monthly mosaics (April, June, August and October) of PlanetScope data was found to yield better results (F1-score 0.65) than different combinations of months and only red-green-blue inputs. We estimate a total surface of 4081 (± 1425) km² of hedgerows across Germany, which represent 2.3 % of the agricultural land in Germany. By combining our results with a digital landscape model, we reveal heterogenous estimates of hedgerow height across municipalities. Our findings highlight that semantic segmentation approaches are well-suited for area-wide hedgerow mapping, especially in combination with multitemporal high-resolution satellite data. Furthermore, we underscore the relevance of using application-specific models over post-processing existing products, and provide for the first time a spatially explicit and comprehensive overview of the distribution of hedgerows and their structure across agricultural landscapes in Germany. Our methodology and product can be incorporated into landscape biodiversity models, carbon balance estimations and soil protection policies at national, regional and local scale.

---

**Abbreviations:** ATKIS, Amtliches Topographisch-Kartographisches Informationssystem / Official Topographic-Cartographic Information System; BB, Brandenburg Federal State; BCE, binary-cross entropy; BF, binary-focal; BY, Bavaria Federal State; BKG, Bundesamt für Kartographie und Geodaesie / Federal Agency of Cartography and Geodesy; DLM, Digital Landscape Model; DSM, Digital Surface Model; DTM, Digital Terrain Model; GIOU, Generalized Intersection over Union; IoU, Intersection over Union; LULUCF, Land Use Land Use Change and Forestry; NRG, Near infra-red, Red Green; NRL, Nature Restoration Law; NRW, North-Rhein Westphalia Federal State; NUTS, Nomenclature of Territorial Units for Statistics; RGB, Red, Green, Blue; SH, Schleswig-Holstein Federal State; SWF, Small Woody Features; ToF, Trees outside Forests.

* Corresponding author. E-mail address: javier.muro@thuenen.de (J. Muro).

---

## 1. Introduction

Agricultural systems in Europe are largely optimized to deliver provisional ecosystem services like food, forage and bioenergy (Litza et al., 2022). On the other hand, the associated agricultural intensification threatens other ecosystems services, like e.g., climate regulation, soil functioning and pollination (Raven and Wagner, 2021). Measures have been suggested and implemented within agricultural policies with the aim to combine the requirements of agricultural production with the delivery of other ecosystem services and the conservation and improvement of habitat quality and biological diversity (Broughton et al., 2024). As such, the introduction of non-productive areas or landscape elements is subject of the current EU Common Agricultural Policy (CAP) (EU CAP Network, 2023). Here, hedgerows are an integral part of eligible non-productive areas. In the broadest sense, field hedgerows are described as a boundary, or part of a boundary of agricultural fields that comprises linear woody structures with shrubs that may or may not have trees, and which are usually managed by regular cuttings (Baudry et al., 2000; van Vooren et al., 2017). They are an important part of agricultural landscapes providing a range of ecosystems functions and supporting roles. Besides the cultural services (e.g., tourism, recreation), they are of crucial importance for protection against soil erosion and contribute to habitat diversity at both site and landscape level, by supporting a variety of flora and fauna. Dense and well-maintained hedgerows are beneficial for native bees (Von Königslöw et al., 2022), songbirds (Dunn et al., 2016), bats (Vandevelde et al., 2014) and slow colonizers (Rey Benayas and Bullock, 2015; Vanneste et al., 2020), and multiple other species (Vallé et al., 2023). The most important soil protecting functions of hedgerows include the reduction of soil erosion by both, water and wind, through their role as a barrier on intensively managed arable land (Böhm et al., 2014) and their potential to store carbon in above-ground biomass (Biffi et al., 2022; Drexler et al., 2021). Below ground, hedgerows have shown to contribute to diverse soil-functions like, e.g., enhanced infiltration of surface runoff, reduced nitrogen leaching and higher soil fungal and benthic animal diversity (Holden et al., 2019). Furthermore, they enhance soil quality by providing organic matter to the soil (Biffi et al., 2023; Drexler et al., 2024). With that, new hedgerows can play an important role in climate mitigation as a measure that not only helps to reduce greenhouse gas (GHG) emissions but to produce “negative emissions” in agricultural land with the sequestration of C (Drexler et al., 2021; van Vooren et al., 2017). Finally, woody features have a cooling effect on surrounding areas, which can make agricultural areas more resistant to increasing heat waves (Ghafarian et al., 2024).

This multitude of crucial functions is why the conservation and extension of hedgerows is subject to two major policy regulations at EU-level: 1. the EU-LULUCF-regulation (European Union - Land Use Land Use Change and Forestry) (European Commission et al., 2021) that defines the targets and paths of GHG emissions reductions for land use and forestry towards climate neutrality in the year 2050 and 2. the Nature Restoration Law (NRL, 2024) that sets binding restoration targets and obligations for a broad range of ecosystems including agricultural ecosystems. In both, the maintenance and extension of hedgerows is proposed as an important measure of land use alteration with a high potential to contribute to a successful target achievement.

For monitoring, reporting and verification (MRV) of policy measures and compliance with obligations, consistent and reliable data are a prerequisite. For the land use sector, the above-mentioned regulations require geographically explicit data as a base for reporting and evaluation. These include but are not limited to field data for a number of well- distributed sampling sites, digital base data (e.g., from national authorities) or aggregated data from statistical surveys. Frequently, the spatial coverage and representativeness of these data sources are limited due to temporal gaps and lack of timely availability.

Specific literature and resources on hedgerow distribution and status is scarce, and main efforts focus on mapping trees outside forest as a homogeneous class. Only recently, a first comprehensive report was published in which the distribution of landscape elements in European agricultural areas was estimated based on an extended field survey (D’Andrimont et al., 2024). Even though this is a valuable data set it does not provide a spatial explicit wall-to-wall representation of hedgerow distribution. Satellite remote sensing has been proven as a valuable means for area-wide mapping of LULC at different spatial scales. In publicly available datasets such as the Copernicus Land Monitoring Service High Resolution Layer Small Woody Features (SWF), hedgerows narrower than 5–6 m are often not detected, even though it is based on several types of high-resolution imagery (EEA, 2023). Besides, this product includes hedgerows along with other woody structures.

Previous remote sensing-based experiments used feature engineering to help models learn to identify hedgerows (Betbeder et al., 2014; Fauvel et al., 2012; Vannier and Hubert-Moy, 2008). Feature engineering is an ad hoc heuristic that can introduce additional sources of uncertainty and decrease the generalization capacity of the model. With novel deep learning techniques, models can directly learn from the context of the image higher relevant hierarchical patterns, making feature engineering unnecessary and improving predictions and domain adaptation (Kattenborn et al., 2021). More recent hedgerow mapping approaches make use of convolutional neural networks (CNN), with RGB single date aerial images (Ahlswede et al., 2021; Huber-García et al., 2025), UAV derived digital canopy models (Smigaj and Gaulton, 2021) or LiDAR data (Broughton et al., 2024; Luscombe et al., 2023), which have a high spatial detail but are comparably costly and limited to rather small spatial extents.

These limitations can be overcome by using micro-satellites such as PlanetScope, which acquire multispectral data with a high spatial (3 m) and temporal resolution. In a recent paper, Liu et al. (2023) used PlanetScope composites from August and semantic segmentations with CNNs to map the trees outside forests (ToF) in Europe and to estimate their height and biomass using allometric equations. Although this is an excellent product to estimate total tree biomass across the continent, it does not separate between hedgerows and other woody vegetation.

In the present study, we propose a semantic segmentation of multitemporal PlanetScope data to accurately delimit hedgerows at national scale. Hedgerows are defined here as woody linear features narrower than 20 m and across agricultural areas. Our approach makes use of morphological and contextual features, and temporal patterns to separate them from the rest of the agricultural landscape and from other woody features. The objective of this research is to evaluate the data and method requirements to design a monitoring service of hedgerows in agricultural land at national scale. To that end we tackle the following questions:

- What technical specifications are required to monitor hedgerows in agricultural land at national scale with commercial satellites and semantic segmentation approaches?

- What is the current distribution and structure of hedgerows across Germany?

## 2. Materials and methods

### 2.1. Reference data

The reference data we used for training the models was provided by the Schleswig-Holstein State Office for Agriculture, Environment and Rural Areas as part of the state-wide biotope mapping (LLUR, 2023) (Fig. 1). The mapping is conducted manually by analyzing a digital terrain model and orthophotos. As a subset of the biotope mapping, the linear biotopes dataset includes polylines with alleys, hedgerows and other tree lines that were acquired between 2016 and 2021.

Three additional datasets from three different federal states were used for independent validation (i.e., test datasets): Brandenburg (BB), North Rhine-Westphalia (NRW), and Bavaria (BY) (Fig. 1). Field data for Brandenburg were available from the Brandenburg State Office for Environment within the “Comprehensive biotope and land use mapping in the state of Brandenburg” (LfUB, 2009). Because this dataset is composed of polylines that were mapped 15 years ago, we randomly selected three 13 by 13 km tiles and updated them manually using 2020 aerial imagery (LVermGeo SH, 2020). Data from NRW was provided by the Federal Agency for Nature, Environment and Consumer Protection of NRW (LANUV, 2023) in the form of polygons. It consists of 220 tiles of 1km² that are monitored since 1997 and updated regularly. Data from the Federal State of Bavaria is a modified subset of Huber-García et al. (2025). It consists of in-situ mapped polygons recorded by the Bavarian Environment Agency (BLfU, 2024) during their biotope mapping campaigns (2018–2020) and classified as either hedgerows or woody features. This dataset was further edited with updates using high resolution aerial imagery to include woody features along rivers, creeks and roads.

We processed the reference datasets in a semi-automatic workflow with the aim to generate a consistent, complete and low-error dataset for training and validation of linear woody features within agricultural areas, making sure we exclude forest patches. The modifications we applied included:

- Exclusion of elements outside of areas classified as agriculture by the Basis Digital Landscape Model of Germany (Basis-DLM) (GeoBasis-DE and BKG, 2022)

- Exclusion of elements within 20 m of forests according to the Basis-DLM (GeoBasis-DE and BKG, 2022)

- Exclusion of alleys with sparse tree lines without shrub fraction in between using visual inspection of aerial images (LVermGeo SH, 2020)

- Exclusion of elements wider than 20 m in canopy or shorter than 9 m using visual inspection of aerial images (LVermGeo SH, 2020)

- A 5 m buffer to remaining polyline features to create labels of 10 m width (Appendix Fig. 1)

We do not consider as hedgerow linear woody elements wider than 20 m, following the definition in the landscape features module of the Land Use and Coverage Area frame Survey (LUCAS) (D’Andrimont et al., 2024)). These features have different inner micro climatic characteristics (Litza et al., 2022), and are usually accounted for in tree cover maps. Thus, we excluded these features from the training process, along with features located within 20 m distance to forest margins. Out of 80,036 km of features, we removed 17,743 km and added another 6649 km, ending up with a total of 68,942 km. All three federal datasets are still inevitably imperfect to different extents, which negatively affects accuracies. Inaccuracies in labels include hedgerows close to the 20 m wide threshold, close to forests or forest patches, dense tree lines whose hedgerow layer cannot be confirmed, or hedgerows that were coppiced shortly before image acquisition.

![Figure 1. Reference datasets used for training in Schleswig-Holstein Federal State (SH) (yellow) and testing (blue), in SH, North Rhine-Westphalia (NRW),…](/muro-et-al/files/figures/hedgerow-mapping/fig01.jpg)

> **Figure 1:** Reference datasets used for training in Schleswig-Holstein Federal State (SH) (yellow) and testing (blue), in SH, North Rhine-Westphalia (NRW), Brandenburg (BB), and Bavaria (BY). Background satellite image from Google (Google Earth, 2023) and digital elevation model from the Shuttle Radar topography Mission (EROS, 2017). (For interpretation of the references to colour in this figure legend, the reader is referred to the web version of this article.)

### 2.2. Remote sensing data

The remote sensing data used consist of 8-band (VNIR) monthly mosaics of PlanetScope surface reflectance data, (basemaps henceforth) for the months April, June, August and October of the year 2022 (Fig. 2). These basemaps are generated on-demand by Planet with a proprietary algorithm that masks clouds and haze, and composites the best underlying pixels at 2.98 m resolution at German latitudes (Planet, 2024). They possess red, green and blue (RGB) bands, a yellow and a second green band, and a red-edge and a near infrared band. However, for the purpose of our work, the bands yellow, second green and red edge were excluded to speed up training and allow compatibility with previous PlanetScope sensor generations. Within our model evaluation framework, we tested different combinations of the monthly PlanetScope basemaps as well as different spectral band settings (i.e., RGB and near-infrared, red, green (NRG)). The basemaps were chipped into 512 by 512-pixel chips with 64 pixels overlap, generating a total of 6749 chips for SH, 243 chips in BB, and 312 chips in BY.

Additionally, we produced a height map by subtracting a digital terrain model (DTM) (BKG, 2020a) from a digital surface model DSM (BKG, 2020b). We then combined this height map with our predictions at national level to estimate hedgerow structure.

### 2.3. Model architecture and hyperparameters

A standard U-net architecture (Ronneberger et al., 2015) with a ResNet backbone was used in a semantic segmentation task in the segmentation-models package (Iakubovskii, 2019). U-Net is based on the fully convolutional neural network, is designed for pixel level classification tasks, and has been extended to work with fewer training images while preserving high segmentation accuracy. It has been successfully used on satellite imagery to detect objects such as roads (Hou et al., 2021), clouds (Hu et al., 2021) or buildings (Qiu et al., 2023). Each PlanetScope band was normalized using the respective 99th percentile. As optimizer (a parameter that updates the model’s weights and biases to minimize the loss function during training), we used Adam (adaptive moment estimation) with its default learning rate (0.001) due to its robustness and efficiency.

We applied two data augmentation processes in every epoch to help the model generalize better: a random sample of 50 % of the chips were flipped left to right, another random sample of 50 % was flipped upside down, and in another random sample of 50 % the contrast in each band was slightly changed by multiplying the normalized pixel values by a random contrast factor between 0.9 (decrease contrast) and 1.1 (increase contrast using the tensorflow adjust_contrast option). Additionally, we applied transfer learning by pretraining of the model weights using the ImageNet database (Deng et al., 2009). This method is effective for cases with limited labeled data for the target feature, but with plenty of labeled data for related features.

When parameterizing the model, we studied the influence of three parameters using the reference data from SH: the different combinations of PlanetScope bands and months, and the loss function. We tested 14 combinations of spectral-temporal inputs:

- All months available (4) with the green, red and near infrared bands (NRGall)

- Each individual month with the green, red and near infrared bands (NRG4, NRG6, NRG8 and NRG10)

- A combination of June and October to capture green and browning periods (NRG6–10)

- A combination of April and August to capture greening and green periods (NRG4–8)

- All above combinations but with red, green and blue bands (RGB)

The loss function is the mathematical representation of the prediction objectives that the architecture will try to minimize in an iterative process. Some loss functions focus more on the spatial contexts, and others prioritize spatial overlap, boundary precision, or continuity (Wang et al., 2022). Hedgerows are presented in PlanetScope imagery as thin linear structures of 1–6 pixels width, not necessarily continuous and with diffuse boundaries due to mixed pixels. Thus, we investigated the influence of six different loss functions: the standard binary cross-entropy (BCE) from keras (Chollet, 2015), the binary focal loss (BF) (Lin et al., 2017), and two functions based on the Intersection over Union (IoU): the generalized IoU (GIOU) (Rezatofighi et al., 2019) and the DICE similarity coefficient (DICE) loss function (Milletari et al., 2016). We also tested the combination of the BCE and BF with the DICE function. The BCE (eq. 1) is a distribution-based function that measures the dissimilarity between the predicted probabilities and the actual binary labels. The BF function generalizes the BCE by introducing a hyperparameter (default value of 2) that allows hard-to-classify examples to be penalized more heavily relative to easy-to-classify examples (eq. 2). GIOU (eq. 3) considers not only the overlap, but also the difference between far and close predictions even when there is no overlap. DICE (eq. 4), is a region-based function that focuses on the overlap between predicted and actual segmentation masks and performs well with unbalanced datasets. The combination of BCE or BF and DICE by addition permits a certain degree of diversity in the loss, while benefiting from the stability of BCE and BF (eq. 5).

Binary Cross-Entropy (BCE):

$$L(A, B) = -A \cdot \log(B) - (1 - A) \cdot \log(1 - B)$$

where: A represents the labels and B are the predicted probabilities.

Binary focal (BF):

$$L(A, B) = -A \cdot \alpha \cdot (1 - p_r)^{\gamma} \cdot \log(B) - (1 - A) \cdot \alpha \cdot B^{\gamma} \cdot \log(1 - B)$$

where α: as weighting factor, (0.25) and γ is the focusing parameter (default 2.0).

Generalized IoU (GIOU):

$$GIOU = IoU - \frac{|C \setminus (A \cup B)|}{|C|}$$

where IoU is the intersection over union, and C is the smallest convex object that encloses A and B.

DICE similarity coefficient:

$$DICE = 1 - \frac{2|A \cap B|}{|A| + |B|}$$

Where A ∩B represents the intersection between predictions and labels.

### 2.4. Model evaluation

The performance of all models was first evaluated splitting the reference data from Schleswig-Holstein into training, validation and test at 70 %, 20 %, 10 % respectively. Five metrics were used to evaluate the performance of the different combinations of loss function and spectral-temporal inputs:

Overlap metrics:

- Precision (prediction accuracy): Proportion of predicted hedgerows that match labels.

- Recall (label coverage): Proportion of ground truth labels correctly predicted

- F1 score (balanced accuracy): Harmonic mean of precision and recall

Distance metrics:

- Hausdorff distance: Maximum distance from one set to the other

- Average Spatial Distance (ASD): average distance between labels and predictions

Overlap-based metrics have some known limitations when applied for mapping of small objects (Jeune and Mokraoui, 2023). Due to the narrowness of some hedgerows (<3 pixels wide), a one-pixel lateral shift between prediction and label can return a IoU of 50 % (2 pixels intersection / 4 pixels union). On the other hand, the Hausdorff distance (Taha and Hanbury, 2015) measures the spatial coherence between two sets by considering the greatest distance between any point in one set and its closest point in the other set. It captures the worst-case mismatch, making it valuable comparing predicted shapes or boundaries in models to ground truth (Appendix formula 1). False positives and false negatives are equally important. It is mathematically represented as:

$$H(A, B) = \max\left( \sup_{a \in A} \inf_{b \in B} d(a, b),\; \sup_{b \in B} \inf_{a \in A} d(a, b) \right)$$

Where:

- H(A, B) is the Hausdorff distance between sets A and B.

- max is the maximum function, returning the larger of two values.

- sup denotes the supremum, representing the least upper bound.

- inf denotes the infimum, representing the greatest lower bound.

- a in A signifies that a is an element of set A.

- b in B signifies that b is an element of set B.

- d(a, b) is the distance function between points a and b.

Whereas Hausdorff distance measures the maximum spatial mismatch, the ASD measures the average spatial mismatch by calculating the pairwise distances between two sets of points, resulting in a distance matrix (Appendix formula 2). Both distance metrics were calculated with the SciPy library (Virtanen et al., 2020).

To estimate the total hedgerow area with corresponding confidence intervals, we used a sample-based estimator following the good practice recommendation by Olofsson et al. (2014) in the test chips of Schleswig-Holstein (n = 825). For the estimation we used a random stratified sample of 1000 sample points from the predicted hedgerow and background area each. This provides total area estimation adjusted to error rates with corresponding confidence intervals.

Since reports and plans often use length estimations rather than area (e.g. (Broughton et al., 2024; D’Andrimont et al., 2024; Drexler et al., 2024)), we calculated the total hedgerow length per chip and compared it with the test labels in SH, BB and BY. Hedgerow length was estimated by calculating the center line and length of all polygons. Hedgerows along both sides of paths were often mapped as a single feature wider than 20 m. Thus, for polygons wider than 20 m, the length of the center line was doubled.

The generalization capacity of the model was evaluated using independent datasets from three different federal states: Brandenburg (LfUB, 2009), North Rhine-Westphalia (LANUV, 2023), and Bavaria (BLfU, 2024). The NRW dataset is regularly updated, but the data provided included only features that have a legal protection level or are of special importance for nature conservation. Thus, the accuracy with the NRW dataset could only be evaluated on the basis of the recall i.e., proportion of labels correctly predicted.

The final predictions at national scale were compared with the SWF 2018 product from Copernicus (EEA, 2023), and with the ToF (Liu et al., 2023) (Appendix Table 1). These are to date and to the best of our knowledge, the two publicly available state-of-the-art products that yield large scale spatially explicit estimates of woody biomass outside of forests. SWF are delivered at 5 m resolution and have a maximum width of 30 m for linear elements. The maximum size for patchy features is 5000 m², and their minimum mapping unit is 200 m² (EEA, 2023). To produce the ToF map, Liu et al. (2023) used a semantic segmentation of PlanetScope imagery at 3 m resolution, and GEDI and Sentinel-2-based canopy models. Before the comparison, we post-processed the three products (ToF, SWF and our predictions) by:

- Excluding elements outside of areas classified as agriculture by the Basis Digital Landscape Model of Germany (Basis-DLM) (GeoBasis-DE and BKG, 2022)

- Exclusion of elements within 20 m of forests according to the Basis-DLM (GeoBasis-DE and BKG, 2022)

- Resampling the SWF product from 5 m to 3 m

## 3. Results

The results are presented with the following structure: Subsection 3.1 evaluates different temporal and spectral inputs (i.e., different combinations of monthly basemaps). Section 3.2 evaluates the five loss functions used. Subsection 3.3 explores the transferability of the model by evaluating the accuracy metrics in two federal states with different landscape characteristics than the training dataset. This section also establishes a comparison across Germany of the best model output against the two other available products that map woody biomass outside forests (namely SWF and ToF). Lastly, in subsection 3.4 we quantify the total extent and length of hedgerows in Germany. Additionally, in this section we present the results of the combination of our predictions with the height model (BKG, 2020a, 2020b) to get estimations of average hedgerow height and height variability across Germany.

### 3.1. Optimizing temporal and spectral inputs

The feature set containing the four monthly basemaps and the NIR channel (NRGall) returned the best results, with highest overlap metrics and lowest distance metrics (Fig. 3). Two pairs of months were combined separately to attempt to capture the periods of vegetation green peak and browning (for the temperate latitudes of Germany this is April & August (NRG4–8), and June & October (NRG6–10)), and reduce the amount of satellite data needed. However, such combinations returned generally lower accuracies. In general, the RGB models returned lower accuracies compared to the NRG models, highlighting the importance of the near infra-red channel for hedgerow detection.

### 3.2. Loss functions

Fig. 4 shows the accuracy metrics obtained with the different loss functions. The same set of test chips was used across comparisons. Even though all loss functions returned similar distance and overlap metrics (this shows that the differences in shape and position are small), there were some differences in the predictions. The BCE and BF functions returned predictions with lower and more variable probabilities (Fig. 5), and thus, an appropriate threshold needs to be implemented. The GIOU and DICE loss functions returned predictions with probability values much more clustered towards 1, the maximum probability (Fig. 5). Overall, a threshold of 0.3–0.4 was appropriate for BCE function, and had minor effects on GIOU or DICE. There was not any significant benefit from combining BCE nor BF with DICE.

### 3.3. Independent validation and comparison across products

The best performing model (NRGall: NRG with the 4 months basemaps and BCE loss function) was evaluated against independent datasets. Fig. 6 shows the accuracy metrics for our product, the ToF, and SWF using the same set of test chips. The post-processed SWF and ToF products returned lower overlap and distance scores.

The transferability capacities of our model were assessed using the three external datasets (BB, NRW and BY), and the results are shown in Fig. 7. In order to study the suitability of the three products when aggregating, we calculated the hedgerow length per chip in SH, BB and BY federal states for NRGall, SWF and ToF, and compared it to the length of the labels (Fig. 8).

We compared the spatial patterns of our model output with the other data products by aggregating them at the EU-NUTS3 level. Fig. 9 shows the share of hedgerow area in units per thousand per agricultural area predicted by our model, and by SWF and ToF postprocessed products. Substantial differences between the three products were found across districts, as well as at national scale (Fig. 9d). Despite the overall higher hedgerow share reported by SWF and ToF, these two products incurred in multiple omission errors in smaller hedgerows (Fig. 10).

### 3.4. Hedgerow distribution and structure across Germany

Fig. 11 shows the results of the best performing model (NRGall) applied at national scale, and aggregated to hexagons of 1 km². We estimate the total amount of hedgerows at canopy level (horizontal coverage as observed from above) to be 4081 (± 1425) km², or 2.3 % (±0.8 %) of agricultural land, that D’Andrimont et al. (2024) estimated to be 180,207 km². Hedgerows are clustered in North and North-Western Germany, with shares as high as 29 % of agricultural land in one 1 km² hexagon. Low hedgerow abundance was found in South and South-Eastern Germany and also along the coastline of the North Sea. We estimate the total length of hedgerows to be about 372,230 km.

We combined our predictions with the surface height map to generate hedgerow height and structural heterogeneity metrics. Fig. 12a and b show respectively the average hedgerow height and the coefficient of variation in height, as proxy for structural diversity. There were some regional patterns with higher average hedgerow height in North-West Germany and at the same time lower coefficient of variation, indicating rather similar hedgerow types. In contrast, highest variability in hedgerow height coincided with the districts with lower hedgerows.

## 4. Discussion

### 4.1. Optimizing temporal and spectral inputs

Our study stands out as the first to use multitemporal very high resolution satellite imagery for hedgerow mapping. The NRG models performed generally better than their RGB counterparts, whether using single, pairs or combinations of PlanetScope basemaps, highlighting the benefits of including near-infrared information to accurately identify hedgerows (Fig. 3).

Our model trained on mosaics from all four PlanetScope basemaps (April, June, August, and October) obtained better scores (higher overlap metrics and shorter spatial distances), closely followed by the models that used pairs of months. This advantage likely arises from capturing differences in phenological development and management between hedgerows and the surrounding agricultural land use. Single-month models suffered from false positives in linear features like streams and ditches, limiting its utility at a national scale. Similar studies (albeit mapping different features), argue that the timing of image acquisition is application-dependent. For example, Campos-Taberner et al. (2020) identified August imagery as most effective for predicting crop types in Spain, while Fang et al. (2020) found that November imagery was critical for tree species mapping in U.S. forests. Similarly, Muro et al. (2022) and Dieste et al. (2024), emphasized that spring and early autumn imagery contributed most to models estimating plant species richness in grasslands. We find that predicting over a more complete phenological profile yields better results for hedgerow mapping.

![Figure 2. Experimental workflow. PlanetScope monthly basemaps are stacked and chipped. Reference data from Schleswig-Holstein (SH), Imagenet weights and…](/muro-et-al/files/figures/hedgerow-mapping/fig02.jpg)

> **Figure 2:** Experimental workflow. PlanetScope monthly basemaps are stacked and chipped. Reference data from Schleswig-Holstein (SH), Imagenet weights and data augmentation are used for training and hyperparameterization. Trees outside of Forests (ToF) and Small Woody Features (SWF) products are masked with a Digital Landscape Model (DLM) to extract the hedgerows and compare it against our results using reference data from the federal states of NorthRhine-Westphalia (NRW), Brandenburg (BB) and Bavaria (BY). Final predictions are combined with a normalized Digital Surface Model (DSM) to generate hedgerow height metrics.

### 4.2. Loss functions

Most binary classification problems deal with items of a smaller perimeter-area ratio (e.g., forest patches, buildings, water bodies). In these cases, the intersection over union offers an adequate perception of the accuracy of the results. However, due to the high perimeter-area ratio of our target class (often 1–3 pixels width and hundreds of pixels long), the loss function and more appropriate accuracy metrics had to be evaluated. One or two pixel shifts between label and predictions can considerably decrease the IoU without any practical implication in the quality and usability of the results, underestimating model’s performance. The similar area and distance metrics obtained indicate a good fit between predictions and labels regardless of the loss function (Fig. 4). On the one hand, the DICE and GIOU functions yielded probabilistic outcomes skewed towards unity in the identification of hedgerows (Fig. 5), which is convenient when turning said probabilistic outcomes into binary categories. On the other hand, BCE and BF loss functions produced outcomes characterized by a more evenly distributed range of probabilities, often spanning from moderate to high values (0.3–0.8). This requires the introduction of additional thresholding steps, but allowed us to reduce the rate of false negatives by lowering the accepted probability threshold.

Combining loss functions is a common practice also in remote sensing image segmentation (e.g. of ice sheets (Nagi et al., 2021) or of ships (Lv et al., 2022)). Nevertheless, our combination of DICE with BCE and BF loss functions did not significantly improve accuracies in our test dataset. Other authors have also found small differences in accuracy when testing different loss functions in medical imaging datasets (Jadon, 2020), satellite images in road mapping (Yuan and Xu, 2022), or canopy height models (Tolan et al., 2024).

![Figure 3. Accuracy metrics for the different combinations of PlanetScope basemaps. Higher overlap based scores (F1, precision and recall), and lower…](/muro-et-al/files/figures/hedgerow-mapping/fig03.jpg)

> **Figure 3:** Accuracy metrics for the different combinations of PlanetScope basemaps. Higher overlap based scores (F1, precision and recall), and lower distance metrics (Hausdorff and average spatial distance (ASD)) indicate higher similarities between predictions and labels. The horizontal line divides the RGB and the NRG inputs. All models use BCE as loss function.

PlanetScope images have a positional root mean squared error below 10 m (Planet, 2024), and small positional errors across time series have been reported to cause a “jitter” effect (Broeks, 2023) (Appendix Fig. 4). We observed that when these positional errors took place several times across the time series, the model had difficulties identifying the target features and assigned very low probabilities. Lowering the probability threshold of the BCE function allowed us to overcome the false negatives without incurring in major false positives, but only to a certain extent. Thus, although GIOU offered more balanced recall and precision for similar F1, and very similar distance metrics, we selected the BCE to upscale the model to Germany.

### 4.3. Independent validation and comparison across products

The ToF dataset from Liu et al. (2023) and especially the SWF post-processed products scored poorer in all metrics (Fig. 6 and Fig. 7). This does not reflect on the overall quality or utility of the SWF and ToF products, but rather highlights a partial category mismatch in this specific context. In contrast, NRGall is specialized in hedgerow representation, enabling the capture of narrower features. We continue to find SWF and especially ToF highly valuable for mapping broader classes of woody vegetation and larger landscape features.

Multiple false positives in the postprocessed SWF and ToF datasets were caused by classification errors propagated from forested areas that were incorrectly classified as agriculture in the data used to mask them (BKG, 2020c) (see points along the Y axis in Fig. 8, and Appendix Fig. 2). This can cause a large overestimation of hedgerow surface across the country (Fig. 9). Despite this absolute overestimation, multiple false negatives in SWF and ToF took place in narrower hedgerows (Fig. 5). Similar results have been recently reported by Huber-García et al. (2025) for the Federal State of Bavaria, where only 57 % of the hedgerows detected overlapped with the SWF, whereas the SWF reported five times more woody features than their hedgerow predictions based on aerial imagery.

This makes it sub-optimal to use these products to evaluate the occurrence of hedgerows at national level. SWF derived products have already been used to evaluate the effect of hedgerows on biodiversity (Frank et al., 2024; Vallé et al., 2023), surface temperature (Ghafarian et al., 2024), and C sequestration capacities (Golicz et al., 2021). The conclusions of these and similar studies could significantly differ if hedgerow-specific predictions were used. While ad-hoc rules, such as excluding features based on perimeter-area ratios, could be employed to filter out some non-linear features in ToF and SWF, such an approach relies on trial-and-error estimations. This additional step increases methodological complexity and may introduce variability in results, making it less practical for national-scale evaluations. Therefore, we suggest to use case-specific prediction models based on the best available data over already available generic products that were not designed for said requirement.

The validation for the test datasets from the three federal states (BB, BY, NRW) yielded different results, with only minor losses in accuracy when transferred to BB (F1-score = 0.55) but a weaker transferability to BY, in Southern Germany (F1-score = 0.32). This can be attributed to various factors. Woody features in the South of Germany are more scattered, discontinuous and intermixed among forest patches and tree crops. This makes it very challenging to set apart short but wide hedgerows from other woody features, even with high resolution image interpretation (Appendix Fig. 3). We performed several tests adding a few samples (137 chips) from the BY dataset during training. However, we could not find any significant improvement in the results for the rest of the BY dataset.

Comparing the predicted and labeled hedgerow length per chip across three federal states returned much higher accuracies (r2 = 0.96, Fig. 8). Recent papers demonstrate as well how error rates are reduced and better estimated at coarser scales by aggregating predictions due to false positives and negatives canceling each other out (Wadoux and Heuvelink, 2023). Interestingly, ToF performs well predicting the length in Schleswig-Holstein, where one finds a high density of hedgerows. In Bavaria, forest patches, coppices and tree crops are much more fragmented, and cannot be properly removed from the ToF and SWF (see points close to the ‘Y’ axis in Fig. 8). Our product is thus more suitable to assess hedgerow share at national or regional/district scale, rather than for specific local hedgerow mapping and planning, for which higher resolution imagery would be preferred.

![Figure 4. Accuracy metrics for the different loss functions tested. Higher overlap-based scores (F1, precision and recall), and lower distance metrics…](/muro-et-al/files/figures/hedgerow-mapping/fig04.png)

> **Figure 4:** Accuracy metrics for the different loss functions tested. Higher overlap-based scores (F1, precision and recall), and lower distance metrics (Hausdorff and average spatial distance (ASD)) indicate better performance. The NRGall model with near-infrared data from the four PlanetScope basemaps was used for these tests.

![Figure 5. Predictions with different loss functions of an example area with narrow hedgrows (2–3 m wide) (Drexler and Don, 2024). Binary crossentropy (BCE)…](/muro-et-al/files/figures/hedgerow-mapping/fig05.jpg)

> **Figure 5:** Predictions with different loss functions of an example area with narrow hedgrows (2–3 m wide) (Drexler and Don, 2024). Binary crossentropy (BCE) and binary focal (BF) require a low probability threshold (~0.3) to correctly classify many hedgerows. The prediction probabilities of GIOU and the combinations of DICE with BF and BCE are much closer to 1 or 0. The first tile contains a PlanetScope image from August 2022 (red, near infrared and green for RGB channels). SWF and ToF are shown for comparison purposes. UAV and ground photos from winter and spring: ©Sofia Heukrodt. (EPSG: 3035, lat, lon: 3298381, 4,240,437). (For interpretation of the references to colour in this figure legend, the reader is referred to the web version of this article.)

![Figure 6. Overlap and distance (Hausdorff and average spatial distance (ASD)) metrics of the best performing model (NRGall), compared to available products…](/muro-et-al/files/figures/hedgerow-mapping/fig06.png)

> **Figure 6:** Overlap and distance (Hausdorff and average spatial distance (ASD)) metrics of the best performing model (NRGall), compared to available products (SWF and ToF) for the test chips from the federal state of Schleswig-Holstein.

![Figure 7. Accuracy metrics of the best performing model (NGRall), compared to available products (SWF and ToF) at the validation sites in the federal states…](/muro-et-al/files/figures/hedgerow-mapping/fig07.png)

> **Figure 7:** Accuracy metrics of the best performing model (NGRall), compared to available products (SWF and ToF) at the validation sites in the federal states of North Rhein Westphalia (NRW), Bavaria (BY) and Brandenburg (BB). In NRW, recall is the only applicable overlap metric since not all hedgerows are mapped by the NRW authorities.

### 4.4. Hedgerows across Germany

It is estimated that Germany has lost around 50 % of its hedgerows during the last 70 years due to land consolidation processes (Poschlod and Braun-Reichert, 2017). Hedgerows are known to be distributed in a North-South gradient that follows the general wind pressure pattern in Germany (Davis et al., 2023). The particular high abundance of hedgerows in the North, e.g., in the federal state of Schleswig-Holstein (Litza and Diekmann, 2017) is mainly related to its high protection status and historical legislations that enforced farmers in the 18th century to mark field boundaries with hedgerows. However, hedgerows need to be not only abundant, but also well distributed across the agricultural landscape to provide optimal ecosystem functions. Vallé et al. (2023) estimated that when woody features occupy up to 6 % of agricultural land, the benefits for various animal groups increase exponentially. Beyond this point, the benefits continue to grow, but at a linear rate. Hedgerow structure also plays a crucial role in determining the amount of habitat types and C sequestration potentials, with older hedgerows harboring more habitat types (Litza et al., 2022) and storing even more biomass than the average German forest (Drexler et al., 2024).

According to our calculations, Germany has around 4081 (± 1425 at 90 % confidence interval) km² of hedgerows. Assuming a 180,207 km² of agricultural land in 2022 (D’Andrimont et al., 2024), about half of Germany’s land area, we obtain a hedgerow share of 2.3 % (±0.8 %), which is close to the 2.8 % estimated by the LUCAS Landscape Feature Module (D’Andrimont et al., 2024) for the same year. The LUCAS Landscape Feature Module records the share of linear woody elements in agricultural areas that range between 1 m and 20 m width, and patchy features covering an area between 1m² and 5000m².

In order to better evaluate the share of small woody features (i.e., not only hedgerows) in agricultural landscapes, we merged our hedgerow map with the SWF postprocessed layer (i.e., forests and forest surroundings masked out). The percentage of small woody features rouse to 4 %, which is closer to the 6 % optimal for biodiversity proposed in Vallé et al. (2023). But hedgerow and SWF distributions are not homogenous across the country (Fig. 9 and Fig. 11), causing considerable differences between municipalities. Some NUTS3 regions in Germany reached an area share of 14 % covered by hedgerows and SWF (Karlsruhe and Flensburg), but others as little as 1 % (Heidenheim). We estimated a total length of hedgerows in Germany of approximately 372,230 km, equating to roughly 2.1 km of hedgerows per square kilometer of agricultural land. While there are no direct comparative estimates for Germany, the Nature and Biodiversity Conservation Union (NABU) and the Association of Farmers in Schleswig-Holstein estimate 45,000 km (Bauernverbrand SH, 2021) and 68,000 km (NABU, 2013) of hedgerows in that federal state. Our predictions indicate 59,309 km of hedgerows in Schleswig-Holstein, which falls within the midpoint of these estimations.

In a recent report, the Agora Agriculture (2024) think tank estimates that 6000 km² of hedgerows can be planted between 2025 and 2045, which would capture 5 MtCO₂ annually on average over this period (total of 112 MtCO₂). This would represent 23 % of the German annual emissions from arable land (22 MtCO₂ for 2022) (Vos et al., 2024). Since hedgerow fostering policies are carried out at regional level (federal states), hedgerow metrics at district level (Fig. 5) can be used to prioritize districts with large extensions of farmlands without hedgerows.

By combining our results with a digital surface model, we revealed districts with more homogeneous and high hedgerows (dark green in Fig. 12a and white in Fig. 12b) and districts with on average smaller but more heterogenous hedgerows (light green in Fig. 12a and dark blue in Fig. 12b). The negative correlation between hedgerow height and height variability may point to different management regimes of hedgerows. Hedgerows are systems that require regular coppicing every 10 years to preserve their shrub layer, its habitat functions and the biomass they store (Drexler et al., 2024). However, our data on hedgerow height indicate that such regular management is applied only to a fraction of existing hedgerows, presumably due to the high workload required (Fig. 12). The high hedgerows in other parts of Northern Germany (not in Schleswig-Holstein) may indicate missing regular coppicing resulting in high but rather uniform hedgerows that develop towards tree lines.

### 4.5. Limitations

Despite our model generates an unprecedented detailed map of hedgerows in Germany, it still faces a few caveats, the first concerning the clear delineation of the hedgerow class itself. The delineation of hedgerows and its differentiation from forest patches, gardens or tree crops can be challenging even for a photo interpreter, which can reduce the quality of the reference datasets, the quality of the predictions, and the representativity of the accuracy metrics. For instance, it is challenging to set apart a hedgerow a few meters close to a forest from the forest itself, as well as narrow or parallel lines of hedgerows placed at <5 m from one another (Appendix Fig. 3). Additionally, newly coppiced hedgerows may not be easily recognizable with satellite imagery. Since regular coppicing is recommended every 10 years, it would result in a potential 10 % non-recognizable hedgerows.

![Figure 8. Hedgerow length (m) per chip predicted vs labeled for the three products (NRGall, SWF and ToF) and three federal states (SH (n = 825), BB (n =…](/muro-et-al/files/figures/hedgerow-mapping/fig08.jpg)

> **Figure 8:** Hedgerow length (m) per chip predicted vs labeled for the three products (NRGall, SWF and ToF) and three federal states (SH (n = 825), BB (n = 243) and BY (n = 312)).

The influence of shadows and mixed pixel effects across the borders of the hedgerows might be an important source of overestimation of total hedgerow area difficult to account for. The high correlation coefficients obtained when comparing the predicted and labeled length (Fig. 8) suggest that length measurements are resilient to this potential bias.

Different accuracy metrics show different relationships between labels and predictions; whereas overlap-based metrics quantify matching and unmatching pixels, the distance metrics proposed can help to get a better sense of similarities in shapes regardless of the overlap. They are useful for areas where the target feature is abundant. However, in cases where there is one small false positive in one corner of the chip, and another false negative in another corner, the ASD and Hausdorff distance values will be very high. This will return low accuracies for two small misclassifications. This situation is much more common in the Bavarian dataset, where hedgerows, coppices, patches of forests and tree crops are intermixed (Appendix Fig. 3), and delineation of hedgerows is challenging even at ground level. Still, these two distance metrics are useful to compare performances of models tested on the same area, but not across areas. The hedgerow area estimation for Germany is the best estimate we can make using the available reference data, but not free of uncertainty. When using a stratified random sampling design, precision, recall, and target class area proportion do not affect the bias, but only the precision of the estimator (Olofsson et al., 2014; Skakun, 2025). However, by estimating national hedgerow area and confidence intervals based on the stratified random sample from Schleswig-Holstein, the implicit assumption is made that precision, recall, and target class proportion are the same for Schleswig-Holstein and the rest of Germany. While this can be argued for precision and recall based on qualitative, visual map inspection, we know that the assumption does not hold for the area proportion of the target class; Schleswig-Holstein is a region with high hedgerow area shares in Germany (Litza and Diekmann, 2017). Nevertheless, a sample-based estimator of hedgerow area, which accounts for known omission and commission errors, provides more insight on the actual hedgerow area than a pixel-counting area estimator, which is known to be biased (Skakun, 2025).

![Figure 9. Hedgerow area per unit of agricultural area (per thousand ‰) according to our model NRGall (a), to SWF (b) and ToF (c). All numbers are aggregated…](/muro-et-al/files/figures/hedgerow-mapping/fig09.jpg)

> **Figure 9:** Hedgerow area per unit of agricultural area (per thousand ‰) according to our model NRGall (a), to SWF (b) and ToF (c). All numbers are aggregated at NUTS3 level (districts). Districts with a share of agricultural land below 20 % are excluded (in white). The legend in (c) is kept at different scale in order to visualize differences across districts. The boxplots (d) show the hedgerow density distribution across districts, and in total of squared kilometers.

## 5. Conclusions

Multitemporal PlanetScope basemaps (3 m) and semantic segmentation approaches are suitable for identifying hedgerows in area wide agricultural landscapes. The use of repeated PlanetScope coverages distributed over the growing season was found to improve the mapping accuracy compared to single observations, allowing the semantic segmentation model to incorporate seasonal patterns to separate hedgerows from the surrounding agricultural landscape. However, the choice of loss functions had a minor impact on the resulting accuracies, but functions that produced a wider range of probabilities allowed us to map hedgerows in areas affected by sensor artifacts to a certain extent.

We estimate that hedgerows occupy 2.3 % (±0.8 %) of the agricultural area in Germany, and exhibit different structural patterns across the country with a clear North-South gradient in hedgerow density. Compared to other available satellite-based products that map woody features at large scales and across countries, the generated product is tailored to specific requirements and class definitions that focus on hedgerow mapping and quantification at national level. We quantified the differences between state-of-the-art products and highlighted the need for caution when including such data in subsequent analyses. Our analysis illustrates additionally, the benefit of using different accuracy metrics (overlap-based, distance-based, and aggregated), to better assess differences between products. Finally, we showed that the proposed approach enables to produce unprecedented results that can guide spatially explicit strategies and measures to protect and restore hedgerows to improve the multifunctionality of agricultural landscapes.

## CRediT authorship contribution statement

Javier Muro: Writing – review & editing, Writing – original draft, Methodology, Formal analysis, Conceptualization. Lukas Blickensdörfer: Formal analysis. Axel Don: Writing – review & editing, Funding acquisition, Conceptualization. Anna Köber: Formal analysis. Sarah Asam: Writing – review & editing, Data curation. Marcel Schwieder: Writing – review & editing, Resources, Conceptualization. Stefan Erasmi: Writing – review & editing, Writing – original draft, Resources, Project administration, Funding acquisition, Conceptualization.

## Funding

This research is part of the project KlimaFern: Remote sensing for improved climate reporting, funded by the Federal Ministry of Food, Agriculture and Regional Identity as part of the German Climate Protection Programme 2022.

## Declaration of competing interest

The authors declare the following financial interests/personal relationships which may be considered as potential competing interests: Stefan Erasmi reports financial support was provided by German Federal Ministry of Food and Agriculture. If there are other authors, they declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.

![Figure 10. Example of comparison between the best performing model (NRGall) and ToF and SWF. The predictions from NRGall offer a much closer representation…](/muro-et-al/files/figures/hedgerow-mapping/fig10.jpg)

> **Figure 10:** Example of comparison between the best performing model (NRGall) and ToF and SWF. The predictions from NRGall offer a much closer representation of the labels. ToF and especially SWF products could not capture many narrow hedgerows. Aerial image from LVermGeo (2020) (EPSG: 3035 lat, lon: 3460259, 4,291,005).

![Figure 11. Proportion of hedgerow per agricultural area predicted and aggregated in 1 km² hexagons.](/muro-et-al/files/figures/hedgerow-mapping/fig11.jpg)

> **Figure 11:** Proportion of hedgerow per agricultural area predicted and aggregated in 1 km² hexagons.

![Figure 12. a) Average hedgerow height (m), b) coefficient of variation of hedgerow height. All numbers are aggregated at NUTS3 level (districts).](/muro-et-al/files/figures/hedgerow-mapping/fig12.jpg)

> **Figure 12:** a) Average hedgerow height (m), b) coefficient of variation of hedgerow height. All numbers are aggregated at NUTS3 level (districts).

## Acknowledgements

We thank the Federal Agency for Nature, Environment and Consumer Protection of North Rhine-Westphalia, the Schleswig-Holstein State Office for Agriculture, Environment and Rural Areas, and the Brandenburg and Bavaria State Offices for Environment, for providing the reference data needed for training and validation. For valuable help with processing validation data, we thank Valerie Traxler and Hannah Böttcher. We thank Siyu Liu from the Department of Geosciences and Natural Resource Management of the University of Copenhagen, Denmark, for providing the canopy cover & height data at a 3 m resolution for comparison. We also thank the three anonymous reviewers for their valuable insights.

## Appendix A. Appendix

![Appendix Figure 1. Example of lines along hedgerows provided by the Schleswig-Holstein Federal State authorities, the 5 m buffer applied and the label generated to…](/muro-et-al/files/figures/hedgerow-mapping/appendix_fig01.jpg)

> **Appendix Figure 1:** Example of lines along hedgerows provided by the Schleswig-Holstein Federal State authorities, the 5 m buffer applied and the label generated to train the models (yellow).

> **Appendix Table 1:** Characteristics of the three compared final products.

| | SWF | ToF | NRGall |
| --- | --- | --- | --- |
| Satellite | Sentinel-2, Pleaides, SPOT, WorldView, GeoEye, Deimos | PlanetScope & Canopy height based on Sentinel-2 and GEDI | PlanetScope |
| Resolution | 5 m | 3 m | 3 m |
| Timing | May 2017- Sep 2019 | August 2019 | April, June, August, October 2022 |
| Reference data | 6 samples/km² extracted from SWF 2015 from European Countries + UK | Airborne- based Canopy Height Model from Denmark | Polylines buffered with 5 m from Schleswig-Holstein German Federal State |
| Classification algorithm | Random forest | UNet | UNet |
| Postprocessing | Masked in origin with the High Resolution Layer Tree Density Cover (HRL TDC) (EEA, 2023) mmu = 100 m2 <30 m width | Mask to agricultural areas and exclude forests based on ATKIS A 10 % canopy cover threshold | No mask |

Appendix Formula 1: Python function for calculating Hausdorff distance:

![Appendix Formula 1. Python function reproduced from the source PDF](/muro-et-al/files/figures/hedgerow-mapping/appendix_formula01.png)

Appendix Formula 2: Python function for calculating the asymmetric spatial distance:

![Appendix Formula 2. Python function reproduced from the source PDF](/muro-et-al/files/figures/hedgerow-mapping/appendix_formula02.png)

![Appendix Figure 2. Large areas classified under agricultural use (transparent yellow) by national statistics (GeoBasis-DE and BKG, 2022), but with a substantial…](/muro-et-al/files/figures/hedgerow-mapping/appendix_fig02.jpg)

> **Appendix Figure 2:** Large areas classified under agricultural use (transparent yellow) by national statistics (GeoBasis-DE and BKG, 2022), but with a substantial amount of trees, some of which are included in the ToF and SWF postprocessed products (purple) despite all the masks applied. Aerial image from (LVermGeo SH, 2020), (EPSG: 3035, lat, lon: 3077265, 4,452,405).

![Appendix Figure 3. Labels in BY dataset, modified from Huber-García et al., 2025 a) Parallel hedgerows close to each other may not be detected due to sensor…](/muro-et-al/files/figures/hedgerow-mapping/appendix_fig03.jpg)

> **Appendix Figure 3:** Labels in BY dataset, modified from Huber-García et al., 2025 a) Parallel hedgerows close to each other may not be detected due to sensor limitations. b) Sparse tree lines are rarely but sometimes partially classified as hedgerows. c) Narrow hedgerows may not be detected due to sensor limitations (center part of image). Errors in labels still remain (left part), especially in BY dataset since the federal authorities focused on high value habitats (Huber-García et al. (2025). The right columns show a NRG Planet imagery, and middle and left columns a near infrared orthophoto from 2020.

![Appendix Figure 4. Hedgerows not predicted because of multiple shifts in images across Planet bands and across months in the Federal State of Bavaria (EPGS 3035,…](/muro-et-al/files/figures/hedgerow-mapping/appendix_fig04.jpg)

> **Appendix Figure 4:** Hedgerows not predicted because of multiple shifts in images across Planet bands and across months in the Federal State of Bavaria (EPGS 3035, lat, lon: 2859619, 4,588,001).

## Data availability

Data will be made available on request.

## References

1. Agora Agriculture, 2024. Agriculture, forestry and food in a climate neutral EU. The land use sectors as part of a sustainable food system and bioeconomy.

2. Ahlswede, S., Asam, S., Röder, A., 2021. Hedgerow object detection in very high-resolution satellite images using convolutional neural networks. J. Appl. Remote. Sens. 15. https://doi.org/10.1117/1.JRS.15.018501.

3. Baudry, J., Bunce, R.G.H., Burel, F., 2000. Hedgerows: an international perspective on their origin, function and management. J. Environ. Manag. 60, 7–22. https://doi.org/10.1006/jema.2000.0358.

4. Bauernverbrand, SH, 2021. Knicks: Einzigartige Lebensräume, von Bauern gepflegt.

5. Betbeder, J., Nabucet, J., Pottier, E., Baudry, J., Corgne, S., Hubert-Moy, L., 2014. Detection and characterization of hedgerows using TerraSAR-X imagery. Remote Sens. 6, 3752–3769. https://doi.org/10.3390/rs6053752.

6. Biffi, S., Chapman, P.J., Grayson, R.P., Ziv, G., 2022. Soil carbon sequestration potential of planting hedgerows in agricultural landscapes. J. Environ. Manag. 307, 114484. https://doi.org/10.1016/j.jenvman.2022.114484.

7. Biffi, S., Chapman, P.J., Grayson, R.P., Ziv, G., 2023. Planting hedgerows: biomass carbon sequestration and contribution towards net-zero targets. Sci. Total Environ. 892, 164482. https://doi.org/10.1016/j.scitotenv.2023.164482.

8. BKG, 2020a. Digitales Geländemodell Gitterweite 5 m DGM5.

9. BKG, 2020b. Digitales Oberflächenmodell Gitterweite 1 m DOM1.

10. BKG, 2020c. Basis Landscape Model (ATKIS Basis-DLM) © GeoBasis-DE.

11. BLfU, 2024. Kartieranleitung Biotopkartierung Bayern (inkl. Kartierung der Offenland-Lebensraumtypen der Fauna-Flora-Habitat-Richtlinie) - Teil 1 - Arbeitsmethodik.

12. Böhm, C., Kanzler, M., Freese, D., 2014. Wind speed reductions as influenced by woody hedgerows grown for biomass in short rotation alley cropping systems in Germany. Agrofor. Syst. 88, 579–591. https://doi.org/10.1007/s10457-014-9700-y.

13. Broeks, R., 2023. Banishing the Jitters: Stabilizing Satellite Imagery with OpenCV’s Phase Correlation. Medium. URL. https://medium.com/radix-ai-blog/banishing-the-jitters-stabilizing-satellite-imagery-with-opencvs-phase-correlation-3ba2dc6ac096.

14. Broughton, R.K., Burkmar, R., McCracken, M., Mitschunas, N., Norton, L.R., Pallett, D. W., Patton, J., Redhead, J.W., Staley, J.T., Wood, C.M., Pywell, R.F., 2024. UKCEH Land Cover Plus: Hedgerows 2016-2021 (England). https://doi.org/10.5285/D90A3733-2949-4DFA-8AC2-A88AEF8699BE.

15. Campos-Taberner, M., García-Haro, F.J., Martínez, B., Izquierdo-Verdiguier, E., Atzberger, C., Camps-Valls, G., Gilabert, M.A., 2020. Understanding deep learning in land use classification based on Sentinel-2 time series. Sci. Rep. 10, 17188. https://doi.org/10.1038/s41598-020-74215-5.

16. Chollet, F., 2015. Keras [WWW Document]. URL. https://keras.io.

17. D’Andrimont, R., Czucz, B., De Marchi, D., Gallego, J., Iordanov, M., Koeble, R., Musavi, T., Skoien, J., Martinez Sanchez, L., Terres, J., 2024. Estimation of the Share of Landscape Features in Agricultural Land Based on the LUCAS 2022 Survey. Publications Office, LU.

18. Davis, N.N., Badger, J., Hahmann, A.N., Hansen, B.O., Mortensen, N.G., Kelly, M., Larsén, X.G., Olsen, B.T., Floors, R., Lizcano, G., Casso, P., Lacave, O., Bosch, A., Bauwens, I., Knight, O.J., Potter Van Loon, A., Fox, R., Parvanyan, T., Krohn Hansen, S.B., Heathfield, D., Onninen, M., Drummond, R., 2023. The global wind atlas: a high-resolution dataset of climatologies and associated web-based application. Bull. Am. Meteorol. Soc. 104, E1507–E1525. https://doi.org/10.1175/BAMS-D-21-0075.1.

19. Deng, J., Dong, W., Socher, R., Li, L.-J., Li, K., Fei-Fei, L., 2009. ImageNet: A Large-Scale Hierarchical Image Database. CVPR09.

20. Dieste, Á.G., Argüello, F., Heras, D.B., Magdon, P., Linstädter, A., Dubovyk, O., Muro, J., 2024. ResNeTS: a ResNet for time series analysis of Sentinel-2 data applied to grassland plant-biodiversity prediction. IEEE J. Sel. Top. Appl. Earth Obs. Remote Sens. 1–23. https://doi.org/10.1109/JSTARS.2024.3454271.

21. Drexler, S., Don, A., 2024. Carbon sequestration potential in hedgerow soils: results from 23 sites in Germany. Geoderma 445, 116878. https://doi.org/10.1016/j.geoderma.2024.116878.

22. Drexler, S., Gensior, A., Don, A., 2021. Carbon sequestration in hedgerow biomass and soil in the temperate climate zone. Reg. Environ. Chang. 21, 74. https://doi.org/10.1007/s10113-021-01798-8.

23. Drexler, S., Thiessen, E., Don, A., 2024. Carbon storage in old hedgerows: the importance of below-ground biomass. GCB Bioenergy 16, e13112. https://doi.org/10.1111/gcbb.13112.

24. Dunn, J.C., Gruar, D., Stoate, C., Szczur, J., Peach, W.J., 2016. Can hedgerow management mitigate the impacts of predation on songbird nest survival? J. Environ. Manag. 184, 535–544. https://doi.org/10.1016/j.jenvman.2016.10.028.

25. EEA, 2023. Small Woody Features 2018 (raster 5 m), Europe, 3-yearly, May 2023. https://doi.org/10.2909/A8E683B1-2F96-45C8-827F-580A79413018.

26. EROS, 2017. Shuttle Radar Topography Mission (SRTM) 1 Arc-Second Global. https://doi.org/10.5066/F7PR7TFT.

27. EU CAP Network, 2023. Focus Group - Enhancing the biodiversity on farmland through high-diversity landscape features.

28. European Commission, COWI., Exergia., Silvestrum., Technopolis, 2021. Reviewing the Contribution of the Land Use, Land-Use Change and Forestry Sector to the Green Deal: Final Study. Publications Office, LU.

29. Fang, F., McNeil, B.E., Warner, T.A., Maxwell, A.E., Dahle, G.A., Eutsler, E., Li, J., 2020. Discriminating tree species at different taxonomic levels using multi-temporal WorldView-3 imagery in Washington D.C., USA. Remote Sens. Environ. 246, 111811. https://doi.org/10.1016/j.rse.2020.111811.

30. Fauvel, M., Sheeren, D., Chanussot, J., Benediktsson, J.A., 2012. Hedges detection using local directional features and support vector data description. In: 2012 IEEE International Geoscience and Remote Sensing Symposium. Presented at the IGARSS 2012–2012 IEEE International Geoscience and Remote Sensing Symposium. IEEE, Munich, Germany, pp. 2320–2323. https://doi.org/10.1109/IGARSS.2012.6351030.

31. Frank, C., Hertzog, L., Klimek, S., Schwieder, M., Tetteh, G.O., Böhner, H.G.S., Röder, N., Levers, C., Katzenberger, J., Kreft, H., Kamp, J., 2024. Woody semi-natural habitats modulate the effects of field size and functional crop diversity on farmland birds. J. Appl. Ecol. 61, 987–999. https://doi.org/10.1111/1365-2664.14604.

32. GeoBasis-DE, BKG, 2022. Digital Landscape Model ATKIS.

33. Ghafarian, F., Ghazaryan, G., Wieland, R., Nendel, C., 2024. The impact of small woody features on the land surface temperature in an agricultural landscape. Agric. For. Meteorol. 349, 109949. https://doi.org/10.1016/j.agrformet.2024.109949.

34. Golicz, K., Ghazaryan, G., Niether, W., Wartenberg, A.C., Breuer, L., Gattinger, A., Jacobs, S.R., Kleinebecker, T., Weckenbrock, P., Große-Stoltenberg, A., 2021. The role of small woody landscape features and agroforestry systems for national carbon budgeting in Germany. Land 10, 1028. https://doi.org/10.3390/land10101028.

35. Google Earth, 2023. Google Earth Aerial Image.

36. Holden, J., Grayson, R.P., Berdeni, D., Bird, S., Chapman, P.J., Edmondson, J.L., Firbank, L.G., Helgason, T., Hodson, M.E., Hunt, S.F.P., Jones, D.T., Lappage, M.G., Marshall-Harries, E., Nelson, M., Prendergast-Miller, M., Shaw, H., Wade, R.N., Leake, J.R., 2019. The role of hedgerows in soil functioning within agricultural landscapes. Agric. Ecosyst. Environ. 273, 1–12. https://doi.org/10.1016/j.agee.2018.11.027.

37. Hou, Y., Liu, Z., Zhang, T., Li, Y., 2021. C-UNet: complement UNet for remote sensing road extraction. Sensors 21, 2153. https://doi.org/10.3390/s21062153.

38. Hu, K., Zhang, D., Xia, M., 2021. CDUNet: cloud detection UNet for remote sensing imagery. Remote Sens. 13, 4533. https://doi.org/10.3390/rs13224533.

39. Huber-García, V., Kriese, J., Asam, S., Dirscherl, M., Stellmach, M., Buchner, J., Kerler, K., Gessner, U., 2025. Hedgerow map of Bavaria, Germany, based on orthophotos and convolutional neural networks. Remote Sens. Appl. Soc. Environ. 37, 101451. https://doi.org/10.1016/j.rsase.2025.101451.

40. Iakubovskii, P., 2019. Segmentation Models. GitHub Repos.

41. Jadon, S., 2020. A survey of loss functions for semantic segmentation. In: In: 2020 IEEE Conference on Computational Intelligence in Bioinformatics and Computational Biology (CIBCB). Presented at the 2020 IEEE Conference on Computational Intelligence in Bioinformatics and Computational Biology (CIBCB). IEEE, Via del Mar, Chile, pp. 1–7. https://doi.org/10.1109/CIBCB48159.2020.9277638.

42. Jeune, P.L., Mokraoui, A., 2023. Rethinking Intersection Over Union for Small Object Detection in Few-Shot Regime. https://doi.org/10.48550/ARXIV.2307.09562.

43. Kattenborn, T., Leitloff, J., Schiefer, F., Hinz, S., 2021. Review on convolutional neural networks (CNN) in vegetation remote sensing. ISPRS J. Photogramm. Remote Sens. 173, 24–49. https://doi.org/10.1016/j.isprsjprs.2020.12.010.

44. LANUV, 2023. Ökologische Flächenstichprobe (ÖFS), Ecological Area Sample.

45. LfUB, 2009. Comprehensive biotope and land use mapping (BTLN) in the state of Brandenburg.

46. Lin, T.-Y., Goyal, P., Girshick, R., He, K., Dollár, P., 2017. Focal Loss for Dense Object Detection. https://doi.org/10.48550/ARXIV.1708.02002.

47. Litza, K., Diekmann, M., 2017. Resurveying hedgerows in northern Germany: plant community shifts over the past 50 years. Biol. Conserv. 206, 226–235. https://doi.org/10.1016/j.biocon.2016.12.003.

48. Litza, K., Alignier, A., Closset-Kopp, D., Ernoult, A., Mony, C., Osthaus, M., Staley, J., Van Den Berge, S., Vanneste, T., Diekmann, M., 2022. Hedgerows as a habitat for forest plant species in the agricultural landscape of Europe. Agric. Ecosyst. Environ. 326, 107809. https://doi.org/10.1016/j.agee.2021.107809.

49. Liu, S., Brandt, M., Nord-Larsen, T., Chave, J., Reiner, F., Lang, N., Tong, X., Ciais, P., Igel, C., Pascual, A., Guerra-Hernandez, J., Li, S., Mugabowindekwe, M., Saatchi, S., Yue, Y., Chen, Z., Fensholt, R., 2023. The overlooked contribution of trees outside forests to tree cover and woody biomass across Europe. Sci. Adv. 9, eadh4097. https://doi.org/10.1126/sciadv.adh4097.

50. LLUR, 2023. Landesweite Biotopkartierung Schleswig-Holstein (BKSH) ab 2014 – linienhafte Biotope. Version 2022.

51. Luscombe, D.J., Gatis, N., Anderson, K., Carless, D., Brazier, R.E., 2023. Rapid, repeatable landscape-scale mapping of tree, hedgerow, and woodland habitats (THAW), using airborne LIDAR and spaceborne SAR data. Ecol. Evol. 13, e10103. https://doi.org/10.1002/ece3.10103.

52. Lv, Z., Huang, H., Gao, L., Benediktsson, J.A., Zhao, M., Shi, C., 2022. Simple multiscale UNet for change detection with heterogeneous remote sensing images. IEEE Geosci. Remote Sens. Lett. 19, 1–5. https://doi.org/10.1109/LGRS.2022.3173300.

53. Milletari, F., Navab, N., Ahmadi, S.-A., 2016. V-net: Fully convolutional neural networks for volumetric medical image segmentation. In: In: 2016 Fourth International Conference on 3D Vision (3DV). Presented at the 2016 Fourth International Conference on 3D Vision (3DV). IEEE, Stanford, CA, USA, pp. 565–571. https://doi.org/10.1109/3DV.2016.79.

54. Muro, J., Linstädter, A., Magdon, P., Wöllauer, S., Männer, F.A., Schwarz, L.-M., Ghazaryan, G., Schultz, J., Malenovský, Z., Dubovyk, O., 2022. Predicting plant biomass and species richness in temperate grasslands across regions, time, and land management with remote sensing and deep learning. Remote Sens. Environ. 282, 113262. https://doi.org/10.1016/j.rse.2022.113262.

55. NABU, 2013. Wie lang ist unser Knicknetz?.

56. Nagi, A.S., Kumar, D., Sola, D., Scott, K.A., 2021. RUF: Effective Sea ice floe segmentation using end-to-end RES-UNET-CRF with dual loss. Remote Sens. 13, 2460. https://doi.org/10.3390/rs13132460.

57. NRL, 2024. European Parliament, Council of the European Union, 2024. Regulation (EU) 2024/1991 of the European Parliament and of the Council of 24 June 2024 on nature restoration and amending Regulation (EU) 2022/869 (Text with EEA relevance). Document 32024R1991. Official Journal of the European Union 2024/1991European Nature Restoration Law Regulation.

58. Olofsson, P., Foody, G.M., Herold, M., Stehman, S.V., Woodcock, C.E., Wulder, M.A., 2014. Good practices for estimating area and assessing accuracy of land change. Remote Sens. Environ. 148, 42–57. https://doi.org/10.1016/j.rse.2014.02.015.

59. Planet, 2024. Planet Scope Basemaps: Technical Specification.

60. Poschlod, P., Braun-Reichert, R., 2017. Small natural features with large ecological roles in ancient agricultural landscapes of Central Europe - history, value, status, and conservation. Biol. Conserv. 211, 60–68. https://doi.org/10.1016/j.biocon.2016.12.016.

61. Qiu, W., Gu, L., Gao, F., Jiang, T., 2023. Building extraction from very high-resolution remote sensing images using refine-UNet. IEEE Geosci. Remote Sens. Lett. 20, 1–5. https://doi.org/10.1109/LGRS.2023.3243609.

62. Raven, P.H., Wagner, D.L., 2021. Agricultural intensification and climate change are rapidly decreasing insect biodiversity. Proc. Natl. Acad. Sci. 118, e2002548117. https://doi.org/10.1073/pnas.2002548117.

63. Rey Benayas, J.M., Bullock, J.M., 2015. Vegetation restoration and other actions to enhance wildlife in European agricultural landscapes. In: Pereira, H.M., Navarro, L. M. (Eds.), Rewilding European Landscapes. Springer International Publishing, Cham, pp. 127–142. https://doi.org/10.1007/978-3-319-12039-3_7.

64. Rezatofighi, H., Tsoi, N., Gwak, J., Sadeghian, A., Reid, I., Savarese, S., 2019. Generalized intersection over Union: A metric and a loss for bounding box regression. In: In: 2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR). Presented at the 2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR). IEEE, Long Beach, CA, USA, pp. 658–666. https://doi.org/10.1109/CVPR.2019.00075.

65. Ronneberger, O., Fischer, P., Brox, T., 2015. U-net: Convolutional networks for biomedical image segmentation. In: Navab, N., Hornegger, J., Wells, W.M., Frangi, A.F. (Eds.), Medical Image Computing and Computer-Assisted Intervention – MICCAI 2015, Lecture Notes in Computer Science. Springer International Publishing, Cham, pp. 234–241. https://doi.org/10.1007/978-3-319-24574-4_28.

66. SH, LVermGeo, 2020. DOP Orthophoto 2020, Landesamt für Vermessung und Geoinformation Schleswig-Holstein.

67. Skakun, S., 2025. The impact of map accuracy on area estimation with remotely sensed data within the stratified random sampling design. Remote Sens. Environ. 326, 114805. https://doi.org/10.1016/j.rse.2025.114805.

68. Smigaj, M., Gaulton, R., 2021. Capturing hedgerow structure and flowering abundance with UAV remote sensing. Remote Sens. Ecol. Conserv. 7, 521–533. https://doi.org/10.1002/rse2.208.

69. Taha, A.A., Hanbury, A., 2015. An efficient algorithm for calculating the exact Hausdorff distance. IEEE Trans. Pattern Anal. Mach. Intell. 37, 2153–2163. https://doi.org/10.1109/TPAMI.2015.2408351.

70. Tolan, J., Yang, H.-I., Nosarzewski, B., Couairon, G., Vo, H.V., Brandt, J., Spore, J., Majumdar, S., Haziza, D., Vamaraju, J., Moutakanni, T., Bojanowski, P., Johns, T., White, B., Tiecke, T., Couprie, C., 2024. Very high resolution canopy height maps from RGB imagery using self-supervised vision transformer and convolutional decoder trained on aerial lidar. Remote Sens. Environ. 300, 113888. https://doi.org/10.1016/j.rse.2023.113888.

71. Vallé, C., Le Viol, I., Kerbiriou, C., Bas, Y., Jiguet, F., Princé, K., 2023. Farmland biodiversity benefits from small woody features. Biol. Conserv. 286, 110262. https://doi.org/10.1016/j.biocon.2023.110262.

72. van Vooren, L., Bert, R., Steven, B., Pieter, D.F., Victoria, N., Paul, P., Kris, V., 2017. Ecosystem service delivery of Agri-environment measures: a synthesis for hedgerows and grass strips on arable land. Agric. Ecosyst. Environ. 244, 32–51. https://doi.org/10.1016/j.agee.2017.04.015.

73. Vandevelde, J.-C., Bouhours, A., Julien, J.-F., Couvet, D., Kerbiriou, C., 2014. Activity of European common bats along railway verges. Ecol. Eng. 64, 49–56. https://doi.org/10.1016/j.ecoleng.2013.12.025.

74. Vanneste, T., Govaert, S., De Kesel, W., Van Den Berge, S., Vangansbeke, P., Meeussen, C., Brunet, J., Cousins, S.A.O., Decocq, G., Diekmann, M., Graae, B.J., Hedwall, P., Heinken, T., Helsen, K., Kapás, R.E., Lenoir, J., Liira, J., Lindmo, S., Litza, K., Naaf, T., Orczewska, A., Plue, J., Wulf, M., Verheyen, K., De Frenne, P., 2020. Plant diversity in hedgerows and road verges across Europe. J. Appl. Ecol. 57, 1244–1257. https://doi.org/10.1111/1365-2664.13620.

75. Vannier, C., Hubert-Moy, L., 2008. Detection of wooded hedgerows in high resolution satellite images using an object-oriented method. In: IGARSS 2008–2008 IEEE International Geoscience and Remote Sensing Symposium. Presented at the IGARSS 2008–2008 IEEE International Geoscience and Remote Sensing Symposium. IEEE, Boston, MA, USA. https://doi.org/10.1109/IGARSS.2008.4779826 p. IV-731-IV–734.

76. Virtanen, P., Gommers, R., Oliphant, T.E., Haberland, M., Reddy, T., Cournapeau, D., Burovski, E., Peterson, P., Weckesser, W., Bright, J., Van Der Walt, S.J., Brett, M., Wilson, J., Millman, K.J., Mayorov, N., Nelson, A.R.J., Jones, E., Kern, R., Larson, E., Carey, C.J., Polat, İ., Feng, Y., Moore, E.W., VanderPlas, J., Laxalde, D., Perktold, J., Cimrman, R., Henriksen, I., Quintero, E.A., Harris, C.R., Archibald, A.M., Ribeiro, A. H., Pedregosa, F., Van Mulbregt, P., SciPy 1.0 Contributors, Vijaykumar, A., Bardelli, A.P., Rothberg, A., Hilboll, A., Kloeckner, A., Scopatz, A., Lee, A., Rokem, A., Woods, C.N., Fulton, C., Masson, C., Häggström, C., Fitzgerald, C., Nicholson, D.A., Hagen, D.R., Pasechnik, D.V., Olivetti, E., Martin, E., Wieser, E., Silva, F., Lenders, F., Wilhelm, F., Young, G., Price, G.A., Ingold, G.-L., Allen, G.E., Lee, G.R., Audren, H., Probst, I., Dietrich, J.P., Silterra, J., Webber, J.T., Slavič, J., Nothman, J., Buchner, J., Kulick, J., Schönberger, J.L., De Miranda Cardoso, J.V., Reimer, J., Harrington, J., Rodríguez, J.L.C., Nunez-Iglesias, J., Kuczynski, J., Tritz, K., Thoma, M., Newville, M., Kümmerer, M., Bolingbroke, M., Tartre, M., Pak, M., Smith, N.J., Nowaczyk, N., Shebanov, N., Pavlyk, O., Brodtkorb, P.A., Lee, P., McGibbon, R.T., Feldbauer, R., Lewis, S., Tygier, S., Sievert, S., Vigna, S., Peterson, S., More, S., Pudlik, T., Oshima, T., Pingel, T.J., Robitaille, T.P., Spura, T., Jones, T.R., Cera, T., Leslie, T., Zito, T., Krauss, T., Upadhyay, U., Halchenko, Y.O., Vázquez-Baeza, Y., 2020. SciPy 1.0: fundamental algorithms for scientific computing in Python. Nat. Methods 17, 261–272. https://doi.org/10.1038/s41592-019-0686-2.

77. Von Königslöw, V., Fornoff, F., Klein, A.-M., 2022. Pollinator enhancement in agriculture: comparing sown flower strips, hedges and sown hedge herb layers in apple orchards. Biodivers. Conserv. 31, 433–451. https://doi.org/10.1007/s10531-021-02338-w.

78. Vos, Rösemann C., Haenel, H.D., Dämmgen, U., Döring, U., Wulf, S., Eutich-Menden, B., Freibauer, A., Döhler, H., Steuer, B., Osterburg, B., Fuß, R., 2024. Calculations of gaseous and particulate emissions from German agriculture 1990–2022 : Report on methods and data (RMD).

79. Wadoux, A.M.J.-C., Heuvelink, G.B.M., 2023. Uncertainty of spatial averages and totals of natural resource maps. Methods Ecol. Evol. 14, 1320–1332. https://doi.org/10.1111/2041-210X.14106.

80. Wang, Q., Ma, Y., Zhao, K., Tian, Y., 2022. A comprehensive survey of loss functions in machine learning. Ann. Data Sci. 9, 187–212. https://doi.org/10.1007/s40745-020-00253-5.

81. Yuan, W., Xu, W., 2022. GapLoss: a loss function for semantic segmentation of roads in remote sensing images. Remote Sens. 14, 2422. https://doi.org/10.3390/rs14102422.
