# Jellyquity Theme for Ubooquity 3

A dark theme inspired by the **Jellyfin** interface, designed for Ubooquity 3.x.

---

## Visual overview

| Element          | Value                           |
|------------------|---------------------------------|
| Main background  | `#101010` (deep black)          |
| Card background  | `#1c1c1c`                       |
| Accent color     | `#00a4dc` (Jellyfin blue)       |
| Font             | Nunito (Google Fonts)           |
| Card corners     | Rounded (10px)                  |
| Hover effect     | Lift + blue border              |

---

## Installation

1. In the Ubooquity admin panel, go to **General Settings**
2. Click **“Create a new theme…”** and name it `jellyfin`
3. Copy the files from this folder into the newly created theme folder
4. Select the `jellyfin` theme from the drop-down list and apply
5. Restart Ubooquity

> **Important**: This theme is incompatible with Ubooquity 2.x.

---

## File Structure

```
jellyfin/
├── common/
│   ├── style.css                             ← Main CSS (all pages)
│   ├── inc-header.html                       ← Common header (logo, navigation, search)
│   └── inc-footer.html                       ← Common footer
├── home/
│   └── page-home.html                        ← Home page (categories)
├── library/
│   ├── library.css                           ← Content CSS
│   ├── inc-library-popups.html               ← File details popup
│   ├── page-library.html                     ← Books/folders grid
│   └── page-library-category-root-dirs.html  ← Category root
└── login/
    └── page-login.html                       ← Login page
```

Files not included in this theme are automatically retrieved from the Ubooquity default theme.

---

## Customization

All colors are CSS variables in `common/style.css`:

```css
:root {
  --jf-bg:         #101010;   /* Global background */
  --jf-surface:    #1c1c1c;   /* Cards, panels */
  --jf-accent:     #00a4dc;   /* Jellyfin blue */
  --jf-text:       #ffffff;   /* Main text */
  --jf-text-muted: #aaaaaa;   /* Secondary text */
}
```

### Change the accent color (e.g., Plex purple)
```css
--jf-accent:       #e5a00d;
--jf-accent-hover: #cc8f0b;
--jf-accent-glow:  rgba(229,160,13,0.25);
```

---

## Notes

- The **Nunito** font is loaded from Google Fonts. If you're on a closed network,
  replace the import with a local or system font (`font-family: ‘Segoe UI’, sans-serif`).
- The cards use `aspect-ratio: 2/3` for covers — ideal for comics and novels.
- The reading progress bar is displayed automatically if Ubooquity provides
  the `{{readingProgress}}` variable.

> **Important**: In the Ubooquity administration settings, **Enable folder metadata display** must be enabled!
> **Important**: In the settings, **Display title from metadata instead of file name** must be enabled to display titles from the metadata!
