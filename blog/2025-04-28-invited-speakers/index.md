---
title: "Invited Speakers Seminar"
tags: [seminar, iclr2025, invited-speakers]
image: ./banner.png
---

We are delighted to invite every member to an exclusive seminar featuring research from authors with papers accepted at [**ICLR 2025**](https://iclr.cc/Conferences/2025). This is a unique opportunity to hear firsthand about their latest work and engage in insightful discussions.
<!-- truncate -->
## Date

**April 28, 2025 (Friday)**  
**Time:** 13:00 – 18:00  
**Venue:** COM2-04-02 (Executive Classroom)  
**Address:** [15 Computing Dr, Singapore 117418](https://maps.apple.com/?address=15%20Computing%20Dr,%20Singapore%20117418&auid=11986127657321991529&ll=1.294371,103.774045&lsp=9902&q=COM%202&t=r)

<a href="https://docs.google.com/forms/d/e/1FAIpQLSe4jpIXEIbHI5ULZ_S4ttW2FGfxqiAWuAvDgdw5i5HZ3CTYFw/viewform?usp=dialog" class="button button--primary button--sm" target="_blank" rel="noopener noreferrer">Registration Closed</a>



## Speakers

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem', margin: '1.5rem 0'}}>

<div style={{textAlign: 'center'}}>
  <img src={require('./divyam-madaan.jpg').default} style={{width: 120, height: 120, borderRadius: '50%', objectFit: 'cover'}} />
  <h3 style={{marginTop: '0.75rem', marginBottom: '0.25rem'}}>Divyam Madaan</h3>
  <p style={{margin: 0, color: 'var(--ifm-color-emphasis-600)'}}>PhD Student @ New York University</p>
</div>

<div style={{textAlign: 'center'}}>
  <img src={require('./zhikai-chen.jpeg').default} style={{width: 120, height: 120, borderRadius: '50%', objectFit: 'cover'}} />
  <h3 style={{marginTop: '0.75rem', marginBottom: '0.25rem'}}>Zhikai Chen</h3>
  <p style={{margin: 0, color: 'var(--ifm-color-emphasis-600)'}}>PhD Student @ Michigan State University</p>
</div>

<div style={{textAlign: 'center'}}>
  <img src={require('./zexi-li.jpg').default} style={{width: 120, height: 120, borderRadius: '50%', objectFit: 'cover'}} />
  <h3 style={{marginTop: '0.75rem', marginBottom: '0.25rem'}}>Zexi Li</h3>
  <p style={{margin: 0, color: 'var(--ifm-color-emphasis-600)'}}>PhD Student @ Zhejiang University</p>
</div>

<div style={{textAlign: 'center'}}>
  <img src={require('./hanrong-zhang.jpeg').default} style={{width: 120, height: 120, borderRadius: '50%', objectFit: 'cover'}} />
  <h3 style={{marginTop: '0.75rem', marginBottom: '0.25rem'}}>Hanrong Zhang</h3>
  <p style={{margin: 0, color: 'var(--ifm-color-emphasis-600)'}}>MS @ ZJU-UIUC</p>
</div>

<div style={{textAlign: 'center'}}>
  <img src={require('./jen-tse-huang.jpeg').default} style={{width: 120, height: 120, borderRadius: '50%', objectFit: 'cover'}} />
  <h3 style={{marginTop: '0.75rem', marginBottom: '0.25rem'}}>Jen-Tse Huang</h3>
  <p style={{margin: 0, color: 'var(--ifm-color-emphasis-600)'}}>Postdoc @ Johns Hopkins University</p>
</div>

</div>

---

<div className="compact-table">

## Program

| Time | Session |
|------|---------|
| 12:30 – 13:10 | Tea and Snacks |
| 13:10 – 13:20 | **Sharing by Xtra Group**<br/>Qian Wang |
| 13:20 – 13:50 | **[Multi-modal Learning: A Look Back and the Road Ahead](#multi-modal-learning-a-look-back-and-the-road-ahead)**<br/>Divyam Madaan |
| 13:50 – 14:30 | **[Graph Foundation Models: Addressing Feature and Task Heterogeneity](#graph-foundation-models-addressing-feature-and-task-heterogeneity)**<br/>Zhikai Chen *(Remote)* |
| 14:30 – 15:00 | **[Foundation Models under Model Parameter Perspective: Editing, Fusion, and Generation](#foundation-models-under-model-parameter-perspective-editing-fusion-and-generation)**<br/>Zexi Li |
| 15:00 – 15:30 | Break & Discussion |
| 15:30 – 16:00 | **[Agent Security Bench (ASB): Formalizing and Benchmarking Attacks and Defenses in LLM-based Agents](#agent-security-bench-asb-formalizing-and-benchmarking-attacks-and-defenses-in-llm-based-agents)**<br/>Hanrong Zhang |
| 16:00 – 16:30 | **[LLMs Do Not Have Human-Like Working Memories](#llms-do-not-have-human-like-working-memories)**<br/>Jen-Tse Huang |
| 16:30 – 17:00 | Break & Discussion |
| 17:00 – onward | Dinner Buffet |

</div>

---

## Talks

### Multi-modal Learning: A Look Back and the Road Ahead
**Divyam Madaan** · PhD Student @ NYU, advised by Sumit Chopra and Kyunghyun Cho

<img src={require('./divyam-madaan.jpg').default} style={{float: 'right', width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginLeft: '1rem', marginBottom: '0.5rem'}} />

**Abstract:** Supervised multi-modal learning involves mapping multiple modalities to a target label. While previous studies in this field have largely focused on building new benchmarks or model architectures, meaningful progress remains limited. We argue that conventional methods capture in isolation either the inter-modality dependencies (the relationships between different modalities and the label) or the intra-modality dependencies (the relationships within a single modality and the label). These conventional approaches that rely solely on either inter- or intra-modality dependencies may not be optimal in general. We view the multi-modal learning problem from the lens of generative models where we consider the target as a source of multiple modalities and the interaction between them. Towards that end, we propose an inter- & intra-modality modeling (I2M2) framework, which captures and integrates both the inter- and intra-modality dependencies, leading to more accurate predictions. We evaluate our approach using real-world healthcare and vision-and-language datasets with state-of-the-art models, demonstrating superior performance over traditional methods focusing only on one type of modality dependency. 

**Bio:** Divyam Madaan is a fourth-year Ph.D. student at New York University, advised by Sumit Chopra and Kyunghyun Cho. His research focuses on developing models that can effectively learn from multiple modalities and generalize across distribution shifts, with a special emphasis on healthcare applications. Prior to NYU, he earned his M.S. in Computer Science from KAIST, where he worked on model robustness against adversarial examples and continual adaptation to evolving data and architectures. His work has been published at leading venues including ICML, NeurIPS, CVPR and ICLR, where he has also been recognized with oral and spotlight presentation awards.

<div style={{clear: 'both'}} />

---

### Graph Foundation Models: Addressing Feature and Task Heterogeneity
**Zhikai Chen** · PhD Student @ Michigan State University, advised by Prof. Jiliang Tang *(Remote)*

<img src={require('./zhikai-chen.jpeg').default} style={{float: 'right', width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginLeft: '1rem', marginBottom: '0.5rem'}} />

**Abstract:** Foundation models have achieved remarkable success in recent years thanks to two key properties: **homogenization**, which unifies data and tasks under a single framework, and **emergence**, which ensures that new capabilities manifest as we scale up model size and training data. This ability to “dial up” performance simply by increasing scale is appealing for all modalities—especially graphs, where traditional approaches often demand task‑specific models trained from scratch. As a result, developing graph foundation models has become an important frontier for the entire field. In this talk, I will share my perspective on how to approach graph foundation modeling, centering on two fundamental challenges: **feature heterogeneity**, which arises from the diverse types and structures of graph data, and **task heterogeneity**, which requires a single model to excel at multiple graph tasks. While both are nontrivial, task heterogeneity remains particularly daunting. We argue that, before we can fully realize graph foundation models, we must first tackle these core theoretical problems in graph machine learning.

**Bio:** Zhikai Chen is a third-year PhD student at Michigan State University, mentored by Prof. Jiliang Tang. His research interest lies in graph machine learning, geometric deep learning, and especially the principles regarding building scalable and transferable deep learning models for structured data. His publications appear in venues like ICLR, NeurIPS, ICML, and LOG.

<div style={{clear: 'both'}} />

---

### Foundation Models under Model Parameter Perspective: Editing, Fusion, and Generation
**Zexi Li** · PhD Student @ Zhejiang University, Visiting Researcher @ University of Cambridge

<img src={require('./zexi-li.jpg').default} style={{float: 'right', width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginLeft: '1rem', marginBottom: '0.5rem'}} />

**Abstract:** Understanding the model parameters of foundation models helps to understand the “physics” in AI and devise more effective algorithms. This talk mainly focuses on the model parameters, the behind insights, and the algorithms that can be built upon these insights, which include the issues from three perspectives: 1) how to edit LLMs’ parametric memory in a lifelong manner? 2) how to better improve model parameter fusion for federated learning? 3) how to generate personalized model parameters by diffusion models?

**Bio:** Zexi Li is a visiting researcher at the University of Cambridge, and he is an upcoming PhD graduate of AI at Zhejiang University. He now focuses on LLMs and optimization, generalization, and personalization of deep learning models, especially under federated/collaborative/trustworthy setups, through the lens of parameter space and learning dynamics. He has published 9 (co)first-author top-tier machine learning papers, including ICML, ICCV, NeurIPS, Patterns (Cell Press), and IEEE Trans. on Mobile Computing.

<div style={{clear: 'both'}} />

---

### Agent Security Bench (ASB): Formalizing and Benchmarking Attacks and Defenses in LLM-based Agents
**Hanrong Zhang** · MS Computer Engineering @ ZJU-UIUC

<img src={require('./hanrong-zhang.jpeg').default} style={{float: 'right', width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginLeft: '1rem', marginBottom: '0.5rem'}} />

**Abstract:** Although LLM-based agents, powered by Large Language Models (LLMs), can use external tools and memory mechanisms to solve complex real-world tasks, they may also introduce critical security vulnerabilities. However, the existing literature does not comprehensively evaluate attacks and defenses against LLM-based agents. To address this, we introduce Agent Security Bench (ASB), a comprehensive framework designed to formalize, benchmark, and evaluate the attacks and defenses of LLM-based agents, including 10 scenarios (e.g., e-commerce, autonomous driving, finance), 10 agents targeting the scenarios, over 400 tools, 27 different types of attack/defense methods, and 7 evaluation metrics. Based on ASB, we benchmark 10 prompt injection attacks, a memory poisoning attack, a novel Plan-of-Thought backdoor attack, 4 mixed attacks, and 11 corresponding defenses across 13 LLM backbones. Our benchmark results reveal critical vulnerabilities in different stages of agent operation, including system prompt, user prompt handling, tool usage, and memory retrieval, with the highest average attack success rate of 84.30%, but limited effectiveness shown in current defenses, unveiling important works to be done in terms of agent security for the community. We also introduce a new metric to evaluate the agents’ capability to balance utility and security.

**Bio:** Hanrong Zhang is a Master student majoring in Computer Engineering at Zhejiang University. His research interests lie in machine learning (multimodal large language models, LLM-based agents, self-supervised learning) and trustworthy ML (MLLM/agent safety and security, responsible AIGC).

<div style={{clear: 'both'}} />

---

### LLMs Do Not Have Human-Like Working Memories
**Jen-Tse Huang** · Postdoc @ Johns Hopkins University (CLSP), with Prof. Mark Dredze

<img src={require('./jen-tse-huang.jpeg').default} style={{float: 'right', width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginLeft: '1rem', marginBottom: '0.5rem'}} />

**Abstract:** Human working memory is an active cognitive system that enables not only the temporary storage of information but also its processing and utilization. Without working memory, individuals may produce unreal conversations, struggle with tasks requiring mental reasoning, and exhibit self-contradiction. In this presentation, we demonstrate that Large Language Models (LLMs) lack this human-like cognitive ability, posing a significant challenge to achieving artificial general intelligence. We validate this claim through three experiments: (1) Number Guessing Game, (2) Yes or No Game, and (3) Math Magic. Experimental results on several model families indicate that current LLMs fail to exhibit human-like cognitive behaviors in these scenarios. By highlighting this limitation, we aim to encourage further research in developing LLMs with improved working memory capabilities.

**Bio:** Jen-Tse Huang is a Postdoc in the Center for Language and Speech Processing (CLSP) at Johns Hopkins University, working with Prof. Mark Dredze. His research interest lies in evaluating single LLMs as individuals and multiple LLMs as a collective (multi-agent systems) through social science.

<div style={{clear: 'both'}} />

---

## Organizers

Event organized by **Qian Wang** (main organizer), **Zhaomin Wu**, **Bingqiao Luo**, and **Junyi Hou** from Xtra Computing Group.
