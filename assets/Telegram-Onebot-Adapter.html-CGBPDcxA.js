import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as i,o as a}from"./app-BG83qwmR.js";const l={};function n(r,t){return a(),s("div",null,t[0]||(t[0]=[i(`<h1 id="telegram-onebot-adapter" tabindex="-1"><a class="header-anchor" href="#telegram-onebot-adapter"><span>Telegram-Onebot-Adapter</span></a></h1><p><a href="https://github.com/Travellerrr/Telegram-Onebot-Adapter" target="_blank" rel="noopener noreferrer"><img src="https://socialify.git.ci/Travellerrr/Telegram-Onebot-Adapter/image?description=0&amp;font=Raleway&amp;forks=1&amp;issues=1&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Circuit Board&amp;pulls=1&amp;stargazers=1&amp;theme=Auto" alt="" loading="lazy"></a><img src="https://img.shields.io/badge/OneBot-11-black?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAMAAADxPgR5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAxQTFRF////29vbr6+vAAAAk1hCcwAAAAR0Uk5T////AEAqqfQAAAKcSURBVHja7NrbctswDATQXfD//zlpO7FlmwAWIOnOtNaTM5JwDMa8E+PNFz7g3waJ24fviyDPgfhz8fHP39cBcBL9KoJbQUxjA2iYqHL3FAnvzhL4GtVNUcoSZe6eSHizBcK5LL7dBr2AUZlev1ARRHCljzRALIEog6H3U6bCIyqIZdAT0eBuJYaGiJaHSjmkYIZd+qSGWAQnIaz2OArVnX6vrItQvbhZJtVGB5qX9wKqCMkb9W7aexfCO/rwQRBzsDIsYx4AOz0nhAtWu7bqkEQBO0Pr+Ftjt5fFCUEbm0Sbgdu8WSgJ5NgH2iu46R/o1UcBXJsFusWF/QUaz3RwJMEgngfaGGdSxJkE/Yg4lOBryBiMwvAhZrVMUUvwqU7F05b5WLaUIN4M4hRocQQRnEedgsn7TZB3UCpRrIJwQfqvGwsg18EnI2uSVNC8t+0QmMXogvbPg/xk+Mnw/6kW/rraUlvqgmFreAA09xW5t0AFlHrQZ3CsgvZm0FbHNKyBmheBKIF2cCA8A600aHPmFtRB1XvMsJAiza7LpPog0UJwccKdzw8rdf8MyN2ePYF896LC5hTzdZqxb6VNXInaupARLDNBWgI8spq4T0Qb5H4vWfPmHo8OyB1ito+AysNNz0oglj1U955sjUN9d41LnrX2D/u7eRwxyOaOpfyevCWbTgDEoilsOnu7zsKhjRCsnD/QzhdkYLBLXjiK4f3UWmcx2M7PO21CKVTH84638NTplt6JIQH0ZwCNuiWAfvuLhdrcOYPVO9eW3A67l7hZtgaY9GZo9AFc6cryjoeFBIWeU+npnk/nLE0OxCHL1eQsc1IciehjpJv5mqCsjeopaH6r15/MrxNnVhu7tmcslay2gO2Z1QfcfX0JMACG41/u0RrI9QAAAABJRU5ErkJggg==" alt="" loading="lazy"></p><p>基于 <a href="https://github.com/botuniverse/onebot/blob/main/README.md" target="_blank" rel="noopener noreferrer">OneBot</a> 的 Telegram机器人Onebot v11 Java实现端</p><h2 id="底层" tabindex="-1"><a class="header-anchor" href="#底层"><span>底层</span></a></h2><ul><li><a href="https://github.com/pengrad/java-telegram-bot-api" target="_blank" rel="noopener noreferrer">Java Telegram Bot API</a>: Telegram Bot API的Java实现</li></ul><h2 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性"><span>兼容性</span></a></h2><p>完全兼容Onebot-v11协议,可与Onebot-v11协议的框架相连接,实现大部分功能</p><p>使用SpringBoot框架,可直接打包为jar文件在<code>Jdk17</code>环境下运行</p><p>提供Onebot-v11正向Websocket方式连接该项目。</p><p>Telegram适配器支持以下连接方式:</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 纯http轮询 getmsg获取信息</label></li></ul><p>支持连接 <a href="https://github.com/MrXiaoM/Overflow" target="_blank" rel="noopener noreferrer">Mirai-Overflow</a></p><p>其他项目暂未测试</p><p>可以与支持onebotV11适配器的项目相连接使用</p><h2 id="配置指南" tabindex="-1"><a class="header-anchor" href="#配置指南"><span>配置指南</span></a></h2><p>该项目目前仅支持<a href="https://github.com/botuniverse/onebot-11/blob/master/message/array.md" target="_blank" rel="noopener noreferrer">数组格式</a>消息转发/接收,请确保你的框架支持该格式</p><p>后续会逐渐适配其他格式,若有问题请移步issue提出</p><p>支持proxy代理(HTTP(未测试)/SOCKS 账密),若有需要请在config.yml中配置</p><p>下方的需配置 均为config.yml的配置项,配置项右侧有注释解释和格式例子</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  commandMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">开始</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    help</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">帮助</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Telegram发送内容</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">转发至Onebot内容</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  prefix</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">指令前缀 默认为&quot;/&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">onebot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  ip</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Onebot ws连接路径</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Onebot ws连接端口</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  useArray</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">是否启用Array消息 true/false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  database</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    dataType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">数据库类型</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">H2/SQLITE/MYSQL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    mysqlPassword</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">数据库密码</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">若使用H2/SQLITE可不填</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    mysqlUrl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">数据库连接url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">若使用H2/SQLITE可不填</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    mysqlUser</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">数据库用户名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">若使用H2/SQLITE可不填</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  jackson</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    dateformat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">yyyy-MM-dd HH:mm:ss</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    timezone</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">telegram</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  bot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    proxy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">代理IP地址，不建议纯域名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">代理端口</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      secret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">代理密码</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">HTTP/SOCKS/DIRECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">代理账号</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">你的bot token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">你的bot 用户名，随意设置</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> HTTP API</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 反向 HTTP POST</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 正向 WebSocket</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 反向 WebSocket</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 连接多个ws地址</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 代理支持</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> Telegram聊天信息区分用户和群组</label></li></ul><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>下列表格中的✅表示已实现,❌表示未实现,✅❓表示已实现但未测试</p></div><details><summary>已实现 API</summary><h4 id="符合-onebot-标准的-api" tabindex="-1"><a class="header-anchor" href="#符合-onebot-标准的-api"><span>符合 OneBot 标准的 API</span></a></h4><table><thead><tr><th>API</th><th style="text-align:center;">功能</th><th style="text-align:center;">实现情况</th></tr></thead><tbody><tr><td>/send_private_msg</td><td style="text-align:center;">[发送私聊消息]</td><td style="text-align:center;">✅</td></tr><tr><td>/send_group_msg</td><td style="text-align:center;">[发送群消息]</td><td style="text-align:center;">✅</td></tr><tr><td>/send_msg</td><td style="text-align:center;">[发送消息]</td><td style="text-align:center;">❌</td></tr><tr><td>/delete_msg</td><td style="text-align:center;">[撤回信息]</td><td style="text-align:center;">❌</td></tr><tr><td>/set_group_kick</td><td style="text-align:center;">[群组踢人]</td><td style="text-align:center;">✅❓</td></tr><tr><td>/set_group_ban</td><td style="text-align:center;">[群组单人禁言]</td><td style="text-align:center;">❌</td></tr><tr><td>/set_group_whole_ban</td><td style="text-align:center;">[群组全员禁言]</td><td style="text-align:center;">❌</td></tr><tr><td>/set_group_admin</td><td style="text-align:center;">[群组设置管理员]</td><td style="text-align:center;">✅❓</td></tr><tr><td>/set_group_card</td><td style="text-align:center;">[设置群名片（群备注）]</td><td style="text-align:center;">✅❓</td></tr><tr><td>/set_group_name</td><td style="text-align:center;">[设置群名]</td><td style="text-align:center;">✅❓</td></tr><tr><td>/set_group_leave</td><td style="text-align:center;">[退出群组]</td><td style="text-align:center;">✅❓</td></tr><tr><td>/set_group_special_title</td><td style="text-align:center;">[设置群组专属头衔]</td><td style="text-align:center;">✅❓</td></tr><tr><td>/set_friend_add_request</td><td style="text-align:center;">[处理加好友请求]</td><td style="text-align:center;">❌</td></tr><tr><td>/set_group_add_request</td><td style="text-align:center;">[处理加群请求/邀请]</td><td style="text-align:center;">❌</td></tr><tr><td>/get_login_info</td><td style="text-align:center;">[获取登录号信息]</td><td style="text-align:center;">✅</td></tr><tr><td>/get_stranger_info</td><td style="text-align:center;">[获取陌生人信息]</td><td style="text-align:center;">❌</td></tr><tr><td>/get_friend_list</td><td style="text-align:center;">[获取好友列表]</td><td style="text-align:center;">✅</td></tr><tr><td>/get_group_info</td><td style="text-align:center;">[获取群信息]</td><td style="text-align:center;">✅</td></tr><tr><td>/get_group_list</td><td style="text-align:center;">[获取群列表]</td><td style="text-align:center;">✅</td></tr><tr><td>/get_group_member_info</td><td style="text-align:center;">[获取群成员信息]</td><td style="text-align:center;">✅</td></tr><tr><td>/get_group_member_list</td><td style="text-align:center;">[获取群成员列表]</td><td style="text-align:center;">✅</td></tr><tr><td>/get_group_honor_info</td><td style="text-align:center;">[获取群荣誉信息]</td><td style="text-align:center;">❌</td></tr><tr><td>/can_send_image</td><td style="text-align:center;">[检查是否可以发送图片]</td><td style="text-align:center;">❌</td></tr><tr><td>/can_send_record</td><td style="text-align:center;">[检查是否可以发送语音]</td><td style="text-align:center;">❌</td></tr><tr><td>/get_version_info</td><td style="text-align:center;">[获取版本信息]</td><td style="text-align:center;">✅</td></tr><tr><td>/set_restart</td><td style="text-align:center;">[重启协议端]</td><td style="text-align:center;">❌</td></tr><tr><td>/.handle_quick_operation</td><td style="text-align:center;">[对事件执行快速操作]</td><td style="text-align:center;">❌</td></tr><tr><td>/get_image</td><td style="text-align:center;">[获取图片信息]</td><td style="text-align:center;">❌</td></tr><tr><td>/get_msg</td><td style="text-align:center;">[获取消息]</td><td style="text-align:center;">❌</td></tr><tr><td>/get_status</td><td style="text-align:center;">[获取状态]</td><td style="text-align:center;">✅</td></tr></tbody></table></details><details><summary>已实现 Event</summary><h4 id="符合-onebot-标准的事件" tabindex="-1"><a class="header-anchor" href="#符合-onebot-标准的事件"><span>符合 OneBot 标准的事件</span></a></h4><table><thead><tr><th>事件类型</th><th style="text-align:center;">事件描述</th><th style="text-align:center;">实现情况</th></tr></thead><tbody><tr><td>消息事件</td><td style="text-align:center;">[私聊信息]</td><td style="text-align:center;">✅</td></tr><tr><td>消息事件</td><td style="text-align:center;">[群消息]</td><td style="text-align:center;">✅</td></tr><tr><td>消息事件</td><td style="text-align:center;">[at解析]</td><td style="text-align:center;">✅</td></tr><tr><td>通知事件</td><td style="text-align:center;">[群文件上传]</td><td style="text-align:center;">❌</td></tr><tr><td>通知事件</td><td style="text-align:center;">[群管理员变动]</td><td style="text-align:center;">❌</td></tr><tr><td>通知事件</td><td style="text-align:center;">[群成员减少]</td><td style="text-align:center;">❌</td></tr><tr><td>通知事件</td><td style="text-align:center;">[群成员增加]</td><td style="text-align:center;">❌</td></tr><tr><td>通知事件</td><td style="text-align:center;">[群禁言]</td><td style="text-align:center;">❌</td></tr><tr><td>通知事件</td><td style="text-align:center;">[好友添加]</td><td style="text-align:center;">❌</td></tr><tr><td>通知事件</td><td style="text-align:center;">[群消息撤回]</td><td style="text-align:center;">❌</td></tr><tr><td>通知事件</td><td style="text-align:center;">[好友消息撤回]</td><td style="text-align:center;">❌</td></tr><tr><td>通知事件</td><td style="text-align:center;">[群内戳一戳]</td><td style="text-align:center;">❌</td></tr><tr><td>通知事件</td><td style="text-align:center;">[群红包运气王]</td><td style="text-align:center;">❌</td></tr><tr><td>通知事件</td><td style="text-align:center;">[群成员荣誉变更]</td><td style="text-align:center;">❌</td></tr><tr><td>请求事件</td><td style="text-align:center;">[加好友请求]</td><td style="text-align:center;">❌</td></tr><tr><td>请求事件</td><td style="text-align:center;">[加群请求/邀请]</td><td style="text-align:center;">❌</td></tr></tbody></table></details>`,26)]))}const p=e(l,[["render",n],["__file","Telegram-Onebot-Adapter.html.vue"]]),k=JSON.parse('{"path":"/documentation/Telegram-Onebot-Adapter.html","title":"Telegram-Onebot-Adapter","lang":"zh-CN","frontmatter":{"title":"Telegram-Onebot-Adapter","icon":"server","order":1,"category":"指南","tag":["GUIDE"],"description":"Telegram-Onebot-Adapter 基于 OneBot 的 Telegram机器人Onebot v11 Java实现端 底层 Java Telegram Bot API: Telegram Bot API的Java实现 兼容性 完全兼容Onebot-v11协议,可与Onebot-v11协议的框架相连接,实现大部分功能 使用SpringBoo...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://www.hoshiran.tech/en/documentation/Telegram-Onebot-Adapter.html"}],["meta",{"property":"og:url","content":"https://www.hoshiran.tech/documentation/Telegram-Onebot-Adapter.html"}],["meta",{"property":"og:site_name","content":"AronaQQBot"}],["meta",{"property":"og:title","content":"Telegram-Onebot-Adapter"}],["meta",{"property":"og:description","content":"Telegram-Onebot-Adapter 基于 OneBot 的 Telegram机器人Onebot v11 Java实现端 底层 Java Telegram Bot API: Telegram Bot API的Java实现 兼容性 完全兼容Onebot-v11协议,可与Onebot-v11协议的框架相连接,实现大部分功能 使用SpringBoo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://socialify.git.ci/Travellerrr/Telegram-Onebot-Adapter/image?description=0&font=Raleway&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-04-04T07:23:22.000Z"}],["meta",{"property":"article:tag","content":"GUIDE"}],["meta",{"property":"article:modified_time","content":"2025-04-04T07:23:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Telegram-Onebot-Adapter\\",\\"image\\":[\\"https://socialify.git.ci/Travellerrr/Telegram-Onebot-Adapter/image?description=0&font=Raleway&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto\\",\\"https://img.shields.io/badge/OneBot-11-black?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAMAAADxPgR5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAxQTFRF////29vbr6+vAAAAk1hCcwAAAAR0Uk5T////AEAqqfQAAAKcSURBVHja7NrbctswDATQXfD//zlpO7FlmwAWIOnOtNaTM5JwDMa8E+PNFz7g3waJ24fviyDPgfhz8fHP39cBcBL9KoJbQUxjA2iYqHL3FAnvzhL4GtVNUcoSZe6eSHizBcK5LL7dBr2AUZlev1ARRHCljzRALIEog6H3U6bCIyqIZdAT0eBuJYaGiJaHSjmkYIZd+qSGWAQnIaz2OArVnX6vrItQvbhZJtVGB5qX9wKqCMkb9W7aexfCO/rwQRBzsDIsYx4AOz0nhAtWu7bqkEQBO0Pr+Ftjt5fFCUEbm0Sbgdu8WSgJ5NgH2iu46R/o1UcBXJsFusWF/QUaz3RwJMEgngfaGGdSxJkE/Yg4lOBryBiMwvAhZrVMUUvwqU7F05b5WLaUIN4M4hRocQQRnEedgsn7TZB3UCpRrIJwQfqvGwsg18EnI2uSVNC8t+0QmMXogvbPg/xk+Mnw/6kW/rraUlvqgmFreAA09xW5t0AFlHrQZ3CsgvZm0FbHNKyBmheBKIF2cCA8A600aHPmFtRB1XvMsJAiza7LpPog0UJwccKdzw8rdf8MyN2ePYF896LC5hTzdZqxb6VNXInaupARLDNBWgI8spq4T0Qb5H4vWfPmHo8OyB1ito+AysNNz0oglj1U955sjUN9d41LnrX2D/u7eRwxyOaOpfyevCWbTgDEoilsOnu7zsKhjRCsnD/QzhdkYLBLXjiK4f3UWmcx2M7PO21CKVTH84638NTplt6JIQH0ZwCNuiWAfvuLhdrcOYPVO9eW3A67l7hZtgaY9GZo9AFc6cryjoeFBIWeU+npnk/nLE0OxCHL1eQsc1IciehjpJv5mqCsjeopaH6r15/MrxNnVhu7tmcslay2gO2Z1QfcfX0JMACG41/u0RrI9QAAAABJRU5ErkJggg==\\"],\\"dateModified\\":\\"2025-04-04T07:23:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Travellerr\\",\\"url\\":\\"https://www.travellerr.cn\\"}]}"]]},"headers":[{"level":2,"title":"底层","slug":"底层","link":"#底层","children":[]},{"level":2,"title":"兼容性","slug":"兼容性","link":"#兼容性","children":[]},{"level":2,"title":"配置指南","slug":"配置指南","link":"#配置指南","children":[{"level":3,"title":"接口","slug":"接口","link":"#接口","children":[]},{"level":3,"title":"实现","slug":"实现","link":"#实现","children":[]}]}],"git":{"createdTime":1743318906000,"updatedTime":1743751402000,"contributors":[{"name":"Travellerrr","email":"travelerr11@outlook.com","commits":2}]},"readingTime":{"minutes":3.23,"words":968},"filePathRelative":"documentation/Telegram-Onebot-Adapter.md","localizedDate":"2025年3月30日","autoDesc":true}');export{p as comp,k as data};
