# Stefan Portfolio — Full-Stack Portfolio Platform

A modern full-stack portfolio platform built with **React, TypeScript, Vite, FastAPI, and Firebase**. The goal of this project is to create a professional engineering and software portfolio that showcases projects, technical experience, CAD/CAM work, IoT systems, and downloadable documents through a scalable architecture.

## Project vision

This project is being developed as a production-oriented portfolio application rather than a simple static website. The final platform will include:

* A modern responsive frontend built with **React + TypeScript**
* A backend API built with **FastAPI**
* **Firebase Firestore** for structured project and experience data
* **Firebase Storage** for images, PDFs, CAD renders, and other documents
* A future **admin dashboard** for managing portfolio content dynamically
* REST API integration between frontend and backend
* Routing, animations, and reusable component architecture

## Current architecture

```
PROYECTO FULLSTACK/
├── Proyecto-Front/            # React + Vite frontend
├── Proyecto-FastAPI-Backend/  # FastAPI backend
├── .gitignore
└── README.md
```

## Technologies

### Frontend

* React
* TypeScript
* Vite
* React Router
* Framer Motion

### Backend

* FastAPI
* Uvicorn
* Firebase Admin SDK
* Python Dotenv

### Database & Storage

* Firebase Firestore
* Firebase Storage

## Progress completed

### Frontend

* Project initialized with **Vite + React + TypeScript**
* Professional **single-page portfolio layout**
* Responsive **Hero section**
* About section
* Projects section
* Experience section
* Skills section
* Contact section
* Fixed navigation bar
* Smooth scrolling
* Modern UI styling
* Component-based architecture
* Project data separated into reusable modules
* **React Router** integrated
* Dynamic project routing (`/project/:id`)
* **Framer Motion** animations implemented

### Backend

* FastAPI project initialized
* Virtual environment configured
* Backend folder structure organized
* API server running successfully
* Automatic FastAPI documentation available through `/docs`
* Firebase project created
* Firestore and Storage configured
* Firebase service account credentials prepared
* Environment configuration (`.env`) established

### Version control

* Unified Git repository created
* Root-level `.gitignore` configured
* Sensitive Firebase credentials excluded from version control

## Roadmap

### Next steps

* Connect FastAPI to Firebase Firestore
* Implement `GET /api/projects`
* Replace frontend mock data with real API data
* Integrate Firebase Storage for project images and PDF documents
* Build project detail pages
* Create an authenticated admin dashboard
* Add search and document indexing
* Deploy frontend and backend

## Running the project

### Frontend

```bash
cd Proyecto-Front
npm install
npm run dev
```

### Backend

```bash
cd Proyecto-FastAPI-Backend
.venv\\Scripts\\activate
uvicorn app.main:app --reload
```

Backend documentation:

```
http://localhost:8000/docs
```

## Status

**Active development** — this repository documents the complete process of building a professional full-stack portfolio platform from the ground up.
