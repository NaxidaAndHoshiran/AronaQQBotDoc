import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as s}from"./app-DEspAnNv.js";const n="/assets/image/UsageGuide/bot-menu.png",d="/assets/image/UsageGuide/fish-info.png",o={};function p(l,e){return s(),a("div",null,e[0]||(e[0]=[i('<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span><span id="content"></span>目录</span></a></h2><ul><li><a href="#Menu">菜单</a></li><li><a href="#allCommand">全部指令</a><ul><li><a href="#prefixCommand">带前缀型指令</a></li><li><a href="#normalCommand">普通指令</a></li><li><a href="#fish">钓鱼系统</a><ul><li><a href="#fishAttention">注意</a></li><li><a href="#fishStart">初始化</a></li><li><a href="#fishCommand">指令</a></li><li><a href="#fishMessage">消息</a></li></ul></li><li><a href="#Favor">好感度系统</a><ul><li><a href="#FavorCommand">指令</a></li></ul></li></ul></li><li><a href="#Activity">活动</a></li><li><a href="#PermOpen">权限开放(已取消)</a></li><li><a href="#DebugUser">充电兑换</a></li></ul><hr><h2 id="提示" tabindex="-1"><a class="header-anchor" href="#提示"><span>提示！！！</span></a></h2><h4 id="在使用阿洛娜之前-请仔细阅读-全角与半角的区别-阿洛娜全部使用半角-而不是全角" tabindex="-1"><a class="header-anchor" href="#在使用阿洛娜之前-请仔细阅读-全角与半角的区别-阿洛娜全部使用半角-而不是全角"><span>在使用阿洛娜之前，请仔细阅读 <a href="https://blog.csdn.net/someday1314/article/details/69934312" target="_blank" rel="noopener noreferrer">全角与半角的区别</a>，阿洛娜全部使用半角 &quot;#&quot;，而不是全角 &quot;＃&quot;</span></a></h4><h2 id="菜单" tabindex="-1"><a class="header-anchor" href="#菜单"><span><span id="Menu"></span>菜单</span></a></h2><figure><img src="'+n+`" alt="「阿洛娜」菜单" tabindex="0" loading="lazy"><figcaption>「阿洛娜」菜单</figcaption></figure><h2 id="全部指令" tabindex="-1"><a class="header-anchor" href="#全部指令"><span><span id="allCommand"></span>全部指令</span></a></h2><h3 id="带前缀型指令" tabindex="-1"><a class="header-anchor" href="#带前缀型指令"><span><span id="prefixCommand"></span>带前缀型指令</span></a></h3><p>2024/02/25更新：将所有前缀统一改为<code>#</code></p><h4 id="普通指令" tabindex="-1"><a class="header-anchor" href="#普通指令"><span><span id="normalCommand"></span>普通指令</span></a></h4><p><code>#今日人品</code> 随机生成今日的人品值</p><p><code>#抽老婆</code> 抽取随机群友作为老婆</p><p><code>#换老婆</code> 更换群友作为老婆</p><p><code>#今日新闻</code> 获取今日60秒新闻</p><p><code>#今日番剧</code> 获取今日B站新番</p><p><code>#签到</code> 每日签到</p><p><code>#个人信息</code> 查看个人金币信息</p><p><code>#转账@[用户] [金钱数量]</code> 转账@的用户金钱</p><p><code>#攻略</code> 查看蔚蓝档案攻略</p><p><code>#塔罗牌</code> 抽取一张塔罗牌</p><p><code>#活动</code> 查看BA活动</p><p><code>#十连</code> BA卡池十发抽奖</p><p><code>#单抽</code> BA卡池单发抽奖</p><p><code>#今日运势</code> 查看今日的运势</p><p><code>#语音生成 [角色] [内容] &lt;中/日/英&gt;</code> 蔚蓝档案角色语音生成</p><p><code>#mcp ip</code> 查看mc服务器信息</p><hr><h4 id="钓鱼系统" tabindex="-1"><a class="header-anchor" href="#钓鱼系统"><span><span id="fish"></span>钓鱼系统</span></a></h4><h5 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span><span id="fishAttention"></span>注意</span></a></h5><p><strong>请注意，群聊默认没有钓鱼权限，请找 <em>群主</em> 发送<code>#开启 钓鱼</code> 来开启钓鱼权限。同时，<em>群主</em> 发送 <code>#关闭 钓鱼</code> 也可以关闭钓鱼权限</strong></p><h5 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span><span id="fishStart"></span>初始化</span></a></h5><p><code>#购买鱼竿</code> 来花费** 500金币 **购买一个钓竿</p><p><code>#钓鱼</code> 在本群开始钓鱼，当阿洛娜提示 <code>@xxx有动静了，快来！</code>时执行下方指令</p><h5 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span><span id="fishCommand"></span>指令</span></a></h5><p>注意，指令需要阿洛娜提示有动静了再发，每个指令有一定概率成功，成功会有相对应的奖励（钓到鱼的概率、钓到的鱼的品质等），最后以<code>#收杆</code>为结束钓鱼指令</p><p><code>#向左拉</code>、<code>#向右拉</code>、<code>#收线</code>、<code>#放线</code>、<code>#收杆</code></p><p><strong>当做出除<code>#收杆</code>之外的钓鱼指令时，调到正面物品的概率会大大增加。别怪我没提醒，一直掉到扣钱的物品啊！</strong></p><h5 id="消息" tabindex="-1"><a class="header-anchor" href="#消息"><span><span id="fishMessage"></span>消息</span></a></h5><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">操作成功消息: {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;这不轻轻松松嘛~&quot;</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> &quot;这鱼还没发力！&quot;</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> &quot;慢慢的、慢慢的...&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">操作失败消息: {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;挂底了吗？&quot;</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> &quot;怎么这么有劲？难道是大鱼？&quot;</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> &quot;卧槽！卧槽！卧槽！&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">其他消息: {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;钓鱼就是这么简单&quot;</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> &quot;一条小鱼也敢班门弄斧！&quot;</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> &quot;收！收！收！~~&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">钓鱼失败消息: {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;风吹的...&quot;</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> &quot;眼花了...&quot;</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> &quot;走神了...&quot;</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> &quot;呀！切线了...&quot;</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> &quot;钓鱼佬绝不空军！&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="物品列表" tabindex="-1"><a class="header-anchor" href="#物品列表"><span>物品列表</span></a></h5><figure><img src="`+d+'" alt="钓鱼物品列表" tabindex="0" loading="lazy"><figcaption>钓鱼物品列表</figcaption></figure><h5 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>TIPS</span></a></h5><p>钓鱼系统目前不稳定，可能出现钓鱼进度卡住的情况。每日会不定期清理</p><hr><h4 id="好感度系统" tabindex="-1"><a class="header-anchor" href="#好感度系统"><span><span id="Favor"></span>好感度系统</span></a></h4><h5 id="指令-1" tabindex="-1"><a class="header-anchor" href="#指令-1"><span><span id="FavorCommand"></span>指令</span></a></h5><table><thead><tr><th style="text-align:center;">指令</th><th style="text-align:center;">用途</th><th style="text-align:center;">使用区域</th><th style="text-align:center;">例子</th></tr></thead><tbody><tr><td style="text-align:center;"><code>#制造 [金币]</code></td><td style="text-align:center;">花费一定的金币数量制造礼物</td><td style="text-align:center;"><strong>群聊</strong></td><td style="text-align:center;"><code>#制造 30</code></td></tr><tr><td style="text-align:center;"><code>#查看制造</code></td><td style="text-align:center;">获取制造队列内的礼物</td><td style="text-align:center;"><strong>群聊</strong></td><td style="text-align:center;"><code>#查看制造</code></td></tr><tr><td style="text-align:center;"><code>#好感度</code></td><td style="text-align:center;">查看阿洛娜对你的好感度</td><td style="text-align:center;"><strong>群聊</strong></td><td style="text-align:center;"><code>#好感度</code></td></tr><tr><td style="text-align:center;"><code>#好感排行</code></td><td style="text-align:center;">查看本群阿洛娜的好感排行</td><td style="text-align:center;"><strong>群聊</strong></td><td style="text-align:center;"><code>#好感排行</code></td></tr></tbody></table><hr><h2 id="活动" tabindex="-1"><a class="header-anchor" href="#活动"><span><span id="Activity"></span>活动</span></a></h2><h3 id="权限开放" tabindex="-1"><a class="header-anchor" href="#权限开放"><span><span id="PermOpen"></span>权限开放</span></a></h3><p><s><em>2024/05 - 2025/01 (如果阿洛娜还在的话)</em></s></p><div class="hint-container important"><p class="hint-container-title">由于设计不周，现已取消权限开放活动</p></div><div class="hint-container note"><p class="hint-container-title">过时内容</p><blockquote><p>阿洛娜推出船新活动！【推广机制】</p><p>将阿洛娜推广至某一群聊（不违规使用、违反tx服务协议、不是小号），算一次有效推广，给予邀请者“升级权限组”一次奖励，请勿滥用阿洛娜哦</p><p>[权限组]</p><p>【默认】有绝大部分指令使用权限</p><p>【VIP】推广 2 次后获得，拥有语音生成功能，若该人为某群群主或管理员，则可以使用&quot;#监控&quot;指令</p></blockquote><p>划分出两个权限组，分别为 <code>default</code> 与 <code>VIP</code></p><p><code>VIP权限组</code> 需要推广2次阿洛娜，完成活跃指标后针对 <strong>个人</strong> 进行提权</p><p><code>VIP权限组</code> 保留所有<code>default权限组</code>的权限，并获得新权限：</p><blockquote><p><code>#监控</code></p><p><code>#语音生成 [角色] [文本] &lt;中/日/英&gt;</code></p><p><code>#盒 @xxx</code></p><p><code>#盒我</code></p></blockquote><p>后续还会伴随新功能加入而增加更多权限。</p><p>不仅如此，在<code>VIP权限组</code>的用户还可以 <strong><em>真正拥有</em></strong> 阿洛娜的好友（指阿洛娜会添加在<code>VIP权限组</code>的用户，做到双向好友），每次进行新功能或DEBUG测试时会随机抽取一位在该权限组内的用户联系</p></div><h3 id="充电兑换" tabindex="-1"><a class="header-anchor" href="#充电兑换"><span><span id="DebugUser"></span>充电兑换</span></a></h3><p>用户可以从 <a href="https://afdian.net/a/travellerr" target="_blank" rel="noopener noreferrer">爱发电</a> 充电 <strong>五元档位</strong> 或 <strong>十元档位</strong> 来获取兑换码（由于现在我没有通过创作者认证，无法自动发送。请及时查看爱发电私信）</p><p>兑换码可在任意有阿洛娜的群聊中发送 <code>#认证 兑换码内容</code> 来兑换。兑换完成后会获得 <code>一个月的测试用户权限</code></p><p>以下为测试版详细信息：</p><blockquote><p>测试版拥有额外的特权</p><p>每次指令上线前会先推送给测试版用户尝鲜</p><p>一个月后再同步到正式版</p><p>有些指令可能会作为VIP用户内容，但上线前仍会推送给测试版用户</p><p>一个月内没有测试内容，则权限再次延长一个月！</p></blockquote><hr><h2 id="友情链接" tabindex="-1"><a class="header-anchor" href="#友情链接"><span>友情链接</span></a></h2><p>由<code>Q10</code>开发的mhy家系列QQ机器人</p><p>小真寻 机器人号:<code>3665179359</code></p><p>小草神 机器人号:<code>2647355452</code></p><p>机器人博客:https://www.xiaozhenxunawa.top/ (待更新文章)</p>',65)]))}const c=t(o,[["render",p],["__file","UsageGuide.html.vue"]]),g=JSON.parse('{"path":"/documentation/UsageGuide.html","title":"QQ机器人「阿洛娜」使用指南","lang":"zh-CN","frontmatter":{"title":"QQ机器人「阿洛娜」使用指南","icon":"file-word","order":2,"category":"指南","tag":["GUIDE"],"description":"目录 菜单 全部指令 带前缀型指令 普通指令 钓鱼系统 注意 初始化 指令 消息 好感度系统 指令 活动 权限开放(已取消) 充电兑换 提示！！！ 在使用阿洛娜之前，请仔细阅读 全角与半角的区别，阿洛娜全部使用半角 \\"#\\"，而不是全角 \\"＃\\" 菜单 「阿洛娜」菜单「阿洛娜」菜单 全部指令 带前缀型指令 2024/02/25更新：将所有前缀统一改为# 普...","head":[["meta",{"property":"og:url","content":"https://www.hoshiran.tech/documentation/UsageGuide.html"}],["meta",{"property":"og:site_name","content":"AronaQQBot"}],["meta",{"property":"og:title","content":"QQ机器人「阿洛娜」使用指南"}],["meta",{"property":"og:description","content":"目录 菜单 全部指令 带前缀型指令 普通指令 钓鱼系统 注意 初始化 指令 消息 好感度系统 指令 活动 权限开放(已取消) 充电兑换 提示！！！ 在使用阿洛娜之前，请仔细阅读 全角与半角的区别，阿洛娜全部使用半角 \\"#\\"，而不是全角 \\"＃\\" 菜单 「阿洛娜」菜单「阿洛娜」菜单 全部指令 带前缀型指令 2024/02/25更新：将所有前缀统一改为# 普..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.hoshiran.tech/assets/image/UsageGuide/bot-menu.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-02T15:40:05.000Z"}],["meta",{"property":"article:tag","content":"GUIDE"}],["meta",{"property":"article:modified_time","content":"2024-11-02T15:40:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"QQ机器人「阿洛娜」使用指南\\",\\"image\\":[\\"https://www.hoshiran.tech/assets/image/UsageGuide/bot-menu.png\\",\\"https://www.hoshiran.tech/assets/image/UsageGuide/fish-info.png\\"],\\"dateModified\\":\\"2024-11-02T15:40:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Travellerr\\",\\"url\\":\\"https://www.travellerr.cn\\"}]}"]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"提示！！！","slug":"提示","link":"#提示","children":[]},{"level":2,"title":"菜单","slug":"菜单","link":"#菜单","children":[]},{"level":2,"title":"全部指令","slug":"全部指令","link":"#全部指令","children":[{"level":3,"title":"带前缀型指令","slug":"带前缀型指令","link":"#带前缀型指令","children":[]}]},{"level":2,"title":"活动","slug":"活动","link":"#活动","children":[{"level":3,"title":"权限开放","slug":"权限开放","link":"#权限开放","children":[]},{"level":3,"title":"充电兑换","slug":"充电兑换","link":"#充电兑换","children":[]}]},{"level":2,"title":"友情链接","slug":"友情链接","link":"#友情链接","children":[]}],"git":{"createdTime":1730562005000,"updatedTime":1730562005000,"contributors":[{"name":"Travellerrr","email":"travelerr11@outlook.com","commits":1}]},"readingTime":{"minutes":4.93,"words":1479},"filePathRelative":"documentation/UsageGuide.md","localizedDate":"2024年11月2日","autoDesc":true}');export{c as comp,g as data};
