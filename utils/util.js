const teamList = {
    '广州恒大淘宝': '恒大',
    '江苏苏宁': '江苏',
    '上海上港': '上港',
    '上海申花': '申花',
    '北京国安': '国安',
    '广州富力': '富力',
    '河北华夏幸福': '华夏',
    '重庆力帆': '重庆',
    '延边富德': '延边',
    '辽宁宏运': '辽宁',
    '天津泰达': '泰达',
    '长春亚泰': '长春',
    '河南建业': '河南',
    '山东鲁能': '山东',
    '杭州绿城': '杭州',
    '石家庄永昌': '石家庄'
}

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatMatchList(arr) {
    var ret = []
    for(let i=0; i<arr.length; i++) {
        arr[i].date       = arr[i].date.replace(/[\u4E00-\u9FA5\uF900-\uFA2D]/g, '/')
        arr[i].score      = arr[i].score.split('').join(':').replace(/:::/g, ':')
        arr[i].host_team  = teamList[arr[i].host_team]
        arr[i].guest_team = teamList[arr[i].guest_team]
        ret.push(arr[i])
    }
    return ret
}

module.exports = {
  formatTime: formatTime,
  formatMatchList: formatMatchList
}
