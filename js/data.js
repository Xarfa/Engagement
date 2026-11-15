/* Engagement — Rattry Wu. Content in English and German.
   UI strings: SITE.i18n · Category labels: SITE.categories
   Stories: SITE.stories (each carries `en` and `de` text blocks).
   Figure images in assets/stories/<slug>/ are freely licensed
   (Wikimedia Commons — credit in the caption where required).
   Story flags: `hidden: true` keeps a story out of the grid, search and
   story pages without deleting its data or assets.
   Story logos (assets/stories/<slug>/logo-*.png, background-removed):
   `logos.card` is overlaid top-centre on the home card (the white organiser
   mark); `logos.hero` is the full set stacked at the bottom-left of the story
   cover, listed BOTTOM-UP (first entry renders lowest).
   The language switch is stored in localStorage("engagement-lang"). */

window.SITE = {
  defaultLang: "en",

  i18n: {
    en: {
      nav_contact: "Contact",
      back_all: "All engagements",
      intro: "A written record of the engagements behind my CV — from conference booths to community classrooms.",
      btn_contact: "Contact me",
      contact_label: "Contact",
      contact_title: "Send a message.",
      form_email: "Email",
      form_message: "Message",
      form_send: "Send message",
      by: "By",
      next_label: "Next engagement",
      back_link: "Back to the archive",
      search_label: "Search the archive",
      search_ph: "Try “leadership”, “booth”…",
      hint_open: "to open",
      hint_move: "to move",
      hint_close: "to close",
      count_for: "{n} engagements for “{q}”",
      count_total: "{n} engagements",
      empty_1: "Nothing under ",
      empty_2: " yet. Try a category, a place, or a word from a story.",
      err_title: "This engagement does not exist.",
      err_body: "It may have been renamed, or the link is incomplete.",
      err_back: "Back to all engagements",
      privacy_aria: "Private photo — activate to view",
      privacy_hint_hover: "Private · hover to view",
      privacy_hint_tap: "Private · tap to view"
    },
    de: {
      nav_contact: "Kontakt",
      back_all: "Alle Engagements",
      intro: "Ein schriftliches Protokoll der Engagements hinter meinem Lebenslauf — von Konferenzständen bis zu Klassenzimmern.",
      btn_contact: "Kontakt aufnehmen",
      contact_label: "Kontakt",
      contact_title: "Schreiben Sie mir.",
      form_email: "E-Mail",
      form_message: "Nachricht",
      form_send: "Nachricht senden",
      by: "Von",
      next_label: "Nächstes Engagement",
      back_link: "Zurück zum Archiv",
      search_label: "Das Archiv durchsuchen",
      search_ph: "Stichwort eingeben …",
      hint_open: "öffnen",
      hint_move: "auswählen",
      hint_close: "schließen",
      count_for: "{n} Engagements für „{q}“",
      count_total: "{n} Engagements",
      empty_1: "Noch nichts unter ",
      empty_2: " gefunden. Versuchen Sie eine Kategorie, einen Ort oder ein Wort.",
      err_title: "Dieses Engagement existiert nicht.",
      err_body: "Es wurde möglicherweise umbenannt oder der Link ist unvollständig.",
      err_back: "Zurück zu allen Engagements",
      privacy_aria: "Privates Foto — zum Ansehen aktivieren",
      privacy_hint_hover: "Privat · zum Ansehen darüberfahren",
      privacy_hint_tap: "Privat · zum Ansehen tippen"
    }
  },

  categories: {
    en: { Volunteer: "Volunteer", Engagement: "Engagement", Leadership: "Leadership", Classes: "Classes" },
    de: { Volunteer: "Ehrenamt", Engagement: "Engagement", Leadership: "Leitung", Classes: "Kurse" }
  },

  stories: [
    {
      slug: "atox-ai4climate-hackathon",
      category: "Volunteer",
      date: "2026-11-12",
      location: { en: "Online", de: "Online" },
      logos: {
        card: { file: "logo-atox.png", alt: "ATOX", top: 11.5 },
        hero: [
          { file: "logo-cop31.png", alt: "COP31 Türkiye", w: 200 }
        ]
      },
      figures: [
        { file: "fig-1.jpg", at: 1, ratio: "1000/1413", en: "Participant handbook, cover.", de: "Teilnehmerhandbuch, Deckblatt." },
        { file: "fig-2.jpg", at: 1, ratio: "1000/1413", en: "Welcome and event overview.", de: "Willkommen und Veranstaltungsüberblick." },
        { file: "fig-3.jpg", at: 1, ratio: "1000/1413", en: "Venue, logistics, and what to bring.", de: "Austragungsort, Logistik und was mitzunehmen ist." },
        { file: "fig-4.jpg", at: 2, ratio: "1000/1127", privacy: true, en: "The preheat meeting — atox.world on screen share.", de: "Das Preheat-Treffen — atox.world auf dem geteilten Bildschirm." },
        { file: "fig-5.jpg", at: 2, ratio: "1000/1193", privacy: true, en: "Opening & Challenge Briefing, in Türkiye and Beijing time.", de: "Opening & Challenge Briefing, in Türkei- und Peking-Zeit." },
        { file: "fig-6.jpg", at: 2, ratio: "1000/530", privacy: true, en: "The mentoring session opens — twenty participants, cameras mostly off.", de: "Die Mentoring-Session beginnt — zwanzig Teilnehmende, meist ohne Kamera." },
        { file: "fig-7.jpg", at: 2, ratio: "1000/455", privacy: true, en: "In the breakout room with mentor Jasmeet Rai.", de: "Im Breakout-Room bei Mentorin Jasmeet Rai." },
        { file: "fig-8.jpg", at: 2, ratio: "1000/1130", en: "Team P05’s demo: Proof API, an AI climate-action verifier.", de: "Das Demo von Team P05: Proof API, ein KI-Verifizierer für Klimaschutzaktionen." },
        { file: "fig-9.jpg", at: 2, ratio: "1000/779", en: "Proof API’s analytics — score calibration and carbon reference factors.", de: "Proof APIs Analytics — Score-Kalibrierung und CO₂-Referenzfaktoren." },
        { file: "fig-10.jpg", at: 2, ratio: "1000/1107", privacy: true, en: "Proof API’s home: local action, a clearer record.", de: "Proof APIs Startseite: lokale Aktionen, ein klareres Protokoll." },
        { file: "fig-11.jpg", at: 2, ratio: "1000/1131", en: "A quieter breakout room, questions in the chat.", de: "Ein ruhigerer Breakout-Room, Fragen im Chat." },
        { file: "fig-12.jpg", at: 2, ratio: "1000/880", privacy: true, en: "The Climate Adaptation & Resilience room, three of us.", de: "Der Raum zu Klimaanpassung und Resilienz, wir zu dritt." },
        { file: "fig-13.jpg", at: 2, ratio: "1000/1294", privacy: true, en: "The review queue flags duplicate submissions with similarity scores.", de: "Die Review-Queue markiert doppelte Einreichungen mit Ähnlichkeitswerten." },
        { file: "fig-14.jpg", at: 2, ratio: "1000/839", en: "The Climate Education room — a drought game, two rule-based farm agents over twelve years.", de: "Der Raum zu Klimabildung — ein Dürre-Spiel, zwei regelbasierte Farm-Agents über zwölf Jahre." },
        { file: "fig-15.jpg", at: 2, ratio: "1000/1128", en: "Team P35’s roster — ASTER Climate, occupational safety under wildfire risk.", de: "Das Teamblatt von P35 — ASTER Climate, Arbeitsschutz bei Waldbrandgefahr." },
        { file: "fig-16.jpg", at: 2, ratio: "1000/1165", en: "ASTER Climate’s pitch: every worker safe, in every workplace.", de: "Der Pitch von ASTER Climate: jeder Arbeiter sicher, an jedem Arbeitsplatz." },
        { file: "fig-17.jpg", at: 2, ratio: "1000/1128", en: "The live prototype: a wildfire-risk briefing for a crew at Kemer.", de: "Der Live-Prototyp: eine Waldbrand-Briefing für eine Crew in Kemer." },
        { file: "fig-18.jpg", at: 2, ratio: "1000/1128", privacy: true, en: "Pitch feedback in the room; the team coordinates on WhatsApp between sessions.", de: "Feedback zum Pitch im Raum; das Team koordiniert sich zwischendurch per WhatsApp." },
        { file: "fig-19.jpg", at: 2, ratio: "1000/1128", privacy: true, en: "Mentor Jasmeet Rai: “that’s a really good pitch. Well done.”", de: "Mentorin Jasmeet Rai: ‚das ist ein wirklich guter Pitch. Gut gemacht.‘" },
        { file: "fig-20.jpg", at: 2, ratio: "1000/1128", privacy: true, en: "Mentor Oliver Bonallack joins the room.", de: "Mentor Oliver Bonallack kommt in den Raum." }
      ],
      en: {
        title: "Volunteer in AI4Climate hackathon during COP31",
        summary: "Volunteering at ATOX’s AI4Climate hackathon for COP31 — and the two breakrooms I hosted, in pure English and in fields far from my own.",
        body: [
          "An AI4Climate hackathon staged by ATOX — participants collaborate with teammates to create a product demo (in whatever hardware or software) in a limited time (within 2 days). ATOX is a hackathon association established by students from Tsinghua and Peking University, possessing strong Generation Z genes. It seems they are desperately good at digging up good ideas, though more emphasis was placed on social attributes. The theme ‘AI4Climate’ chased the hotspot of COP31 (the 31st Conference of the Parties to the United Nations Framework Convention on Climate Change), which started on Nov 9th and ends on the 20th in Antalya, Türkiye.",
          "Before the hackathon started, our organisers held two online meetings. The first one was a preheating activity: we set up seven breakrooms for different topics (topics 1 & 2 were mine — 1, Climate Adaptation & Resilience; 2, Clean Energy & Low-Carbon Transition). It was truly a challenge for me to host the breakrooms — not only the ‘PURE’ English communication, but also a field completely distinct from my own (my major is agronomy science)."
        ],
        quote: { text: "ATOX is a hackathon association established by students from Tsinghua and Peking University, possessing strong Generation Z genes.", by: "First impressions of ATOX" }
      },
      de: {
        title: "Freiwilliger beim AI4Climate-Hackathon während der COP31",
        summary: "Als Freiwilliger beim AI4Climate-Hackathon von ATOX für die COP31 — und in den zwei Breakrooms, die ich moderiert habe: reines Englisch, in Fachgebieten fern von meinem eigenen.",
        body: [
          "Ein AI4Climate-Hackathon, veranstaltet von ATOX — die Teilnehmenden erarbeiten im Team ein Produktdemo (in beliebiger Hardware oder Software) in begrenzter Zeit (zwei Tage). ATOX ist eine Hackathon-Vereinigung von Studierenden der Tsinghua- und der Peking-Universität, mit starken Gen-Z-Genen. Sie scheinen verblüffend gut darin, gute Ideen auszugraben, auch wenn mehr Gewicht auf die soziale Seite gelegt wird. Das Thema „AI4Climate“ jagte den Hotspot der COP31 (der 31. Vertragsstaatenkonferenz der UN-Klimarahmenkonvention), die am 9. November in Antalya, Türkei, begann und bis zum 20. dauert.",
          "Vor Beginn des Hackathons veranstalteten die Organisatoren zwei Online-Treffen. Das erste war eine Aufwärmrunde: Wir richteten sieben Breakrooms zu verschiedenen Themen ein (Thema 1 und 2 waren meine — 1, Climate Adaptation & Resilience; 2, Clean Energy & Low-Carbon Transition). Diese Breakrooms zu moderieren war für mich eine echte Herausforderung — nicht nur wegen des „reinen“ Englisch, sondern auch wegen eines Fachgebiets, das meinem eigenen völlig fernliegt (mein Studiengang ist Agrarwissenschaft)."
        ],
        quote: { text: "ATOX ist eine Hackathon-Vereinigung von Studierenden der Tsinghua- und der Peking-Universität, mit starken Gen-Z-Genen.", by: "Erste Eindrücke von ATOX" }
      }
    },

    {
      slug: "innofair-2026",
      category: "Volunteer",
      date: "2026-10-28",
      location: { en: "Nanjing", de: "Nanjing" },
      logos: {
        card: { file: "logo-messe.svg", alt: "Messe Stuttgart", w: 22 },
        hero: [
          { file: "logo-messe.svg", alt: "Messe Stuttgart", w: 60 }
        ]
      },
      figures: [
        { file: "fig-1.jpg", at: 1, en: "The exhibition centre at dusk.", de: "Das Messegelände in der Dämmerung." },
        { file: "fig-2.jpg", at: 1, ratio: "16/9", en: "The fair plan — participating enterprises across the halls.", de: "Der Messeplan — die teilnehmenden Unternehmen der Hallen." },
        { file: "fig-9.jpg", at: 1, ratio: "3/4", privacy: true, en: "A calligraphy robot at work.", de: "Ein Kalligraphie-Roboter bei der Arbeit." },
        { file: "fig-3.jpg", at: 2, ratio: "3/4", privacy: true, en: "MY SYNERGY’s flyer: OEM / ODM partnerships for biomedical software.", de: "Der Flyer von MY SYNERGY: OEM-/ODM-Partnerschaften für biomedizinische Software." },
        { file: "fig-4.jpg", at: 2, privacy: true, en: "With Mladen Georgiev, CTO of MY SYNERGY, at the Bulgaria booth.", de: "Mit Mladen Georgiev, CTO von MY SYNERGY, am Bulgarien-Stand." },
        { file: "fig-5.jpg", at: 3, ratio: "3/4", privacy: true, en: "The Spain zone — energy, power and environmental protection.", de: "Der Spanien-Bereich — Energie, Strom und Umweltschutz." },
        { file: "fig-6.jpg", at: 3, privacy: true, en: "A Cyprus University of Technology key ring from the CUTech stand.", de: "Ein Schlüsselanhänger der Cyprus University of Technology vom CUTech-Stand." },
        { file: "fig-7.jpg", at: 3, privacy: true, en: "Robotic hands and VR simulation gloves among the emerging technologies.", de: "Robotische Hände und VR-Simulationshandschuhe unter den neuen Technologien." },
        { file: "fig-8.jpg", at: 3, privacy: true, en: "A land-air ‘Transformer’ aircraft on the fair floor.", de: "Ein Land-Luft-‚Transformer‘-Fluggerät auf der Messe." },
        { file: "fig-10.jpg", at: 4, privacy: true, en: "The volunteer table between shifts.", de: "Der Freiwilligentisch zwischen den Schichten." },
        { file: "fig-11.jpg", at: 4, privacy: true, en: "With the volunteer team and new acquaintances from the stands.", de: "Mit dem Freiwilligenteam und neuen Bekannten von den Ständen." },
        { file: "fig-12.jpg", at: 4, privacy: true, center: true, ratio: "1400/1980", en: "The volunteer certificate, issued by Messe Stuttgart.", de: "Das Freiwilligenzertifikat der Messe Stuttgart." }
      ],
      en: {
        title: "Volunteer in 2026 Innovation Fair, Nanjing",
        summary: "Booth translator for Bulgaria’s MY SYNERGY at the 6th Innovation Fair in Nanjing — and the classmates heading the same way.",
        body: [
          "The 6th Innovation Fair took place from 26 to 30 October 2026. The fair promotes international business development, uncovers sourcing opportunities, and provides access to the Chinese market while allowing opportunities for the representation and distribution of Chinese businesses in Europe.",
          "I was the booth translator for MY SYNERGY, a software company from Bulgaria. They offer biomedical software services and were looking for OEM / ODM (similar to a medical device contract manufacturer) partnerships. I had a friendly exchange with the chief technology officer, Mladen Georgiev.",
          "At the fair, I communicated with many institutions, such as Cyprus University of Technology (CUTech — I've learned about their PhD program and collaboration with Hangzhou Dianzi University). Certainly, there were lots of manufacturing enterprises and emerging technologies.",
          "Above all, I had an in-depth conversation with Huayue Cheng, a female classmate from our grade and major. I once knew her name from the list of students dispatched to UN recruitment (at Suzhou University) from the agricultural college. I wrote 'I possessed the experience of FAO volunteer' in the remarks while she wrote 'I went to the University of Alberta for an exchange' (it was a few days later that I came across this CSC project, while she had been preparing for it since her freshman year). We talked about the application for summer research internships abroad again, and both of us want to enter the programs of EPFL and ISTA."
        ]
      },
      de: {
        title: "Freiwilliger bei der 2026 Innovation Fair, Nanjing",
        summary: "Standdolmetscher für MY SYNERGY aus Bulgarien auf der 6. Innovation Fair in Nanjing — und Kommilitonen auf denselben Wegen.",
        body: [
          "Die 6. Innovation Fair fand vom 26. bis 30. Oktober 2026 statt. Die Messe fördert die internationale Geschäftsentwicklung, erschließt Beschaffungsmöglichkeiten und eröffnet den Zugang zum chinesischen Markt, während sie chinesischen Unternehmen zugleich Möglichkeiten zu Repräsentanz und Vertrieb in Europa eröffnet.",
          "Ich war Standdolmetscher für MY SYNERGY, ein Softwareunternehmen aus Bulgarien. Es bietet biomedizinische Software-Dienstleistungen an und suchte OEM-/ODM-Partnerschaften (vergleichbar mit einem Lohnhersteller für Medizinprodukte). Mit dem Chief Technology Officer, Mladen Georgiev, verband mich ein freundlicher Austausch.",
          "Auf der Messe kam ich mit vielen Institutionen ins Gespräch, etwa der Cyprus University of Technology (CUTech — ich habe von ihrem PhD-Programm und der Zusammenarbeit mit der Hangzhou Dianzi University erfahren). Natürlich gab es auch viele Fertigungsunternehmen und aufstrebende Technologien.",
          "Vor allem hatte ich ein ausführliches Gespräch mit Huayue Cheng, einer Kommilitonin aus meinem Jahrgang und Studiengang. Ihren Namen kannte ich von der Liste der Studierenden, die vom agrarwissenschaftlichen College zur UN-Rekrutierung (an der Suzhou University) entsandt worden war. Ich hatte in der Bemerkung ‚I possessed the experience of FAO volunteer‘ geschrieben, während sie ‚I went to the University of Alberta for an exchange‘ schrieb (ein paar Tage später stieß ich auf dieses CSC-Projekt; sie bereitete sich seit ihrem ersten Studienjahr darauf vor). Wir sprachen erneut über Bewerbungen für sommerliche Forschungspraktika im Ausland, und beide wollen in die Programme von EPFL und ISTA."
        ]
      }
    },

    {
      slug: "two-online-rooms",
      hidden: true,
      category: "Volunteer",
      date: "2026-11-12",
      location: { en: "Online", de: "Online" },
      figures: [
        { file: "fig-1.jpg", en: "Notes between sessions.", de: "Notizen zwischen den Sitzungen." },
        { file: "fig-2.jpg", en: "The session interface, cameras off.", de: "Die Sitzungsoberfläche, Kameras aus." }
      ],
      en: {
        title: "Two Online Rooms",
        summary: "Two online meetings in one evening — a climate-and-AI conference and a FAO youth session — and what registers from each.",
        body: [
          "Two online meetings in one evening, on two platforms. The first was a conference on climate and artificial intelligence: breakout groups assigned by discipline, and mine was physics — three weeks of vocabulary I do not have, spoken at speed.",
          "What salvaged the hour was a segment later in the session in my own language, and the realisation that the difficulty was not the science but the register. Everyone spoke in abbreviations for projects and models they assumed the room already knew. Conference English is a dialect. It is learned the way any dialect is — by sitting in rooms where it is the only currency.",
          "The second meeting, for an FAO youth programme, ran at the same hour: screens shared, cameras off, a facilitator counting hands before each question.",
          "A colleague recorded one of the sessions so the other could be attended properly. By the end I understood that attending two rooms at once teaches the same lesson twice: arrive early, read the agenda twice, and be the person who writes things down."
        ],
        quote: { text: "Conference English is a dialect. It is learned by sitting in rooms where it is the only currency.", by: "From the evening’s notes" }
      },
      de: {
        title: "Zwei Online-Räume",
        summary: "Zwei Online-Sitzungen an einem Abend — eine Klima-KI-Konferenz und eine FAO-Jugendsession — und was von beiden hängen bleibt.",
        body: [
          "Zwei Online-Sitzungen an einem Abend, auf zwei Plattformen. Die erste war eine Konferenz zu Klima und künstlicher Intelligenz: Arbeitsgruppen nach Fachrichtung, meine war Physik — drei Wochen Wortschatz, die ich nicht habe, schnell gesprochen.",
          "Gerettet hat die Stunde ein Abschnitt später in der Sitzung, in meiner eigenen Sprache, und die Erkenntnis, dass die Schwierigkeit nicht die Wissenschaft war, sondern das Register. Alle sprachen in Abkürzungen für Projekte und Modelle, die der Raum angeblich kannte. Konferenzenglisch ist ein Dialekt. Man lernt ihn so wie jeden Dialekt — indem man in Räumen sitzt, in denen er die einzige Währung ist.",
          "Die zweite Sitzung, für ein FAO-Jugendprogramm, lief zur selben Stunde: geteilte Bildschirme, Kameras aus, eine Moderatorin, die vor jeder Frage die Hände zählte.",
          "Eine Kollegin hat eine der Sitzungen aufgezeichnet, damit die andere besucht werden konnte. Am Ende hatte ich verstanden, dass zwei Räume gleichzeitig dieselbe Lektion zweimal unterrichten: früh da sein, die Agenda zweimal lesen und die Person sein, die mitschreibt."
        ],
        quote: { text: "Konferenzenglisch ist ein Dialekt. Man lernt ihn, indem man in Räumen sitzt, in denen er die einzige Währung ist.", by: "Aus den Notizen des Abends" }
      }
    },

    {
      slug: "un-careers-season",
      hidden: true,
      category: "Engagement",
      date: "2026-11-06",
      location: { en: "Suzhou & Nanjing", de: "Suzhou und Nanjing" },
      figures: [
        { file: "fig-1.jpg", en: "A meeting room at the United Nations headquarters.", de: "Ein Sitzungssaal im Hauptquartier der Vereinten Nationen.", credit: "Photo: Patrick Gruban (CC BY-SA 2.0), Wikimedia Commons" },
        { file: "fig-2.jpg", en: "An audience between sessions.", de: "Das Publikum zwischen den Sitzungen.", credit: "Photo: Gangulybiswarup (CC BY 4.0), Wikimedia Commons" }
      ],
      en: {
        title: "A Season of UN Career Events",
        summary: "Three events about working inside the UN system in six weeks — what recurs at all of them, and what it costs.",
        body: [
          "Between late October and early November I attended three events about careers in international organizations: an outreach day with presentations from FAO and WFP, an evening on the One-Health approach with FAO staff, and a lecture by a WTO counselor for students in an internship pipeline.",
          "The agencies describe themselves against each other. WFP moves food to emergencies; FAO works upstream, on the systems that produce it. The FAO presenter read out the specialisms the organisation recruits for, and agronomy was on most lines.",
          "At the WFP table the conversation was shorter: convoys, warehouses, deadlines. Between sessions, three routes into the system came up again and again — a year-long internship taken mid-degree, a master’s at the UN University, or entry after a doctorate. None of them are short, and all were described by people already inside, with the calm of someone reading a timetable.",
          "At the WTO lecture the counselor noted that the internship pipeline for economics graduates is richer than the agricultural agencies’, simply because the funding is richer. The coordinator running our pipeline had placed twelve of fifteen candidates that year. The number was offered plainly, without the usual encouragement.",
          "What stays is not enthusiasm. It is a schedule: one language to finish, one application to write, one thesis to complete first."
        ],
        quote: { text: "The distance between a student desk and the system is measured in years, not kilometres.", by: "From the season’s notes" }
      },
      de: {
        title: "Eine Saison voller UN-Karriereveranstaltungen",
        summary: "Drei Veranstaltungen zum Arbeiten im UN-System in sechs Wochen — was sich wiederholt und was es kostet.",
        body: [
          "Zwischen Ende Oktober und Anfang November besuchte ich drei Veranstaltungen zum Arbeiten in internationalen Organisationen: einen Outreach-Tag mit Präsentationen von FAO und WFP, einen Abend zum One-Health-Ansatz mit FAO-Mitarbeitenden und einen Vortrag einer WTO-Botschafterin für Studierende in einem Praktikumsprogramm.",
          "Die Organisationen beschreiben sich gegeneinander. Das WFP bringt Lebensmittel in Notgebiete; die FAO arbeitet flussaufwärts, an den Systemen, die sie hervorbringen. Die FAO-Referentin las die Fachrichtungen vor, für die die Organisation rekrutiert — Agronomie stand auf fast jeder Zeile.",
          "Am WFP-Tisch fiel das Gespräch kürzer aus: Konvois, Lagerhäuser, Fristen. Zwischen den Sitzungen kamen drei Wege ins System immer wieder vor — ein einjähriges Praktikum mitten im Studium, ein Master an der UN-Universität oder der Einstieg nach der Promotion. Keiner ist kurz, und alle wurden von Leuten beschrieben, die schon drin sind, mit der Ruhe von Menschen, die einen Fahrplan vorlesen.",
          "Beim WTO-Vortrag bemerkte die Botschafterin, dass die Praktikumspipeline für Ökonomie-Absolventen reicher ist als die der Agrarorganisationen — schlicht, weil die Finanzierung reicher ist. Die Koordinatorin unserer Pipeline hatte in diesem Jahr zwölf von fünfzehn Kandidaten platziert. Die Zahl wurde schlicht genannt, ohne die übliche Ermunterung.",
          "Was bleibt, ist keine Begeisterung. Es ist ein Fahrplan: eine Sprache zu Ende bringen, einen Antrag schreiben, zuerst eine Abschlussarbeit fertigstellen."
        ],
        quote: { text: "Der Abstand zwischen einem Studiertisch und dem System wird in Jahren gemessen, nicht in Kilometern.", by: "Aus den Notizen der Saison" }
      }
    },

    {
      slug: "innofair-stuttgart",
      hidden: true,
      category: "Engagement",
      date: "2026-10-28",
      location: { en: "Trade-fair grounds", de: "Messegelände" },
      figures: [
        { file: "fig-1.jpg", en: "Stands before the doors open.", de: "Stände, bevor die Türen öffnen." },
        { file: "fig-2.jpg", en: "Between two meetings on the floor.", de: "Zwischen zwei Gesprächen auf der Messe." }
      ],
      en: {
        title: "Three Days at a China–EU Trade Fair",
        summary: "One volunteer day at the sixth InnoFair, a China–EU cross-border exchange fair — interpreting, repetition, and the seam between two groups.",
        body: [
          "The sixth InnoFair is a China–EU cross-border exchange fair organised with a German trade-fair group. I volunteered for one of its days: doors at nine, interpreters moving between stands, students from three universities on the floor.",
          "I was placed with a Bulgarian software company looking for Chinese biomedical-hardware partners. Most of the work was repetition — explaining the same need a dozen times in two languages, walking the same aisles, reintroducing the same people to each other. Interpreting at a fair is less about language than about stamina.",
          "One observation was hard to avoid: the European delegations mostly talked to themselves, closing into circles of four or five, while Chinese visitors circulated around them without ever meeting. The purpose of the fair was the seam between the two groups, and the seam stayed narrow all afternoon.",
          "By evening I had a list of introductions that had worked, a fair amount of vocabulary I did not own at breakfast, and one Bulgarian greeting I can still pronounce."
        ],
        quote: { text: "The purpose of the fair was the seam between the two groups.", by: "Volunteer’s notes" }
      },
      de: {
        title: "Drei Tage auf einer China-EU-Messe",
        summary: "Ein Freiwilligentag auf der sechsten InnoFair, einer China-EU-Austauschmesse — Dolmetschen, Wiederholung und die Nahtstelle zwischen zwei Gruppen.",
        body: [
          "Die sechste InnoFair ist eine China-EU-Austauschmesse, organisiert mit einer deutschen Messegesellschaft. Ich habe einen ihrer Tage als Freiwilliger begleitet: Türen um neun, Dolmetscher zwischen den Ständen, Studierende von drei Universitäten auf dem Gelände.",
          "Ich war einer bulgarischen Softwarefirma zugeteilt, die chinesische Partner für Biomedizintechnik suchte. Die meiste Arbeit war Wiederholung — dasselbe Anliegen ein Dutzend Mal in zwei Sprachen erklären, dieselben Gänge entlanggehen, dieselben Menschen einander erneut vorstellen. Dolmetschen auf einer Messe ist weniger eine Frage der Sprache als der Ausdauer.",
          "Eine Beobachtung ließ sich nicht vermeiden: Die europäischen Delegationen redeten meist mit sich selbst und schlossen sich zu Kreisen von vier oder fünf, während chinesische Besucher um sie herumliefen, ohne einander je zu begegnen. Der Sinn der Messe war die Naht zwischen den beiden Gruppen — und die Naht blieb den ganzen Nachmittag schmal.",
          "Am Abend hatte ich eine Liste der gelungenen Kontakte, eine Menge Vokabeln, die mir zum Frühstück noch nicht gehört hatten, und eine bulgarische Begrüßung, die ich immer noch aussprechen kann."
        ],
        quote: { text: "Der Sinn der Messe war die Naht zwischen den beiden Gruppen.", by: "Notizen des Freiwilligen" }
      }
    },

    {
      slug: "tedx-nanjing-2026",
      category: "Volunteer",
      date: "2026-10-25",
      location: { en: "Nanjing", de: "Nanjing" },
      logos: {
        card: { file: "logo-tedx.svg", alt: "TEDxNanjing", w: 22, top: 10.2 },
        hero: [
          { file: "logo-tedx.svg", alt: "TEDxNanjing", w: 40 }
        ]
      },
      figures: [
        { file: "fig-2.jpg?v=2", at: 1, en: "The auditorium at setup — a rehearsal deck already on the screen.", de: "Der Saal beim Aufbau — ein Probefoliensatz schon auf der Leinwand." },
        { file: "fig-3.jpg", at: 2, en: "The stage ready: the red circle and the TEDxNanjing letters.", de: "Die fertige Bühne: der rote Kreis und die TEDxNanjing-Buchstaben." },
        { file: "fig-4.jpg", at: 2, en: "The crew in the empty auditorium, an hour before doors.", de: "Das Team im leeren Saal, eine Stunde vor dem Einlass." },
        { file: "fig-5.jpg", at: 2, privacy: true, en: "The check-in desk opens at 13:30.", de: "Der Check-in öffnet um 13:30." },
        { file: "fig-6.jpg", at: 2, privacy: true, en: "Rehearsal on the red circle, hours before doors.", de: "Probe auf dem roten Kreis, Stunden vor dem Einlass." },
        { file: "fig-7.jpg", at: 2, en: "The hosts open the afternoon.", de: "Die Moderation eröffnet den Nachmittag." },
        { file: "fig-8.jpg", at: 2, en: "Duan Xinxing, TEDxNanjing’s founder, on stage.", de: "Duan Xinxing, Gründer von TEDxNanjing, auf der Bühne." },
        { file: "fig-9.jpg", at: 2, privacy: true, en: "A talk under way, the hall dark around the stage.", de: "Ein Vortrag läuft, der Saal dunkel um die Bühne." },
        { file: "fig-10.jpg", at: 2, privacy: true, en: "A wall of references: mythology, Jung, hand-drawn sheets.", de: "Eine Wand aus Referenzen: Mythologie, Jung, handgezeichnete Blätter." },
        { file: "fig-11.jpg", at: 2, en: "“What do you do when you go shopping?” — from the design talk.", de: "„Was machst du, wenn du einkaufen gehst?“ — aus dem Design-Vortrag." },
        { file: "fig-12.jpg", at: 2, privacy: true, en: "Overtones — from personal expression to collective resonance, on cello.", de: "Obertöne — vom persönlichen Ausdruck zur kollektiven Resonanz, am Cello." },
        { file: "fig-13.jpg", at: 2, privacy: true, en: "A speaker against the burning-eye projection.", de: "Ein Sprecher vor der Projektion des brennenden Auges." },
        { file: "fig-14.jpg", at: 2, en: "The virtual-cell talk on the big screen.", de: "Der Vortrag über virtuelle Zellen auf der großen Leinwand." },
        { file: "fig-15.jpg", at: 3, privacy: true, en: "Volunteers taking their own keepsake photo, shot on a DV camera.", de: "Freiwillige beim eigenen Erinnerungsfoto, mit einer DV-Kamera." },
        { file: "fig-16.jpg", at: 3, privacy: true, en: "The closing slide: credits and the volunteer team of 2026.", de: "Die Schlussfolie: Credits und das Freiwilligenteam von 2026." },
        { file: "fig-17.jpg", at: 3, privacy: true, en: "The whole team behind the TEDxNanjing letters.", de: "Das ganze Team hinter den TEDxNanjing-Buchstaben." },
        { file: "fig-18.jpg", at: 3, privacy: true, en: "Speakers and certificates at the final call on stage.", de: "Sprecher und Zertifikate beim letzten Auftritt auf der Bühne." },
        { file: "fig-19.jpg?v=3", at: 3, privacy: true, center: true, ratio: "1280/1818", en: "The volunteer certificate, issued by the TEDxNanjing team on 25 October 2026.", de: "Das Freiwilligenzertifikat, ausgestellt vom TEDxNanjing-Team am 25. Oktober 2026." },
        { file: "fig-1.jpg?v=2", at: 3, privacy: true, en: "Me at the theme wall, holding this year’s sign.", de: "Ich vor der Themenwand, mit dem diesjährigen Schild." }
      ],
      en: {
        title: "Volunteer in TEDxNanjing 2026",
        summary: "Inviting speakers and helping on site at TEDxNanjing 2026 — an afternoon of “All Kinds of Possibilities” in Nanjing, run entirely by volunteers.",
        body: [
          "TEDx is a global program of local, independently organized events that offer a TED-like experience. Organizers obtain a free license from TED and follow its guidelines, but curation and production are run by local volunteer teams. Speakers are chosen for their ideas rather than credentials, speaking is never paid for, and events are multidisciplinary.",
          "TEDxNanjing is the local TEDx organization in Nanjing, Jiangsu, China. Founded on March 19, 2011, by university students led by Duan Xinxing, it was the first officially licensed TEDx event in Jiangsu Province. It is non-profit and volunteer-run. Its mission is to discover local talent and spark creativity in Nanjing, an ancient city with rich cultural heritage. It hosts salons, video screenings, and annual conferences featuring speakers from technology, design, the arts, humanities, and other fields. TEDxNanjing has also served as a Senior TEDx Ambassador hub in China, supporting early TEDx communities. Its annual conferences have explored themes such as “All Kinds of Possibilities,” drawing diverse audiences and speakers.",
          "I was responsible for inviting speakers and providing on-site assistance in this process. Of the two speakers I invited, one is Geng, who focuses on the field of biology, and the other is a developer of open-source game engines (we met once at a hackathon held by StepFun). During this period, I also met Mr. Tan, who is also a botanist (specializing in language learning), and Mr. Liu Kang from BGI."
        ],
        quote: { text: "Speakers are chosen for their ideas rather than credentials, speaking is never paid for, and events are multidisciplinary.", by: "The TEDx format" }
      },
      de: {
        title: "Freiwilliger bei TEDxNanjing 2026",
        summary: "Sprechereinladungen und Hilfe vor Ort bei der TEDxNanjing 2026 — ein Nachmittag voller „All Kinds of Possibilities“ in Nanjing, ganz getragen von Freiwilligen.",
        body: [
          "TEDx ist ein globales Programm aus lokalen, unabhängig organisierten Veranstaltungen, die ein TED-ähnliches Erlebnis bieten. Die Organisatoren erhalten eine kostenlose Lizenz von TED und folgen dessen Richtlinien, doch Kuratierung und Produktion liegen bei lokalen Freiwilligenteams. Die Sprecher werden nach ihren Ideen ausgewählt, nicht nach ihren Titeln; für das Sprechen wird nie bezahlt, und die Veranstaltungen sind multidisziplinär.",
          "TEDxNanjing ist die lokale TEDx-Organisation in Nanjing, Jiangsu, China. Gegründet am 19. März 2011 von Studierenden unter der Leitung von Duan Xinxing, war sie die erste offiziell lizenzierte TEDx-Veranstaltung in der Provinz Jiangsu. Sie ist gemeinnützig und wird ehrenamtlich getragen. Ihre Mission ist es, lokales Talent zu entdecken und in Nanjing, einer alten Stadt mit reichem kulturellem Erbe, Kreativität zu entfachen. Sie veranstaltet Salons, Videovorführungen und jährliche Konferenzen mit Sprechern aus Technologie, Design, den Künsten, den Geisteswissenschaften und anderen Feldern. TEDxNanjing hat zudem als Senior-TEDx-Botschafter-Hub in China gedient und frühe TEDx-Communities unterstützt. Die jährlichen Konferenzen haben Themen wie „All Kinds of Possibilities“ erkundet und damit vielfältige Publika und Sprecher angezogen.",
          "Ich war in diesem Prozess verantwortlich für die Einladung der Sprecher und die Begleitung vor Ort. Von den zwei Sprechern, die ich eingeladen habe, beschäftigt sich einer, Geng, mit dem Fachgebiet Biologie; der andere ist ein Entwickler von Open-Source-Game-Engines (wir haben uns einmal bei einem Hackathon von StepFun getroffen). In dieser Zeit habe ich außerdem Herrn Tan kennengelernt, der ebenfalls Botaniker ist (mit dem Schwerpunkt Sprachlernen), sowie Herrn Liu Kang von BGI."
        ],
        quote: { text: "Die Sprecher werden nach ihren Ideen ausgewählt, nicht nach ihren Titeln; für das Sprechen wird nie bezahlt, und die Veranstaltungen sind multidisziplinär.", by: "Das TEDx-Format" }
      }
    },

    {
      slug: "wcss-fao-booth",
      hidden: true,
      category: "Volunteer",
      date: "2026-06-12",
      location: { en: "Nanjing", de: "Nanjing" },
      figures: [
        { file: "fig-1.jpg", en: "Congress corridors in the morning.", de: "Kongressflure am Morgen." },
        { file: "fig-2.jpg", en: "Soil, on display.", de: "Boden, ausgestellt." }
      ],
      en: {
        title: "Six Days at the FAO Booth",
        summary: "Six days of booth duty and interpreting at the 23rd World Congress of Soil Science.",
        body: [
          "The 23rd World Congress of Soil Science met for a week. I volunteered six days at the FAO exhibition booth: set-up, scheduling, and interpreting between delegates and FAO staff when English stalled.",
          "The work was rhythm more than content. Doors at eight; the booth swept and stocked before the first session; the afternoon’s handouts counted twice. Delegates arrived from a long list of countries, and most conversations at the booth began the same way — one sentence about soil, and then the part where two people find out how much of their field they share.",
          "Interpreting for specialists is humbling in a specific way. The vocabulary is learnable in a day; the assumptions underneath it are not. I learned to slow down, to ask the delegate to say the same thing differently, and to let a silence do some of the work.",
          "By the last afternoon the booth felt less like an assignment and more like a place with regulars. That is the part I would keep."
        ],
        quote: { text: "The vocabulary is learnable in a day; the assumptions underneath it are not.", by: "Interpreting notes" }
      },
      de: {
        title: "Sechs Tage am FAO-Stand",
        summary: "Sechs Tage Stelldienst und Dolmetschen auf dem 23. Weltbodenkongress.",
        body: [
          "Der 23. Weltbodenkongress tagte eine Woche lang. Ich habe sechs Tage am Ausstellungsstand der FAO als Freiwilliger geholfen: Aufbau, Ablaufplanung und Dolmetschen zwischen Delegierten und FAO-Mitarbeitenden, wenn Englisch nicht reichte.",
          "Die Arbeit war Rhythmus mehr als Inhalt. Türen um acht; der Stand gekehrt und aufgefüllt, bevor die erste Session begann; die Handouts für den Nachmittag doppelt gezählt. Die Delegierten kamen aus einer langen Liste von Ländern, und die meisten Gespräche am Stand begannen gleich — ein Satz über Boden, dann der Teil, in dem zwei Leute herausfinden, wie viel ihres Fachs sie teilen.",
          "Dolmetschen für Fachleute ist auf eine bestimmte Weise ernüchternd. Das Vokabular lernt man an einem Tag; die Annahmen darunter nicht. Ich habe gelernt, langsamer zu werden, die Delegierten zu bitten, dasselbe anders zu sagen, und eine Pause etwas Arbeit leisten zu lassen.",
          "Am letzten Nachmittag fühlte sich der Stand weniger wie ein Auftrag an und mehr wie ein Ort mit Stammgästen. Das ist der Teil, den ich behalten würde."
        ],
        quote: { text: "Das Vokabular lernt man an einem Tag; die Annahmen darunter nicht.", by: "Dolmetsch-Notizen" }
      }
    },

    {
      slug: "nanjing-blind-school",
      category: "Volunteer",
      date: "2023-11-10",
      location: { en: "Nanjing", de: "Nanjing" },
      logos: {
        card: { file: "logo-njsb.svg", alt: "Nanjing School for the Blind", w: 22 },
        hero: [
          { file: "logo-njsb.svg", alt: "Nanjing School for the Blind", w: 60 }
        ]
      },
      figures: [
        { file: "fig-1.jpg", ratio: "1200/798", en: "Rain on the bus window on the way to the school.", de: "Regen am Busfenster auf dem Weg zur Schule." },
        { file: "fig-2.jpg", ratio: "1200/786", en: "The school’s emblem plaque on the wall.", de: "Das Emblemschild der Schule an der Wand." },
        { file: "fig-3.jpg", ratio: "1200/866", en: "A corridor with tactile paving and handrails.", de: "Ein Flur mit Leitstreifen und Handläufen." },
        { file: "fig-4.jpg", ratio: "1200/800", en: "In the classroom, desks already filled with bags.", de: "Im Klassenzimmer, die Tische schon voller Tüten." },
        { file: "fig-5.jpg", ratio: "1200/811", privacy: true, en: "A student at a desk beside stacks of braille books.", de: "Ein Schüler am Tisch neben Stapeln von Braille-Büchern." },
        { file: "fig-6.jpg", ratio: "1200/810", privacy: true, en: "Faces around a table in the half-dark.", de: "Gesichter um einen Tisch im Halbdunkel." },
        { file: "fig-7.jpg", ratio: "1200/794", en: "Small things passed around a table.", de: "Kleine Dinge, die am Tisch herumgereicht werden." },
        { file: "fig-8.jpg?v=3", privacy: true, center: true, ratio: "1400/1920", en: "The volunteer certificate — ten hours at the autumn outing, issued by Nanjing School for the Blind.", de: "Das Freiwilligenzertifikat — zehn Stunden beim Herbstausflug, ausgestellt von der Nanjing School for the Blind." }
      ],
      en: {
        title: "Volunteer in Nanjing School for the Blind",
        summary: "An autumn outing with the Nanjing School for the Blind, held by the NJAU Youth Association — a freshman’s day, shot on a Zorki-C.",
        body: [
          "An autumn outing activity for Nanjing School for the Blind. It was held by NJAU Youth Association. Almost all the members in our class have participated (Perhaps it’s because we were freshmen haha).",
          "Shot on Zorki-C, the Soviet Barnack cameras."
        ]
      },
      de: {
        title: "Freiwilligendienst an der Nanjing School for the Blind",
        summary: "Ein Herbstausflug mit der Nanjing School for the Blind, veranstaltet von der Jugendvereinigung der NJAU — ein Tag im ersten Semester, fotografiert mit einer Zorki-C.",
        body: [
          "Eine Herbstausflugsaktion für die Nanjing School for the Blind, veranstaltet von der Jugendvereinigung der NJAU. Fast alle aus meiner Klasse haben mitgemacht (vermutlich, weil wir Erstsemester waren haha).",
          "Aufgenommen mit einer Zorki-C, einer sowjetischen Barnack-Kamera."
        ]
      }
    }
  ]
};
