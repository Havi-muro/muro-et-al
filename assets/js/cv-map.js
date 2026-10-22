(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(function () {
    var el = document.getElementById("cv-map");
    if (!el || typeof L === "undefined") {
      return;
    }

    var items = document.querySelectorAll(".cv-positions li[data-lat]");
    var places = {};
    var order = [];

    Array.prototype.forEach.call(items, function (li) {
      var key = li.getAttribute("data-place") || "";
      if (!places[key]) {
        places[key] = {
          place: key,
          lat: parseFloat(li.getAttribute("data-lat")),
          lon: parseFloat(li.getAttribute("data-lon")),
          roles: []
        };
        order.push(key);
      }
      places[key].roles.push(li.innerHTML.trim());
    });

    var map = L.map(el, { scrollWheelZoom: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var bounds = [];

    order.forEach(function (key) {
      var p = places[key];
      var marker = L.circleMarker([p.lat, p.lon], {
        radius: 9,
        weight: 2,
        color: "#1d4ed8",
        fillColor: "#3b82f6",
        fillOpacity: 0.85
      }).addTo(map);

      marker.bindTooltip(p.place, { direction: "top", offset: [0, -6] });
      marker.bindPopup("<strong>" + p.place + "</strong><br>" + p.roles.join("<br>"));
      bounds.push([p.lat, p.lon]);
    });

    if (bounds.length) {
      map.fitBounds(bounds, { padding: [36, 36] });
    }
  });
})();
