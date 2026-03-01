---
title: "The Ridge Computing System Workshop"
tags: [workshop, systems, heterogeneous-computing, llm, fpga]
image: ./banner.png
---

![The Ridge Computing System Workshop](./banner.png)

The Ridge Computing System Workshop — sponsored by [**AMD HACC @ NUS**](https://www.amd-haccs.io/nus.html) and the [**NUS AI Institute**](https://ai.nus.edu.sg/) — convened researchers, engineers, and industry leaders to chart the future of heterogeneous, high-performance systems for big-data analytics and AI.

Through invited keynotes and industry talks, participants explored real-world workloads spanning CPUs, GPUs, and adaptive accelerators; software-hardware co-design for performance-per-watt; and emerging directions in green computing.
<!-- truncate -->
## Date

**August 8, 2025 (Friday)**  
**Time:** 09:00 – 17:10  
**Venue:** I4-01-03 Seminar Room  
**Address:** [3 Research Link, #01-03 i4.0 Building, Singapore 117602](https://maps.apple.com/place?place-id=ID6134A88C71A66EB&address=3+Research+Link%2C+Singapore+117602&coordinate=1.294609%2C103.7758172&name=Innovation+4.0&_provider=9902)

<a href="https://forms.gle/5QGCgcuK2P9dcGE87" class="button button--primary button--sm" target="_blank" rel="noopener noreferrer">Registration Closed</a>

<!-- ![Venue](./venue.png) -->

## Timetable

<div className="compact-table">

### Morning Session (09:00 – 12:00)

| Time | Talk & Speaker |
|------|----------------|
| 09:00 – 09:10 | **Opening Remarks**<br/>*Prof. Bingsheng He, NUS* |
| 09:10 – 09:40 | **[Data Processing on Heterogeneous Computing for Higher IT Efficiency](#data-processing-on-heterogeneous-computing-for-higher-it-efficiency)**<br/>*Prof. Gustavo Alonso, ETH Zurich* |
| 09:40 – 10:10 | **[Exploiting Data Sparsity to Improve Communication Efficiency](#exploiting-data-sparsity-to-improve-communication-efficiency)**<br/>*Dr. Haris Javaid, AMD* |
| 10:10 – 10:30 | **[RISC-V for Heterogeneous Computing: An open-source choice for unified ISA across CPU, GPU, and DSA](#risc-v-for-heterogeneous-computing-an-open-source-choice-for-unified-isa-across-cpu-gpu-and-dsa)**<br/>*Dr. Cui Jin, StarFive* |
| 10:30 – 11:00 | *🍵 Tea Break* |
| 11:00 – 11:30 | **[SAGE: To Simplify LLM-Augmented Reasoning on Large Clusters](#sage-to-simplify-llm-augmented-reasoning-on-large-clusters)**<br/>*Prof. Shuhao Zhang, HUST* |
| 11:30 – 12:00 | **[Model Compression for Efficient AI: From Classical Methods to Quantum Opportunities](#model-compression-for-efficient-ai-from-classical-methods-to-quantum-opportunities)**<br/>*Dr. Tao Luo, A\*STAR* |
| 12:00 – 13:30 | *Lunch* |

### Afternoon Session (13:30 – 17:10)

| Time | Talk & Speaker |
|------|----------------|
| 13:30 – 14:00 | **[Is Now the Time to Deploy Spatial Architectures in the Datacenter?](#is-now-the-time-to-deploy-spatial-architectures-in-the-datacenter)**<br/>*Assoc. Prof. Trevor E. Carlson, NUS* |
| 14:00 – 14:30 | **[BG3: A Cost Effective and I/O Efficient Graph Database in ByteDance](#bg3-a-cost-effective-and-io-efficient-graph-database-in-bytedance)**<br/>*Dr. Cheng Chen, ByteDance* |
| 14:30 – 15:00 | **[Smart Network-enhanced LLM Systems](#smart-network-enhanced-llm-systems)**<br/>*Prof. Zeke Wang, ZJU* |
| 15:00 – 15:30 | *🍵 Tea Break* |
| 15:30 – 16:00 | **[AxCore: A Quantization-Aware Approximate GEMM Unit For LLM Inference](#axcore-a-quantization-aware-approximate-gemm-unit-for-llm-inference)**<br/>*Asst. Prof. Xinyu Chen, HKUST-GZ* |
| 16:00 – 16:30 | **[Efficient LLM Full Fine-Tuning and Serving on Single GPU](#efficient-llm-full-fine-tuning-and-serving-on-single-gpu)**<br/>*Assoc. Prof. Zeyi Wen, HKUST-GZ* |
| 16:30 – 17:00 | **[Melding Serverless and Conventional Microservice Control Planes for High Performance and Efficiency](#melding-serverless-and-conventional-microservice-control-planes-for-high-performance-and-efficiency)**<br/>*Asst. Prof. Dmitrii Ustiugov, NTU* |
| 17:00 – 17:30 | **[High-Performance Graph Random Walk on FPGAs](#high-performance-graph-random-walk-on-fpgas)**<br/>*Mr. Hongshi Tan, NUS* |
| 17:30 – 17:40 | **Closing Remarks**<br/>*Prof. Bingsheng He, NUS* |

</div>

---

## Talks & Speakers

### Data Processing on Heterogeneous Computing for Higher IT Efficiency

<img src={require('./gustavo-alonso.jpeg').default} style={{float: 'right', width: 110, height: 147, objectFit: 'cover', marginLeft: '1.25rem', marginBottom: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}} />

**Prof. Gustavo Alonso** · ETH Zurich, Department of Computer Science

**Abstract:** Today, the efficiency of computer systems has become a major concern due to the large amounts of data involved, the tight performance constraints, and the high demand for all kinds of digital services: from conventional web based one to complex AI driven applications. In this talk I will argue that the general purpose architectures used until now are inherently inefficient and have led to deployments that are both costly and difficult to manage. This is easily visible in the cloud where there is a clear trend towards specialization and scale up architectures. One key aspect of these new systems is the heterogeneity that arises from specialization. In the talk I will discuss how to take advantage of heterogeneity to improve the energy efficiency and the overall performance of large scale AI and data processing systems by combining the best characteristics of every hardware component. To provide an example, I will briefly introduce Maximus and Eiger, our latest efforts to exploit heterogeneity in modern hardware for large scale data analytics.

**Bio:** [**Gustavo Alonso**](https://people.inf.ethz.ch/alonso/) is a professor in the Department of Computer Science of ETH Zurich where he is a member of the [Systems Group](https://systems.ethz.ch/) and the head of the Institute of Computing Platforms. He leads the [AMD HACC (Heterogeneous Accelerated Compute Cluster) deployment at ETH](https://github.com/fpgasystems/hacc), with several hundred users worldwide, a research facility that supports exploring data center hardware-software co-design. His research interests include data management, cloud computing architecture, and building systems on modern hardware. Gustavo holds degrees in telecommunication from the Madrid Technical University and a MS and PhD in Computer Science from UC Santa Barbara. Previous to joining ETH, he was a research scientist at IBM Almaden in San Jose, California. Gustavo has received 4 Test-of-Time Awards for his research in databases, software runtimes, middleware, and mobile computing. He is an ACM Fellow, an IEEE Fellow, a Distinguished Alumnus of the Department of Computer Science of UC Santa Barbara, and has received the Lifetime Achievements Award from the European Chapter of ACM SIGOPS (EuroSys).

<div style={{clear: 'both'}} />

---

### Exploiting Data Sparsity to Improve Communication Efficiency

<img src={require('./haris-javaid.jpeg').default} style={{float: 'right', width: 110, height: 147, objectFit: 'cover', marginLeft: '1.25rem', marginBottom: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}} />

**Dr. Haris Javaid** · Director of Research and Advanced Development, AMD Singapore

**Abstract:** The rapid growth in the size of ML models has necessitated the use of distributed training and inference to achieve better performance and scalability. These systems require not only efficiently distributing computation but also minimizing communication overheads. This talk presents our ongoing research on improving communication efficiency in distributed ML systems. I will share techniques that leverage the inherent sparsity found in ML models to significantly reduce communication time, and present initial set of results and findings.

**Bio:** [**Haris Javaid**](https://scholar.google.com/citations?user=ld4MAbgAAAAJ&hl=en) is the Director of Research and Advanced Development at AMD Singapore, where he leads a team of Ph.D. researchers and interns to explore various aspects of AI and Networked Systems. He is also responsible for building research collaborations with local universities, such as NUS and NTU. Before joining AMD, he worked at Xilinx Singapore and Google USA. He holds a Ph.D. in Computer Science and Engineering from UNSW Australia.

<div style={{clear: 'both'}} />

---

### RISC-V for Heterogeneous Computing: An open-source choice for unified ISA across CPU, GPU, and DSA

<img src={require('./cui-jin.jpg').default} style={{float: 'right', width: 110, height: 147, objectFit: 'cover', marginLeft: '1.25rem', marginBottom: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}} />

**Dr. Cui Jin** · Chief Architect, StarFive International

**Abstract:** With 15 years of development, RISC-V has steadily gain market share in MCU and general-purpose CPU. However, it bears the potential of being the unified ISA that orchestrates heterogeneous computing elements, including CPU, GPU, NPU, etc. Currently, RISC-V already provides diversity of extensions supporting various computing tasks including SIMD, vector and matrix which benefits the AI/ML scenario. At the meanwhile, it is very easy to develop the customized instruction set to facilitate the user-defined acceleration. The open-source community support and the customizable feature greatly reduces the development cost of the accelerator IP as well as the supporting software and middleware which leads to the bloom of the ECO system of heterogeneous computing. In this talk, we present the benefits, technical trend and recent updates from industry to apply RISC-V in different and versatile of computing systems.

**Bio:** **[Cui Jin](https://www.linkedin.com/in/jin-cui-64322689/)** is the chief architect in StarFive International Pte. Ltd. He currently is leading the high-performance CPU architecture exploration and IP product development in StarFive. He has 13 years of industry experience of both software and hardware domain in Intel and Huawei, from embedded systems to high performance computing platforms. His interests include embedded system OS and firmware, EDA tools, FPGA acceleration and prototyping, CPU architecture modelling and simulations, and heterogeneous high-performance computing.

<div style={{clear: 'both'}} />

---

### SAGE: To Simplify LLM-Augmented Reasoning on Large Clusters

<img src={require('./shuhao-zhang.jpg').default} style={{float: 'right', width: 110, height: 147, objectFit: 'cover', marginLeft: '1.25rem', marginBottom: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}} />

**Prof. Shuhao Zhang** · School of Computer Science and Technology, HUST

**Abstract:** As large language models become increasingly integrated into real-world applications, new demands are emerging for systems that support complex reasoning processes—such as multi-step dialogue, knowledge retrieval, and agent collaboration—especially in real-time scenarios like AIOps, customer service, and robotics.
These workloads bring new challenges in responsiveness, state management, and resource efficiency. In this talk, we introduce **SAGE**, a dataflow-native inference framework designed to support always-on, high-performance, and evolvable generative AI applications. SAGE integrates **dataflow orchestration**, **programmable memory**, **resource-aware scheduling**, and **full-stack observability** into a unified execution engine. Using an AIOps intelligent diagnosis assistant as a motivating example, we explain why such scenarios are better served by globally optimized dataflow systems rather than traditional message-driven multi-agent frameworks. We will outline the core design principles of SAGE, highlight representative use cases, and briefly discuss ongoing research directions.

**Bio:** [**Shuhao Zhang**](https://shuhaozhangtony.github.io/) is a professor in the School of Computer Science and Technology at Huazhong University of Science and Technology. His research lies at the intersection of data systems and AI, focusing on high-performance stream processing, large-scale inference systems, and memory-efficient computation. He previously worked with the database systems group at TU Berlin and received his Ph.D. from the National University of Singapore. He currently leads the IntelliStream research group, which is building next-generation infrastructure for online, intelligent, and scalable data-centric applications—including the recently developed SAGE framework for generative inference workflows.


<div style={{clear: 'both'}} />

---

### Model Compression for Efficient AI: From Classical Methods to Quantum Opportunities

<img src={require('./tao-luo.jpeg').default} style={{float: 'right', width: 110, height: 147, objectFit: 'cover', marginLeft: '1.25rem', marginBottom: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}} />

**Dr. Tao Luo** · Senior Research Scientist & Group Lead, IHPC, A\*STAR

**Abstract:** Model compression is key to deploying efficient AI, especially on resource-constrained hardware. While classical methods like pruning and quantization are effective, they often require expensive search and tuning. This talk presents a trajectory from energy-aware compression using reinforcement learning, to on-device quantized training, and finally to emerging quantum approaches that frame compression as an optimization problem solvable by quantum annealing. We highlight the efficiency gains, limitations of classical methods, and the potential of quantum computing to accelerate model compression in the future.

**Bio:** [**Tao Luo**](https://research.a-star.edu.sg/researcher/tao-luo/) received his bachelor's degree from the Harbin Institute of Technology, Harbin, China, in 2010, his master's degree from the University of Electronic Science and Technology of China, Chengdu, China, in 2013, and his Ph.D. degree from the School of Computer Science and Engineering, Nanyang Technological University, Singapore, in 2018. He is currently a senior research scientist and group lead with the [Institute of High Performance Computing (IHPC)](https://www.a-star.edu.sg/ihpc), Agency for Science, Technology and Research, Singapore (A*STAR), Singapore. His current research interests include high-performance computing, green AI, quantum computing, hardware–software co-exploration, efficient AI and its application in biomedicine and healthcare.
<div style={{clear: 'both'}} />

---

### Is Now the Time to Deploy Spatial Architectures in the Datacenter?

<img src={require('./trevor-carlson.png').default} style={{float: 'right', width: 110, height: 147, objectFit: 'cover', marginLeft: '1.25rem', marginBottom: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}} />

**Assoc. Prof. Trevor E. Carlson** · Department of Computer Science, NUS

**Abstract:** Spatial accelerators, like FPGAs, are known for their massive parallelism and expressibility, and, due to their reconfigurable nature, can be programmed quickly. They are also quite energy efficient, and for a number of applications, have demonstrated high performance and low latency. Unfortunately, across the datacenter landscape, there are just a few well-known examples of deployed FPGAs. Microsoft, with their Catapult research, and continuing with their research to support AI and smart networks, are one of the few hyper scalars that have publicly deployed FPGAs broadly. In addition, Amazon, and more recently, Microsoft and others, have deployed FPGAs as compute that anyone can rent for an hourly fee. Users can now deploy these accelerators quickly, and accessibility has never been better. But, given massive deployments of GPUs, it is unknown what the future will hold for FPGAs in the datacenter. Microsoft, for example, has now developed a new AI accelerator ASIC — but how does this compare to their BrainWave FPGA solution and why are they moving to ASICs now? In this talk, I will provide a background into our recent spatial accelerator research, and aim to present the FPGA, as well as other spatial accelerators as a strong contender as a path forward. I posit that with the right interfaces and programming models, spatial accelerators might move closer to becoming a more general-purpose acceleration solution.

**Bio:** [**Trevor E. Carlson**](https://www.comp.nus.edu.sg/~tcarlson/) is an Associate Professor at the department of Computer Science at the National University of Singapore. Prof. Carlson's research interests include several areas of computer architecture including efficient microarchitectures and accelerators, performance modeling and fast and scalable simulation methodologies and secure processor designs. He co-designed the Sniper Multi-core Simulator which has been used by hundreds of researchers to evaluate the performance and power-efficiency of next generation systems and continues to be used to explore next-generation processor design. His processor and security works have been selected to appear in top computer architecture, security and design automation conferences (such as ASPLOS, DAC, ICCAD, ISCA, HPCA, MICRO, MICRO Top Picks, and USENIX Security). He has been awarded Amazon, Intel, Microsoft and VMWare Research Awards, and his work has received seven Best Paper Awards or Best Paper Nominations in conferences such as the International Symposium on Microarchitecture (MICRO), the Design Automation Conference (DAC), and the International Symposium on Performance Analysis of Systems and Software (ISPASS).

<div style={{clear: 'both'}} />

---

### BG3: A Cost Effective and I/O Efficient Graph Database in ByteDance

<img src={require('./cheng-chen.jpg').default} style={{float: 'right', width: 110, height: 147, objectFit: 'cover', marginLeft: '1.25rem', marginBottom: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}} />

**Dr. Cheng Chen** · Tech Lead, ByteGraph Team, ByteDance

**Abstract:** ByteDance's applications, such as Douyin and Toutiao, generate massive graph data daily. To manage this, we developed ByteGraph, a distributed graph database optimized for large-scale, high-performance workloads. As data volume and complexity grew, we introduced BG3 (ByteGraph 3.0)—a cost-effective and scalable system featuring: (1) a query-efficient storage engine using BW-tree indices and cloud storage, (2) workload-aware space reclamation for better storage utilization, and (3) a lightweight synchronization mechanism for real-time consistency. BG3 significantly reduces operational costs while supporting fast, large-scale graph processing across ByteDance's global platforms.

**Bio:** [**Cheng Chen**](https://sites.google.com/site/chencheng1560/) is a Tech Lead from the ByteGraph team at ByteDance. He received his Ph.D. from the National University of Singapore. His research interests span graph neural networks (GNN), AI infrastructure, graph computing, graph databases, and storage systems. He has published around 40 papers in top-tier conferences and journals, accumulating over 1,400 citations. His work has been recognized with several honors, including the Best Paper Runner-up Award at EuroSys 2024 and the Best Industry Paper Runner-up Award at VLDB 2023. He actively contributes to the academic community and has served as a program committee member for both research track (ICDE 2025) and industrial track (VLDB 2025, SIGMOD 2024, ICDE 2025/2024).

<div style={{clear: 'both'}} />

---

### Smart Network-enhanced LLM Systems

<img src={require('./zeke-wang.jpg').default} style={{float: 'right', width: 110, height: 147, objectFit: 'cover', marginLeft: '1.25rem', marginBottom: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}} />

**Dr. Zeke Wang** · ZJU100 Young Professor, Computer Science, Zhejiang University

**Abstract:** Modern LLM systems requires a huge amount of computing power to analyze on a massive amount of data. Therefore, heterogeneous LLM systems appear as an attempt to close the gap between compute power and data. Even though these heterogeneous systems achieve better performance than CPU-only homogeneous system due to the dying of Moore's law, we still identify that simple heterogeneous systems cannot harvest the potential of each heterogeneous device. For example, GPU-only LLMs suffer from severe IO issues. To this end, we argue for hyper-heterogeneous LLM systems. The key idea is to offload communiation and storage from GPUs to the nework, e.g., SmartNIC and SmartSwitch, while only keeping computation in GPUs. As such, the GPU utilization is maximized.

**Bio:** [**Zeke Wang**](https://wangzeke.github.io/) is now a ZJU100 young professor at the Computer Science, Zhejiang University, China. Before that, He received his Ph.D. degree in Instrument Science & Technology at Zhejiang University in 2011, and was a postdoc in NTU & NUS (2013-2017) and ETH Zurich (2017-2019). Its main research interest lies in building hyper-heterogeneous computing platform for LLM systems, which are enhanced with in-network computing.

<div style={{clear: 'both'}} />

---

### AxCore: A Quantization-Aware Approximate GEMM Unit For LLM Inference

<img src={require('./xinyu-chen.jpg').default} style={{float: 'right', width: 110, height: 147, objectFit: 'cover', marginLeft: '1.25rem', marginBottom: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}} />

**Asst. Prof. Xinyu Chen** · Microelectronics Thrust, HKUST (Guangzhou)

**Abstract:** Large Language Models (LLMs) have become foundational to modern natural language processing, yet their immense computational and memory demands pose major obstacles for efficient inference. Transformer-based LLMs rely heavily on floating-point general matrix-matrix multiplication (FP-GEMM), which dominates both compute and bandwidth, making deployment on resource-constrained hardware particularly challenging. In this paper, we introduce AxCore, a quantization-aware, approximate GEMM unit that combines weight-only quantization with floating-point multiplication approximation (FPMA) to deliver highly efficient and accurate LLM inference. Unlike traditional GEMM units, AxCore eliminates multipliers entirely, replacing them with low-bit integer additions in a novel systolic array. AxCore features several key innovations: (1) a mixed-precision FPMA-based processing element that supports direct computation on compressed weights and high-precision activations; (2) a lightweight co-designed accuracy preservation strategy, including subnormal number handling, error compensation and format-aware quantization; and (3) a set of systolic array optimizations, including shared correction and normalization logic, as well as FPMA-based dequantization, to enhance hardware efficiency. Evaluations on open-source LLMs show that AxCore achieves up to 6.3×-12.5× higher compute density than conventional FP GEMM units. Compared to state-of-the-art INT4-based accelerators, FIGLUT and FIGNA, AxCore improves compute density by 53% and 70%, respectively, while also delivering lower perplexity.

**Bio:** [**Xinyu Chen**](https://soldierchen.github.io/) is an Assistant Professor of the Microelectronics Thrust at the Hong Kong University of Science and Technology (Guangzhou). Before joining HKUST(GZ), he held the position of Principal Engineer at Hisilicon, where he worked on hardware accelerator design for the next-generation DPU. He received his Ph.D. degree in Computer Science from National University of Singapore in 2022. His research aims to build sustainable computing solutions by harnessing the potential of hardware acceleration and system optimization. His research results are published in top venues such as MICRO, FPGA, DAC, and TRETS.

<div style={{clear: 'both'}} />

---

### Efficient LLM Full Fine-Tuning and Serving on Single GPU

<img src={require('./zeyi-wen.jpeg').default} style={{float: 'right', width: 110, height: 147, objectFit: 'cover', marginLeft: '1.25rem', marginBottom: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}} />

**Assoc. Prof. Zeyi Wen** · HKUST (Guangzhou)

**Abstract:** Fine-tuning LLMs has become a key technology for domain-specific adaptation, but its high memory consumption often exceeds the capacity of most GPUs. To address this challenge, we propose SlideFormer, an efficient system specifically designed for single-GPU environments. The system incorporates two core innovations: Layer Sliding Mechanism and Asynchronous Offloading Technology. Our system supports dual offloading to both CPU memory and NVMe storage, enabling fine-tuning of the latest 123B+ parameter models on a single RTX 4090 GPU. When offloading to CPU, it maintains >95% peak performance on both NVIDIA and AMD GPUs. Experiments show that compared to baseline methods, SlideFormer achieves a 1.40–6.27× throughput improvement while reducing CPU and GPU memory usage by ~50%. In this talk, we will also report some recent results on serving large LLMs on a single RTX 4090 GPU.

**Bio:** [**Zeyi Wen**](https://zeyiwen.github.io/) is an Assistant Professor at the HKUST (Guangzhou). Before joining HKUST(GZ), he served as a Lecturer at the University of Western Australia (QS World Rank #77 in 2025) and was postdoctoral research at NUS and the University of Melbourne where he also earned his Ph.D. Dr. Wen is a recipient of the IEEE TPDS 2019 Best Paper Award and serves as an AE for Journal of Machine Learning Research (JMLR) on open-source software section. His research focuses on LLM inference & training acceleration, high-performance machine learning systems, and automated machine learning.

<div style={{clear: 'both'}} />

---

### Melding Serverless and Conventional Microservice Control Planes for High Performance and Efficiency

<img src={require('./dmitrii-ustiugov.jpeg').default} style={{float: 'right', width: 110, height: 147, objectFit: 'cover', marginLeft: '1.25rem', marginBottom: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}} />

**Asst. Prof. Dmitrii Ustiugov** · NTU Singapore

**Abstract:** Conventional cloud cluster managers like Kubernetes are often too slow and inefficient for the volatile demands of serverless cloud applications. This creates a difficult choice: accept poor performance and high cost, or move to specialized, high-performance systems and lose compatibility with the rich feature set available in conventional cluster managers, such as placement optimization, security, and network traffic management. This talk presents PulseNet, a system that eliminates this trade-off by melding a conventional control plane with an expedited, parallel track. PulseNet intelligently distinguishes between predictable, sustainable traffic—handled by standard, full-featured, regular function instances for maximum compatibility—and sudden traffic bursts that trigger function cold starts. These bursts are routed to a fast path that uses node-local agents to rapidly spawn lightweight, emergency instances, bypassing the central manager's overhead. We prototype PulseNet in vHive, showing how this dual-track approach allows to achieve 1.5-3.5x faster performance and reduce the operational cost by up to 70%, compared to the state-of-the-art systems — all while remaining fully integrated with the conventional Kubernetes manager for over 98% of invocation traffic.

**Bio:** [**Dmitrii Ustiugov**](https://ustiugov.github.io/) is an Assistant Professor at NTU Singapore. Previously, Dmitrii was a Postdoctoral Researcher at ETH Zurich after receiving a Ph.D. from the University of Edinburgh. Dmitrii's research interests lie at the intersection of Computer Systems and Architecture, with a current focus on support for serverless cloud and large-scale GenAI serving systems. His works are published in top-tier computer systems and architecture venues, such as OSDI, ASPLOS, and ISCA. Dmitrii's work was recognized by MIT TechReview Asia-Pacific 2024 Top 35 (Visionary) and ASPLOS'21 Distinguished Artifact.

<div style={{clear: 'both'}} />

---

### High-Performance Graph Random Walk on FPGAs

<img src={require('./hongshi-tan.jpg').default} style={{float: 'right', width: 110, height: 147, objectFit: 'cover', marginLeft: '1.25rem', marginBottom: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}} />

**Mr. Hongshi Tan** · PhD Student, NUS (supervised by Prof. Bingsheng He and Prof. Weng-Fai Wong)

**Abstract:** In this talk, Hongshi will present recent advances in hardware acceleration for graph random walk sampling. He will begin with LightRW, a novel FPGA-based accelerator specifically designed for dynamic random walks, featuring a hardware-efficient parallel reservoir sampling algorithm. He will then introduce RidgeWalker, a general-purpose, perfectly pipelined accelerator architecture that supports a wide range of graph random walk algorithms. By leveraging Markov-based task decomposition and asynchronous execution, RidgeWalker eliminates pipeline bubbles and achieves near-optimal performance on FPGAs equipped with HBM memory, making it well-suited for various random walk-based sampling workloads.

**Bio:** [**Hongshi Tan**](https://hongshitan.github.io/) is a fourth-year Ph.D. student at the School of Computing, National University of Singapore, under the supervision of Prof. Bingsheng He and Prof. Weng-Fai Wong. His research focuses on high-performance computing architecture, with a particular emphasis on FPGA-based heterogeneous systems and interconnect techniques for large scale graph processing and graph representation learning. His work has been published in top-tier venues in supercomputing and database systems, including SIGMOD, ICS, MICRO, FPGA, and DAC.

<div style={{clear: 'both'}} />

---

## Organizers & Contact

**Yao Chen** · Research Assistant Professor, NUS  
Address: 15 Computing Drive, Com2-02-02, Singapore, 117418  
Phone: +65 8376 7292  
Email: [yaochen@nus.edu.sg](mailto:yaochen@nus.edu.sg), [yaochen@comp.nus.edu.sg](mailto:yaochen@comp.nus.edu.sg)

**Hongshi Tan** · PhD Student, NUS  
Email: [hongshi@u.nus.edu](mailto:hongshi@u.nus.edu)

**Junyi Hou** · PhD Student, NUS  
Email: [e0945797@u.nus.edu](mailto:e0945797@u.nus.edu)