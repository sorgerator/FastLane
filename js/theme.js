/**
 * FastLane Sarajevo — Theme (Light/Dark) & Bilingual (BS/EN) Engine
 * Pure Vanilla JavaScript (ES6+)
 */

const TRANSLATIONS = {
  bs: {
    // Meta & Page Titles
    "meta.title.home": "FastLane Sarajevo | Vrhunski Vulkanizer i Servis Guma",
    "meta.title.services": "Usluge i Cjenovnik | FastLane Sarajevo",
    "meta.title.appointments": "Zakažite Termin Online | FastLane Sarajevo",
    "meta.title.location": "Naša Lokacija u Sarajevu | FastLane Sarajevo",
    "meta.title.about": "O Nama i Našem Timu | FastLane Sarajevo",
    "meta.title.contact": "Kontakt i Pomoć na Putu | FastLane Sarajevo",
    "meta.title.privacy": "Politika Privatnosti | FastLane Sarajevo",

    // Navbar & Controls
    "nav.subtitle": "Vulkanizer & Auto Servis Sarajevo",
    "nav.home": "Početna",
    "nav.services": "Usluge",
    "nav.appointments": "Termini",
    "nav.location": "Lokacija",
    "nav.about": "O nama",
    "nav.contact": "Kontakt",
    "nav.privacy": "Privatnost",
    "nav.book_now": "Zakaži Termin",
    "nav.theme_light": "Svijetli režim",
    "nav.theme_dark": "Tamni režim",
    "nav.lang_label": "Promijeni jezik na Engleski",
    "status.open": "Otvoreno danas • 08:00 – 19:00",
    "status.closed": "Trenutno zatvoreno • Otvara u 08:00",

    // Home Page - Hero
    "home.badge": "Br. 1 Moderni Vulkanizer u Sarajevu",
    "home.title.part1": "Vaša sigurnost na cesti počinje sa",
    "home.title.highlight": "FastLane",
    "home.title.part2": "preciznošću.",
    "home.subtitle": "Od brze sezonske zamjene guma i 3D laserskog balansiranja do Hunter optike trapa i hotela za gume. Najsavremenija oprema u srcu Sarajeva uz garanciju na svaku uslugu.",
    "home.cta.primary": "Rezervišite Termin",
    "home.cta.secondary": "Pogledajte Cjenovnik",
    "home.trust.1": "20 min ekspres zamjena",
    "home.trust.2": "Hunter 3D dijagnostika",
    "home.trust.3": "100% garancija kvaliteta",

    // Home Page - Quick Estimator Card
    "home.estimator.badge": "Brzi Kalkulator",
    "home.estimator.title": "Izračunajte cijenu servisa za 10 sekundi",
    "home.estimator.vehicle": "Tip vozila",
    "home.estimator.vehicle.car": "Putničko vozilo (Limuzina / Hatchback)",
    "home.estimator.vehicle.suv": "SUV / 4x4 / Crossover",
    "home.estimator.vehicle.van": "Kombi / Dostavno vozilo (C-gume)",
    "home.estimator.rim": "Veličina felge (col)",
    "home.estimator.rim.small": "13\" – 15\" (Standard)",
    "home.estimator.rim.medium": "16\" – 17\" (Srednja klasa)",
    "home.estimator.rim.large": "18\" – 19\" (Sport / SUV)",
    "home.estimator.rim.xlarge": "20\" – 22\" (RunFlat / Premium)",
    "home.estimator.service": "Vrsta usluge (komplet 4 točka)",
    "home.estimator.service.swap": "Komplet zamjena + 3D balansiranje",
    "home.estimator.service.swap_hotel": "Zamjena + Balansiranje + Hotel za gume (sezona)",
    "home.estimator.service.alignment": "Hunter 3D Optika trapa + Kontrola",
    "home.estimator.total_label": "Okvirna cijena kompleta:",
    "home.estimator.vat": "Uključen PDV + provjera pritiska i ventila",
    "home.estimator.btn": "Zakaži po ovoj cijeni",

    // Home Page - Metrics
    "home.stat1.val": "15+",
    "home.stat1.label": "Godina iskustva u Sarajevu",
    "home.stat2.val": "28.000+",
    "home.stat2.label": "Montiranih i balansiranih guma",
    "home.stat3.val": "20 min",
    "home.stat3.label": "Prosječno vrijeme zamjene",
    "home.stat4.val": "4.9 / 5",
    "home.stat4.label": "Ocjena zadovoljnih vozača",

    // Home Page - Why Choose Us
    "home.why.badge": "Zašto Odabrati FastLane?",
    "home.why.title": "Inženjerska preciznost za bezbjednu vožnju",
    "home.why.subtitle": "Kombinujemo njemačku dijagnostičku tehnologiju, obučene majstore i transparentne cijene bez skrivenih troškova.",
    "home.why.card1.title": "Ekspresna Brzina (20 min)",
    "home.why.card1.desc": "Poštujemo vaše vrijeme. Sa 4 savremene servisne rampe i online zakazivanjem, zamjenu i balansiranje završavamo bez dugih redova.",
    "home.why.card2.title": "Kompjuterski Kvalitet",
    "home.why.card2.desc": "Koristimo beskontaktne montirke koje čuvaju vaše aluminijske felge od ogrebotina te laserske balanserke sa tačnošću u gram.",
    "home.why.card3.title": "Fer i Transparentne Cijene",
    "home.why.card3.desc": "Jasan cjenovnik u KM prije početka rada. Bez neprijatnih iznenađenja, uz besplatnu vizuelnu kontrolu kočnica i trapa.",
    "home.why.card4.title": "Hotel za Gume pod Klimom",
    "home.why.card4.desc": "Nemate mjesta u garaži ili podrumu? Čuvamo vaše vansezonske gume u tamnom, suhom i osiguranom skladištu uz pranje felgi.",

    // Home Page - Key Services Preview
    "home.services.badge": "Naše Ključne Usluge",
    "home.services.title": "Kompletna briga o točkovima na jednom mjestu",
    "home.services.view_all": "Sve usluge i cjenovnik",
    "home.srv1.tag": "Najtraženije",
    "home.srv1.title": "Sezonska zamjena guma",
    "home.srv1.desc": "Demontaža, montaža ljetnih ili zimskih guma, zamjena gumiranih ventila, kontrola dubine profila i podešavanje pritiska.",
    "home.srv1.price": "Od 40 KM / komplet",
    "home.srv2.tag": "Laserska preciznost",
    "home.srv2.title": "Precizno 3D balansiranje",
    "home.srv2.desc": "Eliminišemo vibracije na volanu pri višim brzinama uz kompjutersko pozicioniranje skrivenih ljepljivih tegova za alu felge.",
    "home.srv2.price": "Od 20 KM / 4 točka",
    "home.srv3.tag": "Hunter HawkEye®",
    "home.srv3.title": "3D Laserska optika trapa",
    "home.srv3.desc": "Precizno podešavanje geometrije točkova sprečava neravnomjerno trošenje guma i smanjuje potrošnju goriva.",
    "home.srv3.price": "60 KM / vozilo",
    "home.srv4.tag": "Sigurno čuvanje",
    "home.srv4.title": "Sezonski Hotel za gume",
    "home.srv4.desc": "Profesionalno skladištenje 4 gume ili kompleta sa felgama na 6 mjeseci uz evidenciju dubine šare i pranje.",
    "home.srv4.price": "50 KM / sezona",
    "home.srv.book_link": "Rezerviši uslugu",

    // Home Page - Featured Tire Showcase & Winter Law
    "home.tires.badge": "Premium Partner Brendovi",
    "home.tires.title": "Prodaja i ugradnja vodećih svjetskih guma",
    "home.tires.desc": "U ponudi imamo originalne ljetne, zimske i cjelogodišnje (All-Season) gume sa svježim DOT datumom proizvodnje i tvorničkom garancijom od 24 mjeseca.",
    "home.tires.featured_name": "Goodyear Assurance / UltraGrip Serija",
    "home.tires.featured_desc": "Vrhunsko prianjanje na mokrom sarajevskom asfaltu i snijegu na Bjelašnici i Jahorini.",
    "home.tires.law_title": "Zakonska obaveza zimske opreme u BiH (01.11. – 01.04.)",
    "home.tires.law_desc": "Podsjećamo vozače da je u Bosni i Hercegovini obavezna zimska oprema (zimske gume M+S / 3PMSF sa min. 4 mm profila). Zakažite zamjenu na vrijeme i izbjegnite novembarske gužve!",

    // Home Page - Testimonials
    "home.reviews.badge": "Iskustva Vozača",
    "home.reviews.title": "Šta kažu naši klijenti iz Sarajeva",
    "home.rev1.text": "\"Zakazao sam termin online u 10:00, u 10:20 sam već bio na putu sa montiranim zimskim gumama. Nikakve ogrebotine na novim 19-inčnim alu felgama. Svaka čast ekipi!\"",
    "home.rev1.author": "Amer Hadžić",
    "home.rev1.role": "Audi A4 • Novi Grad, Sarajevo",
    "home.rev2.text": "\"Godinama ostavljam gume u njihovom Hotelu za gume na Stupu. Ne moram nositi teške točkove u stan na 5. sprat, a gume me uvijek čekaju oprane i spremne.\"",
    "home.rev2.author": "Lejla Kovačević",
    "home.rev2.role": "VW Tiguan • Grbavica, Sarajevo",
    "home.rev3.text": "\"Volan mi je tresao na autoputu iznad 110 km/h. U FastLane-u su uradili Hunter 3D optiku i rebalansiranje — auto sada plovi kao nov. Cijene su maksimalno korektne.\"",
    "home.rev3.author": "Damir Begović",
    "home.rev3.role": "Škoda Octavia • Ilidža",

    // Home Page - Bottom CTA
    "home.cta_banner.title": "Spremni za sigurniju i udobniju vožnju?",
    "home.cta_banner.desc": "Rezervišite svoj termin online u manje od minute ili nas pozovite za besplatnu konsultaciju.",
    "home.cta_banner.btn1": "Zakažite Termin Online",
    "home.cta_banner.btn2": "Kako do nas (Mapa)",

    // Services Page
    "services.hero.badge": "Katalog Usluga i Cjenovnik 2026",
    "services.hero.title": "Profesionalne Vulkanizerske Usluge",
    "services.hero.subtitle": "Sve usluge obavljamo na certificiranoj Hunter i Corghi opremi. Odaberite kategoriju ispod ili izračunajte tačnu cijenu za vaše vozilo.",
    "services.filter.all": "Sve usluge",
    "services.filter.mounting": "Montaža i Balans",
    "services.filter.repair": "Popravka i Krpljenje",
    "services.filter.alignment": "Optika i Dijagnostika",
    "services.filter.storage": "Hotel za Gume",

    "services.card1.title": "Zamjena Guma (Sezonska Montaža)",
    "services.card1.desc": "Brza i sigurna demontaža i montaža ljetnih, zimskih i RunFlat guma na čeličnim i aluminijskim felgama od 13\" do 22\".",
    "services.card1.f1": "Beskontaktna zaštita ruba alu felgi",
    "services.card1.f2": "Kontrola dubine šare i starosti (DOT)",
    "services.card1.f3": "Podešavanje pritiska po specifikaciji proizvođača",
    "services.card1.price": "10 – 20 KM / točak",

    "services.card2.title": "Popravka i Vulkanizacija Guma",
    "services.card2.desc": "Stručan popravak svih vrsta probušenih i oštećenih guma hladnom i toplom vulkanizacijom uz trajne Rema Tip-Top zakrpe.",
    "services.card2.f1": "Unutrašnje krpljenje \"gljivom\" (trajna metoda)",
    "services.card2.f2": "Topla vulkanizacija bočnih oštećenja",
    "services.card2.f3": "Ispitivanje nepropusnosti u vodenoj komori",
    "services.card2.price": "15 – 30 KM",

    "services.card3.title": "3D Kompjutersko Balansiranje",
    "services.card3.desc": "Precizno lasersko balansiranje za optimalnu vožnju bez vibracija volana i ravnomjerno trošenje ovjesa.",
    "services.card3.f1": "Skriveni samoljepljivi tegovi iza krakova alu felgi",
    "services.card3.f2": "Optimizacija položaja gume u odnosu na felgu",
    "services.card3.f3": "Mjerenje radijalnog i bočnog bacanja točka",
    "services.card3.price": "5 – 10 KM / točak",

    "services.card4.title": "Hunter 3D Laserska Optika Trapa",
    "services.card4.desc": "Kompjutersko centriranje prednjeg i zadnjeg trapa u 4 tačke pomoću high-definition kamera za fabričku geometriju.",
    "services.card4.f1": "Ispis dijagrama prije i poslije podešavanja",
    "services.card4.f2": "Kalibracija ugla volana u nulti položaj",
    "services.card4.f3": "Produžava vijek trajanja guma do 30%",
    "services.card4.price": "60 KM / komplet",

    "services.card5.title": "Hotel za Gume (Sezonsko Čuvanje)",
    "services.card5.desc": "Oslobodite prostor u svom domu. Čuvamo vaše gume u kontrolisanim uslovima zaštićenim od UV zraka i vlage.",
    "services.card5.f1": "Mašinsko pranje točkova prije skladištenja",
    "services.card5.f2": "Zvanični zapisnik o stanju i dubini profila",
    "services.card5.f3": "Prioritetni termin prilikom naredne sezone",
    "services.card5.price": "50 KM / 6 mjeseci",

    "services.card6.title": "TPMS Senzori & Punjenje Azotom",
    "services.card6.desc": "Dijagnostika, programiranje i zamjena TPMS senzora pritiska te punjenje guma čistim azotom (N2) za stabilan pritisak.",
    "services.card6.f1": "Čitanje stanja baterije TPMS senzora",
    "services.card6.f2": "Kodiranje zamjenskih senzora za sva EU/BiH vozila",
    "services.card6.f3": "Manje zagrijavanje gume na autoputu ljeti",
    "services.card6.price": "15 – 65 KM",

    // Services Page - Interactive Calculator & Pricing Table
    "services.calc.badge": "Interaktivni Kalkulator",
    "services.calc.title": "Izračunajte Tačan Iznos Vašeg Servisa",
    "services.calc.subtitle": "Odaberite dimenziju felgi, broj guma i željene dodatne opcije.",
    "services.calc.rim_label": "1. Odaberite dimenziju felgi",
    "services.calc.count_label": "2. Broj točkova",
    "services.calc.addons_label": "3. Dodatne usluge",
    "services.calc.addon.balance": "3D Lasersko balansiranje (preporučeno)",
    "services.calc.addon.valves": "Novi gumeni/hromirani ventili (4 kom)",
    "services.calc.addon.nitrogen": "Punjenje guma azotom (N2)",
    "services.calc.addon.alignment": "Hunter 3D Optika trapa",
    "services.calc.addon.hotel": "Hotel za gume (6 mjeseci čuvanja)",
    "services.calc.summary_title": "Specifikacija Troškova",
    "services.calc.base_mount": "Montaža i demontaža:",
    "services.calc.addons_cost": "Dodatne opcije:",
    "services.calc.total": "Ukupno za plaćanje:",
    "services.calc.book_btn": "Zakaži Termin sa Ovim Obračunom",

    "services.table.title": "Pregledni Cjenovnik po Dimenzijama (u KM)",
    "services.table.col_dim": "Dimenzija Felge",
    "services.table.col_steel": "Čelične Felge (4 kom)",
    "services.table.col_alloy": "Alu Felge (4 kom)",
    "services.table.col_single": "Cijena po 1 točku",
    "services.table.col_time": "Vrijeme trajanja",
    "services.table.row1.dim": "13\" – 14\" (Mali gradski auti)",
    "services.table.row2.dim": "15\" – 16\" (Kompakt & Limuzine)",
    "services.table.row3.dim": "17\" – 18\" (Limuzine & SUV)",
    "services.table.row4.dim": "19\" – 22\" (Premium / RunFlat)",
    "services.table.row5.dim": "Kombi / Teretni (C-gume)",

    // Services FAQ
    "services.faq.title": "Često Postavljana Pitanja (FAQ)",
    "services.faq.q1": "Koliko traje kompletna zamjena i balansiranje 4 gume?",
    "services.faq.a1": "Uz zakazan online termin, kompletna zamjena 4 gume sa kompjuterskim 3D balansiranjem traje između 20 i 30 minuta.",
    "services.faq.q2": "Kada je zakonski obavezna zimska oprema u Bosni i Hercegovini?",
    "services.faq.a2": "U BiH je zimska oprema zakonski obavezna od 1. novembra do 1. aprila, bez obzira na vremenske uslove. Preporučujemo zamjenu čim dnevne temperature padnu ispod 7°C.",
    "services.faq.q3": "Da li radite sa RunFlat gumama i niskoprofilnim 20\"+ felgama?",
    "services.faq.a3": "Da! Naše Corghi beskontaktne mašine su specijalno opremljene plastičnim protektorima i ruka-pomagačima za sigurnu montažu RunFlat i UHP niskoprofilnih guma bez ikakvog rizika po felgu.",

    // Appointments Page
    "appt.hero.badge": "Online Rezervacije Bez Čekanja",
    "appt.hero.title": "Rezervišite Vaš Termin",
    "appt.hero.subtitle": "Popunite formu ispod i osigurajte prioritetni ulazak na servisnu rampu u željenom terminu.",
    "appt.form.title": "Podaci o Rezervaciji",
    "appt.form.name": "Ime i Prezime *",
    "appt.form.name_ph": "npr. Tarik Sorguč",
    "appt.form.phone": "Broj Telefona *",
    "appt.form.phone_ph": "+387 61 123 456",
    "appt.form.email": "Email Adresa *",
    "appt.form.email_ph": "vas.email@primjer.ba",
    "appt.form.plate": "Registarska oznaka (opciono)",
    "appt.form.plate_ph": "npr. E12-K-345",
    "appt.form.vehicle": "Tip Vozila *",
    "appt.form.vehicle_car": "Putnički automobil",
    "appt.form.vehicle_suv": "SUV / Terenac (4x4)",
    "appt.form.vehicle_van": "Kombi / Dostavno",
    "appt.form.rim": "Veličina Felgi *",
    "appt.form.service": "Vrsta Usluge *",
    "appt.form.service_ph": "Odaberite uslugu...",
    "appt.form.srv_zamjena": "Sezonska zamjena guma + Balansiranje",
    "appt.form.srv_balansiranje": "3D Kompjutersko balansiranje guma",
    "appt.form.srv_popravak": "Popravak pukotina / Krpljenje gume",
    "appt.form.srv_optika": "Hunter 3D Laserska optika trapa",
    "appt.form.srv_hotel": "Zamjena + Sezonski Hotel za gume",
    "appt.form.srv_tpms": "Dijagnostika i programiranje TPMS senzora",
    "appt.form.date": "Datum i Vrijeme *",
    "appt.form.notes": "Dodatne Napomene",
    "appt.form.notes_ph": "Navedite dimenziju guma (npr. 205/55 R16), da li su gume kod nas u hotelu ili drugu napomenu...",
    "appt.form.submit": "Potvrdi Rezervaciju",
    "appt.form.error_msg": "Molimo popunite sva obavezna polja ispravno.",
    "appt.form.success_title": "Rezervacija uspješno zaprimljena!",
    "appt.form.success_desc": "Vaš termin je zabilježen. Kod rezervacije je sačuvan u listi vaših termina.",

    "appt.sidebar.why_title": "Prednosti Online Zakazivanja",
    "appt.sidebar.b1": "Nema čekanja u redu — rampa vas čeka u tačno vrijeme",
    "appt.sidebar.b2": "Besplatna kafa i Wi-Fi u našoj modernoj čekaonici",
    "appt.sidebar.b3": "Besplatna vizuelna provjera kočionih pločica",
    "appt.saved.title": "Moji Zakazani Termini",
    "appt.saved.empty": "Trenutno nemate sačuvanih termina na ovom uređaju.",
    "appt.saved.clear": "Obriši sve",
    "appt.saved.cancel": "Otkaži",
    "appt.saved.status": "Potvrđeno",

    // Location Page
    "loc.hero.badge": "Posjetite Nas u Sarajevu",
    "loc.hero.title": "Naša Lokacija i Kako Do Nas",
    "loc.hero.subtitle": "Nalazimo se na glavnoj gradskoj saobraćajnici na Stupu (ul. Džemala Bijedića 160), sa velikim besplatnim parkingom i lakim prilazom za sva vozila.",
    "loc.card.address_title": "Adresa Servisnog Centra",
    "loc.card.address_val": "Džemala Bijedića 160, 71000 Sarajevo, BiH",
    "loc.card.landmarks": "500m od Stupske petlje • Preko puta Bingo centra",
    "loc.card.hours_title": "Radno Vrijeme",
    "loc.card.mon_fri": "Ponedjeljak – Petak:",
    "loc.card.sat": "Subota:",
    "loc.card.sun": "Nedjelja:",
    "loc.card.closed": "Zatvoreno (Dežurni tim za pomoć na putu)",
    "loc.card.map_btn": "Otvori u Google Mapama",
    "loc.directions.title": "Upute za Dolazak iz Svih Dijelova Sarajeva",
    "loc.dir1.title": "Iz pravca Centra / Baščaršije",
    "loc.dir1.desc": "Vozite glavnom saobraćajnicom Bulevar Meše Selimovića prema Ilidži, skrenite desno kod RTV Doma u ulicu Džemala Bijedića i nastavite 1.2 km. Naš centar je sa desne strane.",
    "loc.dir2.title": "Iz pravca Ilidže / Blažuja",
    "loc.dir2.desc": "Preko Stupske petlje uključite se u ulicu Džemala Bijedića. Nakon 500 metara sa lijeve strane vidjet ćete narandžasto-crni FastLane totem i ulaz na parking.",
    "loc.dir3.title": "Sa Autoputa A1 (Ulaz Sarajevo Zapad)",
    "loc.dir3.desc": "Izađite na petlji Briješće / Stup, pratite putokaz za Centar/Nedžariće i za manje od 3 minute stižete direktno pred naše servisne rampe.",

    // About Page
    "about.hero.badge": "Tradicija, Inovacija i Sigurnost",
    "about.hero.title": "O Nama — Priča o FastLane Sarajevo",
    "about.hero.subtitle": "FastLane je vodeća moderna vulkanizerska radnja u Sarajevu sa višegodišnjim iskustvom. Naš tim certificiranih stručnjaka je tu da vam pruži vrhunsku uslugu i savjete za sigurnu vožnju u svim vremenskim uslovima.",
    "about.story.title": "Od male radionice do najmodernijeg centra u Kantonu Sarajevo",
    "about.story.p1": "Osnovan iz strasti prema automobilizmu i sigurnosti u saobraćaju, FastLane Sarajevo je izrastao u sinonim za pouzdanost. Svjesni zahtjevnih bosanskohercegovačkih zima i planinskih prevoja, opremili smo naš centar najsavremenijom tehnologijom na tržištu.",
    "about.story.p2": "Za razliku od klasičnih vulkanizerskih radnji, u FastLane-u svaki točak prolazi strogu proceduru kontrole: od čišćenja nalijegajuće površine glavčine, preko preciznog balansiranja, do stezanja šarafa isključivo kalibrisanim moment-ključem.",
    "about.equip.title": "Tehnologija Kojom Radimo",
    "about.equip.1.title": "Hunter HawkEye Elite® 3D",
    "about.equip.1.desc": "Najbrži i najprecizniji sistem za lasersko centriranje trapa na svijetu sa 4 HD kamere.",
    "about.equip.2.title": "Corghi Artiglio Master",
    "about.equip.2.desc": "Robotizovane beskontaktne montirke koje eliminišu svaki kontakt metala sa vašom aluminijskom felgom.",
    "about.equip.3.title": "Hofmann Geodyna Laser",
    "about.equip.3.desc": "Dijagnostičke balanserke koje detektuju i najmanji debalans gume te pokazuju tačnu tačku za lijepljenje tegova.",
    "about.team.title": "Upoznajte Naš Stručni Tim",
    "about.team.1.name": "Mujo Mujić",
    "about.team.1.role": "Vlasnik & Direktor",
    "about.team.1.bio": "Glavni mehaničar sa višedecenijskim iskustvom u automobilskoj industriji. Glavni kontrolor standarda kvaliteta svih servisnih operacija u FastLane Auto Centru.",
    "about.team.2.name": "Adnan Mujić",
    "about.team.2.role": "Glavni Majstor za Optiku Trapa",
    "about.team.2.bio": "Preko 14 godina iskustva na podešavanju geometrije ovjesa putničkih, sportskih i terenskih 4x4 vozila.",
    "about.team.3.name": "Kenan Karić",
    "about.team.3.role": "Specijalista za UHP / RunFlat Gume & TPMS",
    "about.team.3.bio": "Certificirani tehničar za rad sa niskoprofilnim felgama do 22 inča i dijagnostiku elektronskih senzora pritiska.",

    // Contact Page
    "contact.hero.badge": "Tu Smo Za Vas",
    "contact.hero.title": "Kontaktirajte FastLane Tim",
    "contact.hero.subtitle": "Imate pitanje o dostupnosti dimenzije guma, trebate ponudu za firmu ili pomoć na putu? Javite nam se odmah.",
    "contact.card.phone": "Servis i Rezervacije",
    "contact.card.emergency": "24/7 Mobilni Vulkanizer (BiH)",
    "contact.card.email": "Email Podrška i Ponude",
    "contact.form.title": "Pošaljite Nam Upit",
    "contact.form.name": "Ime i Prezime *",
    "contact.form.email": "Email Adresa *",
    "contact.form.phone": "Broj Telefona",
    "contact.form.subject": "Predmet Upita *",
    "contact.form.sub_quote": "Upit za cijenu i dostupnost guma",
    "contact.form.sub_service": "Pitanje u vezi servisa / optike trapa",
    "contact.form.sub_b2b": "Flotno održavanje za firme (B2B)",
    "contact.form.sub_other": "Ostalo / Pohvale i sugestije",
    "contact.form.message": "Vaša Poruka *",
    "contact.form.message_ph": "Upišite dimenziju guma (npr. 225/45 R17) ili vaše pitanje...",
    "contact.form.submit": "Pošalji Poruku",
    "contact.form.success": "Hvala vam! Vaša poruka je uspješno poslana. Odgovorit ćemo vam u najkraćem roku.",

    // Privacy Page
    "privacy.hero.badge": "Pravna Dokumentacija i Zaštita Podataka",
    "privacy.hero.title": "Politika Privatnosti",
    "privacy.hero.updated": "Posljednje ažuriranje: Oktobar 2026. • Usklađeno sa Zakonom o zaštiti ličnih podataka BiH (ZZLP)",
    "privacy.intro": "Vaša privatnost nam je izuzetno važna. FastLane Sarajevo se obavezuje da će vaše lične podatke čuvati i obrađivati u skladu sa važećim zakonima Bosne i Hercegovine i evropskim GDPR standardima.",
    "privacy.sec1.title": "1. Koje podatke prikupljamo?",
    "privacy.sec1.body": "Prilikom korištenja naše forme za online zakazivanje termina ili kontakt forme, prikupljamo samo neophodne podatke: ime i prezime, broj telefona, email adresu, te podatke o vozilu (dimenzija felgi, registarska oznaka) isključivo u svrhu realizacije tražene vulkanizerske usluge.",
    "privacy.sec2.title": "2. Kako koristimo vaše podatke?",
    "privacy.sec2.body": "Vaši podaci se koriste isključivo za potvrdu vašeg servisnog termina, vođenje evidencije u našem Hotelu za gume (oznaka vlasnika kompleta guma) i slanje obavijesti kada je vaše vozilo spremno za preuzimanje. Vaše podatke nikada ne prodajemo niti ustupamo trećim stranama.",
    "privacy.sec3.title": "3. Kolačići (Cookies) i LocalStorage",
    "privacy.sec3.body": "Naša web aplikacija koristi lokalnu memoriju vašeg preglednika (localStorage) isključivo za tehničke funkcionalnosti: pamćenje vašeg izbora svijetlog ili tamnog režima prikaza (Light/Dark mode), odabranog jezika (Bosanski/Engleski) i pregled vaših zakazanih termina.",
    "privacy.sec4.title": "4. Vaša prava i kontakt",
    "privacy.sec4.body": "U svakom trenutku imate pravo zatražiti uvid, izmjenu ili potpuno brisanje vaših ličnih podataka iz naše evidencije slanjem zahtjeva na info@fastlane.ba ili lično u našoj poslovnici u ulici Džemala Bijedića 160, Sarajevo.",

    // Footer
    "footer.desc": "Vodeći moderni vulkanizerski centar i auto servis u Sarajevu. Vrhunska oprema, stručno osoblje i beskompromisna briga o vašoj sigurnosti na putu.",
    "footer.nav_title": "Navigacija",
    "footer.srv_title": "Naše Usluge",
    "footer.contact_title": "Kontakt & Radno Vrijeme",
    "footer.rights": "© 2026 FastLane Sarajevo (Tarik Tires). Sva prava zadržana.",
    "footer.capstone": "Univerzitetski Capstone Projekat — Frontend Web Programming (IBU Sarajevo)"
  },

  en: {
    // Meta & Page Titles
    "meta.title.home": "FastLane Sarajevo | Premier Tire Shop & Auto Service",
    "meta.title.services": "Services & Pricing | FastLane Sarajevo",
    "meta.title.appointments": "Book Appointment Online | FastLane Sarajevo",
    "meta.title.location": "Our Location in Sarajevo | FastLane Sarajevo",
    "meta.title.about": "About Us & Our Team | FastLane Sarajevo",
    "meta.title.contact": "Contact & Roadside Assistance | FastLane Sarajevo",
    "meta.title.privacy": "Privacy Policy | FastLane Sarajevo",

    // Navbar & Controls
    "nav.subtitle": "Tire Center & Auto Service Sarajevo",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.appointments": "Appointments",
    "nav.location": "Location",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.privacy": "Privacy",
    "nav.book_now": "Book Now",
    "nav.theme_light": "Light Mode",
    "nav.theme_dark": "Dark Mode",
    "nav.lang_label": "Switch language to Bosnian",
    "status.open": "Open Today • 08:00 – 19:00",
    "status.closed": "Currently Closed • Opens at 08:00",

    // Home Page - Hero
    "home.badge": "#1 Modern Tire Shop in Sarajevo",
    "home.title.part1": "Your road safety starts with",
    "home.title.highlight": "FastLane",
    "home.title.part2": "precision.",
    "home.subtitle": "From express seasonal tire changes and 3D laser balancing to Hunter wheel alignment and climate-controlled tire storage. State-of-the-art equipment in the heart of Sarajevo with a full service warranty.",
    "home.cta.primary": "Book an Appointment",
    "home.cta.secondary": "View Price List",
    "home.trust.1": "20-min express tire swap",
    "home.trust.2": "Hunter 3D diagnostics",
    "home.trust.3": "100% quality guarantee",

    // Home Page - Quick Estimator Card
    "home.estimator.badge": "Instant Estimator",
    "home.estimator.title": "Calculate your service cost in 10 seconds",
    "home.estimator.vehicle": "Vehicle Type",
    "home.estimator.vehicle.car": "Passenger Car (Sedan / Hatchback)",
    "home.estimator.vehicle.suv": "SUV / 4x4 / Crossover",
    "home.estimator.vehicle.van": "Van / Light Commercial (C-Tires)",
    "home.estimator.rim": "Rim Diameter (inches)",
    "home.estimator.rim.small": "13\" – 15\" (Standard)",
    "home.estimator.rim.medium": "16\" – 17\" (Mid-size)",
    "home.estimator.rim.large": "18\" – 19\" (Sport / SUV)",
    "home.estimator.rim.xlarge": "20\" – 22\" (RunFlat / Performance)",
    "home.estimator.service": "Service Package (Set of 4 Wheels)",
    "home.estimator.service.swap": "Full Tire Change + 3D Balancing",
    "home.estimator.service.swap_hotel": "Tire Change + Balancing + Tire Hotel (Season)",
    "home.estimator.service.alignment": "Hunter 3D Wheel Alignment + Inspection",
    "home.estimator.total_label": "Estimated package total:",
    "home.estimator.vat": "Includes VAT + pressure & valve inspection",
    "home.estimator.btn": "Book With This Estimate",

    // Home Page - Metrics
    "home.stat1.val": "15+",
    "home.stat1.label": "Years of experience in Sarajevo",
    "home.stat2.val": "28,000+",
    "home.stat2.label": "Tires mounted & balanced",
    "home.stat3.val": "20 min",
    "home.stat3.label": "Average service turnaround",
    "home.stat4.val": "4.9 / 5",
    "home.stat4.label": "Customer satisfaction rating",

    // Home Page - Why Choose Us
    "home.why.badge": "Why Choose FastLane?",
    "home.why.title": "Engineering precision for safer driving",
    "home.why.subtitle": "We combine German diagnostic technology, certified master technicians, and transparent pricing with zero hidden fees.",
    "home.why.card1.title": "Express 20-Min Turnaround",
    "home.why.card1.desc": "We respect your schedule. With 4 modern service bays and online booking, we complete tire mounting and balancing without long queues.",
    "home.why.card2.title": "Computerized Quality",
    "home.why.card2.desc": "We use touchless tire changers that protect your alloy rims from scratches and laser balancers accurate to the gram.",
    "home.why.card3.title": "Fair & Transparent Pricing",
    "home.why.card3.desc": "Clear pricing in KM (BAM) before work begins. No unpleasant surprises, plus a complimentary visual brake and suspension check.",
    "home.why.card4.title": "Climate-Controlled Tire Hotel",
    "home.why.card4.desc": "Short on garage or basement space? We store your off-season tires in a dark, dry, insured facility including wheel washing.",

    // Home Page - Key Services Preview
    "home.services.badge": "Our Core Services",
    "home.services.title": "Complete wheel and tire care under one roof",
    "home.services.view_all": "All services & pricing",
    "home.srv1.tag": "Most Popular",
    "home.srv1.title": "Seasonal Tire Change",
    "home.srv1.desc": "Dismounting, mounting summer or winter tires, rubber valve replacement, tread depth inspection, and precise inflation.",
    "home.srv1.price": "From 40 KM / set",
    "home.srv2.tag": "Laser Precision",
    "home.srv2.title": "Precision 3D Balancing",
    "home.srv2.desc": "Eliminate steering wheel vibrations at highway speeds with computerized hidden adhesive weight placement for alloy wheels.",
    "home.srv2.price": "From 20 KM / 4 wheels",
    "home.srv3.tag": "Hunter HawkEye®",
    "home.srv3.title": "3D Laser Wheel Alignment",
    "home.srv3.desc": "Factory-spec 4-wheel geometry alignment prevents uneven tire wear, improves handling, and reduces fuel consumption.",
    "home.srv3.price": "60 KM / vehicle",
    "home.srv4.tag": "Secure Storage",
    "home.srv4.title": "Seasonal Tire Hotel",
    "home.srv4.desc": "Professional storage for 4 tires or complete wheel sets for 6 months, including tread depth logging and ultrasonic washing.",
    "home.srv4.price": "50 KM / season",
    "home.srv.book_link": "Book this service",

    // Home Page - Featured Tire Showcase & Winter Law
    "home.tires.badge": "Premium Partner Brands",
    "home.tires.title": "Sales & installation of world-leading tire brands",
    "home.tires.desc": "We stock genuine summer, winter, and all-season tires with fresh production DOT codes and a full 24-month manufacturer warranty.",
    "home.tires.featured_name": "Goodyear Assurance / UltraGrip Series",
    "home.tires.featured_desc": "Superior grip on wet Sarajevo asphalt and snowy mountain roads on Bjelašnica and Jahorina.",
    "home.tires.law_title": "Mandatory Winter Equipment Law in B&H (Nov 1 – Apr 1)",
    "home.tires.law_desc": "Reminder for all drivers: Winter tires (M+S / 3PMSF with minimum 4 mm tread depth) are legally required in Bosnia & Herzegovina from November 1 to April 1. Book early to beat the rush!",

    // Home Page - Testimonials
    "home.reviews.badge": "Driver Reviews",
    "home.reviews.title": "What our Sarajevo customers say",
    "home.rev1.text": "\"Booked online for 10:00 AM and was back on the road by 10:20 AM with my winter set mounted. Zero scratches on my new 19-inch alloys. Outstanding team!\"",
    "home.rev1.author": "Amer Hadžić",
    "home.rev1.role": "Audi A4 • Novi Grad, Sarajevo",
    "home.rev2.text": "\"I've been keeping my tires at their Tire Hotel in Stup for years. No more carrying heavy wheels up to my 5th-floor apartment, and they're always washed and ready.\"",
    "home.rev2.author": "Lejla Kovačević",
    "home.rev2.role": "VW Tiguan • Grbavica, Sarajevo",
    "home.rev3.text": "\"My steering wheel vibrated on the A1 highway above 110 km/h. FastLane did a Hunter 3D alignment and road-force balance — the car drives like brand new.\"",
    "home.rev3.author": "Damir Begović",
    "home.rev3.role": "Škoda Octavia • Ilidža",

    // Home Page - Bottom CTA
    "home.cta_banner.title": "Ready for a safer, smoother drive?",
    "home.cta_banner.desc": "Book your appointment online in under a minute or call our Sarajevo workshop for a free consultation.",
    "home.cta_banner.btn1": "Book Appointment Online",
    "home.cta_banner.btn2": "Get Directions (Map)",

    // Services Page
    "services.hero.badge": "2026 Service Catalog & Price List",
    "services.hero.title": "Professional Tire & Wheel Services",
    "services.hero.subtitle": "Every service is performed on certified Hunter and Corghi equipment. Filter by category below or calculate the exact cost for your vehicle.",
    "services.filter.all": "All Services",
    "services.filter.mounting": "Mounting & Balancing",
    "services.filter.repair": "Tire Repair",
    "services.filter.alignment": "Alignment & TPMS",
    "services.filter.storage": "Tire Hotel",

    "services.card1.title": "Seasonal Tire Change & Mounting",
    "services.card1.desc": "Fast, safe dismounting and mounting of summer, winter, and RunFlat tires on steel and alloy rims from 13\" to 22\".",
    "services.card1.f1": "Touchless rim-lip protection for alloy wheels",
    "services.card1.f2": "Tread depth & DOT age safety inspection",
    "services.card1.f3": "OEM-specified tire pressure calibration",
    "services.card1.price": "10 – 20 KM / wheel",

    "services.card2.title": "Tire Puncture Repair & Vulcanization",
    "services.card2.desc": "Expert repair of punctured and damaged tires using cold and hot vulcanization with permanent Rema Tip-Top patches.",
    "services.card2.f1": "Internal mushroom-plug patching (permanent method)",
    "services.card2.f2": "Hot vulcanization for sidewall reinforcement",
    "services.card2.f3": "Pressurized water-bath leak verification",
    "services.card2.price": "15 – 30 KM",

    "services.card3.title": "3D Computerized Wheel Balancing",
    "services.card3.desc": "Precision laser balancing for vibration-free highway driving and extended suspension life.",
    "services.card3.f1": "Hidden adhesive weights behind alloy spokes",
    "services.card3.f2": "Tire-to-rim match mounting optimization",
    "services.card3.f3": "Radial and lateral runout measurement",
    "services.card3.price": "5 – 10 KM / wheel",

    "services.card4.title": "Hunter 3D Laser Wheel Alignment",
    "services.card4.desc": "4-wheel computerized front and rear suspension alignment using high-definition targets to restore factory geometry.",
    "services.card4.f1": "Before & after printout diagnostic report",
    "services.card4.f2": "Steering wheel center-point calibration",
    "services.card4.f3": "Extends tire lifespan by up to 30%",
    "services.card4.price": "60 KM / vehicle",

    "services.card5.title": "Tire Hotel (Seasonal Storage)",
    "services.card5.desc": "Free up space at home. We store your off-season tires in climate-controlled racks protected from UV rays and moisture.",
    "services.card5.f1": "Machine wheel washing prior to storage",
    "services.card5.f2": "Official certificate with tread depth records",
    "services.card5.f3": "Priority booking slot for the next season",
    "services.card5.price": "50 KM / 6 months",

    "services.card6.title": "TPMS Sensors & Nitrogen Inflation",
    "services.card6.desc": "Diagnostics, programming, and replacement of TPMS pressure sensors plus pure nitrogen (N2) tire inflation.",
    "services.card6.f1": "TPMS battery life & signal diagnostics",
    "services.card6.f2": "Universal sensor coding for all European/Asian cars",
    "services.card6.f3": "Reduced tire temperatures during summer highway trips",
    "services.card6.price": "15 – 65 KM",

    // Services Page - Interactive Calculator & Pricing Table
    "services.calc.badge": "Interactive Cost Calculator",
    "services.calc.title": "Calculate Your Exact Service Total",
    "services.calc.subtitle": "Select your rim diameter, number of wheels, and optional add-ons.",
    "services.calc.rim_label": "1. Select Rim Diameter",
    "services.calc.count_label": "2. Number of Wheels",
    "services.calc.addons_label": "3. Optional Add-ons",
    "services.calc.addon.balance": "3D Laser Balancing (Recommended)",
    "services.calc.addon.valves": "New Rubber/Chrome Valves (Set of 4)",
    "services.calc.addon.nitrogen": "Pure Nitrogen (N2) Inflation",
    "services.calc.addon.alignment": "Hunter 3D Wheel Alignment",
    "services.calc.addon.hotel": "Tire Hotel Storage (6 Months)",
    "services.calc.summary_title": "Cost Breakdown",
    "services.calc.base_mount": "Mounting & dismounting:",
    "services.calc.addons_cost": "Selected add-ons:",
    "services.calc.total": "Total Estimated Price:",
    "services.calc.book_btn": "Book Appointment With This Quote",

    "services.table.title": "Transparent Price List by Rim Size (in KM / BAM)",
    "services.table.col_dim": "Rim Diameter",
    "services.table.col_steel": "Steel Rims (Set of 4)",
    "services.table.col_alloy": "Alloy Rims (Set of 4)",
    "services.table.col_single": "Single Wheel Price",
    "services.table.col_time": "Estimated Duration",
    "services.table.row1.dim": "13\" – 14\" (City Compact Cars)",
    "services.table.row2.dim": "15\" – 16\" (Hatchbacks & Sedans)",
    "services.table.row3.dim": "17\" – 18\" (Sedans & Crossovers)",
    "services.table.row4.dim": "19\" – 22\" (Performance / RunFlat)",
    "services.table.row5.dim": "Light Commercial Vans (C-Tires)",

    // Services FAQ
    "services.faq.title": "Frequently Asked Questions (FAQ)",
    "services.faq.q1": "How long does a full 4-tire swap and balance take?",
    "services.faq.a1": "With an online appointment, a complete 4-tire change including 3D computerized balancing takes between 20 and 30 minutes.",
    "services.faq.q2": "When are winter tires legally mandatory in Bosnia and Herzegovina?",
    "services.faq.a2": "In Bosnia and Herzegovina, winter equipment is mandatory by law from November 1 to April 1, regardless of weather conditions. We recommend switching as soon as daily temperatures drop below 7°C.",
    "services.faq.q3": "Do you service RunFlat tires and low-profile 20\"+ alloy wheels?",
    "services.faq.a3": "Yes! Our Corghi touchless machines are equipped with polymer rim protectors and pneumatic assist arms to safely mount RunFlat and UHP low-profile tires without any risk to your wheels.",

    // Appointments Page
    "appt.hero.badge": "Zero-Wait Online Booking",
    "appt.hero.title": "Book Your Service Appointment",
    "appt.hero.subtitle": "Complete the form below to reserve priority access to our service bay at your preferred date and time.",
    "appt.form.title": "Appointment Details",
    "appt.form.name": "Full Name *",
    "appt.form.name_ph": "e.g. Tarik Sorguč",
    "appt.form.phone": "Phone Number *",
    "appt.form.phone_ph": "+387 61 123 456",
    "appt.form.email": "Email Address *",
    "appt.form.email_ph": "your.email@example.com",
    "appt.form.plate": "License Plate (Optional)",
    "appt.form.plate_ph": "e.g. E12-K-345",
    "appt.form.vehicle": "Vehicle Type *",
    "appt.form.vehicle_car": "Passenger Car",
    "appt.form.vehicle_suv": "SUV / 4x4 Crossover",
    "appt.form.vehicle_van": "Commercial Van",
    "appt.form.rim": "Rim Size *",
    "appt.form.service": "Service Type *",
    "appt.form.service_ph": "Select a service...",
    "appt.form.srv_zamjena": "Seasonal Tire Change + Balancing",
    "appt.form.srv_balansiranje": "3D Computerized Wheel Balancing",
    "appt.form.srv_popravak": "Tire Puncture Repair & Vulcanization",
    "appt.form.srv_optika": "Hunter 3D Laser Wheel Alignment",
    "appt.form.srv_hotel": "Tire Change + Seasonal Tire Hotel",
    "appt.form.srv_tpms": "TPMS Sensor Diagnostics & Programming",
    "appt.form.date": "Preferred Date & Time *",
    "appt.form.notes": "Additional Notes",
    "appt.form.notes_ph": "Specify your tire size (e.g. 205/55 R16), whether your tires are stored in our Tire Hotel, or other requests...",
    "appt.form.submit": "Confirm Booking",
    "appt.form.error_msg": "Please fill in all required fields correctly.",
    "appt.form.success_title": "Appointment Confirmed!",
    "appt.form.success_desc": "Your booking has been scheduled and saved to your appointments list.",

    "appt.sidebar.why_title": "Why Book Online?",
    "appt.sidebar.b1": "Skip the queue — your service bay is reserved on time",
    "appt.sidebar.b2": "Complimentary espresso & high-speed Wi-Fi in our lounge",
    "appt.sidebar.b3": "Free visual brake pad & suspension safety check",
    "appt.saved.title": "My Upcoming Appointments",
    "appt.saved.empty": "You currently have no saved appointments on this device.",
    "appt.saved.clear": "Clear All",
    "appt.saved.cancel": "Cancel",
    "appt.saved.status": "Confirmed",

    // Location Page
    "loc.hero.badge": "Visit Our Sarajevo Workshop",
    "loc.hero.title": "Our Location & Directions",
    "loc.hero.subtitle": "Conveniently located on Sarajevo's main arterial road in Stup (Džemala Bijedića 160), featuring spacious free customer parking and easy access for all vehicles.",
    "loc.card.address_title": "Service Center Address",
    "loc.card.address_val": "Džemala Bijedića 160, 71000 Sarajevo, Bosnia & Herzegovina",
    "loc.card.landmarks": "500m from Stup Interchange • Opposite Bingo Center",
    "loc.card.hours_title": "Working Hours",
    "loc.card.mon_fri": "Monday – Friday:",
    "loc.card.sat": "Saturday:",
    "loc.card.sun": "Sunday:",
    "loc.card.closed": "Closed (24/7 Emergency Mobile Van Available)",
    "loc.card.map_btn": "Open in Google Maps",
    "loc.directions.title": "How to Reach Us From Across Sarajevo",
    "loc.dir1.title": "From City Center / Baščaršija",
    "loc.dir1.desc": "Drive west along Bulevar Meše Selimovića toward Ilidža, turn right at the RTV Dom intersection onto Džemala Bijedića Street and continue for 1.2 km. Our shop is on the right.",
    "loc.dir2.title": "From Ilidža / Blažuj",
    "loc.dir2.desc": "Enter Džemala Bijedića Street via the Stup Interchange. After 500 meters on the left, you will spot the orange-and-black FastLane pylon sign and parking entrance.",
    "loc.dir3.title": "From Highway A1 (Sarajevo West Exit)",
    "loc.dir3.desc": "Take the Briješće / Stup exit, follow signs toward Centar/Nedžarići, and arrive directly at our service bays in under 3 minutes.",

    // About Page
    "about.hero.badge": "Tradition, Innovation & Road Safety",
    "about.hero.title": "About Us — The FastLane Sarajevo Story",
    "about.hero.subtitle": "FastLane is Sarajevo's premier modern tire shop and wheel service center. Our team of certified specialists is dedicated to delivering top-tier craftsmanship and expert advice for safe driving in every season.",
    "about.story.title": "From a local garage to Sarajevo Canton's most advanced tire center",
    "about.story.p1": "Founded out of a passion for automotive engineering and road safety, FastLane Sarajevo has grown into a benchmark for reliability. Knowing the demands of Bosnian winters and mountain passes, we equipped our facility with the finest diagnostic technology on the market.",
    "about.story.p2": "Unlike traditional tire shops, every wheel at FastLane undergoes a strict quality protocol: from wire-brushing the wheel hub mounting surface, to laser road-force balancing, to torquing every lug nut exclusively with calibrated torque wrenches.",
    "about.equip.title": "Our Workshop Technology",
    "about.equip.1.title": "Hunter HawkEye Elite® 3D",
    "about.equip.1.desc": "The world's fastest and most accurate 4-camera high-definition laser wheel alignment system.",
    "about.equip.2.title": "Corghi Artiglio Master",
    "about.equip.2.desc": "Robotic touchless tire changers that eliminate any metal-to-metal contact with your alloy wheels.",
    "about.equip.3.title": "Hofmann Geodyna Laser",
    "about.equip.3.desc": "Diagnostic wheel balancers that detect micro-imbalances and pinpoint exact adhesive weight placement.",
    "about.team.title": "Meet Our Expert Team",
    "about.team.1.name": "Mujo Mujić",
    "about.team.1.role": "Owner & Director",
    "about.team.1.bio": "Master mechanic with decades of experience in the automotive industry. Chief quality standards controller for all service operations at FastLane Auto Center.",
    "about.team.2.name": "Adnan Mujić",
    "about.team.2.role": "Master Wheel Alignment Technician",
    "about.team.2.bio": "Over 14 years of experience calibrating suspension geometry for passenger, sport, and 4x4 off-road vehicles.",
    "about.team.3.name": "Kenan Karić",
    "about.team.3.role": "UHP / RunFlat & TPMS Specialist",
    "about.team.3.bio": "Certified technician specializing in low-profile rims up to 22 inches and electronic tire pressure sensor programming.",

    // Contact Page
    "contact.hero.badge": "We're Here to Help",
    "contact.hero.title": "Contact the FastLane Team",
    "contact.hero.subtitle": "Have a question about tire size availability, need a corporate fleet quote, or require roadside tire assistance? Reach out today.",
    "contact.card.phone": "Workshop & Bookings",
    "contact.card.emergency": "24/7 Mobile Tire Van (Sarajevo)",
    "contact.card.email": "Email Support & Quotes",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Full Name *",
    "contact.form.email": "Email Address *",
    "contact.form.phone": "Phone Number",
    "contact.form.subject": "Inquiry Subject *",
    "contact.form.sub_quote": "Tire price & availability inquiry",
    "contact.form.sub_service": "Service / 3D Alignment question",
    "contact.form.sub_b2b": "Corporate Fleet Maintenance (B2B)",
    "contact.form.sub_other": "Other / Feedback",
    "contact.form.message": "Your Message *",
    "contact.form.message_ph": "Enter your tire dimensions (e.g. 225/45 R17) or your question...",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Thank you! Your message has been sent successfully. Our team will reply shortly.",

    // Privacy Page
    "privacy.hero.badge": "Legal Documentation & Data Protection",
    "privacy.hero.title": "Privacy Policy",
    "privacy.hero.updated": "Last Updated: October 2026 • Compliant with BiH Personal Data Protection Law (ZZLP) & GDPR",
    "privacy.intro": "Your privacy is critically important to us. FastLane Sarajevo is committed to protecting and processing your personal data in strict compliance with the laws of Bosnia and Herzegovina and European GDPR principles.",
    "privacy.sec1.title": "1. What Data Do We Collect?",
    "privacy.sec1.body": "When you use our online appointment booking form or contact form, we collect only essential information: your full name, phone number, email address, and vehicle details (rim size, license plate) strictly for fulfilling your requested tire service.",
    "privacy.sec2.title": "2. How Do We Use Your Data?",
    "privacy.sec2.body": "Your data is used exclusively to confirm your service appointment, maintain records in our seasonal Tire Hotel (wheel set ownership tagging), and notify you when your vehicle is ready for pickup. We never sell or share your personal data with third parties.",
    "privacy.sec3.title": "3. Cookies & LocalStorage",
    "privacy.sec3.body": "Our web application uses your browser's local storage (localStorage) strictly for user experience preferences: remembering your chosen Light or Dark display theme, your selected language (Bosnian or English), and displaying your locally saved appointments.",
    "privacy.sec4.title": "4. Your Rights & Contact",
    "privacy.sec4.body": "You have the right at any time to request access to, correction of, or complete deletion of your personal data from our records by emailing info@fastlane.ba or visiting our branch at Džemala Bijedića 160, Sarajevo.",

    // Footer
    "footer.desc": "Sarajevo's leading modern tire shop and wheel service center. State-of-the-art equipment, certified technicians, and uncompromising care for your safety on the road.",
    "footer.nav_title": "Quick Links",
    "footer.srv_title": "Core Services",
    "footer.contact_title": "Contact & Hours",
    "footer.rights": "© 2026 FastLane Sarajevo (Tarik Tires). All rights reserved.",
    "footer.capstone": "University Capstone Project — Frontend Web Programming (IBU Sarajevo)"
  }
};

