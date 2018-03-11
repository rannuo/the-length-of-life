// pages/addItem/addItem.js
const TypeArray = require('../../models/ItemTypeModel.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    type: 0,
    score: 1,
    remark: '',
    types: TypeArray
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '添加事项'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  formSubmit(e) {
    console.log('submit: ', e)
    const newItem = e.detail.value;
    if (newItem.title.trim() === '') {
      return wx.showToast({
        title: '标题不能为空',
        icon: 'none'
      });
    }
    newItem.id = Date.now();
    newItem.type = TypeArray[newItem.type];
    app.addItem(newItem);
    wx.navigateBack();
  },
  formReset() {

  },
  onFormFieldChange(e) {
    const { name } = e.target.dataset;
    const { value } = e.detail;
    this.setData({
      [name]: value,
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})