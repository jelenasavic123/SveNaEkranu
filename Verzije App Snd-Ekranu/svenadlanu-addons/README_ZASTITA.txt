Sve na dlanu 9.0.0 - pojacana V4 zastita

Ova verzija zadrzava:
- rules_1.json
- rules_2.json
- ikonice/slike
- PWA fajlove
- postojecu Worker autorizaciju

Pojacano:
- content.js vise ne sadrzi listu ciljnih domena niti lokalno odlucuje da li je stranica ciljna; manifest + background validacija rade taj deo.
- background.js koristi kodirane osetljive konstante i poruke.
- page_guard.js koristi kodirane ciljne domene i event naziv.
- Worker ima POPUP_CHECK endpoint za server-side proveru popup domena.
- Worker source nije potreban Chrome ekstenziji.

Napomena: JavaScript koji Chrome mora lokalno da izvrsi ne moze biti potpuno tajan. Ova verzija otežava citanje i kopiranje, ali nije kriptografska zastita.
