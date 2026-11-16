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
   Card titles wrap inside a 10.5em box; when the owner asks for specific line
   breaks, add `cardTitle` to the language block ("\n" becomes <br>) plus
   `cardTitleMax` (a CSS length, e.g. "13.2em") if a forced line is wider.
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
        { file: "fig-4.jpg", at: 2, ratio: "1000/1127", en: "The preheat meeting — atox.world on screen share.", de: "Das Preheat-Treffen — atox.world auf dem geteilten Bildschirm." },
        { file: "fig-5.jpg", at: 2, ratio: "1000/1193", en: "Opening & Challenge Briefing, in Türkiye and Beijing time.", de: "Opening & Challenge Briefing, in Türkei- und Peking-Zeit." },
        { file: "fig-6.jpg", at: 2, ratio: "1000/530", en: "The mentoring session opens — twenty participants, cameras mostly off.", de: "Die Mentoring-Session beginnt — zwanzig Teilnehmende, meist ohne Kamera." },
        { file: "fig-7.jpg", at: 2, ratio: "1000/455", en: "In the breakout room with mentor Jasmeet Rai.", de: "Im Breakout-Room bei Mentorin Jasmeet Rai." },
        { file: "fig-8.jpg", at: 2, ratio: "1000/1130", en: "Team P05’s demo: Proof API, an AI climate-action verifier.", de: "Das Demo von Team P05: Proof API, ein KI-Verifizierer für Klimaschutzaktionen." },
        { file: "fig-9.jpg", at: 2, ratio: "1000/779", en: "Proof API’s analytics — score calibration and carbon reference factors.", de: "Proof APIs Analytics — Score-Kalibrierung und CO₂-Referenzfaktoren." },
        { file: "fig-10.jpg", at: 2, ratio: "1000/1107", en: "Proof API’s home: local action, a clearer record.", de: "Proof APIs Startseite: lokale Aktionen, ein klareres Protokoll." },
        { file: "fig-11.jpg", at: 2, ratio: "1000/1131", en: "A quieter breakout room, questions in the chat.", de: "Ein ruhigerer Breakout-Room, Fragen im Chat." },
        { file: "fig-12.jpg", at: 2, ratio: "1000/880", en: "The Climate Adaptation & Resilience room, three of us.", de: "Der Raum zu Klimaanpassung und Resilienz, wir zu dritt." },
        { file: "fig-13.jpg", at: 2, ratio: "1000/1294", en: "Questions for mentor Jasmeet Rai in the Climate Adaptation & Resilience room.", de: "Fragen an Mentorin Jasmeet Rai im Raum Climate Adaptation & Resilience." },
        { file: "fig-14.jpg", at: 2, ratio: "1000/839", en: "The Climate Education room — a drought game, two rule-based farm agents over twelve years.", de: "Der Raum zu Klimabildung — ein Dürre-Spiel, zwei regelbasierte Farm-Agents über zwölf Jahre." },
        { file: "fig-15.jpg", at: 2, ratio: "1000/1128", en: "Team P35’s roster — ASTER Climate, occupational safety under wildfire risk.", de: "Das Teamblatt von P35 — ASTER Climate, Arbeitsschutz bei Waldbrandgefahr." },
        { file: "fig-16.jpg", at: 2, ratio: "1000/1165", en: "ASTER Climate’s pitch: every worker safe, in every workplace.", de: "Der Pitch von ASTER Climate: jeder Arbeiter sicher, an jedem Arbeitsplatz." },
        { file: "fig-17.jpg", at: 2, ratio: "1000/1128", en: "The live prototype: a wildfire-risk briefing for a crew at Kemer.", de: "Der Live-Prototyp: eine Waldbrand-Briefing für eine Crew in Kemer." },
        { file: "fig-18.jpg", at: 2, ratio: "1000/1128", en: "Pitch feedback in the room; the team coordinates on WhatsApp between sessions.", de: "Feedback zum Pitch im Raum; das Team koordiniert sich zwischendurch per WhatsApp." },
        { file: "fig-19.jpg", at: 2, ratio: "1000/1128", en: "Oliver Bonallack answers the team’s questions.", de: "Oliver Bonallack beantwortet die Fragen des Teams." },
        { file: "fig-20.jpg", at: 2, ratio: "1000/1128", en: "Mentor Oliver Bonallack joins the room.", de: "Mentor Oliver Bonallack kommt in den Raum." }
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
        { file: "fig-9.jpg", at: 1, ratio: "3/4", en: "A calligraphy robot at work.", de: "Ein Kalligraphie-Roboter bei der Arbeit." },
        { file: "fig-3.jpg", at: 2, ratio: "3/4", en: "MY SYNERGY’s flyer: OEM / ODM partnerships for biomedical software.", de: "Der Flyer von MY SYNERGY: OEM-/ODM-Partnerschaften für biomedizinische Software." },
        { file: "fig-4.jpg", at: 2, privacy: true, en: "With Mladen Georgiev, CTO of MY SYNERGY, at the Bulgaria booth.", de: "Mit Mladen Georgiev, CTO von MY SYNERGY, am Bulgarien-Stand." },
        { file: "fig-5.jpg", at: 3, ratio: "3/4", en: "The Spain zone — energy, power and environmental protection.", de: "Der Spanien-Bereich — Energie, Strom und Umweltschutz." },
        { file: "fig-6.jpg", at: 3, en: "A Cyprus University of Technology key ring from the CUTech stand.", de: "Ein Schlüsselanhänger der Cyprus University of Technology vom CUTech-Stand." },
        { file: "fig-7.jpg", at: 3, en: "Robotic hands and VR simulation gloves among the emerging technologies.", de: "Robotische Hände und VR-Simulationshandschuhe unter den neuen Technologien." },
        { file: "fig-8.jpg", at: 3, en: "A land-air ‘Transformer’ aircraft on the fair floor.", de: "Ein Land-Luft-‚Transformer‘-Fluggerät auf der Messe." },
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
        { file: "fig-5.jpg", at: 2, en: "The check-in desk opens at 13:30.", de: "Der Check-in öffnet um 13:30." },
        { file: "fig-6.jpg", at: 2, en: "Rehearsal on the red circle, hours before doors.", de: "Probe auf dem roten Kreis, Stunden vor dem Einlass." },
        { file: "fig-7.jpg", at: 2, en: "The hosts open the afternoon.", de: "Die Moderation eröffnet den Nachmittag." },
        { file: "fig-8.jpg", at: 2, en: "Duan Xinxing, TEDxNanjing’s founder, on stage.", de: "Duan Xinxing, Gründer von TEDxNanjing, auf der Bühne." },
        { file: "fig-9.jpg", at: 2, en: "A talk under way, the hall dark around the stage.", de: "Ein Vortrag läuft, der Saal dunkel um die Bühne." },
        { file: "fig-10.jpg", at: 2, en: "A wall of references: mythology, Jung, hand-drawn sheets.", de: "Eine Wand aus Referenzen: Mythologie, Jung, handgezeichnete Blätter." },
        { file: "fig-11.jpg", at: 2, en: "“What do you do when you go shopping?” — from the design talk.", de: "„Was machst du, wenn du einkaufen gehst?“ — aus dem Design-Vortrag." },
        { file: "fig-12.jpg", at: 2, en: "Overtones — from personal expression to collective resonance, on cello.", de: "Obertöne — vom persönlichen Ausdruck zur kollektiven Resonanz, am Cello." },
        { file: "fig-13.jpg", at: 2, en: "A speaker against the burning-eye projection.", de: "Ein Sprecher vor der Projektion des brennenden Auges." },
        { file: "fig-14.jpg", at: 2, en: "The virtual-cell talk on the big screen.", de: "Der Vortrag über virtuelle Zellen auf der großen Leinwand." },
        { file: "fig-15.jpg", at: 3, privacy: true, en: "Volunteers taking their own keepsake photo, shot on a DV camera.", de: "Freiwillige beim eigenen Erinnerungsfoto, mit einer DV-Kamera." },
        { file: "fig-16.jpg", at: 3, en: "The closing slide: credits and the volunteer team of 2026.", de: "Die Schlussfolie: Credits und das Freiwilligenteam von 2026." },
        { file: "fig-17.jpg", at: 3, privacy: true, en: "The whole team behind the TEDxNanjing letters.", de: "Das ganze Team hinter den TEDxNanjing-Buchstaben." },
        { file: "fig-18.jpg", at: 3, privacy: true, en: "Speakers and certificates at the final call on stage.", de: "Sprecher und Zertifikate beim letzten Auftritt auf der Bühne." },
        { file: "fig-19.jpg?v=3", at: 3, privacy: true, center: true, ratio: "1280/1818", en: "The volunteer certificate, issued by the TEDxNanjing team on 25 October 2026.", de: "Das Freiwilligenzertifikat, ausgestellt vom TEDxNanjing-Team am 25. Oktober 2026." },
        { file: "fig-1.jpg?v=2", at: 3, en: "Me at the theme wall, holding this year’s sign.", de: "Ich vor der Themenwand, mit dem diesjährigen Schild." }
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
      category: "Volunteer",
      date: "2026-06-06",
      location: { en: "Nanjing", de: "Nanjing" },
      logos: {
        card: { file: "logo-fao.svg", alt: "FAO", w: 22 },
        hero: [
          { file: "logo-fao.svg", alt: "FAO", w: 52 }
        ]
      },
      figures: [
        { file: "fig-1.jpg", at: 3, ratio: "1202/1700", en: "The IUSS centennial book of abstracts and presentations — Florence, 2024, Volume 1.", de: "Der Abstract- und Vortragsband zum IUSS-Jubiläum — Florenz 2024, Band 1." },
        { file: "fig-2.jpg", at: 3, ratio: "1314/1700", en: "“The IUSS’ Presidents Throughout One Hundred Years of its History” — the second title from the booth.", de: "„The IUSS’ Presidents Throughout One Hundred Years of its History“ — der zweite Titel vom Stand." },
        { file: "fig-3.jpg", at: 4, privacy: true, en: "At the Journey of Soil Data wall, with the FAO delegation and a copy of the Soil Atlas of Asia.", de: "An der Wand „The Journey of Soil Data“, mit der FAO-Delegation und einem Exemplar des Soil Atlas of Asia." },
        { file: "fig-4.jpg", at: 4, privacy: true, ratio: "1238/1650", en: "Under the Journey of Soil Data panels with the FAO team.", de: "Unter den Panels von „The Journey of Soil Data“ mit dem FAO-Team." },
        { file: "fig-5.jpg", at: 4, privacy: true, ratio: "1238/1650", en: "At booth B07, the Wanwusheng Soil Science Communication Hall.", de: "Am Stand B07, dem Wanwusheng Soil Science Communication Hall." },
        { file: "fig-6.jpg", at: 4, privacy: true, ratio: "1238/1650", en: "The same booth, with its exhibitors and a fellow volunteer.", de: "Derselbe Stand, mit seinen Ausstellern und einer Mitfreiwilligen." },
        { file: "fig-7.jpg", at: 1, en: "The Nanjing International Expo Center at dusk, the congress banner on the facade.", de: "Das Nanjing International Expo Center in der Dämmerung, das Kongressbanner an der Fassade." },
        { file: "fig-8.jpg", at: 1, en: "The theme on the building — Soil and the Shared Future for Humanity — in English and Chinese.", de: "Das Thema am Gebäude — Soil and the Shared Future for Humanity — auf Englisch und Chinesisch." },
        { file: "fig-9.jpg", at: 1, en: "The glass entrance hall in the afternoon sun.", de: "Die gläserne Eingangshalle in der Nachmittagssonne." },
        { file: "fig-10.jpg", at: 1, en: "Build-up day in the exhibition hall — booths half raised, the aisles still empty.", de: "Aufbautag in der Ausstellungshalle — die Stände halb errichtet, die Gänge noch leer." },
        { file: "fig-11.jpg", at: 1, en: "A SIM-card service desk and blue carpeting, laid out before the first delegates.", de: "Ein SIM-Karten-Schalter und blauer Teppich, bereitgelegt vor den ersten Delegierten." },
        { file: "fig-12.jpg", at: 1, en: "Organisers walking the floor along the booth row.", de: "Organisatoren auf dem Weg durch die Standreihe." },
        { file: "fig-13.jpg", at: 2, en: "Congress banners above the aisles, the central stand going up.", de: "Kongressbanner über den Gängen, der zentrale Stand im Aufbau." },
        { file: "fig-14.jpg", at: 2, en: "The ring of the central stand, workers still on site.", de: "Der Ring des zentralen Stands, die Arbeiter noch vor Ort." },
        { file: "fig-15.jpg", at: 2, en: "A worker on scaffolding beside the World Soil Science and Innovation screen.", de: "Ein Arbeiter auf dem Gerüst neben der Leinwand „World Soil Science and Innovation“." },
        { file: "fig-16.jpg", at: 2, en: "The long corridor to the halls, the congress banner at full height.", de: "Der lange Korridor zu den Hallen, das Kongressbanner in voller Höhe." },
        { file: "fig-17.jpg", at: 2, en: "Banner columns and the sign for Hall 4.", de: "Bannersäulen und das Schild von Halle 4." },
        { file: "fig-18.jpg", at: 5, en: "Registration on opening morning — the lobby filling.", de: "Die Registrierung am Eröffnungsmorgen — die Lobby füllt sich." },
        { file: "fig-19.jpg", at: 5, en: "Queue lines at the entrance, badges already on.", de: "Warteschlangen am Eingang, die Badges schon umgehängt." },
        { file: "fig-20.jpg", at: 5, en: "A break on the bench behind the glass.", de: "Eine Pause auf der Bank hinter dem Glas." },
        { file: "fig-21.jpg", at: 5, en: "Carts of bags across the forecourt on the way to Hall 4.", de: "Wagen mit Tüten über den Vorplatz, auf dem Weg zu Halle 4." },
        { file: "fig-22.jpg", at: 6, privacy: true, en: "A delegate and volunteers over a soil map at the entrance.", de: "Ein Delegierter und Freiwillige über einer Bodenkarte am Eingang." },
        { file: "fig-23.jpg", at: 6, en: "The Journey of Soil Data booth, open for the day.", de: "Der Stand „The Journey of Soil Data“, geöffnet für den Tag." },
        { file: "fig-24.jpg", at: 6, en: "The FAO banner above the hall.", de: "Das FAO-Banner über der Halle." },
        { file: "fig-25.jpg", at: 6, en: "The SoilFer stand from the aisle.", de: "Der SoilFer-Stand vom Gang aus." },
        { file: "fig-26.jpg", at: 6, privacy: true, ratio: "1281/1650", en: "At the SoilFer wall.", de: "An der SoilFer-Wand." },
        { file: "fig-27.jpg", at: 6, privacy: true, en: "The volunteer team in front of the central stand.", de: "Das Freiwilligenteam vor dem zentralen Stand." },
        { file: "fig-28.jpg", at: 6, privacy: true, center: true, ratio: "1500/2000", en: "The volunteer badge and lanyard — WCSS 2026, Nanjing, June 7–12.", de: "Badge und Lanyard als Freiwilliger — WCSS 2026, Nanjing, 7.–12. Juni." }
      ],
      en: {
        title: "Volunteer in the 23rd World Congress of Soil Science",
        cardTitle: "Volunteer in the\n23rd World Congress\nof Soil Science",
        cardTitleMax: "13.2em",
        summary: "Booth duty and translating for the FAO SoilFer project at WCSS 2026 in Nanjing — the congress’s first time in China.",
        body: [
          "The 23rd World Congress of Soil Science (WCSS 2026) was held from June 8 to 12, 2026, at the Nanjing International Expo Center in Nanjing, China. Co-organized by the International Union of Soil Sciences (IUSS) and the Soil Science Society of China, and hosted by the Institute of Soil Science, Chinese Academy of Sciences, the congress marked the first time in its nearly century-long history—dating back to 1927—that this premier global gathering was convened in China.",
          "Under the theme “Soil and the Shared Future for Humanity,” the congress gathered nearly 3,000 participants from over 100 countries and regions. It focused on soil health, gobi ecosystem restoration, and sustainable soil development, while also addressing food security, climate change, biodiversity, and ecological restoration. Featuring over 130 sessions, 9 symposia, 5 workshops, 800+ posters, a forum, and an exhibition, it served as a key international platform for academic exchange and industry–research collaboration, with outcomes expected to support the Nanjing Action Initiative.",
          "In the booth of FAO SoilFer project, I participated as a translator and assistant. A female official from Rome (FAO headquarters) guided us in work. We were responsible for explaining the information of the FAO and providing some publications such as:",
          "I teamed up with a high school student, Sophie from Yucai School, and got to know her father, Professor Sun in Northeast Agricultural University, by the way because of the same research field. It was the first time I learned about the summer and winter school systems abroad during the chat with Sophie and determined to accumulate experience in foreign-related exchanges. I met the renowned Professor Chen Nengchang at the same time.",
          "Team leader Zhou in Suzhou Guozhan Group (organization), who graduated from Australia, possesses very good English skills. She and I will both tour the entire exhibition area to visit interesting booths, conference papers, new book release zones, tea break areas, etc. During this period, I also took the opportunity to pick up the express delivery for the teacher from China Agricultural University.",
          "Coincidentally, I applied to Southern University of Science and Technology (SUSTech) during my break from volunteer work and was successfully admitted to the university in the subsequent recommendation for exemption from the entrance examination."
        ]
      },
      de: {
        title: "Freiwilliger beim 23. Weltbodenkongress",
        summary: "Standdienst und Übersetzen für das FAO-Projekt SoilFer beim WCSS 2026 in Nanjing — dem ersten Mal in China.",
        body: [
          "Der 23. Weltbodenkongress (WCSS 2026) fand vom 8. bis 12. Juni 2026 im Nanjing International Expo Center in Nanjing, China, statt. Mitorganisiert von der International Union of Soil Sciences (IUSS) und der Soil Science Society of China und ausgerichtet vom Institut für Bodenkunde der Chinesischen Akademie der Wissenschaften, war der Kongress das erste Mal in seiner fast hundertjährigen Geschichte — die bis 1927 zurückreicht —, dass diese weltweit führende Zusammenkunft in China stattfand.",
          "Unter dem Thema „Soil and the Shared Future for Humanity“ versammelte der Kongress fast 3.000 Teilnehmende aus über 100 Ländern und Regionen. Im Mittelpunkt standen Bodengesundheit, die Wiederherstellung von Gobi-Ökosystemen und nachhaltige Bodenentwicklung; zugleich ging es um Ernährungssicherheit, Klimawandel, Biodiversität und ökologische Wiederherstellung. Mit über 130 Sitzungen, 9 Symposien, 5 Workshops, mehr als 800 Postern, einem Forum und einer Ausstellung diente er als zentrale internationale Plattform für akademischen Austausch und Zusammenarbeit zwischen Wissenschaft und Industrie; die Ergebnisse sollen die Nanjing Action Initiative stützen.",
          "Am Stand des FAO-Projekts SoilFer war ich als Übersetzer und Assistent tätig. Eine Beamtin aus Rom (FAO-Hauptsitz) leitete uns bei der Arbeit. Wir waren dafür verantwortlich, Informationen über die FAO zu erklären und Publikationen bereitzustellen, etwa:",
          "Ich arbeitete mit einer Schülerin namens Sophie von der Yucai School zusammen und lernte dabei — ganz nebenbei, wegen desselben Forschungsfelds — ihren Vater kennen, Professor Sun von der Northeast Agricultural University. Im Gespräch mit Sophie hörte ich zum ersten Mal von den Sommer- und Winterschulsystemen im Ausland und beschloss, Erfahrungen im internationalen Austausch zu sammeln. Zugleich traf ich den renommierten Professor Chen Nengchang.",
          "Teamleiterin Zhou von der Suzhou Guozhan Group (Organisation), die in Australien studiert hat, besitzt sehr gute Englischkenntnisse. Sie und ich werden gemeinsam über das gesamte Messegelände gehen, um interessante Stände, Konferenzbeiträge, Neuerscheinungsbereiche, Teepausen usw. zu besuchen. In dieser Zeit nutzte ich auch die Gelegenheit, die Expresssendung für die Lehrkraft von der China Agricultural University abzuholen.",
          "Zufällig bewarb ich mich während der Pause von der Freiwilligenarbeit an der Southern University of Science and Technology (SUSTech) und wurde im anschließenden Empfehlungsverfahren — mit Befreiung von der Aufnahmeprüfung — an der Universität zugelassen."
        ]
      }
    },

    {
      slug: "nanjing-city-football",
      category: "Volunteer",
      date: "2025-06-01",
      location: { en: "Nanjing", de: "Nanjing" },
      logos: {
        card: { file: "logo-league-one.png", alt: "China League One", w: 16 },
        hero: [
          { file: "logo-league-one.png", alt: "China League One", w: 42 }
        ]
      },
      figures: [
        { file: "fig-1.jpg", at: 1, en: "Wutaishan Stadium before the crowd — the city behind the north stand.", de: "Das Wutaishan-Stadion vor dem Einlass — die Stadt hinter der Nordtribüne." },
        { file: "fig-2.jpg", at: 1, en: "A tifo covering laid out on the running track, the stands still empty.", de: "Eine Tifo-Bahn auf der Aschenbahn ausgelegt, die Ränge noch leer." },
        { file: "fig-3.jpg", at: 2, en: "Ticket check in the rain outside the ground.", de: "Einlasskontrolle im Regen vor dem Stadion." },
        { file: "fig-4.jpg", at: 2, en: "Umbrellas and rain ponchos along the rail.", de: "Regenschirme und Ponchos am Geländer." },
        { file: "fig-5.jpg", at: 2, en: "Two spectators in ponchos, watching from the rail.", de: "Zwei Zuschauer in Ponchos am Geländer." },
        { file: "fig-6.jpg", at: 3, en: "Nanjing City 1–0 Guangzhou Leopard on the board at 45 minutes, rain running down the track.", de: "Nanjing City 1:0 gegen Guangzhou Leopard auf der Anzeigetafel in der 45. Minute, Regen läuft über die Aschenbahn." },
        { file: "fig-7.jpg", at: 3, ratio: "16/9", en: "The second half under the lights.", de: "Die zweite Halbzeit unter Flutlicht." },
        { file: "fig-8.jpg", at: 3, en: "Banners behind the goal, staff still out on the track.", de: "Banden hinter dem Tor, Betreuer noch auf der Aschenbahn." },
        { file: "fig-9.jpg", at: 3, en: "Players and staff by the tunnel under the far stand.", de: "Spieler und Betreuer am Tunnel unter der Gegentribüne." }
      ],
      en: {
        title: "Volunteer for Nanjing City Football Team",
        summary: "Tifo hanging, venue cleaning and ticket checking at a China League One match on Wutaishan — and the second half I finally got to watch.",
        body: [
          "This was a match taking place on Wutai Mountain, where the Nanjing City Football Team played against the Guangzhou Leopard Football Team.",
          "The volunteer information is sourced from NJAU. As a volunteer, I participated in the entire stadium’s tifo hanging, venue cleaning and ticket checking work. I have gained a relatively confident understanding of what preparations the team has made before the game.",
          "I watched the second half of the game after the ticket check was over. As a fan of Guangzhou (Evergrande Taobao), I witnessed the 2 goals for Guangzhou and the ultimate “Bengbu Spin” (complete two consecutive “Marseille turns”) in the stoppage time today."
        ]
      },
      de: {
        title: "Freiwilliger bei Nanjing City",
        summary: "Tifo-Aufhängen, Platzreinigung und Einlasskontrolle bei einem Spiel der China League One im Wutaishan-Stadion — und die zweite Halbzeit, die ich danach endlich sehen konnte.",
        body: [
          "Dies war ein Spiel im Wutaishan-Stadion, wo die Nanjing City Football Team gegen die Guangzhou Leopard Football Team spielte.",
          "Die Freiwilligeninformation stammt von der NJAU. Als Freiwilliger war ich am Aufhängen des Tifo für das gesamte Stadion, an der Reinigung des Geländes und an der Einlasskontrolle beteiligt. Ich habe ein ziemlich sicheres Verständnis dafür gewonnen, welche Vorbereitungen die Mannschaft vor dem Spiel trifft.",
          "Die zweite Halbzeit habe ich gesehen, nachdem die Einlasskontrolle vorbei war. Als Fan von Guangzhou (Evergrande Taobao) habe ich die zwei Tore für Guangzhou und den ultimativen „Bengbu Spin“ (zwei aufeinanderfolgende „Marseille-Turns“) in der Nachspielzeit miterlebt."
        ]
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
        { file: "fig-5.jpg", ratio: "1200/811", en: "A student at a desk beside stacks of braille books.", de: "Ein Schüler am Tisch neben Stapeln von Braille-Büchern." },
        { file: "fig-6.jpg", ratio: "1200/810", en: "Faces around a table in the half-dark.", de: "Gesichter um einen Tisch im Halbdunkel." },
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
