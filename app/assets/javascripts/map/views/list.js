/* exported ListView */

/* global m, App, Search, List, ListFallback, Navigation, Util */

function ListView() {
  let events = []

  return {
    oncreate: function() {
      App.atlas = new AtlasAPI()
      App.atlas.getEvents({
        online: m.route.param('type') == 'online',
      }, response => {
        events = response
        m.redraw()
      })
    },
    view: function() {
      let type = m.route.param('type')
      let mobile = Util.isDevice('mobile')
    
      return [
        m(Search),
        m(Navigation, {
          items: mobile ?
            [[Util.translate('navigation.mobile.back'), '/map']] :
            ['offline', 'online'].map((mode) => [Util.translate(`navigation.desktop.${mode}`), `/list/${mode}`, type == mode])
        }),
        events.length > 0 ?
          m(List, { events: events }) :
          m(ListFallback),
      ]
    }
  }
}