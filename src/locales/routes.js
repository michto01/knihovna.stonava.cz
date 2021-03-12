const routes = {
    '/': {
        component: './src/pages/Index.vue',
        names: {
            'cs-CZ': 'Domů',
            'pl-CZ': 'Główna strona'
        },
        paths: {
            'cs-CZ': '/',
            'pl-CZ': '/'
        }
    },
    '/about': {
        component: './src/pages/About.vue',
        names: {
            'cs-CZ': 'O knihovně',
            'pl-CZ': 'O bibliotece'
        },
        paths: {
            'cs-CZ': '/o-knihovne',
            'pl-CZ': '/o-bibliotece'
        }
    },
    '/info': {
        component: './src/pages/Info.vue',
        names: {
            'cs-CZ': 'Právní náležitosti',
            'pl-CZ': 'Wymogi prawne'
        },
        paths: {
            'cs-CZ': '/info',
            'pl-CZ': '/info'
        }
    },
    '/contacts': {
        component: './src/pages/Contacts.vue',
        names: {
            'cs-CZ': 'Kontakty',
            'pl-CZ': 'Kontakt'
        },
        paths: {
            'cs-CZ': '/kontakty',
            'pl-CZ': '/kontakt'
        }
    },
    '/events': {
        component: './src/pages/Events.vue',
        names: {
            'cs-CZ': 'Události',
            'pl-CZ': 'Wydarzenia'
        },
        paths: {
            'cs-CZ': '/udalosti',
            'pl-CZ': '/wydarzenia'
        }
    }
};

const pathAliases = {
    // Languages follow the spec: language{2}-COUNTRY{2}
    'cs-CZ': 'cs',
    'pl-CZ': 'pl'
};

const defaultLanguage = 'cs-CZ';

const computedRoutes = (() => {
    const base = Object.entries(routes).map((r, _) => {
        return Object.entries(r[1].paths).map((p, _) => {
            return { [p[0]]: { component: r[1].component, path: p[1]} }
        })
    }).flat().reduce( (r, o) => {
        const e = Object.entries(o)[0];
        if (!r[e[0]]) r[e[0]] = [];
        r[e[0]].push(e[1]);
        return r
    }, {})

    var obj = {};
    for (const k of Object.keys(base)) {
        obj[k] = [];
        if (k == defaultLanguage) {
            obj[k].push(...base[k])
        }
        obj[k].push(...base[k].map(x => { return {
            component: x.component,
            path: '/' + k.split('-')[0] + x.path
        }}))
    }

    return obj
})();

const routableLinks = (() => {
    return Object.entries(routes).map((r, _) => {
        var arr = [];
        for (const k of Object.keys(r[1].paths)) {
            arr.push({
                canonical: r[0],
                default: r[1].paths[defaultLanguage],
                ...Object.assign({}, ...Object.keys(r[1].paths).map(p => {
                    return {[p]: '/' + p.split('-')[0] + r[1].paths[p]}
                }))
            });
        }
        // Remove duplicates
        return [...new Set(arr.map(s => JSON.stringify(s)))].map(s => JSON.parse(s));
    }).flat();
})();

const menuLinks = (() => {
    return Object.entries(routes).map((r, _) => {
        return {
            canonical: r[0],
            ...r[1].names
        }
    })
})();

module.exports = {
    routes: computedRoutes,
    namedRoutes: menuLinks,
    routableLinks: routableLinks,
    locales: Object.keys(pathAliases),
    defaultLocale: defaultLanguage,
    fallbackLocale: defaultLanguage,
    pathAliases: pathAliases
}