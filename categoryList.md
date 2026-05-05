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
    text-decoration: none !important;
  }
  
  #js-category-list li a:hover
  {
 	color: #0070d1 !important;
    text-decoration: none !important;
  }
  
  #js-category-list li span
  {
 	font-size:13px !important;
    color: #888;
  }    
</style>

<div class="custom-category-box" style="margin:0;padding:0;">
    <ul id="js-category-list" style="margin:0; padding:0;border-top: 1px dotted #ddd;">
        <li>불러오는 중...</li>
    </ul>
</div>

<script>
    fetch('/rss')
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("item");
            let html = '';
            let count = 0;
            const maxCount = 20;

            for (let i = 0; i < items.length; i++) {
                if (count >= maxCount) break;

                const item = items[i];
                const title = item.querySelector("title").textContent;
                const link = item.querySelector("link").textContent;
                
                const cleanLink = link.split('?')[0];
                const isNumericPost = /\/\d+$/.test(cleanLink);

                if (!isNumericPost) {
                    continue;
                }

                const rawDate = item.querySelector("pubDate") ? item.querySelector("pubDate").textContent : '';
                let printDate = '';
                
                if (rawDate) {
                    const d = new Date(rawDate);
                    const year = d.getFullYear();
                    const month = String(d.getMonth() + 1).padStart(2, '0');
                    const day = String(d.getDate()).padStart(2, '0');
                    
                    printDate = `${year}.${month}.${day}`;
                }

                html += `
                    <li>
                        <a href="${link}">${title}</a>
                        <span class="date" style="white-space: nowrap;">${printDate}</span>
                    </li>`;
                count++;
            }

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

