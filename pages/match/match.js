const api = require('../../utils/api.js');
const util = require('../../utils/util.js');

Page({
    data: {
      list: [],
      poiType: 'match'
    },
    onLoad: function() {
      const self = this
      wx.showToast({
          title: '正在加载',
          icon: 'loading',
      })
      api.ajax('matchList', {year: 2016}).then( res => {
          self.setData({
            list: util.formatMatchList(res.data.matchlist.slice(1))
          })
          wx.hideToast()
      })
    },
    changePOIType: function(e) {
        const self = this
        const poiType = e.currentTarget.dataset.type
        self.setData({
            poiType,
        })
    }
})
