---
layout: "layouts/home.html"
title: "Useful Information"
citation_01: "Positive and constructive approach to treatment. Excellent and relaxed facilities. Treatment always beneficial, making steady progress with a longstanding problem. Several other associated problems treated successfully."
author_01: "C. Nield"
citation_02: "Excellent service and care."
author_02: "Mr G. Every. 2013"
citation_03: "I have been suffering from feeling crooked when riding, I could feel an improvement right from the first treatment."
author_03: "Miss L. Pincus. 2019"
---

Here is a selection of videos, website links and downloads that provide more information about chiropractic and back care. We hope you find them useful.

If you have any questions about whether chiropractic could help you, [please get in touch for an informal, no obligation, conversation](/contact/ "Contact Ledbury Chiropractic Clinic Ltd").

**Browse useful websites**

-   <a href="https://chiropractic-uk.co.uk/" target="blank" title="British Chiropractic Association" rel="noopener">British Chiropractic Association</a>
-   <a href="https://www.gcc-uk.org/" target="blank" title="General Chiropractic Council" rel="noopener">General Chiropractic Council</a>
-   <a href="http://www.chiropatients.org.uk/" target="blank" title="Chiropractic Patients’ Association" rel="noopener">Chiropractic Patients’ Association</a>

View posture information sheets from the British Chiropractic Association

<ul>
  {%- for posture in collections.posture -%}
  <li>
    <a
      href="/downloads/{{ posture.data.link }}"
      target="blank"
      title="{{ posture.data.title }}"
      rel="noopener"
      >{{ posture.data.title }}</a
    >
  </li>
  {%- endfor -%}
</ul>
