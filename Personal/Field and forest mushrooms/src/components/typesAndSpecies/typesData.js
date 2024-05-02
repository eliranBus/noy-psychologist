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
                    path: "type/amanitas",
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
                    name: "גדמית הדורה",
                    path: "type/gdamin-velehabit",
                  },
                  {
                    name: "נירנית",
                    path: "type/niranit",
                  },
                  {
                    name: "ירוקת דפים",
                    path: "type/yerukat-dapim",
                  },
                  {
                    name: "מוצקה",
                    path: "type/mutzaka",
                  },
                  {
                    name: "מטרנית",
                    path: "type/matranit",
                  },
                  {
                    name: "מטריינית",
                    path: "type/matriyanit",
                  },
                  {
                    name: "פקועה",
                    path: "type/pkua-hadura",
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
                    path: "type/amanitas",
                  },
                  {
                    name: "אמנית הנרתיק",
                    path: "type/amanitas",
                  },
                  {
                    name: "נרתיקנית",
                    path: "type/nartikanit",
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
                    path: "type/achlamit",
                  },
                  {
                    name: "דפונית",
                    path: "type/dafonit",
                  },
                  {
                    name: "חריפית",
                    path: "type/harifit",
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
                    path: "type/netufa",
                  },
                  {
                    name: "ציצנית",
                    path: "type/tzitzanit",
                  },
                  {
                    name: "קשקשנית",
                    path: "type/kashkeshanit",
                  },
                  {
                    name: "שחרחרית",
                    path: "type/shcharcharit",
                  },
                  {
                    name: "הינומה",
                    path: "type/hinoma",
                  },
                ],
              },
              2: {
                name: "על גזע או ענף",
                types: [
                  {
                    name: "גדמית חודרנית",
                    path: "type/gdamin-velehabit",
                  },
                  {
                    name: "להבית",
                    path: "type/lehavit",
                  },
                  {
                    name: "קטיפנית",
                    path: "type/ktifanit",
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
                    path: "type/adumit",
                  },
                  {
                    name: "אסימונית",
                    path: "type/asimonit",
                  },
                  {
                    name: "אפורית",
                    path: "type/aforit",
                  },
                  {
                    name: "דפופית",
                    path: "type/dafufit",
                  },
                  {
                    name: "לחית",
                    path: "type/lahit",
                  },
                  {
                    name: "סיבית",
                    path: "type/sivit",
                  },
                  {
                    name: "שברירית",
                    path: "type/shavririt",
                  },
                  {
                    name: "קטיפנית",
                    path: "type/ktifanit",
                  },
                  {
                    name: "שרפית",
                    path: "type/srafit",
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
                    path: "type/tzmadit",
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
                    path: "type/kumtit",
                  },
                  {
                    name: "סוככית",
                    path: "type/sochachit",
                  },
                  {
                    name: "צנומה",
                    path: "type/tznuma-vetznumit",
                  },
                ],
              },
              2: {
                name: "על גזע, ענף או עלה",
                types: [
                  {
                    name: "צנומית",
                    path: "type/tznuma-vetznumit",
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
            name: "-",
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
                    path: "type/gvionit",
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
                    path: "type/afarkadit",
                  },
                  {
                    name: "דרדסית",
                    path: "type/dardasit",
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
            name: "-",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "דיואית",
                    path: "type/dioit",
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
                    path: "type/shavririt",
                  },
                ],
              },
              2: {
                name: "על גללי בע''ח",
                types: [
                  {
                    name: "גללית",
                    path: "type/glalit",
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
            name: "-",
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
            name: "-",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "אורנייה",
                    path: "type/orania",
                  },
                  {
                    name: "גושית",
                    path: "type/gushit",
                  },
                  {
                    name: "לבדית",
                    path: "type/levadit",
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
            name: "-",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "גושית",
                    path: "type/gushit",
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
            name: "-",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "גושית",
                    path: "type/gushit",
                  },
                  {
                    name: "גושנית",
                    path: "type/gushanit",
                  },
                  {
                    name: "חרירית",
                    path: "type/haririt",
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
            name: "-",
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
                    name: "נקבובנית",
                    path: "type/nakvuvanit",
                  },
                  {
                    name: "נקובית",
                    path: "type/nakvuvit",
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
                    path: "type/avukit",
                  },
                  {
                    name: "בהוקית",
                    path: "type/behukit",
                  },
                  {
                    name: "מדפית",
                    path: "type/madafit",
                  },
                  {
                    name: "צמודית",
                    path: "type/amudit",
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
                    path: "type/dafdefanit",
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
            name: "-",
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
            name: "-",
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
            name: "-",
            platforms: {
              1: {
                name: "על הקרקע",
                types: [
                  {
                    name: "כישורית",
                    path: "type/pinit-vekishurit",
                  },
                  {
                    name: "פינית",
                    path: "type/pinit-vekishurit",
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
            name: "גדולות או בינוניות",
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
                    path: "type/metzila",
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
                    name: "אזנונית",
                    path: "type/aznonit-yehuda",
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
                name: "-",
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
                    path: "type/shalhevet",
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
            name: "-",
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
                    path: "type/kadurit",
                  },
                  {
                    name: "כדורנית",
                    path: "type/kaduriot-2",
                  },
                  {
                    name: "פחוסית",
                    path: "type/kaduriot-2",
                  },
                ],
              },
              4: {
                name: "על גזע או ענף",
                types: [
                  {
                    name: "קשתנית",
                    path: "type/kashtanit",
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
                    path: "type/klunsit",
                  },
                  {
                    name: "סדנית",
                    path: "type/sadanit",
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
                    path: "type/pumit",
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
                    path: "type/kaduriot",
                  },
                  {
                    name: "עורית",
                    path: "type/kaduriot",
                  },
                  {
                    name: "פרגודית",
                    path: "type/kaduriot",
                  },
                  {
                    name: "כרסנית",
                    path: "type/karsanit",
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
                    path: "type/kochvanit",
                  },
                  {
                    name: "רבפומית",
                    path: "type/ravpumit",
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
            name: "-",
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
                    path: "type/yafanit",
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
        name: "קרומים חסרי צורה",
        sizes: {
          1: {
            name: "-",
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
                    path: "type/krishit",
                  },
                  {
                    name: "רסיסית",
                    path: "type/resisit",
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
                    path: "type/leshonit",
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

export const mushroomTypes = [
  {
    name: "אוזנית הכלך",
    path: "types-and-species/oznit-hakelach",
  },
  {
    name: "אזנונית יהודה",
    path: "types-and-species/aznonit-yehuda",
  },
  {
    name: "אמניתות - ערבה ורעילה",
    path: "types-and-species/amanitas",
  },
  {
    name: "אורניה",
    path: "types-and-species/orania",
  },
  {
    name: "גביעונית נאכלת",
    path: "types-and-species/gvionit",
  },
  {
    name: "גדמית ולהבית",
    path: "types-and-species/gdamin-velehabit",
  },
  {
    name: "גמצוץ חרוטי",
    path: "types-and-species/gamtzutz-haruti",
  },
  {
    name: "פטריות גדולות ולבנות",
    path: "types-and-species/large-white-mushrooms",
  },
  {
    name: "יפענית כחולה",
    path: "types-and-species/yafanit-khula",
  },
  {
    name: "כומתית ביצנית",
    path: "types-and-species/kumtit",
  },
  {
    name: "כמהית אפריקנית / צחורה",
    path: "types-and-species/kmehit",
  },
  {
    name: "לבדית",
    path: "types-and-species/levadit",
  },
  {
    name: "לחית",
    path: "types-and-species/lahit",
  },
  {
    name: "לוהבת טבורנית",
    path: "types-and-species/lohevet",
  },
  {
    name: "נירנית",
    path: "types-and-species/niranit",
  },
  {
    name: "נקבובנית חורפית",
    path: "types-and-species/nakvuvanit",
  },
  {
    name: "סדנית מצויצת",
    path: "types-and-species/sadanit",
  },
  {
    name: "'עציצית למונית'- לבקנית",
    path: "types-and-species/atzitzit-limonit-lavkanit",
  },
  {
    name: "פטרה שורשית",
    path: "types-and-species/patara-shorshit",
  },
  {
    name: "פטריריות",
    path: "types-and-species/pitririot",
  },
  {
    name: "פינית מרושתת",
    path: "types-and-species/pinit-merushetet",
  },
  {
    name: "פינית וכישורית",
    path: "types-and-species/pinit-vekishurit",
  },
  {
    name: "פקועה הדורה",
    path: "types-and-species/pkua-hadura",
  },
  {
    name: "פרזיטית על חרקים",
    path: "types-and-species/cordyceps",
  },
  {
    name: "צנומה וצנומית",
    path: "types-and-species/tznuma-vetznumit",
  },
  {
    name: "שברירית",
    path: "types-and-species/shavririt",
  },
  {
    name: "בהוקית",
    path: "types-and-species/behukit",
  },
  {
    name: "מצילה",
    path: "types-and-species/metzila",
  },
  {
    name: "דפדפנית",
    path: "types-and-species/dafdefanit",
  },
];
