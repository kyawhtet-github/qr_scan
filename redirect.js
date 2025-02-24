window.onload = function () {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var appStoreUrl = "https://apps.apple.com/us/app/supermyan/id6523422437";
    var playStoreUrl = "https://play.google.com/store/apps/details?id=com.uabfintech.supermyan&hl=en";
    var fallbackUrl = "https://drive.google.com/file/d/1FcHrU4vygSl4hmzfWHS-hrGIBSkwDT9L/view?usp=sharing";
    var buttonsDiv = document.getElementById("buttons");
    var headerDiv = document.getElementById("header");

    function createImageButton(imageSrc, url, altText, text) {
        var link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.className = "flex items-center space-x-3 w-64 mx-auto hover:opacity-80 transition rounded-lg shadow-md p-2 bg-white";
        link.innerHTML = `
            <img src="${imageSrc}" alt="${altText}" class="w-10 h-10">
            <span class="text-sm font-semibold text-gray-700">${text}</span>
        `;
        buttonsDiv.appendChild(link);
    }

    function createLogoHeader(imageSrc, altText) {
        var logo = document.createElement("img");
        logo.src = imageSrc;
        logo.alt = altText;
        logo.className = "w-24 mx-auto mb-4";
        headerDiv.appendChild(logo);
    }

    createLogoHeader("images/supermyan-logo.png", "Supermyan Logo");

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        createImageButton("images/appstore.png", appStoreUrl, "Download on the App Store", "Download on the App Store");
    } else if (/android/i.test(userAgent)) {
        createImageButton("images/playstore.png", playStoreUrl, "Get it on Google Play", "Get it on Google Play");
    } else {
        createImageButton("images/googledrive.png", appStoreUrl, "Download for Other Devices", "Download for Other Devices");
    }
};
