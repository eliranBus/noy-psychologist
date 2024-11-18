import one from "../../assets/images/type-table/1.png";
import three from "../../assets/images/type-table/3.png";
import five from "../../assets/images/type-table/5.png";
import six from "../../assets/images/type-table/6.png";
import seven from "../../assets/images/type-table/7.png";
import eight from "../../assets/images/type-table/8.png";
import nine from "../../assets/images/type-table/9.png";
import ten from "../../assets/images/type-table/10.png";
import eleven from "../../assets/images/type-table/11.png";
import twelve from "../../assets/images/type-table/12.png";

export const familyTypes = [
  {
    id: 1,
    cellClassName: "typeGridCell",
    feature: "type1",
    avatar: one,
    structures: {
      1: {
        name: "עם טבעת ונרתיק",
        sizes: {
          1: {
            name: "גדולות",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "אמנית",
                    path: "type/amanita",
                  },
                ],
              },
            },
          },
        },
      },
      2: {
        name: "עם טבעת בלבד",
        sizes: {
          1: {
            name: "גדולות ובינוניות",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "גידמית הדורה",
                    path: "type/gymnopilus",
                  },
                  {
                    name: "נירנית",
                    path: "type/agrocybe",
                  },
                  {
                    name: "ירוקת דפים",
                    path: "type/chlorophyllum",
                  },
                  {
                    name: "מוצקה",
                    path: "type/mutzaka",
                  },
                  {
                    name: "מטרנית",
                    path: "type/macrolepiota",
                  },
                  {
                    name: "מטריינית",
                    path: "type/matriyanit",
                  },
                  {
                    name: "פקועה",
                    path: "type/agaricus",
                  },
                  {
                    name: "לבנית",
                    path: "type/levanit",
                  },
                  {
                    name: "לבקנית",
                    path: "type/lavkanit",
                  },
                  {
                    name: "מטריינית",
                    path: "type/matriyanit",
                  },
                ],
              },
              2: {
                name: "על גזע או ענף",
                types: [
                  {
                    name: "נירנית הצפצפה",
                    path: "type/niranit-hatzaftzefa",
                  },
                ],
              },
            },
          },
          2: {
            name: "קטנות",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "אבנטית",
                    path: "type/avnatit",
                  },
                ],
              },
              2: {
                name: "בעציצים וחממות",
                types: [
                  {
                    name: "עציצית",
                    path: "type/leucocoprinus",
                  },
                ],
              },
            },
          },
        },
      },
      3: {
        name: "עם נרתיק בלבד",
        sizes: {
          1: {
            name: "גדולות",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "אמנית מקושטת",
                    path: "type/amanita",
                  },
                  {
                    name: "אמנית הנרתיק",
                    path: "type/amanita",
                  },
                  {
                    name: "נרתיקנית",
                    path: "type/volvariella",
                  },
                ],
              },
            },
          },
          2: {
            name: "קטנות",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "נרתיקנית קטנה",
                    path: "type/nartikanit-ktana",
                  },
                ],
              },
            },
          },
        },
      },
      4: {
        name: "ללא טבעת ונרתיק",
        sizes: {
          1: {
            name: "גדולות ובינוניות",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "אחלמית",
                    path: "type/lepista",
                  },
                  {
                    name: "דפונית",
                    path: "type/lyophyllum",
                  },
                  {
                    name: "חריפית",
                    path: "type/russula",
                  },
                  {
                    name: "ישעורית",
                    path: "type/yashurit",
                  },
                  {
                    name: "לחלחה",
                    path: "type/lachlacha",
                  },
                  {
                    name: "נטופה",
                    path: "type/lactarius",
                  },
                  {
                    name: "ציצנית",
                    path: "type/tzitzanit",
                  },
                  {
                    name: "קשקשנית",
                    path: "type/pholiota",
                  },
                  {
                    name: "שחרחרית",
                    path: "type/melanoleuca",
                  },
                  {
                    name: "הינומה",
                    path: "type/cortinarius",
                  },
                ],
              },
              2: {
                name: "על גזע או ענף",
                types: [
                  {
                    name: "גידמית חודרנית",
                    path: "type/gymnopilus",
                  },
                  {
                    name: "להבית",
                    path: "type/lehavit",
                  },
                  {
                    name: "קטיפנית",
                    path: "type/pluteus",
                  },
                  {
                    name: "גחונית",
                    path: "type/hypholoma",
                  },
                ],
              },
            },
          },
          2: {
            name: "קטנות",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "אדומית",
                    path: "type/entoloma",
                  },
                  {
                    name: "אסימונית",
                    path: "type/collybia",
                  },
                  {
                    name: "אפורית",
                    path: "type/tephrocybe",
                  },
                  {
                    name: "דפופית",
                    path: "type/dafufit",
                  },
                  {
                    name: "לחית",
                    path: "type/hygrocybe",
                  },
                  {
                    name: "סיבית",
                    path: "type/sivit",
                  },
                  {
                    name: "שברירית",
                    path: "type/psathyrella",
                  },
                  {
                    name: "קטיפנית",
                    path: "type/pluteus",
                  },
                  {
                    name: "שרפית",
                    path: "type/laccaria",
                  },
                ],
              },
              2: {
                name: "על גזע, איצטרובל או ענף",
                types: [
                  {
                    name: "פיטרה",
                    path: "type/pitra",
                  },
                  {
                    name: "צמדית",
                    path: "type/hymenopellis",
                  },
                ],
              },
            },
          },
          3: {
            name: "זעירות",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "כומתית",
                    path: "type/galerina",
                  },
                  {
                    name: "סוככית",
                    path: "type/sochachit",
                  },
                  {
                    name: "צנומה",
                    path: "type/marasmius",
                  },
                ],
              },
              2: {
                name: "על גזע, ענף או עלה",
                types: [
                  {
                    name: "זיפנית",
                    path: "type/crinipellis",
                  },
                  {
                    name: "צנומית",
                    path: "type/marasmiellus",
                  },
                ],
              },
            },
          },
        },
      },
      5: {
        name: "דפים גולשים",
        sizes: {
          1: {
            name: "גודל לא רלוונטי",
            platforms: {
              1: {
                name: "על הרגל",
                types: [
                  {
                    name: "גולשנית",
                    path: "type/golshanit",
                  },
                  {
                    name: "גמישנית",
                    path: "type/gmishanit",
                  },
                  {
                    name: "לחלחה",
                    path: "type/lachlacha",
                  },
                  {
                    name: "משפכנית",
                    path: "type/mashpechit",
                  },
                  {
                    name: "קמרונית",
                    path: "type/kamronit",
                  },
                ],
              },
              2: {
                name: "ללא רגל",
                types: [
                  {
                    name: "אזנית",
                    path: "type/oznit",
                  },
                  {
                    name: "גביעונית",
                    path: "type/cantharellus",
                  },
                  {
                    name: "מרזבית",
                    path: "type/marzevit",
                  },
                ],
              },
            },
          },
        },
      },
      6: {
        name: "חסרות רגל",
        sizes: {
          1: {
            name: "גדולות",
            platforms: {
              1: {
                name: "על קרקע, גזע או ענף",
                types: [
                  {
                    name: "אזנית",
                    path: "type/oznit",
                  },
                ],
              },
            },
          },
          2: {
            name: "קטנות",
            platforms: {
              1: {
                name: "על גזע או ענף",
                types: [
                  {
                    name: "אפרכסית",
                    path: "type/afarkasit",
                  },
                  {
                    name: "אפרקדנית",
                    path: "type/resupinus",
                  },
                  {
                    name: "דרדסית",
                    path: "type/crepidotus",
                  },
                  {
                    name: "שסועית",
                    path: "type/shasuit",
                  },
                  {
                    name: "שרועית",
                    path: "type/sruit",
                  },
                ],
              },
              2: {
                name: "בין טחבים",
                types: [
                  {
                    name: "ארהניה",
                    path: "type/arhania",
                  },
                ],
              },
            },
          },
        },
      },
      7: {
        name: "כובע חרוטי (לא בזיקנה)",
        sizes: {
          1: {
            name: "גודל לא רלוונטי",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "דיואית",
                    path: "type/coprinus",
                  },
                  {
                    name: "חרוטית",
                    path: "type/harutit",
                  },
                  {
                    name: "פעמונית",
                    path: "type/paamonit",
                  },
                  {
                    name: "שברירית",
                    path: "type/psathyrella",
                  },
                ],
              },
              2: {
                name: "על גללי בע''ח",
                types: [
                  {
                    name: "גללית",
                    path: "type/bolbitius",
                  },
                  {
                    name: "קרוחה",
                    path: "type/krucha",
                  },
                ],
              },
            },
          },
        },
      },
      8: {
        name: "כובע עם שקע",
        sizes: {
          1: {
            name: "גודל לא רלוונטי",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "אומפלינה = קורקבנית",
                    path: "type/kurkevanit",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  {
    id: 4,
    cellClassName: "typeGridCell",
    feature: "type4",
    avatar: three,
    structures: {
      1: {
        name: "ספוג צהוב או בהיר",
        sizes: {
          1: {
            name: "גודל לא רלוונטי",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "אורנייה",
                    path: "type/suillus",
                  },
                  {
                    name: "גושית",
                    path: "type/boletus",
                  },
                  {
                    name: "לבדית",
                    path: "type/xerocomus",
                  },
                ],
              },
            },
          },
        },
      },
      2: {
        name: "ספוג אדום",
        sizes: {
          1: {
            name: "גודל לא רלוונטי",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "גושית",
                    path: "type/boletus",
                  },
                ],
              },
            },
          },
        },
      },
      3: {
        name: "ספוג בצבע אחר",
        sizes: {
          1: {
            name: "גודל לא רלוונטי",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "גושית",
                    path: "type/boletus",
                  },
                  {
                    name: "גושנית",
                    path: "type/gushanit",
                  },
                  {
                    name: "חרירית",
                    path: "type/gyroporus",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  {
    id: 5,
    cellClassName: "typeGridCell",
    feature: "type5",
    avatar: six,
    structures: {
      1: {
        name: "חסרות רגל",
        sizes: {
          1: {
            name: "גודל לא רלוונטי",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "הדורית",
                    path: "type/hadorit",
                  },
                  {
                    name: "שיננית",
                    path: "type/shinanit",
                  },
                  {
                    name: "שינונית",
                    path: "type/shinonit",
                  },
                  {
                    name: "סרקודון",
                    path: "type/sarkodon",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  {
    id: 6,
    cellClassName: "typeGridCell",
    feature: "type6",
    avatar: five,
    structures: {
      1: {
        name: "חסרות רגל",
        sizes: {
          1: {
            name: "גדולות",
            platforms: {
              1: {
                name: "על גזע או ענף",
                types: [
                  {
                    name: "נקובית",
                    path: "type/laetiporus",
                  },
                ],
              },
            },
          },
          2: {
            name: "קטנות",
            platforms: {
              1: {
                name: "על ענף דק בקרקע",
                types: [
                  {
                    name: "נקבובנית חרפית",
                    path: "type/nakvuvit-horfit",
                  },
                ],
              },
            },
          },
        },
      },
      2: {
        name: "עם רגל",
        sizes: {
          1: {
            name: "קטנות",
            platforms: {
              1: {
                name: "על ענף דק",
                types: [
                  {
                    name: "נקבובנית",
                    path: "type/polyporus",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  {
    id: 7,
    cellClassName: "typeGridCell",
    feature: "type7",
    avatar: seven,
    structures: {
      1: {
        name: "חסרות רגל",
        sizes: {
          1: {
            name: "גדולות",
            platforms: {
              1: {
                name: "על גזע",
                types: [
                  {
                    name: "אבוקית",
                    path: "type/fomes",
                  },
                  {
                    name: "בהוקית",
                    path: "type/ganoderma",
                  },
                  {
                    name: "מדפית",
                    path: "type/trametes",
                  },
                  {
                    name: "צמודית",
                    path: "type/phellinus",
                  },
                  {
                    name: "פתלתלית",
                    path: "type/ptaltalit",
                  },
                  {
                    name: "קישוטית",
                    path: "type/kishutit",
                  },
                  {
                    name: "עוגה",
                    path: "type/uga",
                  },
                ],
              },
            },
          },
          2: {
            name: "קטנות",
            platforms: {
              1: {
                name: "על גזע",
                types: [
                  {
                    name: "דפדפנית",
                    path: "type/gloeophyllum",
                  },
                  {
                    name: "מניפנית",
                    path: "type/menifanit",
                  },
                  {
                    name: "סוליינית",
                    path: "type/sulyanit",
                  },
                  {
                    name: "קשיחית",
                    path: "type/kshichit",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  {
    id: 8,
    cellClassName: "typeGridCell",
    feature: "type8",
    avatar: ten,
    structures: {
      1: {
        name: "עם רגל",
        sizes: {
          1: {
            name: "גודל לא רלוונטי",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "מרדעית",
                    path: "type/mardait",
                  },
                ],
              },
            },
          },
        },
      },
      2: {
        name: "עם בסיס רחב מאורך",
        sizes: {
          1: {
            name: "גודל לא רלוונטי",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "גמצוצית",
                    path: "type/gamtzutz-haruti",
                  },
                  {
                    name: "מרדעית",
                    path: "type/mardait",
                  },
                ],
              },
            },
          },
        },
      },
      3: {
        name: "יוצאת מ'ביצה'",
        sizes: {
          1: {
            name: "גודל לא רלוונטי",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "כישורית",
                    path: "type/colus",
                  },
                  {
                    name: "פינית",
                    path: "type/phallus",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  {
    id: 9,
    cellClassName: "typeGridCell",
    feature: "type9",
    avatar: eight,
    structures: {
      1: {
        name: "דמויות כוסית, קערית או קפלים",
        sizes: {
          1: {
            name: "קטנות",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "גביעית",
                    path: "type/gviit",
                  },
                  {
                    name: "זיפית",
                    path: "type/zifit",
                  },
                  {
                    name: "מצילה",
                    path: "type/cyathus",
                  },
                  {
                    name: "פזיזה",
                    path: "type/pziza",
                  },
                  {
                    name: "קופסית",
                    path: "type/kufsit",
                  },
                  {
                    name: "קערית",
                    path: "type/kearit",
                  },
                  {
                    name: "שקועית",
                    path: "type/shkuit",
                  },
                ],
              },
              2: {
                name: "על ענף",
                types: [
                  {
                    name: "אזנונית יהודה",
                    path: "type/auricularia",
                  },
                  {
                    name: "ספלונית",
                    path: "type/siflonit",
                  },
                ],
              },
            },
          },
          2: {
            name: "זעירות",
            platforms: {
              1: {
                name: "מצע לא רלוונטי",
                types: [
                  {
                    name: "ספלונית",
                    path: "type/siflonit",
                  },
                  {
                    name: "פנכית",
                    path: "type/panchit",
                  },
                  {
                    name: "פכית",
                    path: "type/pachit",
                  },
                  {
                    name: "קערורית",
                    path: "type/kaarurit",
                  },
                  {
                    name: "שלהבת",
                    path: "type/pyronema",
                  },
                  {
                    name: "שפתנית",
                    path: "type/sfatanit",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  {
    id: 10,
    cellClassName: "typeGridCell",
    feature: "type10",
    avatar: nine,
    structures: {
      1: {
        name: "כדור ללא בסיס",
        sizes: {
          1: {
            name: "גודל לא רלוונטי",
            platforms: {
              1: {
                name: "בתוך קרקע חולית",
                types: [
                  {
                    name: "כמהה",
                    path: "type/kmeha",
                  },
                  {
                    name: "כמהית",
                    path: "type/kmehit",
                  },
                ],
              },
              2: {
                name: "בתוך רקבובית יער",
                types: [
                  {
                    name: "כמהת-יער",
                    path: "type/kmehat-yaar",
                  },
                  {
                    name: "פקעית",
                    path: "type/pkait",
                  },
                ],
              },
              3: {
                name: "על הקרקע",
                types: [
                  {
                    name: "דורנית",
                    path: "type/doranit",
                  },
                  {
                    name: "פסיפסית",
                    path: "type/psifasit",
                  },
                  {
                    name: "שחומית",
                    path: "type/shchumit",
                  },
                  {
                    name: "כדורית",
                    path: "type/calvatia",
                  },
                  {
                    name: "כדורנית",
                    path: "type/bovista",
                  },
                  {
                    name: "פחוסית",
                    path: "type/disciseda",
                  },
                ],
              },
              4: {
                name: "על גזע או ענף",
                types: [
                  {
                    name: "קשתנית",
                    path: "type/daldinia",
                  },
                ],
              },
            },
          },
        },
      },
      2: {
        name: "עמוד ועליו שקית",
        sizes: {
          1: {
            name: "גדולות בינויות או קטנות",
            platforms: {
              1: {
                name: "על קרקע חולית",
                types: [
                  {
                    name: "כלונסית",
                    path: "type/battarrea",
                  },
                  {
                    name: "סדנית",
                    path: "type/podaix",
                  },
                  {
                    name: "עמודנית",
                    path: "type/amudanit",
                  },
                  {
                    name: "פמוטית",
                    path: "type/pamotit",
                  },
                  {
                    name: "פומית",
                    path: "type/tulostoma",
                  },
                ],
              },
            },
          },
        },
      },
      3: {
        name: "כדור עם בסיס",
        sizes: {
          1: {
            name: "גדולות בינויות או קטנות",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "אבקית",
                    path: "type/lycoperdon",
                  },
                  {
                    name: "עורית",
                    path: "type/scleroderma",
                  },
                  {
                    name: "פרגודית",
                    path: "type/vascellum",
                  },
                  {
                    name: "כרסנית",
                    path: "type/macowanites",
                  },
                ],
              },
            },
          },
        },
      },
      4: {
        name: "כדור בתוך כוכב/אונות",
        sizes: {
          1: {
            name: "גדולות בינויות או קטנות",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "אסתרית",
                    path: "type/esterit",
                  },
                  {
                    name: "כוכבנית",
                    path: "type/geastrum",
                  },
                  {
                    name: "רבפומית",
                    path: "type/myriostoma",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  {
    id: 11,
    cellClassName: "typeGridCell",
    feature: "type11",
    avatar: twelve,
    structures: {
      1: {
        name: "שכבה שטוחה",
        sizes: {
          1: {
            name: "גודל לא רלוונטי",
            platforms: {
              1: {
                name: "על ענף",
                types: [
                  {
                    name: "חודנית",
                    path: "type/chodanit",
                  },
                  {
                    name: "יפענית",
                    path: "type/terena",
                  },
                  {
                    name: "קרומית",
                    path: "type/krumit",
                  },
                  {
                    name: "שעמית",
                    path: "type/shaamit",
                  },
                ],
              },
            },
          },
        },
      },
      2: {
        name: "גושים או טיפות קריש",
        sizes: {
          1: {
            name: "גודל לא רלוונטי",
            platforms: {
              1: {
                name: "על ענף",
                types: [
                  {
                    name: "בצקת",
                    path: "type/batzeket",
                  },
                  {
                    name: "קרישית",
                    path: "type/tremella",
                  },
                  {
                    name: "רסיסית",
                    path: "type/dacrymyces",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  {
    id: 12,
    cellClassName: "typeGridCell",
    feature: "type12",
    avatar: eleven,
    structures: {
      1: {
        name: "דמויות אלמוג או אלה",
        sizes: {
          1: {
            name: "גדולות קטנות או בינויות",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "אלתית",
                    path: "type/altit",
                  },
                  {
                    name: "עציונית",
                    path: "type/etzionit",
                  },
                ],
              },
              2: {
                name: "על טחב",
                types: [
                  {
                    name: "לשונית",
                    path: "type/geoglossum",
                  },
                ],
              },
              3: {
                name: "על ענף",
                types: [
                  {
                    name: "קרנית",
                    path: "type/kranit",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
];

export const types = [
  { label: "אבוקית - Fomes", path: "fomes" },
  { label: "אבנטית - Stropharia", path: "stropharia" },
  { label: "אבקית - Lycoperdon", path: "lycoperdon" },
  { label: "אדומית - Entoloma", path: "entoloma" },
  { label: "אורנייה - Suillus", path: "suillus" },
  { label: "אזנונית יהודה - Auricularia", path: "auricularia" },
  { label: "אחלמית - Lepista", path: "lepista" },
  { label: "אמנית - Amanita", path: "amanita" },
  { label: "אסימונית - Collybia", path: "collybia" },
  { label: "אפורית - Tephrocybe", path: "tephrocybe" },
  { label: "אפרקדנית - Resupinus", path: "resupinus" },
  { label: "בהוקית - Ganoderma", path: "ganoderma" },
  { label: "גביעונית - Cantharellus", path: "cantharellus" },
  { label: "גושית - Boletus", path: "boletus" },
  { label: "גחונית - Hypholoma", path: "hypholoma" },
  { label: "גידמית - Gymnopilus", path: "gymnopilus" },
  { label: "גללית - Bolbitius", path: "bolbitius" },
  { label: "דיואית - Coprinus", path: "coprinus" },
  { label: "דיואית - Coprinellus", path: "coprinellus" },
  { label: "דיואית - Coprinopsis", path: "coprinopsis" },
  { label: "דפדפנית - Gloeophyllum", path: "gloeophyllum" },
  { label: "דפונית - Lyophyllum", path: "lyophyllum" },
  { label: "דפופית - Montagnites", path: "montagnites" },
  { label: "דרדסית - Crepidotus", path: "crepidotus" },
  { label: "דרדסית - Symocibe", path: "symocibe" },
  { label: "הינומה - Cortinarius", path: "cortinarius" },
  { label: "היסטרית - Hystrerangium", path: "hystrerangium" },
  { label: "זיפנית - Crinipellis", path: "crinipellis" },
  { label: "חריפית - Russula", path: "russula" },
  { label: "חרירית - Gyroporus", path: "gyroporus" },
  { label: "יפענית - Terena", path: "terena" },
  {
    label: "ירוקת דפים קיצית – Molybdites-Chlorophyllum",
    path: "chlorophyllum",
  },
  { label: "כדורנית - Bovista", path: "bovista" },
  { label: "כדורית - Calvatia", path: "calvatia" },
  { label: "כוכבנית - Geastrum", path: "geastrum" },
  { label: "כומתית - Galerina", path: "galerina" },
  { label: "כישורית - Colus", path: "colus" },
  { label: "כלונסית - Battarrea", path: "battarrea" },
  { label: "כרסנית - Macowanites", path: "macowanites" },
  { label: "לבדית - Xerocomus", path: "xerocomus" },
  { label: "להבית - Flammulina", path: "flammulina" },
  { label: "לחית - Hygrocybe", path: "hygrocybe" },
  { label: "לשונית - Geoglossum", path: "geoglossum" },
  { label: "מדפית - Trametes", path: "trametes" },
  { label: "מיטרנית - Macrolepiota", path: "macrolepiota" },
  { label: "מצילה - Cyathus", path: "cyathus" },
  { label: "נירנית - Agrocybe", path: "agrocybe" },
  { label: "נירנית - Cyclocybe", path: "cyclocybe" },
  { label: "נקבובנית - Polyporus", path: "polyporus" },
  { label: "נקבובנית - Cerioporus", path: "cerioporus" },
  { label: "נטופה - Lactarius", path: "lactarius" },
  { label: "נקובית - Laetiporus", path: "laetiporus" },
  { label: "נרתיקנית - Volvariella", path: "volvariella" },
  { label: "סדנית - Podaix", path: "podaix" },
  { label: "עורית - Scleroderma", path: "scleroderma" },
  { label: "עציצית - Leucocoprinus", path: "leucocoprinus" },
  { label: "פומית - Tulostoma", path: "tulostoma" },
  { label: "פחוסית - Disciseda", path: "disciseda" },
  { label: "פטרה - Mycena", path: "mycena" },
  { label: "פטרה - Atheniella", path: "atheniella" },
  { label: "פטרה - Hemimycena", path: "hemimycena" },
  { label: "פינית - Phallus", path: "phallus" },
  { label: "פקועה - Agaricus", path: "agaricus" },
  { label: "פרגודית - Vascellum", path: "vascellum" },
  { label: "צמדית - Hymenopellis", path: "hymenopellis" },
  { label: "צמודית - phellinus", path: "phellinus" },
  { label: "צנומה - Marasmius", path: "marasmius" },
  { label: "צנומית - Marasmiellus", path: "marasmiellus" },
  { label: "קטיפנית - Pluteus", path: "pluteus" },
  { label: "קרישית - Tremella", path: "tremella" },
  { label: "קשקשנית - Pholiota", path: "pholiota" },
  { label: "קשתנית - Daldinia", path: "daldinia" },
  { label: "רבפומית - Myriostoma", path: "myriostoma" },
  { label: "רסיסית - Dacrymyces", path: "dacrymyces" },
  { label: "שברירית - Psathyrella", path: "psathyrella" },
  { label: "שחרחרית - Melanoleuca", path: "melanoleuca" },
  { label: "שלהבת - Pyronema", path: "pyronema" },
  { label: "שלחופית - Hydronocybe", path: "hydronocybe" },
  { label: "שרפית - Laccaria", path: "laccaria" },
];
