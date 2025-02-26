/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxafd4fc94b531dcd3',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c63c5f749a2c3f169b4e060c7426f08c',

  PROVINCE: '湖南',
  CITY: '长沙',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'o7WRw51Ka4zYq1UQo9zZo5xXKoCM',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'Fd13S7KvBixF7HLHWFCnA0qhthT5R0vFFe7PWx7FB_w',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '09-15',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2004', date: '09-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2004', date: '09-15',
        },
        {
          type: '节日', name: '在一起的纪念日', year: '2022', date: '12-05',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-12-05' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Fd13S7KvBixF7HLHWFCnA0qhthT5R0vFFe7PWx7FB_w',

  CALLBACK_USERS: [
    {
      name: 'o7WRw5__-ZRndsk3ypLdFycxkoqI',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

