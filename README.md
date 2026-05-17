# 租房展示网站

这是一个手机优先的单页租房展示网站，用于给租客快速了解房源情况：房型、照片、户型图预留位、租金信息和微信联系看房。

## 内容结构

- 首屏：房源标题、价格面议、看房入口和精选照片
- 快速概览：房型、租金、位置、配置、看房、入住时间
- 照片看房：客餐厅、主卧、次卧与儿童房、厨房、卫生间与洗衣区、阳台
- 户型图：预留户型图位置
- 租金与入住：月租面议，并预留押付方式、物业、水电燃气、网络、入住时间
- 联系看房：微信二维码预留位

## 启动

```powershell
npm start
```

访问：

```text
http://localhost:8787
```

## 部署到 GitHub Pages

项目已经包含 GitHub Pages 自动部署工作流：`.github/workflows/pages.yml`。

推荐流程：

1. 在 GitHub 新建一个公开仓库，例如 `rental-listing-site`。
2. 把本项目文件上传到仓库，并推送到 `main` 分支。
3. 打开仓库 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择 `Source: GitHub Actions`。
5. 等待 Actions 跑完后，GitHub 会生成免费的静态网址：

```text
https://你的用户名.github.io/rental-listing-site/
```

## 后续替换信息

- 房源基础信息在 `public/app.js` 的 `listing` 对象里修改。
- 户型图可以放到 `public/images/house/`，再把页面中的户型图预留位替换成图片。
- 微信二维码可以放到 `public/images/house/`，再替换底部联系区域的二维码预留位。
