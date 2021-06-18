// Continents
const continents = ["آفریقا", "آسیا", "اروپا", "اقیانوسیه", "آمریکا"];


// Countries
const countries = [
  "افغانستان", "آلبانی", "الجزایر", "آندورا", "آنگولا", "آنتیگوا و باربودا", "آرژانتین", "ارمنستان", "استرالیا", "اتریش", "آذربایجان",
  "باهاما", "بحرین", "بنگلادش", "باربادوس", "بلاروس", "بلژیک", "بلیز", "بنین", "بوتان", "بولیوی", "بوسنی و هرزگوین",
  "بوتسوانا", "برزیل", "برونئی", "بلغارستان", "بورکینافاسو", "بوروندی", "ساحل عاج", "کابو ورد", "کامبوج", "کامرون",
  "کانادا", "جمهوری آفریقای مرکزی", "چاد", "شیلی", "چین", "کلمبیا", "کومور", "کنگو", "کاستاریکا", "کرواسی", "کوبا",
  "قبرس", "جمهوری چک", "جمهوری دموکراتیک کنگو", "دانمارک", "جیبوتی", "دومینیکا", "جمهوری دومینیکن", "اکوادور",
  "مصر", "السالوادور", "گینه استوایی", "اریتره", "استونی", "اسواتینی (سوازیلند سابق)", "اتیوپی", "فیجی", "فنلاند",
  "فرانسه", "گابن", "گامبیا", "گرجستان", "آلمان", "غنا", "یونان", "گرنادا", "گواتمالا", "گینه", "گینه بیسائو", "گویان",
  "هائیتی", "سریر مقدس (واتیکان)", "هندوراس", "مجارستان", "ایسلند", "هند", "اندونزی", "ایران", "عراق", "ایرلند",
  "اسرائیل", "ایتالیا", "جامائیکا", "ژاپن", "اردن", "قزاقستان", "کنیا", "کیریباتی", "کوزوو", "کویت", "قرقیزستان", "لائوس",
  "لتونی", "لبنان", "لسوتو", "لیبریا", "لیبی", "لیختنشتاین", "لیتوانی", "لوگزامبورگ", "ماداگاسکار", "مالاوی", "مالزی",
  "مالدیو", "مالی", "مالت", "جزایر مارشال", "موریتانی", "موریس", "مکزیک", "میکرونزی", "مولداوی", "موناکو", "مغولستان",
  "مونته نگرو", "مراکش", "کوزامبیک", "میانمار", "نامیبیا", "نائورو", "نپال", "هلند", "نیوزیلند", "نیکاراگوئه", "نیجر",
  "نیجریه", "کره شمالی", "مقدونیه شمالی", "نروژ", "عمان", "پاکستان", "پالائو", "فلسطین", "پاناما", "پاپوا گینه نو",
  "پاراگوئه", "پرو", "فیلیپین", "لهستان", "پرتغال", "قطر", "رومانی", "روسیه", "رواندا", "سنت کیتس و نوویس",
  "سنت لوسیا", "سنت وینسنت و گرنادینها", "ساموآ", "سان مارینو", "سائو تومه و پرینسیپ", "عربستان سعودی", "سنگال",
  "صربستان", "سیشل", "سیرا لئون", "سنگاپور", "اسلواکی", "اسلوونی", "جزایر سلیمان", "سومالی", "آفریقای جنوبی",
  "کره جنوبی", "سودان جنوبی", "اسپانیا", "سری لانکا", "سودان", "سورینام", "سوئد", "سوئیس", "سوریه", "تایوان",
  "تاجیکستان", "تانزانیا", "تایلند", "تیمور-لست", "توگو", "تونگا", "ترینیداد و توباگو", "تونس", "ترکیه", "ترکمنستان",
  "تووالو", "اوگاندا", "اوکراین", "امارات متحده عربی", "بریتانیا", "ایالات متحده امریکا", "اوروگوئه", "ازبکستان", "واناتو",
  "ونزوئلا", "ویتنام", "یمن", "زامبیا", "زیمبابوه"
];


// Others
const l = 1;
const resMigratio = "میگراتیو";
const resOptions = ["هر چه بیشتر" ,"هرچه نزدیک تر به" ,"هر چه کمتر"];
const resImportance = "اهمیت: ";
const resAboutMigratio = "درباره میگراتیو";
const resCountries = "کشورها";
const resCriteria = "معیارها";
const resPanelDesc = "این ابزار برای کسانی طراحی شده است که قصد مهاجرت به یک کشور خارجی را دارند و می خواهند بدانند کدام کشور بهترین انتخاب برای آنهاست.\n\nشما در ابتدا باید معیارهای خود را برای یک کشور ایده آل مشخص نمایید و سپس این ابزار از رتبه بندی ها و آمار های کشور ها استفاده کرده و طبق معیارهای شما برای کشورهای کاندید امتیاز های نسبی تعیین می نماید. در لیست نتایج، همیشه یک کشور با امتیاز 100% وجود دارد که بهترین گزینه در آن لیست است، و همچنین همیشه یک کشور با امتیاز 0% در لیست وجود دارد که بدترین کشور در لیست است، و بقیه کشور ها با امتیازات نسبی در بین آن دو کشور چیده می شوند.\n\nاین ابزار فقط به شما نشان می دهد که کدام کشور بهتر از بقیه کشور های موجود در لیست است، حتی اگر خود آن کشور شرایط وحشتناکی داشته باشد! بنابراین همه چیز در اینجا نسبی است.";
const resLanguage = "زبان";
const resSelectAllCons = "روشن کردن کل کشورها";
const resDeselectAllCons = "خاموش کردن همه کشورها";
const resSelectAllCris = "روشن کردن همه معیارها";
const resDeselectAllCris = "خاموش کردن همه معیارها";
const resResetAllCris = "ریست کردن همه معیارها";
const resResetAll = "ریست کردن همه";
const resSure = "آیا مطمئن هستید؟";