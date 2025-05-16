# Whether Weather - Assignment Project

## 🌦️ About the Project

Whether Weather is a simple weather forecast website developed as part of a front-end assignment. The project allows users to:

* View a dashboard with cards for their favorite cities.
* Click on a city to view detailed forecast data (City Focus).
* Select their favorite cities and display preferences (Preferences Page).

All data is locally sourced from provided JSON files or the included `weather_data.js` file, as per assignment instructions. No external APIs were used.

---

## 🧰 Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla)
* Bulma CSS Framework
* Eleventy (Static Site Generator)

---

## 🚀 How to Run the Project Locally

1. Clone or download the repository.
2. Make sure you have Eleventy installed (`npm install @11ty/eleventy --save-dev`)
3. Run the project locally:

   ```
   npx eleventy --serve
   ```
4. Open your browser and go to `http://localhost:8080/`

All pages and data should load properly.

---

## 📄 Folder Structure

```
project-root/
│
├── index.html
├── preferences.html
├── cityfocus.html
│
├── style.css
├── js/
│   └── bulma.js
├── data/
│   └── weather_data.js
├── images/
│   └── logo.png
```

## ✅ Features Implemented

### Dashboard Page:

* Dynamically lists user-selected favorite cities from localStorage.
* Each city card links to the City Focus page with the appropriate city parameter.

### Preferences Page:

* Users can select favorite cities and display preferences.
* Selections are saved to localStorage.

### City Focus Page:

* Reads city name from URL parameters.
* Loads data from `weather_data.js`.
* Displays:

  * Today's weather (description, max temperature, wind speed)
  * Current hour forecast (temperature and wind)
  * 7-day summary (weather description for each day)
  * Current time

---

## 📌 Notes

* All weather data is sourced from the provided JSON and `weather_data.js` files.
* City names in filenames are lowercase and joined (e.g., `newyork_daily.json`).
* The project is designed to work entirely offline (no API dependencies).

---

## 🙌 Credits

* Weather data and specifications provided by the course instructor.
* Bulma CSS: [https://bulma.io/](https://bulma.io/)

---

## 📅 Last Updated

May 2025

---

Thank you for reviewing this project! 🚀
