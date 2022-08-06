let fenixstyling = `<style type="text/css">
.fenix-error-text{
    color:red;
}
	.fixd-delivery{
		text-align:left;
		font-weight:normal;
	}
   .allestimates{
   	position: absolute;
    width: 300px;
    z-index: 1;
    background: #fff;
    border: 1px solid #eee;
    bottom: 60px;
    right: 0px;
   }
    
   

   .fenix-delivery-estimate>.pdpn-shiptoday>svg{
   	position: relative;
    margin-right: 4px;
    width:20px;
    top:5px;
   }

   .fenix-provided-options table.table.table-striped{
   	margin-bottom:0px;
   }

   .closeshipping {
    position: absolute;
    right: 10px;
    top: 7px;
    width: 20px;
    height: 20px;
    opacity: 1;
    cursor: pointer;
}

.fenix-provided-options table{font-size:14px;width:100%;color:rgba(0, 0, 0, 0.8);border-spacing:0px;margin-bottom:0px;}
.fenix-provided-options table thead th{padding:5px 0px 7px;}
.fenix-provided-options table tr td,.fenix-provided-options table tr th{font-weight:normal;text-align:center;padding:5px;border:1px solid #ddd;}
.fenix-provided-options table thead{border-bottom:1px solid #ccc;}
.fixd-delivery #fenix-pdp-estimate div{position:relative;line-height:1.5rem}
.fixd-delivery #fenix-pdp-estimate div a{
    outline:none !important;
    color:#000;
}
.fenix-showalltitle{font-size:12px;padding:10px;padding-bottom:0px;}
.allestimates{width:300px;display:inline-block;position:absolute!important;background:#fff;border:1px solid #d1d1d1;left:100px;bottom:25px;z-index:99;box-shadow:0px 4px 4px #b6b6b6;}
.fenix-logo{padding:10px;font-size:10px!important;padding-top:0px;top:5px;}
.fenix-logo svg{position:relative;top:6px;}
.fenix-provided-options tr:nth-child(odd){background-color:#f9f9f9;}
.fenix-provided-options tr:nth-child(even){background-color:#ffffff;}
.closeshipping{position:absolute;right:10px;top:7px;width:20px;height:20px;opacity:1;cursor:pointer;}
.closeshipping:hover{opacity:1;}
.closeshipping:before,.closeshipping:after{position:absolute;left:10px;content:' ';height:20px;width:2px;background-color:#333;}
.closeshipping:before{transform:rotate(45deg);}
.closeshipping:after{transform:rotate(-45deg);}

.fenix-provided-options th{background-color:#005699!important;color:#ffffff!important;}

.fixd-delivery #change-zip-container a.btn{color:#fff !important;font-weight:600;line-height:30px;text-decoration:none;text-transform:uppercase;display:inline-block;padding:5px;vertical-align:top;width:150px;outline:none;text-align:center;background-color:#000000!important;font-size: .6875rem;letter-spacing: .12em;}

.fixd-delivery #change-zip-container input{width:30%;margin-left:0!important;margin-top:0!important;font-size:15px;height:40px;padding-left:10px;display:inline-block;font-weight:normal;outline:none !important;font-size: .875rem;}


.fixd-delivery #change-zip-container{
    display:none;
    margin-top:5px;
}

#change-zip{
    outline:none;
}


.fenix-cart-delivery-msg{
  margin-top:5px;
  margin-bottom:5px;
}

.fenix-cart-delivery-msg svg{
  margin-right:4px;
}

@media screen and (max-width: 480px) {
    .fixd-delivery{
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 10px;
    }

    .allestimates{
        left: 0px;
        width: 100%;
    }
}

#fenix-error-message{
    margin-top:5px;
}

.fixd-delivery #fenix-pdp-estimate b{
    color:#005699;
    font-weight:600;
}

#view-all-shipping{
    border-bottom:1px solid #000;
}

#zipcode-holder strong{
    font-weight:bold;
}

.fenix-store-response-text svg{
    width: 18px;
    position: relative;
    top: 6px;
}

.fenix-store-response-text{
    position: relative;
    line-height: 1.5rem;   
}

#show-details-link{
    color:#000;
    border-bottom:1px solid #000;
}


.fenix-fixd-delivery svg {
    vertical-align: middle;
}

.fenix-provided-options-shop {
    z-index: 999;
}

.fenix-provided-options-shop table td.fenix-center {
    text-align: center;
}

.store-info-address .fenix-store-address {
    margin-top: 0px;
    line-height: normal;
    margin-bottom:0px;
}

.store-info-address .fenix-store-city {
    line-height: normal;
    margin-top: 0px;
}

.fenix-right-align {
    float: right;
}

.fenix-provided-options-shop {
    box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
}

.fenix-provided-options-shop table {
    width: 98% !important;
    border: 1px solid #ccc;
    margin-top: 5px;
    margin-bottom: 15px;
    display: inline-table !important;
    min-width: 325px;
}

.fenix-provided-options-shop table td {
    border: 1px solid #ddd;
    font-weight: bolder;
    text-align: left;
    padding: 4px;
}

.fenix-provided-options-shop table thead th {
    color: white;
    background-color: #005699;
    font-weight: bold;
    padding: 4px;
    border: solid 2px #005699;
    text-align: center;
}

.fenix-provided-options-shop {
    position: absolute;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(238, 238, 238);
    padding: 10px;
    font-size: 12px;
    bottom: 30px;
}

.popuptext a {
    cursor: pointer;
}

.store-info-address .fenix-store-city {
    margin-bottom: 0px;
    font-size: 14px;
    font-weight: bold;
}

.fenix-provided-options-shop:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
}

.store-divs{
    position:relative;
}

.shipping-options-title{
    margin-top:0px;
}

</style>`;


