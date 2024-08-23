<p align="center">
  <a href="" rel="noopener">
 <img  src="https://sinhala.adaderana.lk/2021/assets/images/header-new-logo-sinhala_2019.png" alt="Derana"></a>
</p>

<h2 align="center">Derana News Scraper</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/mrhansamala/Derana-News-Scraper.svg)](https://github.com/mrhansamala/Derana-News-Scraper/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/mrhansamala/Derana-News-Scraper.svg)](https://github.com/mrhansamala/Derana-News-Scraper/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> The unofficial Scrap [Derana]
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

The unofficial Scrap [Derana]

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing


```sh
yarn add @mrhansamala/derana-news-scraper
```

or

```sh
npm i @mrhansamala/derana-news-scraper
```

## 🎈 Usage <a name="usage"></a>

```ts
import derana = require('@mrhansamala/derana-news-scraper')

async function data() {
    const api = await derana()
    console.log(api) 
}
data()
    ```

```
```ts
{
  status: true,
  cretor: 'mrhansamala',
  result: {
    title: 'මාස 5කදී පොලීසිය කළ මෙහෙයුමෙන් කොටුවූ පිරිස 3000 ඉක්මවයි',
    link: 'https://sinhala.adaderana.lk/news/200261',
    date: 'August 23 2024',
    time: '09:59 PM',
    image: 'https://s3.amazonaws.com/adaderanasinhala/1724430576-650x433.jpg',
    description: 'සංවිධානාත්මක අපරාධ කල්ලි සාමාජිකයින් අත්අඩංගුවට ගැනීම සඳහා ගතවූ මාස 05 තුළ සිදුකළ මෙහෙයුම්වලින් පුද්ගලයින් 3,400 ඉක්මවූ පිරිසක් අත්අඩංගුවට ගෙන ඇති බව පොලීසිය පවසයි.දිවයිනම ආවරණය වන පරිදි පසුගිය මාර්තු මස 19 වනදා සිට විශේෂ පොලිස් කණ්ඩායම් 20ක් යොදවා මෙම වැටලීම් සිදුකර තිබුණි.ඒ අනුව සංවිධානාත්මක අපරාධ සිදුකිරීම සඳහා සෘජුව සහාය දැක්වීම, අපරාධ සැලසුම් කිරීම සහ ඊට ආධාර අනුබල ලබාදීම යනාදිය සම්බන්ධයෙන් සැකකරුවන් සහ සැකකාරියන් 3,411 දෙනෙකු අත්අඩංගුවට ගෙන ඇති බව පොලීසිය පවසයි.ඊයේ (22) දිනයේ ද සැකකරුවන් 38 දෙනෙකු කොළඹ අපරාධ කොට්ඨාශය සහ බස්නාහිර පළාත් දකුණ අපරාධ කොට්ඨාශය විසින් අත්අඩංගුවට ගෙන තිබුණි.මෙම සැකකරුවන් සම්බන්ධයෙන් රැඳවුම් නියෝග ලබාගෙන වැඩිදුර විමර්ශන සිදුකරන බව පොලිස් මූලස්ථානය පවසයි.'
  }
}
```

## ✍️ Authors <a name = "authors"></a>

- [@mrhansamala](https://github.com/mrhansamala) - scraped author