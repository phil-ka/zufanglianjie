const listing = {
  title: "温馨三房整租，家具家电齐全",
  status: "价格面议 · 可约看房",
  location: "小区/地址待补充",
  layout: "三房 / 客餐厅 / 厨房 / 卫生间 / 阳台",
  area: "面积待补充",
  floor: "楼层待补充",
  orientation: "朝向待补充",
  availableDate: "入住时间待补充",
  heroImage: {
    src: "/images/house/living-room-1.png",
    alt: "明亮客餐厅"
  },
  overview: [
    { label: "房型", value: "三房整租", note: "适合家庭或多人合租" },
    { label: "租金", value: "价格面议", note: "扫码后详细沟通" },
    { label: "位置", value: "小区/地址待补充", note: "发布前补充具体信息" },
    { label: "配置", value: "家具家电齐全", note: "拎包入住方向" },
    { label: "看房", value: "微信预约", note: "建议提前确认时间" },
    { label: "入住", value: "时间待补充", note: "可在租金模块更新" }
  ],
  features: [
    "客餐厅空间完整，适合日常会客和家庭用餐",
    "三间卧室分别适合主卧、儿童房或书房使用",
    "厨房、卫生间、洗衣区、阳台等生活功能明确",
    "空调、冰箱、洗衣机、热水器、燃气灶等配置已在照片中展示"
  ],
  photos: [
    {
      title: "客餐厅",
      description: "客厅与餐厅连通，采光较好，配有沙发、茶几、电视、餐桌和储物柜。",
      images: [
        { src: "/images/house/living-room-1.png", alt: "客餐厅全景" },
        { src: "/images/house/living-room-2.png", alt: "客厅沙发区" },
        { src: "/images/house/dining-room-1.png", alt: "餐厅和入户区域" },
        { src: "/images/house/dining-room-2.png", alt: "餐桌和收纳柜" }
      ]
    },
    {
      title: "主卧",
      description: "主卧配双人床、衣柜、空调和飘窗休闲区，收纳空间较足。",
      images: [
        { src: "/images/house/master-bedroom-1.png", alt: "主卧衣柜和飘窗" },
        { src: "/images/house/master-bedroom-2.png", alt: "主卧床和书桌柜" }
      ]
    },
    {
      title: "次卧与儿童房",
      description: "一间配置上下铺和书桌，另一间为双人床房，可按家庭或合租需求安排。",
      images: [
        { src: "/images/house/bunk-bedroom-1.png", alt: "上下铺卧室" },
        { src: "/images/house/second-bedroom-1.png", alt: "次卧双人床" }
      ]
    },
    {
      title: "厨房",
      description: "厨房有燃气灶、油烟机、水槽、橱柜和操作台，满足日常做饭。",
      images: [
        { src: "/images/house/kitchen-1.png", alt: "厨房操作台和灶台" },
        { src: "/images/house/kitchen-2.png", alt: "厨房水槽和燃气表" }
      ]
    },
    {
      title: "卫生间与洗衣区",
      description: "卫生间配热水器、洗手台和马桶；独立洗衣区放置洗衣机和收纳柜。",
      images: [
        { src: "/images/house/bathroom-1.png", alt: "卫生间" },
        { src: "/images/house/laundry-1.png", alt: "洗衣区" }
      ]
    },
    {
      title: "阳台",
      description: "阳台有较好的采光和通风，可作为休闲、晾晒或绿植空间。",
      images: [
        { src: "/images/house/balcony-1.png", alt: "阳台视野" }
      ]
    }
  ],
  rent: [
    { label: "月租", value: "价格面议", note: "看房后详谈" },
    { label: "押付方式", value: "待补充", note: "例如押二付一、押一付三" },
    { label: "物业费", value: "待补充", note: "是否包含需确认" },
    { label: "水电燃气", value: "待补充", note: "按账单或民用价格说明" },
    { label: "网络/电视", value: "待补充", note: "是否已有宽带可补充" },
    { label: "入住时间", value: "待补充", note: "可写立即入住或具体日期" }
  ],
  amenities: [
    "空调",
    "冰箱",
    "洗衣机",
    "热水器",
    "燃气灶",
    "油烟机",
    "沙发",
    "餐桌",
    "双人床",
    "上下铺",
    "衣柜",
    "储物柜",
    "阳台",
    "厨房"
  ]
};

renderListing();

function renderListing() {
  document.title = `${listing.title} | ${listing.status}`;
  setText("#listingStatus", listing.status);
  setText("#heroTitle", listing.title);

  const heroImage = document.querySelector("#heroImage");
  heroImage.src = listing.heroImage.src;
  heroImage.alt = listing.heroImage.alt;

  renderOverview();
  renderFeatures();
  renderPhotos();
  renderRent();
  renderAmenities();
}

function renderOverview() {
  const overviewGrid = document.querySelector("#overviewGrid");
  overviewGrid.innerHTML = listing.overview.map((item) => `
    <article class="info-card">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <p>${item.note}</p>
    </article>
  `).join("");
}

function renderFeatures() {
  const featureList = document.querySelector("#featureList");
  featureList.innerHTML = listing.features.map((item) => `
    <div class="feature-item">
      <span aria-hidden="true"></span>
      <p>${item}</p>
    </div>
  `).join("");
}

function renderPhotos() {
  const photoSections = document.querySelector("#photoSections");
  photoSections.innerHTML = listing.photos.map((section) => `
    <article class="photo-block">
      <div class="photo-block-copy">
        <h3>${section.title}</h3>
        <p>${section.description}</p>
      </div>
      <div class="photo-grid">
        ${section.images.map((image) => `
          <figure>
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <figcaption>${image.alt}</figcaption>
          </figure>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderRent() {
  const rentGrid = document.querySelector("#rentGrid");
  rentGrid.innerHTML = listing.rent.map((item) => `
    <article class="rent-card">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <p>${item.note}</p>
    </article>
  `).join("");
}

function renderAmenities() {
  const amenityList = document.querySelector("#amenityList");
  amenityList.innerHTML = listing.amenities.map((item) => `
    <span>${item}</span>
  `).join("");
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}