// FIRST GET YOUR tenantId and delEstUrl from the following URL 
// Which would remain to constant 
// GET Request : https://delest-api.fenixcommerce.com/fenixdelest/api/v1/{YOUR_SHOPIFY_STORE_URL}/storeinfo
// Version 1.1
let sessionId = Math.random().toString(36).substr(2, 25); // Unique request 
let zipcode = getCookie('location'); // getzipcode from Cookies
let fenixcountry = getCookie('fenixcountry'); // getzipcode from Cookies
let truck = `<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4394 5.69627C22.2092 5.20095 21.8533 4.78434 21.4122 4.49369C20.971 4.20304 20.4623 4.05 19.9437 4.05193H15.9807V0.872088C15.9807 0.801317 15.9676 0.731238 15.9422 0.665856C15.9168 0.600474 15.8795 0.541068 15.8326 0.491031C15.7856 0.440994 15.7299 0.401307 15.6685 0.374235C15.6072 0.347163 15.5414 0.333238 15.475 0.333253H3.16636C3.09988 0.333091 3.03402 0.346908 2.97255 0.373914C2.91109 0.40092 2.85522 0.440585 2.80816 0.490637C2.76109 0.540689 2.72375 0.600144 2.69828 0.6656C2.6728 0.731055 2.65969 0.801225 2.65969 0.87209C2.65969 0.942955 2.6728 1.01312 2.69828 1.07858C2.72375 1.14404 2.76109 1.20349 2.80816 1.25354C2.85522 1.30359 2.91109 1.34326 2.97255 1.37027C3.03402 1.39727 3.09988 1.41109 3.16636 1.41093H14.9694V14.3095H9.77285C9.65579 13.6676 9.33291 13.0892 8.85957 12.6733C8.38623 12.2574 7.79191 12.0299 7.17849 12.0299C6.56506 12.0299 5.97074 12.2574 5.4974 12.6733C5.02406 13.0892 4.70119 13.6676 4.58412 14.3095H2.90029C2.83381 14.3093 2.76795 14.3231 2.70648 14.3501C2.64502 14.3772 2.58915 14.4168 2.54209 14.4669C2.49502 14.5169 2.45768 14.5764 2.43221 14.6418C2.40673 14.7073 2.39362 14.7775 2.39362 14.8483C2.39362 14.9192 2.40673 14.9894 2.43221 15.0548C2.45768 15.1203 2.49502 15.1797 2.54209 15.2298C2.58915 15.2798 2.64502 15.3195 2.70648 15.3465C2.76795 15.3735 2.83381 15.3873 2.90029 15.3872H4.58412C4.70122 16.029 5.0241 16.6074 5.49744 17.0233C5.97077 17.4392 6.56508 17.6666 7.17849 17.6666C7.79189 17.6666 8.3862 17.4392 8.85953 17.0233C9.33287 16.6074 9.65576 16.029 9.77285 15.3872H16.6218C16.7389 16.029 17.0618 16.6074 17.5351 17.0233C18.0085 17.4392 18.6028 17.6666 19.2162 17.6666C19.8296 17.6666 20.4239 17.4392 20.8972 17.0233C21.3705 16.6074 21.6934 16.029 21.8105 15.3872H23.4944C23.5608 15.3872 23.6265 15.3732 23.6878 15.3462C23.7492 15.3191 23.8049 15.2794 23.8519 15.2294C23.8988 15.1793 23.9361 15.1199 23.9615 15.0546C23.9869 14.9892 24 14.9191 24 14.8483V9.14962C23.9999 9.06596 23.9816 8.98346 23.9465 8.90866L22.4394 5.69627ZM7.17849 16.5889C6.8555 16.589 6.53975 16.4869 6.27118 16.2957C6.0026 16.1044 5.79326 15.8326 5.66964 15.5145C5.54601 15.1964 5.51365 14.8464 5.57664 14.5088C5.63963 14.1711 5.79515 13.8609 6.02353 13.6175C6.2519 13.374 6.54288 13.2082 6.85966 13.141C7.17645 13.0739 7.5048 13.1083 7.8032 13.2401C8.10161 13.3718 8.35666 13.595 8.53609 13.8812C8.71553 14.1675 8.8113 14.504 8.81129 14.8483C8.8108 15.3098 8.63862 15.7522 8.33252 16.0785C8.02642 16.4048 7.61139 16.5884 7.17849 16.5889ZM19.9437 5.12962C20.2744 5.12839 20.5988 5.22596 20.8801 5.41128C21.1614 5.59659 21.3883 5.86223 21.5352 6.17805L22.9887 9.27688V9.64732H15.9807V5.12962H19.9437ZM19.2162 16.5889C18.8932 16.589 18.5774 16.4869 18.3089 16.2957C18.0403 16.1044 17.8309 15.8326 17.7073 15.5145C17.5837 15.1964 17.5513 14.8464 17.6143 14.5088C17.6773 14.1711 17.8328 13.8609 18.0612 13.6175C18.2896 13.374 18.5806 13.2082 18.8973 13.141C19.2141 13.0739 19.5425 13.1083 19.8409 13.2401C20.1393 13.3718 20.3943 13.595 20.5738 13.8812C20.7532 14.1675 20.849 14.504 20.849 14.8483C20.8485 15.3098 20.6763 15.7522 20.3702 16.0785C20.0641 16.4048 19.6491 16.5884 19.2162 16.5889ZM21.8105 14.3095C21.6935 13.6676 21.3706 13.0892 20.8973 12.6733C20.4239 12.2574 19.8296 12.0299 19.2162 12.0299C18.6027 12.0299 18.0084 12.2574 17.5351 12.6733C17.0617 13.0892 16.7389 13.6676 16.6218 14.3095H15.9807V10.725H22.9887V14.3095H21.8105ZM1.92902 4.44411H9.16389C9.23037 4.44395 9.29623 4.45777 9.3577 4.48477C9.41916 4.51178 9.47503 4.55144 9.52209 4.6015C9.56916 4.65155 9.6065 4.711 9.63197 4.77646C9.65745 4.84191 9.67056 4.91208 9.67056 4.98295C9.67056 5.05382 9.65745 5.12398 9.63197 5.18944C9.6065 5.2549 9.56916 5.31435 9.52209 5.3644C9.47503 5.41445 9.41916 5.45412 9.3577 5.48113C9.29623 5.50813 9.23037 5.52195 9.16389 5.52179H1.92902C1.86254 5.52195 1.79668 5.50813 1.73521 5.48113C1.67375 5.45412 1.61788 5.41445 1.57082 5.3644C1.52376 5.31435 1.48642 5.2549 1.46094 5.18944C1.43546 5.12398 1.42235 5.05382 1.42235 4.98295C1.42235 4.91208 1.43546 4.84191 1.46094 4.77646C1.48642 4.711 1.52376 4.65155 1.57082 4.6015C1.61788 4.55144 1.67375 4.51178 1.73521 4.48477C1.79668 4.45777 1.86254 4.44395 1.92902 4.44411ZM0 8.79289C2.80023e-06 8.72212 0.0130845 8.65204 0.0384979 8.58666C0.0639113 8.52127 0.101159 8.46187 0.148113 8.41183C0.195067 8.3618 0.250808 8.32211 0.312153 8.29504C0.373498 8.26797 0.439246 8.25404 0.50564 8.25406H6.76925C6.83573 8.25389 6.90159 8.26771 6.96305 8.29472C7.02452 8.32172 7.08038 8.36139 7.12745 8.41144C7.17451 8.46149 7.21185 8.52095 7.23733 8.5864C7.2628 8.65186 7.27592 8.72203 7.27592 8.79289C7.27592 8.86376 7.2628 8.93393 7.23733 8.99938C7.21185 9.06484 7.17451 9.12429 7.12745 9.17435C7.08038 9.2244 7.02452 9.26406 6.96305 9.29107C6.90159 9.31807 6.83573 9.33189 6.76925 9.33173H0.50564C0.439245 9.33175 0.373497 9.31782 0.312151 9.29075C0.250806 9.26367 0.195064 9.22399 0.14811 9.17395C0.101156 9.12391 0.0639085 9.0645 0.0384955 8.99912C0.0130826 8.93374 1.74955e-06 8.86366 0 8.79289Z" fill="black"></path></svg>`;
let formchange = false;
function setZipcode(type) {
   const i = "cKGC3jQbSIoXYmI2KtXObugsKfosD9Yr0HnkHhPUu1SM2wQhE0";
   jQuery.ajax(`https://ipapi.co/json?key=${i}`).then(function(i) {
       if (i !== undefined && i !== null && i.postal !== "" && validateZipCode(i.postal)) {
           setCookie('location', i.postal, 14);
           setCookie('fenixcountry', i.country, 14);
           if (type == 'pdp' && $(".fenix-cart-delivery-msg").length ==0 ) {
               getPDPEstimate();
           }
       }
   }, function(e, i) {
       console.log("Locating Client Location failed")
   })
}

function setCookie(cname, cvalue, exdays) {
   const d = new Date();
   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
   let expires = "expires=" + d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
   let name = cname + "=";
   let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(';');
   for (let i = 0; i < ca.length; i++) {
       let c = ca[i];
       while (c.charAt(0) == ' ') {
           c = c.substring(1);
       }
       if (c.indexOf(name) == 0) {
           return c.substring(name.length, c.length);
       }
   }
   return "";
}

function validateZipCode(e) {
   if (e !== undefined && e !== "" && e.length > 3) {
       return true;
   } else {
       return false;
   }
}

