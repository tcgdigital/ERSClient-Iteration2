import { ITimeZone } from '../models/base.model';

export const GlobalTimeZone =
    {
        TimeZones:[
            { decimaloffset: "-12.00", abbr: "ACDT", zonename: "(UTC-12:00) International Date Line West", utcoffset: "UTC-12:00" },
            { decimaloffset: "-11.00", abbr: "ACST", zonename: "(UTC-11:00) Coordinated Universal Time-11", utcoffset: "UTC-11:00" },
            { decimaloffset: "-10.00", abbr: "ACT", zonename: "(UTC-10:00) Hawaii", utcoffset: "UTC-10:00" },
            { decimaloffset: "-9.00", abbr: "ADT", zonename: "(UTC-09:00) Alaska", utcoffset: "UTC-09:00" },
            { decimaloffset: "-8.00", abbr: "AEDT", zonename: "(UTC-08:00) Baja California", utcoffset: "UTC-08:00" },
            { decimaloffset: "-8.00", abbr: "AEST", zonename: "(UTC-08:00) Pacific Time (US & Canada)", utcoffset: "UTC-08:00" },
            { decimaloffset: "-7.00", abbr: "AFT", zonename: "(UTC-07:00) Arizona", utcoffset: "UTC-07:00" },
            { decimaloffset: "-7.00", abbr: "AKDT", zonename: "(UTC-07:00) Chihuahua, La Paz, Mazatlan", utcoffset: "UTC-07:00" },
            { decimaloffset: "-7.00", abbr: "AKST", zonename: "(UTC-07:00) Mountain Time (US & Canada)", utcoffset: "UTC-07:00)" },
            { decimaloffset: "-06.00", abbr: "AMST", zonename: "(UTC-06:00) Central America", utcoffset: "UTC-06:00" },
            { decimaloffset: "-06.00", abbr: "AMT", zonename: "(UTC-06:00) Central Time (US & Canada)", utcoffset: "UTC-06:00" },
            { decimaloffset: "-06.00", abbr: "AMT", zonename: "(UTC-06:00) Guadalajara, Mexico City, Monterrey", utcoffset: "UTC-06:00" },
            { decimaloffset: "-06.00", abbr: "ART", zonename: "(UTC-06:00) Saskatchewan", utcoffset: "UTC-06:00" },
            { decimaloffset: "-05.00", abbr: "AST", zonename: "(UTC-05:00) Bogota, Lima, Quito", utcoffset: "UTC-05:00" },
            { decimaloffset: "-05.00", abbr: "AST", zonename: "(UTC-05:00) Eastern Time (US & Canada)", utcoffset: "UTC-05:00" },
            { decimaloffset: "-05.00", abbr: "AWST", zonename: "(UTC-05:00) Indiana (East)", utcoffset: "UTC-05:00" },
            { decimaloffset: "-04.50", abbr: "AZOST", zonename: "(UTC-04:30) Caracas", utcoffset: "UTC-04:30" },
            { decimaloffset: "-04.00", abbr: "AZOT", zonename: "(UTC-04:00) Asuncion", utcoffset: "UTC-04:00" },
            { decimaloffset: "-04.00", abbr: "AZT", zonename: "(UTC-04:00) Atlantic Time (Canada)", utcoffset: "UTC-04:00" },
            { decimaloffset: "-04.00", abbr: "BDT", zonename: "(UTC-04:00) Cuiaba", utcoffset: "UTC-04:00" },
            { decimaloffset: "-04.00", abbr: "BIOT", zonename: "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan", utcoffset: "UTC-04:00" },
            { decimaloffset: "-04.00", abbr: "BIT", zonename: "(UTC-04:00) Santiago", utcoffset: "UTC-04:00" },
            { decimaloffset: "-03.50", abbr: "BOT", zonename: "(UTC-03:30) Newfoundland", utcoffset: "UTC-03:30" },
            { decimaloffset: "-03.00", abbr: "BRST", zonename: "(UTC-03:00) Brasilia", utcoffset: "UTC-03:00" },
            { decimaloffset: "-03.00", abbr: "BRT", zonename: "(UTC-03:00) Buenos Aires", utcoffset: "UTC-03:00" },
            { decimaloffset: "-03.00", abbr: "BST", zonename: "(UTC-03:00) Cayenne, Fortaleza", utcoffset: "UTC-03:00" },
            { decimaloffset: "-03.00", abbr: "BST", zonename: "(UTC-03:00) Greenland", utcoffset: "UTC-03:00" },
            { decimaloffset: "-03.00", abbr: "BST", zonename: "(UTC-03:00) Montevideo", utcoffset: "UTC-03:00" },
            { decimaloffset: "-03.00", abbr: "BTT", zonename: "(UTC-03:00) Salvador", utcoffset: "UTC-03:00" },
            { decimaloffset: "-02.00", abbr: "CAT", zonename: "(UTC-02:00) Coordinated Universal Time-02", utcoffset: "UTC-03:00" },
            { decimaloffset: "-02.00", abbr: "CCT", zonename: "(UTC-02:00) Mid-Atlantic - Old", utcoffset: "UTC-02:00" },
            { decimaloffset: "-01.00", abbr: "CDT", zonename: "(UTC-01:00) Azores", utcoffset: "UTC-01:00" },
            { decimaloffset: "-01.00", abbr: "CDT", zonename: "(UTC-01:00) Cape Verde Is.", utcoffset: "UTC-01:00" },
            { decimaloffset: "00", abbr: "CEST", zonename: "(UTC) Casablanca", utcoffset: "UTC±00" },
            { decimaloffset: "00", abbr: "CET", zonename: "(UTC) Coordinated Universal Time", utcoffset: "UTC±00" },
            { decimaloffset: "00", abbr: "CHADT", zonename: "(UTC) Dublin, Edinburgh, Lisbon, London", utcoffset: "UTC±00" },
            { decimaloffset: "00", abbr: "CHAST", zonename: "(UTC) Monrovia, Reykjavik", utcoffset: "UTC±00" },
            { decimaloffset: "+01.00", abbr: "CHOT", zonename: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna", utcoffset: "UTC+01:00" },
            { decimaloffset: "+01.00", abbr: "CHOST", zonename: "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague", utcoffset: "UTC+01:00" },
            { decimaloffset: "+01.00", abbr: "CHST", zonename: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris", utcoffset: "UTC+01:00" },
            { decimaloffset: "+01.00", abbr: "CHUT", zonename: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb", utcoffset: "UTC+01:00" },
            { decimaloffset: "+01.00", abbr: "CIST", zonename: "(UTC+01:00) West Central Africa", utcoffset: "UTC+01:00" },
            { decimaloffset: "+01.00", abbr: "CIT", zonename: "(UTC+01:00) Windhoek", utcoffset: "UTC+01:00" },
            { decimaloffset: "+02.00", abbr: "CKT", zonename: "(UTC+02:00) Athens, Bucharest", utcoffset: "UTC+02.00" },
            { decimaloffset: "+02.00", abbr: "CLST", zonename: "(UTC+02:00) Beirut", utcoffset: "UTC+02:00" },
            { decimaloffset: "+02.00", abbr: "CLT", zonename: "(UTC+02:00) Cairo", utcoffset: "UTC+02:00" },
            { decimaloffset: "+02.00", abbr: "COST", zonename: "(UTC+02:00) Damascus", utcoffset: "UTC+02:00" },
            { decimaloffset: "+02.00", abbr: "COT", zonename: "(UTC+02:00) E. Europe", utcoffset: "UTC+02:00" },
            { decimaloffset: "+02.00", abbr: "CST", zonename: "(UTC+02:00) Harare, Pretoria", utcoffset: "UTC+02:00" },
            { decimaloffset: "+02.00", abbr: "CST", zonename: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius", utcoffset: "UTC+02:00" },
            { decimaloffset: "+02.00", abbr: "ACST", zonename: "(UTC+02:00) Istanbul", utcoffset: "UTC+02:00" },
            { decimaloffset: "+02.00", abbr: "ACDT", zonename: "(UTC+02:00) Jerusalem", utcoffset: "UTC+02:00" },
            { decimaloffset: "+02.00", abbr: "CST", zonename: "(UTC+02:00) Tripoli", utcoffset: "UTC+02:00" },
            { decimaloffset: "+03.00", abbr: "CT", zonename: "(UTC+03:00) Amman", utcoffset: "UTC+03:00" },
            { decimaloffset: "+03.00", abbr: "CVT", zonename: "(UTC+03:00) Baghdad", utcoffset: "UTC+03:00" },
            { decimaloffset: "+03.00", abbr: "CWST", zonename: "(UTC+03:00) Kaliningrad, Minsk", utcoffset: "UTC+03:00" },
            { decimaloffset: "+03.00", abbr: "CXT", zonename: "(UTC+03:00) Kuwait, Riyadh", utcoffset: "UTC+03:00" },
            { decimaloffset: "+03.00", abbr: "DAVT", zonename: "(UTC+03:00) Nairobi", utcoffset: "UTC+03:00" },
            { decimaloffset: "+03.50", abbr: "DDUT", zonename: "(UTC+03:30) Tehran", utcoffset: "UTC+03:30" },
            { decimaloffset: "+04.00", abbr: "DFT", zonename: "(UTC+04:00) Abu Dhabi, Muscat", utcoffset: "UTC+04:00" },
            { decimaloffset: "+04.00", abbr: "EASST", zonename: "(UTC+04:00) Baku", utcoffset: "UTC+04:00" },
            { decimaloffset: "+04.00", abbr: "EAST", zonename: "(UTC+04:00) Moscow, St. Petersburg, Volgograd", utcoffset: "UTC+04:00" },
            { decimaloffset: "+04.00", abbr: "EAT", zonename: "(UTC+04:00) Port Louis", utcoffset: "UTC+04:00" },
            { decimaloffset: "+04.00", abbr: "ECT", zonename: "(UTC+04:00) Tbilisi", utcoffset: "UTC+04:00" },
            { decimaloffset: "+04.00", abbr: "ECT", zonename: "(UTC+04:00) Yerevan", utcoffset: "UTC+04:00" },
            { decimaloffset: "+04.50", abbr: "EDT", zonename: "(UTC+04:30) Kabul", utcoffset: "UTC+04:30" },
            { decimaloffset: "+05.00", abbr: "AEDT", zonename: "(UTC+05:00) Ashgabat, Tashkent", utcoffset: "UTC+05:00" },
            { decimaloffset: "+05.00", abbr: "EEST", zonename: "(UTC+05:00) Islamabad, Karachi", utcoffset: "UTC+05:00" },
            { decimaloffset: "+05.50", abbr: "EET", zonename: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi", utcoffset: "UTC+05:30" },
            { decimaloffset: "+05.50", abbr: "EGST", zonename: "(UTC+05:30) Sri Jayawardenepura", utcoffset: "UTC+05:30" },
            { decimaloffset: "+05.75", abbr: "EGT", zonename: "(UTC+05:45) Kathmandu", utcoffset: "UTC+05:45" },
            { decimaloffset: "+06.00", abbr: "EIT", zonename: "(UTC+06:00) Astana", utcoffset: "UTC+06:00" },
            { decimaloffset: "+06.00", abbr: "EST", zonename: "(UTC+06:00) Dhaka", utcoffset: "UTC+06:00" },
            { decimaloffset: "+06.50", abbr: "AEST", zonename: "(UTC+06:30) Yangon (Rangoon)", utcoffset: "UTC+06:30" },
            { decimaloffset: "+07.00", abbr: "FET", zonename: "(UTC+07:00) Bangkok, Hanoi, Jakarta", utcoffset: "UTC+07:00" },
            { decimaloffset: "+07.00", abbr: "FJT", zonename: "(UTC+07:00) Novosibirsk", utcoffset: "UTC+07:00" },
            { decimaloffset: "+08.00", abbr: "FKST", zonename: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi", utcoffset: "UTC+08:00" },
            { decimaloffset: "+08:00", abbr: "FKT", zonename: "(UTC+08:00) Krasnoyarsk", utcoffset: "UTC+08:00" },
            { decimaloffset: "+08:00", abbr: "FNT", zonename: "(UTC+08:00) Kuala Lumpur, Singapore", utcoffset: "UTC+08:00" },
            { decimaloffset: "+08:00", abbr: "GALT", zonename: "(UTC+08:00) Perth", utcoffset: "UTC+08:00" },
            { decimaloffset: "+08.00", abbr: "GAMT", zonename: "(UTC+08:00) Taipei", utcoffset: "UTC+08:00" },
            { decimaloffset: "+08.00", abbr: "GET", zonename: "(UTC+08:00) Ulaanbaatar", utcoffset: "UTC+09:00" },
            { decimaloffset: "+09.00", abbr: "GFT", zonename: "(UTC+09:00) Irkutsk", utcoffset: "UTC+09:00" },
            { decimaloffset: "+09.00", abbr: "GILT", zonename: "(UTC+09:00) Osaka, Sapporo, Tokyo", utcoffset: "UTC+09:00" },
            { decimaloffset: "+09.00", abbr: "GIT", zonename: "(UTC+09:00) Seoul", utcoffset: "UTC+09:00" },
            { decimaloffset: "+09.50", abbr: "GMT", zonename: "(UTC+09:30) Adelaide", utcoffset: "UTC+09:30" },
            { decimaloffset: "+09.50", abbr: "GST", zonename: "(UTC+09:30) Darwin", utcoffset: "UTC-02" },
            { decimaloffset: "+10.00", abbr: "GST", zonename: "(UTC+10:00) Brisbane", utcoffset: "UTC+10:00" },
            { decimaloffset: "+10.00", abbr: "GYT", zonename: "(UTC+10:00) Canberra, Melbourne, Sydney", utcoffset: "UTC+10:00" },
            { decimaloffset: "+10.00", abbr: "HADT", zonename: "(UTC+10:00) Guam, Port Moresby", utcoffset: "UTC+10:00" },
            { decimaloffset: "+10.00", abbr: "HAEC", zonename: "(UTC+10:00) Hobart", utcoffset: "UTC+10:00" },
            { decimaloffset: "+10.00", abbr: "HAST", zonename: "(UTC+10:00) Yakutsk", utcoffset: "UTC+10:00" },
            { decimaloffset: "+11.00", abbr: "HKT", zonename: "(UTC+11:00) Solomon Is., New Caledonia", utcoffset: "UTC+11:00" },
            { decimaloffset: "+11.00", abbr: "HMT", zonename: "(UTC+11:00) Vladivostok", utcoffset: "UTC+11:00" },
            { decimaloffset: "+12.00", abbr: "HOVST", zonename: "(UTC+12:00) Auckland, Wellington", utcoffset: "UTC+12:00" },
            { decimaloffset: "+12.00", abbr: "HOVT", zonename: "(UTC+12:00) Coordinated Universal Time+12", utcoffset: "UTC+12:00" },
            { decimaloffset: "+12.00", abbr: "ICT", zonename: "(UTC+12:00) Fiji", utcoffset: "UTC+12:00" },
            { decimaloffset: "+12.00", abbr: "IDT", zonename: "(UTC+12:00) Magadan", utcoffset: "UTC+12:00" },
            { decimaloffset: "+12.00", abbr: "IOT", zonename: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old", utcoffset: "UTC+12:00" },
            { decimaloffset: "+12.00", abbr: "IRDT", zonename: "(UTC+13:00) Nuku'alofa", utcoffset: "UTC+13:30" },
            { decimaloffset: "+13.00", abbr: "IRKT", zonename: "(UTC+13:00) Samoa", utcoffset: "UTC+13:00" }

        ] as ITimeZone[]
};
     
