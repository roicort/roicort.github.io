---
title: Django Liberty
description: A starter template for Django projects focused on a decoupled architecture with a React frontend.
pubDate: 2026-01-10
heroImage: ../../assets/blog-placeholder-about.png
updatedDate: 2026-02-03
---

# Django Liberty 🗽

Django Liberty is a cookiecutter template for decoupled Django projects. It provides a full-stack starting point with a Django backend and an optional **Next.js** or **Nuxt** frontend. The template is ready to run with **Docker Compose** and comes preconfigured with **OIDC** (OpenID Connect) authentication, the Unfold admin theme, and a custom user model.

![Project screenshot](https://github.com/user-attachments/assets/2ff0d3ff-dfdf-4dab-ad54-c9e6131e9788)

## TL;DR

Recommended:

`uvx cookiecutter && cookiecutter https://github.com/roicort/django-liberty.git`

Or:

`pip install cookiecutter && cookiecutter https://github.com/roicort/django-liberty.git`

## Features

- Cookiecutter scaffolding with post-generation hooks (choose Frontend: Next or Nuxt)
- Docker Compose for local development (frontend + backend)
- Django backend with REST API (DRF) and OpenAPI (drf-spectacular)
- Preconfigured OIDC authentication (Django as provider) and Auth.js on frontend
- Unfold Admin theme and a custom user model (email as username)
- Frontend choice: Next (working) / Nuxt (WIP)

## Quickstart

1. Create the project:

   `cookiecutter https://github.com/roicort/django-liberty.git`

2. Enter the generated folder and start services:

   `cd <your_project>`

   `docker compose up --build -d`

3. Useful commands inside the project:

- Add a backend dependency:

  `docker compose exec backend uv add djangorestframework`

- Run backend shell / init tasks (if needed):

  `docker compose exec backend bash`

  `bash init.sh` (legacy step – newer images handle init automatically)

- Create a superuser (can also be generated via envs):

  `docker compose exec backend uv run manage.py createsuperuser`

Access the frontend at `http://localhost:3000` and Django admin at `http://localhost:8000/admin/`.

OpenAPI docs are available at `http://localhost:8000/api/schema/swagger-ui/` and ReDoc at `http://localhost:8000/api/schema/redoc/`.

## Hosts / OIDC notes

To test OIDC flows locally you may need separate hosts for frontend and backend. Add an entry to `/etc/hosts` such as:

```
127.0.0.1 backend
```

This lets the frontend redirect to `http://backend:8000/oidc/...` during authentication.

## Backend dependencies

Django Liberty uses UV for backend dependency management. Common packages included or used with the template:

- `djangorestframework` (REST APIs)
- `django-oidc-provider` (OIDC provider)
- `drf-spectacular` (OpenAPI schema generator)
- `django-unfold` (Unfold admin theme)

## Authentication & accounts

Authentication is based on **django-oidc-provider** with frontend clients using **auth.js**. Cookiecutter generates the necessary secrets and env variables. Users can be created either via `createsuperuser` or through the frontend registration form (`/account/signup/`).

## Current status

- [x] Cookiecutter template
  - [x] Docker Compose
- [x] Post-generate hooks
  - [x] Frontend choice
- [x] Django backend
  - [x] Dockerfile
  - [x] Custom user model (email as username)
  - [x] OIDC provider config
  - [x] Unfold Admin
  - [x] OpenAPI
  - [x] Claims
  - [ ] OIDC templates
- [ ] Next frontend
  - [x] Dockerfile
  - [x] Auth.js
- [ ] Nuxt frontend
  - [ ] Dockerfile
  - [ ] Auth.js

## Contributing

Contributions, issues and feature requests are welcome — see the repository for contribution guidelines and issue tracking.

**Support:** If the project was helpful, give it a ⭐️ on GitHub.

**Links:** [Repository](https://github.com/roicort/django-liberty) · License: MIT
