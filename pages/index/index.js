//index.js
const api = require('../../utils/api.js');

Page({
    data: {
	    match: null,
	    meta: null,
	    newsList: []
    },
    onLoad: function() {
	    const self = this
	    wx.showToast({
	        title: '正在加载',
	        icon: 'loading',
	    })
	    api.ajax('advance').then( res => {
	        console.log(res.data)
	        self.setData({
		        match: res.data.match,
		    	meta: res.data.meta
	        })
	        wx.hideToast()
	    })
	    api.ajax('newsList').then( res => {
	    	console.log(res.data)
	        self.setData({
		        newsList: res.data.newsList
	        })
	    })
    }
})
