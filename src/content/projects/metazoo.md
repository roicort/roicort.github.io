---
title: MetaZoo
description: A zoo of metaheuristic algorithms for optimization (Python library and learning resources).
pubDate: 2026-02-03
heroImage: ../../assets/blog-placeholder-about.png
updatedDate: 2026-02-03
---

# MetaZoo

A zoo of metaheuristic algorithms (please do not feed them) for optimization. MetaZoo is a Python library implementing a variety of metaheuristic algorithms and tooling for learning and experimentation. The project includes interactive resources (a Streamlit "PettingZoo" app and Jupyter Playgrounds) and a lightweight gym-like environment for algorithm evaluation.

> ⚠️ This library is in preview and is not ready for production use. Expect bugs and missing features.

## Highlights

- Collection of metaheuristic algorithms (genetic algorithms, differential evolution, particle swarm, and more)
- Modular architecture with a core library, algorithm modules, and application/service layer
- Learning resources: an interactive Streamlit app (PettingZoo) and Jupyter Playgrounds
- Lightweight Gym-style environments for running experiments and visualizations

## Modules (examples)

- Genetic Algorithms (GA)
- Differential Evolution (DE)
- Particle Swarm Optimization (PSO)
- Utilities: crossover, mutation, selection operators and evolutionary utilities
- Environments and application layer for experiments and visualization

## Quickstart

1. Clone the repository:

   `git clone https://github.com/roicort/MetaZoo.git`

2. Create a virtual environment and install dependencies (example using pip):

   `python -m venv .venv && source .venv/bin/activate`

   `pip install -r requirements.txt`

3. Run the interactive PettingZoo app (if available):

   `streamlit run pettingzoo/app.py`  (see repository for exact path and commands)

4. Explore the Playgrounds notebooks: open the `playgrounds/` notebooks with JupyterLab or VS Code and experiment with algorithms and parameters.

## Architecture

MetaZoo follows a modular design: core library (algorithms and operators), modules (bio/physics/human-inspired categories), a Gym-like environment for evaluation, and application/service wrappers for demos and apps. The README contains a mermaid diagram showing component relationships.

## Status & contributing

- Preview state — actively developed. Check the repository README for the current checklist and issues.
- Contributions, issues, and experiments are welcome.

**Links:** [Repository](https://github.com/roicort/MetaZoo) · License: see repo
