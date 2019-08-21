[Home](../index) | [Weather](index)

List of Sites
=============

The list of sites is:

<div id="spinner"></div>
<div id="sites"></div>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../js/script.js"></script>
<script>

var spinner = new Spinner().spin();
$("#spinner").append(spinner.el);

$.get("https://api.aims.gov.au/data/v1.0/10.25845/5c09bf93f315d/sites")
.done(function(data) {
    spinner.stop();
    populateSites(data);
    });

</script>
