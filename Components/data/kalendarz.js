import moment from "moment";
const calendarmonth = [
  {
    month: "Luty",
    details: [
      {
        title: "LIGA Runda II/2 II, III, IV LM",
        data: "05.02",
        place: "Kluby",
        categories: "Liga",
        datamoment: moment("2023-02-06").format("YYYY-MM-DD"),
      },

      {
        title: "LIGA Runda II/3 LK, II, III, IV LM",
        data: "12.02",
        place: "Kluby",
        categories: "Liga",
        datamoment: moment("2023-02-13").format("YYYY-MM-DD"),
      },
      {
        title: "LIGA Runda II/4 LK, II, III, IV LM",
        data: "19.02",
        place: "Kluby",
        categories: "Liga",
        datamoment: moment("2023-02-20").format("YYYY-MM-DD"),
      },
      {
        title: "WTK KWGPP Żaków",
        data: "25.02",
        place: "Tomaszów L.",
        categories: "Żacy",
        datamoment: moment("2023-02-26").format("YYYY-MM-DD"),
        datamomentInvite: moment("2023-02-23").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "WTK/DMW",
            table: ["Wybierz kategorię", "Mężczyźni", "Kobiety"],
          },
        ],
      },
      {
        title: "WTK KWGPP Kadetów",
        data: "25.02",
        place: "Tomaszów L.",
        categories: "Kadeci",
        datamoment: moment("2023-02-26").format("YYYY-MM-DD"),
        datamomentInvite: moment("2023-02-23").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "WTK/DMW",
            table: ["Wybierz kategorię", "Mężczyźni", "Kobiety"],
          },
        ],
      },
      {
        title: "WTK KWGPP Młodzików",
        data: "26.02",
        place: "Tomaszów L.",
        categories: "Młodzicy",
        datamoment: moment("2023-02-27").format("YYYY-MM-DD"),
        datamomentInvite: moment("2023-02-24").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "WTK/DMW",
            table: ["Wybierz kategorię", "Mężczyźni", "Kobiety"],
          },
        ],
      },
      {
        title: "WTK KWGPP Juniorów",
        data: "26.02",
        place: "Tomaszów L.",
        categories: "Juniorzy",
        datamoment: moment("2023-02-27").format("YYYY-MM-DD"),
        datamomentInvite: moment("2023-02-24").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "WTK/DMW",
            table: ["Wybierz kategorię", "Mężczyźni", "Kobiety"],
          },
        ],
      },
    ],
  },
  {
    month: "Marzec",
    details: [
      {
        title: "3. GPP Juniorów",
        data: "03-05.03",
        place: "",
        categories: "Juniorzy",
        datamoment: moment("2023-03-06").format("YYYY-MM-DD"),
      },
      {
        title: "3. GPP Młodzików",
        data: "03-05.03",
        place: "",
        categories: "Młodzicy",
        datamoment: moment("2023-03-06").format("YYYY-MM-DD"),
      },
      {
        title: "IMW Młodzików Młodszych",
        data: "04.03",
        place: "Niedźwiada",
        categories: "Młodzicy Młodsi",
        datamomentInvite: moment("2023-03-02").format("YYYY-MM-DD"),
        datamoment: moment("2023-03-05").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "IMWRest",
            table: [
              "Wybierz kategorię",
              "Turniej indywidualny mężczyzn",
              "Turniej indywidualny kobiet",
              "Gra podwójna kobiet",
              "Gra podwójna mężczyzn",
              "Gra mieszana",
            ],
          },
        ],
      },
      {
        title: "DMW Młodzieżowców",
        data: "05.03",
        place: "Niedźwiada",
        categories: "Młodzieżowcy",
        datamoment: moment("2023-03-06").format("YYYY-MM-DD"),
        datamomentInvite: moment("2023-03-03").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "WTK/DMW",
            table: ["Wybierz kategorię", "Mężczyźni", "Kobiety"],
          },
        ],
      },
      {
        title: "IMW Młodzieżowców",
        data: "05.03",
        place: "Niedźwiada",
        categories: "Młodzieżowcy",
        datamoment: moment("2023-03-06").format("YYYY-MM-DD"),
        datamomentInvite: moment("2023-03-03").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "IMWRest",
            table: [
              "Wybierz kategorię",
              "Turniej indywidualny mężczyzn",
              "Turniej indywidualny kobiet",
              "Gra podwójna kobiet",
              "Gra podwójna mężczyzn",
              "Gra mieszana",
            ],
          },
        ],
      },
      {
        title: "IMW żaków",
        data: "05.03",
        place: "Niedźwiada",
        categories: "Żacy",
        datamoment: moment("2023-03-06").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "IMWRest",
            table: [
              "Wybierz kategorię",
              "Turniej indywidualny mężczyzn",
              "Turniej indywidualny kobiet",
              "Gra podwójna kobiet",
              "Gra podwójna mężczyzn",
              "Gra mieszana",
            ],
          },
        ],
        datamomentInvite: moment("2023-03-03").format("YYYY-MM-DD"),
      },
      {
        title: "3. GPP Kadetów",
        data: "10-12.03",
        place: "",
        categories: "Kadeci",
        datamoment: moment("2023-03-13").format("YYYY-MM-DD"),
      },
      {
        title: "3. GPP Żaków",
        data: "10-12.03",
        place: "",
        categories: "Żacy",
        datamoment: moment("2023-03-13").format("YYYY-MM-DD"),
      },
      {
        title: "EL WOJ. PP K+M",
        data: "11.03",
        place: "",
        categories: "Seniorzy",
        datamoment: moment("2023-03-13").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "WTK/DMW",
            table: ["Wybierz kategorię", "Mężczyźni", "Kobiety"],
          },
        ],
        datamomentInvite: moment("2023-03-09").format("YYYY-MM-DD"),
      },
      {
        title: "DMW żaków",
        data: "11.03",
        place: "",
        categories: "Żacy",
        datamoment: moment("2023-03-06").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "WTK/DMW",
            table: ["Wybierz kategorię", "Mężczyźni", "Kobiety"],
          },
        ],
        datamomentInvite: moment("2023-03-09").format("YYYY-MM-DD"),
      },

      {
        title: "IMW seniorów",
        data: "12.03",
        place: "",
        categories: "Seniorzy",
        datamoment: moment("2023-03-13").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "IMWRest",
            table: [
              "Wybierz kategorię",
              "Turniej indywidualny mężczyzn",
              "Turniej indywidualny kobiet",
              "Gra podwójna kobiet",
              "Gra podwójna mężczyzn",
              "Gra mieszana",
            ],
          },
        ],
        datamomentInvite: moment("2023-03-10").format("YYYY-MM-DD"),
      },

      {
        title: "DMW skrzatów",
        data: "12.03",
        place: "",
        categories: "Skrzaci",
        datamoment: moment("2023-03-13").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "WTK/DMW",
            table: ["Wybierz kategorię", "Mężczyźni", "Kobiety"],
          },
        ],
        datamomentInvite: moment("2023-03-10").format("YYYY-MM-DD"),
      },
      {
        title: "Akademickie MP",
        data: "18-19.03",
        place: "",
        categories: "Młodzieżowcy",
        datamoment: moment("2023-03-20").format("YYYY-MM-DD"),
      },
      {
        title: "IMW KADETÓW",
        data: "18.03",
        place: "Niedźwiada",
        categories: "Kadeci",
        datamoment: moment("2023-03-19").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "IMWRest",
            table: [
              "Wybierz kategorię",
              "Turniej indywidualny mężczyzn",
              "Turniej indywidualny kobiet",
              "Gra podwójna kobiet",
              "Gra podwójna mężczyzn",
              "Gra mieszana",
            ],
          },
        ],
        datamomentInvite: moment("2023-03-16").format("YYYY-MM-DD"),
      },
      {
        title: "IMW SKRZATÓW",
        data: "18.03",
        place: "Niedźwiada",
        categories: "Skrzaci",
        datamoment: moment("2023-03-19").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "IMW",
            table: [
              "Wybierz kategorię",
              "Turniej indywidualny chłopców",
              "Turniej indywidualny dziewcząt",
              "Gra podwójna dziewcząt",
              "Gra podwójna chłopców",
            ],
          },
        ],
        datamomentInvite: moment("2023-03-10").format("YYYY-MM-DD"),
      },
      {
        title: "DMW MŁODZIKÓW",
        data: "19.03",
        place: "Niedźwiada",
        categories: "Młodzicy",
        datamoment: moment("2023-03-20").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "WTK/DMW",
            table: ["Wybierz kategorię", "Mężczyźni", "Kobiety"],
          },
        ],
        datamomentInvite: moment("2023-03-17").format("YYYY-MM-DD"),
      },
      {
        title: "DMW KADETÓW",
        data: "19.03",
        place: "Niedźwiada",
        categories: "Kadeci",
        datamoment: moment("2023-03-20").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "WTK/DMW",
            table: ["Wybierz kategorię", "Mężczyźni", "Kobiety"],
          },
        ],
        datamomentInvite: moment("2023-03-17").format("YYYY-MM-DD"),
      },
      {
        title: "DMW JUNIORÓW",
        data: "19.03",
        place: "Niedźwiada",
        categories: "Juniorzy",
        datamoment: moment("2023-03-20").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "WTK/DMW",
            table: ["Wybierz kategorię", "Mężczyźni", "Kobiety"],
          },
        ],
        datamomentInvite: moment("2023-03-17").format("YYYY-MM-DD"),
      },
      {
        title: "Indywidualne Mistrzostwa Polski Seniorów - PZTS",
        data: "24-26.03",
        place: "",
        categories: "Seniorzy",
        datamoment: moment("2023-03-27").format("YYYY-MM-DD"),
      },
      {
        title: "IMW MŁODZIKÓW",
        data: "25.03",
        place: "Niedźwiada",
        categories: "Młodzicy",
        datamoment: moment("2023-03-26").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "IMWRest",
            table: [
              "Wybierz kategorię",
              "Turniej indywidualny mężczyzn",
              "Turniej indywidualny kobiet",
              "Gra podwójna kobiet",
              "Gra podwójna mężczyzn",
              "Gra mieszana",
            ],
          },
        ],
        datamomentInvite: moment("2023-03-23").format("YYYY-MM-DD"),
      },
      {
        title: "IMW JUNIORÓW",
        data: "26.03",
        place: "Niedźwiada",
        categories: "Juniorzy",
        datamoment: moment("2023-03-27").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "IMWRest",
            table: [
              "Wybierz kategorię",
              "Turniej indywidualny mężczyzn",
              "Turniej indywidualny kobiet",
              "Gra podwójna kobiet",
              "Gra podwójna mężczyzn",
              "Gra mieszana",
            ],
          },
        ],
        datamomentInvite: moment("2023-03-24").format("YYYY-MM-DD"),
      },
    ],
  },
  {
    month: "Kwiecień",
    details: [
      {
        title: "DUMW",
        data: "01.04",
        place: "Łucka?",
        categories: "Juniorzy",
        datamoment: moment("2023-04-02").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "WTK/DMW",
            table: ["Wybierz kategorię", "Mężczyźni", "Kobiety"],
          },
        ],
        datamomentInvite: moment("2023-03-30").format("YYYY-MM-DD"),
      },
      {
        title: "ITM – Łucka ??? ",
        data: "02.04",
        place: "Łucka?",
        categories: "(Szkoły i UKS-y)",
        datamoment: moment("2023-04-03").format("YYYY-MM-DD"),
        typeofTurnament: [
          {
            title: "WTK/DMW",
            table: ["Wybierz kategorię", "Mężczyźni", "Kobiety"],
          },
        ],
        datamomentInvite: moment("2023-03-31").format("YYYY-MM-DD"),
      },
      {
        title: "LIGA Runda II/5 LK, II, III, IV LM",
        data: "02.04",
        place: "Kluby",
        categories: "Liga",
        datamoment: moment("2023-04-03").format("YYYY-MM-DD"),
      },
      {
        title: "BARAŻE LIGA LOZTS - 1",
        data: "15.04",
        place: "Kluby",
        categories: "Liga",
        datamoment: moment("2023-04-16").format("YYYY-MM-DD"),
      },
      {
        title: "MMM",
        data: "15.04",
        place: "Białystok",
        categories: "",
        datamoment: moment("2023-04-17").format("YYYY-MM-DD"),
      },
      {
        title: "BARAŻE LIGA LOZTS - 2",
        data: "16.04",
        place: "Kluby",
        categories: "Liga",
        datamoment: moment("2023-04-17").format("YYYY-MM-DD"),
      },
      {
        title: "BARAŻE LIGA LOZTS – 3 (IV LM 3m/III LM 10m)",
        data: "22.04",
        place: "Kluby",
        categories: "Liga",
        datamoment: moment("2023-04-23").format("YYYY-MM-DD"),
      },
      {
        title: "BARAŻE LIGA LOZTS – 4 (IV LM 3m/III LM 10m)",
        data: "23.04",
        place: "Kluby",
        categories: "Liga",
        datamoment: moment("2023-04-24").format("YYYY-MM-DD"),
      },
      {
        title: "Mistrzostwa Polski Juniorów",
        data: "27-30.04",
        place: "",
        categories: "Juniorzy",
        datamoment: moment("2023-05-01").format("YYYY-MM-DD"),
      },
      {
        title: "Mistrzostwa Polski Kadetów (OOM - ZPM)",
        data: "11-14.05",
        place: "",
        categories: "Kadeci",
        datamoment: moment("2023-05-15").format("YYYY-MM-DD"),
      },
    ],
  },
  {
    month: "Maj",
    details: [
      {
        title: "Mistrzostwa Polski Kadetów (OOM - ZPM)",
        data: "11-14.05",
        place: "",
        categories: "Kadeci",
        datamoment: moment("2023-05-15").format("YYYY-MM-DD"),
      },
      {
        title: "Mistrzostwa Polski Młodzików",
        data: "19-21.05",
        place: "",
        categories: "Młodzicy",
        datamoment: moment("2023-05-22").format("YYYY-MM-DD"),
      },
      {
        title: "35. Młodzieżowe Mistrzostwa Polski",
        data: "01-04.06",
        place: "",
        categories: "Młodzieżowcy",
        datamoment: moment("2023-06-05").format("YYYY-MM-DD"),
      },
      {
        title: "Indywidualne Mistrzostwa Polski Żaków",
        data: "03-04.06",
        place: "",
        categories: "Żacy",
        datamoment: moment("2023-06-05").format("YYYY-MM-DD"),
      },
    ],
  },
];

export default calendarmonth;