function opencloseshowall() {
   jQuery(".allestimates").toggle();
}

function getShippingPopoverTemplate(shippingRows) {
   let popoverTemplate = `<div class="fenix-provided-options">
  <div class="fenix-showalltitle">
  Shipping Options <a href="javascript:void(0)" class="closeshipping" onclick="opencloseshowall()"></a> 
  </div>
          <div class="fenix-logo" style="display: block !important;">Powered by <svg viewBox="0 0 222 48" xmlns="http://www.w3.org/2000/svg" style="width:100px">
<path d="m38.961 33.26h2.5213v-8.4419h6.0623v-2.153h-6.0623v-5.9206h6.2039l0.7366-2.153h-9.4618v18.668z" fill="#9D9D9D"></path>
<path d="m61.823 27.113v-0.6232c0-4.2776-2.0113-6.9688-5.524-6.9688-3.4278 0-5.6657 2.8612-5.6657 6.9405 0 3.8243 2.0396 7.0821 6.4872 7.0821 1.5297 0 3.1445-0.4249 4.3909-1.2181l-0.7648-1.7281c-0.9349 0.5099-2.0397 0.9065-3.3428 0.9065-2.6346 0-4.1926-1.8696-4.221-4.3909h8.6402zm-8.6402-1.8697c0.0284-2.0396 1.1898-3.7393 3.1162-3.7393 2.0113 0 2.9178 1.8696 2.9461 3.7393h-6.0623z" fill="#9D9D9D"></path>
<path d="m64.674 33.26h2.4929v-9.7167c1.1898-1.0198 2.4929-1.813 3.8527-1.813 1.8413 0 2.2946 1.4731 2.2946 3.3711v8.1586h2.4929v-8.9801c0-3.5128-1.9547-4.7592-4.0793-4.7592-1.6997 0-3.2011 0.7932-4.6459 1.983l-0.3116-1.6431h-2.0963v13.399z" fill="#9D9D9D"></path>
<path d="m79.508 33.26h2.4929v-13.399h-2.4929v13.399zm1.2465-16.147c0.9348 0 1.643-0.7082 1.643-1.6147s-0.6799-1.5864-1.643-1.5864c-0.9349 0-1.5864 0.7082-1.5864 1.5864 0 0.9065 0.6515 1.6147 1.5864 1.6147z" fill="#9D9D9D"></path>
<path d="m84.253 33.26h2.7195l3.5411-5.0141 3.5127 5.0141h2.6912l-4.7592-6.7705 4.7876-6.6289h-2.6629l-3.4844 4.9292-3.3995-4.9292h-2.7478l4.7025 6.6855-4.9008 6.7139z" fill="#9D9D9D"></path>
<path d="m112.51 30.172c-1.303 0.7082-2.72 1.2181-4.476 1.2181-4.108 0-6.686-3.0028-6.686-7.3654 0-4.0793 2.607-7.4504 6.856-7.4504 1.87 0 3.314 0.4816 4.646 1.1898v-2.3513c-0.992-0.5382-2.691-0.9915-4.703-0.9915-5.665 0-9.4615 4.3059-9.4615 9.7167 0 5.4674 3.3425 9.4051 9.0655 9.4051 1.756 0 3.597-0.3683 5.467-1.3598l-0.708-2.0113z" fill="#D0D0D0"></path>
<path d="m121.32 33.543c3.852 0 6.373-3.0595 6.373-6.9972 0-3.966-2.549-7.0255-6.345-7.0255-3.853 0-6.374 3.0595-6.374 7.0255 0 3.9377 2.521 6.9972 6.346 6.9972zm0-2.068c-2.352 0-3.768-2.068-3.768-4.9292 0-2.8895 1.416-4.9575 3.796-4.9575 2.351 0 3.768 2.068 3.768 4.9575 0 2.8612-1.417 4.9292-3.796 4.9292z" fill="#D0D0D0"></path>
<path d="m130.54 33.26h2.493v-9.745c1.162-0.9915 2.465-1.7847 3.796-1.7847 1.842 0 2.238 1.4447 2.238 3.3144v8.2153h2.493v-9.0368c0-0.2266-0.028-0.4816-0.028-0.7082 1.161-0.9915 2.464-1.7847 3.796-1.7847 1.841 0 2.238 1.4447 2.238 3.2861v8.2436h2.493v-8.9802c0-3.3994-1.898-4.7592-4.108-4.7592-1.643 0-3.343 0.8216-4.929 2.238-0.652-1.5014-1.926-2.238-3.484-2.238-1.7 0-3.23 0.8499-4.618 1.983l-0.283-1.643h-2.097v13.399z" fill="#D0D0D0"></path>
<path d="m153.52 33.26h2.493v-9.745c1.161-0.9915 2.464-1.7847 3.796-1.7847 1.841 0 2.238 1.4447 2.238 3.3144v8.2153h2.492v-9.0368c0-0.2266-0.028-0.4816-0.028-0.7082 1.162-0.9915 2.465-1.7847 3.796-1.7847 1.842 0 2.238 1.4447 2.238 3.2861v8.2436h2.493v-8.9802c0-3.3994-1.898-4.7592-4.108-4.7592-1.643 0-3.342 0.8216-4.929 2.238-0.651-1.5014-1.926-2.238-3.484-2.238-1.7 0-3.23 0.8499-4.618 1.983l-0.283-1.643h-2.096v13.399z" fill="#D0D0D0"></path>
<path d="m187.05 27.113v-0.6232c0-4.2776-2.011-6.9689-5.524-6.9689-3.428 0-5.666 2.8612-5.666 6.9405 0 3.8244 2.04 7.0822 6.488 7.0822 1.529 0 3.144-0.425 4.391-1.2182l-0.765-1.728c-0.935 0.5099-2.04 0.9065-3.343 0.9065-2.635 0-4.193-1.8697-4.221-4.3909h8.64zm-8.64-1.8697c0.028-2.0396 1.19-3.7394 3.116-3.7394 2.011 0 2.918 1.8697 2.946 3.7394h-6.062z" fill="#D0D0D0"></path>
<path d="m189.9 33.26h2.492v-9.745c1.247-1.2182 2.125-1.7281 3.06-1.7281 0.453 0 0.878 0.1133 1.303 0.34l0.878-2.2097c-0.396-0.2549-1.02-0.3966-1.586-0.3966-1.247 0-2.351 0.4816-3.768 1.983l-0.283-1.643h-2.096v13.399z" fill="#D0D0D0"></path>
<path d="m204.78 33.543c1.7 0 3.286-0.5666 4.278-1.2465l-0.737-1.7564c-0.878 0.4816-1.841 0.9349-3.201 0.9349-2.578 0-4.249-1.7847-4.249-4.9292 0-2.8328 1.671-4.9575 4.419-4.9575 1.303 0 2.323 0.3683 3.229 0.9632v-2.1813c-0.793-0.4533-1.983-0.8499-3.427-0.8499-4.08 0-6.799 3.1728-6.799 7.1672 0 3.796 2.294 6.8555 6.487 6.8555z" fill="#D0D0D0"></path>
<path d="m221.74 27.113v-0.6232c0-4.2776-2.012-6.9689-5.525-6.9689-3.427 0-5.665 2.8612-5.665 6.9405 0 3.8244 2.039 7.0822 6.487 7.0822 1.53 0 3.144-0.425 4.391-1.2182l-0.765-1.728c-0.935 0.5099-2.04 0.9065-3.343 0.9065-2.634 0-4.192-1.8697-4.221-4.3909h8.641zm-8.641-1.8697c0.029-2.0396 1.19-3.7394 3.116-3.7394 2.012 0 2.918 1.8697 2.947 3.7394h-6.063z" fill="#D0D0D0"></path>
<path d="m40.876 37.4-0.0599-0.06c-0.8391-0.9589-2.2776-1.2586-3.2365-0.4195l-0.8991 0.5993-0.0599 0.2398-1.3186 1.1987-0.1798 0.1798c-3.2365 2.5173-7.2522 3.8359-11.568 3.8359-10.669 0-19.239-8.5708-19.239-19.239-0.05994-10.549 8.5707-19.179 19.239-19.179 4.1355 0 7.9114 1.4384 11.088 3.4763 0.06 0.05994 0.06 0.05994 0.1199 0.11987l2.3974 1.858c1.0189 0.7792 2.4574 0.5994 3.1766-0.41952l0.0599-0.05993c0.7792-1.0189 0.5994-2.4574-0.4195-3.1766l-1.0189-0.8391c-4.0756-3.4163-9.4099-5.5141-15.164-5.5141-13.126 0-23.794 10.668-23.794 23.854 0 13.126 10.668 23.734 23.794 23.734 6.3532 0 12.107-2.4574 16.362-6.533l0.4795-0.4195c0.959-0.7792 1.0788-2.2776 0.2397-3.2365z" fill="#D0D0D0"></path>
<path d="m32.783 25.952-14.924 9.9493c-1.3186 0.8391-3.0567 0.4795-3.9558-0.7792-0.8391-1.3186-0.4795-3.0567 0.7792-3.9557l14.924-9.9493c1.3186-0.8391 3.0567-0.4795 3.9558 0.7791 0.899 1.3186 0.5394 3.0568-0.7792 3.9558z" fill="#9D9D9D"></path>
<path d="m30.865 17.501-14.924 9.9493c-1.3186 0.8391-3.0567 0.4795-3.9557-0.7792-0.8391-1.3186-0.4795-3.0567 0.7791-3.9557l14.924-9.9493c1.3185-0.8391 3.0567-0.4795 3.9557 0.7792 0.899 1.3185 0.5394 3.1166-0.7792 3.9557z" fill="#9D9D9D"></path>
</svg></div>
          <table class="table table-striped">
          <thead>
          <tr class="firstrow">
          <th style="border-bottom:0px;font-weight:500">&nbsp; Options</th>
          <th class="" style="border-bottom:0px;font-weight:500">Estimated Time</th>
      </tr>
      </thead>
      <tbody>${shippingRows}</tbody>
      </table>
      </div>
      `;
   jQuery(".allestimates").empty();
   jQuery(".allestimates").html(popoverTemplate);
}



