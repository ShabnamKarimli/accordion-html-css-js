const accs = document.querySelectorAll(".item");

        accs.forEach(function(accordion) {
        accordion.addEventListener("click", function() {
            if (!this.classList.contains("open")) {
                accs.forEach(function(acc) {
                    acc.classList.remove("open");
             });
            
          this.classList.add("open");
        }
        else {
                this.classList.remove("open");
             }
      });
    });