```css
@charset "utf-8";

/* 스크립트가 실행 중일 때만 본문을 잠시 숨김 */
.more-loading .entry-content, 
.more-loading .article_view, 
.more-loading .inner_index, 
.more-loading .tt_article_useless_p_margin {
    opacity: 0;
}

/* 처리가 완료되면 즉시 보임 */
.moreless-ready {
    opacity: 1 !important;
    transition: opacity 0.1s ease-in;
}

/* ------------------------------------------------------------------------------- */

.my_edit {
  display: none !important;
}


#head h2 a {
    position: relative;
}

body#tt-body-index #head h2 a::before {
    content: "【 Home 】";
    font-weight: normal;
    color: #6192C2;
    position: absolute; 
    left: -252px;     
    white-space: nowrap; 
    pointer-events: none;
    cursor: default;
}

@media screen and (max-width: 768px) {
    body#tt-body-index #head h2 a::before {
        display: none;
    }
}

#top-btn {
  position: fixed; 
  top: 122px;         
  z-index: 999;      
  padding: 8px 10px;
  background-color: #607D8B;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  right: auto; 
  width: fit-content; 
  left: 1120px;
}

/* .t_menu_home.first {
  font-weight: bold !important;
}

.t_menu_home.first a {
  color: #555 !important;
} */


.c_cnt {
  font-size: 12px !important;
}

.menu_toolbar .btn_tool_type1 {
    background: transparent !important;
    box-shadow: none !important;
}

.img_common_tistory {
    background-image: url(https://tistory1.daumcdn.net/tistory/8670674/skin/images/msj.ico) !important;
    margin: 0px !important;
    width: 30px !important;
    height: 30px !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
}

.menu_toolbar .btn_menu_type2 {
    background: transparent !important;
    box-shadow : none !important;
}

.menu_toolbar .btn_menu_toolbar {
    background: transparent !important;
    box-shadow : none !important;
}

.tt_article_useless_p_margin p+h6 {
  margin-top: 20px;
}

h6+table {
  margin-top: 20px !important;
}

.tt_article_useless_p_margin table+h5 {
  margin-bottom: 0px !important;
}

.tt_article_useless_p_margin p+h5 {
  margin-bottom: 0px !important;
}

#content-inner h5+ul > li {
    font-size: 13px !important;
}

.tt_article_useless_p_margin pre+h5 {
  margin-bottom: 0px !important;
}

.tt_article_useless_p_margin ul+h5 {
  margin-bottom: 0px !important;
}

h5+ol {
  margin-top: 5px !important;
}

h5+ul {
  margin-top: 5px !important;
}

.tt_article_useless_p_margin pre+p {
  margin-top: 20px !important;
}

.tt_article_useless_p_margin p+p
{
  margin-top: 14px !important;
}

.entry-content, .article_view, .inner_index, .tt_article_useless_p_margin 
{
  visibility: visible !important;
  height: auto !important;
  /* overflow: hidden; */
}

.another_category_color_gray, .another_category_color_gray h4 {
    display: none;
}

h5 {
  font-weight: 600;
   font-size: 13px;
}

.mCSB_inside>.mCSB_container {
    margin-right: 0px !important;
}

.mCSB_draggerContainer {
  width: 0px !important;
} 

.mCS-autoHide>.mCustomScrollBox>.mCSB_scrollTools, .mCS-autoHide>.mCustomScrollBox~.mCSB_scrollTools {
    opacity: 0;
    filter: "alpha(opacity=0)";
    -ms-filter: "alpha(opacity=0)";
    width: 0px;
}

.entry-content, .article_view, .inner_index, .tt_article_useless_p_margin { 
  visibility: hidden; 
  height: 0; 
  overflow: hidden; 
}

.moreless-ready { 
  visibility: visible !important; 
  height: auto !important; 
  overflow: visible !important;
}

.custom-moreless-btn {
  display: inline-block;
  /*margin: 10px 0;*/
  margin-bottom: 20px;
  color: #666; /* 글자색 */
  text-decoration: underline; /* 밑줄 */
  cursor: pointer;
  font-size: 0.95em;
}

/* -------------------------------------------*/    

.mCustomScrollBox {
    /* position: relative; */
    position: absolute;
    overflow: hidden;
    /* height: 100%; */
    max-width: 100%;
    outline: 0;
    direction: ltr;
    /*margin-top: -50px;*/
    height: auto !important;
}

.menu_toolbar .btn_tool_type1 {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -10px !important;
}

.menu_toolbar .btn_menu_toolbar {
    margin-top: -5px !important;
}

.custom-moreless-wrapper h6 {
    font-size: 16px;
    margin: 0px;  
}

.custom-moreless-wrapper hr {
    margin: 0;
    padding: 0;
    border: none;
    border-top: 1px solid #ccc;
    height: 0;
    overflow: hidden;
    margin-bottom: 20px;
}

.container_postbtn {
    padding: 35px 0;
    position: relative;
    clear: both;
    display: none !important;
}

.tt-comment-cont {
  display: none !important;
}

.tt_box_namecard {
    /* display: flex; */
    justify-content: space-between;
    position: relative;
    min-height: 206px;
    background-color: #f7f7f7;
    margin-top: 20px;
    margin-bottom: 20px;
    display: none !important;
}

#recent-post {
    padding: 70px 0 30px;
    display: none !important;
}

h6 {
  font-size: 16px;
}

#content-inner #body {
    padding: 20px 15px 18px;
    background-color: #fff;
    border: 1px solid #ddd;
    word-break: break-all;
    padding-right: 34px;
}

#content-inner P {
  font-size: 15px;
  line-height: 28px;
}

#content-inner h6+p {
  margin-top: 10px !important;
}


#content-inner li {
  font-size: 15px;
}

#content-inner ol > li {
  font-size: 13px;
}

.moreless-content {
  font-size: 15px;
}

.open {
  font-size: 15px;
}

/*  ---------------------------------------------- */

html {
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  text-size-adjust: none;
}

html, body {
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
  overflow-x: hidden;
}

body,
input,
textarea {
  font-size: 14px;
  font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", Arial, sans-serif;
}

img {
  border: 0;
  max-width: 100%;
}

fieldset {
  border: 1px solid #ddd;
  padding: 2%;
}

sup, sub {
  height: 0;
  line-height: 0;
  font-size: 10px;
  color: #920951;
}

iframe, video, embed, object {
  max-width: 100%;
}

abbr, acronym {
  border-bottom: 1px dotted #999;
  cursor: help;
}

cite, em {
  font-style: italic;
}

hr {
  margin: 0;
  padding: 0;
  border: none;
  border-top: 1px solid #ccc;
  height: 0;
  overflow: hidden;
}

code.red {
  border: 1px solid #F6CECE;
  background-color: #FFF4F4;
  color: #BE0D0D;
}

code.blue {
  border: 1px solid #B7D9F2;
  background-color: #F4FCFF;
  color: #4570CD;
}

code.green {
  border: 1px solid #B7F2C7;
  background-color: #F4FFF7;
  color: #267C45;
}

input, textarea {
  outline: none;
}

::selection {
  background: #888;
  color: #fff;
}

div, span, input, textarea {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
}

#tistoryProfileLayer div {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  -ms-box-sizing: content-box;
  -o-box-sizing: content-box;
  box-sizing: content-box;
}

a, input, textarea, li {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.clear {
  clear: both;
  width: 100%;
}

.text-center {
  text-align: center;
}

/*
 * sidebar
 */
#sidebar {
  position: fixed;
 /* position: absolute; */
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  /* border-right: 1px solid #ddd; */
  cursor: default;
  transform: translateZ(0);
  -webkit-transform: translateZ(0); 
}

#sidebar a {
  color: #333;
  text-decoration: none;
}

#sidebar a:hover {
  color: #07a;
}

#sidebar .blank {
  clear: both;
  width: 100%;
  /*height: 50px;*/
  /*background: #607D8B;*/
}

#sidebar h1 {
  margin: 0;
  padding: 0 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 200%;
  color: #666;
}

#sidebar .widget {
  margin-top: 30px;
  padding: 0;
  line-height: 200%;
}

#sidebar .widget li {
  list-style: none;
  padding-right: 30px;
  word-break: break-word;
}

#sidebar .menu ul {
  margin: 0;
}

#sidebar .menu {
  margin-top: 20px;
}

#sidebar .category {
  margin-top: 10px;
}

#sidebar .category>ul {
  margin: 0;
  padding: 0;
}

#sidebar .category ul li {
  list-style: none;
}

#sidebar .category>ul>li>a {
  display: none;
}

#sidebar .category ul li ul li ul {
  margin: 0 0 0 15px;
  padding: 0;
}

#sidebar .category ul li ul li ul li:before {
  content: "\F0DA";
  font-family: "FontAwesome";
  font-size: 10px;
  padding-right: 5px;
}

#sidebar .counter {
  font-size: 13px;
}

#sidebar .counter .yesterday {
  color: #6a6;
}

#sidebar .counter .today {
  color: #07a;
}

#sidebar .counter .total {
  color: #e55;
}

#sidebar .search input {
  padding: 10px;
  width: 60%;
  border: none;
  border-bottom: 1px dashed #ccc;
}

#sidebar .search input:focus {
  border-color: #B7CFF1;
}

#sidebar .blogger {
  line-height: 100%;
  color: #666;
}

/*
 * content
 */
#content {
  margin: 0 0 0 330px;
  padding: 0;
}

#content-inner {
  /* max-width: 1030px; */
  max-width: 830px;
  width: 100%;
  padding-right: 30px;
  -webkit-overflow-scrolling: touch;
}

#head {
  position: relative;
  padding-top: 20px;
  width: 100%;
  text-align: center;
}

#head h2 {
  display: inline-block;
  margin: 0 0 50px;
  padding: 0 5px 3px;
  font-size: 20px;
  font-weight: 400;
  color: #444;
  /*line-height: 200%;*/
  /*border-bottom: 1px dashed #ddd;*/
  text-shadow: 1px 1px #dedede;
  word-break: break-word;
}

#head h2 + .post-meta {
    margin-top: 0px !important;
    margin-bottom: 10px !important;
    font-size: 12px;
}

#head h2 a {
  color: #444;
}

#head h2 a:hover {
  color: #888;
}

#head .date {
  position: absolute;
  bottom: -44px;
  left: -10px;
  padding: 10px;
  font-size: 13px;
  color: #fff;
  background-color: #555;
  cursor: default;
}

#head .date:before {
  position: absolute;
  top: 0;
  left: -6px;
  width: 0;
  height: 0;
  content: " ";
  border-top: 20px solid #555;
  border-left: 6px solid transparent;
}

#head .date:after {
  position: absolute;
  bottom: 0;
  left: -6px;
  width: 0;
  height: 0;
  content: " ";
  border-bottom: 20px solid #555;
  border-left: 6px solid transparent;
}

#body {
  padding: 20px 15px 18px;
  background-color: #fff;
  border: 1px solid #ddd;
  word-break: break-all;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #07a;
}

/*
 * tag
 */
.tag {
  word-break: break-word;
}

.tag a {
  display: inline-block;
  margin-right: 4px;
  padding: 0 2px;
}

.tag a:hover {
  /* background-color: #f5f5f5; */
  background-color: transparent;
}

.tag .cloud5 {
  color: #999 !important;
  font-size: 12px !important;
}

.tag .cloud5:hover {
  color: #000 !important;
}

.tag .cloud4 {
  /* color: #157586 !important;*/
   color: #999 !important;
  /* font-size: 15px !important; */
  font-size: 12px !important;
}

.tag .cloud4:hover {
  color: #000 !important;
}

.tag .cloud3 {
  /* color: #333 !important; */
  color: #999 !important;
  /* font-size: 18px !important; */
  font-size: 12px !important;
}

.tag .cloud3:hover {
  color: #000 !important;
}

.tag .cloud2 {
  /*color: #07a !important; */
  color: #999 !important;
  /* font-size: 20px !important; */
  /* line-height: 150%; */
  font-size: 12px !important;
}

.tag .cloud2:hover {
  color: #000 !important;
}

.tag .cloud1 {
  /* color: #f55 !important; */
  /* font-size: 22px !important; */
  /* line-height: 200%; */
  color: #999 !important;
  font-size: 12px !important;
}

.tag .cloud1:hover {
  color: #000 !important;
}

/*
 * list
 */
.list ul {
  margin: 0;
  padding: 0;
  border-top: 1px dotted #ddd;
}

.list ul li {
  padding: 12px 10px 9px;
  list-style: none;
  font-size: 14px;
  border-bottom: 1px dotted #ddd;
}

.list span {
  float: right;
  font-size: 13px;
}

.list span.cnt {
  margin-right: 11px;
  color: #07a;
}

.list span.date {
  color: #666;
}

/*
 * protected
 */

.protected p {
  text-align: center;
}

.protected i {
  font-size: 20px;
  color: #555;
}

.protected input[type="password"] {
  margin-top: 10px;
  padding: 20px 10px;
  width: 300px;
  font-size: 13px;
  border: none;
  border-top: 1px dashed #ddd;
  border-bottom: 1px dashed #ddd;
}

.protected input[type="button"] {
  margin-top: 20px;
  font-size: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

/*
 * entry
 */
.entry {
  font-size: 16px;
}

.entry table {
  max-width: 100% !important;
  width: 100% !important;
}

.entry table.dual td {
  width: 50% !important;
  vertical-align: top;
}

.entry table.dual td .imageblock {
  width: 100% !important;
}

.entry table.dual td .imageblock span img {
  width: 100% !important;
}

.entry table.triple td {
  width: 33% !important;
  vertical-align: top;
}

.entry table.triple td .imageblock {
  width: 100% !important;
}

.entry table.triple td .imageblock span img {
  width: 100% !important;
}

.entry .imageblock {
  max-width: 100% !important;
  height: auto;
}

.entry .imageblock img {
  max-width: 100% !important;
  height: auto;
  vertical-align: middle;
}

.entry .imageblock span {
  max-width: 100% !important;
  width: 100% !important;
}

.entry table td .imageblock {
  width: 100% !important;
}

.entry .galleryControl {
  font-family: inherit !important;
}

.entry .tt-gallery-box {
  margin-bottom: 10px;
}

.entry .tt-gallery-box img {
  max-width: 100%;
  height: auto !important;
}

.entry .txc-info-wrap {
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 500px;
  width: 100%;
  clear: both;
}

.entry .txc-info {
  font-size: 13px !important;
  width: 500px !important;
}

.entry .txc-info hr {
  max-width: 100%;
  width: 100% !important;
}

.entry .txc-info h3 {
  border-left: none;
  background-color: transparent;
  color: inherit;
}

.entry .txc-info img {
  padding: 0;
  box-shadow: none;
  border: none;
}

.entry .moreless_fold {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background-color: #fcfcfc;
}

.entry .moreless_fold span:before {
  padding: 0 10px 0 5px;
  content: "\f107";
  font-family: "FontAwesome";
  color: #aaa;
}

.entry .moreless_fold span {
  display: block;
  padding: 10px 10px 8px;
}

.entry .moreless_top {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background-color: #fcfcfc;
}

.entry .moreless_top span:before {
  padding: 0 10px 0 5px;
  content: "\f106";
  font-family: "FontAwesome";
  color: #aaa;
}

.entry .moreless_top span {
  display: block;
  padding: 10px 10px 8px;
}

.entry .moreless_content {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.entry .moreless_bottom {
  display: none;
}

.entry a.tx-link,
.entry a.key1 {
  font-weight: 600;
  cursor: pointer;
}

.entry .cap1,
.entry .galleryCaption {
  margin: 0 !important;
  padding: 0;
  max-width: 100%;
  text-align: center;
  color: #555;
  font-style: italic;
  word-break: break-all;
}

.entry div.footnotes {
  margin-top: 30px;
  font-size: 12px;
  border-top: 1px solid #ddd;
}

.entry div.footnotes ol {
  padding: 0;
  margin: 10px 0 0 30px;
  list-style: decimal-leading-zero;
}

.entry div.footnotes ol li a {
  color: #888;
  font-weight: 400;
}

.entry .entry-ccl {
  margin-top: 15px;
  margin-bottom: 0 !important;
  line-height: 0;
}

.entry a[href*="attachment/cfile"] {
  display: inline-block;
  position: relative;
  padding: 6px 10px 3px;
  font-size: 13px;
  color: #fafafa;
  background-color: #555;
  box-shadow: 0 0 5px #222;
}

.entry a[href*="attachment/cfile"]:hover {
  background-color: #444;
  text-decoration: none;
}

.entry a[href*="attachment/cfile"]>img {
  display: none;
}

.entry .another_category h4 {
  font-size: 14px !important;
}

.entry .another_category table th,
.entry .another_category table td {
  font-size: 13px !important;
}

/*
 * tag_label
 */
.tag_label {
  padding: 0 0 10px 70px;
  min-height: 31px;
  line-height: 100%;
  text-align: right;
  word-break: break-word;
  font-size: 12px;
}

.tag_label span {
  font-size: 0;
}

.tag_label a {
  margin: 0 0 0 10px;
  font-size: 12px;
  color: #777;
}

.tag_label a:before {
  content: "#";
}

.tag_label a:hover {
  color: #000;
}

.tag_label .locationTag {
  font-size: 13px;
}

/*
 * admin
 */
.admin {
  margin-bottom: 10px;
  font-size: 11px;
  text-align: center;
  letter-spacing: 2px;
}

.admin a {
  color: #777;
}

.admin a:hover {
  color: #e55;
}

.admin .line {
  padding: 0 5px;
  font-size: 9px;
  color: #ddd;
}

/*
 * communicate
 */
#communicate {
  margin: 0;
  padding: 0;
  clear: both;
}

#communicate .communicateWrite {
  margin: 0;
  padding: 0;
}

#communicate .communicateWrite .name {
  margin-top: 20px;
}

#communicate .communicateWrite .no-margin {
  margin: 0;
}

#communicate .communicateWrite .guest {
  margin-bottom: 20px;
}

#communicate .communicateWrite .guest label {
  display: block;
  padding-top: 6.5px;
  float: left;
  width: 100px;
}

#communicate .communicateWrite .guest input {
  padding: 10px;
  width: 300px;
  border: 1px solid #ddd;
  cursor: pointer;
}

#communicate .communicateWrite .textarea {
  margin-bottom: 0;
  line-height: 0;
}

#communicate .communicateWrite .textarea textarea {
  padding: 10px;
  width: 100%;
  height: 200px;
  line-height: 160%;
  border: 1px solid #ddd;
}

#communicate .communicateWrite .submit {
  margin: 0;
  float: right;
}

#communicate .communicateWrite .submit input {
  margin: 0;
  padding: 20px 10px 15px;
  color: #333;
  line-height: 15px;
  letter-spacing: 4px;
  background: none;
  border: none;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

#communicate .communicateWrite .secret {
  position: relative;
  float: right;
  margin: 0 5px 0 0;
  padding: 20px 25px 15px 10px;
  line-height: 15px;
  letter-spacing: 2px;
  border-bottom: 1px solid #ddd;
}

#communicate .communicateWrite .secret label {
  cursor: pointer;
}

#communicate .communicateWrite .secret input {
  position: absolute;
  top: 5px;
  bottom: 0;
  left: 65px;
  margin: auto 0;
  cursor: pointer;
}

#communicate .communicateWrite .secret input:focus {
  border: none;
  outline: none;
}

#communicate .communicateWrite .guest input:focus,
#communicate .communicateWrite .textarea textarea:focus,
#communicate .communicateWrite .submit input:hover,
#communicate .communicateWrite .submit input:focus {
  border-color: #B7CFF1;
}

#communicate .communicateList {
  margin: 0;
  padding: 0;
}

#communicate .communicateList ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

#communicate .communicateList ol>li {
  border-top: 2px solid #555;
  padding: 15px 0 6px;
  border-bottom: 1px solid #ddd;
  margin-top: 20px;
}

#communicate .communicateList ol li>div {
  position: relative;
}

#communicate .communicateList ol li {
  background-color: #fff;
}

#communicate .communicateList ul {
  margin: 0;
  padding: 0;
}

#communicate .communicateList ul li {
  list-style: none;
  padding: 15px 0 0;
  margin-top: 10px;
  border-top: 1px dotted #ddd;
}

#communicate .communicateList li>div {
  padding: 0 10px;
}

#communicate .communicateList li .rp_secret p,
#communicate .communicateList li .guest_secret p {
  color: #6C75AD;
}

#communicate .communicateList div img[src*="index"] {
  border-radius: 10px;
  width: 30px;
  height: 30px;
  z-index: 2;
  background-color: #f9f9f9;
  vertical-align: middle;
}

#communicate .communicateList div img[src*="favicon"] {
  vertical-align: middle;
  margin-top: -2px;
}

#communicate .communicateList .name {
  font-weight: 400;
  float: left;
}

#communicate .communicateList .date {
  font-size: 13px;
  float: right;
  font-style: italic;
  color: #777;
}

#communicate .communicateList p {
  margin: 10px 0;
  padding: 0;
  line-height: 180%;
}

#communicate .communicateList .control {
  width: 100%;
  text-align: right;
  font-style: italic;
  font-size: 13px;
  line-height: 100%;
}

#communicate .communicateList .control a {
  margin: 0 0 0 5px;
  color: #555;
  display: inline-block;
  padding: 10px 5px;
}

#communicate .communicateList .tistoryProfileLayerTrigger {
  margin-bottom: -1px;
}

#communicate .communicateList .tt_more_preview_comments_wrap {
  text-align: center;
  cursor: pointer;
  padding: 17px 0 15px;
  font-weight: 400;
  color: #333;
}

/*
 * paging
 */
#paging {
  padding: 30px 0 20px;
  line-height: 200%;
  text-align: center;
  cursor: default;
}

#paging a {
  display: inline-block;
  margin: 0 5px 10px;
  padding: 0 5px;
}

#paging .no-more-prev,
#paging .no-more-next {
  color: #aaa;
  cursor: default;
}

#paging .selected {
  cursor: default;
  color: #07a;
}

/*
 * recent-post
 */
#recent-post {
  padding: 70px 0 30px;
}

#recent-post h4 {
  margin: 0 1% 10px;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
}

#recent-post ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#recent-post ul li {
  position: relative;
  float: left;
  margin: 0;
  width: 25%;
  height: 150px;
  overflow: hidden;
  background-image: url('./images/recent-post-bg.png');
  background-color: #eee;
}

#recent-post ul li img {
  max-width: 100%;
  width: 100%;
  min-height: 100%;
  vertical-align: middle;
}

#recent-post ul li img[src*="common_icon"] {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  /* IE 8 */
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  /* IE 7 and olders */
  opacity: 0.5;
  -webkit-filter: grayscale(1);
  -moz-filter: grayscale(1);
  -ms-filter: grayscale(1);
  -o-filter: grayscale(1);
  filter: grayscale(1);
}

#recent-post ul li .title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 155px;
  background-color: #555;
  color: #fff;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  /* IE 8 */
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  /* IE 7 and olders */
  opacity: 0;
  -webkit-transition: opacity 0.2s;
  -moz-transition: opacity 0.2s;
  -ms-transition: opacity 0.2s;
  -o-transition: opacity 0.2s;
  transition: opacity 0.2s;
}

#recent-post ul li:hover .title {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
  /* IE 8 */
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=90);
  /* IE 7 and olders */
  opacity: 0.9;
}

/*
 * foot
 */
#foot {
  position: relative;
  width: 100%;
  /*height: 100px;*/
  height: 40px;
  text-shadow: 1px 1px #fff;
  cursor: default;
}

#foot a {
  color: #000;
  text-decoration: none;
  border-bottom: 1px dotted #aaa;
}

#foot a:hover {
  color: #888;
}

#foot .powered,
#foot .social {
  position: absolute;
  bottom: 20px;
  font-size: 12px;
  display: none;
}

#foot .powered {
  right: 1%;
}

#foot .social {
  left: 1%;
  display: none;
}

/*
 * responsive
 */
.responsive-video {
  position: relative;
  padding-bottom: 56.25%;
  width: 100%;
}

.responsive-video iframe,
.responsive-video video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#sidebar-toggle {
  display: none;
}

@media all and (max-width: 959px) { /* 수정*/
  #sidebar {
    z-index: 100;
    -webkit-transform: translate3d(-300px, 0, 0);
    -moz-transform: translate3d(-300px, 0, 0);
    transform: translate3d(-300px, 0, 0);
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
  }

  #recent-post ul li .title {
    opacity: 0.9;
    top: inherit;
    bottom: 0;
    height: 50px;
    line-height: 53px;
  }

  #recent-post ul li:nth-child(2n+0) .title {
    background-color: #333;
  }

  #sidebar-toggle {
    display: block;
    position: fixed;
    left: 10px;
    bottom: 10px;
    width: 50px;
    height: 50px;
    line-height: 55px;
    text-align: center;
    color: #555;
    background-color: #f1f1f1;
    border-radius: 10px;
    opacity: 0.9;
    box-shadow: 0 0 10px #aaa;
    z-index: 101;
  }

  html.open #sidebar {
    overflow-y: auto;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
  }

  html.open,
  html.open body {
    overflow: hidden;
  }

  #content {
    margin: 0 auto;
    padding: 0 10px;
  }

  #content-inner {
    padding: 0;
  }

  #head .date {
    bottom: -10px;
    right: 0;
    left: inherit;
    padding: 8px 5px 6px;
    font-size: 11px;
  }

  .tag_label {
    padding: 0 0 10px 0;
  }
}

@media all and (max-width: 639px) {
  .list ul li a {
    display: block;
  }

  #communicate .communicateWrite .guest label {
    padding: 0 0 5px 0;
    float: none;
    width: 100%;
  }

  #communicate .communicateWrite .guest input {
    width: 100%;
  }

  #communicate .communicateList .control {
    font-size: 12px;
  }

  #recent-post ul li {
    width: 100%;
    height: 200px;
  }

  #foot .powered {
    position: absolute;
    right: 0;
    bottom: 45px;
    width: 100%;
    text-align: center;
  }

  #foot .social {
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 100%;
    text-align: center;
  }
}

@media all and (min-width: 960px) {
  #sidebar-toggle {
    display: none;
  }
}

.tt-comment-cont .tt-box-total .tt_txt_g {
  font-size: 14px;
}

.tt-comment-cont .tt-box-total .tt_num_g {
  font-size: 14px;
  color: #222;
}

.tt-comment-cont .tt-wrap-cmt .tt-link-user {
  font-size: 14px;
}

.tt-comment-cont .tt-wrap-cmt .tt_desc {
  font-size: 14px;
  color: #000;
}

.tt-comment-cont .tt-txt-mention {
  color: #000;
}

.tt-comment-cont .tt-btn_register {
  width: 100px;
  height: 36px;
  background-color: #fff;
  font-size: 14px;
  color: #222;
  border-radius: 0;
  border-color: #dcdcdc;
}

.tt-comment-cont .tt-btn_register:hover {
  background-color: #fff;
  border-color: #222;
}

.tt-comment-cont .tt-btn_register:focus {
  background-color: #fff;
  border-color: #222;
}

#article-view p a {
  color: #0070d1;
  text-decoration: underline;
  /* text-decoration: none;*/
}

/* 전체 공통 */
/* 전체 공통 */
#article-view {
  margin: 0;
  /* padding: 20px 20px 50px; */
  word-wrap: break-word;
  color: #333;
  /* min-height: 370px;*/
  font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0;
  padding-left: 20px;
  padding-bottom: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

.contents_style>* {
  margin: 20px 0 0 0;
}

/* 텍스트 관련 */
#article-view h2[data-ke-size] {
  font-size: 1.62em;
  line-height: 1.46;
}

#article-view h3[data-ke-size] {
  font-size: 1.44em;
  line-height: 1.48;
}

#article-view h4[data-ke-size] {
  font-size: 1.25em;
  line-height: 1.55;
}

#article-view p[data-ke-size='size18'] {
  font-size: 1.12em;
  line-height: 1.67;
}

#article-view p[data-ke-size='size16'] {
  line-height: 1.75;
}

#article-view p[data-ke-size='size14'] {
  font-size: 0.87em;
  line-height: 1.71;
}

#article-view h2,
#article-view h3,
#article-view h4 {
  font-weight: normal;
  letter-spacing: -1px;
  color: #000;
  margin: 1em 0 20px;
}

#article-view p+p, #article-view p {
  margin-bottom: 30px;
}

#article-view h2+h2,
#article-view h3+h3,
#article-view h4+h4 {
  margin: 0;
}

#article-view h2+h3,
#article-view h2+h4,
#article-view h3+h4 {
  margin-top: 10px;
}

#article-view h2+p,
#article-view h3+p,
#article-view h4+p,
#article-view h5+p,
#article-view h6+p {
  margin-top: 10px;
}

#article-view div[data-ke-type='moreLess'] {
  caret-color: auto;
  background-color: #fafafa;
  padding: 20px 20px 22px;
  margin: 20px 0;
  border: 1px dashed #dddddd;
  color: #333333;
  font-size: 15px;
}

#article-view a {
  color: #0070d1;
  /* text-decoration: underline; */
  text-decoration: none;
}

#article-view p a {
  color: #0070d1;
  /* text-decoration: underline; */
  text-decoration: none;
}

#article-view figure[data-ke-type='contentSearch'] a {
  text-decoration: none;
}

/* 인용문 */

/*
#article-view blockquote[data-ke-style='style1'] {
  text-align: center;
  background: url(https://t1.daumcdn.net/keditor/dist/0.7.21/image/blockquote-style1.svg) no-repeat 50% 0;
  padding: 34px 0 0 0;
  font-size: 1.12em;
  color: #333;
  line-height: 1.67;
  border: 0 none;
  font-family: "Noto Serif KR";
}
*/

/*
blockquote p {
  border-left:2px solid #e0e0e0; 
  padding-left: 10px; 
  margin-left: 0;
}
*/

#article-view blockquote {
  border-left:2px solid #e0e0e0; 
  padding-left: 10px; 
  margin-left: 0;
  font-size: 13px !important;
}

#article-view blockquote+p {
  margin-top: 10px !important;
}
#article-view blockquote > p {
  font-size: 13px !important;
}

#tt-body-page blockquote[data-ke-style='style1'] {
  border-left:2px solid #e0e0e0 !important; 
  padding: 0px!important;
  font-size: 13px !important;
  background: transparent !important;
}

#tt-body-page blockquote[data-ke-style='style1'] p {
    text-align: left !important;
    margin-left: 10px !important;
}


/*
#article-view blockquote[data-ke-style='style1'] {
  border-left:2px solid #e0e0e0; 
  padding-left: 10px;
  margin-left: 0;
  font-size:13px;
  color: #333;
  line-height: 1.67;
  border: 0 none;
}


#article-view blockquote[data-ke-style='style2'] {
  border-color: #d0d0d0;
  border-width: 0 0 0 4px;
  border-style: solid;
  padding: 1px 0 0 12px;
  color: #666;
  line-height: 1.75;
  font-size: 1em;
  text-align: left;
}

#article-view blockquote[data-ke-style='style3'] {
  border: 1px solid #dddddd;
  background-color: #fcfcfc;
  text-align: left;
  padding: 21px 25px 20px 25px;
  color: #666;
  font-size: 1em;
  line-height: 1.75;
}

#article-view blockquote {
  display: block;
  margin: 20px auto 0;
  letter-spacing: 0px;
}
*/

/* 첨부: 공통 */

/* 이미지 클릭 관련 - lightbox */
#article-view span[data-lightbox] {
  cursor: pointer;
}

/* 첨부: 파일 */
#article-view figure.fileblock {
  width: 470px;
  height: 73px;
  box-sizing: border-box;
  position: relative;
  border-radius: 1px;
  margin-top: 20px;
  margin-bottom: 0px;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 7%);
  border: solid 1px rgba(0, 0, 0, 0.1);
}

#article-view figure.fileblock a {
  display: block;
}

#article-view figure.fileblock .image {
  float: left;
  width: 30px;
  height: 30px;
  background-image: url('https://t1.daumcdn.net/tistory_admin/static/manage/post-editor/img_editor_content.svg');
  margin: 22px 17px 21px 22px;
  background-position: 0 0;
}

#article-view figure.fileblock .desc {
  position: absolute;
  left: 70px;
  right: 60px;
  top: 4px;
  bottom: 0;
}

#article-view figure.fileblock .filename {
  color: #333333;
  font-size: 14px;
  text-overflow: ellipsis;
  width: 100%;
  height: 20px;
  margin: 16px 0 0;
}

#article-view figure.fileblock .size {
  font-family: Pretendard-Regular;
  font-size: 12px;
  color: #777;
  height: 16px;
}

#article-view figure[data-ke-align=alignCenter].fileblock {
  margin-left: auto;
  margin-right: auto;
}

#article-view figure[data-ke-align=alignRight].fileblock {
  margin-left: auto;
}

#article-view figure.fileblock .name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 272px;
  height: 20px;
  display: block;
}

#article-view figure.fileblock a::after {
  content: '';
  background-image: url('https://t1.daumcdn.net/tistory_admin/static/manage/post-editor/img_editor_content.svg');
  background-position: -40px 0;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 24px;
  top: 19px;
}

/* 첨부: 이미지 */
#article-view figure.imageblock {
  display: table;
  position: relative;
}

#article-view figure.imageblock.alignLeft {
  text-align: left;
}

#article-view figure.imageblock.alignCenter {
  margin: 20px auto 0;
  text-align: center;
}

#article-view figure.imageblock.alignRight {
  text-align: right;
  margin-left: auto;
}

#article-view figure.imageblock.floatLeft {
  float: left;
  margin-right: 20px;
}

#article-view figure.imageblock.floatRight {
  float: right;
  margin-left: 20px;
}

#article-view figure.imageblock.widthContent {
  display: block;
}

#article-view figure.imageblock.widthContent img {
  width: 100%;
}

#article-view figure.imageblock.floatLeft figcaption,
#article-view figure.imageblock.floatRight figcaption {
  text-align: left;
}

#article-view figure.imageblock img {
  display: inline-block;
  max-width: 100%;
  margin: 0;
  height: auto;
}

#article-view iframe,
#article-view figure img,
#article-view figure iframe {
  max-width: 100%;
}

#article-view figure img:not([width]),
#article-view figure iframe:not([width]) {
  width: 100%;
}

#article-view figure {
  max-width: 100%;
  clear: both;
}

#article-view figure img {
  display: inline-block;
}

#article-view figure.imagegridblock+figure.imagegridblock,
#article-view figure.imagegridblock+figure.imageblock,
#article-view figure.imageblock+figure.imagegridblock {
  margin-top: 10px;
}

/* 캡션 텍스트 */
#article-view figure figcaption {
  font-size: 13px;
  color: #777;
  word-break: break-word;
  padding-top: 10px;
  min-height: 20px;
  caption-side: bottom;
  text-align: center;
  caret-color: auto;
  width: 100%;
  box-sizing: content-box;
}

/* 첨부: 이미지 그리드 */
#article-view figure.imagegridblock {
  position: relative;
  caret-color: transparent;
  background-color: transparent;
  width: 100%;
  height: auto;
  margin: 20px 0 0 0;
}

#article-view figure.imagegridblock .image-container {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
}

#article-view figure.imagegridblock .image-container>span {
  margin-right: 0;
  margin-top: 2px;
}

#article-view figure.imagegridblock img {
  margin: 0;
  height: inherit;
}

#article-view figure.imagegridblock span img {
  width: 100%;
}

hr[data-ke-style],
#article-view hr[data-ke-style] {
  border: none;
  font-size: 0;
  line-height: 0;
  margin: 20px auto 0;
  background: url(https://t1.daumcdn.net/keditor/dist/0.7.21/image/divider-line.svg);
  background-size: 200px 420px;
  cursor: default !important;
}

hr[data-ke-style='style1'],
#article-view hr[data-ke-style='style1'] {
  background-position: center 0;
  width: 64px;
  height: 4px;
  padding: 20px;
}

hr[data-ke-style='style2'],
#article-view hr[data-ke-style='style2'] {
  background-position: center -48px;
  width: 64px;
  height: 3px;
  padding: 20px;
}

hr[data-ke-style='style3'],
#article-view hr[data-ke-style='style3'] {
  background-position: center -96px;
  width: 64px;
  height: 8px;
  padding: 18px 20px;
}

hr[data-ke-style='style4'],
#article-view hr[data-ke-style='style4'] {
  background-position: center -144px;
  width: 2px;
  height: 60px;
  padding: 0 51px;

}

hr[data-ke-style='style4']+hr[data-ke-style='style4'],
#article-view hr[data-ke-style='style4']+hr[data-ke-style='style4'] {
  margin-top: 0;
}

hr[data-ke-style='style5'],
#article-view hr[data-ke-style='style5'] {
  background-position: center -208px;
  background-repeat: repeat-x;
  height: 2px;
  padding: 21px 0;
}

hr[data-ke-style='style6'],
#article-view hr[data-ke-style='style6'] {
  background-position: center -256px;
  background-repeat: repeat-x;
  height: 2px;
  padding: 21px 0;
}

hr[data-ke-style='style7'],
#article-view hr[data-ke-style='style7'] {
  background-position: center -304px;
  width: 200px;
  height: 19px;
  padding: 18px 20px 17px 20px;
}

hr[data-ke-style='style8'],
#article-view hr[data-ke-style='style8'] {
  background-position: center -362px;
  width: 200px;
  height: 19px;
  padding: 18px 20px 17px 20px;
}

/* 테이블 */
#article-view table[data-ke-style] {
  margin-bottom: 0px;
}

#article-view table {
  margin-bottom: 0px;
  /* border-color: #ddd; */
  font-size: 14px;
  border-collapse: collapse; 
  width: 100%;
}

#article-view th{
  border: 1px solid #ddd; 
  text-align: center; 
  background: #f7f7f7;
}

#article-view td{
  border: 1px solid #ddd;   
  text-align: left; 
}

#article-view table tbody tr {
  box-sizing: content-box;
}

#article-view table td {
  word-break: break-word;
  padding: 8px;
  font-size: 14px;
}

#article-view table th {
  word-break: break-word;
  padding: 8px;
  font-size: 14px;
}

#article-view table[data-ke-style='style1'] tr:first-child td {
  border-bottom: 1px solid #6ed3d8;
}

#article-view table[data-ke-style='style2'] tr:first-child td {
  border-bottom: 1px solid #008300;
}

#article-view table[data-ke-style='style3'] tr:first-child td {
  border-bottom: 1px solid #006dbe;
}

#article-view table[data-ke-style='style4'] tr:nth-child(2n) td {
  background-color: #f9f9f9;
}

#article-view table[data-ke-style='style5'] tr:nth-child(2n) td {
  background-color: #f8fbfb;
}

#article-view table[data-ke-style='style6'] tr:nth-child(2n) td {
  background-color: #f5f7f5;
}

#article-view table[data-ke-style='style7'] tr:nth-child(2n) td {
  background-color: #f6f8fb;
}

#article-view table[data-ke-style='style8'] tr:first-child td {
  border-bottom: 2px solid #797979;
}

#article-view table[data-ke-style='style8'] {
  border-left: 0 none;
  border-right: 0 none;
}

#article-view table[data-ke-style='style8'] td {
  border-right-color: transparent;
  border-left-color: transparent;
}

#article-view table[data-ke-style='style9'] tr:first-child td {
  border-bottom: 2px solid #6ed3d8;
}

#article-view table[data-ke-style='style9'] {
  border-left: 0 none;
  border-right: 0 none;
}

#article-view table[data-ke-style='style9'] td {
  border-right-color: transparent;
  border-left-color: transparent;
}

#article-view table[data-ke-style='style10'] tr:first-child td {
  border-bottom: 2px solid #008300;
}

#article-view table[data-ke-style='style10'] {
  border-left: 0 none;
  border-right: 0 none;
}

#article-view table[data-ke-style='style10'] td {
  border-right-color: transparent;
  border-left-color: transparent;
}

#article-view table[data-ke-style='style11'] tr:first-child td {
  border-bottom: 2px solid #2780d4;
}

#article-view table[data-ke-style='style11'] {
  border-left: 0 none;
  border-right: 0 none;
}

#article-view table[data-ke-style='style11'] td {
  border-right-color: transparent;
  border-left-color: transparent;
}

#article-view table[data-ke-style='style12'] tr:nth-child(odd) td {
  background-color: #f9f9f9;
}

#article-view table[data-ke-style='style12'] tr td:first-child {
  background-color: #efefef;
}

#article-view table[data-ke-style='style12'] tr:first-child td {
  background-color: #9b9b9b;
  border: 1px solid #888;
  color: #fff;
}

#article-view table[data-ke-style='style13'] tr:nth-child(odd) td {
  background-color: #f9f9f9;
}

#article-view table[data-ke-style='style13'] tr td:first-child {
  background-color: #efefef;
}

#article-view table[data-ke-style='style13'] tr:first-child td {
  background-color: #6ed3d8;
  border: 1px solid #5cbcc1;
  color: #fff;
}

#article-view table[data-ke-style='style14'] tr:nth-child(odd) td {
  background-color: #f9f9f9;
}

#article-view table[data-ke-style='style14'] tr td:first-child {
  background-color: #efefef;
}

#article-view table[data-ke-style='style14'] tr:first-child td {
  background-color: #008300;
  border: 1px solid #006d00;
  color: #fff;
}

#article-view table[data-ke-style='style15'] tr:nth-child(odd) td {
  background-color: #f9f9f9;
}

#article-view table[data-ke-style='style15'] tr td:first-child {
  background-color: #efefef;
}

#article-view table[data-ke-style='style15'] tr:first-child td {
  background-color: #2780d4;
  border: 1px solid #1568b7;
  color: #fff;
}

#article-view table[data-ke-style='style16'],
#article-view table[data-ke-style='style16'] tr,
#article-view table[data-ke-style='style16'] tr td {
  border-color: transparent;
}

/* 오픈 그래프 */
#article-view figure[data-ke-type='opengraph'] {
  margin: 10px 0;
}

#article-view figure[data-ke-type='opengraph'] a {
  box-sizing: initial;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.07);
  border: solid 1px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #000;
}

#article-view figure[data-ke-type='opengraph'] a:hover {
  opacity: 1;
}

#article-view figure[data-ke-type='opengraph'] div.og-image {
  border-right: solid 1px rgba(0, 0, 0, 0.06);
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center;
}

#article-view figure[data-ke-type='opengraph'] div.og-image button {
  display: none;
}

#article-view figure[data-ke-type='opengraph']:hover div.og-image button {
  cursor: pointer;
  border: none;
  display: block;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #000;
  width: 15px;
  height: 15px;
}

#article-view figure[data-ke-type='opengraph'] p.og-title {
  color: #000000;
  font-size: 22px;
  padding-bottom: 10px;
  max-width: 467px;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0px;
  overflow: hidden;
  font-family: Pretendard-Regular;
}

#article-view figure[data-ke-type='opengraph'] .og-desc {
  margin: 0px;
  max-width: 467px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: Pretendard-Regular;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #909090;
  max-height: 42px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}

@media (max-width: 600px) {
  #article-view figure[data-ke-type='opengraph'] a {
    height: 90px;
  }

  #article-view figure[data-ke-type='opengraph'] a::before {
    left: 44px;
  }

  #article-view figure[data-ke-type='opengraph'] div.og-image {
    width: 90px;
    height: 90px;
  }

  #article-view figure[data-ke-type='opengraph'] div.og-text {
    padding: 13px 12px 0 20px;
    height: 90px;
  }

  #article-view figure[data-ke-type='opengraph'] div.og-text p.og-title {
    font-size: 16px;
    -webkit-line-clamp: 1;
  }

  #article-view figure[data-ke-type='opengraph'] div.og-text p.og-desc {
    display: none;
  }

  #article-view figure[data-ke-type='opengraph'] div.og-text p.og-host {
    bottom: 10px;
  }
}

/* 비디오 첨부 */
#article-view figure[data-ke-type='video'] {
  display: block;
  table-layout: fixed;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  color: #bdbdbd;
  font-size: 16px;
  line-height: 30px;
}

#article-view figure[data-ke-type='video'][data-ke-style='alignLeft'] {
  text-align: left;
}

#article-view figure[data-ke-type='video'][data-ke-style='alignCenter'] {
  margin: 20px auto 0;
  text-align: center;
}

#article-view figure[data-ke-type='video'][data-ke-style='alignRight'] {
  text-align: right;
  margin-left: auto;
}

#article-view figure[data-ke-type='video'] img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}

#article-view figure[data-ke-type='video'][data-video-host] iframe {
  margin: 0px;
  display: block;
}

#article-view figure[data-ke-type='video']>iframe[width='0'][height='0'] {
  width: 860px;
  height: 484px;
  max-width: 100%;
}

#article-view pre {
  font-size: 13px;
  font-family: "IBM Plex Mono", Consolas, SF Mono, Menlo, Monaco, monospace;
  border: solid 1px #ebebeb;
  line-height: 1.4;
  background: #FCFCFC; 
}

#article-view pre code {
  transform: scale(0.98);
  transition: opacity 0.2s ease, transform 0.2s ease;
  opacity: 0;
}

/* 코드 블럭 */
#article-view pre code.hljs {
  font-size: 13px;
  /*padding: 20px;*/
  font-family: "IBM Plex Mono", Consolas, SF Mono, Menlo, Monaco, monospace;
  border: solid 1px #ebebeb;
  line-height: 1.4;
  overflow: auto;
  background: #FCFCFC;
  opacity: 1;
  transform: scale(1);
}

#article-view pre code.hljs span+span{
  visibility: visible !important;
}


/* 접은 글 */
#article-view .moreless-content :first-child {
  margin-top: 0;
  margin-bottom: 0;
}

#article-view div[data-ke-type='moreLess'] .moreless-content {
  display: none;
}

#article-view div[data-ke-type='moreLess'].open .moreless-content {
  display: block;
}

#article-view div[data-ke-type='moreLess'] .btn-toggle-moreless {
  color: #4E9BD2;
  font-size: 15px;
  line-height: 26px;
  font-family: Pretendard-Regular, sans-serif;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
}

/* 리스트 */
#article-view ul li,
#article-view ol li {
  margin: 0 0 3px 22px;
  line-height: 1.7;
}

#article-view ul,
#article-view ol {
  margin: 14px auto 24px;
  padding: 0 0 0 10px;
}

/* 이모티콘 */
#article-view figure[data-ke-type=emoticon][data-ke-align=alignCenter] {
  text-align: center;
}

#article-view figure[data-ke-type=emoticon][data-ke-align=alignLeft] {
  text-align: left;
}

#article-view figure[data-ke-type=emoticon][data-ke-align=alignRight] {
  text-align: right;
}

/* 지도 */
#article-view figure[data-ke-type='map'],
#article-view iframe[data-ke-type='map'] {
  display: block;
  margin: 0 auto;
}

/* 첨부: 이미지 슬라이드 */
#article-view figure.imageslideblock {
  clear: both;
  position: relative;
  font-size: 0;
  outline: 0 none;
}

#article-view figure.imageslideblock .btn {
  display: none;
  outline: none;
}

#article-view figure.imageslideblock.ready .btn {
  display: inline-block;
}

#article-view figure.imageslideblock.ready .mark {
  opacity: 1;
}

#article-view figure.imageslideblock div.image-container {
  position: relative;
  min-width: 480px;
  max-width: 100%;
  min-height: 300px;
  max-height: 860px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto;
}

#article-view figure.imageslideblock div.image-container span.image-wrap {
  display: none;
}

#article-view figure.imageslideblock div.image-container span.image-wrap.selected {
  display: inline;
}

#article-view figure.imageslideblock div.image-container img {
  max-width: 100%;
  max-height: 100%;
}

#article-view figure.imageslideblock div.image-container .btn {
  position: absolute;
  border: 0;
  background: transparent;
  width: 60px;
  height: 60px;
  top: 50%;
  margin-top: -20px;
}

#article-view figure.imageslideblock div.image-container .btn-prev {
  left: 0;
}

#article-view figure.imageslideblock div.image-container .btn-next {
  right: 0;
}

#article-view figure.imageslideblock div.image-container:hover .btn span {
  opacity: 0.3;
}

#article-view figure.imageslideblock div.image-container .btn span {
  background-image: url('https://t1.daumcdn.net/tistory_admin/static/manage/post-editor/img_editor_content.svg');
  text-indent: -10000px;
  overflow: hidden;
  width: 40px;
  height: 40px;
  opacity: 0;
  transition: opacity ease-in-out 0.2s;
  display: inline-block;
}

#article-view figure.imageslideblock div.image-container .btn:hover span {
  opacity: 1;
}

#article-view figure.imageslideblock div.image-container .btn .ico-prev {
  background-position: -220px 0;
}

#article-view figure.imageslideblock div.image-container .btn .ico-next {
  background-position: -260px 0;
}

#article-view figure.imageslideblock div.mark {
  display: block;
  height: 44px;
  text-align: center;
  opacity: 0;
  transition: opacity ease-in-out 0.2s;
}

#article-view figure.imageslideblock div.mark span {
  width: 30px;
  height: 4px;
  display: inline-block;
  margin: 20px 1px;
  background-color: #d6d6d6;
  text-indent: -10000px;
  overflow: hidden;
  cursor: pointer;
}

#article-view figure.imageslideblock div.mark span:first-child {
  background-color: #000;
  margin-left: 0;
}

#article-view figure.imageslideblock div.mark span:last-child {
  margin-right: 0;
}

#article-view figure.imageslideblock figcaption {
  text-align: center;
  color: #666;
  font-size: 14px;
}

#article-view figure.imageslideblock.alignLeft {
  text-align: left;
}

#article-view figure.imageslideblock.alignCenter {
  margin: 0 auto 20px;
  text-align: center;
}

#article-view figure.imageslideblock.alignRight {
  text-align: right;
  margin-left: auto;
}

@media (max-width: 600px) {
  #article-view figure.imageslideblock div.image-container {
    min-width: 100%;
    width: 100%;
    max-height: 100%;
  }

  #article-view figure.imageslideblock div.image-container .btn span {
    opacity: 0.3;
  }
}

/* 구 에디터 속성 */
.btn_more, .btn_less {
  border: 0;
  background: transparent;
  display: block;
  height: 21px;
  margin: 20px 0;
  font-size: 14px;
  line-height: 14px;
  color: #888;
  position: relative;
  width: 100%;
  text-align: left;
}

.btn_less::before,
.btn_more::before {
  content: "...";
  display: inline-block;
  padding-right: 5px;
  font-size: 14px;
  line-height: 6px;
  vertical-align: top;
}

.box-timeline-content {
  word-break: break-all;
}
```

