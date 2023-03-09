# 🍫 Caloriechecker 🍫

![soup](https://media0.giphy.com/media/5z63S7ciWbsNU46ZDx/giphy.gif)

## 📖 User story

Als foodie, wil ik tijdens het boodschappen doen een product kunnen scannen, zodat ik meer informatie over het product kan lezen en een goede keuze kan maken of het bij mijn dieet past.

Met behulp van de Healthy Food Checker API kun je betere voedselkeuzes maken. Even snel als je boodschappen doet of als je in een restaurant zit, of als je thuis een uitgebreid en gedetailleerd dieet plan wil opstellen?

## 🛠 Open Food Facts API

 De Caloriechecker is gebaseerd op Open Food Facts een productendatabase over voedsel door iedereen en voor iedereen. Je kan er heel veel informatie vinden, maar ook aan bijdragen producten toe te voegen en/of teksten te verbeteren.

Lees hier meer over Open Food Facts: https://nl.openfoodfacts.org/discover

Er is een JSON-API beschikbaar om de productgegevens te kunnen lezen op basis van de barcode. Als je deze app wil maken moet je ook een bar-code scan functionaliteit gebruiken. Je kan zelf iets proberen te maken met behulp van de Barcode Detection API, of een bestaamde library gebruiken.

De API is gebaat bij mensen die ontbrekende data wil toevoegen aan het systeem. Informatie toevoegen kan ook met de Open Food Facts API.

Dit is de Open Food Facts API https://nl.openfoodfacts.org/data

## 📱 Wireflow & Activity Diagram

<img width="807" alt="Scherm­afbeelding 2023-03-09 om 13 46 07" src="https://user-images.githubusercontent.com/94405795/224027194-b07c1a79-61c4-4956-a0fe-9383e3f806aa.png">

## 📋 Functionaliteiten
| Te doen                      | Klaar? |
| :--------------------------- | :---- |
| Camera aan/uit               | ✅    |
| Zoek barcode                 | ✅    |
| Data uit API                 | ✅    |
| Render data                  | ✅    |
| Ideal state                  | ✅    |
| Loading state                | ✅    |
| Error state                  | ✅    |
| Calorie berekenen            | ✅    |
| Product detailpagina         | ✅    |
| Styling                      |       |

## 🚧 (Commit) Proces

* [Eerste fetch, begin formulier en start voor barcode scanner](https://github.com/DennisHvA/web-app-from-scratch-2223/commit/34113f88bb5328bbbd91605e6e37f926993130e4)
* [Scanner met een knop](https://github.com/DennisHvA/web-app-from-scratch-2223/commit/a05693f7bb8960dc7772bf4144b6a62776049df7)
* [Basis in modules en een werkend formulier](https://github.com/DennisHvA/web-app-from-scratch-2223/commit/a05693f7bb8960dc7772bf4144b6a62776049df7)
* [Scanner leest de barcode en rendert in HTML](https://github.com/DennisHvA/web-app-from-scratch-2223/commit/1b5595cf28c9a34b0ecbb55926e86bf41c8714c7)
* [Readme](https://github.com/DennisHvA/web-app-from-scratch-2223/commit/f6b989d85ba7c3c4f0aee2fe977d3e63d0ef641e)
* [Werkende states](https://github.com/DennisHvA/web-app-from-scratch-2223/commit/0f83b83f0cb67a20e48801ec9f73eb8bd1f23d3b)
* [Refactor](https://github.com/DennisHvA/web-app-from-scratch-2223/commit/85edf18ba0638d66f28b3834d34b29b97c8859cd)

## 💻 Installatie

Installeer deze repository: 

```
git clone https://github.com/DennisHvA/web-app-from-scratch-2223
```

## ⚖️ Licentie

De [MIT](https://github.com/DennisHvA/web-app-from-scratch-2223/blob/main/LICENSE) licentie wordt gebruikt