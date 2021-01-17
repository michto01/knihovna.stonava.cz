const dayjs = require('dayjs');
const locale = require('dayjs/locale/cs');
const isBetween = require('dayjs/plugin/isBetween')
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore');
const isoWeek = require('dayjs/plugin/isoWeek');
const tz = require('dayjs/plugin/timezone');
const utc = require('dayjs/plugin/utc');
var localeData = require('dayjs/plugin/localeData')
dayjs.extend(localeData)
const weekday = require('dayjs/plugin/weekday');

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isoWeek);
dayjs.extend(tz);
dayjs.extend(utc);
dayjs.extend(weekday);

dayjs.locale('cs');
dayjs.tz.setDefault("Europe/Prague")

const opening = [
  {
    dayOfWeek : 1,
    hours: [
      { s: "9:00", e: "11:30" },
      { s: "12:00", e: "17:00" }
    ]
  },
  {
    dayOfWeek : 4,
    hours: [
      { s: "12:00", e: "18:00" }
    ]
  }
];

// Get the single interval
const getTimeInterval = (date, interval) => {
  const s_hm = interval.s.split(':');
  const e_hm = interval.e.split(':');

  return {
    start: date
            .startOf('day')
            .set('hours', parseInt(s_hm[0]))
            .set('minutes',  parseInt(s_hm[1])),
    end:   date
            .startOf('day')
            .set('hours', parseInt(e_hm[0]))
            .set('minutes',  parseInt(e_hm[1]))
  }
};

// Compare the in date
const whereAreYou = ((date, comparator) => {
  const before = getTimeInterval(date, comparator[0]).start;
  if (date.isSameOrBefore(before)) {
    return before; // We are before opening today
  }

  var mark = false;
  for (var d of comparator) {
    const x = getTimeInterval(date, d);
    if (mark == true) {
      return x.start;
    }
    if (date.isSameOrBefore(x.start)) {
      mark = true
      continue
    }
    if (date.isBetween(x.start, x.end)) {
      return true
    }
    mark = false
  }

  return false
});

const weekRoll = ((date) => {
  const day = date;
  const dOw = day.isoWeekday();
  var openings = null;
  if (dOw == 1) {
    openings = opening[0];
  } else if (dOw == 4) {
    openings = opening[1];
  } else {
    return false; // Just not our day
  }

  return whereAreYou(day, openings.hours);
});

const nextOpeningDay = (isoDayOfWeek) => {
  //TODO: generalise to take advantage of opening-hours JSON
  if (isoDayOfWeek < 0 || isoDayOfWeek > 7) return undefined;

  if (isoDayOfWeek >= 1 && isoDayOfWeek < 4) {
    return 4;
  }

  if (isoDayOfWeek >= 4) {
    return 1;
  }
}

const humanizeOpenHours = (date) => {
  //TODO: i18n and cleanup of this prototype mess
  const ax = weekRoll(date);

  if (typeof ax === "boolean") {
    if (ax == true) {
      return "Aktuálně je knihovna otevřená!";
    } else {
      const current = date.isoWeekday()
      const next = nextOpeningDay(current)
      var nextDate = date.startOf("week")
      if (next < current)
        nextDate = nextDate.add(1, 'week'); // Shedule next week

      nextDate = nextDate.set('day', next);
      return `Aktuálně zavřeno, další půjčovací den je ${dayjs.weekdays()[next]} ${nextDate.tz().format('DD. (DD.MM.YYYY)')}.`
    }

    return;
  }

  else {
    return `Zatím máme zavřeno, ale otevíráme v ${ax.format('HH:mm')}.`
  }
}

module.exports = (req, res) => {
    const botAnswer = {
        user_id: req.body.user_id,
        bot_id: req.body.bot_id,
        module_id: req.body.module_id,
        message: "Otevírací doba knihovny",
        cards: [
            {
                "type": "text",
                "value": `${humanizeOpenHours(dayjs())}`,
            },
            {
                "type": "text",
                "value": `V pondělí: ${opening[0].hours[0].s} - ${opening[0].hours[1].e}`,
            },
            {
                "type": "text",
                "value": `Ve čtvrtek: ${opening[1].hours[0].s} - ${opening[1].hours[0].e}`,
            },
            {
                "type": "text",
                "value": "Test Text Card",
                "buttons": [
                    {
                        "type": "url",
                        "value": "https://google.com",
                        "name": "google"
                    },
                    {
                        "type": "module",
                        "value": "4600",
                        "name": "Change Module"
                    }
                ]
            },
            {
                "type": "image",
                "value": "http://link_on_image.png"
            },
            {
                "type": "gallery",
                "value": "gallery",
                "gallery": [
                    {
                        "image": "http://link_on_image.png",
                        "heading": "Test Gallery Heading",
                        "subtitle": "Test Gallery Subtitle",
                        "url": "http://some_test_url.com",
                        "buttons": [
                            {
                                "type": "url",
                                "value": "https://google.com",
                                "name": "google"
                            },
                            {
                                "type": "module",
                                "value": "4600",
                                "name": "Change Module"
                            }
                        ]
            }
            ]
        }
        ]
    }

    res.json(botAnswer);
}