export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxf5bc8bf65234aef1",
    // 公众号APP_SECRET
    APP_SECRET: "48f48f4c052b970e4c5fda254bb412f9",
    // 模板消息id
    TEMPLATE_ID: "ohUeiR6ducEcZ8BHgDyDg8PSlzFMt1T4PK9poPCwRBk",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["onvNB6R0SGmsfXxIBf5sdZDQrSyQ,onvNB6Yq2WywjEggRPMVwLgnM8rA"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "湖南",
    // 所在城市
    CITY: "长沙",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "欧小宝", "year": "2002", "date": "08-31"},
      {"name": "欧大宝", "year": "1998", "date": "02-11"},
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2020-06-20",
    // 结婚纪念日
    MARRY_DATE: "2020-06-20",


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
