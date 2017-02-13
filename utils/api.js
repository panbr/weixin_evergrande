const API_URL = 'https://evergrande.bid'

module.exports = {
  ajax: function(url, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${API_URL}/${url}`,
        data: Object.assign({}, params),
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        success: resolve,
        fail: reject
      })
    })
  }
}
