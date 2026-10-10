# Google Tag Manager setup

The site loads Tag Manager container `GTM-5WJ8TVNS` (override with `NEXT_PUBLIC_GTM_ID`) with
Google Consent Mode v2: all storage is denied until the visitor accepts the cookie banner.

## Importing the container

`arcta-gtm-container.json` holds the GA4 configuration tag (`G-T9K4JPZ5EN`), the event tags,
the triggers and the data layer variables.

1. Tag Manager > Admin > Import Container.
2. Choose the file, pick the existing workspace, and select **Merge > Rename conflicting tags**.
3. Preview in Tag Manager, then Submit and Publish.

## Data layer events pushed by the site

| Event | When | Useful parameters |
| --- | --- | --- |
| `quote_form_submit` | Quote form sent successfully | `service`, `form_source` |
| `proposal_form_submit` | Property manager proposal sent | `service`, `form_source` |
| `whatsapp_click` | Any WhatsApp link tapped | `link_text`, `page_path` |
| `call_click` | Any `tel:` link tapped | `link_text`, `page_path` |
| `quote_cta_click` | Any "Get a free quote" link tapped | `link_text`, `page_path` |

Every event also carries `lead_channel`, `lead_source`, `lead_medium`, `lead_campaign`,
`lead_landing_page` and `lead_summary`, taken from the visit's UTM tags, ad click ID or referrer.
The same summary is added to quote and proposal emails as "Lead source".

## After importing

- GA4 > Admin > Events: mark `generate_lead`, `whatsapp_click` and `call_click` as key events.
- GA4 > Admin > Custom definitions: add event-scoped dimensions for `lead_channel`,
  `lead_campaign` and `service` to report on them.
- Google Ads: add a conversion tag in Tag Manager triggered by `Event - quote_form_submit`.