var requestData = {
   "sessionTrackId": sessionId,
   "buyerZipCode": zipcode,
   "pageType": "PDP",
   "monetaryValue": 300,
   "responseFormat": "json",
   "skus": [{
       "sku": "gold-bird-necklace",
       "quantity": 1,
       "skuInventories": [{
            "locationId": "manual",
            "quantity": 1
        }]
   }]
};


function getPDPEstimate(event) {
   requestData = {
       "sessionTrackId": sessionId,
       "buyerAddress": {
           "country": getCookie('fenixcountry'),
           "zipcode": getCookie('location')
       },
       "buyerZipCode": getCookie('location'),
       "pageType": "PDP",
       "monetaryValue": 300,
       "responseFormat": "json",
       "skus": [{
           "sku": "gold-bird-necklace",
           "quantity": 1,

       }]
   };
   if (event) {
       event.preventDefault();
       event.stopImmediatePropagation();
   }
   zipcode = getCookie('location');
   requestData.buyerZipCode = zipcode;
   jQuery('#zipcode-holder').text(zipcode);
   ___fenixRecallApi(requestData);
}



function pincodechange() {
   zipcode = jQuery('#fenix-zip').val();
   if (validateZipCode(zipcode)) {
       setCookie('location', zipcode, 14);
   } else {
       jQuery("#fenix-error-message").show();
       jQuery("#fenix-error-message>.fenix-error-text").text('Please enter valid zipcode.');
   }
   jQuery('#zipcode-holder').text(zipcode);
   requestData.buyerZipCode = zipcode;
   requestData.buyerAddress.zipcode = zipcode;
   ___fenixRecallApi(requestData);
}

function fenixChangeZip() {
   jQuery('#change-zip-container').show();
}


function showStoreinfo(){
    $(".fenix-provided-options-shop").show();
}


// hide div initially
jQuery('#fenix-pdp-estimate').hide();

