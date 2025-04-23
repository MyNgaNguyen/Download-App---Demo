const apps = [
    {
        titleTop: "eMed",
        titleBottom: "Sức Khỏe Trong Tay Bạn",
        logo: "img/eMed.png",
        link: "https://emedprovn.app.link/downloadapp"
    },
    {
        titleTop: "Numbala",
        titleBottom: "Sàn Thương Mại Điện Tử",
        logo: "img/numbala.png",
        link: "https://numbala.com"
    },
    {
        titleTop: "VNeTrip",
        titleBottom: "Du Lịch Số",
        logo: "img/VNetrip.png",
        link: "https://vnetrip.com"
    },
    {
        titleTop: "ECheck",
        titleBottom: "Tra Cứu - Truy Xuất - Xác Thực",
        logo: "img/ECheck.png",
        link: "https://echeck.numbala.com"
    },
    {
        titleTop: "VnLand",
        titleBottom: "Bất Động Sản Việt",
        logo: "img/vnland.png",
        link: "https://vnland.info"
    }
  ];
  
  const container = document.getElementById("appList");
  
  apps.forEach((app, index) => {
    const card = document.createElement("div");
    card.className = "app-card";
    card.style.animationDelay = `${index * 0.1}s`;
  
    card.innerHTML = `
      <img src="${app.logo}" class="app-logo" alt="${app.titleTop} - ${app.titleBottom}" />
      <div class="app-title">${app.titleTop} - ${app.titleBottom}</div>
      <button class="download-btn">Tải ngay</button>
    `;
  
    card.addEventListener("click", () => {
      window.location.href = app.link;
    });
  
    container.appendChild(card);
  });
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `Tải ứng dụng ${app.titleTop}`);
  
