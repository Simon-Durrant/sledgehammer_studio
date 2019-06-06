herbyCookie
=====

 > An easy jQuery plugin asking at user for cookie consent.
 
Demo
====

There is a [Demo](http://paolobasso99.github.io/herbyCookie/).

Installation
====

Include the files
----

    // jQuery
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    // herbyCookie.js
    <script type="text/javascript" src="js/herbyCookie.min.js"></script>

Start the plugin
----

    $(document).ready(function(){
      $(document).herbyCookie({
        // Options
      });
    });

Personalize the options
====

style
----

    style: "dark",

Change the color style of herbyCookie.

Value: "dark" or "light".

btnText
----

    btnText: "Got it!",

Change the text of the "OK" button.

Value: "string".

policyText
----

    policyText: "Privacy policy",

Change the text of the link.

Value: "string".

text
----

    text: "We use cookies to ensure you get the best experience on our website, if you continue to browse you'll be acconsent with our",

Change the text.

Value: "string".

scroll
----

    scroll: false,

Auot-accept on scroll.

Value: bool.

link
----

    link: "/policy.html",

Change the link.

Value: "string".

expireDays
----

    expireDays: 30,

Set expiration time.

Value: number.

Donations
====

If you like herbyCookie and you want to pay me a coffe there are the [Donations :)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SGJSBFTLA6M66) (only for realy cool people).

Copyright
====

herbyCookie is released under the [MIT License](https://opensource.org/licenses/MIT).

If you use hebyCookie you agree with our [Terms of Service](https://github.com/paolobasso99/herbyCookie/blob/master/TermsOfService.md).

Copyright © Paolo Basso.