jQuery(document).ready(function() {

  fenixVariantChange();

  jQuery("#show-details-link").on("click", function(){
    if( jQuery('.fenix-provided-options-shop').css('display') == 'block'){
      jQuery('.fenix-provided-options-shop').hide();
    }else{
      jQuery('.fenix-provided-options-shop').show(); 
    }
  }); 

  jQuery("body").click(function(event) {
    if (event.target.id != "show-details-link") {
      jQuery('.fenix-provided-options-shop').hide();
    }
  });

  // append fenix div if Settings override PDP
  let pdphtml = `${fenixstyling}  <div id="fenix-estimates" class="fixd-delivery" style="display:none;">
           <div class="fenix-delivery-estimate" id="fenix-pdp-estimate" style="display:none;">
              <div id="estimate-text" class="pdpn-shiptoday"></div>
              <div>
                 Ship to: <span id="zipcode-holder" class="pdpn-freeship"></span> (<a id="change-zip" href="javascript:void(0);" onclick="fenixChangeZip();">Change</a>) 
                 <a href="javascript:void(0);" data-toggle="popover" id="view-all-shipping" onclick="opencloseshowall()">View All Shipping Options</a> 
                 <div class="allestimates" style="display:none">
                 </div>
              </div>
           </div>
           <div id="change-zip-container">
              <div>
                 <input placeholder="Enter zipcode" type="text" name="fenix-zip" id="fenix-zip"/>
                 <a href="javascript:void(0)" class="btn btn-tertiary" onclick="pincodechange();">Check Delivery</a>
              </div>
           </div>

           <div id="fenix-error-message">
              <span class="fenix-error-text">Sorry. </span>
           </div>

           <div id="fenix-store-response">
  <div class="fenix-store-response-text">
  <!--?xml version="1.0" standalone="no"?-->
  
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
  <path d="M3675 5106 c-291 -49 -518 -168 -718 -375 -231 -240 -347 -531 -347
  -870 0 -207 39 -379 122 -546 61 -120 1058 -1807 1081 -1828 25 -22 69 -22 96
  1 21 18 1016 1693 1078 1815 52 105 100 260 119 387 94 644 -331 1254 -976
  1401 -112 26 -346 33 -455 15z m361 -161 c694 -112 1105 -840 843 -1494 -17
  -42 -252 -451 -522 -908 -375 -636 -494 -830 -503 -820 -31 34 -972 1643
  -1001 1710 -58 138 -74 216 -80 387 -4 120 -1 175 11 243 110 584 668 977
  1252 882z"></path>
  <path d="M3771 4619 c-389 -51 -672 -371 -671 -761 1 -206 75 -383 225 -533
  162 -161 352 -234 580 -222 194 10 349 81 490 222 102 102 154 183 190 298 81
  253 32 518 -133 722 -159 198 -431 307 -681 274z m279 -185 c187 -59 337 -218
  395 -419 21 -71 24 -210 6 -285 -80 -332 -409 -534 -735 -450 -113 29 -190 73
  -277 160 -128 126 -186 275 -176 450 6 122 34 209 98 304 124 186 326 285 544
  269 39 -3 104 -16 145 -29z"></path>
  <path d="M3769 4216 c-99 -26 -186 -99 -236 -196 -25 -49 -28 -65 -28 -155 0
  -87 3 -107 27 -157 34 -73 103 -142 176 -176 50 -24 69 -27 157 -27 91 0 105
  3 158 30 75 37 149 117 178 193 33 85 32 198 -3 274 -37 80 -71 121 -133 162
  -89 60 -198 79 -296 52z m155 -158 c60 -18 120 -83 135 -146 31 -129 -52 -242
  -183 -250 -124 -8 -216 77 -216 199 0 94 49 163 139 195 46 17 74 17 125 2z"></path>
  <path d="M683 3790 c-114 -17 -237 -100 -296 -201 -14 -24 -106 -237 -203
  -474 -175 -423 -178 -431 -178 -505 -1 -61 4 -86 26 -133 38 -80 114 -158 191
  -193 54 -25 74 -29 152 -29 81 0 97 3 155 32 36 18 82 49 103 71 l37 38 44
  -42 c24 -23 70 -54 102 -70 52 -26 70 -29 154 -29 84 0 102 3 154 29 32 16 78
  47 102 70 l44 42 37 -38 c21 -22 67 -53 103 -71 58 -29 74 -32 155 -32 81 0
  97 3 155 32 36 18 82 49 103 71 l37 38 44 -42 c24 -23 70 -54 102 -70 52 -26
  70 -29 154 -29 84 0 102 3 154 29 32 16 78 47 102 70 l44 42 37 -38 c53 -54
  146 -98 222 -105 55 -5 64 -3 86 17 55 52 17 140 -59 140 -80 0 -172 75 -196
  160 -5 19 -17 160 -25 314 -18 324 -20 331 -95 331 -34 0 -47 -5 -62 -25 -18
  -25 -18 -34 -4 -295 9 -155 12 -285 7 -305 -42 -181 -250 -241 -368 -107 -65
  74 -65 82 -35 647 l27 505 125 3 c111 2 127 5 147 24 42 39 26 106 -31 128
  -32 12 -1470 12 -1553 0z m189 -155 c3 -3 -57 -218 -134 -478 -76 -259 -143
  -501 -148 -537 -15 -91 -52 -147 -120 -183 -48 -25 -63 -28 -114 -24 -79 7
  -131 43 -169 117 -21 40 -27 65 -24 90 7 50 341 856 374 904 39 55 100 96 159
  105 56 10 168 13 176 6z m491 -2 c2 -5 -36 -222 -84 -483 -48 -261 -88 -487
  -88 -501 -2 -49 -32 -130 -64 -166 -118 -134 -326 -74 -368 107 -7 29 14 112
  132 520 77 267 144 495 149 508 9 21 13 22 164 22 85 0 157 -3 159 -7z m470 0
  c2 -5 -9 -242 -25 -528 -28 -510 -29 -521 -54 -573 -61 -125 -207 -160 -320
  -76 -39 29 -84 116 -84 162 0 27 131 771 171 970 l10 52 149 0 c82 0 151 -3
  153 -7z"></path>
  <path d="M406 2159 l-26 -20 0 -1045 0 -1045 25 -24 24 -25 1731 0 1731 0 24
  25 25 24 0 621 c0 607 0 620 -20 640 -30 30 -83 30 -115 -1 -19 -19 -20 -35
  -23 -584 l-2 -565 -1620 0 -1620 0 0 975 c0 837 -2 980 -15 1004 -24 46 -74
  55 -119 20z"></path>
  <path d="M1429 1845 c-175 -43 -327 -176 -389 -341 -34 -93 -40 -189 -40 -715
  0 -511 3 -549 40 -569 32 -17 75 -11 98 13 l22 23 0 525 c0 295 4 550 10 584
  21 131 105 242 228 302 50 24 69 27 157 28 93 0 105 -2 167 -33 84 -41 167
  -128 200 -209 23 -58 23 -59 28 -631 l5 -574 24 -19 c30 -24 72 -24 102 0 l24
  19 3 551 c2 448 0 563 -12 619 -53 256 -283 444 -541 441 -38 0 -95 -7 -126
  -14z"></path>
  <path d="M2512 1635 c-18 -8 -37 -26 -42 -40 -6 -16 -10 -174 -10 -391 0 -383
  3 -412 45 -428 9 -3 230 -6 491 -6 l475 0 24 25 25 24 0 385 0 385 -24 28 -24
  28 -464 2 c-384 2 -469 0 -496 -12z m846 -427 l2 -278 -370 0 -370 0 0 273 c0
  151 3 277 7 280 4 4 169 6 367 5 l361 -3 3 -277z"></path>
  <path d="M1654 868 c-24 -11 -44 -48 -44 -79 0 -31 44 -69 80 -69 39 0 80 39
  80 75 0 31 -50 85 -77 84 -10 0 -28 -5 -39 -11z"></path>
  <path d="M2395 651 c-51 -21 -65 -91 -25 -131 20 -20 33 -20 619 -20 570 0
  600 1 622 19 31 25 32 83 1 114 l-23 22 -587 2 c-323 1 -596 -2 -607 -6z"></path>
  </g>
  </svg>
     <span class="fenix-bopis-line-1-text"> </span>
  </div>
  <div class="store-divs">
     <div class="">
        <span class="fenix-bopis-line-2-text"> </span>
        <a href="javascript:void(0);" id="show-details-link" class="show-details-link" onclick="showStoreinfo()">Show Details</a>
        <div class="fenix-provided-options-shop" style="display: none;">
           <div class="popuptext">
              <h2 class="shipping-options-title">
                 Pick up details <a onclick="$('.fenix-provided-options-shop').hide()" class="fenix-right-align closeshipping"></a>
              </h2>
              <div class="store-info-address">
                <p><span class="fenix-store-city"></span><span class="fenix-store-address"></span></p>
              </div>
              <table>
                 <thead>
                    <tr>
                       <th colspan="2">Pickup Hours</th>
                    </tr>
                 </thead>
                 <tbody class="fenix-bopis-store-timings">
                   
                 </tbody>
              </table>
           </div>
        </div>
     </div>
  </div>
</div>

        </div>`;
    
    $('.fenix-fixd-delivery-id').html(pdphtml);
    
   if (jQuery("#fenix-estimates").length > 0) {
       if (zipcode !== undefined && zipcode !== null && zipcode !== '' && 
            $(".fenix-fixd-delivery-id").length > 0  && 
            $(".fenix-cart-delivery-msg").length == 0 ) {
           getPDPEstimate(); // initiate Fenix 
       } else {
           setZipcode('pdp');
       }
   }
   



    // Tirgger form change event 
    $("#shippingZipCodedefault").on("change", function(){
         $('#shippingStatedefault').trigger('change');
    });
    

});


