// ============================================================
// Jellyquity Theme — Internationalization (i18n)
// Supported languages: fr, en, it
// ============================================================

(function () {
  var STORAGE_KEY = 'jellyquity_lang';

  var translations = {
    fr: {
      search: 'Rechercher…', searchBtn: 'Rechercher', home: 'Accueil', logout: 'Déconnexion',
      recentlyAdded: 'ajoutés récemment', noLibrary: 'Aucune bibliothèque partagée',
      noRecentItems: 'Aucun élément récent', loadError: 'Impossible de charger les éléments récents',
      noItemFound: 'Aucun élément trouvé', publishedOn: 'Publié le', progression: 'Progression',
      poweredBy: 'Propulsé par', goUp: 'Monter', random: 'Aléatoire', settings: 'Paramètres',
      loginTitle: 'Connexion', loginSub: 'Votre bibliothèque personnelle',
      loginUser: 'Identifiant', loginUserPh: 'Votre identifiant',
      loginPass: 'Mot de passe', loginPassPh: 'Votre mot de passe',
      loginBtn: 'Se connecter', loginFooter: 'Thème Jellyquity pour Ubooquity 3',
      settingsTitle: "paramètres d'affichage", grouping: 'Regroupement',
      folder: 'Répertoire', flat: 'Plat', sortCriterion: 'Critère de tri',
      filePath: "Chemin d'accès", fileName: 'Nom du fichier', authors: 'Auteurs',
      title: 'Titre', dateAdded: "Date d'ajout", sortOrder: 'Ordre de tri',
      ascending: 'Ascendant', descending: 'Descendant', apply: 'Confirmer',
      langLabel: 'Langue'
    },
    en: {
      search: 'Search…', searchBtn: 'Search', home: 'Home', logout: 'Sign out',
      recentlyAdded: 'recently added', noLibrary: 'No shared library',
      noRecentItems: 'No recent items', loadError: 'Could not load recent items',
      noItemFound: 'No items found', publishedOn: 'Published on', progression: 'Progress',
      poweredBy: 'Powered by', goUp: 'Go up', random: 'Random', settings: 'Settings',
      loginTitle: 'Sign in', loginSub: 'Your personal library',
      loginUser: 'Username', loginUserPh: 'Your username',
      loginPass: 'Password', loginPassPh: 'Your password',
      loginBtn: 'Sign in', loginFooter: 'Jellyquity theme for Ubooquity 3',
      settingsTitle: 'display settings', grouping: 'Grouping',
      folder: 'Folder', flat: 'Flat', sortCriterion: 'Sorting criterion',
      filePath: 'File path', fileName: 'File name', authors: 'Authors',
      title: 'Title', dateAdded: 'Date added', sortOrder: 'Sorting order',
      ascending: 'Ascending', descending: 'Descending', apply: 'Apply',
      langLabel: 'Language'
    },
    it: {
      search: 'Cerca…', searchBtn: 'Cerca', home: 'Home', logout: 'Disconnetti',
      recentlyAdded: 'aggiunti di recente', noLibrary: 'Nessuna libreria condivisa',
      noRecentItems: 'Nessun elemento recente', loadError: 'Impossibile caricare gli elementi recenti',
      noItemFound: 'Nessun elemento trovato', publishedOn: 'Pubblicato il', progression: 'Avanzamento',
      poweredBy: 'Powered by', goUp: 'Su', random: 'Casuale', settings: 'Impostazioni',
      loginTitle: 'Accesso', loginSub: 'La tua libreria personale',
      loginUser: 'Nome utente', loginUserPh: 'Il tuo nome utente',
      loginPass: 'Password', loginPassPh: 'La tua password',
      loginBtn: 'Accedi', loginFooter: 'Tema Jellyquity per Ubooquity 3',
      settingsTitle: 'impostazioni di visualizzazione', grouping: 'Raggruppamento',
      folder: 'Cartella', flat: 'Piatto', sortCriterion: 'Criterio di ordinamento',
      filePath: 'Percorso file', fileName: 'Nome file', authors: 'Autori',
      title: 'Titolo', dateAdded: 'Data aggiunta', sortOrder: 'Ordine di ordinamento',
      ascending: 'Ascendente', descending: 'Discendente', apply: 'Applica',
      langLabel: 'Lingua'
    }
  };

  function getLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) return saved;
    } catch(e) {}
    var browser = (navigator.language || 'fr').substring(0, 2).toLowerCase();
    return translations[browser] ? browser : 'fr';
  }

  window.i18n = {
    t: function(key) {
      var lang = getLang();
      return (translations[lang] && translations[lang][key]) || translations['fr'][key] || key;
    },
    getLang: getLang,
    setLang: function(lang) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}
      location.reload();
    },
    apply: function() {
      document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key  = el.getAttribute('data-i18n');
        var attr = el.getAttribute('data-i18n-attr');
        var val  = window.i18n.t(key);
        if (attr) { el.setAttribute(attr, val); }
        else { el.textContent = val; }
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.i18n.apply);
  } else {
    window.i18n.apply();
  }
})();
