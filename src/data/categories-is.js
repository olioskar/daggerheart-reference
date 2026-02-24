const data = [
  {
    category: "📝 Persónusköpun",
    color: "#b45309",
    questions: [
      {
        q: "Skref 0 — Hugmynd og tengsl",
        a: `Áður en þú velur ætterni, stétt eða nokkra spilun — skilgreindu hver persónan þín er í sögunni.\n\nHugmynd: Skrifaðu stutta persónuhugmynd. Þetta er krókurinn sem aðrir tengjast. Það getur verið setning ("fyrrverandi hermaður sem reynir að hverfa") eða stutt efnisgrein. Einbeittu þér að því hver manneskjan er, ekki hvað hún getur gert í spilun.\n\nUpphafspunktur: Ákveðið sem hópur hvar þið kynntust eða hvar sagan hefst. Hvað vitið þið um þann stað? Hver býr þar? Þetta mótar sameiginlegt samhengi ykkar og getur haft áhrif á val á ætterni eða stétt síðar.\n\nTengsl: Ákveðið hvernig persónurnar ykkar þekkjast. Hverjum treystir þú? Við hvern átt þú í ágreiningi? Hvaða NPC-ar skipta þig máli — elskhuga, keppinautur, gamall leiðbeinandi? Vinndu með GM til að tengja persónuna þína við umhverfið og hinar persónurnar. Þessi tengsl kynda undir sögunni og gefa GM efnivið.\n\nGerðu þetta áður en þú snertir spilun. Þegar hugmynd, upphafspunktur og tengsl eru á hreinu, falla val á ætterni og stétt venjulega á sinn stað — og persónan þín verður meira en safn eiginleika.`
      },
      {
        q: "Skref 1 — Veldu stétt og undirstétt",
        a: `Veldu eina af 9 stéttum (Bard, Druid, Guardian, Ranger, Rogue, Seraph, Sorcerer, Warrior, Wizard). Hver stétt gefur þér aðgang að 2 sviðum (domains), stéttareiginleika, Hope (Von)-eiginleika (kostar 3 Hope), upphafs-Evasion (Undanfæri), upphafs-HP (Heilsustig) og stéttarhlut.\n\nVeldu síðan eina af 2 undirstéttum stéttarinnar. Þetta gefur þér Spellcast-eiginleika og Foundation-eiginleika strax (Specialization og Mastery koma síðar með stigahækkun).`
      },
      {
        q: "Skref 2 — Veldu arfleifð (ætterni + samfélag)",
        a: `Ætterni = tegund/ættlína. Veldu eitt af 18 ætternum. Þú færð 2 ætterniseiginleika.\n\nSamfélag = menningarlegur bakgrunnur. Veldu eitt af 9 samfélögum. Þú færð 1 samfélagseiginleika.\n\nFyrir blandað ætterni: taktu 1. eiginleikann frá einu ætterni og 2. eiginleikann frá öðru.`
      },
      {
        q: "Skref 3 — Úthlutaðu eigindum",
        a: `6 eigindi: Agility, Strength, Finesse, Instinct, Presence, Knowledge.\n\nDreifðu þessum breytum eins og þú vilt: +2, +1, +1, +0, +0, −1.`
      },
      {
        q: "Skref 4 — Skráðu upphafstölur",
        a: `• Stig: 1\n• Evasion (Undanfæri): frá stéttinni þinni\n• Hit Points (Heilsustig): frá stéttinni þinni\n• Stress (Álag): 6 reitir (allir)\n• Hope (Von): byrjar með 2 (hámark 6)\n• Proficiency (Leikni): 1 á stigi 1`
      },
      {
        q: "Skref 5 — Veldu búnað",
        a: `Vopn: Annað hvort 1 tvíhent vopn EÐA 1 einhent + 1 aukaverkvopn. Veldu úr Tier 1 töflum. Skaði = [Proficiency (Leikni)]×[vopnateningar]+breyting.\n\nHerklæði: Veldu úr Tier 1 töflu. Þröskuldar = herklæðagrunnur + stigið þitt. Armor Score (Herklæðastig) = grunngildi herklæða + bónusar.\n\nMunir: Kyndill, 50 feta reipi, grunnvistir, 1 hnefi af gulli, 1 Minor Health eða Stamina Potion, stéttarhlut, galdraaðfang (ef við á).`
      },
      {
        q: "Skref 6 — Bakgrunnur og tengsl",
        a: `Svaraðu bakgrunnsspurningunum á persónuleiðbeiningunni — engin áhrif á spilun, en mótar persónuna þína og hjálpar GM að undirbúa sig. Þú getur skilið það óljóst og uppgötvað í gegnum leik.\n\nLýstu síðan persónunni þinni við borðið og notaðu tengsla­spurningarnar til að koma á samböndum milli persóna. Stingdu upp á a.m.k. 1 tengslum við hverja aðra persónu. Hver sem er getur hafnað tillögu um tengsl.`
      },
      {
        q: "Skref 7 — Búðu til reynslu",
        a: `Veldu 2 Experiences, hvert með +2. Experience er orð eða setning (t.d. "Sjóræningi", "Silfurtunga", "Halda vörnina"). Eyddu 1 Hope (Von) til að bæta breytingunni við viðeigandi kast.\n\nMá ekki vera of vítt ("Heppinn") eða veita hæfni ("Flug"). Verður að lýsa yfir áður en kastað er.`
      },
      {
        q: "Skref 8 — Veldu 2 sviðsspjöld",
        a: `Veldu 2 Level 1 spjöld úr sviðum stéttarinnar þinnar. Geta verið úr sama sviði eða eitt úr hvoru. Þessi fara í hleðsluna þína (hámark 5 virk spjöld í einu).\n\nSviðsspjöld veita hæfni eða galdra. Þú færð fleiri eftir því sem þú hækkar í stigum.`
      },
      {
        q: "Skyndilisti fyrir lotu 1",
        a: `✓ Stétt + undirstétt valin, eiginleikar skráðir\n✓ Ætterni + samfélag valið, eiginleikar skráðir\n✓ Eigindum úthlutað (+2, +1, +1, +0, +0, −1)\n✓ Upphafstölur skráðar (Evasion, HP, Stress, Hope, Prof)\n✓ Vopn + herklæði valin úr Tier 1\n✓ 2 Experiences skrifuð (hvert +2)\n✓ 2 sviðsspjöld í hleðslu\n✓ Bakgrunnsspurningum svarað\n✓ A.m.k. 1 tengsl við hverja aðra persónu`
      }
    ]
  },
  {
    category: "⚜️ Stéttir og undirstéttir",
    color: "#a31d1d",
    questions: [
      {
        q: "Bard — Codex & Grace",
        a: `Evasion (Undanfæri) 10 | HP (Heilsustig) 5 | Hlutverk: Stuðningur/félagslegt\n\nRally: Einu sinni/lotu, gefðu hópnum Rally Dice (d6, d8 á L5). Hver sem er getur eytt einum til að bæta við kast, bæta við skaða, eða hreinsa Stress (Álag).\nHope (Von): Make a Scene — Eyddu 3 Hope til að afvegaleiða skotmark, sem gefur −2 á Difficulty þeirra við næstu árás á þá.\n\n• Troubadour (Presence): Söngvar — Relaxing (hreinsa 1 HP), Epic (gera skotmark Vulnerable), Heartbreaking (hópur fær Hope). 1 af hverju á hverja langa hvíld.\n• Wordsmith (Presence): Rousing Speech hreinsar 2 Stress (Álag) hjá bandamönnum. Heart of a Poet bætir d4 við félagslegt kast fyrir 1 Hope (Von).`
      },
      {
        q: "Druid — Arcana & Sage",
        a: `Evasion (Undanfæri) 10 | HP (Heilsustig) 6 | Hlutverk: Hamhleypimaður/galdramaður\n\nBeastform: Merktu Stress (Álag) til að umbreytast (formbundin við tier). Getur ekki notað vopn/galdra í formi en heldur öðrum eiginleikum. Færð Evasion-bónus, eigindi og árásir formsins.\nWildtouch: Skaðlaus náttúruáhrif að vild.\nHope (Von): Evolution — Eyddu 3 Hope til að umbreytast án þess að merkja Stress + auka 1 eigind um +1.\n\n• Warden of Elements (Instinct): Beina Fire/Earth/Water/Air fyrir bardagabónusa. Síðar öðlast þú geislasvæði og frumefnisyfirráð.\n• Warden of Renewal (Instinct): Clarity of Nature hreinsar Stress (Álag). Regeneration (3 Hope) hreinsar 1d4 HP (Heilsustig) við snertingu.`
      },
      {
        q: "Guardian — Blade & Valor",
        a: `Evasion (Undanfæri) 9 | HP (Heilsustig) 7 | Hlutverk: Vörður/framlína\n\nUnstoppable: Einu sinni/langa hvíld, farðu í Unstoppable ham með vaxandi teningi (d4, d6 á L5). Líkamlegur skaði minnkaður um einn þröskuld, ónæmur fyrir hreyfingu. Teningur vex þegar þú veldur HP-skaða.\nHope (Von): Frontline Tank — Eyddu 3 Hope til að hreinsa 2 Armor Slots (Herklæðareiti).\nUnyielding (Hope-eiginleiki): Þegar þú merkir Armor Slot, kastaðu d6 — á 5+ minnkar alvarleiki um einn þröskuld án þess að merkja.\n\n• Stalwart: +1 á skaðaþröskulda (Foundation), hækkar í +5 samtals á Mastery. Iron Will merkir auka Armor Slots til að minnka. Partners-in-Arms verndar nálæga bandamenn.\n• Vengeance: At Ease (auka Stress-reitur), Revenge (merktu 2 Stress þegar höggvið í Melee → árásarmaður merkir 1 HP). Nemesis leyfir þér að Prioritize skotmark og skipta Hope/Fear teningum á móti þeim.`
      },
      {
        q: "Ranger — Bone & Sage",
        a: `Evasion (Undanfæri) 12 | HP (Heilsustig) 6 | Hlutverk: Sóknarmaður/slóðari\n\nRanger's Focus: Eyddu Hope (Von) + ráðist á. Ef vel tekst til verður skotmark Focus — þú veist alltaf áttina, þau merkja Stress (Álag) við skaðann þinn, þú getur endað Focus til að endurkasta misheppnuðu kasti.\nHope (Von): Hold Them Off — Eyddu 3 Hope við vel heppnaða vopnaárás til að nota sama kastið á 2 viðbótarskotmörk á sviði.\n\n• Beastbound (Instinct): Dýrafélagi með eigið blað, Evasion 10, sameiginleg Experiences. Hækkar í stigum með þér. Félagi getur aðhafst sjálfstætt.\n• Wayfinder (Agility): Bætt Focus-veiði. Eiginleikar auka eftirför og banvæn högg á Focus-skotmarkið þitt.`
      },
      {
        q: "Rogue — Midnight & Grace",
        a: `Evasion (Undanfæri) 12 | HP (Heilsustig) 6 | Hlutverk: Leynisóknarmaður\n\nCloaked: Uppfært Hidden — þú helst ósýnileg/ur jafnvel þótt óvinur færi sig á staðinn þinn (á meðan þú ert kyrr). Rofið með árás eða ef þú endar hreyfingu í sjónlínu.\nSneak Attack: +[tier]d6 skaði þegar Cloaked eða bandamaður er í Melee við skotmark.\nHope (Von): Rogue's Dodge — Eyddu 3 Hope fyrir +2 Evasion (Undanfæri) þar til næsta högg eða næstu hvíld.\n\n• Nightwalker (Finesse): Shadow Stepper — merktu Stress (Álag) til að flytjast á milli skugga innan Far fjarlægðar, koma Cloaked. Dark Cloud hindrar alla sýn á svæði.\n• Syndicate (Presence): Contacts Everywhere — 2×/lotu, kallaðu á tengilið fyrir greiða (gull, verkfæri, bardagaforskot, leyniskyttu­skaða). Reliable Backup á Mastery = 3×/lotu með sterkari valkostum.`
      },
      {
        q: "Seraph — Splendor & Valor",
        a: `Evasion (Undanfæri) 9 | HP (Heilsustig) 7 | Hlutverk: Guðlegur bardagamaður/læknar\n\nPrayer Dice: Í upphafi lotu, kastaðu [Spellcast-eigind] d4-um. Eyddu hvenær sem er á sjálfa/n þig eða bandamann innan Far fjarlægðar til að minnka skaða, bæta við köst, eða fá Hope (Von). Hreinsaðu ónotuð í lok lotu.\nHope (Von): Life Support — Eyddu 3 Hope til að hreinsa 1 HP (Heilsustig) hjá bandamanni innan Close fjarlægðar.\n\n• Divine Wielder (Strength): Spirit Weapon framlengir Melee/V.Close vopn í Close fjarlægð; merktu Stress (Álag) fyrir auka skotmark. Sparing Touch hreinsar 2 HP eða 2 Stress 1×/langa hvíld.\n• Winged Sentinel (Strength): Wings of Light — fljúgðu, berðu bandamenn (merktu Stress), eyddu Hope fyrir +1d8 skaða í lofti. Ethereal Visage gefur forskot á Presence á meðan þú flýgur.`
      },
      {
        q: "Sorcerer — Arcana & Midnight",
        a: `Evasion (Undanfæri) 10 | HP (Heilsustig) 6 | Hlutverk: Meðfæddur galdrasprengir\n\nArcane Sense: Finna galdra innan Close fjarlægðar.\nMinor Illusion: Spellcast Roll (10) fyrir sjónhverfingu.\nChannel Raw Power: 1×/langa hvíld, settu hleðsluspjald í geymslu til að fá Hope = stig þess EÐA +2× spjaldsstig bónus á skaða.\nHope (Von): Volatile Magic — Eyddu 3 Hope til að endurkasta skaðateningum á galdraárás.\n\n• Elemental Origin (Instinct): Veldu frumefni við sköpun (air/earth/fire/lightning/water). Mótaðu það frjálslega, eyddu Hope fyrir +2 á köst eða +3 á skaða. Natural Evasion (merktu Stress + d6 á Evasion). Transcendence á Mastery = fullt frumefnisform.\n• Primal Origin (Presence): Beina hrágaldraorku. Efla galdra í gegnum frumkraft og viljastyrk.`
      },
      {
        q: "Warrior — Blade & Bone",
        a: `Evasion (Undanfæri) 11 | HP (Heilsustig) 6 | Hlutverk: Vopnameistari\n\nAttack of Opportunity: Viðbragðskast þegar óvinur reynir að yfirgefa Melee. Ef vel tekst til, veldu 1 áhrif (2 á crit): stöðva þá, valda vopnaskaða, eða hreyfast með þeim.\nCombat Training: Hunsa vopnabyrði. +stig bónus á líkamlegan skaða.\nHope (Von): No Mercy — Eyddu 3 Hope fyrir +1 á árásarköst þar til næstu hvíld.\n\n• Call of the Brave (Strength): Courage gefur Hope þegar þú mistekst með Fear. Battle Ritual (1×/langa hvíld, fyrir hættu) hreinsar 2 Stress + fær 2 Hope. Rise to the Challenge: d20 sem Hope-teningur á ≤2 HP.\n• Call of the Slayer (Agility): Devastating Critical — á crit, bættu aukatening og hreinsaðu Stress. Byggt fyrir hámarksskaða.`
      },
      {
        q: "Wizard — Codex & Splendor",
        a: `Evasion (Undanfæri) 11 | HP (Heilsustig) 5 | Hlutverk: Fjölhæfur undirbúinn galdramaður\n\nPrestidigitation: Minniháttar galdraáhrif að vild (breyta lit, kveikja á kerti, svífa litlum hlut, gera við, lýsa upp).\nStrange Patterns: Veldu tölu 1–12. Þegar þú kastar henni á öðrum hvorum Duality-teningi, fáðu Hope eða hreinsaðu Stress. Breyttu á langri hvíld.\nHope (Von): Not This Time — Eyddu 3 Hope til að neyða óvin innan Far fjarlægðar til að endurkasta árás eða skaðakasti.\n\n• School of Knowledge (Knowledge): Prepared gefur auka sviðsspjald. Adept leyfir þér að merkja Stress í stað Hope fyrir Experiences (tvöfaldaður breytir). Að lokum 3 auka sviðsspjöld + lægri Recall Cost.\n• School of War (Knowledge): Battlemage gefur +1 HP-reit. Face Your Fear veldur auka galdraskaða á Success with Fear (d10 → 2d10 → 3d10). Conjure Shield bætir Proficiency (Leikni) við Evasion (Undanfæri) á meðan þú heldur 2+ Hope.`
      },
      {
        q: "Fljótleg stéttasamanburður",
        a: `Hæst HP (Heilsustig) (7): Guardian, Seraph — framlínuverðir/læknar\nHæst Evasion (Undanfæri) (12): Ranger, Rogue — undanfæri\nLægst HP (5): Bard, Wizard — haltu þig til baka, stuðningur/galdar\nBesti stuðningur: Bard (Rally), Seraph (Prayer Dice + lækning)\nBesti skaði: Rogue (Sneak Attack), Warrior (Combat Training)\nBesta nytsemd: Wizard (aukaspjöld), Druid (Beastform fjölhæfni)\nBesti vörður: Guardian (Unstoppable + Armor-hreinsun)\nBesti slóðari: Ranger (Focus + félagi eða Wayfinder)`
      }
    ]
  },
  {
    category: "🧬 Ætternin (18)",
    color: "#7347c9",
    questions: [
      {
        q: "Clank (vélverur)",
        a: `Efficient: Á stuttri hvíld geturðu valið langhvíldaraðgerð í stað stutthvíldaraðgerðar.\n\nMjög sérsniðið útlit — málmur, viður, steinn. Í raun ódauðlegur líkami, en hugurinn eyðist með tímanum.`
      },
      {
        q: "Drakona (drekaættaðir)",
        a: `Scales: Á Severe-skaða, merktu Stress (Álag) til að merkja 1 færri HP (Heilsustig).\nElemental Breath: Veldu frumefni (eldur, ís, elding o.fl.). V.Close Instinct-vopn, d8 galdraskaði × Proficiency (Leikni).\n\nVængjalausir dreka-mannveruíblendingar, ~5–7 fet. ~350 ára líftími.`
      },
      {
        q: "Dwarf (dvergur)",
        a: `Thick Skin: Á Minor-skaða, merktu 2 Stress (Álag) í stað 1 HP (Heilsustig).\nIncreased Fortitude: Eyddu 3 Hope (Von) til að helminga líkamlegan skaða.\n\n~4–5,5 fet, breiðir, þéttir. Geta greypt gimsteina í húð. ~250 ár.`
      },
      {
        q: "Elf (álfur)",
        a: `Quick Reactions: Merktu Stress (Álag) til að fá forskot á viðbragðskast.\nCelestial Trance: Á hvíld, veldu viðbótar hvíldartímaverkefni.\n\n~6–6,5 fet, oddhvöss eyru. Trans í stað svefns. ~350 ár. Geta þróað galdraform með tímanum.`
      },
      {
        q: "Faerie (álfa)",
        a: `Luckbender: 1×/lotu, eyddu 3 Hope (Von) til að endurkasta Duality-teningum (þú eða viljugur bandamaður í Close fjarlægð).\nWings: Fljúg. Merktu Stress (Álag) eftir árás á þig til að fá +2 Evasion (Undanfæri) á móti.\n\n~2–7 fet, skordýraeinkenni, fara í siðaskipti. ~50 ár.`
      },
      {
        q: "Faun (fánn)",
        a: `Caprine Leap: Stökktu hvert sem er innan Close fjarlægðar sem venjuleg hreyfing (hlaup, stökk, klifur).\nKick: Á Melee-höggi, merktu Stress (Álag) fyrir +2d6 skaða og sláðu skotmark eða sjálfa/n þig til V.Close fjarlægðar.\n\nGeitarmennveruíblendingar, ~4–6,5 fet. Horn, klaufir. ~225 ár.`
      },
      {
        q: "Firbolg (nautgripaveruíblendingur)",
        a: `Charge: Vel heppnað Agility-kast til að hlaupa úr Far/V.Far í Melee → merktu Stress (Álag) til að valda 1d12 líkamlegum skaða á öllum í Melee.\nUnshakable: Þegar þú merkir Stress, kastaðu d6. Á 6 merkir þú hann ekki.\n\nNautgripamannveruíblendingar (vísundur, uxi, mínotárus), ~5–7 fet. ~150 ár.`
      },
      {
        q: "Fungril (sveppaveruíblendingur)",
        a: `Fungril Network: Instinct-kast (12) til að eiga samskipti við aðra Fungril yfir hvaða fjarlægð sem er í gegnum sveppanet.\nDeath Connection: Snertu nýlegt lík + merktu Stress (Álag) til að ná í 1 minni tengt tilfinningum.\n\nÓtrúlegt fjölbreytileiki, 2–7 fet. ~300+ ár.`
      },
      {
        q: "Galapa (skjaldbaka)",
        a: `Shell: +Proficiency (Leikni) bónus á alla skaðaþröskulda.\nRetract: Merktu Stress (Álag) til að draga þig inn í skel. Viðnám gegn líkamlegum skaða, en ókostur á aðgerðum og getur ekki hreyft sig.\n\n~4–6 fet, hvelfð skel. ~150 ár.`
      },
      {
        q: "Giant (risi)",
        a: `Endurance: +1 HP (Heilsustig) reitur við persónusköpun.\nReach: Allir Melee-fjarlægðar eiginleikar/vopn verða Very Close fjarlægð.\n\n~6,5–8,5 fet, 1–3 augu (fædd blind). ~75 ár.`
      },
      {
        q: "Goblin (gobb)",
        a: `Surefooted: Hunsa ókost á Agility-köstum.\nDanger Sense: 1×/hvíld, merktu Stress (Álag) til að neyða óvin til að endurkasta árás á þig eða bandamann í V.Close.\n\n~3–4 fet, risastór eyru og augu. Sjá í myrkri. ~100 ár.`
      },
      {
        q: "Halfling (hálflungur)",
        a: `Luckbringer: Í upphafi hverrar lotu fá allir í hópnum þínum Hope (Von).\nInternal Compass: Endurkastaðu sérhverju 1 á Hope-teningnum þínum.\n\n~3–4 fet, stórir loðnir fætur. Halda ungdómsyfirbragði. ~150 ár.`
      },
      {
        q: "Human (maður)",
        a: `High Stamina: +1 Stress (Álag) reitur við persónusköpun.\nAdaptability: Þegar þú mistekst kast sem notaði Experience, merktu Stress til að endurkasta.\n\n~5–6,5 fet, mjög aðlögunarhæfir. ~100 ár.`
      },
      {
        q: "Infernis (djöflaættuð)",
        a: `Fearless: Þegar þú kastar með Fear (Ótta), merktu 2 Stress (Álag) til að breyta því í kast með Hope (Von) í staðinn.\nDread Visage: Forskot á köst til að hræða fjandsamlegar verur.\n\nHorn, oddhvöss eyru, hvassir tennur. Sumir hafa hala. ~350 ár.`
      },
      {
        q: "Katari (kattaættuð)",
        a: `Feline Instincts: Á Agility-köstum, eyddu 2 Hope (Von) til að endurkasta Hope-teningi.\nRetracting Claws: Agility-kast til að klóra Melee-skotmark → tímabundið Vulnerable á velgengni.\n\nInndraganlegir klær, raufapupillar. ~3–6,5 fet. ~150 ár.`
      },
      {
        q: "Orc (orkur)",
        a: `Sturdy: Á 1 HP (Heilsustig) eftir fá allar árásir á þig ókost.\nTusks: Á Melee-höggi, eyddu Hope (Von) fyrir auka 1d6 skaða.\n\nFerhornings andlit, vígtennur, oddhvöss eyru. ~5–6,5 fet. ~125 ár.`
      },
      {
        q: "Ribbet (froskur)",
        a: `Amphibious: Andaðu og hreyfðu þig náttúrulega neðansjávar.\nLong Tongue: Merktu Stress (Álag) til að nota tungu sem Close Finesse-vopn, d12 líkamlegur skaði × Proficiency (Leikni).\n\nHimnutáar, útstæð augu. Fæðast sem halakörfur. ~3–4,5 fet. ~100 ár.`
      },
      {
        q: "Simiah (prímataættuð)",
        a: `Natural Climber: Forskot á Agility-köst fyrir jafnvægi og klifur.\nNimble: Varanlegt +1 Evasion (Undanfæri) við persónusköpun.\n\nGríptæar (sum hafa hala). Hæfir klifrari. ~2–6 fet. ~100 ár.`
      },
      {
        q: "Blandað ætterni",
        a: `Taktu 1. eiginleikann frá einu ætterni og 2. frá öðru. Skrifaðu arfleifðina þína eins og þú vilt (blönduð heiti, eitt ætterni, eða fundið upp nýtt nafn).\n\nGetur táknað fleiri en 2 ætterni í útliti/bakgrunni, en veldu eiginleika úr nákvæmlega 2 í spilun.`
      }
    ]
  },
  {
    category: "🏘️ Samfélögin (9)",
    color: "#0d9488",
    questions: [
      {
        q: "Highborne (auðugir/aðalsfólk)",
        a: `Privilege: Forskot á köst til að umgangast aðalsfólk, semja um verð, eða nýta mannorð.\n\nPersónuleiki: vinaleg/ur, hreinskilin/n, slóttugt, framtakssamur, tilgerðarlegur, stilltur.`
      },
      {
        q: "Loreborne (fræðimenn/pólitík)",
        a: `Well-Read: Forskot á köst sem tengjast sögu, menningu eða pólitík áberandi manneskju eða staðar.\n\nPersónuleiki: bein/n, mælskur, forvitinn, þolinmóður, þýður, fyndinn.`
      },
      {
        q: "Orderborne (agaðir/trú)",
        a: `Dedicated: Skráðu 3 málsgreinar eða gildi. 1×/hvíld, þegar þú lýsir þeim í verki, kastaðu d20 sem Hope-teningnum þínum.\n\nPersónuleiki: metnaðarfullur, velgjörðarfullur, íhugull, gætinn, kaldhæðinn, stóískur.`
      },
      {
        q: "Ridgeborne (fjöll)",
        a: `Steady: Forskot á köst til að fara yfir kletta/kantar, sigla um hörð umhverfi, eða nota lífshæfileika.\n\nPersónuleiki: djarfur, harðgerður, ósveigjanlegur, tryggur, fálátur, þrjóskur.`
      },
      {
        q: "Seaborne (strandsvæði/sjóferðir)",
        a: `Know the Tide: Þegar þú kastar með Fear (Ótta), fáðu tákn (hámark = stig). Áður en aðgerðarkast, eyddu hvaða fjölda sem er fyrir +1 hvert. Hreinsaðu ónotuð í lok lotu.\n\nPersónuleiki: hreinskilinn, samvinnuþýður, áhugasamur, grimmilegur, staðráðinn, veðrabitinn.`
      },
      {
        q: "Slyborne (glæpamenn/undirheimar)",
        a: `Scoundrel: Forskot á köst til að semja við glæpamenn, greina lygar, eða finna öruggt felustaður.\n\nPersónuleiki: útreiknandi, klókur, agalegur, skyggn, kænn, seigur.`
      },
      {
        q: "Underborne (neðanjarðar)",
        a: `Low-Light Living: Í litlu ljósi eða þungum skugga, forskot á köst til að fela sig, rannsaka, eða skynja smáatriði.\n\nPersónuleiki: yfirvegaður, undanfærinn, óbilandi, hugvitssamur, ráðvendinn, hógvær.`
      },
      {
        q: "Wanderborne (hirðingjar)",
        a: `Nomadic Pack: 1×/lotu, eyddu Hope (Von) til að draga nytsamlegan hversdagslegan hlut úr böggulnum þínum (vinndu með GM til að ákveða hvað).\n\nPersónuleiki: ráðgátulegur, stórmennskulegur, glaðlegur, áreiðanlegur, snjall, óhefðbundinn.`
      },
      {
        q: "Wildborne (skógur/náttúra)",
        a: `Lightfoot: Hreyfing þín er náttúrulega hljóðlát. Forskot á köst til að hreyfast án þess að heyrast.\n\nPersónuleiki: harðgerður, tryggur, umhyggjusamur, einangraður, vitur, líflegur.`
      }
    ]
  },
  {
    category: "🎲 Grunnköst",
    color: "#6d28d9",
    questions: [
      {
        q: "Hvernig virka aðgerðarköst?",
        a: `Kastaðu 2d12 (Duality Dice) — einn Hope-teningur, einn Fear-teningur. Leggðu saman bæði + eigindabreyting. Berðu samtölu saman við Difficulty sem GM setur.\n\nEf samtala ≥ Difficulty → velgengni.\nEf samtala < Difficulty → misheppni.\nHvor teningurinn sýndi hærra ræður hvort þú færð Hope (Von) eða myndar Fear (Ótta).`
      },
      {
        q: "Hverjar eru 4 niðurstöðurnar?",
        a: `• Success with Hope — samtala ≥ Difficulty, Hope-teningur hærri. Þú tekst og færð Hope (Von).\n• Success with Fear — samtala ≥ Difficulty, Fear-teningur hærri. Þú tekst en GM fær Fear (Ótta) (getur bætt við fylgikvilla).\n• Failure with Hope — samtala < Difficulty, Hope-teningur hærri. Þú mistekst (minniháttar afleiðing), færð Hope, kastljós → GM.\n• Failure with Fear — samtala < Difficulty, Fear-teningur hærri. Þú mistekst (alvarleg afleiðing), GM fær Fear, kastljós → GM.`
      },
      {
        q: "Hvað er Critical Success?",
        a: `Báðir Duality-teningar sýna sömu tölu (tvíburar). Þú tekst sjálfkrafa óháð samtölu, færð Hope (Von), og hreinsar Stress (Álag). Á árásarköstum veldur þú crit-skaða. Telst sem "with Hope." Getur ekki fengið crit á viðbragðsköstum (tvíburar hafa engin sérstök áhrif).`
      },
      {
        q: "Hvernig eru viðbragðsköst frábrugðin?",
        a: `Viðbragðsköst bregðast við árásum eða hættum. Þau virka eins og aðgerðarköst NEMA: þau mynda ekki Hope eða Fear, kveikja ekki á GM-aðgerðum og eru ekki studd af Help an Ally. Tvíburar á viðbragðskasti = hunsa öll áhrif en enginn Hope/Stress-ávinningur.`
      },
      {
        q: "Hópaðgerðarköst?",
        a: `Einn leikmaður leiðir, aðrir aðstoða. Leiðtogi kastar aðgerðarkasti. Hver hjálpari kastar viðbragðskasti með viðeigandi eigind. Leiðtogi fær +1 á hvert velgengni hjálpara og −1 á hverja misheppni hjálpara.`
      },
      {
        q: "Tag Team-köst?",
        a: `Kostar: 3 Hope (Von), einu sinni á lotu á hvern upphafsvald. Tveir leikmaður kasta hvor sínu aðgerðarkasti, velja síðan eina niðurstöðu fyrir báða. Á Tag Team-árás kasta báðir skaða og leggja saman samtölur (ein uppspretta). Hope → allir leikmaður fá Hope. Fear → GM fær einn Fear á hvern leikmann. Telst sem eitt aðgerðarkast fyrir niðurteljara.`
      },
      {
        q: "Forskot og ókostur?",
        a: `Forskot: kastaðu auka d6, bættu við samtölu.\nÓkostur: kastaðu auka d6, dragðu frá samtölu.\nÞau hætta við 1-á-móti-1 (kastaðu aldrei báðum). Margir Help an Ally bónusar stafla ekki — notaðu hæsta d6 aðeins.`
      },
      {
        q: "Help an Ally",
        a: `Eyddu 1 Hope (Von) til að gefa bandamanni forskot (kasta d6, bæta við samtölu þeirra). Má nota á hvaða aðgerðarkast sem þú sérð, lýst yfir áður eða eftir kast en áður en afleiðingar koma. Margir hjálparar: aðeins hæsta d6 gildir. Má ekki hjálpa á viðbragðsköstum.`
      }
    ]
  },
  {
    category: "⚔️ Bardagi og skaði",
    color: "#9f1239",
    questions: [
      {
        q: "Hvernig virka árásir?",
        a: `Árás er aðgerðarkast til að valda skaða. Eigind er tilgreind af vopni eða galdri. Difficulty = Evasion (Undanfæri) skotmarks (leikmaður) eða Difficulty-stig (óvinir).\n\nVopnalaus: Strength eða Finesse, veldur [Proficiency (Leikni)]d4 líkamlegum skaða.`
      },
      {
        q: "Skaðaþröskuldar útskýrðir",
        a: `Berðu heildarskaða saman við þröskuldana þína:\n• Undir Major → 1 HP (Heilsustig) merkt\n• ≥ Major en < Severe → 2 HP merkt\n• ≥ Severe → 3 HP merkt\n• Minnkað niður í 0 eða minna → engin HP merkt\n\nÞröskuldar = herklæðagrunnur + persónustig. Þeir hækka á hverju stigi.`
      },
      {
        q: "Crit-skaði",
        a: `Á crit (tvíburar), kastaðu skaða venjulega og bættu síðan hámarks mögulegri teninganiðurstöðu ofan á. Dæmi: 2d8+1 crit = 2d8+1+16.`
      },
      {
        q: "Skaðategundir og viðnám",
        a: `Líkamlegur (phy) og galdur (mag). Viðnám = helminga þá tegund áður en borið er saman við þröskulda. Ónæmi = hunsa alveg.\n\nBeinn skaði sniðgengur Armor Slots (Herklæðareiti). Margfalt viðnám gegn sömu tegund staflar ekki.`
      },
      {
        q: "Armor Slots — hvernig virka þeir?",
        a: `Þegar þú tekur skaða getur þú merkt Armor Slots (Herklæðareiti) til að minnka skaða um Armor Score (Herklæðastig) þitt á hvern merktan reit. Þú velur hversu marga á að merkja. Reitir haldast merktir þar til viðgerð á hvíld (Repair Armor-verkefni).\n\nArmor Score = grunngildi herklæða + bónusar.`
      },
      {
        q: "Fjarlægðarsvið",
        a: `• Melee — snerting/nokkur fet\n• Very Close — ~5–10 fet\n• Close — ~10–30 fet\n• Far — ~30–100 fet\n• Very Far — ~100–300 fet\n• Out of Range — lengra en V.Far\n\nLeikmaður: frjáls hreyfing til Close sem hluti af aðgerð. Til Far/V.Far þarf Agility-kast.\nÓvinir: frjáls hreyfing til Close með aðgerð. V.Far er sérstök aðgerð.`
      },
      {
        q: "Fjölskotmarkaárásir",
        a: `1 árásarkast, 1 skaðakast, beitt á hvert skotmark sérstaklega. Öll skotmörk verða að vera innan V.Close frá einum upprunastað (ekki innan V.Close hvort af öðru).\n\nMargir skaðauppsprettur sem hitta samtímis: leggðu saman allan skaða fyrst, berðu síðan saman við þröskulda einu sinni.`
      },
      {
        q: "Sjónlína og skjól",
        a: `Þarf sjónlínu fyrir fjarskotsárásir. Hlutahindrun = skjól → ókostur á árásinni. Full hindrun = engin sjónlína → getur ekki skotið á þá.`
      },
      {
        q: "Gríðarskaði (valfrjáls regla)",
        a: `Ef skaði ≥ 2× Severe-þröskuldur → merktu 4 HP (Heilsustig) í stað 3. Gerir bardaga banvænni — notið eftir dómgreind borðsins.`
      }
    ]
  },
  {
    category: "📦 Auðlindir",
    color: "#2d6a8a",
    questions: [
      {
        q: "Hope — öðlun og eyðsla",
        a: `Byrja með 2, hámark 6, haldast milli lota.\nÖðlun: kasta með Hope (Von), crit, eða sérstakir eiginleikar.\n\nEyða til að:\n• Help an Ally (1 Hope) — kasta d6 forskoti\n• Nota Experience (1 hvert) — bæta breytingu við kast\n• Tag Team Roll (3 Hope) — sameina með öðrum leikmaður\n• Hope-eiginleikar — stétta Hope-eiginleikar kosta 3\n\nHope (Von) sem fæst á kasti má eyða strax á sama kasti.`
      },
      {
        q: "Fear — gjaldmiðill GM",
        a: `GM fær þegar leikmenn kasta með Fear (Ótta). Hámark 12, haldast milli lota. Einnig fengið á hvíldum (1d4 á stuttri, 1d4 + fjöldi leikmaður á langri).\n\nGM eyðir til að: gera/efla GM-aðgerðir, virkja Fear Features óvina, enda tímabundin galdrááhrif, kastljóssetja fleiri óvini í umferð.`
      },
      {
        q: "Stress — þolsafn þitt",
        a: `6 reitir sjálfgefið (sum ætterni/stéttir bæta við fleiri). Notaðir til að kynda undir hæfni, einnig lagðir á af GM-aðgerðum og kastafleiðingum.\n\n• Síðasti Stress (Álag) merktur → þú verður Vulnerable (þar til 1+ hreinsuð)\n• Verður að merkja Stress en allir fullir → merktu 1 HP (Heilsustig) í staðinn\n• Getur ekki af fúsum og frjálsum vilja notað Stress-kostaðar hreyfingar ef allir reitir merktir`
      },
      {
        q: "Proficiency — skaðakvarði þinn",
        a: `Ákvarðar fjölda skaðateninga með vopnum/göldrum. Byrjar á 1 (stig 1). Hækkar á L2 (Prof 2), L5 (Prof 3), L8 (Prof 4).\n\nMargfaldar teningum eingöngu, EKKI flatri breytingu. Dæmi: Prof 2 með d8+2 vopni = 2d8+2.`
      }
    ]
  },
  {
    category: "⚡ Ástand og áhrif",
    color: "#059669",
    questions: [
      {
        q: "3 stöðluð ástand",
        a: `• Hidden — óvinir vita ekki af þér. Árásir á þig hafa ókost. Endar þegar þú sést, færð þig í sjónlínu, eða ráðist á.\n• Restrained — getur ekki hreyft þig, getur samt aðhafst frá núverandi stað.\n• Vulnerable — öll köst sem miðast á þig hafa forskot.`
      },
      {
        q: "Tímabundin ástand",
        a: `"Tímabundið" þýðir að skotmarkið getur notað aðgerð til að reyna hreinsa það. Leikmenn þurfa vel heppnað aðgerðarkast (viðeigandi eigind). Óvinir: GM lýsir hreinsun — notar kastljós þeirra en ekkert kast þarf.`
      },
      {
        q: "Stöflunareglur",
        a: `Sama ástand getur ekki gilt tvisvar á sama skotmark. Öll önnur töluleg áhrif STAFLA nema annað sé tekið fram. Forskot/ókostur hættir við 1-á-móti-1 (kasta aldrei báðum saman).`
      },
      {
        q: "Viðvarandi galdar og tímalengd",
        a: `Ef engin skráð lok, þá endar áhrifin þegar: þú velur að enda þau, GM endar þau (getur kostað Fear fyrir tímabundin áhrif), eða sagan krefst þess. Þú getur viðhaldið mörgum galdrááhrifum samtímis.`
      }
    ]
  },
  {
    category: "🏕️ Hvíld og dauði",
    color: "#854d0e",
    questions: [
      {
        q: "Stutt hvíld (~1 klukkustund)",
        a: `Veldu 2 verkefni:\n• Tend Wounds — hreinsa 1d4+Tier HP (Heilsustig)\n• Clear Stress — hreinsa 1d4+Tier Stress (Álag)\n• Repair Armor — endurheimta 1d4+Tier Armor Slots (Herklæðareiti)\n• Prepare — fá Hope (Von) (2 ef hvílt með bandamönnum)\n\nGM fær 1d4 Fear (Ótta). Getur skipt um hleðslu/geymsluspjöld í upphafi hvíldar. 3 stuttar hvíldir í röð → næsta verður að vera löng.`
      },
      {
        q: "Löng hvíld (nokkrar klukkustundir)",
        a: `Veldu 2 verkefni:\n• Tend ALL Wounds — hreinsa allt HP (Heilsustig)\n• Clear ALL Stress — hreinsa allt Stress (Álag)\n• Repair ALL Armor — endurheimta alla Armor Slots (Herklæðareiti)\n• Prepare — fá Hope (Von)\n• Work on a Project — haltu áfram langtímaverkefni\n\nGM fær 1d4 + fjöldi leikmaður Fear (Ótta) + getur fært niðurteljara áfram. Trufluð löng hvíld = stutt hvíld einungis.`
      },
      {
        q: "Dauðaaðgerðir (0 HP)",
        a: `Þegar þú merkir síðasta HP (Heilsustig) þitt, veldu eitt:\n\n• Blaze of Glory — ein síðasta sjálfvirk crit-aðgerð, síðan deyrðu.\n• Avoid Death — missir meðvitund (getur ekki aðhafst, óvinir geta ekki skotmarkað þig). Endurlífgaður þegar bandamaður hreinsar 1+ HP eða eftir langa hvíld. Kastaðu Hope-teningi: ef ≤ stig → fáðu ör (strika varanlega yfir Hope-reit). Síðasti Hope-reitur horfinn → ferðalagið þitt er á enda.\n• Risk It All — kastaðu Duality-teningum. Hope hærri → haltu þig, hreinsaðu HP og Stress = Hope-teningsgildi. Fear hærri → þú deyrð. Tvíburar → haltu þig, hreinsaðu ALLT HP og Stress.`
      },
      {
        q: "Vinna að verkefni",
        a: `Aðeins á langri hvíld. GM úthlutar niðurteljara á verkefnið. Í hvert skipti sem þú tekur þessa aðgerð, annað hvort sjálfvirk framvinda eða aðgerðarkast (GM ákveður). Nytsamlegt fyrir smíði, rannsóknir, afkóðun texta, smíðar.`
      }
    ]
  },
  {
    category: "🎭 Kastljós og GM",
    color: "#be185d",
    questions: [
      {
        q: "Umferðarröð — engin frumkvæðisköst",
        a: `Engin frumkvæðisköst. Kastljós færist lífrænt:\n• Sagan bendir náttúrulega á einhvern\n• Einhver hefur ekki fengið athygli í smá stund\n• Spilun kveikir á kastljósfærslu\n\nValfrjáls skipulagður leikur: gefðu hverjum leikmaður tákn (t.d. 3). Fjarlægðu 1 á hverja aðgerð. Fylltu aftur þegar öll notuð. Takmarkar hversu margar aðgerðir einn leikmaður tekur áður en aðrir fara.`
      },
      {
        q: "Hvenær bregst GM við?",
        a: `Íhugaðu GM-aðgerð þegar leikmaður: kastar með Fear (Ótta), mistekst kast, gerir eitthvað með rökréttum afleiðingum, gefur gullna tækifæri, eða lítur á GM í von.\n\nEftir GM-aðgerð → kastljós snýr aftur til leikmaður. GM ætti að boða hættu áður en höggvið er hart.`
      },
      {
        q: "Umferðir óvina",
        a: `Þegar kastljóssettir getur einn óvinur:\n• Hreyft sig til Close + venjuleg árás\n• Hreyft sig til Close + notað aðgerðareiginleika óvinar\n• Hreinsað ástand á sjálfum sér\n• Hlaupið til Far eða V.Far (engin árás)\n• Hvað sem sagan krefst\n\nGM eyðir auka Fear (Ótta) til að kastljóssetja fleiri óvini í sama takti.`
      },
      {
        q: "Niðurteljarar",
        a: `Fylgjast með framvindu í átt að atburðum, afleiðingum eða hæfni óvina. Teningur byrjar á tölu og telur niður. Staðlaður niðurteljar telur þegar einhver leikmaður kastar aðgerðarkasti.\n\nLykkjuniðurteljarar endurstillast eftir ræsingu. Notaðir fyrir átakahraða, liðsauka, umhverfishættur, hleðsluhæfni.`
      },
      {
        q: "Föll og umhverfisskaði",
        a: `• V.Close fall: 1d10+3 líkamlegur\n• Close fall: 1d20+5 líkamlegur\n• Far/V.Far fall: 1d100+15 eða skyndi­dauði (GM ákveður)\n• Árekstur á hraða: 1d20+5 beinn líkamlegur\n• Neðansjávar: árásir hafa ókost, öndunarnið­urteljar (3) telur á aðgerð, merktu Stress (Álag) þegar hann rennur út`
      }
    ]
  },
  {
    category: "📈 Stigahækkun og framvinda",
    color: "#5b5299",
    questions: [
      {
        q: "Stigauppbygging og þrep",
        a: `10 stig, 4 þrep:\n• Tier 1: Stig 1\n• Tier 2: Stig 2–4\n• Tier 3: Stig 5–7\n• Tier 4: Stig 8–10\n\nGM ákveður áfanga (u.þ.b. á 3 lota fresti). Allur hópurinn hækkar saman. Engin XP-mæling.`
      },
      {
        q: "Hvað gerist á hverri stigahækkun?",
        a: `Á hverju stigi:\n1. Hækka alla skaðaþröskulda um +1\n2. Fá nýtt sviðsspjald á eða undir stiginu þínu\n3. Veldu 2 framfarir úr þrepinu þínu eða hvaða lægra þrepi sem er\n\nViðbót á þrepamörkum (L2, L5, L8):\n• +1 Proficiency (Leikni)\n• Nýtt Experience á +2\n• Á L5 og L8: hreinsaðu öll merkt (læst) eigindi`
      },
      {
        q: "Framfaravalkostir",
        a: `Á hverju stigi, veldu 2 úr:\n• Auka 2 ómerkt eigindi um +1 (eigindi læsast þar til næsta þrep)\n• +1 HP (Heilsustig) reitur\n• +1 Stress (Álag) reitur\n• +1 á Experience-breytingu\n• Taka viðbótar sviðsspjald\n• Fá Specialization eða Mastery undirstéttareiginleika\n• Auka Armor Score (Herklæðastig) um +1\n• Fjölstétta inn í annað svið\n• Aðrir stéttarbundnir valkostir`
      },
      {
        q: "Fjölstéttun",
        a: `Í boði sem stigahækkunarframför. Veldu svið frá annarri stétt. Þú getur valið spjöld á eða undir hálfu stiginu þínu úr því sviði.\n\nVeitir EKKI: stéttareiginleika, undirstéttareiginleika eða Hope-eiginleika frá hinni stéttinni. Sviðsspjöld eingöngu.`
      },
      {
        q: "Hleðsla gegn geymslu",
        a: `Hleðsla = allt að 5 virk sviðsspjöld (áhrif nothæf).\nGeymsla = geymd spjöld (engin áhrif þar til skipt inn).\n\nSkiptið frjálslega í upphafi hverrar hvíldar. Í miðri lotu: merktu Stress (Álag) jafnt og Recall Cost spjaldsins til að flytja spjald úr geymslu → hleðslu.\n\nUndirstéttar-, ætternis- og samfélagsspjöld eru alltaf virk og teljast ekki í 5-spjalda hámarkið.`
      }
    ]
  },
  {
    category: "💰 Búnaður og herfang",
    color: "#78716c",
    questions: [
      {
        q: "Grunnvopn",
        a: `Hvert vopn tilgreinir: fjarlægð, eigind fyrir árásir, skaðateninga, skaðategund (phy/mag) og sérstaka eiginleika.\n\nEinhent: aðal + auka. Tvíhent: aðal eingöngu.\nSkaði = [Proficiency (Leikni)] × [vopnateningar] + flöt breyting.\n\nVopnaskipti: frítt á hvíld eða í ró. Annars merktu Stress (Álag).`
      },
      {
        q: "Vopnaeiginleikar",
        a: `• Burden: Þyngd/kröfur — sumar stéttir hunsa þetta (Warrior: Combat Training).\n• Cumbersome: Ókostur í ákveðnum aðstæðum.\n• Thrown: Hægt að kasta á tilgreindan fjarlægð.\n• Reach: Framlengir virkt fjarlægðarsvið.\n• Versatile: Hægt að nota einhent eða tvíhent með mismunandi stöðum.\n\nHvert vopn getur haft einstaka eiginleika lýst í færslu sinni.`
      },
      {
        q: "Herklæði og þröskuldar",
        a: `Herklæði veita: Grunngildi (skaði minnkaður á hvern merktan Armor Slot (Herklæðareit)), grunnþröskulda (Major/Severe áður en stigi er bætt við), og fjölda Armor Slots.\n\nÞröskuldar = grunnur + stig. Þyngri herklæði = betri vörn, fleiri reitir, en geta haft byrðar.\n\nArmor Score (Herklæðastig) er hægt að auka með framfaravalkostum.`
      },
      {
        q: "Gull og munir",
        a: `Gull mælt í "hnefum" — óhlutbundin auðeiningar. Byrjar með 1 hnefa.\n\nMunaskrá er frjáls — skráðu það sem skiptir máli, stressaðu þig ekki yfir hversdagslegum munum nema GM segi til.\n\nNeytendavörur: hámark 5 af hverri tegund. Lækningadrykkir (hreinsa HP eða Stress), eitur, einnotahlutir. Notaðu sem aðgerð.`
      },
      {
        q: "Herfangsþrep",
        a: `Herfang stígur með þrepi hópsins (Tier 1–4). Algengt herfang finnst á búðum eða tjaldstæðum. Hærra þrep herfang hefur betri stöður og einstaka galdraeiginleika.\n\nGM stýrir framboði herfangs. Sumir hlutir hafa einstaka eiginleika sem finnast ekki á grunnbúnaði.`
      }
    ]
  },
  {
    category: "🪄 Galdraköst",
    color: "#7e22ce",
    questions: [
      {
        q: "Spellcast-köst",
        a: `Eigindakast sem notar Spellcast-eigindina þína (skilgreind af undirstétt). Aðeins virkjað þegar sviðsspjald eða eiginleiki krefst þess — ekki allir galdar nota Spellcast-köst.\n\nSkaðavaldandi Spellcast-kast er líka árásarkast (notar sömu reglur fyrir velgengni/misheppni + skaða).`
      },
      {
        q: "Galdratímalengd og viðhald",
        a: `Ef galdratextinn tilgreinir hvenær hann endar, fylgdu því. Annars varir hann þar til: þú velur að enda hann, náttúrulegur söguatburður kemur, eða GM eyðir Fear (Ótta) til að enda tímabundið áhrif.\n\nÞú getur viðhaldið mörgum virkum göldrum í einu. Þú getur alltaf endað eigin galdra snemma ókeypis.`
      },
      {
        q: "Grimoire-spjöld (Codex-svið)",
        a: `Stakt spjald sem veitir aðgang að safni minni galdra frekar en einum stórum eiginleika. Codex-sviðs sérsvið — Bard og Wizard geta nálgast þetta í gegnum sviðslista sína.`
      },
      {
        q: "Galdravísir (Spell focus)",
        a: `Sumir galdar krefjast galdravísis (stafur, kúla, sproti o.fl.). Þetta er hluti af upphafsmunum þínum ef stéttin þín þarfnast hans. Vísirinn sjálfur hefur engar stöður — hann er söguleg krafa.`
      }
    ]
  },
  {
    category: "🔮 Arcana sviðsspjöld",
    color: "#6e45a8",
    questions: [
      {
        q: "Arcana-svið — yfirlit",
        a: `Arcana er hrá galdraorka — flutningur, hreyfiafl hugar, frumefnassprengingar og raunveruleikabreytingar. Svið galdramanna sem beina arkanum krafti beint. Þungt á Spellcast-köst, oft með háan skaðaþak og vígvallastjórnun. Mörg spjöld nota táknkerfi sem tæmast eftir því sem þú aðhafst.`
      },
      {
        q: "Rune Ward (Arcana L1, Ability, Recall 0)",
        a: `Þú átt persónulegan smágrip sem virkar sem verndargaldur. Handhafi (þú eða bandamaður) getur eytt Hope (Von) til að minnka skaða um 1d8. Ef d8 sýnir 8 endar kraftur varnarins eftir að skaði er minnkaður þá umferð — endurhladdu ókeypis á næstu hvíld.`
      },
      {
        q: "Unleash Chaos (Arcana L1, Spell, Recall 1)",
        a: `Í upphafi lotu, settu tákn jafn og Spellcast-eigindinni þinni á þetta spjald. Kastaðu Spellcast-kasti á skotmark innan Far og eyddu einhverjum fjölda tákna — á velgengni, kastaðu jafnmörgum d10-um fyrir galdraskaða. Merktu Stress (Álag) til að endurnýja tákn (allt að Spellcast-eigind). Hreinsaðu ónotuð tákn í lok lotu.`
      },
      {
        q: "Wall Walk (Arcana L1, Spell, Recall 1)",
        a: `Eyddu Hope (Von) til að leyfa veru sem þú snertir að klifra veggi og loft jafn auðveldlega og að ganga. Varir til loka senu eða þar til þú kastar aftur.`
      },
      {
        q: "Counterspell (Arcana L2, Spell, Recall 1)",
        a: `Truflaðu galdraáhrif með Spellcast-viðbragðskasti. Á velgengni stöðvast áhrifin og afleiðingum er forðað. Þetta spjald fer síðan í geymsluna þína.`
      },
      {
        q: "Cinder Grasp (Arcana L2, Spell, Recall 1)",
        a: `Spellcast-kast á skotmark í Melee. Á velgengni: 1d20+3 galdraskaði, skotmark er tímabundið On Fire. Á meðan á eldi, taka þau auka 2d6 galdraskaða í lok hverrar aðgerðar sinnar.`
      },
      {
        q: "Floating Eye (Arcana L2, Spell, Recall 0)",
        a: `Eyddu Hope (Von) til að búa til litla fljótandi kúlu sem þú getur hreyft innan Very Far fjarlægðar. Þú getur séð/heyrt í gegnum hana frjálslega, skipst á milli eigin skynjunar og kúlunnar. Endar ef kúlan tekur skaða eða yfirgefur svið.`
      },
      {
        q: "Flight (Arcana L3, Spell, Recall 2)",
        a: `Spellcast-kast (15). Á velgengni, settu tákn jafn og Agility (lágmark 1). Á meðan þú flýgur, eyddu tákni í hvert skipti sem þú kastar aðgerðarkasti. Eftir að síðasta táknið er eytt og aðgerðin leyst, þá lendir þú á jörðinni undir þér.`
      },
      {
        q: "Blink Out (Arcana L4, Spell, Recall 1)",
        a: `Spellcast-kast (12). Á velgengni, eyddu Hope (Von) til að flytjast á sýnilegan stað innan Far. Eyddu auka Hope á hverja viljuga veru í Very Close til að taka þá með.`
      },
      {
        q: "Preservation Blast (Arcana L4, Spell, Recall 2)",
        a: `Spellcast-kast á öll skotmörk í Melee. Skotmörk sem þú tekst á reka aftur til Far og taka d8+3 galdraskaða (Spellcast-eigind).`
      },
      {
        q: "Chain Lightning (Arcana L5, Spell, Recall 1)",
        a: `Merktu 2 Stress (Álag). Spellcast-kast — öll skotmörk í Close verða að kasta viðbragðskasti (Difficulty = Spellcast-niðurstaðan þín). Misheppnir taka 2d8+4 galdraskaða. Síðan kerfir: allir óárásaðir óvinir innan Close af skemmdu skotmarki verða líka að bregðast við. Kerfir þar til engin gild skotmörk eru eftir.`
      },
      {
        q: "Premonition (Arcana L5, Spell, Recall 2)",
        a: `Einu sinni á langa hvíld, strax eftir að GM segir þér afleiðingar kastsins þíns, geturðu afturkallað allt — hætt við aðgerðina og afleiðingar alveg, tekið síðan aðra aðgerð í staðinn.`
      },
      {
        q: "Confusing Aura (Arcana L6, Spell, Recall 2)",
        a: `Spellcast-kast (14). Einu sinni á langa hvíld, búðu til sjónhverfingalög yfir sjálfan þig. Merktu einhvern fjölda Stress (Álag) fyrir auka lög. Þegar ráðist er á þig, kastaðu d6-um jafn og virkum lögum — ef einhver nær 5+, eitt lag eyðilegst og árásin mistekst. Ef öll eru 4 eða lægra, tekurðu skaða og galdurinn endar.`
      },
      {
        q: "Rift Walker (Arcana L6, Spell, Recall 2)",
        a: `Spellcast-kast (15). Á velgengni, settu arkana merkingu þar sem þú stendur. Næst þegar þú kastar Rift Walker opnast rifa sem veitir leið aftur til merkingarinnar. Rifan er opin þar til þú lokar henni eða kastar öðrum galdri. Þú getur sleppt og sett nýja merkingu.`
      },
      {
        q: "Telekinesis (Arcana L6, Spell, Recall 0)",
        a: `Spellcast-kast á skotmark í Far. Á velgengni, hreyfðu þau hvert sem er innan Far frá stöðu þeirra. Þú getur kastað þeim á annað skotmark — kastaðu öðru Spellcast-kasti, valdið d12+4 líkamlegum skaða (Proficiency) á velgengni. Galdur endar síðan.`
      },
      {
        q: "Cloaking Blast (Arcana L7, Spell, Recall 2)",
        a: `Þegar þú tekst á Spellcast-kasti fyrir annan galdur, eyddu Hope (Von) til að verða Cloaked (ósýnileg/ur á meðan kyrr). Að færa sig í sjónlínu óvinar eða ráðast á endar huluna.`
      },
      {
        q: "Arcana-Touched (Arcana L7, Ability, Recall 2)",
        a: `Þegar 4+ Arcana-spjöld eru í hleðslunni þinni: +1 á Spellcast-köst, og einu sinni á hvíld geturðu skipt niðurstöðum Hope og Fear teninganna þinna.`
      },
      {
        q: "Arcane Reflection (Arcana L8, Spell, Recall 1)",
        a: `Þegar þú myndir taka galdraskaða, eyddu einhverjum fjölda Hope (Von) og kastaðu jafnmörgum d6-um. Ef einhver sýnir 6 speglast árásin aftur til galdraaðans — þeir taka skaðann í staðinn.`
      },
      {
        q: "Earthquake (Arcana L9, Spell, Recall 2)",
        a: `Spellcast-kast (16). Einu sinni á hvíld, öll skotmörk sem ekki fljúga innan Very Far verða að kasta viðbragðskasti (18). Misheppnir: 3d10+8 líkamlegur skaði + tímabundið Vulnerable. Velgengni: hálfur skaði. Allt landsvæði á sviði verður erfitt; mannvirki geta hrunið.`
      },
      {
        q: "Sensory Projection (Arcana L9, Spell, Recall 0)",
        a: `Einu sinni á hvíld, Spellcast-kast (15). Á velgengni ferðu inn í sýn af einhverjum stað sem þú hefur verið áður — sérð og heyrir hann í rauntíma. Þú hreyfist frjálslega, án líkamlegra takmarkana. Ekki greindur neinum meðölum. Endar ef þú tekur skaða eða kastar öðrum galdri.`
      },
      {
        q: "Adjust Reality (Arcana L10, Spell, Recall 1)",
        a: `Eftir að þú eða bandamaður kastar einhverju kasti, eyddu 5 Hope (Von) til að breyta tölulegri niðurstöðunni í gildi að eigin vali. Verður að vera sanngjarn innan teningasviðs.`
      },
      {
        q: "Falling Sky (Arcana L10, Spell, Recall 1)",
        a: `Spellcast-kast á alla óvini í Far. Merktu einhvern fjölda Stress (Álag) — skotmörk sem þú tekst á taka 1d20+2 galdraskaða á hvert merkt Stress.`
      }
    ]
  },
  {
    category: "🗡️ Blade sviðsspjöld",
    color: "#a31d1d",
    questions: [
      {
        q: "Blade-svið — yfirlit",
        a: `Blade er hreinn bardagasnilld — að slá harðar, lifa lengur og hvetja bandamenn í gegnum bardagafremur. Allt hæfni (engir galdar), svo engin Spellcast-köst þörf. Einbeitir sér að skaðabónusum, crit-verðlaunum, sjálflækningu í gegnum ofbeldi og herklæðasamspili. Sviðið fyrir framlínuher­menn og vopnasérhæfinga.`
      },
      {
        q: "Get Back Up (Blade L1, Ability, Recall 1)",
        a: `Þegar þú tekur Severe-skaða, merktu Stress (Álag) til að minnka alvarleika um einn þröskuld (Severe → Major).`
      },
      {
        q: "Not Good Enough (Blade L1, Ability, Recall 1)",
        a: `Þegar þú kastar skaðateningum geturðu endurkastað sérhverju 1 eða 2.`
      },
      {
        q: "Whirlwind (Blade L1, Ability, Recall 0)",
        a: `Á vel heppnaðri árás á skotmark í Very Close, eyddu Hope (Von) til að teygja árásina á öll önnur skotmörk í Very Close. Viðbótarskotmörk sem þú tekst á taka hálfan skaða.`
      },
      {
        q: "A Soldier's Bond (Blade L2, Ability, Recall 1)",
        a: `Einu sinni á langa hvíld, þegar þú hrósar einhverjum eða spyrð um eitthvað sem þau eru góð í, fáið þið bæði 3 Hope (Von).`
      },
      {
        q: "Reckless (Blade L2, Ability, Recall 1)",
        a: `Merktu Stress (Álag) til að fá forskot á árás.`
      },
      {
        q: "Scramble (Blade L3, Ability, Recall 1)",
        a: `Einu sinni á hvíld, þegar vera í Melee myndi valda þér skaða, forðastu árásina alveg og hreyfðu þig örugglega út úr Melee.`
      },
      {
        q: "Versatile Fighter (Blade L3, Ability, Recall 1)",
        a: `Þú getur notað aðra persónueignd fyrir vopn í stað þeirrar sem það kallar venjulega á.`
      },
      {
        q: "Deadly Focus (Blade L4, Ability, Recall 2)",
        a: `Einu sinni á hvíld, veldu skotmark. Þar til þú ráðist á aðra veru, sigrar skotmarkið, eða bardaga lýkur: +1 á Proficiency (Leikni).`
      },
      {
        q: "Fortified Armor (Blade L4, Ability, Recall 0)",
        a: `Á meðan þú berð herklæði, +2 á skaðaþröskulda.`
      },
      {
        q: "Champion's Edge (Blade L5, Ability, Recall 1)",
        a: `Á crit-árás, eyddu allt að 3 Hope (Von). Fyrir hvert Hope veldu eitt (engar endurtekningar): hreinsa HP (Heilsustig), hreinsa Armor Slot (Herklæðareit), eða neyða skotmark til að merkja auka HP.`
      },
      {
        q: "Vitality (Blade L5, Ability, Recall 0)",
        a: `Fáðu varanlega tvo af: einn Stress (Álag) reit, einn HP (Heilsustig) reit, eða +2 á skaðaþröskulda. Síðan fer þetta spjald í geymsluna þína varanlega.`
      },
      {
        q: "Battle-Hardened (Blade L6, Ability, Recall 2)",
        a: `Einu sinni á langa hvíld, þegar þú myndir gera dauðaaðgerð, eyddu Hope (Von) til að hreinsa HP (Heilsustig) í staðinn.`
      },
      {
        q: "Rage Up (Blade L6, Ability, Recall 1)",
        a: `Áður en árás, merktu Stress (Álag) fyrir +2× Strength á skaðakastið. Má Rage Up tvisvar á hverja árás.`
      },
      {
        q: "Blade-Touched (Blade L7, Ability, Recall 1)",
        a: `Þegar 4+ Blade-spjöld í hleðslunni: +2 á árásarköst, +4 á Severe-skaðaþröskuld.`
      },
      {
        q: "Glancing Blow (Blade L7, Ability, Recall 1)",
        a: `Þegar þú mistekst árás, merktu Stress (Álag) til að valda vopnaskaða með hálfri Proficiency (Leikni) samt.`
      },
      {
        q: "Battle Cry (Blade L8, Ability, Recall 2)",
        a: `Einu sinni á langa hvíld, á meðan þú hleypur í hættu: allir bandamenn sem heyra þig hreinsa Stress (Álag) og fá Hope (Von). Bandamenn fá einnig forskot á árásir þar til þú eða bandamaður kastar Failure with Fear.`
      },
      {
        q: "Frenzy (Blade L8, Ability, Recall 3)",
        a: `Einu sinni á langa hvíld, farðu í Frenzied þar til engir óvinir eru í sjónmáli. Á meðan Frenzied: getur ekki notað Armor Slots, en +10 á skaðaköst og +8 á Severe-þröskuld.`
      },
      {
        q: "Gore and Glory (Blade L9, Ability, Recall 2)",
        a: `Á crit vopnaárás: fáðu auka Hope (Von) eða hreinsaðu auka Stress (Álag). Þegar þú sigrar óvin: fáðu Hope eða hreinsaðu Stress.`
      },
      {
        q: "Reaper's Strike (Blade L9, Ability, Recall 3)",
        a: `Einu sinni á langa hvíld, eyddu Hope (Von) til að kasta árásarkasti. GM sýnir hvaða skotmörk á sviði það myndi ná á. Veldu eitt — það skotmark merkir 5 HP (Heilsustig).`
      },
      {
        q: "Battle Monster (Blade L10, Ability, Recall 0)",
        a: `Á vel heppnaðri árás, merktu 4 Stress (Álag) til að neyða skotmark til að merkja HP (Heilsustig) jafn og fjölda HP sem þú ert með merkt (í stað þess að kasta skaða).`
      },
      {
        q: "Onslaught (Blade L10, Ability, Recall 3)",
        a: `Vel heppnaðar vopnaárásir valda aldrei undir Major-þröskuld (skotmark merkir alltaf lágmark 2 HP). Einnig, þegar vera á vopnasviði skaðar bandamann (ekki þig), merktu Stress (Álag) til að neyða þau til viðbragðskasts (15) — á misheppni merkir skotmark HP (Heilsustig).`
      }
    ]
  },
  {
    category: "🦴 Bone sviðsspjöld",
    color: "#78716c",
    questions: [
      {
        q: "Bone-svið — yfirlit",
        a: `Bone er taktísk bardagameistarastjórn — undanfæri, nákvæmni, staðsetning á vígvelli og nýting veikleika. Blanda af hæfni sem einbeitir sér að vörn, gagnárás, stuðningi bandamanna í gegnum klóka leikrænu og sundurliðun óvina skipulega. Sviðið fyrir þá sem berjast jafnt með greind og blaði.`
      },
      {
        q: "Deft Maneuvers (Bone L1, Ability, Recall 0)",
        a: `Einu sinni á hvíld, merktu Stress (Álag) til að hlaupa hvert sem er innan Far án Agility-kasts. Ef þú endar í Melee við óvin og ráðist strax á, +1 á árásarkastið.`
      },
      {
        q: "I See It Coming (Bone L1, Ability, Recall 1)",
        a: `Þegar skotmark er á þig úr lengri fjarlægð en Melee, merktu Stress (Álag) til að kasta d4 og bæta niðurstöðunni við Evasion (Undanfæri) gegn þeirri árás.`
      },
      {
        q: "Untouchable (Bone L1, Ability, Recall 1)",
        a: `Fáðu bónus á Evasion (Undanfæri) jafn og hálfu Agility.`
      },
      {
        q: "Ferocity (Bone L2, Ability, Recall 2)",
        a: `Þegar þú veldur óvini að merkja 1+ HP (Heilsustig), eyddu 2 Hope (Von) til að auka Evasion um fjölda HP sem þeir merktu. Varir þar til eftir næstu árás á þig.`
      },
      {
        q: "Strategic Approach (Bone L2, Ability, Recall 1)",
        a: `Eftir langa hvíld, settu tákn jafn og Knowledge (lágmark 1). Fyrsta skiptið sem þú hreyfir þig innan Close af óvini og ráðist á, eyddu tákni fyrir eitt af: forskot á árásina, hreinsa Stress á bandamanni í Melee við skotmark, eða bæta d8 við skaða. Hreinsaðu ónotuð tákn á langri hvíld.`
      },
      {
        q: "Brace (Bone L3, Ability, Recall 1)",
        a: `Þegar þú merkir Armor Slot (Herklæðareit) til að minnka skaða, merktu Stress (Álag) til að merkja auka Armor Slot.`
      },
      {
        q: "Tactician (Bone L3, Ability, Recall 1)",
        a: `Þegar þú hjálpar bandamanni (Help an Ally) geta þeir eytt Hope (Von) til að bæta einu af Experience-unum þínum við kastið sitt samhliða forskotstengingi þínum. Á Tag Team-köstum geturðu kastað d20 sem Hope-teningnum þínum.`
      },
      {
        q: "Boost (Bone L4, Ability, Recall 1)",
        a: `Merktu Stress (Álag) til að leysa þig af stað frá viljugum bandamanni innan Close, fleygðu þér í loftið og ráðist á skotmark innan Far. Forskot á árásina, bæta d10 við skaða, enda í Melee við skotmarkið.`
      },
      {
        q: "Redirect (Bone L4, Ability, Recall 1)",
        a: `Þegar fjarskotsárás á þig mistekst, kastaðu d6-um jafn og Proficiency (Leikni). Ef einhver sýnir 6, merktu Stress (Álag) til að beina árásinni á óvin innan Very Close.`
      },
      {
        q: "Know Thy Enemy (Bone L5, Ability, Recall 1)",
        a: `Instinct-kast á skotmark sem þú fylgist með. Á velgengni, eyddu Hope (Von) og spurðu GM eitt af: ómerkt HP/Stress, Difficulty/þröskuldar, aðferðir/staðlaðan árásarskaða, eða eiginleikar/Experiences. Á velgengni, merktu einnig Stress (Álag) til að fjarlægja Fear frá GM-safni.`
      },
      {
        q: "Signature Move (Bone L5, Ability, Recall 1)",
        a: `Nefndu og lýstu sérstakri bardagaaðgerð. Einu sinni á hvíld, þegar þú framkvæmir hana, kastaðu d20 sem Hope-teningnum þínum. Á velgengni, hreinsa Stress (Álag).`
      },
      {
        q: "Rapid Riposte (Bone L6, Ability, Recall 0)",
        a: `Þegar Melee-árás á þig mistekst, merktu Stress (Álag) til að valda vopnaskaða eins virks vopns þíns á árásarmanninn.`
      },
      {
        q: "Recovery (Bone L6, Ability, Recall 1)",
        a: `Á stuttri hvíld geturðu valið langhvíldarverkefni í staðinn. Eyddu Hope (Von) til að leyfa bandamanni að gera sama.`
      },
      {
        q: "Cruel Precision (Bone L7, Ability, Recall 1)",
        a: `Á vel heppnaðri vopnaárás, bættu Finesse eða Agility við skaðakastið.`
      },
      {
        q: "Bone-Touched (Bone L7, Ability, Recall 2)",
        a: `Þegar 4+ Bone-spjöld í hleðslu: +1 Agility, og einu sinni á hvíld eyddu 3 Hope (Von) til að valda árás sem tókst á þig til að mistakast í staðinn.`
      },
      {
        q: "Breaking Blow (Bone L8, Ability, Recall 3)",
        a: `Á vel heppnaðri árás, merktu Stress (Álag) — næsta vel heppnaða árás á sama skotmark veldur auka 2d12 skaða.`
      },
      {
        q: "Wrangle (Bone L8, Ability, Recall 1)",
        a: `Agility-kast á öll skotmörk í Close. Eyddu Hope (Von) til að hreyfa skotmörk sem þú tekst á (og viljuga bandamenn í Close) á annan stað innan Close.`
      },
      {
        q: "On the Brink (Bone L9, Ability, Recall 1)",
        a: `Þegar þú hefur 2 eða færri HP (Heilsustig) ómerkt, tekur þú ekki Minor-skaða.`
      },
      {
        q: "Splintering Strike (Bone L9, Ability, Recall 3)",
        a: `Eyddu Hope (Von), ráðist á alla óvini á vopnasviði. Einu sinni á langa hvíld á velgengni: leggðu saman allan skaða, dreifðu síðan hvernig sem þú vilt á milli skotmarka. Hvert skotmark sem þú veldur skaða fær einnig auka skaðateningi.`
      },
      {
        q: "Deathrun (Bone L10, Ability, Recall 1)",
        a: `Eyddu 3 Hope (Von) til að hlaupa beina leið til Far, ráðast á alla óvini á vopnasviði á leiðinni. Fyrsta skotmark: vopnaskaði +1 Proficiency. Hvert næsta skotmark: fjarlægðu teningi úr safninu. Getur ekki hitt sama skotmark tvisvar.`
      },
      {
        q: "Swift Step (Bone L10, Ability, Recall 2)",
        a: `Þegar árás á þig mistekst, hreinsaðu Stress (Álag). Ef þú getur ekki hreinsað Stress, fáðu Hope (Von).`
      }
    ]
  },
  {
    category: "📚 Codex sviðsspjöld",
    color: "#2d5a8e",
    questions: [
      {
        q: "Codex-svið — yfirlit",
        a: `Codex er lærður galdur — grímóírur, galdrabækur og fræðileg arkana. Hvert grímóíruspjald inniheldur 2–3 galdra á einu spjaldi (meiri fjölhæfni á reit). Nær yfir nytjagaldra (gáttir, læsingar, sjónhverfingar, fjarskipti), sókn (eldkúlur, sundrun) og stuðning (smíðaverur, tímastjórnun). Sviðið fyrir galdramenn sem rannsaka galdra kerfisbundið. Hærri Recall Cost endurspeglar flækjuna.`
      },
      {
        q: "Book of Ava (Codex L1, Grimoire, Recall 2)",
        a: `Power Push: Spellcast-kast á skotmark í Melee. Á velgengni, ýtt aftur til Far + d10+2 galdraskaði (Proficiency).\nTava's Armor: Eyddu Hope (Von) til að gefa snertingu +1 Armor Score (Herklæðastig) þar til næstu hvíld eða endurcast.\nIce Spike: Spellcast-kast (12) til að kalla fram íssúlu innan Far. Sem vopn: Spellcast á Difficulty, d6 líkamlegur skaði (Proficiency).`
      },
      {
        q: "Book of Illiat (Codex L1, Grimoire, Recall 2)",
        a: `Slumber: Spellcast-kast á skotmark í Very Close. Á velgengni, skotmark sofnar þar til skaðað eða GM eyðir Fear til að hreinsa.\nArcane Barrage: Einu sinni á hvíld, eyddu einhverjum fjölda Hope (Von) — kastaðu jafnmörgum d6-um sem galdraskaða á skotmark í Close.`
      },
      {
        q: "Book of Vagras (Codex L1, Grimoire, Recall 2)",
        a: `Runic Lock: Spellcast-kast (15) á hlut sem þú snertir. Einu sinni á hvíld á velgengni, læstu honum svo aðeins verur sem þú velur geta opnað. Má brjóta með göldrum og klukkutíma rannsókn.\nArcane Door: Spellcast-kast (13), engir óvinir í Melee. Eyddu Hope (Von) til að opna gátt á sýnilegan stað innan Far. Lokast eftir eina veru fer í gegn.\nReveal: Spellcast-kast — allt sem er galdrafalið innan Close afhjúpast.`
      },
      {
        q: "Book of Sitil (Codex L2, Grimoire, Recall 2)",
        a: `Adjust Appearance: Breyttu útliti þínu og klæðnaði með göldrum til að forðast þekkingu.\nParallela: Eyddu 2 Hope (Von) á þig eða bandamann í Close. Næsta árás þeirra hittir auka skotmark á sviði sem það myndi ná á. Eitt skotmark í einu.\nIllusion: Spellcast-kast (14). Búðu til tímabundna sjónhverfingu (ekki stærri en þú) innan Close. Heldur þar til áhorfandi er í Melee.`
      },
      {
        q: "Book of Tyfar (Codex L2, Grimoire, Recall 2)",
        a: `Telepathy: Eyddu Hope (Von) til að opna hugsamskipti við sýnilegt skotmark. Varir þar til næstu hvíld eða endurcast.\nMagic Hand: Kallaðu fram galdrað hönd (þín stærð/styrkur) innan Far.\nMysterious Mist: Spellcast-kast (13). Búðu til þykka kyrra þoku innan Very Close. Hylur mjög allt innra.`
      },
      {
        q: "Book of Korvax (Codex L3, Grimoire, Recall 2)",
        a: `Levitation: Spellcast-kast til að lyfta sýnilegu skotmarki í loftið og hreyfa þau innan Close frá upprunalegri stöðu.\nRecant: Eyddu Hope (Von) — skotmark í Melee kastar viðbragðskasti (15). Á misheppni gleyma þau síðustu mínútu af samtali.\nRune Circle: Merktu Stress (Álag) til að búa til galdraring þar sem þú stendur. Óvinir í Melee (eða fara í Melee) taka 2d12+4 galdraskaða og eru reknir til Very Close.`
      },
      {
        q: "Book of Norai (Codex L3, Grimoire, Recall 2)",
        a: `Wild Flame: Spellcast-kast á allt að 3 óvini í Melee. Velgengnir taka 2d6 galdraskaða og merkja Stress.\nMystic Tether: Spellcast-kast á skotmark í Far. Á velgengni, tímabundið Restrained + merkja Stress. Nemur fljúgandi verur.\nFireball: Spellcast-kast á skotmark í Very Far. Á velgengni, skotmark + allar verur í Very Close af þeim kasta viðbragði (13). Misheppnir: d20+5 galdraskaði (Proficiency). Velgengni: hálfur.`
      },
      {
        q: "Book of Exota (Codex L4, Grimoire, Recall 3)",
        a: `Repudiate: Truflaðu galdraáhrif — Spellcast-viðbragðskast. Einu sinni á hvíld á velgengni, áhrifin stöðvast og afleiðingum forðað.\nCreate Construct: Eyddu Hope (Von), galdraðu hlutum í smíðaveru sem hlýðir einföldum skipunum. Deilir Evasion/eigindum þínum, árásir valda 2d10+3 líkamlegum skaða. Einn í einu; molnar við allan skaða.`
      },
      {
        q: "Book of Grynn (Codex L4, Grimoire, Recall 2)",
        a: `Arcane Deflection: Einu sinni á langa hvíld, eyddu Hope (Von) til að afnema skaða frá árás á þig eða bandamann í Very Close.\nTime Lock: Miðaðu á hlut í Far — hann stöðvast í tíma/rúmi þar til næstu hvíld. Spellcast-kast á hvern sem reynir að hreyfa hann.\nWall of Flame: Spellcast-kast (15). Búðu til eldvegg á milli tveggja punkta innan Far. Allt sem fer í gegn tekur 4d10+3 galdraskaða.`
      },
      {
        q: "Manifest Wall (Codex L5, Spell, Recall 2)",
        a: `Spellcast-kast (15). Einu sinni á hvíld, eyddu Hope (Von) til að búa til tímabundinn vegg á milli tveggja punkta innan Far. Allt að 50 fet hár, hvaða horn sem er. Verur/hlutir á leiðinni ýttir til hliðar. Varir þar til næstu hvíld eða endurcast.`
      },
      {
        q: "Sigil of Retribution (Codex L5, Spell, Recall 2)",
        a: `Merktu óvin í Close með tákni. GM fær Fear (Ótta). Þegar merkt skotmark skaðar þig/bandamenn, settu d8 á þetta spjald (hámark = stigið þitt). Á næstu vel heppnuðu árás á þá, kastaðu öllum geymdum d8-um og bættu við skaða, hreinsaðu síðan. Endar á sigri skotmarks eða endurcast.`
      },
      {
        q: "Banish (Codex L6, Spell, Recall 0)",
        a: `Spellcast-kast á skotmark í Close. Kastaðu d20-um jafn og Spellcast-eigind — skotmark bregst við hæstu niðurstöðunni þinni. Á velgengni skotmarks: merktu Stress. Einu sinni á hvíld á misheppni: brottvísað úr þessari veröld. Í hvert skipti sem leikmenn kasta Fear, lækkar brottvísanarDifficulty um 1 og skotmark fær annað viðbragðskast til að snúa aftur.`
      },
      {
        q: "Teleport (Codex L6, Spell, Recall 2)",
        a: `Einu sinni á langa hvíld, flyttu sjálfa/n þig + viljug skotmörk í Close á stað sem þú hefur verið. Spellcast-kast (16) með breytingum: þekkir vel (+3), heimsótt oft (+1), sjaldnar (+0), aðeins einu sinni (−2). Misheppni = af leið, alvarleiki eftir því hversu illa kastið fór.`
      },
      {
        q: "Book of Homet (Codex L7, Grimoire, Recall 0)",
        a: `Pass Through: Spellcast (13). Einu sinni á hvíld, þú + allar snertiverur fara í gegnum vegg/hurð innan Close.\nPlane Gate: Spellcast (14). Einu sinni á langa hvíld, opnaðu gátt á aðra vídd/heim sem þú hefur verið á. Varir þar til næstu hvíld.`
      },
      {
        q: "Codex-Touched (Codex L7, Ability, Recall 2)",
        a: `Þegar 4+ Codex-spjöld í hleðslu: þú getur merkt Stress (Álag) til að bæta Proficiency (Leikni) við Spellcast-kast, og einu sinni á hvíld skipt þessu spjaldi við hvaða geymsluspjald sem er án þess að greiða Recall.`
      },
      {
        q: "Book of Vyola (Codex L8, Grimoire, Recall 2)",
        a: `Memory Delve: Spellcast-kast á skotmark í Far. Á velgengni, kíktu inn í hug þeirra — spurðu GM spurningu og þeir lýsa viðeigandi minningum.\nShared Clarity: Einu sinni á langa hvíld, eyddu Hope (Von) á tvær viljugar verur. Þegar önnur myndi merkja Stress, velur parið hver merkir. Varir þar til hvíld.`
      },
      {
        q: "Safe Haven (Codex L8, Spell, Recall 3)",
        a: `Með nokkrum mínútum af ró, eyddu 2 Hope (Von) til að kalla fram millivíddaheimili. Galdrahurð birtist innan Close — aðeins verur sem þú velur geta farið inn. Þú getur gert innganginn ósýnilegan. Hvíld inni veitir auka hvíldartímaverkefni.`
      },
      {
        q: "Book of Ronin (Codex L9, Grimoire, Recall 4)",
        a: `Transform: Spellcast (15). Vertu hlutir (allt að 2× stærð þín). Varir þar til þú tekur skaða.\nEternal Enervation: Einu sinni á langa hvíld, Spellcast-kast á skotmark í Close. Á velgengni, varanlega Vulnerable — hreinsast ekki neinum meðölum.`
      },
      {
        q: "Disintegration Wave (Codex L9, Spell, Recall 4)",
        a: `Spellcast-kast (18). Einu sinni á langa hvíld, GM segir þér hvaða óvinir í Far hafa Difficulty 18 eða lægra. Merktu Stress (Álag) fyrir hvern sem þú miðar á — þeir eru drepnir og ekki hægt að endurlífga.`
      },
      {
        q: "Book of Yarrow (Codex L10, Grimoire, Recall 2)",
        a: `Timejammer: Spellcast (18). Tíminn stöðvast fyrir allt í Far nema þig. Hefst aftur þegar þú kastar aðgerðarkasti á veru.\nMagic Immunity: Eyddu 5 Hope (Von) til að verða ónæmur fyrir galdraskaða þar til næstu hvíld.`
      },
      {
        q: "Transcendent Union (Codex L10, Spell, Recall 1)",
        a: `Einu sinni á langa hvíld, eyddu 5 Hope (Von) á tvær eða fleiri viljugar verur. Þar til næstu hvíld, þegar einhver tengd vera myndi merkja Stress (Álag) eða HP (Heilsustig), velur hópurinn hver merkir.`
      }
    ]
  },
  {
    category: "💃 Grace sviðsspjöld",
    color: "#b5366f",
    questions: [
      {
        q: "Grace-svið — yfirlit",
        a: `Grace er sjarma, blekking, leikræn frammistaða og félagsleg stýring — auk sjónhverfingagaldra. Blanda af hæfni og göldrum sem einbeitir sér að stjórnun fólks frekar en vígvallar. Felur í sér huglestur, dulbúnað, ögrandi óvini, hvatning bandamanna og stuldur eiginleika úr spjöldum annarra leikmanna. Sviðið fyrir þá sem tala sig í gegnum vandamál.`
      },
      {
        q: "Deft Deceiver (Grace L1, Ability, Recall 0)",
        a: `Eyddu Hope (Von) til að fá forskot á kast til að blekkja eða plata einhvern til að trúa lygi.`
      },
      {
        q: "Enrapture (Grace L1, Spell, Recall 0)",
        a: `Spellcast-kast á skotmark í Close. Á velgengni, skotmark er tímabundið Enraptured — athygli fest á þig, sjónsvið þrengt, heyra aðeins rödd þína. Einu sinni á hvíld á velgengni, merktu Stress (Álag) til að neyða Enraptured skotmarkið til að merkja Stress líka.`
      },
      {
        q: "Inspirational Words (Grace L1, Ability, Recall 1)",
        a: `Eftir langa hvíld, settu tákn jafn og Presence. Þegar þú talar við bandamann, eyddu tákni til að: hreinsa Stress (Álag), hreinsa HP (Heilsustig), eða gefa þeim Hope (Von). Hreinsaðu ónotuð tákn á langri hvíld.`
      },
      {
        q: "Tell No Lies (Grace L2, Spell, Recall 1)",
        a: `Spellcast-kast á skotmark í Very Close. Á velgengni, geta þau ekki logið á meðan þau eru í Close (en eru ekki neydd til tala). Ef þau neita spurningu, merkja þau Stress (Álag) og áhrifin enda. Skotmark er venjulega ómeðvitað um galdrinn.`
      },
      {
        q: "Troublemaker (Grace L2, Ability, Recall 2)",
        a: `Ögraðu/erttu skotmark í Far — Presence-kast á þau. Einu sinni á hvíld á velgengni, kastaðu d4-um jafn og Proficiency (Leikni). Skotmark merkir Stress (Álag) jafn og hæstu d4-niðurstöðunni.`
      },
      {
        q: "Hypnotic Shimmer (Grace L3, Spell, Recall 1)",
        a: `Spellcast-kast á alla óvini fyrir framan þig innan Close. Einu sinni á hvíld á velgengni, skotmörk eru tímabundið Stunned (geta ekki notað viðbrögð eða tekið aðgerðir þar til hreinsað) og merkja Stress (Álag).`
      },
      {
        q: "Invisibility (Grace L3, Spell, Recall 1)",
        a: `Spellcast (10). Merktu Stress (Álag), veldu sjálfa/n þig eða bandamann í Melee til að verða ósýnileg/ur (ósýn, árásir á þá hafa ókost). Settu tákn jafn og Spellcast-eigind — eyddu einu á hverja aðgerð. Eftir síðasta táknið leysist aðgerðin, áhrifin enda. Eitt skotmark í einu.`
      },
      {
        q: "Soothing Speech (Grace L4, Ability, Recall 1)",
        a: `Á stuttri hvíld, þegar þú huggar einhvern á meðan þú notar Tend to Wounds á þá, hreinsaðu auka HP (Heilsustig) á þeirri persónu. Þú hreinsar líka 2 HP á sjálfum þér.`
      },
      {
        q: "Through Your Eyes (Grace L4, Spell, Recall 1)",
        a: `Veldu skotmark í Very Far. Sjáðu í gegnum augu þeirra og heyrðu í gegnum eyru þeirra. Skiptu frjálslega á milli þinnar skynjunar og þeirra. Varir þar til þú kastar öðrum galdri eða næstu hvíld.`
      },
      {
        q: "Thought Delver (Grace L5, Spell, Recall 2)",
        a: `Eyddu Hope (Von) til að lesa yfirborðshugsanir skotmarks í Far. Spellcast-kast á skotmark til að kafa dýpra. Á kasti með Fear, getur GM ákveðið að skotmarkið verði meðvitað um innbrotið.`
      },
      {
        q: "Words of Discord (Grace L5, Spell, Recall 1)",
        a: `Hvíslaðu til óvinar í Melee, Spellcast (13). Á velgengni, skotmark merkir Stress (Álag) og verður að ráðast á annan óvin í staðinn fyrir þig/bandamenn. Skotmark áttar sig á hvað gerðist eftirá — næsta galdurinn á þá hefur −5 refsingu.`
      },
      {
        q: "Never Upstaged (Grace L6, Ability, Recall 2)",
        a: `Þegar þú merkir 1+ HP (Heilsustig) af árás, merktu Stress (Álag) til að setja tákn jafn og merkt HP. Næsta vel heppnaða árás þín fær +5 skaða á hvert tákn, hreinsaðu síðan öll tákn.`
      },
      {
        q: "Share the Burden (Grace L6, Spell, Recall 0)",
        a: `Einu sinni á hvíld, snertu viljuga veru og taktu á þig Stress (Álag) þeirra. Þeir deila náinni hugsun/tilfinningu í ferlinu. Flyttu einhvern fjölda merkts Stress yfir á þig, fáðu síðan Hope (Von) á hvert flutt Stress.`
      },
      {
        q: "Endless Charisma (Grace L7, Ability, Recall 1)",
        a: `Eftir aðgerðarkast til að sannfæra, ljúga eða öðlast hylli, eyddu Hope (Von) til að endurkasta Hope eða Fear teningnum.`
      },
      {
        q: "Grace-Touched (Grace L7, Ability, Recall 2)",
        a: `Þegar 4+ Grace-spjöld í hleðslu: þú getur merkt Armor Slot (Herklæðareit) í stað Stress (Álag), og þegar þú neyðir skotmark til að merkja HP (Heilsustig) geturðu neytt Stress í staðinn.`
      },
      {
        q: "Astral Projection (Grace L8, Spell, Recall 0)",
        a: `Einu sinni á langa hvíld, merktu Stress (Álag) til að búa til afrit af þér hvar sem þú hefur verið. Sjáðu/heyrðu í gegnum það, hafðu áhrif á heiminn eins og þú værir þar. Áhorfendur geta séð að það er galdralegt. Varir þar til næstu hvíld eða afritið tekur skaða.`
      },
      {
        q: "Mass Enrapture (Grace L8, Spell, Recall 3)",
        a: `Spellcast-kast á öll skotmörk í Far. Velgengni eru tímabundið Enraptured (athygli fest á þig). Merktu Stress (Álag) til að neyða öll Enraptured skotmörk til að merkja Stress, sem endar galdrinn.`
      },
      {
        q: "Copycat (Grace L9, Spell, Recall 3)",
        a: `Einu sinni á langa hvíld, herma eftir eiginleikum sviðsspjalds annars leikmanns (L8 eða lægra) úr hleðslu þeirra. Eyddu Hope (Von) jafn og hálfu spjaldsstigi til að fá aðgang. Varir þar til hvíld eða þeir setja spjaldið í geymslu.`
      },
      {
        q: "Master of the Craft (Grace L9, Ability, Recall 0)",
        a: `Fáðu varanlega +2 á tvö Experiences eða +3 á eitt Experience. Síðan fer þetta spjald í geymsluna þína varanlega.`
      },
      {
        q: "Encore (Grace L10, Spell, Recall 1)",
        a: `Þegar bandamaður í Close veldur óvini skaða, Spellcast-kast á það skotmark. Á velgengni, veldur sama skaða og bandamaðurinn þinn gerði. Ef Spellcast tekst með Fear, settu þetta spjald í geymslu.`
      },
      {
        q: "Notorious (Grace L10, Ability, Recall 0)",
        a: `Fólk þekkir mannorð þitt. Merktu Stress (Álag) áður en þú kastar til að fá +10 á niðurstöðuna þegar þú nýtir frægð þína. Ókeypis matur/drykkur alls staðar; allt annað kostar 1 poka minna (lágmark 1 hnefa). Telst ekki í 5-spjalda hleðsluhámörk og er ekki hægt að setja í geymslu.`
      }
    ]
  },
  {
    category: "🌘 Midnight sviðsspjöld",
    color: "#5e6e8f",
    questions: [
      {
        q: "Midnight-svið — yfirlit",
        a: `Midnight er skuggi, leyndardómur og dökkir galdar — innrás, dulbúnaður, fyrirsát og ótti. Blanda galdra og hæfni til að leyniferðast, þagga, binda með skugga og hræða óvini. Felur í sér flutning í gegnum myrkur, huglestur á fjarlægð og verða draugalegur. Sviðið fyrir þá sem starfa úr skugganum.`
      },
      {
        q: "Pick and Pull (Midnight L1, Ability, Recall 0)",
        a: `Forskot á köst til að opna ógaldraðar læsingar, afvirkja ógaldraðar gildrur, eða stela hlutum (með leyndardómi eða krafti).`
      },
      {
        q: "Rain of Blades (Midnight L1, Spell, Recall 1)",
        a: `Eyddu Hope (Von), Spellcast-kast á öll skotmörk í Very Close. Velgengni taka d8+2 galdraskaða (Proficiency). Ef skotmark er Vulnerable, auka 1d8 skaði.`
      },
      {
        q: "Uncanny Disguise (Midnight L1, Spell, Recall 0)",
        a: `Með nokkrum mínútum til undirbúnings, merktu Stress (Álag) til að taka útlit hvaða mannveru sem þú getur ímyndað þér. Forskot á Presence-köst til að forðast eftirlit. Settu tákn jafn og Spellcast-eigind — eyddu einu á hverja aðgerð. Dulbúningur hverfur eftir síðasta táknið.`
      },
      {
        q: "Midnight Spirit (Midnight L2, Spell, Recall 1)",
        a: `Eyddu Hope (Von) til að kalla fram mannveru-stærðar anda þar til næstu hvíld. Getur hreyft/borið hluti fyrir þig. Til árásar: Spellcast-kast á skotmark í Very Far — á velgengni, andi hreyfist til Melee, kastaðu d6-um jafn og Spellcast-eigind fyrir galdraskaða, andi hverfur síðan. Einn í einu.`
      },
      {
        q: "Shadowbind (Midnight L2, Spell, Recall 0)",
        a: `Spellcast-kast á alla óvini í Very Close. Velgengni eru tímabundið Restrained þar sem skuggi þeirra bindur þau.`
      },
      {
        q: "Chokehold (Midnight L3, Ability, Recall 1)",
        a: `Staðsettu þig á bak við veru á þinni stærð, merktu Stress (Álag) til að setja í kyrkingartök — tímabundið Vulnerable. Árásir á skotmark sem er Vulnerable á þennan hátt valda auka 2d6 skaða.`
      },
      {
        q: "Veil of Night (Midnight L3, Spell, Recall 1)",
        a: `Spellcast (13). Búðu til myrkurtjald á milli tveggja punkta innan Far. Aðeins þú getur séð í gegn. Þú ert Hidden fyrir óvinum hinum megin, forskot á árásir gegnum tjaldið. Varir þar til þú kastar öðrum galdri.`
      },
      {
        q: "Stealth Expertise (Midnight L4, Ability, Recall 0)",
        a: `Þegar þú kastar Fear á meðan þú leynist í gegnum hættu, merktu Stress (Álag) til að breyta því í kast með Hope. Sama gildir: ef bandamaður í Close kastar Fear á meðan hann leynist, merktu Stress til að snúa niðurstöðu þeirra líka.`
      },
      {
        q: "Glyph of Nightfall (Midnight L4, Spell, Recall 1)",
        a: `Spellcast-kast á skotmark í Very Close. Á velgengni, eyddu Hope (Von) til að kalla fram dökkt tákn — minnkar tímabundið Difficulty skotmarks um Knowledge (lágmark 1).`
      },
      {
        q: "Hush (Midnight L5, Spell, Recall 1)",
        a: `Spellcast-kast á skotmark í Close. Eyddu Hope (Von) til að þagga skotmark + allt í Very Close af þeim (fylgir þeim). Getur ekki framkallað hljóð, getur ekki kastað göldrum. Varir þar til GM eyðir Fear, þú endurkastar, eða þú tekur Major-skaða.`
      },
      {
        q: "Phantom Retreat (Midnight L5, Spell, Recall 2)",
        a: `Eyddu Hope (Von) til að merkja núverandi stöðu þína. Áður en næstu hvíld, eyddu öðru Hope til að hverfa og birtast á merkta staðnum. Galdur endar eftir endurbirtu.`
      },
      {
        q: "Dark Whispers (Midnight L6, Spell, Recall 0)",
        a: `Talaðu inn í hug einhvers sem þú hefur verið í líkamlegri snertingu við — þeir geta talað til baka. Merktu Stress (Álag) + Spellcast-kast til að spyrja eitt af: hvar eru þeir, hvað eru þeir að gera, hvers óttast þeir, hvað kæra þeir mest.`
      },
      {
        q: "Mass Disguise (Midnight L6, Spell, Recall 0)",
        a: `Með nokkrum mínútum af þögn, merktu Stress (Álag) til að dulbúa allar viljugar verur í Close. Verða að deila almennri líkamsgerð. Forskot á Presence til að forðast eftirlit. Virkja niðurteljara (8) — telur sem GM-valin afleiðing. Dulbúningur hverfur þegar niðurteljarinn ræsist.`
      },
      {
        q: "Midnight-Touched (Midnight L7, Ability, Recall 2)",
        a: `Þegar 4+ Midnight-spjöld í hleðslu: einu sinni á hvíld, þegar þú hefur 0 Hope (Von) og GM myndi fá Fear (Ótta), fáðu Hope í staðinn. Á vel heppnuðum árásum, merktu Stress (Álag) til að bæta Fear-teningsgildi þínu við skaða.`
      },
      {
        q: "Vanishing Dodge (Midnight L7, Spell, Recall 1)",
        a: `Þegar líkamleg árás á þig mistekst, eyddu Hope (Von) til að verða Hidden og flytjast á stað innan Close frá árásarmanninum. Haltu þig Hidden þar til næsta aðgerðarkast þitt.`
      },
      {
        q: "Shadowhunter (Midnight L8, Ability, Recall 2)",
        a: `Á meðan þú ert í lítilli birtu eða myrkri: +1 Evasion (Undanfæri) og forskot á árásarköst.`
      },
      {
        q: "Spellcharge (Midnight L8, Spell, Recall 1)",
        a: `Þegar þú tekur galdraskaða, settu tákn jafn og merkt HP (hámark = Spellcast-eigind). Á vel heppnaðri árás, eyddu táknum til að bæta d6 á hvert tákn við skaða.`
      },
      {
        q: "Night Terror (Midnight L9, Spell, Recall 2)",
        a: `Einu sinni á langa hvíld, skotmörk í Very Close sjá þig sem martröð. Viðbragðskast (16) — misheppnir eru Horrified (Vulnerable). Steldur Fear frá GM jafn og Horrified skotmörkum. Kastaðu d6-um jafn og stolnu Fear — valdið þeirri samtölu á hvert Horrified skotmark. Hendaðu stolnu Fear.`
      },
      {
        q: "Twilight Toll (Midnight L9, Ability, Recall 1)",
        a: `Veldu skotmark í Far. Þegar þú tekst á óskaðandi aðgerðarköstum á þau, settu tákn. Þegar þú veldur skaða, eyddu táknum til að bæta d12 á hvert tákn. Eitt skotmark í einu — hreinsaðu tákn á nýju skotmarki eða hvíld.`
      },
      {
        q: "Eclipse (Midnight L10, Spell, Recall 2)",
        a: `Spellcast (16). Einu sinni á langa hvíld, sökktu öllu í Far í myrkur sem aðeins þú/bandamenn getið séð í gegnum. Árásir á þig/bandamenn hafa ókost. Þegar þú/bandamaður tekst á Hope á óvini í skugganum, skotmark merkir Stress (Álag). Varir þar til GM eyðir Fear eða þú tekur Severe-skaða.`
      },
      {
        q: "Specter of the Dark (Midnight L10, Spell, Recall 1)",
        a: `Merktu Stress (Álag) til að verða Spectral þar til næsta aðgerðarkast þitt á veru. Á meðan Spectral: ónæmur fyrir líkamlegum skaða, getur svifið og farið í gegnum fast efni. Enn sýnileg/ur.`
      }
    ]
  },
  {
    category: "🌿 Sage sviðsspjöld",
    color: "#16a34a",
    questions: [
      {
        q: "Sage-svið — yfirlit",
        a: `Sage er náttúrugaldur — plöntur, dýr, landsstjórnun og lækning í gegnum náttúruheiminn. Kallaðu fram verndara, flæktu óvini í viðju, ræktu hindranir, safnaðu birgðum og umbreyttu í náttúruanda. Blanda af sóknstjórnun (binding, svæðisskaði) og stuðningi (lækningarsvæði, galdrað hross). Sviðið fyrir drúída og landverði tengda villtu náttúrunni.`
      },
      {
        q: "Gifted Tracker (Sage L1, Ability, Recall 0)",
        a: `Á meðan þú eltar verur, eyddu einhverjum fjölda Hope (Von) til að spyrja jafnmargra spurninga: átt, hversu langt síðan, hvað voru þau að gera, hversu mörg. Þegar þú hittir eltingarveru, +1 Evasion (Undanfæri) gegn þeim.`
      },
      {
        q: "Nature's Tongue (Sage L1, Ability, Recall 0)",
        a: `Talaðu við plöntur og dýr — Instinct-kast (12). Á velgengni deila þau því sem þau vita. Á Fear, geta upplýsingar verið takmarkaðar eða kostað. Einnig, áður en Spellcast-kast í náttúrulegu umhverfi, eyddu Hope (Von) fyrir +2 á kastið.`
      },
      {
        q: "Vicious Entangle (Sage L1, Spell, Recall 1)",
        a: `Spellcast-kast á skotmark í Far. Á velgengni, rætur valda 1d8+1 líkamlegum skaða og binda skotmarkið tímabundið (Restrain). Eyddu Hope (Von) til að binda einnig annan óvin í Very Close af þeim fyrsta.`
      },
      {
        q: "Conjure Swarm (Sage L2, Spell, Recall 1)",
        a: `Armored Beetles: Merktu Stress (Álag) til að kalla fram bjöllur umhverfis þig. Næst þegar þú tekur skaða, minnka alvarleika um einn þröskuld. Eyddu Hope til að halda þeim eftir högg.\nFire Flies: Spellcast-kast á alla óvini í Close. Eyddu Hope (Von) til að valda 2d8+3 galdraskaða á skotmörk sem þú tekst á.`
      },
      {
        q: "Natural Familiar (Sage L2, Spell, Recall 1)",
        a: `Eyddu Hope (Von) til að kalla fram lítinn náttúruanda/smádýr þar til næstu hvíld. Talið saman, Spellcast til að skipa einföldum verkefnum, merktu Stress (Álag) til að sjá í gegnum augu þess. Auka Hope fyrir fljúgandi verndara. Þegar þú skaðar óvin í Melee við verndara, bættu d6 við skaða. Einn í einu.`
      },
      {
        q: "Corrosive Projectile (Sage L3, Spell, Recall 1)",
        a: `Spellcast-kast á skotmark í Far. Velgengni: d6+4 galdraskaði (Proficiency). Merktu 2+ Stress (Álag) til að gera þau varanlega Corroded — skotmark fær −1 Difficulty á hverja 2 Stress sem eru eytt. Þetta ástand staflar.`
      },
      {
        q: "Towering Stalk (Sage L3, Spell, Recall 1)",
        a: `Einu sinni á hvíld, kallaðu fram þykkan klifranlegum stilk í Close, hæð allt að Far. Merktu Stress (Álag) til að nota sem árás: Spellcast-kast á óvini í Close — velgengni eru lyftuð og sleppt fyrir d8 líkamlegan skaða (Proficiency).`
      },
      {
        q: "Death Grip (Sage L4, Spell, Recall 1)",
        a: `Spellcast-kast á skotmark í Close. Veldu eitt: draga þau í Melee (eða sjálfa/n þig til þeirra), herða (2 Stress á skotmark), eða viðjusvipu (óvinir á milli ykkar bregðast við (13) eða taka 3d6+2 líkamlegan skaða). Á velgengni, skotmark er tímabundið Restrained.`
      },
      {
        q: "Healing Field (Sage L4, Spell, Recall 2)",
        a: `Einu sinni á langa hvíld, kallaðu fram lækningajurtir í Close. Þú og allir bandamenn á svæðinu hreinsa HP (Heilsustig). Eyddu 2 Hope (Von) til að hreinsa 2 HP í staðinn.`
      },
      {
        q: "Thorn Skin (Sage L5, Spell, Recall 1)",
        a: `Einu sinni á hvíld, eyddu Hope (Von) til að sprítta þyrnum. Settu tákn = Spellcast-eigind. Þegar þú ert skaðaður, eyddu táknum til að kasta d6-um — minnkaðu skaða um samtölu. Ef í Melee við árásarmann, endurkastaðu þeirri upphæð til baka. Hreinsaðu tákn á hvíld.`
      },
      {
        q: "Wild Fortress (Sage L5, Spell, Recall 1)",
        a: `Spellcast (13), eyddu 2 Hope (Von) til að vaxa hvelfingu. Þú + einn bandamaður inni geta ekki verið skotmerktar og geta ekki ráðist á. Árásir á hvelfinguna ná sjálfkrafa. Hvelfingin hefur þröskulda 15/30, fellur eftir 3 HP. Fylgstu með táknum.`
      },
      {
        q: "Conjured Steeds (Sage L6, Spell, Recall 0)",
        a: `Eyddu Hope (Von) til að kalla fram jafnmarga galdrareið þar til langa hvíld eða þeir taka skaða. Tvöfalda landhraða í ferðalögum; hreyfast innan Far án kasts í hættu. Reiðmenn: −2 árás, +2 skaði.`
      },
      {
        q: "Forager (Sage L6, Ability, Recall 1)",
        a: `Auka hvíldartímaverkefni: kastaðu d6 fyrir það sem þú safnar (hópur hámark 5 safnaða hluti). 1: matur (hreinsa 2 Stress), 2: minjagripur (fá 2 Hope), 3: arkana rún (+2 Spellcast), 4: lækningadrykkur (hreinsa 2 HP), 5: heillasteinur (endurkasta einhverjum teningi), 6: veldu.`
      },
      {
        q: "Sage-Touched (Sage L7, Ability, Recall 2)",
        a: `Þegar 4+ Sage-spjöld í hleðslu: +2 á Spellcast-köst í náttúrulegu umhverfi, og einu sinni á hvíld tvöfaldaðu Agility eða Instinct fyrir eitt kast (veldu áður en kastað er).`
      },
      {
        q: "Wild Surge (Sage L7, Spell, Recall 2)",
        a: `Einu sinni á langa hvíld, merktu Stress (Álag) til að efla sjálfa/n þig. Settu d6 sem sýnir 1 á þetta spjald. Bættu gildi þess við hvert aðgerðarkast. Eftir hvert kast, auktu teninginn um 1. Þegar hann myndi fara yfir 6 eða þú hvílist, formið fellur og þú merkir auka Stress.`
      },
      {
        q: "Forest Sprites (Sage L8, Spell, Recall 2)",
        a: `Spellcast (13). Eyddu Hope (Von) til að búa til jafnmarga álfa á völdum stöðum innan Far. Ávinningur: bandamenn fá +3 á árásir á óvini í Melee við álf, og bandamenn sem merkja Armor Slot (Herklæðareit) nálægt álf merkja auka einn. Álfar hverfa eftir að veita ávinning eða taka einhvern skaða.`
      },
      {
        q: "Rejuvenation Barrier (Sage L8, Spell, Recall 1)",
        a: `Spellcast (15). Einu sinni á hvíld, búðu til verndarhindrun á Very Close. Þú og bandamenn inni þegar kastað hreinsa 1d4 HP (Heilsustig). Á meðan uppi, viðnám gegn líkamlegum skaða utan frá. Hindrunin fylgir þér.`
      },
      {
        q: "Fane of the Wilds (Sage L9, Ability, Recall 2)",
        a: `Eftir langa hvíld, settu tákn = fjölda Sage-spjalda í hleðslu + geymslu. Eftir Spellcast-kast, eyddu táknum fyrir +1 hvert. Á crit Spellcast fyrir Sage-galdur, fáðu tákn. Hreinsaðu á langri hvíld.`
      },
      {
        q: "Plant Dominion (Sage L9, Spell, Recall 1)",
        a: `Spellcast (18). Einu sinni á langa hvíld, mótaðu allt plöntulíf innan Far — vaxtarðu tré samstundis, ruddu brautir í gegnum viðju, smíðaðu rótarveggi.`
      },
      {
        q: "Force of Nature (Sage L10, Spell, Recall 2)",
        a: `Merktu Stress (Álag) til að verða gríðarstór náttúruandi. Á vel heppnaðri árás/Spellcast: +10 á skaða. Þegar þú sigrar veru í Close, gleypðu hana til að hreinsa Armor Slot (Herklæðareit). Getur ekki verið Restrained. Verður að eyða Hope (Von) áður en hvert aðgerðarkast — snúðu aftur í venjulegt ef þú getur ekki.`
      },
      {
        q: "Tempest (Sage L10, Spell, Recall 2)",
        a: `Spellcast-kast á öll skotmörk í Far. Veldu stormgerð (varir þar til GM eyðir Fear):\n• Blizzard: 2d20+8 galdraskaði, skotmörk tímabundið Vulnerable\n• Hurricane: 3d10+10 galdraskaði, veldu vindátt — skotmörk geta ekki hreyft sig á móti\n• Sandstorm: 5d6+9 galdraskaði, árásir lengra en Melee hafa ókost`
      }
    ]
  },
  {
    category: "✨ Splendor sviðsspjöld",
    color: "#a88a0c",
    questions: [
      {
        q: "Splendor-svið — yfirlit",
        a: `Splendor er guðlegur og geislandi galdur — lækning, vernd, uppvekja og réttmætur skaði. Aðallækningarsviðið, með margar leiðir til að hreinsa HP (Heilsustig) og Stress (Álag) bandamanna. Felur einnig í sér heilögu áfalli, verndargöldrum, spádómi og uppvekju. Sviðið fyrir þá sem beina heilögum eða geislandi krafti til stuðnings hópnum.`
      },
      {
        q: "Bolt Beacon (Splendor L1, Spell, Recall 1)",
        a: `Spellcast-kast á skotmark í Far. Á velgengni, eyddu Hope (Von) fyrir d8+2 galdraskaða (Proficiency). Skotmark verður tímabundið Vulnerable og ljómar skært þar til hreinsað.`
      },
      {
        q: "Mending Touch (Splendor L1, Spell, Recall 1)",
        a: `Taktu nokkrar mínútur til að beina lækningu á veru sem þú snertir. Eyddu 2 Hope (Von) til að hreinsa HP (Heilsustig) eða Stress (Álag) hjá þeim. Einu sinni á langa hvíld, ef þú lærir eitthvað nýtt um þá eða opinberar eitthvað um sjálfa/n þig í lækningunni, hreinsaðu 2 HP eða 2 Stress í staðinn.`
      },
      {
        q: "Reassurance (Splendor L1, Ability, Recall 0)",
        a: `Einu sinni á hvíld, eftir að bandamaður kastar en áður en afleiðingar koma, bjóddu stuðning — bandamaðurinn getur endurkastað teningum sínum.`
      },
      {
        q: "Final Words (Splendor L2, Spell, Recall 1)",
        a: `Blásið lífi í lík til að tala. Spellcast (13). Velgengni með Hope: 3 spurningum svarað. Velgengni með Fear: 1 spurning. Líkið svarar sannleika en veit aðeins það sem það vissi í lífinu. Á misheppni eða eftir svör verður líkaminn að dufti.`
      },
      {
        q: "Healing Hands (Splendor L2, Spell, Recall 1)",
        a: `Spellcast (13) á veru (ekki sjálfa/n þig) í Melee. Á velgengni, merktu Stress (Álag) til að hreinsa 2 HP (Heilsustig) eða 2 Stress. Á misheppni, merktu Stress til að hreinsa 1 HP eða 1 Stress. Getur ekki læknað sama skotmark aftur fyrr en á langri hvíld.`
      },
      {
        q: "Second Wind (Splendor L3, Ability, Recall 1)",
        a: `Einu sinni á hvíld, þegar þú tekst á árás á óvin, hreinsaðu 3 Stress (Álag) eða HP (Heilsustig). Á velgengni með Hope, hreinsaðu einnig 3 Stress eða HP hjá bandamanni innan Close.`
      },
      {
        q: "Voice of Reason (Splendor L3, Ability, Recall 2)",
        a: `Forskot á köst til að draga úr ofbeldi eða sannfæra einhvern um að fylgja forystu þinni. Einnig: þegar allir Stress (Álag) reitirnir þínir eru merktir, +1 Proficiency (Leikni) á skaðaköst.`
      },
      {
        q: "Divination (Splendor L4, Spell, Recall 1)",
        a: `Einu sinni á langa hvíld, eyddu 3 Hope (Von) til að spyrja einnar já/nei spurningar um framtíðaratburð, manneskju, stað eða aðstæður. Þú sérð svarið í stuttri sýn.`
      },
      {
        q: "Life Ward (Splendor L4, Spell, Recall 1)",
        a: `Eyddu 3 Hope (Von) á bandamann í Close. Þeir eru merktir með ljósandi tákni. Þegar þeir myndu gera dauðaaðgerð, hreinsa þeir HP (Heilsustig) í staðinn. Endar eftir björgun þeirra, val á nýju skotmarki eða langa hvíld.`
      },
      {
        q: "Shape Material (Splendor L5, Spell, Recall 1)",
        a: `Eyddu Hope (Von) til að móta náttúrulegt efni sem þú snertir (stein, ís, við) — svæði ekki stærra en þú. Búðu til verkfæri, hurðir o.fl. Aðeins innan Close af snertistað.`
      },
      {
        q: "Smite (Splendor L5, Spell, Recall 2)",
        a: `Einu sinni á hvíld, eyddu 3 Hope (Von) til að hlaða. Næsta vel heppnaða vopnaárás þín: tvöfaldaðu skaðaútkomuna. Veldur galdraskaða óháð vopnategund.`
      },
      {
        q: "Restoration (Splendor L6, Spell, Recall 2)",
        a: `Eftir langa hvíld, settu tákn = Spellcast-eigind. Snertu veru og eyddu táknum: hreinsa 2 HP (Heilsustig) eða 2 Stress (Álag) á hvert tákn. Eyddu einnig tákni til að hreinsa Vulnerable eða lækna líkamlegan/galdralegan kvilla (GM gæti krafist auka tákna fyrir sterk kvillagerðir). Hreinsaðu á langri hvíld.`
      },
      {
        q: "Zone of Protection (Splendor L6, Spell, Recall 2)",
        a: `Spellcast (16). Einu sinni á langa hvíld, búðu til svæði á stað innan Far. Bandamenn í Very Close eru vernduð. Settu d6 sem sýnir 1. Þegar bandamaður á svæðinu tekur skaða, minnkaðu um gildi teningsins, auktu síðan teninginn um 1. Endar þegar teningur myndi fara yfir 6.`
      },
      {
        q: "Healing Strike (Splendor L7, Spell, Recall 1)",
        a: `Þegar þú veldur óvini skaða, eyddu 2 Hope (Von) til að hreinsa HP (Heilsustig) hjá bandamanni innan Close.`
      },
      {
        q: "Splendor-Touched (Splendor L7, Ability, Recall 2)",
        a: `Þegar 4+ Splendor-spjöld í hleðslu: +3 á Severe-þröskuld, og einu sinni á langa hvíld þegar skaði myndi láta þig merkja HP (Heilsustig), geturðu merkt Stress (Álag) eða eytt Hope (Von) í staðinn.`
      },
      {
        q: "Shield Aura (Splendor L8, Spell, Recall 2)",
        a: `Merktu Stress (Álag) til að kasta á skotmark í Very Close. Þegar skotmark merkir Armor Slot (Herklæðareit), minnka alvarleika um auka þröskuld. Ef þetta veldur engu HP (Heilsustig) merktu, galdurinn endar. Eitt skotmark í einu.`
      },
      {
        q: "Stunning Sunlight (Splendor L8, Spell, Recall 2)",
        a: `Spellcast-kast á alla óvini fyrir framan þig innan Far. Eyddu Hope (Von) — jafnmörg skotmörk kasta viðbragði (14). Velgengni: 3d20+3 galdraskaði. Misheppnir: 4d20+5 galdraskaði + tímabundið Stunned.`
      },
      {
        q: "Overwhelming Aura (Splendor L9, Spell, Recall 2)",
        a: `Spellcast (15). Eyddu 2 Hope (Von) til að setja Presence = Spellcast-eigind þar til langa hvíld. Á meðan virkt, óvinir verða að merkja Stress (Álag) þegar þeir miðar á þig með árás.`
      },
      {
        q: "Salvation Beam (Splendor L9, Spell, Recall 2)",
        a: `Spellcast (16). Merktu einhvern fjölda Stress (Álag), miðaðu á línu af bandamönnum í Far. Hreinsaðu HP (Heilsustig) hjá þeim jafn og merktu Stress, skipt hvernig sem þú vilt.`
      },
      {
        q: "Invigoration (Splendor L10, Spell, Recall 3)",
        a: `Þegar þú eða bandamaður í Close hefur notað eiginleika með þreytumörkum (einu sinni á hvíld o.s.frv.), eyddu Hope (Von) og kastaðu jafnmörgum d6-um. Ef einhver sýnir 6, eiginleikinn endurnýjast.`
      },
      {
        q: "Resurrection (Splendor L10, Spell, Recall 2)",
        a: `Spellcast (20). Endurheimtu veru sem hefur verið dauð í allt að 100 ár til fulls afls. Kastaðu síðan d6 — á 5 eða lægra, settu þetta spjald í geymslu varanlega. Á misheppni, getur ekki kastað aftur í viku.`
      }
    ]
  },
  {
    category: "🛡️ Valor sviðsspjöld",
    color: "#b91c1c",
    questions: [
      {
        q: "Valor-svið — yfirlit",
        a: `Valor er varnarleg bardagamáttur — vörður, verndun bandamanna, herklæðameistaraverk og forysta með fordæmi. Allt hæfni (engir galdar). Einbeitir sér að frásogi skaða fyrir aðra, aukningu Armor Score (Herklæðastigs), hvetningu bandamanna í gegnum bardagaframmistöðu og verða óbilandi veggur. Sviðið fyrir verði, hermenn og alla sem standa á milli hættu og hóps síns.`
      },
      {
        q: "Bare Bones (Valor L1, Ability, Recall 0)",
        a: `Þegar þú berð ekki herklæði, grunngildi Armor Score (Herklæðastig) = 3 + Strength með bættum þröskuldum: T1 9/19, T2 11/24, T3 13/31, T4 15/38.`
      },
      {
        q: "Forceful Push (Valor L1, Ability, Recall 0)",
        a: `Ráðist á með aðalvopni á skotmark í Melee. Á velgengni: skaði + ýtt aftur til Close. Á Hope: bættu d6 við skaða. Eyddu Hope (Von) til að gera þá tímabundið Vulnerable.`
      },
      {
        q: "I Am Your Shield (Valor L1, Ability, Recall 1)",
        a: `Þegar bandamaður í Very Close myndi taka skaða, merktu Stress (Álag) til að grípa inn í — þú verður skotmarkið. Þegar þú tekur beygða skaðann geturðu merkt einhvern fjölda Armor Slots (Herklæðareita).`
      },
      {
        q: "Body Basher (Valor L2, Ability, Recall 1)",
        a: `Á vel heppnaðri Melee vopnaárás, bættu Strength við skaðakastið.`
      },
      {
        q: "Bold Presence (Valor L2, Ability, Recall 0)",
        a: `Á Presence-köstum, eyddu Hope (Von) til að bæta Strength við. Einnig, einu sinni á hvíld þegar þú myndir fá ástand, lýstu hvernig djörfur persónuleiki þinn hjálpar þér og forðastu ástandið.`
      },
      {
        q: "Lean on Me (Valor L3, Ability, Recall 1)",
        a: `Einu sinni á langa hvíld, þegar þú huggar eða hvetur bandamann sem mistókst kast, hreinsið þið bæði 2 Stress (Álag).`
      },
      {
        q: "Shrug It Off (Valor L3, Ability, Recall 1)",
        a: `Þegar þú myndir taka skaða, merktu Stress (Álag) til að minnka alvarleika um einn þröskuld. Kastaðu síðan d6 — á 3 eða lægra, settu þetta spjald í geymslu.`
      },
      {
        q: "Goad Them On (Valor L4, Ability, Recall 1)",
        a: `Ögraðu skotmark í Close — Presence-kast á þau. Á velgengni: skotmark merkir Stress (Álag), og næst þegar GM kastljósssetur þá verða þeir að ráðast á þig með ókosti.`
      },
      {
        q: "Support Tank (Valor L4, Ability, Recall 2)",
        a: `Þegar bandamaður í Close mistekst kast, eyddu 2 Hope (Von) til að leyfa þeim að endurkasta annað hvort Hope eða Fear teningnum.`
      },
      {
        q: "Armorer (Valor L5, Ability, Recall 1)",
        a: `Á meðan þú berð herklæði: +1 Armor Score (Herklæðastig). Á hvíld, þegar þú gerar við herklæðin þín sem hvíldartímaverkefni, hreinsa bandamenn þínir líka Armor Slot (Herklæðareit).`
      },
      {
        q: "Rousing Strike (Valor L5, Ability, Recall 1)",
        a: `Einu sinni á hvíld, á crit-árás: þú og allir bandamenn sem geta séð/heyrt þig hreinsa HP (Heilsustig) eða 1d4 Stress (Álag).`
      },
      {
        q: "Inevitable (Valor L6, Ability, Recall 1)",
        a: `Þegar þú mistekst aðgerðarkast, næsta aðgerðarkast þitt hefur forskot.`
      },
      {
        q: "Rise Up (Valor L6, Ability, Recall 2)",
        a: `+Proficiency (Leikni) á Severe-þröskuldinn þinn. Þegar þú merkir 1+ HP (Heilsustig) af árás, hreinsaðu Stress (Álag).`
      },
      {
        q: "Critical Inspiration (Valor L7, Ability, Recall 1)",
        a: `Einu sinni á hvíld, þegar þú færð crit á árás, allir bandamenn í Very Close geta hreinsað Stress (Álag) eða fengið Hope (Von).`
      },
      {
        q: "Valor-Touched (Valor L7, Ability, Recall 1)",
        a: `Þegar 4+ Valor-spjöld í hleðslu: +1 Armor Score (Herklæðastig), og þegar þú merkir 1+ HP (Heilsustig) án þess að merkja Armor Slot, hreinsa Armor Slot.`
      },
      {
        q: "Full Surge (Valor L8, Ability, Recall 1)",
        a: `Einu sinni á langa hvíld, merktu 3 Stress (Álag) til að ýta á mörkin. +2 á allar persónueigndir þar til næstu hvíld.`
      },
      {
        q: "Ground Pound (Valor L8, Ability, Recall 2)",
        a: `Eyddu 2 Hope (Von), Strength-kast á öll skotmörk í Very Close. Velgengni kastaðar til Far, verða að viðbragðskasta (17) — misheppnir taka 4d10+8 skaða, velgengni taka hálfan.`
      },
      {
        q: "Hold the Line (Valor L9, Ability, Recall 1)",
        a: `Lýstu afstöðu þinni, eyddu Hope (Von). Allir óvinir sem hreyfast innan Very Close eru dregnir til Melee og bundnir (Restrained). Varir þar til þú hreyfir þig, mistekst með Fear, eða GM eyðir 2 Fear.`
      },
      {
        q: "Lead by Example (Valor L9, Ability, Recall 3)",
        a: `Þegar þú veldur óvini skaða, merktu Stress (Álag) og hvettu bandamenn. Næsti leikmaður sem ráðist á þann óvin getur hreinsað Stress eða fengið Hope (Von).`
      },
      {
        q: "Unbreakable (Valor L10, Ability, Recall 4)",
        a: `Þegar þú merkir síðasta HP (Heilsustig), í stað dauðaaðgerðar, kastaðu d6 og hreinsaðu jafnmörg HP. Settu síðan þetta spjald í geymslu.`
      },
      {
        q: "Unyielding Armor (Valor L10, Ability, Recall 1)",
        a: `Þegar þú myndir merkja Armor Slot (Herklæðareit), kastaðu d6-um jafn og Proficiency (Leikni). Ef einhver sýnir 6, minnka alvarleika um einn þröskuld án þess að merkja reitinn.`
      }
    ]
  },
  {
    category: "📜 Að stjórna leiknum (GM)",
    color: "#b45309",
    questions: [
      {
        q: "C.A.T.S. — Rammi lotu 0",
        a: `Áður en einhver smíðar persónu, samstillið borðið á fjórum atriðum:\n\nConcept (Hugmynd): Hvað fjallar þessi saga um? Ein eða tvær setningar sem ramma herferðina. ("Hópur gamalla vina endurnýja kynni í landamærabæ þegar stríð vofir yfir.")\n\nAim (Markmið): Hvað vill borðið fá út úr þessum leik? Langt söguþráður með djúpum fjárfestingum, eða léttari lotur sem einbeita sér að aðgerðum? Setjið væntingar um skuldbindingu og hraða snemma.\n\nTone (Tónn): Samþykkið tilfinningalega skráninguna. Alvarleg með húmoristískum andvara? Létt í gegn? Dökk og hörð? Allir þurfa að vera samstilltir — tónmisræmi er ein fljótlegasta leiðin til að raska borði.\n\nSubject (Efni): Hvað inniheldur sagan eða forðast sérstaklega? Ræddu mörk opinskátt. Ekki hvert efni virkar fyrir hvern hóp, og að virða það heldur leiknum skemmtilegum fyrir alla.\n\nKeyrðu C.A.T.S. áður en persónusköpun. Svörin móta beint hvers konar persónur passa, og gefa þér (GM) grunn til að undirbúa.`
      },
      {
        q: "GM-meginreglur — norðurstjarnan þín",
        a: `1. Byrjaðu og endaðu með sögunni — spilun þjónar sögunni, ekki öfugt.\n2. Samstarfaðu, sérstaklega í átökum — þú og leikmenn eruð á sama liði.\n3. Fylltu heiminn lífi, undrum og hættu.\n4. Spyrðu spurninga og innlimaðu svörin — leyfðu leikmönnum að byggja heiminn líka.\n5. Gefðu hverju kasti áhrif — kastaðu aðeins þegar það skiptir máli.\n6. Spilaðu til að komast að hvað gerist — vertu hissa yfir sögunni.\n7. Haltu létt — óttastu ekki að yfirgefa eða breyta því sem kom áður.\n\nAðferðir: rækta forvitni, ávinna traust, halda hlutunum gangandi, klippa til aðgerðar, hjálpa leikmönnum að nota kerfið, segja þeim það sem þeir myndu vita, endurforma frekar en hafna, vinna í augnablikum og yfirlitsmyndum.`
      },
      {
        q: "Lotuskipulag — hagnýtt flæði",
        a: `1. Yfirlit yfir síðustu lotu (leyfðu leikmönnum að gera þetta — það sýnir þér hvað þeir muna og kæra sig um).\n2. Settu senuna — lýstu aðstæðum, staðfestu hvað er í húfi.\n3. Spilaðu í gegnum senur með grunnlykkjunni: lýsa → spurningar → aðgerð → leysa → endurtaka.\n4. Þegar bardagi byrjar, skiptu yfir í kastljósleik. Fylgstu með Fear, notaðu niðurteljara, haltu umferðum óvina stuttum.\n5. Eftir bardaga eða stórar senur, bjóddu hvíld ef það er rökrétt í sögunni.\n6. Endaðu lotuna á klettahengi, uppljóstrun eða rólegu augnabliki — hvað sem lendir best.\n\nÁ milli lota: skráðu óleysta þráði, hugsaðu um hvað NPC-ar eru að gera utan sviðs, undirbúðu 1–2 aðstæður (ekki handrit).`
      },
      {
        q: "Helstu verkfærin þín sem GM",
        a: `Þú hefur þrjá helstu sveifla:\n\n1. Kastljósið — þú ákveður hver bregst við og hvenær. Beindu því á leikmaður, óvini eða umhverfið.\n2. Fear (Ótti) — gjaldmiðillinn þinn. Fáðu hann úr köstum leikmanna og hvíldum, eyddu til að gera aðgerðir, virkja eiginleika og herða spennu.\n3. GM-aðgerðir — aðgerðirnar þínar í sögunni. Kveikt af köstum leikmanna, en þú velur hvað gerist. Aðgerðir spanna frá mjúkum (nýjar upplýsingar, forsending) til harðra (bein afleiðing, skaði).\n\nÞú kastar EKKI Duality-teningum. Þú kastar stökum d20 (GM-teningi) fyrir árásir óvina og stöku aðgerðarköst óvina.`
      },
      {
        q: "Að setja Difficulty — viðmiðataflan",
        a: `Árásarköst: Difficulty = Difficulty-stig óvinar (úr tölfræðiblaði).\nÖnnur köst á móti óvinum: Difficulty-stig + viðeigandi Experience óvinar (kostar Fear).\n\nFyrir ólíkamleg aðgerðarköst, settu Difficulty eftir aðstæðum:\n• 5 — einfalt (lyfta stól, heyra hátt hljóð nálægt)\n• 10 — simpelt (brjóta lítið borð, plata trúgjarnt fólk)\n• 15 — miðlungs (brjóta viðarhurð, leynast í takmörkuðu skjóli, afvirkja staðlaða gildru)\n• 20 — erfitt (brjóta steinvegg, leynast í skuggum, plata þjálfan hirðmann)\n• 25 — öfgafullt (leggja stórt dýr að velli, leynast með lágmarks skjól í ljósi)\n• 30 — goðsagnakennnt (brjóta grip guðs, plata guð)\n\nKjóstu frekar að veita forskot/ókost en að breyta Difficulty — það finnst áþreifanlegra fyrir leikmanninn.`
      },
      {
        q: "Hvenær á að kalla á kast",
        a: `Kallaðu aðeins á kast þegar:\n• Útkoman er óviss\n• Bæði velgengni og misheppni leiða til áhugaverðra niðurstaðna\n• Þýðingarmikill þrýstingur eða húfi er til staðar\n\nEf engin áhugaverð afleiðing er af misheppni, eða bakgrunnur/Experiences leikmanns gera velgengni augljósa — leyfðu þeim bara að ná. Kastaðu ekki fyrir hversdagslegar aðgerðir.\n\nÁður en kast: staðfestu hvað er í húfi. Segðu leikmanninum hvernig velgengni og misheppni líta út svo þeir geti tekið upplýstar ákvarðanir. Miðlaðu óhjákvæmilegum afleiðingum fyrirfram ("Þú getur reynt, en jafnvel á velgengni hrynur brúin á eftir þér").`
      },
      {
        q: "Úrlausn kasta — stuttar setningar",
        a: `Notaðu þessar til að leiða frásögn þína:\n\n• Critical Success → "Já, og fullt af." Leikmaður lýsir velgengni, þú gefur auka forskot eða tækifæri.\n• Success with Hope → "Já, og..." Leikmaður tekst hreint. Þú sýnir hvernig heimurinn bregst jákvætt við.\n• Success with Fear → "Já, en..." Leikmaður tekst, en þú tekur Fear og kynnir minniháttar fylgikvilla.\n• Failure with Hope → "Nei, en..." Leikmaður fær ekki það sem hann vill, en fær Hope. Minniháttar afleiðing.\n• Failure with Fear → "Nei, og..." Hlutir fara úrskeiðis og versna. Þú tekur Fear og gerir harðari aðgerð.\n\nMunurinn á Hope og Fear niðurstöðum snýst um alvarleika — Hope niðurstöður eru mildari, Fear niðurstöður slá harðar.`
      },
      {
        q: "GM-aðgerðir — hvað geturðu gert?",
        a: `Þegar þú ert í röð, veldu af þessum lista (eða búðu til eigin):\n\n• Óvinur ráðist á eða notar aðgerð\n• Leikmaður merkir Stress (Álag)\n• Kynntu nýja ógn eða hindrun\n• Hækkaðu húfin í núverandi átökum\n• Sýndu hvernig heimurinn bregst við\n• Spyrðu spurningu og byggðu á svarinu\n• Láttu NPC bregðast við eftir hvata sínum\n• Dinglaðu markmiðum leikmanns fyrir framan þá\n• Gefðu til kynna ógn utan sviðs sem nálgast\n• Opinberaðu óvelkominn sannleik\n• Neyðdu hópinn til að skipta sér\n• Sýndu hliðarskaða\n• Breyttu umhverfinu\n• Handtaktu eitthvað mikilvægt\n• Notaðu bakgrunnssögu leikmanns á móti þeim\n• Hreinsaðu ástand óvinar\n• Segðu þeim "allt er í lagi... í bili"\n• Spyrðu leikmanninn hvað gerist næst`
      },
      {
        q: "Mjúkar aðgerðir gegn hörðum aðgerðum",
        a: `Mjúkar aðgerðir gefa nýjar upplýsingar og leyfa leikmönnum að bregðast við. Harðar aðgerðir eru beinar og tafarlausar — engin möguleiki á truflun eða vörn.\n\nAlmenn regla:\n• Köst með Hope → mýkri aðgerðir (viðvaranir, forsending, minniháttar bakslag)\n• Köst með Fear → harðari aðgerðir (skaði, tapuð auðlindir, varanlegar afleiðingar)\n\nFailure with Hope er samt misheppni — eitthvað fer úrskeiðis, en það er silfurlínin. Failure with Fear er þar sem þú herðir.`
      },
      {
        q: "Fear — öðlun, eyðsla, hraði",
        a: `Þú byrjar herferð með 1 Fear (Ótta) á hvern leikmaður.\nFá Fear: hvert kast með Fear, hvíldir (1d4 stutt, 1d4+leikmaður löng), sérstakir eiginleikar.\nHámark: 12. Haldast milli lota.\n\nEyddu 1 Fear til að:\n• Trufla leikmenn til að stela kastljósinu og gera aðgerð\n• Gera viðbótar GM-aðgerð á þinni umferð\n• Virkja Fear Feature óvinar\n• Virkja Fear Feature umhverfis\n• Bæta Experience óvinar við kast\n• Enda tímabundin galdrááhrif á óvini\n\nLykilráð: Safnaðu ekki Fear. Eyddu þegar þú hefur það — leikmenn munu alltaf mynda meira. Ónotuð Fear er sóuð spenna.`
      },
      {
        q: "Fear-eyðsla eftir senustyrk",
        a: `Notaðu þetta sem grófa leiðsögn um hversu miklu Fear á að brenna á hverja senu:\n\n• Tilfallandi (0–1): Hvíldaspjall, innkaup, hvíld\n• Minni (1–3): Ferðaátök, minniháttar skæruföll\n• Stöðluð (2–4): Merkingarbær bardagi, spennandi félagsleg sena\n• Stór (4–8): Yfirvaldsbardagi, persónuskilgreiningaratburður, svik\n• Hápunktur (6–12): Leiðtogaóvina lokauppgjör, epísk uppsetning\n\nEf þú situr á miklu Fear, íhugaðu:\n• Eyddu oft (í hvert skipti sem kastljós snýr til þín)\n• Eyddu hratt (áður en leikmenn geta brugðist við)\n• Eyddu stórt (margar aðgerðir í röð fyrir dramatíska stigmögnun)`
      },
      {
        q: "Kastljósstjórnun — hver fer hvenær?",
        a: `Það er ekkert frumkvæði. Þú stýrir kastljósinu eftir:\n• Hvern sagan bendir náttúrulega á\n• Hver hefur ekki aðhafst nýlega\n• Hvern spilun kveikir á (t.d. Fear → GM-umferð)\n\nHagnýt ráð:\n• Eftir að leikmaður bregst við og myndar Fear → þín umferð. Gerðu aðgerð, sendið síðan til baka.\n• Dreifðu kastljósi jafnt. Ef einn leikmaður er ráðandi, beinstefndu.\n• Þegar margir leikmenn vilja bregðast við, gefðu því þar sem aðgerðin er brýnust eða dramatískust.\n• Ef borðið stöðvast, spurðu "Hvað gerirðu?" á ákveðinn leikmann.\n\nValfrjáls uppbygging: gefðu hverjum leikmaður 3 tákn á umferð. Fjarlægðu eitt á aðgerð. Fylltu aftur þegar öll eru notuð.`
      },
      {
        q: "Smíði átaka — Battle Points",
        a: `Byrjaðu með (3 × fjöldi leikmaður) + 2 Battle Points.\n\nLeiðréttingar:\n• −1 fyrir auðveldari/styttri bardaga\n• −2 ef notuð 2+ Solos\n• −2 ef bætt +1d4 við allan skaða óvina\n• +1 ef notuð lægra-þreps óvini\n• +1 ef engir Bruisers, Hordes, Leaders, eða Solos\n• +2 fyrir erfiðari/lengri bardaga\n\nEyddu stigum:\n• 1 stig: Social, Support, eða 1 hópur Minions (= stærð hóps)\n• 2 stig: Horde, Ranged, Skulk, eða Standard\n• 3 stig: Leader\n• 4 stig: Bruiser\n• 5 stig: Solo\n\nDæmi: 4 leikmenn = 14 stig. Erfitt átök (+2 = 16 stig) gætu verið 1 Solo (5) + 1 Leader (3) + 2 Standards (4) + 1 Minion hópur (1) + 1 Support (1) + 1 Skulk (2) = 16.`
      },
      {
        q: "Gerðir óvina — fljótleg leiðsögn",
        a: `• Bruiser (4 stig): Hátt HP, öflug árás, erfitt að fella. Framlínuakkeri.\n• Horde (2 stig): Hópur sem einn. Veikist þegar HP lækkar (minnkaður skaði á hálfu HP).\n• Leader (3 stig): Stjórnar öðrum, kallar fram liðsauka. Feldu þá til að raska aðferðum.\n• Minions (1 stig/hópur): Deyja í einu höggi. Hættulegir í fjölda — fyrir hverja X skaða, dreptu auka minion.\n• Ranged (2 stig): Viðkvæmir í nálægð, banvænir á fjarlægð. Glerflaskar.\n• Skulk (2 stig): Fyrirsátarfólk, hliðarárásarmenn. Nýta staðsetningu og óvænt.\n• Social (1 stig): Áskorun í gegnum samtal, ekki bardaga. Hirðmenn, kaupmenn, njósnarar.\n• Solo (5 stig): Hannað til að berjast við allan hópinn. Hefur Relentless (mörg kastljós á GM-umferð).\n• Standard (2 stig): Burðarás átaka. Meðaltölur, fjölhæfir.\n• Support (1 stig): Efla bandamenn, veikja leikmenn. Truflandi en ekki beint hættulegir.`
      },
      {
        q: "Viðmið óvinatalna eftir þrepi",
        a: `Tier 1 (Stig 1): ATK +1, Skaði 1d6+2 til 1d12+4, Difficulty 11, Þröskuldar 7/12\nTier 2 (S2–4): ATK +2, Skaði 2d6+3 til 2d12+4, Difficulty 14, Þröskuldar 10/20\nTier 3 (S5–7): ATK +3, Skaði 3d8+3 til 3d12+5, Difficulty 17, Þröskuldar 20/32\nTier 4 (S8–10): ATK +4, Skaði 4d8+10 til 4d12+15, Difficulty 20, Þröskuldar 25/45\n\nEf þú þarft að spinna upp óvin í miðri lotu, gríptu þessar tölur og boltaðu á nokkra eiginleika.`
      },
      {
        q: "Árásir óvina — hvernig þú kastar",
        a: `Kastaðu d20 + árásarbreyting óvinar á móti Evasion (Undanfæri) leikmanns.\n• Jafngildi eða hærra = hitt. Kastaðu skaðateningum óvinar.\n• Náttúrlegt 20 = crit. Kastaðu skaða venjulega, bættu síðan hámarks mögulegu teningagildi (ekki flat breytingu). Dæmi: 3d6+2 crit-ar fyrir 18+3d6+2.\n\nÁður en kastað geturðu:\n• Veitt óvini forskot (kastað 2d20, tekið hærra)\n• Lagt á ókost (kastað 2d20, tekið lægra)\n• Eytt Fear til að bæta viðeigandi Experience við kastið\n\nFjölskotmarkaárás: eitt kast, borið saman við Evasion hvers skotmarks sérstaklega.`
      },
      {
        q: "Aðgerðir og viðbrögð óvina",
        a: `Þegar óvinur er kastljóssettir geta þeir:\n• Hreyft sig til Close + gert staðlaða árás sína\n• Hreyft sig til Close + notað aðgerðareiginleika\n• Hreinsað ástand á sjálfum sér (ekkert kast þarf, notar bara umferð þeirra)\n• Hlaupið til Far eða V.Far (engin árás)\n\nViðbrögð kveikjast sjálfkrafa þegar skilyrði þeirra eru uppfyllt, óháð kastljósi. Dæmi: "Momentum — þegar þessi óvinur hittir leikmann, fáðu Fear."\n\nÓbein áhrif eru alltaf virk — engin kveikja, enginn kostnaður. Dæmi: "Armored Carapace — minnka líkamlegan skaða um X."\n\nFear Features krefjast þess að eyða Fear ofan á Fear sem þegar er eytt fyrir kastljós. Þetta eru stóru stigmögnunarverkfærin þín.`
      },
      {
        q: "Þegar óvinir eru sigraðir",
        a: `Óvinur sem merkir síðasta HP sitt er sigraður. Hvað það þýðir er undir þér og borðinu komið: drepinn, meðvitundarlaus, bundinn, flúinn, gefinn upp.\n\nÞú þarft ekki alltaf að drepa óvini — sigraður getur þýtt hvað sem er rökrétt í sögunni. Leyfðu leikmönnum að ákveða þegar það líður rétt.`
      },
      {
        q: "Niðurteljarar — hraðaverkfæri",
        a: `Niðurteljar er teningur eða slóð sem byrjar á gildi og telur niður. Þegar hann nær 0, kveikjast áhrif hans.\n\n• Staðlaður niðurteljar: telur niður 1 í hvert skipti sem einhver leikmaður kastar aðgerðarkasti.\n• Breytilegur niðurteljar: telur eftir kastaútkomu:\n  - Fail with Fear → afleiðing telur 3 / framvinda telur 0\n  - Fail with Hope → afleiðing telur 2 / framvinda telur 0\n  - Success with Fear → bæði telja 1\n  - Success with Hope → afleiðing telur 0 / framvinda telur 2\n  - Crit → afleiðing telur 0 / framvinda telur 3\n\nFramhaldsvalkostir: lykkja (endurstillist eftir ræsingu), hækkandi/lækkandi (upphafsgildi breytist á hverri lykkju), tengd (framvinda + afleiðing hreyfast saman), langtíma (hreyfist á hvíldum í stað kasta).\n\nFylgstu með teningi á borðinu — snúðu honum niður eftir því sem hann telur.`
      },
      {
        q: "Keyrsla NPC-a",
        a: `NPC þarf aðeins: nafn, lýsingu og hvata. Gefðu þeim Difficulty aðeins ef leikmenn kasta á móti þeim.\n\nAðgreindu NPC-a með talmunstri og aðgerðum. Leyfðu markmiðum þeirra að stýra hegðun — spilaðu NPC-a ekki sem hindranir, spilaðu þá sem fólk með óskir.\n\nNPC-bandamenn í bardaga þurfa ekki tölfræðiblöð. Sýndu hvað þeir gera í frásögn. Ef leikmaður nýtir hjálp NPC, gefðu leikmanninum forskot. NPC-ar án HP/Stress geta samt verið meiddur eða drepnir ef sagan krefst.\n\nFyrir mikilvæga NPC-a: gefðu þeim 1–2 eiginleika með sérstökum kveikjum. Dæmi: "Arcane Hold — Veldu uppáhalds leikmaður. Í fyrsta sinn í bardaga sem sá leikmaður tekur skaða, minnka um 1d8.""`
      },
      {
        q: "Að gefa gull, búnað og herfang",
        a: `Gull er óhlutbundið — mælt í hnefum, pokum og kistum.\n\nGróft verðlag:\n• Máltíðir/venjulegt gistirúm: 1 hnefi\n• Lúxusrúm: 1 poki\n• Tier 1 búnaður: 1–5 hnefar\n• Tier 2 búnaður: 1–2 pokar\n• Tier 3 búnaður: 5–10 pokar\n• Tier 4 búnaður: 1–2 kistur\n\nEf þú vilt ekki rekja gull yfirleitt, leyfðu leikmönnum bara að velja 1–2 hluti af stuttum lista þegar þeir versla. Aðlagaðu framboð að tón herferðarinnar.`
      },
      {
        q: "Mælun óvina á annað þrep",
        a: `Ef þú vilt nota óvin frá öðru þrepi en hópur þinn:\n• Notaðu viðmiðatöflu talna sem leiðsögn\n• Aðlagaðu ATK-breytingu, skaðateninga, Difficulty og þröskulda til að passa við markþrepið\n• Haltu eiginleikum og bragði óvinarins — það er það sem gerir hann áhugaverðan\n• Átökin kosta enn sömu Battle Points fyrir gerð sína\n\nÞú getur einnig spunnið upp óvini í flugi: gríptu þrepsviðeigandi tölur, veldu gerð, bættu 1–2 eiginleikum úr dæmalistum, og gefðu nafn og hvata.`
      },
      {
        q: "Umhverfi sem óvinir",
        a: `Umhverfi geta haft sín eigin tölfræðiblöð með eiginleikum, Fear Features og niðurteljara. Hrunandi náma, galdrastormur, yfirfull klefi — allt getur haft spilunarvíxlverkun við leikmenn.\n\nUmhverfi geta: valdið skaða, lagt á ástand, breytt landslagi, búið til hindranir, hreyft niðurteljara og haft Fear Features sem þú eyðir Fear til að virkja.\n\nHönnun: gefðu Difficulty (fyrir köst til að sigla/standast), 1–2 eiginleika, og valfrjálst niðurteljara til að fylgjast með stigmögnun.`
      },
      {
        q: "Gildrur til að forðast",
        a: `• Grafa undan hetjum: Ef kast mistekst, kenndu umhverfinu eða óvininum um — ekki hæfni leikmanns.\n• Alltaf segja til um eigindina: Leyfðu leikmönnum að ákveða hvernig þeir nálgast áskorun. Ef þeir vilja nota Presence til að hræða lás opinn, hlyddu á þá.\n• Leyfa senum að dragast: Ef orka dvín, klipptu í burtu. Endaðu senur þegar áhugaverði hlutinn er búinn.\n• Stakar lausnir: Skipuleggðu ekki eitt rétt svar. Verðlaunaðu skapandi nálganir.\n• Ofskipulagning: Undirbúðu aðstæður, ekki handrit. Ef leikmenn koma þér á óvart, taktu pásu til að hugsa.\n• Söfnun á Fear: Eyddu því. Leikmenn munu alltaf mynda meira.\n• Fela augljósar upplýsingar: Segðu leikmönnum það sem persónur þeirra myndu vita. Settu ekki grunnupplýsingar senu bak við köst.`
      },
      {
        q: "Hvíldastjórnun — Fear-áfylling þín",
        a: `Hvíldir eru þar sem þú færð Fear (Ótta):\n• Stutt hvíld: þú færð 1d4 Fear\n• Löng hvíld: þú færð 1d4 + fjöldi leikmaður Fear, og þú getur hreyft niðurteljara áfram\n\n3 stuttar hvíldir í röð → næsta verður að vera löng hvíld.\nTrufluð löng hvíld → telst sem stutt hvíld einungis.\n\nÞetta þýðir að hvíldir hafa kostnað — hópurinn læknast, en þú fær krafta. Minntu ekki leikmenn á þessa spennu; leyfðu þeim að finna fyrir henni náttúrulega þegar hlutir herðast eftir hvíld.`
      },
      {
        q: "Stigahækkun hópsins",
        a: `Stigahækkun er áfangamiðuð — þú ákveður hvenær hópurinn hækkar. Engin XP til að rekja. U.þ.b. á 3 lota fresti eða eftir stóran söguatburð.\n\nAllur hópurinn hækkar saman. Á hverri stigahækkun:\n• Allir skaðaþröskuldar hækka um +1\n• Hver leikmaður fær nýtt sviðsspjald\n• Hver leikmaður velur 2 framfarir\n• Á þrepamörkum (L2, L5, L8): +1 Proficiency (Leikni), nýtt Experience\n\nEftir því sem leikmenn styrkjast, stígðu átök með: hærra-þreps óvinum, fleiri Battle Points, Fear Features og umhverfishættum.`
      }
    ]
  },
  {
    category: "📌 Jaðartilvik og ráð",
    color: "#64748b",
    questions: [
      {
        q: "Sléttun og brot",
        a: `Sléttaðu alltaf upp nema annað sé tekið fram. Þegar vafi er á, leysið í hag leikmanna.`
      },
      {
        q: "Endurkast á teningum",
        a: `Taktu alltaf nýju niðurstöðuna nema eiginleikinn segi annað. Þú getur ekki endurkastað endurkastaðan teningi með sama eiginleika.`
      },
      {
        q: "Get ég staflað sama eiginleikanum?",
        a: `Nei. Getur ekki eytt Hope (Von) eða merkt Stress (Álag) mörgum sinnum á sama eiginleikanum til að stafla/endurtaka áhrif hans á eitt kast — nema eiginleikinn segi sérstaklega að þú megir. Mismunandi eiginleikar GETA staflað.`
      },
      {
        q: "PvP / átök milli leikmanna",
        a: `Ræddu við báða leikmenn fyrst — kast gæti ekki þurft. Ef kastað: árásir nota kast árásarmanns á móti Evasion (Undanfæri) varnarmanns. Önnur átök: upphafsmaður kastar aðgerðarkasti, skotmark kastar viðbragðskasti. Upphafsmaður verður að slá viðbragðssamtöluna.`
      },
      {
        q: "Notkun eiginleika eftir kast",
        a: `Ef eiginleiki segir "eftir niðurstöðu" geturðu notað hann eftir að GM lýsir yfir velgengni/misheppni — en EKKI eftir að afleiðingar renna út eða annað kast hefst. Þetta skiptir máli fyrir Hope-eyðslu eiginleika.`
      },
      {
        q: "Örlögaköst (valfrjálst GM-verkfæri)",
        a: `Þegar GM vill hreinan tilviljun: staðfestu húfi, leikmaður kastar einum Duality-teningi, túlka niðurstöðu. Notað fyrir tilviljunarútkoma eins og eldútbreiðslu, viðbrögð mannfjölda, búðarvörubirgðir.`
      },
      {
        q: "Gullna reglan",
        a: `Gerðu leikinn þinn eigin. Settu úrskurði framar reglum. GM hefur lokaorðið um reglatúlkun í þjónustu sögunnar. Breytið hverju sem er með samþykki borðsins.`
      }
    ]
  }
];

const RULES_MECHANICS = [
  "📜 Að stjórna leiknum (GM)",
  "📝 Persónusköpun",
  "🎲 Grunnköst",
  "⚔️ Bardagi og skaði",
  "⚡ Ástand og áhrif",
  "📦 Auðlindir",
  "🏕️ Hvíld og dauði",
  "🎭 Kastljós og GM",
  "📈 Stigahækkun og framvinda",
  "💰 Búnaður og herfang",
  "🪄 Galdraköst",
  "📌 Jaðartilvik og ráð",
];

const CARDS_HERITAGE = [
  "⚜️ Stéttir og undirstéttir",
  "🧬 Ætternin (18)",
  "🏘️ Samfélögin (9)",
  "🔮 Arcana sviðsspjöld",
  "🗡️ Blade sviðsspjöld",
  "🦴 Bone sviðsspjöld",
  "📚 Codex sviðsspjöld",
  "💃 Grace sviðsspjöld",
  "🌘 Midnight sviðsspjöld",
  "🌿 Sage sviðsspjöld",
  "✨ Splendor sviðsspjöld",
  "🛡️ Valor sviðsspjöld",
];

const ALL_CATEGORIES = [...RULES_MECHANICS, ...CARDS_HERITAGE];

export { data, RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES };
