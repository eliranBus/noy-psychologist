import one from "../../assets/images/type-table/1.png";
import two from "../../assets/images/type-table/2.png";
import three from "../../assets/images/type-table/3.png";
import four from "../../assets/images/type-table/4.png";
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
                    path: "amanitas",
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
                    path: "gdamin-velehabit",
                  },
                  {
                    name: "נירנית",
                    path: "niranit",
                  },
                  {
                    name: "ירוקת דפים",
                    path: "",
                  },
                  {
                    name: "מוצקה",
                    path: "",
                  },
                  {
                    name: "מטרנית",
                    path: "",
                  },
                  {
                    name: "מטריינית",
                    path: "",
                  },
                  {
                    name: "פקועה",
                    path: "pkua-hadura",
                  },
                  {
                    name: "לבנית",
                    path: "",
                  },
                  {
                    name: "לבקנית",
                    path: "",
                  },
                  {
                    name: "מטריינית",
                    path: "",
                  },
                ],
              },
              2: {
                name: "על גזע או ענף",
                types: [
                  {
                    name: "נירנית הצפצפה",
                    path: "",
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
                    path: "",
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
    id: 2,
    cellClassName: "typeGridCell",
    feature: "type2",
    avatar: two,
  },
  {
    id: 3,
    cellClassName: "typeGridCell",
    feature: "type3",
    avatar: four,
  },
  {
    id: 4,
    cellClassName: "typeGridCell",
    feature: "type4",
    avatar: three,
  },
  {
    id: 5,
    cellClassName: "typeGridCell",
    feature: "type5",
    avatar: six,
  },
  {
    id: 6,
    cellClassName: "typeGridCell",
    feature: "type6",
    avatar: five,
  },
  {
    id: 7,
    cellClassName: "typeGridCell",
    feature: "type7",
    avatar: seven,
  },
  {
    id: 8,
    cellClassName: "typeGridCell",
    feature: "type8",
    avatar: ten,
  },
  {
    id: 9,
    cellClassName: "typeGridCell",
    feature: "type9",
    avatar: eight,
  },
  {
    id: 10,
    cellClassName: "typeGridCell",
    feature: "type10",
    avatar: nine,
  },
  {
    id: 11,
    cellClassName: "typeGridCell",
    feature: "type11",
    avatar: twelve,
  },
  {
    id: 12,
    cellClassName: "typeGridCell",
    feature: "type12",
    avatar: eleven,
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
