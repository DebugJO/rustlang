```html
<style>
  #js-category-list li
  {
    padding: 10px 0px 10px 0px !important;
    list-style: none !important;
    border-bottom: 1px dotted #ddd !important;
    padding-left:0px !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    margin-left: -10px !important;	
  }
  
  #js-category-list li a
  {
    color: #333 !important;
  }
  
  #js-category-list li a:hover
  {
 	color: #0070d1 !important;
    text-decoration: none !important;
  }
  
  #js-category-list li span
  {
 	font-size:13px !important;
  }    
</style>

<div class="custom-category-box">
    <ul id="js-category-list">
    </ul>
</div>

<script>
    const categoryTarget = "C#ㆍ.NETㆍAvalonia"; 

    fetch('/rss')
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("item");
            let html = '';
            let count = 0;

            items.forEach(item => {
                const category = item.querySelector("category") ? item.querySelector("category").textContent : '';
                const title = item.querySelector("title").textContent;
                const link = item.querySelector("link").textContent;
                const rawDate = item.querySelector("pubDate") ? item.querySelector("pubDate").textContent : '';
                let printDate = '';
                
                if (rawDate) {
                    const d = new Date(rawDate);
                    const year = d.getFullYear();
                    const month = String(d.getMonth() + 1).padStart(2, '0');
                    const day = String(d.getDate()).padStart(2, '0');
                    
                    printDate = `${year}.${month}.${day}`;
                }

                if (category === categoryTarget) {
                    html += `
                        <li>
                            <a href="${link}">${title}</a>
                            <span class="date">${printDate}</span>
                        </li>`;
                    count++;
                }
            });

            if (html) {
                document.getElementById('js-category-list').innerHTML = html;
            } else {
                document.getElementById('js-category-list').innerHTML = "<li>등록된 글이 없습니다.</li>";
            }
        })
        .catch(err => {
            console.error('불러오기 실패:', err);
            document.getElementById('js-category-list').innerHTML = "<li>불러오기에 실패했습니다.</li>";
        });
</script>
```
