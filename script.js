const viewerCountElement = document.getElementById("viewer-count");

      let viewerCount = localStorage.getItem("viewerCount");
   if (!viewerCount) {
        viewerCount = 0;
      }

      viewerCount++;
      viewerCountElement.textContent = `${viewerCount} viewers`;

localStorage.setItem("viewerCount", viewerCount);