```html
<!DOCTYPE html>
<html lang="ko" class="">

<head>
  <title>[##_page_title_##] :: [##_title_##]</title>
  <meta name="title" content="[##_page_title_##] :: [##_title_##]" />
  <meta charset="utf-8" />
  <meta name="viewport"
    content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
  <meta name="naver-site-verification" content="8a2d0b3aa0bc953b22153b852f7e2fccd5ebec48" />

  <link rel="alternate" type="application/rss+xml" title="[##_title_##]" href="[##_rss_url_##]" />

  <link rel="stylesheet" href="./style.css" />
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css">
  <!--[if IE 7]>
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome-ie7.min.css">
<![endif]-->
  <link href="./images/jquery.mCustomScrollbar.min.css" rel="stylesheet">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">

<script>
    window.addEventListener('DOMContentLoaded', function() {
        var totalText = document.querySelector('.tt_category .link_tit .c_cnt');
        
        if (totalText) {
            var totalCount = totalText.innerText.replace(/[^0-9]/g, '');
            document.getElementById('all-count').innerText = totalCount;
        }
    });
</script>

<script>
(function() {
    document.documentElement.classList.add('more-loading');

    const selectors = '.entry-content, .article_view, .inner_index, .tt_article_useless_p_margin';

    function applyMoreLess(contentArea) {
        if (!contentArea || contentArea.classList.contains('moreless-ready')) return;

        const pKeywordRegex = /<p[^>]*>\s*\[\[more\]\]\s*<\/p>/i;
        const html = contentArea.innerHTML;

        if (pKeywordRegex.test(html)) {
            const parts = html.split(pKeywordRegex);
            contentArea.innerHTML = parts[0] + 
                '<div class="custom-moreless-wrapper">' +
                '<a style="font-size:14px;" href="javascript:void(0)" class="custom-moreless-btn" onclick="revealContent(this)">Read More &raquo;</a>' +
                '<div class="custom-moreless-content" style="display:none;">' + 
                parts.slice(1).join('') + 
                '</div></div>';
        }
        
        contentArea.classList.add('moreless-ready');
    }

    window.revealContent = function(btn) {
        const content = btn.nextElementSibling;
        if (content) {
            content.style.display = 'block';
            btn.remove();
        }
    };

    function processAllTargets() {
        const targets = document.querySelectorAll(selectors);
        if (targets.length > 0) {
            targets.forEach(target => applyMoreLess(target));
            document.documentElement.classList.remove('more-loading');
        }
    }

    const observer = new MutationObserver(function(mutations) {
        processAllTargets();
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });

    processAllTargets();
    
    setTimeout(function() {
        document.documentElement.classList.remove('more-loading');
        processAllTargets();
    }, 1000); 
})();
</script>

</head>

<body id="[##_body_id_##]">      
  <s_t3>
    <div id="wrap">
    <div style="height:40px;background:#607D8B;color:#ffffff; line-height:40px; text-align:center;
       position: sticky; top: 0; z-index: 100;">
      <span style="font-size:16px;">
        <a style="color:#F0F0F0" href="/">DEVSIGHT.kr</a>
      </span>
    </div>

    <div id="sidebar">      
     <div class="blank" style="height:0px;"></div>
   
      <div style="height:40px;background:#607D8B;line-height:40px; text-align:center;">
        <span style="font-size:16px;">
          <a style="color:#F0F0F0" href="/">DEVSIGHT.kr</a>
        </span>
      </div>

        <div style="text-align:center; padding-top:0px;">
          <a href="/">
            <img style="max-width:70%;" src="https://tistory1.daumcdn.net/tistory/8670674/skin/images/msj3.png">
          </a>  
        </div>
    
        <!-- <h1><a href="[##_blog_link_##]">[##_title_##]</a></h1> -->
        <h1 style="font-size:13px;">Software Engineer / Developer<br>
            <center style="margin-top:4px;">
               <a href="https://github.com/debugjo" target="_blank" style="background-color: transparent !important; text-decoration: none !important; border: none !important; display: inline-block; padding: 0 !important; line-height: 0 !important;">
                 <img src="https://img.shields.io/badge/Github-DebugJO-blue" alt="Static Badge" style="border: none !important; display: block;">
               </a>
               <a href="mailto:msjo@devsight.kr" style="background-color: transparent !important; text-decoration: none !important; border: none !important; display: inline-block; padding: 0 !important; line-height: 0 !important;">
                 <img src="https://img.shields.io/badge/@-msjo@devsight.kr-1199A6" alt="Email" style="border: none !important; display: block;">
               </a>
               <br>
             </center>       
        </h1>
        <hr style="text-align:left; margin-left:24px; margin-top:4px; width:248px;">

        <s_sidebar>
          <s_sidebar_element>
            <div class="widget category"> 
             <span style="margin-left:26px;color:#607D8B;font-weight:bold;">Ξ Category&nbsp;&nbsp;<span style="font-size:12px;color:#333;font-weight:normal;">(</span><span id="all-count" style="font-size:12px;color:#333;font-weight:normal;"></span><span style="font-size:12px;color:#333;font-weight:normal;">)</span></span>
              [##_category_list_##]
            </div>
           <!-- <hr style="text-align:left; margin-left:20px; margin-top:30px; width:86%"> -->           
          </s_sidebar_element>

          <s_sidebar_element>
            <div class="widget menu"> <!-- Blog Menu -->                        
            <span style="margin-left:26px;color:#607D8B;font-weight:bold;">Ξ Menu</span>          
              [##_blog_menu_##]
            </div>
            <!-- <hr style="text-align:left; margin-left:20px; margin-top:30px; width:86%"> -->
          </s_sidebar_element>

          <!--
          <s_sidebar_element> 
            <s_rct_notice>
              <div class="widget">
                <ul>
                  <s_rct_notice_rep>
                    <li>
                      <a href="[##_notice_rep_link_##]"
                        data-tiara-action-name="블로그공지_클릭"
                        data-tiara-action-kind="ClickContent"
                        data-tiara-copy="[##_notice_rep_title_##]"
                        data-tiara-click_url="[##_blog_link_##][##_notice_rep_link_##]"
                        data-tiara-name="[##_notice_rep_title_##]"
                        data-tiara-provider="[##_title_##]"
                        data-tiara-plink="[##_notice_rep_link_##]"
                        data-tiara-id="[##_notice_rep_link_##]"
                      >[##_notice_rep_title_##]</a>
                    </li>
                  </s_rct_notice_rep>
                </ul>
              </div>
            </s_rct_notice>
          </s_sidebar_element>
          -->

          <!-- Recent Comments
          <s_sidebar_element>
            <div class="widget"> 
              <ul id="recentComments">
                <s_rctrp_rep>
                  <li><a href="[##_rctrp_rep_link_##]"
                      title="[##_rctrp_rep_name_##]〃[##_rctrp_rep_time_##]">[##_rctrp_rep_desc_##]</a></li>
                </s_rctrp_rep>
              </ul>
            </div>
          </s_sidebar_element>
          -->

          <!--Links
          <s_sidebar_element> 
            <div class="widget">
              <ul>
                <s_link_rep>
                  <li><a href="[##_link_url_##]" target="_blank">[##_link_site_##]</a></li>
                </s_link_rep>
              </ul>
            </div>
          </s_sidebar_element>
          -->

          <!--
          <s_sidebar_element> 
            <div class="widget counter text-center">
              <span class="yesterday">[##_count_yesterday_##]</span> /
              <span class="today">[##_count_today_##]</span> /
              <span class="total">[##_count_total_##]</span>
            </div>
          </s_sidebar_element>
          -->

          <s_sidebar_element> <!-- Search -->
          <hr style="text-align:left; margin-left:20px; margin-top:20px; width:250px;">
            <div class="widget search text-center" style="margin-top:20px;text-align:left;margin-left:20px;">
              <s_search>
                <!-- <label for="[##_search_name_##]" class="screen_out">블로그 내 검색</label> -->
                <span style="margin-top:10px;color:#607D8B;font-weight:bold;">Ξ 검색&nbsp;</span>
                <input id="[##_search_name_##]" class="search" style="padding:4px; width:180px; border: 1px solid #ccc" placeholder="" type="text"
                  name="[##_search_name_##]" value="[##_search_text_##]"
                  onkeypress="if (event.keyCode == 13) { [##_search_onclick_submit_##] }" />
              </s_search>
            </div>

            
            <div id="body" class="tag" style="line-height:24px;padding:20 0 20 0;border:0px;margin-top:0px;">
              <s_tag_rep><a href="[##_tag_link_##]" class="[##_tag_class_##]">#[##_tag_name_##]</a></s_tag_rep>
              
              <hr style="text-align:left;margin-left:4px; margin-top:10px;width:93%">
            
            <div  style="text-align:left;margin-left:58px;margin-top:10px;margin-bottom:20px;"> 
              <span style="font-size:12px;color:#777">Ⓒ2018 devsight.kr • MsJ.</span>   
            </div>
            </div>
    
          </s_sidebar_element>
        </s_sidebar>      
        <div class="blank" style="margin-bottom:0px;height:0px;"></div>
      </div>

      <div id="content">     
        <div id="content-inner">   
        <button id="top-btn" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;">Top</button>         
          <!--
          <s_tag>
            <div id="head">
              <h2>Tag</h2>
            </div>

            <div id="body" class="tag">
              <s_tag_rep><a href="[##_tag_link_##]" class="[##_tag_class_##]">#[##_tag_name_##]</a></s_tag_rep>
            </div>
          </s_tag>
          -->
          
          <!--
          <s_local>
            <div id="head">
              <h2>Local</h2>
            </div>
            <div id="body" class="local">
              <s_local_spot_rep>
                <div class="spot" style="margin-left: [##_local_spot_depth_##]px">[##_local_spot_##]</div>
              </s_local_spot_rep>
              <s_local_info_rep>
                <div class="info" style="margin-left: [##_local_info_depth_##]px"><a
                    href="[##_local_info_link_##]">[##_local_info_title_##]</a></div>
              </s_local_info_rep>
            </div>
          </s_local>
          -->

          <s_list>                 
            <div id="head">          
              <h2 style="margin-bottom:20px;">[##_list_conform_##]</h2>
            </div>            
            <div id="body" class="list">                                    
              <ul>
                <s_list_rep>
                  <li>
                    <a href="[##_list_rep_link_##]"
                      data-tiara-action-name="블로그글_클릭"
                      data-tiara-action-kind="ClickContent"
                      data-tiara-copy="[##_list_rep_title_text_##]"
                      data-tiara-image="[##_list_rep_thumbnail_url_##]"
                      data-tiara-click_url="[##_blog_link_##][##_list_rep_link_##]"
                      data-tiara-name="[##_list_rep_title_text_##]"
                      data-tiara-provider="[##_title_##]"
                      data-tiara-plink="[##_list_rep_link_##]"
                      data-tiara-id="[##_list_rep_link_##]"
                    >[##_list_rep_title_##]</a>
                     <span class="date">[##_article_rep_simple_date_##]</span> 
                    <!--
                    <span class="date">[##_list_rep_regdate_##]</span> 
                    <span class="cnt">[##_list_rep_rp_cnt_##]</span>
                    -->
                    <div class="clear"></div>
                  </li>
                </s_list_rep>
              </ul>
            </div>
          </s_list>

          <!--
          <s_notice_rep>
            <div id="head">
              <h2><a href="[##_article_rep_link_##]">[##_notice_rep_title_##]</a></h2>
              <div class="date">[##_notice_rep_date_##]</div>
            </div>

            <div id="body" class="entry">
              <div class="tag_label">
                <s_tag_label>
                  <span>[##_tag_label_rep_##]</span>
                  <div class="clear"></div>
                </s_tag_label>
              </div>

              <div class="article" id="article-view">
                [##_notice_rep_desc_##]
              </div>
            </div>
          </s_notice_rep>
          -->

          <s_page_rep>
            <div id="head">
              <h2 style="margin-bottom:20px;"><a href="[##_article_rep_link_##]">[##_article_rep_title_##]</a></h2>
              <div class="date">&nbsp;[##_article_rep_simple_date_##]&nbsp;MsJ&nbsp;</div>
            </div>

            <div id="body" class="entry">           
              <div class="tag_label">
                <s_tag_label>
                  <span>[##_tag_label_rep_##]</span>
                  <div class="clear"></div>
                </s_tag_label>
              </div>

              <div class="article" id="article-view">
                [##_article_rep_desc_##]
              </div>
            </div>
          </s_page_rep>

          <s_article_protected>
            <div id="head">
              <h2><a href="[##_article_rep_link_##]">[##_article_rep_title_##]</a></h2>
              <div class="date">[##_article_rep_date_##]</div>
            </div>

            <div id="body" class="entry protected">
              <p><i class="icon-unlock-alt"></i></p>
              <p><input type="password" maxlength="30" id="[##_article_password_##]" name="[##_article_password_##]"
                  value="" onkeydown="if (event.keyCode == 13)[##_article_dissolve_##]" /></p>
              <p><input type="button" class="submit" value="Unlock" onclick="[##_article_dissolve_##]" /></p>
            </div>
          </s_article_protected>

          <s_article_rep>
            <div id="head">
              <h2 style="margin-bottom:20px;"><a href="[##_article_rep_link_##]">[##_article_rep_title_##]</a></h2>
              <!-- <div class="post-meta"> -->
              <!--
                <span class="author" style="float: right;margin-right:10px;margin-top:20px;">[##_article_rep_author_##]</span>
                <span class="meta-date" style="float: right;margin-top:20px;">&nbsp;[##_article_rep_simple_date_##]&nbsp;MsJ</span>
              -->  
                [##_s_ad_isolation_##]
              <!-- </div> -->
              <!-- <div class="date">[##_article_rep_date_##]</div> -->
              <div class="date">&nbsp;[##_article_rep_simple_date_##]&nbsp;MsJ&nbsp;</div>
            </div>

            <div id="body" class="entry">          
              <div class="tag_label">
                <s_tag_label>
                  <span>[##_tag_label_rep_##]</span>
                  <div class="clear"></div>
                </s_tag_label>
              </div>

              <div class="article" id="article-view">              
                [##_article_rep_desc_##]
              </div>
              <s_ad_div>
                <div class="admin">
                  <a href="[##_s_ad_m_link_##]">Modify</a>
                  <span class="line">|</span>
                  <a href="#" onclick="[##_s_ad_d_onclick_##]">Delete</a>
                </div>
              </s_ad_div>

              <!--
              <s_rp>
                [##_comment_group_##]
              </s_rp>
              -->
            </div>
          </s_article_rep>

          <!--
          <s_guest>
            <div id="body" class="entry">
              <div id="communicate">
                [##_guestbook_group_##]
              </div>
            </div>
          </s_guest>
          -->

          <div id="paging">
            <s_paging>
              <a [##_prev_page_##] class="prev [##_no_more_prev_##]">
                PREV
                <span class="screen_out">
                  이전
                </span>
              </a>
              <s_paging_rep><a class="numbox" [##_paging_rep_link_##]>[##_paging_rep_link_num_##]</a></s_paging_rep>
              <a [##_next_page_##] class="next [##_no_more_next_##]">
                NEXT
                <span class="screen_out">
                  다음
                </span>
              </a>
            </s_paging>
          </div>

          <!--
          <s_sidebar_element>
            <div id="recent-post">
              <h4><a href="/category">+ Recent posts</a></h4>
              <ul>
                <s_rctps_rep>
                  <li class="box">
                    <a href="[##_rctps_rep_link_##]" class="thumb">
                      <img loading="lazy" src="<s_rctps_rep_thumbnail>[##_rctps_rep_thumbnail_##]</s_rctps_rep_thumbnail>"
                        onerror="this.src='./images/blank2.png'" alt="post image" />
                      <span class="title">[##_rctps_rep_title_##]</span>
                    </a>
                  </li>
                </s_rctps_rep>
                <div class="clear"></div>
              </ul>
            </div>
          </s_sidebar_element>
          -->

          <div class="clear"></div>

          <div id="foot">
              <center style="color:#777;font-size:12px;">
                Ⓒ2018 devsight.kr • MsJ.
              </center>
            <!--
            <div class="powered">Powered by <a href="http://www.tistory.com/" target="_blank">Tistory</a>, Designed by
              <a href="http://wallel.com/" target="_blank">wallel</a>
            </div>
            -->
            
            <!--
            <div class="social">
              <a href="[##_rss_url_##]" target="_blank">Rss Feed</a> and
              <a href="https://www.twitter.com/" target="_blank">Twitter</a>,
              <a href="https://www.facebook.com/" target="_blank">Facebook</a>,
              <a href="https://www.youtube.com/" target="_blank">Youtube</a>,
              <a href="https://plus.google.com/" target="_blank">Google+</a>
            </div>
            -->
          </div>
        </div> <!-- content-inner close -->
      </div> <!-- content close -->
    </div> <!-- wrap close -->
  </s_t3>

  <div id="sidebar-toggle"><i class="icon-reorder"></i></div>
  <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
  <script src="./images/common.js"></script>
  <script src="./images/jquery.mCustomScrollbar.concat.min.js"></script>
  <script>
    $(document).ready(function () {
      if ($('body').width() > "960") {
        $("#sidebar").mCustomScrollbar({
          theme: "dark-thin",
          autoHideScrollbar: "true"
        });
      };
    });
  </script>
</body>

</html>
```
