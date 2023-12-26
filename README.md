<p align="center">
  <a href="https://laravel.com" target="_blank">
    <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
  </a>
</p>

<p align="center">
  <a href="https://github.com/laravel/framework/actions">
    <img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status">
  </a>
  <a href="https://packagist.org/packages/laravel/framework">
    <img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads">
  </a>
  <a href="https://packagist.org/packages/laravel/framework">
    <img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version">
  </a>
  <a href="https://packagist.org/packages/laravel/framework">
    <img src="https://img.shields.io/packagist/l/laravel/framework" alt="License">
  </a>
</p>

# Laravel Vue.js CRUD Application

This project is a simple CRUD (Create, Read, Update, Delete) application built using Laravel and Vue.js. It includes user authentication, a dashboard, and task management features.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Download and Extract](#download-and-extract)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Dashboard](#dashboard)
  - [Task Management](#task-management)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with Laravel's built-in authentication system.
- Dashboard for authenticated users.
- Task management with CRUD operations.
- Vue.js integration for dynamic and responsive UI.

## Prerequisites

Before you begin, ensure you have the following installed:

- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Laravel CLI](https://laravel.com/docs/8.x/installation#installing-laravel)
- [Git](https://git-scm.com/)

## Getting Started

### Download and Extract

1. Download the project as a ZIP file from the [GitHub repository](https://github.com/VOID-ALIF/LaravelVueDemoLogin).

2. Create a folder named `loginvue`.

3. Extract the contents of the ZIP file into the `loginvue` folder.

4. Open your terminal and navigate to the project:

   ```bash
   cd loginvue
## Installation

## composer install
  npm install
  php artisan key:generate
  php artisan migrate --seed

## Compile assets using Mix:
  npm run dev

## Serve the application:
  php artisan serve

Visit http://127.0.0.1:8000 in your browser.

Usage
Dashboard
Upon successful authentication, users will be redirected to the dashboard. The dashboard provides a welcoming message and status information.

Task Management
Navigate to the Tasks section to perform CRUD operations on tasks. Users can view, create, edit, and delete tasks.

Contributing
Contributions are welcome! Please follow the contribution guidelines.

License
This project is licensed under the MIT License - see the LICENSE file for details.
