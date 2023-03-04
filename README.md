# Rando pour tous

À partir du template [solid-quickstart](https://github.com/netlify-templates/solid-quickstart) de Netlify.

## Rédaction

Sur contentful.com, dans l'organisation 3sdl, il y a un Space Rando pour tous.

Pour modifier le contenu des sections et ajouter des événemennts, utiliser l'onglet Content.

Pour Ajouter ou supprimer des photos, utiliser l'onglet Media.

## Développement

Installer les dépendances:

```
npm install
```

Installer le [netflify-cli](https://cli.netlify.com/)

```
npm install netlify-cli -g
```

Lier netflify-cli au site [rando-pour-tous](https://app.netlify.com/sites/rando-pour-tous) sur netflify:

```
netlify link
```

Lancer en local:

```
netlify dev
```

## Déploiement

Pousser sur main. Le déploiement est fait automatiquement via un webhook.
