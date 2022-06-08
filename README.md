# rwanda-administrative-divisions
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

API used for listing all the province, district, sectors, and cells. All data came from [National Institute of Statistics Rwanda (web).](https://www.statistics.gov.rw/) This API includes the total population for each sectors etc. and other information.

#### SETUP

1. **Install and setup postgres**

   - install postgres
   - Create database: administartion

2. **Configure `.env`**

   - fill `.env` file with the names and credentials of the databases, basing on the `.env.example` file

3. **Run Migrations**

   - Run `npm run dbmigrate` in terminal to migrate the migrations to the database
   - 
4. **To Undo Migrations**

  - Run `npm run dbmigrate:undo` to undo all migrations