function ___fenixRecallApi(requestData) {
   jQuery.ajax({
       url: "https://delest-api.fenixcommerce.com/fenixdelest/api/v3/deliveryestimates",
       type: "POST",
       headers: {
           tenantId: "5075a60d701746ca80de05c8bd4b253d",
           'Content-Type': 'application/json'
       },
       data: JSON.stringify(requestData),
       success: function(data) {
           let message = '';
           let chooseShippingMsg = '';
           let truckSvg = `<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4394 5.69627C22.2092 5.20095 21.8533 4.78434 21.4122 4.49369C20.971 4.20304 20.4623 4.05 19.9437 4.05193H15.9807V0.872088C15.9807 0.801317 15.9676 0.731238 15.9422 0.665856C15.9168 0.600474 15.8795 0.541068 15.8326 0.491031C15.7856 0.440994 15.7299 0.401307 15.6685 0.374235C15.6072 0.347163 15.5414 0.333238 15.475 0.333253H3.16636C3.09988 0.333091 3.03402 0.346908 2.97255 0.373914C2.91109 0.40092 2.85522 0.440585 2.80816 0.490637C2.76109 0.540689 2.72375 0.600144 2.69828 0.6656C2.6728 0.731055 2.65969 0.801225 2.65969 0.87209C2.65969 0.942955 2.6728 1.01312 2.69828 1.07858C2.72375 1.14404 2.76109 1.20349 2.80816 1.25354C2.85522 1.30359 2.91109 1.34326 2.97255 1.37027C3.03402 1.39727 3.09988 1.41109 3.16636 1.41093H14.9694V14.3095H9.77285C9.65579 13.6676 9.33291 13.0892 8.85957 12.6733C8.38623 12.2574 7.79191 12.0299 7.17849 12.0299C6.56506 12.0299 5.97074 12.2574 5.4974 12.6733C5.02406 13.0892 4.70119 13.6676 4.58412 14.3095H2.90029C2.83381 14.3093 2.76795 14.3231 2.70648 14.3501C2.64502 14.3772 2.58915 14.4168 2.54209 14.4669C2.49502 14.5169 2.45768 14.5764 2.43221 14.6418C2.40673 14.7073 2.39362 14.7775 2.39362 14.8483C2.39362 14.9192 2.40673 14.9894 2.43221 15.0548C2.45768 15.1203 2.49502 15.1797 2.54209 15.2298C2.58915 15.2798 2.64502 15.3195 2.70648 15.3465C2.76795 15.3735 2.83381 15.3873 2.90029 15.3872H4.58412C4.70122 16.029 5.0241 16.6074 5.49744 17.0233C5.97077 17.4392 6.56508 17.6666 7.17849 17.6666C7.79189 17.6666 8.3862 17.4392 8.85953 17.0233C9.33287 16.6074 9.65576 16.029 9.77285 15.3872H16.6218C16.7389 16.029 17.0618 16.6074 17.5351 17.0233C18.0085 17.4392 18.6028 17.6666 19.2162 17.6666C19.8296 17.6666 20.4239 17.4392 20.8972 17.0233C21.3705 16.6074 21.6934 16.029 21.8105 15.3872H23.4944C23.5608 15.3872 23.6265 15.3732 23.6878 15.3462C23.7492 15.3191 23.8049 15.2794 23.8519 15.2294C23.8988 15.1793 23.9361 15.1199 23.9615 15.0546C23.9869 14.9892 24 14.9191 24 14.8483V9.14962C23.9999 9.06596 23.9816 8.98346 23.9465 8.90866L22.4394 5.69627ZM7.17849 16.5889C6.8555 16.589 6.53975 16.4869 6.27118 16.2957C6.0026 16.1044 5.79326 15.8326 5.66964 15.5145C5.54601 15.1964 5.51365 14.8464 5.57664 14.5088C5.63963 14.1711 5.79515 13.8609 6.02353 13.6175C6.2519 13.374 6.54288 13.2082 6.85966 13.141C7.17645 13.0739 7.5048 13.1083 7.8032 13.2401C8.10161 13.3718 8.35666 13.595 8.53609 13.8812C8.71553 14.1675 8.8113 14.504 8.81129 14.8483C8.8108 15.3098 8.63862 15.7522 8.33252 16.0785C8.02642 16.4048 7.61139 16.5884 7.17849 16.5889ZM19.9437 5.12962C20.2744 5.12839 20.5988 5.22596 20.8801 5.41128C21.1614 5.59659 21.3883 5.86223 21.5352 6.17805L22.9887 9.27688V9.64732H15.9807V5.12962H19.9437ZM19.2162 16.5889C18.8932 16.589 18.5774 16.4869 18.3089 16.2957C18.0403 16.1044 17.8309 15.8326 17.7073 15.5145C17.5837 15.1964 17.5513 14.8464 17.6143 14.5088C17.6773 14.1711 17.8328 13.8609 18.0612 13.6175C18.2896 13.374 18.5806 13.2082 18.8973 13.141C19.2141 13.0739 19.5425 13.1083 19.8409 13.2401C20.1393 13.3718 20.3943 13.595 20.5738 13.8812C20.7532 14.1675 20.849 14.504 20.849 14.8483C20.8485 15.3098 20.6763 15.7522 20.3702 16.0785C20.0641 16.4048 19.6491 16.5884 19.2162 16.5889ZM21.8105 14.3095C21.6935 13.6676 21.3706 13.0892 20.8973 12.6733C20.4239 12.2574 19.8296 12.0299 19.2162 12.0299C18.6027 12.0299 18.0084 12.2574 17.5351 12.6733C17.0617 13.0892 16.7389 13.6676 16.6218 14.3095H15.9807V10.725H22.9887V14.3095H21.8105ZM1.92902 4.44411H9.16389C9.23037 4.44395 9.29623 4.45777 9.3577 4.48477C9.41916 4.51178 9.47503 4.55144 9.52209 4.6015C9.56916 4.65155 9.6065 4.711 9.63197 4.77646C9.65745 4.84191 9.67056 4.91208 9.67056 4.98295C9.67056 5.05382 9.65745 5.12398 9.63197 5.18944C9.6065 5.2549 9.56916 5.31435 9.52209 5.3644C9.47503 5.41445 9.41916 5.45412 9.3577 5.48113C9.29623 5.50813 9.23037 5.52195 9.16389 5.52179H1.92902C1.86254 5.52195 1.79668 5.50813 1.73521 5.48113C1.67375 5.45412 1.61788 5.41445 1.57082 5.3644C1.52376 5.31435 1.48642 5.2549 1.46094 5.18944C1.43546 5.12398 1.42235 5.05382 1.42235 4.98295C1.42235 4.91208 1.43546 4.84191 1.46094 4.77646C1.48642 4.711 1.52376 4.65155 1.57082 4.6015C1.61788 4.55144 1.67375 4.51178 1.73521 4.48477C1.79668 4.45777 1.86254 4.44395 1.92902 4.44411ZM0 8.79289C2.80023e-06 8.72212 0.0130845 8.65204 0.0384979 8.58666C0.0639113 8.52127 0.101159 8.46187 0.148113 8.41183C0.195067 8.3618 0.250808 8.32211 0.312153 8.29504C0.373498 8.26797 0.439246 8.25404 0.50564 8.25406H6.76925C6.83573 8.25389 6.90159 8.26771 6.96305 8.29472C7.02452 8.32172 7.08038 8.36139 7.12745 8.41144C7.17451 8.46149 7.21185 8.52095 7.23733 8.5864C7.2628 8.65186 7.27592 8.72203 7.27592 8.79289C7.27592 8.86376 7.2628 8.93393 7.23733 8.99938C7.21185 9.06484 7.17451 9.12429 7.12745 9.17435C7.08038 9.2244 7.02452 9.26406 6.96305 9.29107C6.90159 9.31807 6.83573 9.33189 6.76925 9.33173H0.50564C0.439245 9.33175 0.373497 9.31782 0.312151 9.29075C0.250806 9.26367 0.195064 9.22399 0.14811 9.17395C0.101156 9.12391 0.0639085 9.0645 0.0384955 8.99912C0.0130826 8.93374 1.74955e-06 8.86366 0 8.79289Z" fill="black"/></svg>`;
            let buyerZipCode = "";
            if( data.eddResponses !== undefined && data.eddResponses.length>0 ){
                message = truckSvg+data.eddResponses[0].response;
                buyerZipCode = data.eddResponses[0].buyerZipCode;
                chooseShippingMsg += `<strong>${buyerZipCode}</strong>`;
            }else if (data && data.length > 0 && data[data.length - 1].guaranteedDeliveryDate) {
               message = truckSvg+data[0].response;
               buyerZipCode = data[data.length-1].buyerZipCode;
               chooseShippingMsg += `<strong>${buyerZipCode}</strong>`;
           }
           
           let shippingRows = ``;
           if (data.eddResponses && data.eddResponses.length > 1) {
               for (let dIndx = 0; dIndx < data.eddResponses.length; dIndx++) {
                   let shippingOption = data.eddResponses[dIndx];
                   shippingRows += `<tr style="border-bottom:1px solid #ddd;font-size:12px"><td>${shippingOption.shippingMethodDesc}</td><td class="text-right">${shippingOption.guaranteedDeliveryDate}.</td></tr>`
               }
               getShippingPopoverTemplate(shippingRows);
           }else if (data && data.length > 1) {
               for (let dIndx = 0; dIndx < data.length; dIndx++) {
                   let shippingOption = data[dIndx];
                   shippingRows += `<tr style="border-bottom:1px solid #ddd;font-size:12px"><td>${shippingOption.shippingMethodDesc}</td><td class="text-right">${shippingOption.guaranteedDeliveryDate}.</td></tr>`
               }
               getShippingPopoverTemplate(shippingRows);
           } else {
               jQuery("#view-all-shipping").hide();
           }


           // Bopis setups
           jQuery("#fenix-store-response").hide();

           if( data.pickFromStoreResponse != undefined 
              && data.pickFromStoreResponse != null 
              && data.pickFromStoreResponse.storeInfos != undefined 
              && data.pickFromStoreResponse.storeInfos.length > 0 
              && data.pickFromStoreResponse.storeInfos[0].workingHours != undefined
            ){
            let workingHoursArray = data.pickFromStoreResponse.storeInfos[0].workingHours;
            let keysof = Object.keys(workingHoursArray);
            let workingHours = "";
            keysof.forEach(element => {
             workingHours +=  `<tr>
                        <td>${element}</td>
                        <td class="fenix-center">${workingHoursArray[element]}</td>
                    </tr>`;
            });

            jQuery(".fenix-bopis-store-timings").html(workingHours);

            jQuery(".fenix-bopis-line-1-text").text(data.pickFromStoreResponse.storeInfos[0].pickUpTitle);
            jQuery(".fenix-bopis-line-2-text").text(data.pickFromStoreResponse.storeInfos[0].pickUpDescription);
            jQuery("#show-details-link").show();
           }

           if( data.pickFromStoreResponse != undefined  
            && data.pickFromStoreResponse != null 
            && data.pickFromStoreResponse.storeInfos !== undefined && 
              data.pickFromStoreResponse.storeInfos.length > 0){
            jQuery(".fenix-bopis-line-1-text").text(data.pickFromStoreResponse.storeInfos[0].pickUpTitle);
            jQuery(".fenix-bopis-line-2-text").text(data.pickFromStoreResponse.storeInfos[0].pickUpDescription);
            jQuery(".fenix-store-city-js").text(data.pickFromStoreResponse.storeInfos[0].address.address1+" "+data.pickFromStoreResponse.storeInfos[0].address.address2);
            jQuery(".fenix-store-address-js").text(data.pickFromStoreResponse.storeInfos[0].address.city);

            jQuery("#fenix-store-response").show();

           }


           jQuery('#estimate-text').html(message);
           jQuery('#zipcode-holder').html(chooseShippingMsg);
           jQuery('#fenix-zip').val(buyerZipCode);
           jQuery('#fenix-pdp-estimate').show();
           jQuery('.estimate-help-text').hide();
           jQuery('#change-zip-container').hide();
           jQuery('#fenix-estimates').attr("style", "display: block !important;");

           jQuery('#fenix-error-message').hide();
           jQuery('#fenix-zip').keydown(function (e) {
                if (e.keyCode == 13) {
                    e.preventDefault();
                    return false;
                }
            });


           if( data.eddResponses !== undefined && data.eddResponses.length == 0 ){
                jQuery('#fenix-pdp-estimate').show();
                jQuery('#fenix-estimates').attr("style", "display: block !important;");
                jQuery("#fenix-error-message>.fenix-error-text").text("Unable to get estimated delivery date");
                jQuery('#fenix-error-message').show();
           }

           if( data !== undefined && data.length == 0 ){
                jQuery('#fenix-pdp-estimate').show();
                jQuery('#fenix-estimates').attr("style", "display: block !important;");
                jQuery("#fenix-error-message>.fenix-error-text").text("Unable to get estimated delivery date");
                jQuery('#fenix-error-message').show();
           }


       },
       error: function(e) {
           if(e.responseJSON.error_code == 400 ){
            jQuery("#view-all-shipping").hide();
            jQuery('#fenix-pdp-estimate').show();
            jQuery('#fenix-estimates').attr("style", "display: block !important;");
            jQuery('#fenix-error-message').show();
            jQuery("#fenix-error-message>.fenix-error-text").text(e.responseJSON.error_message);
           }

           if(e.responseJSON.error_code == 600 ){
            jQuery('#fenix-pdp-estimate').hide();
            jQuery('#fenix-estimates').attr("style", "display: none !important;");
            jQuery('#fenix-error-message').hide();
            jQuery("#fenix-error-message>.fenix-error-text").text("");
           }

       }
   });
}




