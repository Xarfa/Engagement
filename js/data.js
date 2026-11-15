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
        { file: "fig-1.jpg", ratio: "1000/1413", en: "Participant handbook, cover.", de: "Teilnehmerhandbuch, Deckblatt." },
        { file: "fig-2.jpg", ratio: "1000/1413", en: "Welcome and event overview.", de: "Willkommen und Veranstaltungsüberblick." },
        { file: "fig-3.jpg", ratio: "1000/1413", en: "Venue, logistics, and what to bring.", de: "Austragungsort, Logistik und was mitzunehmen ist." },
        { file: "fig-4.jpg", ratio: "1000/1127", en: "The preheat meeting — atox.world on screen share.", de: "Das Preheat-Treffen — atox.world auf dem geteilten Bildschirm." },
        { file: "fig-5.jpg", ratio: "1000/1193", en: "Opening & Challenge Briefing, in Türkiye and Beijing time.", de: "Opening & Challenge Briefing, in Türkei- und Peking-Zeit." }
      ],
      en: {
        title: "Volunteer in ATOX hackathon during COP31",
        summary: "Volunteering at ATOX’s AI4Climate hackathon for COP31 — and the two breakrooms I hosted, in pure English and in fields far from my own.",
        body: [
          "An AI4Climate hackathon staged by ATOX — participants collaborate with teammates to create a product demo (in whatever hardware or software) in a limited time (within 2 days). ATOX is a hackathon association established by students from Tsinghua and Peking University, possessing strong Generation Z genes. It seems they are desperately good at digging up good ideas, though more emphasis was placed on social attributes. The theme ‘AI4Climate’ chased the hotspot of COP31 (the 31st Conference of the Parties to the United Nations Framework Convention on Climate Change), which started on Nov 9th and ends on the 20th in Antalya, Türkiye.",
          "Before the hackathon started, our organisers held two online meetings. The first one was a preheating activity: we set up seven breakrooms for different topics (topics 1 & 2 were mine — 1, Climate Adaptation & Resilience; 2, Clean Energy & Low-Carbon Transition). It was truly a challenge for me to host the breakrooms — not only the ‘PURE’ English communication, but also a field completely distinct from my own (my major is agronomy science)."
        ],
        quote: { text: "ATOX is a hackathon association established by students from Tsinghua and Peking University, possessing strong Generation Z genes.", by: "First impressions of ATOX" }
      },
      de: {
        title: "Freiwilliger beim ATOX-Hackathon während der COP31",
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
        { file: "fig-10.jpg", at: 5, privacy: true, en: "The volunteer table between shifts.", de: "Der Freiwilligentisch zwischen den Schichten." },
        { file: "fig-11.jpg", at: 5, privacy: true, en: "With the volunteer team and new acquaintances from the stands.", de: "Mit dem Freiwilligenteam und neuen Bekannten von den Ständen." },
        { file: "fig-12.jpg", at: 5, privacy: true, center: true, ratio: "1400/1980", en: "The volunteer certificate, issued by Messe Stuttgart.", de: "Das Freiwilligenzertifikat der Messe Stuttgart." }
      ],
      en: {
        title: "Volunteer in 2026 Innovation Fair, Nanjing",
        summary: "Booth translator for Bulgaria’s MY SYNERGY at the 6th Innovation Fair in Nanjing — and the classmates heading the same way.",
        body: [
          "The 6th Innovation Fair took place from 26 to 30 October 2026. The fair promotes international business development, uncovers sourcing opportunities, and provides access to the Chinese market while allowing opportunities for the representation and distribution of Chinese businesses in Europe.",
          "I was the booth translator for MY SYNERGY, a software company from Bulgaria. They offer biomedical software services and were looking for OEM / ODM (similar to a medical device contract manufacturer) partnerships. I had a friendly exchange with the chief technology officer, Mladen Georgiev.",
          "At the fair, I communicated with many institutions, such as Cyprus University of Technology (CUTech — I've learned about their PhD program and collaboration with Hangzhou Dianzi University). Certainly, there were lots of manufacturing enterprises and emerging technologies.",
          "Above all, I had an in-depth conversation with Huayue Cheng, a female classmate from our grade and major. I once knew her name from the list of students dispatched to UN recruitment (at Suzhou University) from the agricultural college. I wrote 'I possessed the experience of FAO volunteer' in the remarks while she wrote 'I went to the University of Alberta for an exchange' (it was a few days later that I came across this CSC project, while she had been preparing for it since her freshman year). We talked about the application for summer research internships abroad again, and both of us want to enter the programs of EPFL and ISTA.",
          "Besides, I also met Ruoyu Liu, who was THE VOLUNTEER but slept until noon because of putting too much effort into volunteer work at the World Agriculture Awards Ceremony yesterday."
        ]
      },
      de: {
        title: "Freiwilliger bei der 2026 Innovation Fair, Nanjing",
        summary: "Standdolmetscher für MY SYNERGY aus Bulgarien auf der 6. Innovation Fair in Nanjing — und Kommilitonen auf denselben Wegen.",
        body: [
          "Die 6. Innovation Fair fand vom 26. bis 30. Oktober 2026 statt. Die Messe fördert die internationale Geschäftsentwicklung, erschließt Beschaffungsmöglichkeiten und eröffnet den Zugang zum chinesischen Markt, während sie chinesischen Unternehmen zugleich Möglichkeiten zu Repräsentanz und Vertrieb in Europa eröffnet.",
          "Ich war Standdolmetscher für MY SYNERGY, ein Softwareunternehmen aus Bulgarien. Es bietet biomedizinische Software-Dienstleistungen an und suchte OEM-/ODM-Partnerschaften (vergleichbar mit einem Lohnhersteller für Medizinprodukte). Mit dem Chief Technology Officer, Mladen Georgiev, verband mich ein freundlicher Austausch.",
          "Auf der Messe kam ich mit vielen Institutionen ins Gespräch, etwa der Cyprus University of Technology (CUTech — ich habe von ihrem PhD-Programm und der Zusammenarbeit mit der Hangzhou Dianzi University erfahren). Natürlich gab es auch viele Fertigungsunternehmen und aufstrebende Technologien.",
          "Vor allem hatte ich ein ausführliches Gespräch mit Huayue Cheng, einer Kommilitonin aus meinem Jahrgang und Studiengang. Ihren Namen kannte ich von der Liste der Studierenden, die vom agrarwissenschaftlichen College zur UN-Rekrutierung (an der Suzhou University) entsandt worden war. Ich hatte in der Bemerkung ‚I possessed the experience of FAO volunteer‘ geschrieben, während sie ‚I went to the University of Alberta for an exchange‘ schrieb (ein paar Tage später stieß ich auf dieses CSC-Projekt; sie bereitete sich seit ihrem ersten Studienjahr darauf vor). Wir sprachen erneut über Bewerbungen für sommerliche Forschungspraktika im Ausland, und beide wollen in die Programme von EPFL und ISTA.",
          "Außerdem traf ich Ruoyu Liu, den schlechthin DER Freiwillige war — der aber bis mittags schlief, weil er am Vortag bei der World Agriculture Awards Ceremony zu viel Einsatz geleistet hatte."
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
      hidden: true,
      category: "Volunteer",
      date: "2026-10-25",
      location: { en: "Nanjing", de: "Nanjing" },
      figures: [
        { file: "fig-1.jpg", en: "The audience between sessions.", de: "Das Publikum zwischen den Sitzungen.", credit: "Photo: Gangulybiswarup (CC BY 4.0), Wikimedia Commons" },
        { file: "fig-2.jpg", en: "The stage before the first talk.", de: "Die Bühne vor dem ersten Vortrag." }
      ],
      en: {
        title: "One Day at TEDxNanjing",
        summary: "On-site volunteer at TEDxNanjing 2026 — badges, timing slips, and two talks that survived the week.",
        body: [
          "Volunteered at TEDxNanjing 2026: badges at the door, direction signs, timing slips for the stage manager — the invisible work that lets a programme run on schedule.",
          "Two talks stayed with me. One argued for computational biology as infrastructure: virtual cells, designed proteins, research moving from the bench to the terminal. The speaker was a founder; the slide deck was calm, and the ambition was not.",
          "The other was by an industrial designer, on how Chinese design might stop quoting inherited symbols and start quoting its own mechanical past — clockwork, gear trains, the ingenuity of its own eighteenth century. Whether or not the audience agreed, the question was the right one.",
          "What a volunteer sees that the audience does not: the speakers before they go on. They pace, they check their notes, they ask what time it is. The composure on stage is assembled in the corridor, the same way the event itself is."
        ],
        quote: { text: "The composure on stage is assembled in the corridor.", by: "Volunteer’s notes" }
      },
      de: {
        title: "Ein Tag bei TEDxNanjing",
        summary: "Vor-Ort-Freiwilliger bei der TEDxNanjing 2026 — Ausweise, Timing-Zettel und zwei Vorträge, die die Woche überlebt haben.",
        body: [
          "Freiwilliger bei der TEDxNanjing 2026: Ausweise an der Tür, Wegweiser, Timing-Zettel für die Bühnenleitung — die unsichtbare Arbeit, die dafür sorgt, dass ein Programm nach Plan läuft.",
          "Zwei Vorträge sind mir geblieben. Einer plädierte für computational biology als Infrastruktur: virtuelle Zellen, designte Proteine, Forschung, die von der Werkbank ins Terminal wandert. Der Sprecher war Gründer; der Folienstapel war ruhig, der Ehrgeiz nicht.",
          "Der andere kam von einem Industriedesigner — darüber, wie chinesisches Design aufhören könnte, geerbte Symbole zu zitieren, und anfangen könnte, die eigene mechanische Vergangenheit zu zitieren: Uhrwerke, Zahnradgetriebe, der Erfindungsgeist des eigenen achtzehnten Jahrhunderts. Ob das Publikum zustimmte oder nicht — die Frage war die richtige.",
          "Was ein Freiwilliger sieht und das Publikum nicht: die Sprecher, bevor sie rausgehen. Sie laufen auf und ab, prüfen ihre Notizen, fragen nach der Uhrzeit. Die Fassung auf der Bühne wird im Flur zusammengesetzt — genauso wie die Veranstaltung selbst."
        ],
        quote: { text: "Die Fassung auf der Bühne wird im Flur zusammengesetzt.", by: "Notizen des Freiwilligen" }
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
        { file: "fig-5.jpg", ratio: "1200/811", en: "A student at a desk beside stacks of braille books.", de: "Ein Schüler am Tisch neben Stapeln von Braille-Büchern." },
        { file: "fig-6.jpg", ratio: "1200/810", en: "Faces around a table in the half-dark.", de: "Gesichter um einen Tisch im Halbdunkel." },
        { file: "fig-7.jpg", ratio: "1200/794", en: "Small things passed around a table.", de: "Kleine Dinge, die am Tisch herumgereicht werden." },
        { file: "fig-8.jpg?v=2", privacy: true, center: true, ratio: "1400/1920", en: "The volunteer certificate — ten hours at the autumn outing, issued by Nanjing School for the Blind.", de: "Das Freiwilligenzertifikat — zehn Stunden beim Herbstausflug, ausgestellt von der Nanjing School for the Blind." }
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
