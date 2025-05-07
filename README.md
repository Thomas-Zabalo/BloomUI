# 🌸 BloomUI – Application Angular

Une application Angular développée avec Angular CLI, mettant en œuvre des composants modernes et une esthétique douce et élégante inspirée du thème floral **BloomUI**.

![Angular](https://img.shields.io/badge/Angular-v19.2.10-red?logo=angular)  
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🔗 Sommaire

- [Serveur de développement](#serveur-de-développement)
- [Génération de code](#génération-de-code-scaffolding)
- [Compilation](#compilation)
- [Tests unitaires](#exécution-des-tests-unitaires)
- [Tests e2e](#tests-de-bout-en-bout-e2e)
- [Palette de couleurs BloomUI](#-bloomui--palette-de-couleurs)

---

## 🚀 Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10

Ce projet utilise Angular CLI pour faciliter le développement, la génération de composants, le lancement du serveur local, la compilation, les tests et plus encore.

---

## Serveur de développement

Pour démarrer un serveur de développement local, exécutez :

```bash
ng serve
````

Une fois le serveur lancé, ouvrez votre navigateur à l’adresse `http://localhost:4200/`. L’application se rechargera automatiquement à chaque modification des fichiers sources.

---

## Génération de code (scaffolding)

Angular CLI inclut des outils puissants pour générer du code. Pour créer un nouveau composant, exécutez :

```bash
ng generate component nom-du-composant
```

Pour voir la liste complète des éléments disponibles (`components`, `directives`, `pipes`, etc.) :

```bash
ng generate --help
```

---

## Compilation

Pour compiler le projet, exécutez :

```bash
ng build
```

Cela compile le projet et place les fichiers de sortie dans le dossier `dist/`. La version de production optimise automatiquement les performances.

---

## Exécution des tests unitaires

Pour exécuter les tests unitaires avec [Karma](https://karma-runner.github.io) :

```bash
ng test
```

---

## Tests de bout en bout (e2e)

Pour lancer les tests end-to-end :

```bash
ng e2e
```

Angular CLI ne propose pas de solution e2e par défaut. Vous pouvez intégrer l’outil de test de votre choix selon vos besoins.

---

## 🎨 BloomUI – Palette de Couleurs

### 🌞 Thème **Light**

| Rôle        | Couleur principale             | Code Hex  |
| ----------- | ------------------------------ | --------- |
| `primary`   | Doux rose floral               | `#EFA8B8` |
| `secondary` | Lavande pâle                   | `#C7B8EA` |
| `accent`    | Menthe légère                  | `#B4E0D3` |
| `neutral`   | Gris chaud clair (fond, carte) | `#F9F9F9` |
| `base-100`  | Blanc pur (fond principal)     | `#FFFFFF` |
| `info`      | Bleu doux                      | `#91C6F2` |
| `success`   | Vert pastel                    | `#AEE6C5` |
| `warning`   | Jaune crème                    | `#FFE6A7` |
| `error`     | Rouge corail doux              | `#F28B82` |

---

### 🌚 Thème **Dark**

| Rôle        | Couleur principale            | Code Hex  |
| ----------- | ----------------------------- | --------- |
| `primary`   | Rose foncé floral             | `#C76C82` |
| `secondary` | Lavande profonde              | `#9386C1` |
| `accent`    | Menthe froide foncée          | `#6FC1B4` |
| `neutral`   | Gris très foncé (cartes/fond) | `#1E1E2F` |
| `base-100`  | Gris bleuté presque noir      | `#12121A` |
| `info`      | Bleu acier                    | `#5A9BD8` |
| `success`   | Vert forêt doux               | `#69C29D` |
| `warning`   | Or foncé                      | `#C2A04A` |
| `error`     | Rouge prune                   | `#C75C5C` |

---

## 📚 Ressources complémentaires

* [Documentation officielle Angular](https://angular.dev)
* [Angular CLI – Référence complète](https://angular.dev/tools/cli)
* [Palette générée avec Coolors](https://coolors.co)
