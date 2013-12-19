---
---

{% capture le_js %}
/*                  *\
 * $jquery-2.0.3.js *
\*                  */
{% include js/jquery-2.0.3.min.js %}
/*                  *\
 * $ratchet.js *
\*                  */
{% include js/ratchet.js %}
{% endcapture %}

{% if site.GH_ENV %}
  {{ le_js | strip_newlines | remove: '  ' }}
{% else %}
  {{ le_js }}
{% endif %}
