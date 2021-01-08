const routes = require('../locales/routes').routableLinks

const eventsPathPrefix = ((lang, uid) => {
    const lp = lang.split('-');
    const eventRoute = routes.filter(x => x.canonical == '/events')[0]
    const pathPrefix = eventRoute[`${lp[0]}-${lp[1].toUpperCase()}`]
    return `${pathPrefix}/${ uid }`
});

module.exports = {
    eventLink: eventsPathPrefix
}