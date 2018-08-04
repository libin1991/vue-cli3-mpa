/** @module constants/api */

/**
 * 移动端Hybrid接口
 * @readonly
 * @enum {string}
 */
export const MOBILE_API = {
    /**
     * 下载
     */
    DOWNLOAD_URL: "sknowbox://method",
    /**
     * 关闭当前窗口
     * @param {string} refresh 判断是否需要刷新之前页面
     */
    EXIT: "hybird://method/exit",
    /**
     * 端上分享接口
     * @param {string} platform 平台(WX, WXCircle, QQ, QQZone)
     * @param {string} data JSON格式的数据
     * @param {string} jsCallBack 回调函数名,一个全局函数,回调参数("success"完成分享, "fail"分享失败, "cancel"取消分享)
     */
    SHARE_URL: "hybird://method/doShare",
    /**
     * 打开一个Native窗口
     * @param {string} url 要打开的窗口地址
     * @param {string} title 要打开的窗口名称
     */
    OPEN_NEW_WINDOW_URL: "hybird://method/openNewWindow",
    /**
     * 关闭当前Native窗口
     */
    EXIT_WINDOW_URL: "hybird://method/exit",
    OPEN_MAIN_HOMEWORK_TAB: "hybird://method/openMainHomeWorkTab",
    /**
     * 打开用户默认浏览器
     * @param {string} url 浏览器默认打开的地址
     */

    OPEN_BROWSER_URL: "hybird://method/openBrowser",
    OPEN_HOMEWORK_ANDROID: "hybird://method/doHomework",
    OPEN_HOMEWORK_IOS: "hybird://action/dohomework"
};

/**
 * 服务端API接口
 * @readonly
 * @enum {string}
 */
let HOST = "";

switch (process.env.VUE_APP_CURRENTMODE) {
    case "production":
        HOST = "";
        break;
    case "preview":
        HOST = "";
        break;
    case "test":
        HOST = "";
        break;
    case "development":
        HOST = "";
        break;
    default:
        HOST = "";
        break;
}

export const WEB_API = {
    /**
     * 获取微信配置
     */
    WX_CONFIG_URL: "",
    /**
     * 服务端域名配置
     */
    HOST,
    /**
     * 示例接口地址
     */
    EXAMPLE_DATA_URL: "/list"
};