function fenixVariantChange(){
  $( document ).ajaxComplete(function( event, xhr, settings ) {
    if(  settings.url.indexOf("Product-Variation") > -1 && xhr !== undefined && xhr.responseJSON !== undefined){
      let sku = xhr.responseJSON.product.id;
      let quantity = xhr.responseJSON.product.selectedQuantity;
      requestData.skus[0].sku = sku;
      requestData.skus[0].quantity = quantity;
      setTimeout(function() {
        ___fenixRecallApi(requestData);
      }, 100);
    }
  });
}


// Fenix cart page request
function ___fenixCartRequest(cartRequest) {
   jQuery.ajax({
       url: "https://delest-api.fenixcommerce.com/fenixdelest/api/v3/deliveryestimates",
       type: "POST",
       headers: {
           tenantId: "5075a60d701746ca80de05c8bd4b253d",
           'Content-Type': 'application/json'
       },
       data: JSON.stringify(cartRequest),
       success: function(data) {
           let message = '';
           let truckSvg = `<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4394 5.69627C22.2092 5.20095 21.8533 4.78434 21.4122 4.49369C20.971 4.20304 20.4623 4.05 19.9437 4.05193H15.9807V0.872088C15.9807 0.801317 15.9676 0.731238 15.9422 0.665856C15.9168 0.600474 15.8795 0.541068 15.8326 0.491031C15.7856 0.440994 15.7299 0.401307 15.6685 0.374235C15.6072 0.347163 15.5414 0.333238 15.475 0.333253H3.16636C3.09988 0.333091 3.03402 0.346908 2.97255 0.373914C2.91109 0.40092 2.85522 0.440585 2.80816 0.490637C2.76109 0.540689 2.72375 0.600144 2.69828 0.6656C2.6728 0.731055 2.65969 0.801225 2.65969 0.87209C2.65969 0.942955 2.6728 1.01312 2.69828 1.07858C2.72375 1.14404 2.76109 1.20349 2.80816 1.25354C2.85522 1.30359 2.91109 1.34326 2.97255 1.37027C3.03402 1.39727 3.09988 1.41109 3.16636 1.41093H14.9694V14.3095H9.77285C9.65579 13.6676 9.33291 13.0892 8.85957 12.6733C8.38623 12.2574 7.79191 12.0299 7.17849 12.0299C6.56506 12.0299 5.97074 12.2574 5.4974 12.6733C5.02406 13.0892 4.70119 13.6676 4.58412 14.3095H2.90029C2.83381 14.3093 2.76795 14.3231 2.70648 14.3501C2.64502 14.3772 2.58915 14.4168 2.54209 14.4669C2.49502 14.5169 2.45768 14.5764 2.43221 14.6418C2.40673 14.7073 2.39362 14.7775 2.39362 14.8483C2.39362 14.9192 2.40673 14.9894 2.43221 15.0548C2.45768 15.1203 2.49502 15.1797 2.54209 15.2298C2.58915 15.2798 2.64502 15.3195 2.70648 15.3465C2.76795 15.3735 2.83381 15.3873 2.90029 15.3872H4.58412C4.70122 16.029 5.0241 16.6074 5.49744 17.0233C5.97077 17.4392 6.56508 17.6666 7.17849 17.6666C7.79189 17.6666 8.3862 17.4392 8.85953 17.0233C9.33287 16.6074 9.65576 16.029 9.77285 15.3872H16.6218C16.7389 16.029 17.0618 16.6074 17.5351 17.0233C18.0085 17.4392 18.6028 17.6666 19.2162 17.6666C19.8296 17.6666 20.4239 17.4392 20.8972 17.0233C21.3705 16.6074 21.6934 16.029 21.8105 15.3872H23.4944C23.5608 15.3872 23.6265 15.3732 23.6878 15.3462C23.7492 15.3191 23.8049 15.2794 23.8519 15.2294C23.8988 15.1793 23.9361 15.1199 23.9615 15.0546C23.9869 14.9892 24 14.9191 24 14.8483V9.14962C23.9999 9.06596 23.9816 8.98346 23.9465 8.90866L22.4394 5.69627ZM7.17849 16.5889C6.8555 16.589 6.53975 16.4869 6.27118 16.2957C6.0026 16.1044 5.79326 15.8326 5.66964 15.5145C5.54601 15.1964 5.51365 14.8464 5.57664 14.5088C5.63963 14.1711 5.79515 13.8609 6.02353 13.6175C6.2519 13.374 6.54288 13.2082 6.85966 13.141C7.17645 13.0739 7.5048 13.1083 7.8032 13.2401C8.10161 13.3718 8.35666 13.595 8.53609 13.8812C8.71553 14.1675 8.8113 14.504 8.81129 14.8483C8.8108 15.3098 8.63862 15.7522 8.33252 16.0785C8.02642 16.4048 7.61139 16.5884 7.17849 16.5889ZM19.9437 5.12962C20.2744 5.12839 20.5988 5.22596 20.8801 5.41128C21.1614 5.59659 21.3883 5.86223 21.5352 6.17805L22.9887 9.27688V9.64732H15.9807V5.12962H19.9437ZM19.2162 16.5889C18.8932 16.589 18.5774 16.4869 18.3089 16.2957C18.0403 16.1044 17.8309 15.8326 17.7073 15.5145C17.5837 15.1964 17.5513 14.8464 17.6143 14.5088C17.6773 14.1711 17.8328 13.8609 18.0612 13.6175C18.2896 13.374 18.5806 13.2082 18.8973 13.141C19.2141 13.0739 19.5425 13.1083 19.8409 13.2401C20.1393 13.3718 20.3943 13.595 20.5738 13.8812C20.7532 14.1675 20.849 14.504 20.849 14.8483C20.8485 15.3098 20.6763 15.7522 20.3702 16.0785C20.0641 16.4048 19.6491 16.5884 19.2162 16.5889ZM21.8105 14.3095C21.6935 13.6676 21.3706 13.0892 20.8973 12.6733C20.4239 12.2574 19.8296 12.0299 19.2162 12.0299C18.6027 12.0299 18.0084 12.2574 17.5351 12.6733C17.0617 13.0892 16.7389 13.6676 16.6218 14.3095H15.9807V10.725H22.9887V14.3095H21.8105ZM1.92902 4.44411H9.16389C9.23037 4.44395 9.29623 4.45777 9.3577 4.48477C9.41916 4.51178 9.47503 4.55144 9.52209 4.6015C9.56916 4.65155 9.6065 4.711 9.63197 4.77646C9.65745 4.84191 9.67056 4.91208 9.67056 4.98295C9.67056 5.05382 9.65745 5.12398 9.63197 5.18944C9.6065 5.2549 9.56916 5.31435 9.52209 5.3644C9.47503 5.41445 9.41916 5.45412 9.3577 5.48113C9.29623 5.50813 9.23037 5.52195 9.16389 5.52179H1.92902C1.86254 5.52195 1.79668 5.50813 1.73521 5.48113C1.67375 5.45412 1.61788 5.41445 1.57082 5.3644C1.52376 5.31435 1.48642 5.2549 1.46094 5.18944C1.43546 5.12398 1.42235 5.05382 1.42235 4.98295C1.42235 4.91208 1.43546 4.84191 1.46094 4.77646C1.48642 4.711 1.52376 4.65155 1.57082 4.6015C1.61788 4.55144 1.67375 4.51178 1.73521 4.48477C1.79668 4.45777 1.86254 4.44395 1.92902 4.44411ZM0 8.79289C2.80023e-06 8.72212 0.0130845 8.65204 0.0384979 8.58666C0.0639113 8.52127 0.101159 8.46187 0.148113 8.41183C0.195067 8.3618 0.250808 8.32211 0.312153 8.29504C0.373498 8.26797 0.439246 8.25404 0.50564 8.25406H6.76925C6.83573 8.25389 6.90159 8.26771 6.96305 8.29472C7.02452 8.32172 7.08038 8.36139 7.12745 8.41144C7.17451 8.46149 7.21185 8.52095 7.23733 8.5864C7.2628 8.65186 7.27592 8.72203 7.27592 8.79289C7.27592 8.86376 7.2628 8.93393 7.23733 8.99938C7.21185 9.06484 7.17451 9.12429 7.12745 9.17435C7.08038 9.2244 7.02452 9.26406 6.96305 9.29107C6.90159 9.31807 6.83573 9.33189 6.76925 9.33173H0.50564C0.439245 9.33175 0.373497 9.31782 0.312151 9.29075C0.250806 9.26367 0.195064 9.22399 0.14811 9.17395C0.101156 9.12391 0.0639085 9.0645 0.0384955 8.99912C0.0130826 8.93374 1.74955e-06 8.86366 0 8.79289Z" fill="black"/></svg>`;
          
          if(data && data.eddResponses !== undefined && data.eddResponses.length > 0){
             message = truckSvg + data.eddResponses[0].response;
             $(".fenix-cart-delivery-msg").html(message);
          }
         
       },
       error: function(e) {
           $(".fenix-cart-delivery-msg").hide();
       }
   });
}

let cartRequest = {
    "buyerAddress": {
        "country": getCookie("fenixcountry"),
        "zipcode": getCookie("location"),
    },
    "carbonNeutralShipping": "true",
    "_cartToken": "no-token",
    "orderId": "no-token",
    "buyerZipCode": getCookie("location"),
    "monetaryValue": 100,
    "pageType": "cart",
    "responseFormat": "json",
    "skus": []
};

$.each( $(".fenix-line-items") , function( index, value ) {
  let id = $(value).attr('productid');
  let quantity = parseInt($(value).attr('quantity'));

  let sku = {
          "quantity": quantity,
          "sku": "gold-bird-necklace",
          "variantid": "",
          "productid": id,
          "skuInventories": [{
              "locationId": "manual",
              "quantity": quantity
          }]
      }

    cartRequest.skus.push(sku);
});

if( window.location.href.indexOf("/cart") > -1 && $(".fenix-cart-delivery-msg").length > 0 ){
    ___fenixCartRequest(cartRequest);
}