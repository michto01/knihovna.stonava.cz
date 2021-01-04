const eventsPathPrefix = ((lang, uid) => {
    const prefixLang = `${lang.split('-')[0]}`;
    const pathFragments = {
    'cs-cz': 'udalosti',
    'pl-cz': 'wydarzenia'
    }
    return `/${prefixLang}/${pathFragments[lang]}/${ uid }`
});

module.exports = {
    eventLink: eventsPathPrefix
}