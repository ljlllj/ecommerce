// ========== 商品数据 ==========
const products = [
  {
    id: 1,
    name: "经典款帆布双肩包",
    category: "箱包",
    price: 199,
    originalPrice: 359,
    emoji: "🎒",
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    desc: "采用优质帆布面料，简约时尚设计。大容量主仓可轻松容纳15.6寸笔记本电脑，多隔层分区设计让收纳更有序。加厚肩带舒适减压，适合日常通勤和短途旅行。",
    badge: "热卖"
  },
  {
    id: 2,
    name: "无线蓝牙降噪耳机",
    category: "数码",
    price: 499,
    originalPrice: 899,
    emoji: "🎧",
    bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    desc: "主动降噪技术，隔绝外界噪音。40mm大动圈单元带来Hi-Fi级音质，蓝牙5.3稳定连接，续航长达60小时。柔软蛋白皮耳罩，长时间佩戴也舒适。",
    badge: "新品"
  },
  {
    id: 3,
    name: "智能运动手环",
    category: "数码",
    price: 169,
    originalPrice: 299,
    emoji: "⌚",
    bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    desc: "1.47英寸AMOLED高清大屏，支持100+运动模式。全天候心率、血氧、睡眠监测，5ATM防水等级。14天超长续航，你的全天候健康管家。",
    badge: ""
  },
  {
    id: 4,
    name: "北欧风陶瓷咖啡杯套装",
    category: "家居",
    price: 89,
    originalPrice: 149,
    emoji: "☕",
    bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    desc: "手工制作陶瓷杯，北欧极简风格。套装包含4个咖啡杯和杯托，高温烧制安全无毒。适用于微波炉和洗碗机，自用送礼皆宜。",
    badge: "限时"
  },
  {
    id: 5,
    name: "机械键盘 RGB背光",
    category: "数码",
    price: 349,
    originalPrice: 599,
    emoji: "⌨️",
    bg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    desc: "Cherry MX青轴机械开关，RGB炫彩背光，支持自定义灯效。全键无冲设计，铝合金面板，Type-C可拆卸线缆，游戏办公两相宜。",
    badge: ""
  },
  {
    id: 6,
    name: "真皮简约男士钱包",
    category: "配饰",
    price: 159,
    originalPrice: 289,
    emoji: "👝",
    bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    desc: "头层牛皮制作，手感细腻柔软。经典对折设计，多个卡位和大钞位，满足日常收纳需求。精美礼盒包装，送礼体面大方。",
    badge: ""
  },
  {
    id: 7,
    name: "便携式蓝牙音箱",
    category: "数码",
    price: 239,
    originalPrice: 399,
    emoji: "🔊",
    bg: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    desc: "360°环绕立体声，IPX7级防水设计。蓝牙5.3连接稳定，支持TWS串联，续航长达20小时。小巧便携，户外露营必备好物。",
    badge: "热卖"
  },
  {
    id: 8,
    name: "日式简约台灯",
    category: "家居",
    price: 129,
    originalPrice: 219,
    emoji: "💡",
    bg: "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)",
    desc: "极简设计，三档色温无极调光。LED护眼光源，无频闪不伤眼。触摸开关设计，适用于书桌、床头等多种场景，提升居家品质。",
    badge: ""
  },
  {
    id: 9,
    name: "运动速干T恤",
    category: "服饰",
    price: 99,
    originalPrice: 179,
    emoji: "👕",
    bg: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    desc: "采用透气速干面料，吸湿排汗保持干爽。立体剪裁修身版型，四针六线无缝工艺。适合跑步、健身等运动场景，多色可选。",
    badge: "限时"
  },
  {
    id: 10,
    name: "不锈钢保温杯 500ml",
    category: "家居",
    price: 79,
    originalPrice: 139,
    emoji: "🥤",
    bg: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
    desc: "316不锈钢内胆，12小时保温8小时保冷。食品级硅胶密封圈，防漏设计。磨砂质感外观，轻巧便携，办公室和户外都适用。",
    badge: ""
  },
  {
    id: 11,
    name: "复古太阳镜",
    category: "配饰",
    price: 189,
    originalPrice: 329,
    emoji: "🕶️",
    bg: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    desc: "经典复古框型，偏光镜片有效过滤眩光。UV400防护，保护眼睛免受紫外线伤害。TR90材质镜框轻盈舒适，适合日常和驾驶佩戴。",
    badge: "新品"
  },
  {
    id: 12,
    name: "大容量旅行洗漱包",
    category: "箱包",
    price: 69,
    originalPrice: 119,
    emoji: "🧳",
    bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    desc: "防水面料，大容量多分区设计。可悬挂式挂钩方便使用，干湿分离收纳更卫生。折叠便携，出差旅行的收纳好帮手。",
    badge: ""
  }
];
