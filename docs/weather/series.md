[Home](../index) | [Weather](index)

List of Series ID and Name
==========================

When specifying a series the series Id should be used as the parameter value.  The list of series ID and name is:

<div id="spinner"></div>
<div id="series"></div>

<script src="../js/spin.min.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../js/script.js"></script>
<script>

var spinner = new Spinner().spin();
$("#spinner").append(spinner.el);

$.get("https://api.aims.gov.au/data/v1.0/10.25845/5c09bf93f315d/series")
.done(function(data) {
    spinner.stop();
    populateSeries(data);
});

</script>
