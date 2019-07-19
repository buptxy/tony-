var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      id: 1,
      name: 'qc_104514_201838_1',
      value: '图一'
    },
    {
      id: 2,
      name: 'qc_104514_201842_2',
      value: '图二'
    },
    {
      id: 3,
      name: 'qc_104514_201846_3',
      value: '图三'
    },
    {
      id: 4,
      name: 'qc_104514_201903_7',
      value: '图四'
    },
    {
      id: 5,
      name: 'qc_104514_142857_8',
      value: '图五'
    },

    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value),
      app.aa = e.detail.value
  },

})