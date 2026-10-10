import Script from "next/script";
import { GOOGLE_ADS_ID, GTM_ID } from "@/lib/analytics";
import { CONSENT_STORAGE_KEY } from "@/lib/consent";

/**
 * Google Consent Mode v2 starts with everything denied and is upgraded straight away
 * when the visitor previously accepted, before Tag Manager loads.
 */
const bootstrap = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)})==='granted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}
gtag('js',new Date());
gtag('config',${JSON.stringify(GOOGLE_ADS_ID)});
(function(w,d,s,l,i){w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(GTM_ID)});
`;

export function GoogleTagManager() {
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {bootstrap}
      </Script>
      <Script
        id="google-ads-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}

export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        title="Google Tag Manager"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