// Expose FastLaneApp globally for theme & i18n
window.FastLaneApp = {
  getTheme() {
    return localStorage.getItem("fastlane_theme") || localStorage.getItem("theme") || "light";
  },

  setTheme(theme) {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    html.setAttribute("data-theme", theme);
    html.setAttribute("data-bs-theme", theme);
    localStorage.setItem("fastlane_theme", theme);
    localStorage.setItem("theme", theme);
    this.updateThemeButtons(theme);
  },

  toggleTheme() {
    const next = this.getTheme() === "light" ? "dark" : "light";
    this.setTheme(next);
  },

  updateThemeButtons(theme) {
    const lang = this.getLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.bs;
    const buttons = document.querySelectorAll("#theme-toggle, .theme-toggle-btn");
    buttons.forEach((btn) => {
      const icon = btn.querySelector("i");
      const labelSpan = btn.querySelector(".theme-btn-text");
      if (icon) {
        icon.className = theme === "dark" ? "fas fa-sun text-amber-400" : "fas fa-moon text-slate-700";
      }
      if (labelSpan) {
        labelSpan.textContent = theme === "dark" ? dict["nav.theme_light"] : dict["nav.theme_dark"];
      }
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? dict["nav.theme_light"] : dict["nav.theme_dark"]
      );
      btn.setAttribute(
        "title",
        theme === "dark" ? dict["nav.theme_light"] : dict["nav.theme_dark"]
      );
    });
  },

  getLang() {
    const saved = localStorage.getItem("fastlane_lang");
    return saved === "en" || saved === "bs" ? saved : "bs";
  },

  t(key) {
    const lang = this.getLang();
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.bs[key] || key;
  },

  setLang(lang) {
    const validLang = lang === "en" ? "en" : "bs";
    localStorage.setItem("fastlane_lang", validLang);
    document.documentElement.setAttribute("lang", validLang);

    // Update page title if data-page-title-key is set on <html> or <body>
    const titleKey =
      document.documentElement.getAttribute("data-title-key") ||
      document.body?.getAttribute("data-title-key");
    if (titleKey && TRANSLATIONS[validLang][titleKey]) {
      document.title = TRANSLATIONS[validLang][titleKey];
    }

    // Translate all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = TRANSLATIONS[validLang][key];
      if (text !== undefined) {
        el.textContent = text;
      }
    });

    // Translate all placeholders with data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const text = TRANSLATIONS[validLang][key];
      if (text !== undefined) {
        el.setAttribute("placeholder", text);
      }
    });

    // Update language toggle buttons
    document.querySelectorAll("#lang-toggle, .lang-toggle-btn").forEach((btn) => {
      const bsBadge = btn.querySelector(".lang-bs");
      const enBadge = btn.querySelector(".lang-en");
      if (bsBadge && enBadge) {
        if (validLang === "bs") {
          bsBadge.className = "lang-bs px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-bold text-xs transition-all";
          enBadge.className = "lang-en px-2 py-0.5 rounded-md text-slate-600 dark:text-slate-400 font-medium text-xs transition-all";
        } else {
          enBadge.className = "lang-en px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-bold text-xs transition-all";
          bsBadge.className = "lang-bs px-2 py-0.5 rounded-md text-slate-600 dark:text-slate-400 font-medium text-xs transition-all";
        }
      } else {
        btn.textContent = validLang === "bs" ? "BS | EN" : "EN | BS";
      }
      btn.setAttribute("aria-label", TRANSLATIONS[validLang]["nav.lang_label"]);
    });

    // Refresh theme button labels for new language
    this.updateThemeButtons(this.getTheme());

    // Dispatch custom event so dynamic components (calculators, saved appointments) re-render
    window.dispatchEvent(new CustomEvent("fastlane:langchange", { detail: { lang: validLang } }));
  },

  toggleLang() {
    const next = this.getLang() === "bs" ? "en" : "bs";
    this.setLang(next);
  }
};

// Apply theme immediately on script load to prevent flash
(function initThemeImmediate() {
  const savedTheme = window.FastLaneApp.getTheme();
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  document.documentElement.setAttribute("data-theme", savedTheme);
  document.documentElement.setAttribute("data-bs-theme", savedTheme);
})();

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Theme & Language on DOM Ready
  window.FastLaneApp.setTheme(window.FastLaneApp.getTheme());
  window.FastLaneApp.setLang(window.FastLaneApp.getLang());

  // Bind Theme Toggle Buttons
  document.querySelectorAll("#theme-toggle, .theme-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.FastLaneApp.toggleTheme();
    });
  });

  // Bind Language Toggle Buttons
  document.querySelectorAll("#lang-toggle, .lang-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.FastLaneApp.toggleLang();
    });
  });
});
