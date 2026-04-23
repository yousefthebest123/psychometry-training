window.MATH_CARDS = [
  {
    "id": "tri_ineq",
    "topic": "Triangles & Similarity",
    "front": "אי־שוויון במשולש",
    "back": "a + b > c\na + c > b\nb + c > a",
    "backShort": "a+b>c, a+c>b, b+c>a",
    "explain": "סכום כל שתי צלעות גדול מן הצלע השלישית.",
    "trap": "בודקים את כל שלושת הזוגות, לא רק זוג אחד.",
    "helper": "triangle inequality"
  },
  {
    "id": "tri_area_basic",
    "topic": "Triangles & Similarity",
    "front": "שטח משולש רגיל",
    "back": "שטח = בסיס × גובה / 2",
    "backShort": "בסיס × גובה / 2",
    "explain": "הגובה חייב להיות ניצב לבסיס.",
    "trap": "לא משתמשים באורך צלע אלכסונית במקום בגובה.",
    "helper": "triangle area"
  },
  {
    "id": "sim_side_ratio",
    "topic": "Triangles & Similarity",
    "front": "משולשים דומים - יחס צלעות",
    "back": "יחס הצלעות המתאימות קבוע",
    "backShort": "יחס הצלעות המתאימות קבוע",
    "explain": "אותו יחס תקף גם להיקפים.",
    "trap": "צריך להשוות צלעות מתאימות, לא צלעות אקראיות.",
    "helper": "similar triangles"
  },
  {
    "id": "sim_perimeter",
    "topic": "Triangles & Similarity",
    "front": "משולשים דומים - יחס היקפים",
    "back": "יחס ההיקפים = יחס הדמיון",
    "backShort": "יחס ההיקפים = יחס הדמיון",
    "explain": "אם יחס הדמיון הוא k, גם יחס ההיקפים הוא k.",
    "trap": "היקף לא מתנהג כמו שטח.",
    "helper": "perimeter ratio"
  },
  {
    "id": "sim_area_ratio",
    "topic": "Triangles & Similarity",
    "front": "יחס שטחים במשולשים דומים",
    "back": "יחס השטחים = (יחס הדמיון)²",
    "backShort": "(יחס הדמיון)²",
    "explain": "אם יחס הצלעות הוא 2:3, יחס השטחים הוא 4:9.",
    "trap": "לא לשכוח להעלות בריבוע.",
    "helper": "area ratio"
  },
  {
    "id": "centroid_ratio",
    "topic": "Triangles & Similarity",
    "front": "מפגש התיכונים",
    "back": "כל תיכון מתחלק ביחס 2:1 מן הקודקוד",
    "backShort": "2:1 מן הקודקוד",
    "explain": "המרכז נמצא קרוב יותר לבסיס מאשר לקודקוד.",
    "trap": "לפעמים כותבים 1:2 מן הבסיס; חשוב מאיזה צד מודדים.",
    "helper": "centroid"
  },
  {
    "id": "equilateral_area",
    "topic": "Triangles & Similarity",
    "front": "שטח משולש שווה צלעות",
    "back": "a²√3 / 4",
    "backShort": "a²√3 / 4",
    "explain": "כאשר כל הצלעות שוות לאורך a.",
    "trap": "לא לבלבל עם בסיס × גובה / 2 בלי לדעת את הגובה.",
    "helper": "equilateral area"
  },
  {
    "id": "equilateral_centers",
    "topic": "Triangles & Similarity",
    "front": "במשולש שווה צלעות",
    "back": "תיכון = גובה = חוצה זווית = אנך אמצעי",
    "backShort": "תיכון=גובה=חוצה זווית=אנך אמצעי",
    "explain": "כל הקווים המיוחדים מתלכדים.",
    "trap": "נכון לשווה צלעות, לא לכל שווה שוקיים.",
    "helper": "all centers coincide"
  },
  {
    "id": "pythagorean_triples",
    "topic": "Triangles & Similarity",
    "front": "שלשות פיתגוריות שכדאי לזכור",
    "back": "3-4-5\n5-12-13\n8-15-17\n7-24-25",
    "backShort": "3-4-5, 5-12-13, 8-15-17, 7-24-25",
    "explain": "כל כפולה שלהן גם עובדת.",
    "trap": "בודקים גם כפולות, למשל 6-8-10.",
    "helper": "common triples"
  },
  {
    "id": "gold_triangle",
    "topic": "Special Triangles",
    "front": "משולש 30°-60°-90°",
    "back": "x, x√3, 2x",
    "backShort": "x, x√3, 2x",
    "explain": "הצלע מול 30° היא הקצרה ביותר.",
    "trap": "מול 60° מקבלים x√3, לא 2x.",
    "helper": "30-60-90"
  },
  {
    "id": "silver_triangle",
    "topic": "Special Triangles",
    "front": "משולש 45°-45°-90°",
    "back": "a, a, a√2",
    "backShort": "a, a, a√2",
    "explain": "שתי הניצבות שוות.",
    "trap": "היתר הוא √2 כפול ניצב, לא פי 2.",
    "helper": "45-45-90"
  },
  {
    "id": "diamond_triangle",
    "topic": "Special Triangles",
    "front": "משולש 30°-30°-120°",
    "back": "a, a, a√3",
    "backShort": "a, a, a√3",
    "explain": "הצלע מול 120° ארוכה יותר מן השוקיים.",
    "trap": "לא לבלבל עם 30-60-90.",
    "helper": "30-30-120"
  },
  {
    "id": "rt_median_hyp",
    "topic": "Special Triangles",
    "front": "תיכון ליתר במשולש ישר זווית",
    "back": "שווה למחצית היתר",
    "backShort": "מחצית היתר",
    "explain": "נקודת אמצע היתר שווה־מרחק משלושת הקודקודים.",
    "trap": "זה נכון ליתר בלבד.",
    "helper": "median to hypotenuse"
  },
  {
    "id": "vertical_angles",
    "topic": "Angles & Parallel Lines",
    "front": "זוויות קודקודיות",
    "back": "שוות זו לזו",
    "backShort": "שוות",
    "explain": "נוצרות מחיתוך של שני ישרים.",
    "trap": "לא לבלבל עם זוויות צמודות.",
    "helper": "vertical angles"
  },
  {
    "id": "linear_pair",
    "topic": "Angles & Parallel Lines",
    "front": "זוויות צמודות על ישר",
    "back": "סכומן 180°",
    "backShort": "180°",
    "explain": "נקרא גם זוג זוויות קו ישר.",
    "trap": "סביב נקודה שלמה הסכום הוא 360°.",
    "helper": "linear pair"
  },
  {
    "id": "around_point",
    "topic": "Angles & Parallel Lines",
    "front": "סכום זוויות סביב נקודה",
    "back": "360°",
    "backShort": "360°",
    "explain": "תקף תמיד סביב נקודה אחת.",
    "trap": "במשולש הסכום הוא 180° בלבד.",
    "helper": "around a point"
  },
  {
    "id": "corresponding",
    "topic": "Angles & Parallel Lines",
    "front": "ישרים מקבילים - זוויות מתאימות",
    "back": "שוות זו לזו",
    "backShort": "שוות",
    "explain": "נוצרות כאשר חותך עובר בשני מקבילים.",
    "trap": "מחפשים אותה פינה בכל חיתוך.",
    "helper": "corresponding angles"
  },
  {
    "id": "alternate",
    "topic": "Angles & Parallel Lines",
    "front": "ישרים מקבילים - זוויות מתחלפות",
    "back": "שוות זו לזו",
    "backShort": "שוות",
    "explain": "מתחלפות משני צדי החותך.",
    "trap": "צריך שהישרים יהיו מקבילים.",
    "helper": "alternate angles"
  },
  {
    "id": "same_side_interior",
    "topic": "Angles & Parallel Lines",
    "front": "ישרים מקבילים - זוויות חד־צדדיות פנימיות",
    "back": "סכומן 180°",
    "backShort": "180°",
    "explain": "נמצאות בין שני המקבילים ובאותו צד של החותך.",
    "trap": "לא לבלבל עם זוויות מתחלפות.",
    "helper": "same-side interior"
  },
  {
    "id": "exterior_polygon_sum",
    "topic": "Angles & Parallel Lines",
    "front": "סכום הזוויות החיצוניות של כל מצולע",
    "back": "360°",
    "backShort": "360°",
    "explain": "גם אם מספר הצלעות משתנה, הסכום נשאר קבוע.",
    "trap": "לא להתבלבל עם סכום הזוויות הפנימיות.",
    "helper": "exterior angles"
  },
  {
    "id": "parallelogram_sides",
    "topic": "Quadrilaterals",
    "front": "מקבילית - צלעות נגדיות",
    "back": "שוות ומקבילות",
    "backShort": "שוות ומקבילות",
    "explain": "זה סימן היכר של מקבילית.",
    "trap": "צלעות סמוכות לא חייבות להיות שוות.",
    "helper": "parallelogram sides"
  },
  {
    "id": "parallelogram_angles",
    "topic": "Quadrilaterals",
    "front": "מקבילית - זוויות נגדיות",
    "back": "שוות זו לזו",
    "backShort": "שוות",
    "explain": "זוויות סמוכות משלימות ל-180°.",
    "trap": "לא כל ארבע הזוויות שוות.",
    "helper": "parallelogram angles"
  },
  {
    "id": "parallelogram_adjacent",
    "topic": "Quadrilaterals",
    "front": "מקבילית - זוויות סמוכות",
    "back": "סכומן 180°",
    "backShort": "180°",
    "explain": "כי כל זוג יוצר חד־צדדיות פנימיות.",
    "trap": "לא לחשוב שהסכום הוא 360°.",
    "helper": "adjacent angles"
  },
  {
    "id": "parallelogram_diagonals",
    "topic": "Quadrilaterals",
    "front": "מקבילית - אלכסונים",
    "back": "חוצים זה את זה",
    "backShort": "חוצים זה את זה",
    "explain": "נקודת החיתוך היא אמצע כל אלכסון.",
    "trap": "במקבילית רגילה האלכסונים לא חייבים להיות שווים.",
    "helper": "diagonals bisect"
  },
  {
    "id": "parallelogram_area",
    "topic": "Quadrilaterals",
    "front": "שטח מקבילית",
    "back": "בסיס × גובה",
    "backShort": "בסיס × גובה",
    "explain": "אותו רעיון כמו מלבן, אבל צריך גובה ניצב.",
    "trap": "לא משתמשים בצלע אלכסונית במקום גובה.",
    "helper": "parallelogram area"
  },
  {
    "id": "rectangle_diagonals_equal",
    "topic": "Quadrilaterals",
    "front": "מלבן - אלכסונים",
    "back": "שווים וחוצים זה את זה",
    "backShort": "שווים וחוצים זה את זה",
    "explain": "מלבן הוא מקבילית עם זוויות ישרות.",
    "trap": "הם לא מאונכים בהכרח.",
    "helper": "rectangle diagonals"
  },
  {
    "id": "rectangle_area",
    "topic": "Quadrilaterals",
    "front": "שטח מלבן",
    "back": "אורך × רוחב",
    "backShort": "אורך × רוחב",
    "explain": "נוח כשיש שתי צלעות ניצבות.",
    "trap": "לא לבלבל עם היקף.",
    "helper": "rectangle area"
  },
  {
    "id": "rhombus_sides",
    "topic": "Quadrilaterals",
    "front": "מעוין - צלעות",
    "back": "כל הצלעות שוות",
    "backShort": "כל הצלעות שוות",
    "explain": "מעוין הוא מקבילית מיוחדת.",
    "trap": "הזוויות לא חייבות להיות 90°.",
    "helper": "rhombus sides"
  },
  {
    "id": "rhombus_diagonals_perp",
    "topic": "Quadrilaterals",
    "front": "מעוין - אלכסונים",
    "back": "מאונכים זה לזה",
    "backShort": "מאונכים",
    "explain": "בדרך כלל גם חוצים את הזוויות.",
    "trap": "במלבן האלכסונים שווים, לא מאונכים בהכרח.",
    "helper": "rhombus diagonals"
  },
  {
    "id": "rhombus_bisect_angles",
    "topic": "Quadrilaterals",
    "front": "מעוין - חציית זוויות",
    "back": "כל אלכסון חוצה זוג זוויות נגדיות",
    "backShort": "האלכסונים חוצים זוויות",
    "explain": "תכונה מאוד שימושית בהוכחות.",
    "trap": "לא כל מקבילית עושה זאת.",
    "helper": "bisect angles"
  },
  {
    "id": "rhombus_area",
    "topic": "Quadrilaterals",
    "front": "שטח מעוין",
    "back": "d₁ × d₂ / 2",
    "backShort": "d₁×d₂/2",
    "explain": "אפשר גם בסיס × גובה.",
    "trap": "d₁ ו-d₂ הם האלכסונים, לא הצלעות.",
    "helper": "rhombus area"
  },
  {
    "id": "square_area_side",
    "topic": "Quadrilaterals",
    "front": "שטח ריבוע לפי צלע",
    "back": "a²",
    "backShort": "a²",
    "explain": "כל הצלעות שוות וכל הזוויות ישרות.",
    "trap": "לא לשכוח ריבוע, לא פי 4.",
    "helper": "square area"
  },
  {
    "id": "square_area_diagonal",
    "topic": "Quadrilaterals",
    "front": "שטח ריבוע לפי אלכסון",
    "back": "d² / 2",
    "backShort": "d²/2",
    "explain": "כי d = a√2.",
    "trap": "לא לבלבל עם שטח מעוין כללי.",
    "helper": "square by diagonal"
  },
  {
    "id": "square_diagonals",
    "topic": "Quadrilaterals",
    "front": "ריבוע - אלכסונים",
    "back": "שווים, מאונכים, חוצים זה את זה וחוצים זוויות",
    "backShort": "שווים, מאונכים וחוצים זוויות",
    "explain": "הריבוע משלב תכונות של מלבן ושל מעוין.",
    "trap": "זו רשימת תכונות חזקה במיוחד.",
    "helper": "square diagonals"
  },
  {
    "id": "trapezoid_definition",
    "topic": "Quadrilaterals",
    "front": "טרפז",
    "back": "יש בו זוג אחד של צלעות מקבילות",
    "backShort": "זוג אחד של צלעות מקבילות",
    "explain": "הבסיסים הם הצלעות המקבילות.",
    "trap": "לא חייבים ששני הזוגות יהיו מקבילים.",
    "helper": "trapezoid"
  },
  {
    "id": "trapezoid_midsegment",
    "topic": "Quadrilaterals",
    "front": "קטע אמצעים בטרפז",
    "back": "(בסיס עליון + בסיס תחתון) / 2",
    "backShort": "(b₁+b₂)/2",
    "explain": "אורך קטע האמצעים הוא ממוצע הבסיסים.",
    "trap": "זה אורך, לא שטח.",
    "helper": "midsegment"
  },
  {
    "id": "trapezoid_area",
    "topic": "Quadrilaterals",
    "front": "שטח טרפז",
    "back": "(סכום הבסיסים × גובה) / 2",
    "backShort": "(סכום הבסיסים × גובה)/2",
    "explain": "אפשר לחשוב על ממוצע הבסיסים כפול גובה.",
    "trap": "צריך גובה ניצב לבסיסים.",
    "helper": "trapezoid area"
  },
  {
    "id": "isosceles_trapezoid_angles",
    "topic": "Quadrilaterals",
    "front": "טרפז שווה שוקיים - זוויות בסיס",
    "back": "זוויות שעל אותו בסיס שוות",
    "backShort": "זוויות בסיס שוות",
    "explain": "בנוסף, האלכסונים שווים.",
    "trap": "זה נכון לטרפז שווה שוקיים בלבד.",
    "helper": "base angles"
  },
  {
    "id": "isosceles_trapezoid_diagonals",
    "topic": "Quadrilaterals",
    "front": "טרפז שווה שוקיים - אלכסונים",
    "back": "שווים זה לזה",
    "backShort": "האלכסונים שווים",
    "explain": "עוד תכונה שעוזרת לזהות את הצורה.",
    "trap": "בטרפז כללי זה לא נכון.",
    "helper": "equal diagonals"
  },
  {
    "id": "kite_definition",
    "topic": "Quadrilaterals",
    "front": "דלתון",
    "back": "שני זוגות של צלעות סמוכות שוות",
    "backShort": "שני זוגות של צלעות סמוכות שוות",
    "explain": "לא מדובר בצלעות נגדיות אלא סמוכות.",
    "trap": "קל להתבלבל עם מעוין.",
    "helper": "kite"
  },
  {
    "id": "kite_diagonals",
    "topic": "Quadrilaterals",
    "front": "דלתון - אלכסונים",
    "back": "מאונכים, ואחד מהם חוצה את השני",
    "backShort": "מאונכים; אחד חוצה את השני",
    "explain": "בדלתון מתאים גם חציית שתי זוויות נגדיות.",
    "trap": "לא בהכרח שווים.",
    "helper": "kite diagonals"
  },
  {
    "id": "kite_area",
    "topic": "Quadrilaterals",
    "front": "שטח דלתון",
    "back": "d₁ × d₂ / 2",
    "backShort": "d₁×d₂/2",
    "explain": "אותה נוסחה כמו במעוין.",
    "trap": "האלכסונים צריכים להיות האלכסון הארוך והקצר, לא צלעות.",
    "helper": "kite area"
  },
  {
    "id": "polygon_sum",
    "topic": "Polygons",
    "front": "סכום זוויות פנימיות במצולע",
    "back": "(n - 2) × 180°",
    "backShort": "(n-2)×180°",
    "explain": "מחלקים את המצולע למשולשים.",
    "trap": "לא לשכוח להחסיר 2 לפני הכפל.",
    "helper": "interior sum"
  },
  {
    "id": "regular_polygon_angle",
    "topic": "Polygons",
    "front": "זווית פנימית במצולע משוכלל",
    "back": "180°(n - 2) / n",
    "backShort": "180°(n-2)/n",
    "explain": "לכל הזוויות יש אותו גודל.",
    "trap": "זו זווית פנימית, לא מרכזית.",
    "helper": "each interior angle"
  },
  {
    "id": "regular_polygon_central",
    "topic": "Polygons",
    "front": "זווית מרכזית במצולע משוכלל",
    "back": "360° / n",
    "backShort": "360°/n",
    "explain": "המעגל סביב המצולע מתחלק לחלקים שווים.",
    "trap": "לא לבלבל עם הזווית הפנימית.",
    "helper": "central angle"
  },
  {
    "id": "polygon_diagonals",
    "topic": "Polygons",
    "front": "מספר אלכסונים במצולע",
    "back": "n(n - 3) / 2",
    "backShort": "n(n-3)/2",
    "explain": "כל קודקוד מתחבר ל-n-3 קודקודים, ואז מחלקים ב-2.",
    "trap": "אם לא מחלקים ב-2, סופרים כל אלכסון פעמיים.",
    "helper": "diagonals"
  },
  {
    "id": "hexagon_area",
    "topic": "Polygons",
    "front": "שטח משושה משוכלל",
    "back": "6 × a²√3 / 4",
    "backShort": "6×a²√3/4",
    "explain": "המשושה מורכב משישה משולשים שווי צלעות.",
    "trap": "אפשר גם לפשט ל-3a²√3/2.",
    "helper": "regular hexagon"
  },
  {
    "id": "octagon_area",
    "topic": "Polygons",
    "front": "שטח מתומן משוכלל",
    "back": "2a²(1 + √2)",
    "backShort": "2a²(1+√2)",
    "explain": "נוסחה שכדאי לזכור כמו שהיא.",
    "trap": "לא לבלבל עם משושה משוכלל.",
    "helper": "regular octagon"
  },
  {
    "id": "circle_inscribed_central",
    "topic": "Circle Rules",
    "front": "זווית היקפית וזווית מרכזית על אותה קשת",
    "back": "זווית היקפית = חצי הזווית המרכזית",
    "backShort": "היקפית = חצי מרכזית",
    "explain": "לכן הזווית המרכזית כפולה מן ההיקפית.",
    "trap": "חייבים להישען על אותה קשת.",
    "helper": "inscribed vs central"
  },
  {
    "id": "diameter_right_angle",
    "topic": "Circle Rules",
    "front": "זווית היקפית הנשענת על קוטר",
    "back": "90°",
    "backShort": "90°",
    "explain": "קוטר יוצר חצי מעגל, וחצי מ-180° הוא 90°.",
    "trap": "זו אחת השאלות הכי מהירות במבחן.",
    "helper": "diameter theorem"
  },
  {
    "id": "arc_length",
    "topic": "Circle Rules",
    "front": "אורך קשת",
    "back": "α / 360 × 2πr",
    "backShort": "α/360×2πr",
    "explain": "לוקחים את החלק היחסי מן ההיקף.",
    "trap": "לא לבלבל עם שטח גזרה.",
    "helper": "arc length"
  },
  {
    "id": "sector_area",
    "topic": "Circle Rules",
    "front": "שטח גזרה",
    "back": "α / 360 × πr²",
    "backShort": "α/360×πr²",
    "explain": "לוקחים את החלק היחסי משטח המעגל.",
    "trap": "לשטח יש r², לא r.",
    "helper": "sector area"
  },
  {
    "id": "tangent_radius",
    "topic": "Circle Rules",
    "front": "רדיוס לנקודת השקה",
    "back": "מאונך למשיק",
    "backShort": "90° עם המשיק",
    "explain": "זווית בין רדיוס למשיק בנקודת המגע היא ישרה.",
    "trap": "המאונכות היא רק בנקודת ההשקה.",
    "helper": "radius and tangent"
  },
  {
    "id": "equal_tangents",
    "topic": "Circle Rules",
    "front": "שני משיקים מאותה נקודה חיצונית",
    "back": "שווים באורכם",
    "backShort": "שווים",
    "explain": "יחד עם שני רדיוסים מתקבל לעתים דלתון.",
    "trap": "נכון רק אם המשיקים יוצאים מאותה נקודה.",
    "helper": "equal tangents"
  },
  {
    "id": "tangent_chord",
    "topic": "Circle Rules",
    "front": "זווית בין משיק למיתר",
    "back": "שווה לזווית היקפית הנשענת על אותה קשת",
    "backShort": "שווה לזווית היקפית על אותה קשת",
    "explain": "כלל שימושי מאוד בשאלות מעגל.",
    "trap": "מחפשים את הקשת המתאימה בצד השני של המיתר.",
    "helper": "tangent-chord angle"
  },
  {
    "id": "cyclic_quadrilateral",
    "topic": "Circle Rules",
    "front": "מרובע חסום במעגל",
    "back": "זוויות נגדיות משלימות ל-180°",
    "backShort": "זוויות נגדיות סכומן 180°",
    "explain": "תכונה קלאסית למרובע מחזורי.",
    "trap": "זה לא נכון לכל מרובע.",
    "helper": "cyclic quadrilateral"
  },
  {
    "id": "cube_volume",
    "topic": "Solid Geometry",
    "front": "נפח קובייה",
    "back": "a³",
    "backShort": "a³",
    "explain": "כאשר אורך מקצוע הוא a.",
    "trap": "נפח שונה משטח פנים.",
    "helper": "cube volume"
  },
  {
    "id": "cube_surface",
    "topic": "Solid Geometry",
    "front": "שטח פנים של קובייה",
    "back": "6a²",
    "backShort": "6a²",
    "explain": "שישה ריבועים שווים.",
    "trap": "מעטפת צדדית בלבד היא 4a².",
    "helper": "cube surface area"
  },
  {
    "id": "cube_lateral",
    "topic": "Solid Geometry",
    "front": "מעטפת של קובייה",
    "back": "4a²",
    "backShort": "4a²",
    "explain": "ארבע פאות הצד.",
    "trap": "אם מבקשים שטח פנים כולל - משתמשים ב-6a².",
    "helper": "cube lateral area"
  },
  {
    "id": "cube_diagonal",
    "topic": "Solid Geometry",
    "front": "אלכסון גוף של קובייה",
    "back": "a√3",
    "backShort": "a√3",
    "explain": "פנים: a√2, ואז פיתגורס נוסף עם a.",
    "trap": "לא לבלבל עם אלכסון פאה שהוא a√2.",
    "helper": "space diagonal"
  },
  {
    "id": "box_volume",
    "topic": "Solid Geometry",
    "front": "נפח תיבה / תיבה מלבנית",
    "back": "a × b × c",
    "backShort": "a×b×c",
    "explain": "מכפלת שלושת הממדים.",
    "trap": "בשאלות אריזה חשוב לבדוק ממדים, לא רק נפח.",
    "helper": "rectangular prism"
  },
  {
    "id": "cylinder_volume",
    "topic": "Solid Geometry",
    "front": "נפח גליל",
    "back": "πr²h",
    "backShort": "πr²h",
    "explain": "שטח הבסיס כפול הגובה.",
    "trap": "אל תחלק ב-3; זה לא חרוט.",
    "helper": "cylinder volume"
  },
  {
    "id": "cylinder_lateral",
    "topic": "Solid Geometry",
    "front": "מעטפת גליל",
    "back": "2πrh",
    "backShort": "2πrh",
    "explain": "היקף הבסיס כפול הגובה.",
    "trap": "לא לבלבל עם שטח הפנים הכולל.",
    "helper": "lateral area"
  },
  {
    "id": "cylinder_total",
    "topic": "Solid Geometry",
    "front": "שטח פנים של גליל",
    "back": "2πrh + 2πr²",
    "backShort": "2πrh + 2πr²",
    "explain": "מעטפת ועוד שני בסיסים.",
    "trap": "אם מבקשים מעטפת בלבד, מורידים את 2πr².",
    "helper": "total surface area"
  },
  {
    "id": "cylinder_diagonal",
    "topic": "Solid Geometry",
    "front": "אלכסון פנימי של גליל",
    "back": "√(h² + (2r)²)",
    "backShort": "√(h² + (2r)²)",
    "explain": "עובדים עם מלבן פרוס ברוחב קוטר.",
    "trap": "משתמשים בקוטר 2r, לא ברדיוס r.",
    "helper": "cylinder diagonal"
  },
  {
    "id": "pyramid_cone_volume",
    "topic": "Solid Geometry",
    "front": "נפח צורות פירמידליות / חרוט",
    "back": "שטח בסיס × גובה / 3",
    "backShort": "שטח בסיס × גובה / 3",
    "explain": "חרוט ופירמידה הם שליש מן הגוף הלא־פירמידלי המתאים.",
    "trap": "החלוקה ב-3 היא המלכודת הקלאסית.",
    "helper": "cone / pyramid volume"
  },
  {
    "id": "cone_cylinder_ratio",
    "topic": "Solid Geometry",
    "front": "חרוט וגליל עם אותו בסיס ואותו גובה",
    "back": "יחס נפחים 1:3",
    "backShort": "1:3",
    "explain": "החרוט הוא שליש מן הגליל.",
    "trap": "אם שואלים חרוט:גליל - התשובה 1:3, לא 3:1.",
    "helper": "cone : cylinder"
  },
  {
    "id": "pack_by_dimensions",
    "topic": "Solid Geometry",
    "front": "הכנסת קוביות לתיבה",
    "back": "בודקים ממדים, לא רק נפח",
    "backShort": "ממדים, לא רק נפח",
    "explain": "צריך לחשב כמה קוביות נכנסות לאורך, לרוחב ולגובה.",
    "trap": "נפח מתאים לא מבטיח התאמה גאומטרית.",
    "helper": "packing cubes"
  }
];
